type SecurityConfig = {
  algorithm: string;
  iterations: number;
  salt: string;
  hash: string;
};

type ChangePasswordInput = {
  oldPassword: string;
  newPassword: string;
  token: string;
  branch: string;
};

type BlogEntry = {
  path: string;
  slug: string;
  lang: string;
};

type ServiceOptions = {
  repoOwner: string;
  repoName: string;
  securityPath: string;
  securityUrl: string;
  fallbackSecurityConfig?: SecurityConfig;
};

const defaultFallbackSecurityConfig: SecurityConfig = {
  algorithm: "PBKDF2-SHA256",
  iterations: 150000,
  salt: "sZPlZ007W2b7Jl5bq4HwKA==",
  hash: "Y8U44x/bJKZkj056F/Ot0JVT0fs0rZS+xIsVE7dY/6Q=",
};

function toBase64(bytes: Uint8Array): string {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function fromBase64(base64: string): Uint8Array {
  return Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
}

async function hashPassword(password: string, saltBase64: string, iterations: number): Promise<string> {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
        salt: fromBase64(saltBase64) as unknown as BufferSource,
      iterations,
    },
    keyMaterial,
    256,
  );

  return toBase64(new Uint8Array(bits));
}

function encodeUtf8ToBase64(content: string): string {
  return btoa(unescape(encodeURIComponent(content)));
}

export function decodeFileContent(raw: string): string {
  return decodeURIComponent(escape(atob((raw || "").replace(/\n/g, ""))));
}

export function parseFriendLinksFromTs(content: string) {
  const matched = content.match(/const\s+friendLinks:\s*FriendLink\[\]\s*=\s*(\[[\s\S]*?\])\s*\n\s*export\s+default\s+friendLinks/);
  if (!matched?.[1]) throw new Error("无法解析友链文件");
  return JSON.parse(matched[1]);
}

export function buildFriendLinksTs(friendLinks: unknown[]): string {
  return `import type { FriendLink } from "@/types/friend"\n\nconst friendLinks: FriendLink[] = ${JSON.stringify(friendLinks, null, 2)}\n\nexport default friendLinks\n`;
}

export function parseHeaderContactFromTs(content: string) {
  const matched = content.match(/const\s+headerContact:\s*HeaderContact\s*=\s*(\{[\s\S]*?\})\s*\n\s*export\s+default\s+headerContact/);
  if (!matched?.[1]) throw new Error("无法解析联系方式文件");
  return JSON.parse(matched[1]);
}

export function buildHeaderContactTs(contact: { githubUrl: string; email: string }): string {
  return `export type HeaderContact = {\n  githubUrl: string\n  email: string\n}\n\nconst headerContact: HeaderContact = ${JSON.stringify(contact, null, 2)}\n\nexport default headerContact\n`;
}

export function normalizeSlug(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[<>:"\\|?*#%{}\[\]^`~]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^-+|-+$/g, "");
}

export function buildPostMarkdown(data: {
  title: string;
  date: string;
  description: string;
  image: string;
  slugId: string;
  content: string;
}): string {
  const imageLine = data.image ? `image: ${data.image}\n` : "";
  return `---\ntitle: ${data.title}\npubDate: ${data.date}\ndraft: false\ndescription: ${data.description}\n${imageLine}slugId: ${data.slugId}\n---\n\n${data.content}\n`;
}

export function toIsoDateTime(dateTimeLocalValue: string): string {
  if (!dateTimeLocalValue) return "";
  const date = new Date(dateTimeLocalValue);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString();
}

export function getNowDateTimeLocal(): string {
  const now = new Date();
  now.setSeconds(0, 0);
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

export class AdminService {
  private repoOwner: string;
  private repoName: string;
  private securityPath: string;
  private securityUrl: string;
  private fallbackSecurityConfig: SecurityConfig;
  private securityConfig: SecurityConfig;

  constructor(options: ServiceOptions) {
    this.repoOwner = options.repoOwner;
    this.repoName = options.repoName;
    this.securityPath = options.securityPath;
    this.securityUrl = options.securityUrl;
    this.fallbackSecurityConfig = options.fallbackSecurityConfig || defaultFallbackSecurityConfig;
    this.securityConfig = this.fallbackSecurityConfig;
  }

  async loadSecurityConfig() {
    try {
      const response = await fetch(`${this.securityUrl}?t=${Date.now()}`);
      if (!response.ok) throw new Error("fetch failed");
      const json = await response.json();
      if (!json?.salt || !json?.hash || !json?.iterations) throw new Error("invalid config");
      this.securityConfig = json;
    } catch {
      this.securityConfig = this.fallbackSecurityConfig;
    }
  }

  async verifyPassword(password: string) {
    const hashed = await hashPassword(password, this.securityConfig.salt, this.securityConfig.iterations);
    return hashed === this.securityConfig.hash;
  }

  async changePassword(input: ChangePasswordInput) {
    const oldPassed = await this.verifyPassword(input.oldPassword);
    if (!oldPassed) {
      throw new Error("当前密码不正确");
    }
    if (input.newPassword.trim().length < 6) {
      throw new Error("新密码至少 6 位");
    }

    const saltBytes = new Uint8Array(16);
    crypto.getRandomValues(saltBytes);
    const salt = toBase64(saltBytes);
    const nextSecurity = {
      algorithm: "PBKDF2-SHA256",
      iterations: 180000,
      salt,
      hash: await hashPassword(input.newPassword.trim(), salt, 180000),
    };

    await this.upsertFile(this.securityPath, `${JSON.stringify(nextSecurity, null, 2)}\n`, "admin: update password hash", input.token, input.branch);

    this.securityConfig = nextSecurity;
    return nextSecurity;
  }

  async githubRequest(path: string, token: string, options: RequestInit = {}) {
    const res = await fetch(`https://api.github.com${path}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        ...(options.headers || {}),
      },
    });

    if (!res.ok) {
      const text = await res.text();
      let detail = text;
      try {
        const parsed = JSON.parse(text);
        detail = parsed?.message || text;
      } catch {
        detail = text;
      }
      throw new Error(`GitHub API 错误 ${res.status}: ${detail}`);
    }

    return res.status === 204 ? null : res.json();
  }

  async getFileMeta(repoPath: string, token: string, branch: string) {
    try {
      return await this.githubRequest(
        `/repos/${this.repoOwner}/${this.repoName}/contents/${encodeURIComponent(repoPath).replace(/%2F/g, "/")}?ref=${encodeURIComponent(branch)}`,
        token,
      );
    } catch (error) {
      if (String(error).includes("404")) return null;
      throw error;
    }
  }

  async upsertFile(repoPath: string, content: string, message: string, token: string, branch: string) {
    const meta = await this.getFileMeta(repoPath, token, branch);
    const body = {
      message,
      content: encodeUtf8ToBase64(content),
      branch,
      ...(meta?.sha ? { sha: meta.sha } : {}),
    };

    await this.githubRequest(`/repos/${this.repoOwner}/${this.repoName}/contents/${encodeURIComponent(repoPath).replace(/%2F/g, "/")}`, token, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  async deleteFile(repoPath: string, message: string, token: string, branch: string) {
    const meta = await this.getFileMeta(repoPath, token, branch);
    if (!meta?.sha) return false;

    await this.githubRequest(`/repos/${this.repoOwner}/${this.repoName}/contents/${encodeURIComponent(repoPath).replace(/%2F/g, "/")}`, token, {
      method: "DELETE",
      body: JSON.stringify({
        message,
        sha: meta.sha,
        branch,
      }),
    });

    return true;
  }

  async listFilesByPrefix(prefix: string, token: string, branch: string) {
    const tree = await this.githubRequest(`/repos/${this.repoOwner}/${this.repoName}/git/trees/${encodeURIComponent(branch)}?recursive=1`, token);
    const items = Array.isArray(tree?.tree) ? tree.tree : [];

    return items
      .filter((item: { type?: string; path?: string }) => item?.type === "blob" && typeof item?.path === "string" && item.path.startsWith(prefix))
      .map((item: { path: string }) => item.path);
  }

  async listBlogMarkdownEntries(token: string, branch: string): Promise<BlogEntry[]> {
    const files = await this.listFilesByPrefix("src/content/blog/", token, branch);
    const entries = files
      .map((path: string) => {
        const matched = path.match(/^src\/content\/blog\/(.+)\/(zh-cn|en)\.md$/);
        if (!matched) return null;
        return {
          path,
          slug: matched[1],
          lang: matched[2],
        };
      })
      .filter((entry: BlogEntry | null): entry is BlogEntry => Boolean(entry))
      .sort((a: BlogEntry, b: BlogEntry) => `${a.slug}/${a.lang}`.localeCompare(`${b.slug}/${b.lang}`));

    return entries;
  }
}
