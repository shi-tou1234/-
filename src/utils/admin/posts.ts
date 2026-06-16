import {
  setMsg,
  getToken,
  getBranch,
  saveGitHubDraft,
  getFileMeta,
  upsertFile,
  deleteFile,
  listFilesByPrefix,
  listBlogMarkdownEntries,
  listBlogMarkdownEntriesByRssFallback,
  uploadBlogAssetFile,
  renderPdfPagesToImages,
  savePreviewDraft,
  applyPreviewResult,
  getPreviewPageUrl,
  categoryOptionMeta,
  setCategoryOptionMeta,
  decodeFileContent,
  getNowDateTimeLocal,
  normalizeSlug,
  toIsoDateTime,
  buildPostMarkdown,
  getPrimaryCategoryFromItems,
  getSubcategoriesFromItems,
  normalizeCategoryItems,
} from "./core";
import {
  CATEGORY_OPTIONS_LIMIT,
  CATEGORY_CACHE_KEY,
  CATEGORY_CACHE_TTL,
  ABOUT_SPEC_PATH_PREFIX,
} from "./constants";

// ===== Post helper functions =====

function initPostDateDefault() {
  const input = document.getElementById("post-date");
  if (input && !input.value) {
    input.value = getNowDateTimeLocal();
  }
}

function toDateTimeLocalValue(isoLikeValue: string) {
  if (!isoLikeValue) return "";
  const date = new Date(isoLikeValue);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function parsePostMarkdown(markdown: string) {
  const matched = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!matched) {
    return { frontmatter: {} as Record<string, string>, content: markdown || "" };
  }
  const rawFrontmatter = matched[1] || "";
  const bodyContent = matched[2] || "";
  const frontmatter: Record<string, string> = {};
  rawFrontmatter.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx <= 0) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    frontmatter[key] = value;
  });
  return { frontmatter, content: bodyContent };
}

function extractCategoriesFromMarkdown(markdown: string) {
  const matched = String(markdown || "").match(/^---\n([\s\S]*?)\n---/);
  if (!matched?.[1]) return [];

  const frontmatter = matched[1];
  const values: string[] = [];

  const singleCategory = frontmatter.match(/^category:\s*(.+)$/m)?.[1];
  if (singleCategory) {
    values.push(singleCategory.trim().replace(/^['"]|['"]$/g, ""));
  }

  const inlineCategories = frontmatter.match(/^categories:\s*\[(.+)\]\s*$/m)?.[1];
  if (inlineCategories) {
    inlineCategories
      .split(",")
      .map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
      .filter(Boolean)
      .forEach((item) => values.push(item));
  }

  const blockCategories = frontmatter.match(/^categories:\s*\n((?:\s*-\s*.+\n?)*)/m)?.[1] || "";
  if (blockCategories) {
    blockCategories
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => /^-\s+/.test(line))
      .map((line) => line.replace(/^-\s+/, "").trim().replace(/^['"]|['"]$/g, ""))
      .filter(Boolean)
      .forEach((item) => values.push(item));
  }

  return normalizeCategoryItems(values);
}

function normalizeCategoryOptionList(categories: string[]) {
  return [...new Set((categories || []).map((item) => String(item).trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "zh-Hans-CN", { sensitivity: "base" }))
    .slice(0, CATEGORY_OPTIONS_LIMIT);
}

function renderSubcategoryOptions(rootCategory: string) {
  const subcategoryDatalist = document.getElementById("post-subcategory-options");
  if (!(subcategoryDatalist instanceof HTMLDataListElement)) return;
  const subcategories = normalizeCategoryOptionList(categoryOptionMeta.subcategoriesByRoot[rootCategory] || []);
  subcategoryDatalist.innerHTML = "";
  subcategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    subcategoryDatalist.appendChild(option);
  });
}

function syncSubcategoryOptions() {
  const rootCategory = (document.getElementById("post-category")?.value || "").trim();
  renderSubcategoryOptions(rootCategory);
}

function renderCategoryOptions(meta: { topLevelCategories: string[]; subcategoriesByRoot: Record<string, string[]> }) {
  const categoryDatalist = document.getElementById("post-category-options");
  const categorySelect = document.getElementById("post-category-select");
  const nextMeta = meta || { topLevelCategories: [], subcategoriesByRoot: {} };
  setCategoryOptionMeta(nextMeta);
  const unique = normalizeCategoryOptionList(nextMeta.topLevelCategories);

  if (categoryDatalist instanceof HTMLDataListElement) {
    categoryDatalist.innerHTML = "";
    unique.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      categoryDatalist.appendChild(option);
    });
  }

  if (categorySelect instanceof HTMLSelectElement) {
    categorySelect.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "手动输入新大分类";
    categorySelect.appendChild(placeholder);
    unique.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  }

  syncSubcategoryOptions();
}

function sanitizeMarkdownImageAlt(content: string) {
  return String(content || "").replace(/!\[[^\]]*\]\(([^)]+)\)/g, (_matched, url) => `![](${url})`);
}

async function loadCategoryOptions(preloadedEntries: { path: string; slug: string; lang: string }[]) {
  const token = getToken();
  const branch = getBranch();
  if (!token) {
    renderCategoryOptions({ topLevelCategories: [], subcategoriesByRoot: {} });
    return;
  }

  try {
    const cached = localStorage.getItem(CATEGORY_CACHE_KEY);
    if (cached) {
      const cache = JSON.parse(cached);
      if (cache && cache.branch === branch && (Date.now() - cache.ts) < CATEGORY_CACHE_TTL && cache.topLevelCategories && cache.topLevelCategories.length > 0) {
        renderCategoryOptions(cache);
        return;
      }
    }
  } catch {}

  try {
    const entries = preloadedEntries && preloadedEntries.length > 0
      ? preloadedEntries
      : await listBlogMarkdownEntries(token, branch).catch(() => []);
    const categorySet = new Set<string>();
    const subcategoriesByRoot: Record<string, Set<string>> = {};

    for (const entry of entries) {
      try {
        const meta = await getFileMeta(entry.path, token, branch, true);
        const markdown = decodeFileContent(meta?.content || "");
        const cats = extractCategoriesFromMarkdown(markdown);
        const rootCategory = getPrimaryCategoryFromItems(cats);
        if (!rootCategory) continue;
        categorySet.add(rootCategory);
        const subcategories = getSubcategoriesFromItems(cats);
        if (subcategories.length > 0) {
          if (!subcategoriesByRoot[rootCategory]) subcategoriesByRoot[rootCategory] = new Set();
          for (const sub of subcategories) subcategoriesByRoot[rootCategory].add(sub);
        }
      } catch {}
    }

    const categoryMeta = {
      topLevelCategories: Array.from(categorySet),
      subcategoriesByRoot: Object.fromEntries(
        Object.entries(subcategoriesByRoot).map(([rootCategory, values]) => [rootCategory, Array.from(values)])
      ),
    };
    renderCategoryOptions(categoryMeta);

    try {
      localStorage.setItem(CATEGORY_CACHE_KEY, JSON.stringify({
        branch,
        ts: Date.now(),
        topLevelCategories: categoryMeta.topLevelCategories,
        subcategoriesByRoot: categoryMeta.subcategoriesByRoot,
      }));
    } catch {}
  } catch {
    renderCategoryOptions({ topLevelCategories: [], subcategoriesByRoot: {} });
  }
}

function clearPostEditor() {
  const titleInput = document.getElementById("post-title");
  const slugInput = document.getElementById("post-slug");
  const langInput = document.getElementById("post-lang");
  const dateInput = document.getElementById("post-date");
  const descInput = document.getElementById("post-desc");
  const coverInput = document.getElementById("post-cover");
  const categoryInput = document.getElementById("post-category");
  const subcategoryInput = document.getElementById("post-subcategory");
  const contentInput = document.getElementById("post-content");
  const categorySelect = document.getElementById("post-category-select");

  if (titleInput) titleInput.value = "";
  if (slugInput) slugInput.value = "";
  if (langInput) langInput.value = "zh-cn";
  if (dateInput) dateInput.value = getNowDateTimeLocal();
  if (descInput) descInput.value = "";
  if (coverInput) coverInput.value = "";
  if (categoryInput) categoryInput.value = "";
  if (subcategoryInput) subcategoryInput.value = "";
  if (categorySelect instanceof HTMLSelectElement) categorySelect.value = "";
  if (contentInput) contentInput.value = "";
  const pinnedCheckbox = document.getElementById("post-pinned");
  if (pinnedCheckbox instanceof HTMLInputElement) pinnedCheckbox.checked = false;
  syncSubcategoryOptions();
}

function getSelectedPostSlug() {
  const selectEl = document.getElementById("post-select");
  const selectedPath = selectEl?.value || "";
  if (!selectedPath) return "";
  const matched = selectedPath.match(/^src\/content\/blog\/(.+)\/(zh-cn|en)\.md$/);
  return matched?.[1] || "";
}

function isTimestampFallbackSlug(slug: string) {
  return /^post-\d{10,}$/.test(slug);
}

function ensurePostSlug() {
  const slugInput = document.getElementById("post-slug");
  const title = (document.getElementById("post-title")?.value || "").trim();
  const titleSlug = normalizeSlug(title);
  const currentSlug = normalizeSlug(slugInput?.value || "");
  if (currentSlug && !(isTimestampFallbackSlug(currentSlug) && titleSlug)) {
    if (slugInput) slugInput.value = currentSlug;
    return currentSlug;
  }
  const selectedSlug = normalizeSlug(getSelectedPostSlug());
  if (selectedSlug && !(isTimestampFallbackSlug(selectedSlug) && titleSlug)) {
    if (slugInput) slugInput.value = selectedSlug;
    return selectedSlug;
  }
  const fallbackSlug = titleSlug || `post-${Date.now()}`;
  if (slugInput) slugInput.value = fallbackSlug;
  return fallbackSlug;
}

// ===== Core post functions =====

export async function loadPostList() {
  const msgEl = document.getElementById("post-msg");
  const selectEl = document.getElementById("post-select");
  const token = getToken();
  const branch = getBranch();

  if (!token) {
    if (selectEl) selectEl.innerHTML = "";
    setMsg(msgEl, "请先填写 GitHub Token 后再加载文章列表", true);
    return;
  }

  setMsg(msgEl, "加载文章列表中...");
  saveGitHubDraft();
  let entries: { path: string; slug: string; lang: string }[] = [];
  let usedFallback = false;
  try {
    entries = await listBlogMarkdownEntries(token, branch);
  } catch {
    entries = await listBlogMarkdownEntriesByRssFallback();
    usedFallback = true;
  }

  if (selectEl) {
    selectEl.innerHTML = "";
    if (entries.length === 0) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "暂无文章";
      selectEl.appendChild(option);
    } else {
      entries.forEach((entry) => {
        const option = document.createElement("option");
        option.value = entry.path;
        option.textContent = `${entry.slug} (${entry.lang})`;
        selectEl.appendChild(option);
      });
    }
  }

  if (usedFallback) {
    setMsg(msgEl, `已加载 ${entries.length} 篇文章（回退模式：GitHub API 不可达）`);
    await loadCategoryOptions(entries).catch(() => {});
    return;
  }

  setMsg(msgEl, `已加载 ${entries.length} 篇文章`);
  await loadCategoryOptions(entries).catch(() => {});
}

async function loadSelectedPostToEditor() {
  const msgEl = document.getElementById("post-msg");
  const selectEl = document.getElementById("post-select");
  const selectedPath = selectEl?.value || "";
  const token = getToken();
  const branch = getBranch();
  const categorySelect = document.getElementById("post-category-select");

  if (!token) throw new Error("请先填写 GitHub Token");
  if (!selectedPath) throw new Error("请先选择文章");

  const meta = await getFileMeta(selectedPath, token, branch);
  if (!meta?.content) throw new Error("文章内容为空或不存在");

  const rawMarkdown = decodeFileContent(meta.content);
  const { frontmatter, content } = parsePostMarkdown(rawMarkdown);

  const slugMatched = selectedPath.match(/^src\/content\/blog\/(.+)\/(zh-cn|en)\.md$/);
  const slug = slugMatched?.[1] || "";
  const lang = slugMatched?.[2] || "zh-cn";

  const titleInput = document.getElementById("post-title");
  const slugInput = document.getElementById("post-slug");
  const langInput = document.getElementById("post-lang");
  const dateInput = document.getElementById("post-date");
  const descInput = document.getElementById("post-desc");
  const coverInput = document.getElementById("post-cover");
  const categoryInput = document.getElementById("post-category");
  const subcategoryInput = document.getElementById("post-subcategory");
  const contentInput = document.getElementById("post-content");

  if (titleInput) titleInput.value = frontmatter.title || "";
  if (slugInput) slugInput.value = slug;
  if (langInput) langInput.value = lang;
  if (dateInput) dateInput.value = toDateTimeLocalValue(frontmatter.pubDate || "") || getNowDateTimeLocal();
  if (descInput) descInput.value = frontmatter.description || "";
  if (coverInput) coverInput.value = frontmatter.image || "";
  if (categoryInput) {
    const parsedCategories = extractCategoriesFromMarkdown(rawMarkdown);
    const currentCategory = parsedCategories[0] || "";
    const subCategory = parsedCategories[1] || "";
    categoryInput.value = currentCategory;
    if (subcategoryInput) subcategoryInput.value = subCategory;
    if (categorySelect instanceof HTMLSelectElement) {
      categorySelect.value = currentCategory;
      if (categorySelect.value !== currentCategory) categorySelect.value = "";
    }
    syncSubcategoryOptions();
  }
  if (contentInput) contentInput.value = (content || "").trim();

  const pinnedCheckbox = document.getElementById("post-pinned");
  if (pinnedCheckbox instanceof HTMLInputElement) {
    pinnedCheckbox.checked = frontmatter.pinned === "true" || frontmatter.pinned === true;
  }

  setMsg(msgEl, `已载入：${slug} (${lang})`);
}

// ===== Markdown snippet helpers =====

function insertAtCursor(textarea: HTMLTextAreaElement | null, beforeText: string, afterText = "", fallbackSelection = "") {
  if (!textarea) return;
  const start = textarea.selectionStart ?? textarea.value.length;
  const end = textarea.selectionEnd ?? textarea.value.length;
  const selected = textarea.value.slice(start, end);
  const inner = selected || fallbackSelection;
  const insertion = `${beforeText}${inner}${afterText}`;
  textarea.setRangeText(insertion, start, end, "end");
  textarea.focus();
}

function insertMarkdownSnippet(type: string) {
  const textarea = document.getElementById("post-content") as HTMLTextAreaElement | null;
  if (!textarea || !type) return;

  const snippets: Record<string, () => void> = {
    app: () => insertAtCursor(textarea, "[📱 应用名称](https://example.com)\n\n> 简介：一句话说明这个应用适合做什么。\n"),
    link: () => insertAtCursor(textarea, "[链接标题](https://example.com)"),
    table: () => insertAtCursor(textarea, "| 列1 | 列2 | 列3 |\n| --- | --- | --- |\n| 内容1 | 内容2 | 内容3 |\n"),
    tip: () => insertAtCursor(textarea, ":::tip\n这里填写提示内容\n:::\n"),
    "formula-inline": () => insertAtCursor(textarea, "$", "$", "a^2+b^2=c^2"),
    "formula-block": () => insertAtCursor(textarea, "$$\n", "\n$$\n", "\\int_a^b f(x)\\,dx"),
    "code-inline": () => insertAtCursor(textarea, "`", "`", "code"),
    "code-block": () => insertAtCursor(textarea, "```ts\n", "\n```\n", "console.log('hello')"),
    bold: () => insertAtCursor(textarea, "**", "**", "加粗文本"),
    italic: () => insertAtCursor(textarea, "*", "*", "斜体文本"),
    "heading-2": () => insertAtCursor(textarea, "## 二级标题\n"),
    "heading-3": () => insertAtCursor(textarea, "### 三级标题\n"),
    blockquote: () => insertAtCursor(textarea, "> 这是一段引用\n"),
    ul: () => insertAtCursor(textarea, "- 列表项 1\n- 列表项 2\n"),
    ol: () => insertAtCursor(textarea, "1. 列表项 1\n2. 列表项 2\n"),
    task: () => insertAtCursor(textarea, "- [ ] 待办事项\n- [x] 已完成事项\n"),
    strike: () => insertAtCursor(textarea, "~~", "~~", "删除线文本"),
    hr: () => insertAtCursor(textarea, "\n---\n"),
  };

  const handler = snippets[type];
  if (!handler) return;
  handler();
}

// ===== Event handler initialization =====

export function initPostHandlers() {
  const categorySelect = document.getElementById("post-category-select");

  initPostDateDefault();

  document.getElementById("about-music-files")?.addEventListener("change", () => {
    const files = document.getElementById("about-music-files")?.files;
    const countEl = document.getElementById("about-music-files-count");
    if (!countEl) return;
    const count = files?.length || 0;
    countEl.textContent = count > 0 ? `已选择 ${count} 个 MP3` : "未选择文件";
  });

  document.getElementById("post-files")?.addEventListener("change", () => {
    const files = document.getElementById("post-files")?.files;
    const countEl = document.getElementById("post-files-count");
    if (!countEl) return;
    const count = files?.length || 0;
    countEl.textContent = count > 0 ? `已选择 ${count} 个文件` : "未选择文件";
  });

  document.getElementById("post-cover-file")?.addEventListener("change", () => {
    const files = document.getElementById("post-cover-file")?.files;
    const nameEl = document.getElementById("post-cover-filename");
    if (!nameEl) return;
    const name = files?.[0]?.name || "";
    nameEl.textContent = name || "未选择";
  });

  document.getElementById("refresh-post-list-btn")?.addEventListener("click", loadPostList);

  categorySelect?.addEventListener("change", () => {
    const picked = (categorySelect.value || "").trim();
    const inputEl = document.getElementById("post-category");
    if (inputEl && picked) inputEl.value = picked;
    syncSubcategoryOptions();
  });

  document.getElementById("post-category")?.addEventListener("input", () => {
    if (!(categorySelect instanceof HTMLSelectElement)) return;
    const value = (document.getElementById("post-category")?.value || "").trim();
    categorySelect.value = value;
    if (categorySelect.value !== value) categorySelect.value = "";
    syncSubcategoryOptions();
  });

  document.getElementById("load-selected-post-btn")?.addEventListener("click", async () => {
    const msgEl = document.getElementById("post-msg");
    try {
      await loadSelectedPostToEditor();
    } catch (error) {
      setMsg(msgEl, String(error), true);
    }
  });

  document.getElementById("new-post-btn")?.addEventListener("click", () => {
    clearPostEditor();
    setMsg(document.getElementById("post-msg"), "已切换到新建文章模式");
  });

  document.getElementById("open-preview-editor-btn")?.addEventListener("click", () => {
    savePreviewDraft();
    const previewUrl = getPreviewPageUrl();
    window.open(previewUrl, "_blank", "noopener,noreferrer");
    setMsg(document.getElementById("post-msg"), "已打开预览编辑器，新内容可在返回后回填");
  });

  document.getElementById("apply-preview-content-btn")?.addEventListener("click", () => {
    const applied = applyPreviewResult();
    if (!applied) {
      setMsg(document.getElementById("post-msg"), "未检测到预览回填内容，请先在预览页点击"返回发布"", true);
    }
  });

  document.getElementById("post-select")?.addEventListener("dblclick", async () => {
    const msgEl = document.getElementById("post-msg");
    try {
      await loadSelectedPostToEditor();
    } catch (error) {
      setMsg(msgEl, String(error), true);
    }
  });

  document.getElementById("insert-iframe-btn")?.addEventListener("click", () => {
    const textarea = document.getElementById("post-content") as HTMLTextAreaElement | null;
    const iframeTpl = `\n<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Video" frameborder="0" allowfullscreen></iframe>\n`;
    if (textarea) textarea.value = `${textarea.value || ""}${iframeTpl}`;
  });

  document.getElementById("insert-md-snippet-btn")?.addEventListener("click", () => {
    const selectEl = document.getElementById("post-md-snippet") as HTMLSelectElement | null;
    const type = (selectEl?.value || "").trim();
    if (!type) return;
    insertMarkdownSnippet(type);
  });

  window.addEventListener("focus", () => {
    applyPreviewResult();
  });

  // Upload cover
  document.getElementById("upload-cover-btn")?.addEventListener("click", async () => {
    const msgEl = document.getElementById("post-msg");
    try {
      const token = getToken();
      const branch = getBranch();
      const slug = ensurePostSlug();
      const lang = (document.getElementById("post-lang")?.value || "zh-cn").trim();
      const files = document.getElementById("post-cover-file")?.files;

      if (!token) throw new Error("请先填写 GitHub Token");
      if (!files || files.length === 0) throw new Error("请先选择封面图片");

      const file = files[0];
      if (!file.type.startsWith("image/")) throw new Error("请选择图片文件作为封面");

      setMsg(msgEl, "正在上传封面图片...");
      const result = await uploadBlogAssetFile({ slug, lang, file, token, branch });
      const coverPath = `./assets/${result.name}`;
      const coverInput = document.getElementById("post-cover");
      if (coverInput) coverInput.value = coverPath;
      const fileInput = document.getElementById("post-cover-file");
      if (fileInput) fileInput.value = "";
      const nameEl = document.getElementById("post-cover-filename");
      if (nameEl) nameEl.textContent = "未选择";
      setMsg(msgEl, `封面图片上传成功：${result.name}（已自动填入封面路径）`);
    } catch (error) {
      setMsg(msgEl, String(error), true);
    }
  });

  // Upload files
  document.getElementById("upload-files-btn")?.addEventListener("click", async () => {
    const msgEl = document.getElementById("post-msg");
    try {
      const token = getToken();
      const branch = getBranch();
      const slug = ensurePostSlug();
      const lang = (document.getElementById("post-lang")?.value || "zh-cn").trim();
      const files = document.getElementById("post-files")?.files;

      if (!token) throw new Error("请先填写 GitHub Token");
      if (!files || files.length === 0) throw new Error("请先选择文件");

      setMsg(msgEl, `上传中...（${files.length} 个文件）`);

      const uploaded: { name: string; type: string; fromPdf: boolean }[] = [];
      for (const file of files) {
        const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
        if (isPdf) {
          setMsg(msgEl, `正在转换 PDF：${file.name}`);
          const imageFiles = await renderPdfPagesToImages(file);
          for (const imageFile of imageFiles) {
            const result = await uploadBlogAssetFile({ slug, lang, file: imageFile, token, branch });
            uploaded.push({ ...result, fromPdf: true });
          }
          continue;
        }
        const result = await uploadBlogAssetFile({ slug, lang, file, token, branch });
        uploaded.push({ ...result, fromPdf: false });
      }

      const textarea = document.getElementById("post-content") as HTMLTextAreaElement | null;
      const snippets = uploaded.map((f) => {
        if (f.type.startsWith("image/")) return `![](./assets/${f.name})`;
        if (f.type.startsWith("video/")) return `<video controls src="./assets/${f.name}"></video>`;
        return `[${f.name}](./assets/${f.name})`;
      }).join("\n\n");

      if (snippets && textarea) {
        textarea.value = `${textarea.value || ""}\n\n${snippets}\n`;
      }
      const fileInput = document.getElementById("post-files");
      if (fileInput) fileInput.value = "";
      const countEl = document.getElementById("post-files-count");
      if (countEl) countEl.textContent = "未选择文件";
      setMsg(msgEl, `上传成功：${uploaded.length} 个文件（目录：${slug}/assets）`);
    } catch (error) {
      setMsg(msgEl, String(error), true);
    }
  });

  // Publish post
  document.getElementById("publish-post-btn")?.addEventListener("click", async () => {
    const msgEl = document.getElementById("post-msg");
    try {
      const token = getToken();
      const branch = getBranch();
      const lang = (document.getElementById("post-lang")?.value || "zh-cn").trim();
      const title = (document.getElementById("post-title")?.value || "").trim();
      const dateInput = (document.getElementById("post-date")?.value || "").trim();
      const date = toIsoDateTime(dateInput) || new Date().toISOString();
      const description = (document.getElementById("post-desc")?.value || "").trim();
      const image = (document.getElementById("post-cover")?.value || "").trim();
      const category = (document.getElementById("post-category")?.value || "").trim();
      const subCategory = (document.getElementById("post-subcategory")?.value || "").trim();
      const pinnedCheckbox = document.getElementById("post-pinned");
      const pinned = pinnedCheckbox instanceof HTMLInputElement ? pinnedCheckbox.checked : false;
      const contentInput = document.getElementById("post-content") as HTMLTextAreaElement | null;
      const content = sanitizeMarkdownImageAlt(contentInput?.value || "");
      if (contentInput) contentInput.value = content;
      const inputSlug = ensurePostSlug();
      const fallbackSlug = normalizeSlug(title);
      const slug = inputSlug || fallbackSlug || `post-${Date.now()}`;

      if (!token) throw new Error("请先填写 GitHub Token");
      if (!title) throw new Error("请填写标题");

      const slugInput = document.getElementById("post-slug");
      if (slugInput && !slugInput.value.trim()) slugInput.value = slug;

      const markdown = buildPostMarkdown({
        title, date, updatedDate: new Date().toISOString(),
        description, image, category, subCategory,
        slugId: slug, content, pinned,
      });

      const path = `src/content/blog/${slug}/${lang}.md`;
      setMsg(msgEl, "发布中...");
      saveGitHubDraft();
      await upsertFile(path, markdown, `post: update ${slug}/${lang}`, token, branch);
      setMsg(msgEl, `发布成功：${path}`);
      await loadPostList();
    } catch (error) {
      setMsg(msgEl, String(error), true);
    }
  });

  // Delete single language
  document.getElementById("delete-post-btn")?.addEventListener("click", async () => {
    const msgEl = document.getElementById("post-msg");
    try {
      const token = getToken();
      const branch = getBranch();
      const lang = (document.getElementById("post-lang")?.value || "zh-cn").trim();
      const slug = ensurePostSlug();
      if (!token) throw new Error("请先填写 GitHub Token");

      const path = `src/content/blog/${slug}/${lang}.md`;
      const confirmed = window.confirm(`确认删除文章文件？\n${path}`);
      if (!confirmed) return;

      setMsg(msgEl, "删除中...");
      saveGitHubDraft();
      const deleted = await deleteFile(path, `post: delete ${slug}/${lang}`, token, branch);
      if (!deleted) throw new Error(`未找到文件：${path}`);
      setMsg(msgEl, `删除成功：${path}`);
      await loadPostList();
    } catch (error) {
      setMsg(msgEl, String(error), true);
    }
  });

  // Delete entire blog directory
  document.getElementById("delete-post-all-btn")?.addEventListener("click", async () => {
    const msgEl = document.getElementById("post-msg");
    try {
      const token = getToken();
      const branch = getBranch();
      const slug = ensurePostSlug();
      if (!token) throw new Error("请先填写 GitHub Token");

      const prefix = `src/content/blog/${slug}/`;
      const confirmed = window.confirm(`确认删除整个博客目录？\n${prefix}\n\n这会删除该目录下所有语言文件和资源文件。`);
      if (!confirmed) return;

      setMsg(msgEl, "扫描目录中...");
      const files = await listFilesByPrefix(prefix, token, branch);
      if (files.length === 0) throw new Error(`目录为空或不存在：${prefix}`);

      setMsg(msgEl, `删除中...（共 ${files.length} 个文件）`);
      saveGitHubDraft();
      for (const file of files) {
        await deleteFile(file, `post: delete ${slug} directory`, token, branch);
      }
      setMsg(msgEl, `删除成功：${prefix}（已删除 ${files.length} 个文件）`);
      await loadPostList();
    } catch (error) {
      setMsg(msgEl, String(error), true);
    }
  });
}
