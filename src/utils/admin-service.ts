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
  apiBaseUrl?: string;
  fallbackSecurityConfig?: SecurityConfig;
};

const defaultFallbackSecurityConfig: SecurityConfig = {
  algorithm: "PBKDF2-SHA256",
  iterations: 150000,
  salt: "sZPlZ007W2b7Jl5bq4HwKA==",
  hash: "Y8U44x/bJKZkj056F/Ot0JVT0fs0rZS+xIsVE7dY/6Q=",
};

class GitHubApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "GitHubApiError";
    this.status = status;
  }
}

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
  const bytes = new TextEncoder().encode(content);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

export function decodeFileContent(raw: string): string {
  const normalized = (raw || "").replace(/\n/g, "").trim();
  if (!normalized) return "";
  const binary = atob(normalized);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
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

export function parseAboutProfileFromTs(content: string) {
  const matched = content.match(/const\s+aboutProfile:\s*AboutProfile\s*=\s*(\{[\s\S]*?\})\s*\n\s*export\s+default\s+aboutProfile/);
  if (!matched?.[1]) throw new Error("无法解析关于特质文件");
  return JSON.parse(matched[1]);
}

export function buildAboutProfileTs(profile: {
  mbti: string;
  mbtiLink: string;
  major: string;
  majorLink: string;
  recentDoing: string;
  recentReading: string;
}) {
  return `export type AboutProfile = {\n  mbti: string\n  mbtiLink: string\n  major: string\n  majorLink: string\n  recentDoing: string\n  recentReading: string\n}\n\nconst aboutProfile: AboutProfile = ${JSON.stringify(profile, null, 2)}\n\nexport default aboutProfile\n`;
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
  category: string;
  slugId: string;
  content: string;
}): string {
  const imageLine = data.image ? `image: ${data.image}\n` : "";
  const categoryLine = data.category ? `category: ${data.category}\n` : "";
  return `---\ntitle: ${data.title}\npubDate: ${data.date}\ndraft: false\ndescription: ${data.description}\n${imageLine}${categoryLine}slugId: ${data.slugId}\n---\n\n${data.content}\n`;
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
  private apiBaseUrl: string;
  private fallbackSecurityConfig: SecurityConfig;
  private securityConfig: SecurityConfig;

  constructor(options: ServiceOptions) {
    this.repoOwner = options.repoOwner;
    this.repoName = options.repoName;
    this.securityPath = options.securityPath;
    this.securityUrl = options.securityUrl;
    this.apiBaseUrl = (options.apiBaseUrl || "https://api.github.com").replace(/\/+$/, "");
    this.fallbackSecurityConfig = options.fallbackSecurityConfig || defaultFallbackSecurityConfig;
    this.securityConfig = this.fallbackSecurityConfig;
  }

  private get encodedRepoOwner() {
    return encodeURIComponent(this.repoOwner);
  }

  private get encodedRepoName() {
    return encodeURIComponent(this.repoName);
  }

  private buildApiPath(path: string) {
    return path.startsWith("/") ? path : `/${path}`;
  }

  private buildRepoApiPath(path: string) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `/repos/${this.encodedRepoOwner}/${this.encodedRepoName}${normalized}`;
  }

  private getApiBaseCandidates() {
    const primary = this.apiBaseUrl;
    const fallback = "https://github.com/api/v3";
    if (primary === fallback) return [primary];
    return [primary, fallback];
  }

  private encodeRepoPath(repoPath: string) {
    return encodeURIComponent(repoPath).replace(/%2F/g, "/");
  }

  private formatGitHubErrorMessage(status: number, detail: string, path: string) {
    if (status === 401) return `GitHub 鉴权失败（401）：Token 无效或已过期。路径：${path}`;
    if (status === 403) return `GitHub 权限不足（403）：请确认 Token 具备仓库 Contents 读写权限。路径：${path}`;
    if (status === 404) return `GitHub 资源不存在（404）：${path}`;
    return `GitHub API 错误 ${status}：${detail}`;
  }

  private isNetworkError(error: unknown): boolean {
    return error instanceof Error && error.message.startsWith("网络请求失败（GitHub API）");
  }

  private async resolveBranchSha(token: string, branch: string): Promise<string> {
    const branchInfo = await this.githubRequest<{ commit?: { sha?: string } }>(
      `${this.buildRepoApiPath("/branches/")}${encodeURIComponent(branch)}`,
      token,
    );
    const sha = branchInfo?.commit?.sha;
    if (!sha) {
      throw new Error(`无法解析分支 ${branch} 的 commit SHA`);
    }
    return sha;
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

  async githubRequest<T = unknown>(path: string, token: string, options: RequestInit = {}): Promise<T> {
    let res: Response | null = null;
    let lastNetworkError: unknown = null;
    let lastTriedApiUrl = "";
    const apiPath = this.buildApiPath(path);
    const headers = new Headers(options.headers || {});
    headers.set("Accept", "application/vnd.github+json");
    if (token) {
      headers.set("Authorization", token.startsWith("Bearer ") ? token : `token ${token}`);
    }
    if (options.body && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    for (const baseUrl of this.getApiBaseCandidates()) {
      const apiUrl = `${baseUrl}${apiPath}`;
      lastTriedApiUrl = apiUrl;
      try {
        res = await fetch(apiUrl, {
          ...options,
          headers,
        });
        break;
      } catch (error) {
        lastNetworkError = error;
        continue;
      }
    }

    if (!res) {
      const message = lastNetworkError instanceof Error ? lastNetworkError.message : String(lastNetworkError);
      throw new Error(
        `网络请求失败（GitHub API）：${message}。请确认可访问 ${this.apiBaseUrl} 或 https://github.com/api/v3`
      );
    }

    if (!res.ok) {
      const text = await res.text();
      let detail = text;
      try {
        const parsed = JSON.parse(text);
        detail = parsed?.message || text;
      } catch {
        detail = text;
      }
      throw new GitHubApiError(res.status, this.formatGitHubErrorMessage(res.status, detail, lastTriedApiUrl || path));
    }

    return (res.status === 204 ? null : await res.json()) as T;
  }

  async getFileMeta(repoPath: string, token: string, branch: string, allowReadonlyFallback = true) {
    const encodedPath = this.encodeRepoPath(repoPath);
    const contentPath = `${this.buildRepoApiPath("/contents/")}${encodedPath}?ref=${encodeURIComponent(branch)}`;

    try {
      return await this.githubRequest(contentPath, token);
    } catch (error) {
      if (error instanceof GitHubApiError && error.status === 404) {
        return null;
      }

      if (allowReadonlyFallback && this.isNetworkError(error)) {
        const rawContent = await this.getRawFileContentFromCdn(repoPath, branch);
        if (rawContent !== null) {
          return {
            content: encodeUtf8ToBase64(rawContent),
            sha: undefined,
          };
        }
      }

      throw error;
    }
  }

  async upsertFile(repoPath: string, content: string, message: string, token: string, branch: string) {
    const meta = await this.getFileMeta(repoPath, token, branch, false);
    const body = {
      message,
      content: encodeUtf8ToBase64(content),
      branch,
      ...(meta?.sha ? { sha: meta.sha } : {}),
    };

    await this.githubRequest(`${this.buildRepoApiPath("/contents/")}${this.encodeRepoPath(repoPath)}`, token, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  async deleteFile(repoPath: string, message: string, token: string, branch: string) {
    const meta = await this.getFileMeta(repoPath, token, branch, false);
    if (!meta?.sha) return false;

    await this.githubRequest(`${this.buildRepoApiPath("/contents/")}${this.encodeRepoPath(repoPath)}`, token, {
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
    try {
      const branchSha = await this.resolveBranchSha(token, branch);
      const tree = await this.githubRequest<{ tree?: Array<{ type?: string; path?: string }> }>(
        `${this.buildRepoApiPath("/git/trees/")}${encodeURIComponent(branchSha)}?recursive=1`,
        token,
      );
      const items = Array.isArray(tree?.tree) ? tree.tree : [];
      const matched = items
        .filter((item: { type?: string; path?: string }) => item?.type === "blob" && typeof item?.path === "string" && item.path.startsWith(prefix))
        .map((item: { path: string }) => item.path);

      if (matched.length > 0) return matched;
    } catch (error) {
      if (error instanceof GitHubApiError && [401, 403].includes(error.status)) {
        throw error;
      }
      // ignore and fallback to contents API
    }

    try {
      return await this.listFilesByPrefixUsingContents(prefix, token, branch);
    } catch {
      return this.listFilesByPrefixUsingCdn(prefix, branch);
    }
  }

  private async listFilesByPrefixUsingCdn(prefix: string, branch: string): Promise<string[]> {
    const endpoint = `https://data.jsdelivr.com/v1/package/gh/${this.repoOwner}/${this.repoName}@${encodeURIComponent(branch)}/flat`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`CDN 列表读取失败：HTTP ${response.status}`);
    }

    const payload = await response.json();
    const files = Array.isArray(payload?.files) ? payload.files : [];

    return files
      .map((item: { name?: string }) => item?.name)
      .filter((name: string | undefined): name is string => typeof name === "string" && name.startsWith(`/${prefix}`))
      .map((name: string) => name.slice(1));
  }

  private async getRawFileContentFromCdn(repoPath: string, branch: string): Promise<string | null> {
    const branchPath = branch
      .split("/")
      .map((part) => encodeURIComponent(part))
      .join("/");

    const endpoints = [
      `https://cdn.jsdelivr.net/gh/${this.repoOwner}/${this.repoName}@${encodeURIComponent(branch)}/${repoPath}`,
      `https://raw.githubusercontent.com/${this.repoOwner}/${this.repoName}/${branchPath}/${repoPath}`,
      `https://cdn.statically.io/gh/${this.repoOwner}/${this.repoName}/${branchPath}/${repoPath}`,
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          cache: "no-store",
        });
        if (!response.ok) continue;
        return await response.text();
      } catch {
        continue;
      }
    }

    return null;
  }

  private async listFilesByPrefixUsingContents(prefix: string, token: string, branch: string): Promise<string[]> {
    const normalizedPrefix = prefix.replace(/\/+$/, "");
    const queue = [normalizedPrefix];
    const files: string[] = [];

    while (queue.length > 0) {
      const currentPath = queue.shift();
      if (!currentPath) continue;

      let content: unknown;
      try {
        content = await this.githubRequest(
          `${this.buildRepoApiPath("/contents/")}${this.encodeRepoPath(currentPath)}?ref=${encodeURIComponent(branch)}`,
          token,
        );
      } catch (error) {
        if (error instanceof GitHubApiError && error.status === 404) {
          continue;
        }
        throw error;
      }

      if (!Array.isArray(content)) continue;

      for (const item of content) {
        if (!item || typeof item !== "object") continue;
        const itemType = (item as { type?: string }).type;
        const itemPath = (item as { path?: string }).path;
        if (!itemType || !itemPath) continue;

        if (itemType === "file" && itemPath.startsWith(prefix)) {
          files.push(itemPath);
        }

        if (itemType === "dir") {
          queue.push(itemPath);
        }
      }
    }

    return files;
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
