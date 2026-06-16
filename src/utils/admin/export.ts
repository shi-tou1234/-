import {
  setMsg,
  getToken,
  getBranch,
  saveGitHubDraft,
  getFileMeta,
  listBlogMarkdownEntries,
  listBlogMarkdownEntriesByRssFallback,
  decodeFileContent,
} from "./core";

function parsePostMarkdown(markdown: string) {
  const matched = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!matched) return { frontmatter: {} as Record<string, string>, content: markdown || "" };
  const rawFrontmatter = matched[1] || "";
  const frontmatter: Record<string, string> = {};
  rawFrontmatter.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx <= 0) return;
    frontmatter[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  });
  return { frontmatter, content: matched[2] || "" };
}

function extractCategoriesFromMarkdown(markdown: string) {
  const matched = String(markdown || "").match(/^---\n([\s\S]*?)\n---/);
  if (!matched?.[1]) return [];
  const frontmatter = matched[1];
  const values: string[] = [];

  const singleCategory = frontmatter.match(/^category:\s*(.+)$/m)?.[1];
  if (singleCategory) values.push(singleCategory.trim().replace(/^['"]|['"]$/g, ""));

  const inlineCategories = frontmatter.match(/^categories:\s*\[(.+)\]\s*$/m)?.[1];
  if (inlineCategories) {
    inlineCategories.split(",").map((item) => item.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean).forEach((item) => values.push(item));
  }

  const blockCategories = frontmatter.match(/^categories:\s*\n((?:\s*-\s*.+\n?)*)/m)?.[1] || "";
  if (blockCategories) {
    blockCategories.split("\n").map((line) => line.trim()).filter((line) => /^-\s+/.test(line)).map((line) => line.replace(/^-\s+/, "").trim().replace(/^['"]|['"]$/g, "")).filter(Boolean).forEach((item) => values.push(item));
  }

  return values;
}

function escapeCsvField(value: string) {
  const str = String(value || "");
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function exportPosts(format: "csv" | "markdown") {
  const msgEl = document.getElementById("export-msg");
  const progressWrap = document.getElementById("export-progress-wrap");
  const progressBar = document.getElementById("export-progress-bar");
  const progressText = document.getElementById("export-progress-text");
  const token = getToken();
  const branch = getBranch();

  if (!token) {
    setMsg(msgEl, "请先填写 GitHub Token", true);
    return;
  }

  setMsg(msgEl, "正在加载 JSZip 库...");
  saveGitHubDraft();
  if (progressWrap) progressWrap.classList.remove("hidden");
  if (progressBar) progressBar.style.width = "0%";
  if (progressText) progressText.textContent = "0 / 0";

  let JSZip: any;
  try {
    JSZip = (await import('https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm')).default;
  } catch {
    setMsg(msgEl, "JSZip 库加载失败，请检查网络连接", true);
    if (progressWrap) progressWrap.classList.add("hidden");
    return;
  }

  setMsg(msgEl, "正在获取文章列表...");

  let entries: { path: string; slug: string; lang: string }[];
  try {
    entries = await listBlogMarkdownEntries(token, branch);
  } catch {
    entries = await listBlogMarkdownEntriesByRssFallback();
  }

  if (entries.length === 0) {
    setMsg(msgEl, "没有找到可导出的文章", true);
    if (progressWrap) progressWrap.classList.add("hidden");
    return;
  }

  setMsg(msgEl, `正在获取 ${entries.length} 篇文章内容...`);
  if (progressText) progressText.textContent = `0 / ${entries.length}`;

  const posts: { path: string; slug: string; lang: string; markdown: string }[] = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    try {
      const meta = await getFileMeta(entry.path, token, branch);
      if (meta?.content) {
        const rawMarkdown = decodeFileContent(meta.content);
        posts.push({ ...entry, markdown: rawMarkdown });
      }
    } catch {
      posts.push({ ...entry, markdown: "# 加载失败\n\n无法获取此文章内容。" });
    }
    const pct = Math.round(((i + 1) / entries.length) * 100);
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `${i + 1} / ${entries.length}`;
    await new Promise((r) => setTimeout(r, 10));
  }

  setMsg(msgEl, "正在生成压缩包...");
  const zip = new JSZip();

  if (format === "csv") {
    const csvRows: string[][] = [["title", "slug", "lang", "date", "description", "category"]];
    for (const post of posts) {
      const { frontmatter } = parsePostMarkdown(post.markdown);
      const categories = extractCategoriesFromMarkdown(post.markdown);
      const row = [
        escapeCsvField(frontmatter.title || ""),
        post.slug,
        post.lang,
        frontmatter.pubDate || "",
        escapeCsvField(frontmatter.description || ""),
        escapeCsvField(categories.join(" / ")),
      ];
      csvRows.push(row);
      const langDir = post.lang === "zh-cn" ? "中文" : "English";
      const filePath = `${langDir}/${post.slug}.csv`;
      zip.file(filePath, `\uFEFF${row.join(",")}\n`);
    }
    const csvContent = csvRows.map((r) => r.join(",")).join("\n");
    zip.file("_全部元数据汇总.csv", `\uFEFF${csvContent}\n`);
  } else if (format === "markdown") {
    for (const post of posts) {
      const langDir = post.lang === "zh-cn" ? "中文" : "English";
      const filePath = `${langDir}/${post.slug}.md`;
      zip.file(filePath, post.markdown);
    }
  }

  const zipBlob = await zip.generateAsync({ type: "blob" });
  downloadBlob(zipBlob, `blog-export-${Date.now()}.zip`);
  setMsg(msgEl, `导出成功：${posts.length} 篇文章已打包为 ZIP（按语言分目录，每篇独立文件）`);
  if (progressWrap) progressWrap.classList.add("hidden");
}

export function initExportHandlers() {
  document.getElementById("export-csv-btn")?.addEventListener("click", async () => {
    await exportPosts("csv");
  });

  document.getElementById("export-markdown-btn")?.addEventListener("click", async () => {
    await exportPosts("markdown");
  });
}
