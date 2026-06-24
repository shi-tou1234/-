import {
  AdminService,
  decodeFileContent,
  getNowDateTimeLocal,
  normalizeSlug,
  toIsoDateTime,
  buildPostMarkdown,
} from "@/utils/admin-service";
import {
  getPrimaryCategoryFromItems,
  getSubcategoriesFromItems,
  normalizeCategoryItems,
} from "@utils/blog-taxonomy";
import {
  SESSION_KEY,
  ADMIN_GH_TOKEN_KEY,
  ADMIN_GH_BRANCH_KEY,
  ADMIN_GH_API_URL_KEY,
  ADMIN_PREVIEW_DRAFT_KEY,
  ADMIN_PREVIEW_RESULT_KEY,
  REPO_OWNER,
  REPO_NAME,
  GITHUB_API_DEFAULT,
  ADMIN_SECURITY_PATH,
  PREVIEW_TOOL_PATH,
} from "./constants";

export const BASE_URL = import.meta.env.BASE_URL || "/";

export const ADMIN_SECURITY_URL = typeof window !== "undefined"
  ? new URL("admin-security.json", `${window.location.origin}${BASE_URL}`).toString()
  : "";

const savedApiUrl = typeof localStorage !== "undefined"
  ? localStorage.getItem(ADMIN_GH_API_URL_KEY) || GITHUB_API_DEFAULT
  : GITHUB_API_DEFAULT;

export const adminService = new AdminService({
  repoOwner: REPO_OWNER,
  repoName: REPO_NAME,
  securityPath: ADMIN_SECURITY_PATH,
  securityUrl: ADMIN_SECURITY_URL,
  apiBaseUrl: savedApiUrl,
});

// Shared mutable state
export let categoryOptionMeta = {
  topLevelCategories: [] as string[],
  subcategoriesByRoot: {} as Record<string, string[]>,
};

export let aboutPersonalDraft: Record<string, any> | null = null;

export function setCategoryOptionMeta(meta: typeof categoryOptionMeta) {
  categoryOptionMeta = meta;
}

export function setAboutPersonalDraft(draft: Record<string, any> | null) {
  aboutPersonalDraft = draft;
}

// Utility functions
export function setMsg(el: HTMLElement | null | undefined, message: string, isError = false) {
  if (!el) return;
  el.textContent = message;
  el.style.color = isError ? "#dc2626" : "";
}

export function unlockPanel() {
  const loginSection = document.getElementById("login-section");
  const adminPanel = document.getElementById("admin-panel");
  loginSection?.classList.add("hidden");
  adminPanel?.classList.remove("hidden");
  sessionStorage.setItem(SESSION_KEY, "1");
}

export function getToken() {
  return (document.getElementById("gh-token")?.value || "").trim();
}

export function getBranch() {
  return (document.getElementById("gh-branch")?.value || "main").trim();
}

export function getActiveApiUrl() {
  const selectEl = document.getElementById("gh-api-endpoint");
  const sel = selectEl?.value || GITHUB_API_DEFAULT;
  if (sel === "custom") {
    return (document.getElementById("gh-api-custom-url")?.value || "").trim().replace(/\/+$/, "") || GITHUB_API_DEFAULT;
  }
  return sel;
}

export function syncApiBase() {
  const url = getActiveApiUrl();
  adminService.setApiBase(url);
  localStorage.setItem(ADMIN_GH_API_URL_KEY, url);
}

export function loadGitHubDraft() {
  const tokenInput = document.getElementById("gh-token");
  const branchInput = document.getElementById("gh-branch");
  const savedToken = localStorage.getItem(ADMIN_GH_TOKEN_KEY) || "";
  const savedBranch = localStorage.getItem(ADMIN_GH_BRANCH_KEY) || "main";
  const savedApi = localStorage.getItem(ADMIN_GH_API_URL_KEY) || GITHUB_API_DEFAULT;
  if (tokenInput && savedToken) tokenInput.value = savedToken;
  if (branchInput && savedBranch) branchInput.value = savedBranch;

  const selectEl = document.getElementById("gh-api-endpoint");
  const customUrlInput = document.getElementById("gh-api-custom-url");
  const customWrap = document.getElementById("custom-api-url-wrap");

  if (savedApi && savedApi !== GITHUB_API_DEFAULT) {
    let found = false;
    if (selectEl) {
      for (const opt of selectEl.options) {
        if (opt.value === savedApi) {
          selectEl.value = savedApi;
          found = true;
          break;
        }
      }
    }
    if (!found && selectEl) {
      selectEl.value = "custom";
      if (customUrlInput) customUrlInput.value = savedApi;
      if (customWrap) customWrap.classList.remove("hidden");
    }
  }
}

export function saveGitHubDraft() {
  const token = getToken();
  const branch = getBranch();
  localStorage.setItem(ADMIN_GH_TOKEN_KEY, token);
  localStorage.setItem(ADMIN_GH_BRANCH_KEY, branch || "main");
  syncApiBase();
}

export function getPreviewPageUrl() {
  return new URL(PREVIEW_TOOL_PATH, `${window.location.origin}${BASE_URL}`).toString();
}

export function savePreviewDraft() {
  const content = document.getElementById("post-content")?.value || "";
  const title = document.getElementById("post-title")?.value || "";
  const slug = document.getElementById("post-slug")?.value || "";
  const lang = document.getElementById("post-lang")?.value || "zh-cn";
  const payload = {
    content,
    title,
    slug,
    lang,
    updatedAt: Date.now(),
    returnUrl: `${window.location.origin}${BASE_URL}admin`,
  };
  localStorage.setItem(ADMIN_PREVIEW_DRAFT_KEY, JSON.stringify(payload));
}

export function applyPreviewResult() {
  const raw = localStorage.getItem(ADMIN_PREVIEW_RESULT_KEY);
  if (!raw) return false;

  try {
    const parsed = JSON.parse(raw);
    const nextContent = String(parsed?.content || "");
    const textarea = document.getElementById("post-content");
    if (textarea) {
      textarea.value = nextContent;
    }
    localStorage.removeItem(ADMIN_PREVIEW_RESULT_KEY);
    setMsg(document.getElementById("post-msg"), "已从预览页回填 Markdown，可直接保存文章");
    return true;
  } catch {
    localStorage.removeItem(ADMIN_PREVIEW_RESULT_KEY);
    setMsg(document.getElementById("post-msg"), "预览回填数据损坏，请重新打开预览", true);
    return false;
  }
}

// GitHub API wrappers
export async function verifyPassword(password: string) {
  return adminService.verifyPassword(password);
}

export async function loadSecurityConfig() {
  await adminService.loadSecurityConfig();
}

export async function getFileMeta(repoPath: string, token: string, branch: string, allowReadonlyFallback = true) {
  return adminService.getFileMeta(repoPath, token, branch, allowReadonlyFallback);
}

export async function upsertFile(repoPath: string, content: string, message: string, token: string, branch: string) {
  return adminService.upsertFile(repoPath, content, message, token, branch);
}

export async function deleteFile(repoPath: string, message: string, token: string, branch: string) {
  return adminService.deleteFile(repoPath, message, token, branch);
}

export async function listFilesByPrefix(prefix: string, token: string, branch: string) {
  return adminService.listFilesByPrefix(prefix, token, branch);
}

export async function listBlogMarkdownEntries(token: string, branch: string) {
  return adminService.listBlogMarkdownEntries(token, branch);
}

export async function fileToBase64(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

export async function uploadBlogAssetFile({ slug, lang, file, token, branch }: {
  slug: string; lang: string; file: File; token: string; branch: string;
}) {
  const safeName = file.name.replace(/\s+/g, "-");
  const path = `src/content/blog/${slug}/assets/${safeName}`;
  const b64 = await fileToBase64(file);
  await adminService.uploadFile(path, b64, `upload: ${safeName} for ${slug} (${lang})`, token, branch);
  return { name: safeName, type: file.type || "application/octet-stream" };
}

export async function uploadAboutMusicFile({ file, token, branch }: {
  file: File; token: string; branch: string;
}) {
  const safeName = file.name.replace(/\s+/g, "-").replace(/[^\w.\-\u4e00-\u9fa5]/g, "");
  const path = `public/music/${safeName}`;
  const b64 = await fileToBase64(file);
  await adminService.uploadFile(path, b64, `about: upload music ${safeName}`, token, branch);
  const basePrefix = (BASE_URL || "/").replace(/\/$/, "");
  const publicUrl = `${basePrefix}/music/${safeName}`.replace(/\/\//g, "/");
  return { name: safeName, url: publicUrl.startsWith("/") ? publicUrl : `/${publicUrl}` };
}

export async function renderPdfPagesToImages(file: File) {
  const pdfjsLib = await import("pdfjs-dist");
  const workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.624/build/pdf.worker.min.mjs";
  pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

  const pdfData = new Uint8Array(await file.arrayBuffer());
  const loadingTask = pdfjsLib.getDocument({ data: pdfData });
  const pdfDoc = await loadingTask.promise;

  const baseName = file.name.replace(/\.pdf$/i, "").replace(/\s+/g, "-");
  const generatedFiles = [];

  for (let pageNo = 1; pageNo <= pdfDoc.numPages; pageNo++) {
    const page = await pdfDoc.getPage(pageNo);
    const viewport = page.getViewport({ scale: 1.8 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) throw new Error("PDF 渲染失败：无法创建画布上下文");

    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    await page.render({
      canvasContext: context,
      viewport,
      background: "#ffffff",
      annotationMode: pdfjsLib.AnnotationMode.ENABLE,
      renderInteractiveForms: true
    }).promise;

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((result) => {
        if (result) resolve(result);
        else reject(new Error("PDF 转图片失败"));
      }, "image/png");
    });

    const fileName = `${baseName}-p${String(pageNo).padStart(2, "0")}.png`;
    generatedFiles.push(new File([blob], fileName, { type: "image/png" }));
  }

  return generatedFiles;
}

export async function listBlogMarkdownEntriesByRssFallback() {
  const rssUrl = new URL("rss.xml", `${window.location.origin}${BASE_URL}`).toString();
  const response = await fetch(`${rssUrl}?t=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`RSS 回退读取失败：HTTP ${response.status}`);

  const xmlText = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "application/xml");
  const links = Array.from(doc.querySelectorAll("item > link")).map((el) => (el.textContent || "").trim()).filter(Boolean);

  const basePath = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  const map = new Map<string, { path: string; slug: string; lang: string }>();

  for (const link of links) {
    try {
      const url = new URL(link, window.location.origin);
      let pathname = url.pathname;
      if (basePath && pathname.startsWith(basePath)) {
        pathname = pathname.slice(basePath.length) || "/";
      }

      const matched = pathname.match(/^\/(?:((?:zh-cn|en))\/)?blog\/(.+?)\/?$/);
      if (!matched?.[2]) continue;

      const lang = matched[1] || "zh-cn";
      const slug = decodeURIComponent(matched[2]);
      const path = `src/content/blog/${slug}/${lang}.md`;
      map.set(path, { path, slug, lang });
    } catch {
      continue;
    }
  }

  return Array.from(map.values()).sort((a, b) => `${a.slug}/${a.lang}`.localeCompare(`${b.slug}/${b.lang}`));
}

// Re-export from admin-service for convenience
export {
  AdminService,
  GitHubApiError,
  buildAboutPersonalTs,
  buildAboutProfileTs,
  buildToolsLinksTs,
  buildBlogGuideContentTs,
  buildHeaderContactTs,
  buildPostMarkdown,
  buildSiteSloganTs,
  decodeFileContent,
  getNowDateTimeLocal,
  normalizeSlug,
  parseAboutPersonalFromTs,
  parseAboutProfileFromTs,
  parseToolsLinksFromTs,
  parseBlogGuideContentFromTs,
  parseHeaderContactFromTs,
  parseSiteSloganFromTs,
  toIsoDateTime,
} from "@/utils/admin-service";

export {
  getPrimaryCategoryFromItems,
  getSubcategoriesFromItems,
  normalizeCategoryItems,
} from "@utils/blog-taxonomy";
