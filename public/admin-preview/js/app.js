// ===== 默认示例内容 =====
const defaultContent = `# 简单的 Markdown 语法（速查）

这篇文章整理了常用 Markdown 语法，适合作为写作时的速查手册。

参考来源：https://note.motues.top/docs/Markdown/use

---

## 标题

使用 \`#\` 到 \`######\` 表示 1 到 6 级标题。

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

## 段落与换行

段落之间空一行；行内换行可在行尾添加两个空格。

这是第一段。

这是第二段。  
这是同一段中的下一行。

---

## 文本强调

**粗体**

*斜体*

***粗斜体***

~~删除线~~

---

## 引用

> 这是一段引用

>> 这是嵌套引用

---

## 代码

行内代码用反引号包裹：

使用 \`console.log\` 输出日志。

代码块用三个反引号：

\`\`\`ts
const name = "Markdown";
console.log(name);
\`\`\`

---

## 列表

### 无序列表

- 第一项
- 第二项
- 第三项

### 有序列表

1. 第一项
2. 第二项
3. 第三项

### 任务列表

- [x] 已完成
- [ ] 待完成

---

## 链接与图片

[访问网站](https://example.com)

![图片说明](https://picsum.photos/400/200)

---

## 表格

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| Markdown | 标记语言 | 轻量、易读 |

对齐示例：

| 左对齐 | 居中 | 右对齐 |
| :--- | :---: | ---: |
| A | B | C |
| 左 | 中 | 右 |

---

## 公式（KaTeX）

行内公式：

勾股定理：$a^2+b^2=c^2$

块级公式：

$$
\\int_a^b f(x)\\,dx
$$

二次方程求根公式：

$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

---

## 提示卡片

:::tip
这是一个提示卡片。
:::

---

## 水平线

---

**完**
`;

// ===== DOM 元素 =====
let editor, preview, wordCount, themeToggle, themeIcon, loadExampleBtn, exportMdBtn, clearBtn, hljsTheme;
let returnPublishBtn, convertGfmBtn, gfmModal, gfmOutput, gfmCopyBtn, gfmApplyBtn, gfmCloseBtn;
let formatBlogBtn, formatStandardBtn, sourceView, viewModeBtns, previewTitle;

// ===== 状态 =====
let currentTheme = 'light';
let autoSaveTimer = null;
let isInitialized = false;
let currentViewMode = 'preview';
let currentFormat = 'blog';

const ADMIN_PREVIEW_DRAFT_KEY = 'cmchen_admin_preview_draft';
const ADMIN_PREVIEW_RESULT_KEY = 'cmchen_admin_preview_result';

// ===== 检查依赖是否加载 =====
function checkDependencies() {
    const deps = {
        marked: typeof marked !== 'undefined',
        hljs: typeof hljs !== 'undefined',
        katex: typeof katex !== 'undefined',
        renderMathInElement: typeof renderMathInElement !== 'undefined',
        DOMPurify: typeof DOMPurify !== 'undefined'
    };
    
    console.log('依赖检查:', deps);
    
    const missing = Object.entries(deps).filter(([name, loaded]) => !loaded).map(([name]) => name);
    if (missing.length > 0) {
        console.error('缺少依赖:', missing);
        return false;
    }
    return true;
}

// ===== 初始化 =====
function init() {
    console.log('初始化开始...');
    
    // 检查依赖
    if (!checkDependencies()) {
        console.error('依赖加载失败，请检查网络连接');
        alert('部分依赖加载失败，请检查网络连接后刷新页面');
        return;
    }
    
    // 获取 DOM 元素
    editor = document.getElementById('editor');
    preview = document.getElementById('preview');
    wordCount = document.getElementById('word-count');
    themeToggle = document.getElementById('theme-toggle');
    themeIcon = document.getElementById('theme-icon');
    loadExampleBtn = document.getElementById('load-example');
    exportMdBtn = document.getElementById('export-md');
    clearBtn = document.getElementById('clear');
    hljsTheme = document.getElementById('hljs-theme');
    returnPublishBtn = document.getElementById('return-publish');
    convertGfmBtn = document.getElementById('convert-gfm');
    gfmModal = document.getElementById('gfm-modal');
    gfmOutput = document.getElementById('gfm-output');
    gfmCopyBtn = document.getElementById('gfm-copy');
    gfmApplyBtn = document.getElementById('gfm-apply');
    gfmCloseBtn = document.getElementById('gfm-close');
    formatBlogBtn = document.getElementById('format-blog');
    formatStandardBtn = document.getElementById('format-standard');
    sourceView = document.getElementById('source-view');
    viewModeBtns = document.querySelectorAll('.view-mode-btn');
    previewTitle = document.getElementById('preview-title');
    
    // 检查 DOM 元素
    if (!editor || !preview) {
        console.error('DOM 元素获取失败');
        return;
    }
    
    console.log('DOM 元素获取成功');
    
    // 从 localStorage 读取主题
    try {
        currentTheme = localStorage.getItem('markdown-preview-theme') || 'light';
    } catch (e) {
        console.warn('localStorage 不可用');
    }
    
    // 设置主题
    setTheme(currentTheme);
    
    // 优先加载后台草稿，其次恢复本地缓存，最后使用默认内容
    let savedContent = '';
    const adminDraft = readAdminDraft();
    try {
        savedContent = localStorage.getItem('markdown-preview-content') || '';
    } catch (e) {
        console.warn('localStorage 不可用');
    }
    editor.value = (adminDraft && typeof adminDraft.content === 'string' ? adminDraft.content : '') || savedContent || defaultContent;
    
    console.log('内容加载完成，长度:', editor.value.length);
    
    // 初始渲染
    updatePreview();
    updateWordCount();
    
    // 绑定事件
    bindEvents();
    
    // 锁定 body 滚动，只允许编辑区和预览区滚动
    lockBodyScroll();
    
    isInitialized = true;
    console.log('初始化完成');
}

// ===== 锁定 body 滚动 =====
function lockBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
}

// ===== 事件绑定 =====
function bindEvents() {
    console.log('绑定事件...');
    
    // 编辑器输入事件
    editor.addEventListener('input', function() {
        console.log('编辑器输入事件');
        updatePreview();
        updateWordCount();
        scheduleAutoSave();
    });

    // 编辑区选区变化时，同步高亮预览中的对应内容
    editor.addEventListener('select', syncSelectionHighlightFromEditor);
    editor.addEventListener('mouseup', syncSelectionHighlightFromEditor);
    editor.addEventListener('keyup', syncSelectionHighlightFromEditor);
    
    // 主题切换
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            console.log('主题切换按钮点击');
            toggleTheme();
        });
    }
    
    // 加载示例
    if (loadExampleBtn) {
        loadExampleBtn.addEventListener('click', function() {
            console.log('加载示例按钮点击');
            if (confirm('确定要加载示例内容吗？当前内容将被替换。')) {
                editor.value = defaultContent;
                updatePreview();
                updateWordCount();
                saveToStorage();
            }
        });
    }
    
    // 导出 Markdown
    if (exportMdBtn) {
        exportMdBtn.addEventListener('click', function() {
            console.log('导出按钮点击');
            exportMarkdown();
        });
    }

    if (formatBlogBtn) {
        formatBlogBtn.addEventListener('click', function() {
            console.log('博客格式按钮点击');
            if (!editor) return;
            const raw = editor.value || '';
            if (!raw.trim()) {
                alert('没有内容可转换');
                return;
            }
            const converted = convertToBlogMarkdown(raw);
            editor.value = converted;
            updatePreview();
            updateWordCount();
            saveToStorage();
            setActiveFormat('blog');
        });
    }

    if (formatStandardBtn) {
        formatStandardBtn.addEventListener('click', function() {
            console.log('标准格式按钮点击');
            if (!editor) return;
            const raw = editor.value || '';
            if (!raw.trim()) {
                alert('没有内容可转换');
                return;
            }
            const converted = convertToGithubMarkdown(raw);
            openGfmModal(converted);
        });
    }

    // 视图模式切换
    if (viewModeBtns.length > 0) {
        viewModeBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const mode = btn.dataset.view;
                if (mode === currentViewMode) return;
                setViewMode(mode);
            });
        });
    }
    
    // 清空
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            console.log('清空按钮点击');
            if (confirm('确定要清空所有内容吗？')) {
                editor.value = '';
                updatePreview();
                updateWordCount();
                saveToStorage();
            }
        });
    }

    if (returnPublishBtn) {
        returnPublishBtn.addEventListener('click', function() {
            returnToPublish();
        });
    }

    if (gfmCopyBtn) {
        gfmCopyBtn.addEventListener('click', function() {
            handleGfmCopy();
        });
    }

    if (gfmApplyBtn) {
        gfmApplyBtn.addEventListener('click', function() {
            applyGfmToEditor();
        });
    }

    if (gfmCloseBtn) {
        gfmCloseBtn.addEventListener('click', function() {
            closeGfmModal();
        });
    }

    if (gfmModal) {
        gfmModal.addEventListener('click', function(event) {
            const target = event.target;
            if (target instanceof HTMLElement && target.hasAttribute('data-gfm-close')) {
                closeGfmModal();
            }
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeGfmModal();
        }
    });
    
    // 工具栏按钮
    const toolBtns = document.querySelectorAll('.tool-btn[data-action]');
    console.log('找到工具栏按钮数量:', toolBtns.length);
    
    toolBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const action = btn.dataset.action;
            console.log('工具栏按钮点击:', action);
            handleToolbarAction(action);
        });
    });
    
    // Tab 键支持
    editor.addEventListener('keydown', handleTabKey);
    
    console.log('事件绑定完成');
}

// ===== 更新预览 =====
function updatePreview() {
    if (!editor || !preview) return;
    
    // 如果当前在源码视图模式，同步更新源码视图
    if (currentViewMode === 'source' && sourceView) {
        const converted = convertToBlogMarkdown(editor.value);
        if (sourceView.value !== converted) {
            sourceView.value = converted;
        }
        return;
    }
    
    try {
        const markdown = editor.value;
        const html = renderMarkdown(markdown);
        preview.innerHTML = html;
        
        // 处理提示卡片
        processTipCards();
        
        // 渲染 KaTeX 公式
        renderMath();
        
        // 代码高亮
        highlightCode();

        // 重渲染后恢复选区高亮
        syncSelectionHighlightFromEditor();
    } catch (error) {
        console.error('更新预览失败:', error);
    }
}

function getEditorSelection() {
    if (!editor) return { text: '', start: 0, end: 0 };
    const start = editor.selectionStart ?? 0;
    const end = editor.selectionEnd ?? 0;
    if (end <= start) return { text: '', start, end };
    return {
        text: editor.value.slice(start, end).replace(/\r\n/g, '\n'),
        start,
        end
    };
}

function clearSelectionHighlights() {
    if (!preview) return;
    const marks = preview.querySelectorAll('.sync-selection-highlight');
    marks.forEach(function(mark) {
        const parent = mark.parentNode;
        if (!parent) return;
        while (mark.firstChild) {
            parent.insertBefore(mark.firstChild, mark);
        }
        parent.removeChild(mark);
        parent.normalize();
    });
}

function buildTextIndexMap(root) {
    const nodes = [];
    let text = '';
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: function(node) {
            if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
            return node.nodeValue.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    });

    let current = walker.nextNode();
    while (current) {
        nodes.push({
            node: current,
            start: text.length,
            end: text.length + current.nodeValue.length
        });
        text += current.nodeValue;
        current = walker.nextNode();
    }

    return { text, nodes };
}

function findNodeOffsetByIndex(indexMap, index, forEnd = false) {
    const nodes = indexMap.nodes;
    if (nodes.length === 0) return null;

    for (let i = 0; i < nodes.length; i++) {
        const item = nodes[i];
        const inRange = forEnd ? index > item.start && index <= item.end : index >= item.start && index < item.end;
        if (inRange) {
            return {
                node: item.node,
                offset: index - item.start
            };
        }
    }

    const last = nodes[nodes.length - 1];
    return {
        node: last.node,
        offset: last.node.nodeValue.length
    };
}

function normalizeChar(char) {
    if (char === '\r') return '';
    if (char === '\u00A0') return ' ';
    if (char === '\t') return ' ';
    if (/[\u200B\u200C\u200D\uFEFF]/.test(char)) return '';
    return char;
}

function buildNormalizedIndex(text, collapseWhitespace) {
    const normalizedChars = [];
    const normToRawStart = [];
    const normToRawEnd = [];
    let lastWasWhitespace = false;

    for (let i = 0; i < text.length; i++) {
        const rawChar = text[i];
        const normalized = normalizeChar(rawChar);
        if (!normalized) continue;

        const isWhitespace = /\s/.test(normalized);
        if (collapseWhitespace && isWhitespace) {
            if (lastWasWhitespace) {
                const last = normToRawEnd.length - 1;
                if (last >= 0) normToRawEnd[last] = i + 1;
                continue;
            }
            normalizedChars.push(' ');
            normToRawStart.push(i);
            normToRawEnd.push(i + 1);
            lastWasWhitespace = true;
            continue;
        }

        normalizedChars.push(normalized);
        normToRawStart.push(i);
        normToRawEnd.push(i + 1);
        lastWasWhitespace = false;
    }

    return {
        normalizedText: normalizedChars.join(''),
        normToRawStart,
        normToRawEnd
    };
}

function countOccurrencesBefore(text, query, limitIndex) {
    if (!query) return 0;
    let count = 0;
    let from = 0;
    while (from <= limitIndex) {
        const idx = text.indexOf(query, from);
        if (idx < 0 || idx >= limitIndex) break;
        count += 1;
        from = idx + 1;
    }
    return count;
}

function buildSelectionCandidates(selectedText) {
    const raw = String(selectedText || '').replace(/\r\n/g, '\n');
    const trimmed = raw.trim();
    const noNbsp = raw.replace(/\u00A0/g, ' ');
    const collapsed = noNbsp.replace(/[ \t\f\v\u00A0]+/g, ' ');
    const collapsedTrimmed = collapsed.trim();
    return [raw, trimmed, noNbsp, collapsed, collapsedTrimmed]
        .map(function(item) { return item; })
        .filter(function(item, idx, arr) { return item && arr.indexOf(item) === idx; });
}

function findAllMatchRanges(text, query) {
    const ranges = [];
    if (!text || !query) return ranges;
    let from = 0;
    while (from <= text.length - query.length) {
        const idx = text.indexOf(query, from);
        if (idx < 0) break;
        ranges.push({ start: idx, end: idx + query.length });
        from = idx + 1;
    }
    return ranges;
}

function findMatchRangeWithFallback(rawText, query, occurrenceHint) {
    const exactMatches = findAllMatchRanges(rawText, query);
    if (exactMatches.length > 0) {
        const pick = occurrenceHint < exactMatches.length ? occurrenceHint : 0;
        return exactMatches[pick];
    }

    const rawSoft = buildNormalizedIndex(rawText, false);
    const querySoft = buildNormalizedIndex(query, false);
    if (querySoft.normalizedText) {
        const softMatches = findAllMatchRanges(rawSoft.normalizedText, querySoft.normalizedText);
        if (softMatches.length > 0) {
            const pick = occurrenceHint < softMatches.length ? occurrenceHint : 0;
            const matched = softMatches[pick];
            return {
                start: rawSoft.normToRawStart[matched.start],
                end: rawSoft.normToRawEnd[matched.end - 1]
            };
        }
    }

    const rawLoose = buildNormalizedIndex(rawText, true);
    const queryLoose = buildNormalizedIndex(query, true);
    if (!queryLoose.normalizedText) return null;
    const looseMatches = findAllMatchRanges(rawLoose.normalizedText, queryLoose.normalizedText);
    if (looseMatches.length === 0) return null;

    const pick = occurrenceHint < looseMatches.length ? occurrenceHint : 0;
    const matched = looseMatches[pick];
    return {
        start: rawLoose.normToRawStart[matched.start],
        end: rawLoose.normToRawEnd[matched.end - 1]
    };
}

function highlightTextInElement(root, query, occurrenceHint) {
    if (!root || !query) return null;

    const indexMap = buildTextIndexMap(root);
    if (!indexMap.text) return null;

    const matchedRange = findMatchRangeWithFallback(indexMap.text, query, occurrenceHint || 0);
    if (!matchedRange) return null;

    const startIndex = matchedRange.start;
    const endIndex = matchedRange.end;
    const startPos = findNodeOffsetByIndex(indexMap, startIndex, false);
    const endPos = findNodeOffsetByIndex(indexMap, endIndex, true);
    if (!startPos || !endPos) return null;

    const range = document.createRange();
    range.setStart(startPos.node, Math.max(0, startPos.offset));
    range.setEnd(endPos.node, Math.max(0, endPos.offset));

    const wrapper = document.createElement('span');
    wrapper.className = 'sync-selection-highlight';
    wrapper.appendChild(range.extractContents());
    range.insertNode(wrapper);
    return wrapper;
}

function syncSelectionHighlightFromEditor() {
    if (!preview || !editor) return;

    const selection = getEditorSelection();
    const selected = selection.text;

    clearSelectionHighlights();

    const normalized = selected.trim();
    if (!normalized) return;

    const rawEditorContent = editor.value.replace(/\r\n/g, '\n');
    const occurrenceHint = countOccurrencesBefore(rawEditorContent, selected, selection.start);

    const candidates = buildSelectionCandidates(selected);

    let target = null;
    const codeBlocks = preview.querySelectorAll('pre code');
    for (let i = 0; i < codeBlocks.length && !target; i++) {
        for (let j = 0; j < candidates.length && !target; j++) {
            target = highlightTextInElement(codeBlocks[i], candidates[j], occurrenceHint);
        }
    }

    if (!target) {
        for (let i = 0; i < candidates.length && !target; i++) {
            target = highlightTextInElement(preview, candidates[i], occurrenceHint);
        }
    }

    // 若按出现序号未命中，降级为首个出现再试一次，避免完全匹配不上
    if (!target) {
        for (let i = 0; i < codeBlocks.length && !target; i++) {
            for (let j = 0; j < candidates.length && !target; j++) {
                target = highlightTextInElement(codeBlocks[i], candidates[j], 0);
            }
        }
    }

    if (!target) {
        for (let i = 0; i < candidates.length && !target; i++) {
            target = highlightTextInElement(preview, candidates[i], 0);
        }
    }

    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
}

// ===== 处理提示卡片 =====
function processTipCards() {
    if (!preview) return;
    
    // 查找所有段落，检查是否包含 :::tip 和 :::
    const paragraphs = preview.querySelectorAll('p');
    paragraphs.forEach(function(p) {
        const html = p.innerHTML;
        // 检查是否是提示卡片格式
        if (html.includes(':::tip')) {
            // 提取提示内容
            const content = html.replace(':::tip', '').replace(':::', '').trim();
            if (content) {
                // 创建提示卡片元素
                const tipDiv = document.createElement('div');
                tipDiv.className = 'tip';
                tipDiv.innerHTML = content;
                p.replaceWith(tipDiv);
            } else {
                // 空提示卡片，移除
                p.remove();
            }
        }
    });
}

// ===== Markdown 渲染 =====
function renderMarkdown(markdown) {
    if (!markdown) return '';
    
    try {
        // 配置 marked
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false,
            sanitize: false,
            smartLists: true,
            smartypants: true,
            xhtml: false
        });
        
        // 自定义渲染器
        const renderer = new marked.Renderer();
        
        // 自定义代码块渲染
        renderer.code = function(code, language) {
            const validLanguage = language && hljs.getLanguage(language) ? language : 'plaintext';
            return `<pre><code class="hljs language-${validLanguage}">${escapeHtml(code)}</code></pre>`;
        };
        
        // 自定义任务列表渲染
        renderer.listitem = function(text, task, checked) {
            if (task) {
                return `<li class="task-list-item"><input type="checkbox" ${checked ? 'checked' : ''} disabled> ${text}</li>`;
            }
            return `<li>${text}</li>`;
        };
        
        marked.use({ renderer });
        
        // 渲染 Markdown
        let html = marked.parse(markdown);
        
        // XSS 防护 - 允许 div 和 tip 类
        if (typeof DOMPurify !== 'undefined') {
            html = DOMPurify.sanitize(html, {
                ALLOWED_TAGS: [
                    'p', 'br', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                    'strong', 'em', 'del', 'a', 'img', 'blockquote',
                    'ul', 'ol', 'li', 'code', 'pre', 'table', 'thead',
                    'tbody', 'tr', 'th', 'td', 'div', 'span', 'input'
                ],
                ALLOWED_ATTR: [
                    'href', 'src', 'alt', 'title', 'class', 'id',
                    'type', 'checked', 'disabled', 'language'
                ],
                ALLOWED_CLASSES: {
                    'div': ['tip', 'katex-display'],
                    '*': ['hljs', 'language-*', 'task-list-item']
                }
            });
        }
        
        return html;
    } catch (error) {
        console.error('Markdown 渲染失败:', error);
        return `<p style="color: red;">渲染错误: ${escapeHtml(error.message)}</p>`;
    }
}

// ===== HTML 转义 =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== 渲染数学公式 =====
function renderMath() {
    if (typeof renderMathInElement === 'undefined' || !preview) return;
    
    try {
        // 先处理块级公式，将 $$...$$ 转换为 KaTeX 可识别的格式
        const mathElements = preview.querySelectorAll('p');
        mathElements.forEach(function(p) {
            const text = p.textContent;
            // 检查是否是块级公式（以 $$ 开头和结尾）
            if (text.trim().startsWith('$$') && text.trim().endsWith('$$')) {
                // 提取公式内容
                const formula = text.trim().slice(2, -2).trim();
                // 创建新的 div 元素用于显示公式
                const div = document.createElement('div');
                div.className = 'katex-display';
                try {
                    katex.render(formula, div, {
                        throwOnError: false,
                        displayMode: true
                    });
                    p.replaceWith(div);
                } catch (e) {
                    console.error('KaTeX 块级公式渲染失败:', e);
                }
            }
        });
        
        // 然后使用 auto-render 处理行内公式
        renderMathInElement(preview, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false,
            errorColor: '#cc0000',
            strict: false
        });
    } catch (error) {
        console.error('KaTeX 渲染失败:', error);
    }
}

// ===== 代码高亮 =====
function highlightCode() {
    if (typeof hljs === 'undefined' || !preview) return;
    
    try {
        preview.querySelectorAll('pre code').forEach(function(block) {
            hljs.highlightElement(block);
        });
    } catch (error) {
        console.error('代码高亮失败:', error);
    }
}

// ===== 字数统计 =====
function updateWordCount() {
    if (!editor || !wordCount) return;
    
    const text = editor.value;
    const count = text.length;
    wordCount.textContent = count + ' 字';
}

// ===== 自动保存 =====
function scheduleAutoSave() {
    if (autoSaveTimer) {
        clearTimeout(autoSaveTimer);
    }
    autoSaveTimer = setTimeout(saveToStorage, 1000);
}

function saveToStorage() {
    try {
        if (editor) {
            localStorage.setItem('markdown-preview-content', editor.value);
        }
    } catch (e) {
        console.warn('保存到 localStorage 失败');
    }
}

function readAdminDraft() {
    try {
        const raw = localStorage.getItem(ADMIN_PREVIEW_DRAFT_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object') return null;
        return parsed;
    } catch (e) {
        console.warn('读取后台草稿失败');
        return null;
    }
}

function returnToPublish() {
    const payload = {
        content: editor ? editor.value : '',
        updatedAt: Date.now()
    };

    try {
        localStorage.setItem(ADMIN_PREVIEW_RESULT_KEY, JSON.stringify(payload));
    } catch (e) {
        console.warn('写入回填数据失败');
    }

    const draft = readAdminDraft();
    const returnUrl = draft && typeof draft.returnUrl === 'string' && draft.returnUrl ? draft.returnUrl : '/admin';
    window.location.href = returnUrl;
}

// ===== 主题切换 =====
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    
    // 更新代码高亮主题
    if (hljsTheme) {
        if (theme === 'dark') {
            hljsTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
        } else {
            hljsTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';
        }
    }
    
    // 更新图标
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.innerHTML = '<path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000 1.41.996.996 0 001.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06z"/>';
        } else {
            themeIcon.innerHTML = '<path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>';
        }
    }
    
    try {
        localStorage.setItem('markdown-preview-theme', theme);
    } catch (e) {
        console.warn('保存主题到 localStorage 失败');
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// ===== 工具栏操作 =====
function handleToolbarAction(action) {
    if (!editor) return;
    
    console.log('执行工具栏操作:', action);
    
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    let replacement = '';
    let cursorOffset = 0;
    let selectStart = 0;
    let selectEnd = 0;
    
    switch (action) {
        case 'heading':
            replacement = '## ' + (selectedText || '标题');
            cursorOffset = 3;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 2);
            break;
        case 'bold':
            replacement = '**' + (selectedText || '粗体文本') + '**';
            cursorOffset = 2;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 4);
            break;
        case 'italic':
            replacement = '*' + (selectedText || '斜体文本') + '*';
            cursorOffset = 1;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 4);
            break;
        case 'strikethrough':
            replacement = '~~' + (selectedText || '删除线文本') + '~~';
            cursorOffset = 2;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 5);
            break;
        case 'link':
            replacement = '[' + (selectedText || '链接文本') + '](https://example.com)';
            cursorOffset = 1;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 4);
            break;
        case 'image':
            replacement = '![' + (selectedText || '图片描述') + '](图片URL)';
            cursorOffset = 2;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 4);
            break;
        case 'code':
            if (selectedText.includes('\n')) {
                replacement = '\`\`\`\n' + (selectedText || '代码块') + '\n\`\`\`';
                cursorOffset = 4;
                selectStart = start + cursorOffset;
                selectEnd = selectStart + (selectedText ? selectedText.length : 3);
            } else {
                replacement = '\`' + (selectedText || '行内代码') + '\`';
                cursorOffset = 1;
                selectStart = start + cursorOffset;
                selectEnd = selectStart + (selectedText ? selectedText.length : 4);
            }
            break;
        case 'quote':
            replacement = '> ' + (selectedText || '引用文本');
            cursorOffset = 2;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 4);
            break;
        case 'list':
            replacement = '- ' + (selectedText || '列表项');
            cursorOffset = 2;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 3);
            break;
        case 'ordered-list':
            replacement = '1. ' + (selectedText || '列表项');
            cursorOffset = 3;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 3);
            break;
        case 'task-list':
            replacement = '- [ ] ' + (selectedText || '待办事项');
            cursorOffset = 6;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 4);
            break;
        case 'table':
            replacement = '| 列1 | 列2 | 列3 |\n| --- | --- | --- |\n| 内容1 | 内容2 | 内容3 |';
            cursorOffset = 0;
            selectStart = start;
            selectEnd = start + replacement.length;
            break;
        case 'formula':
            replacement = '$' + (selectedText || '公式') + '$';
            cursorOffset = 1;
            selectStart = start + cursorOffset;
            selectEnd = selectStart + (selectedText ? selectedText.length : 2);
            break;
        case 'horizontal-rule':
            replacement = '\n---\n';
            cursorOffset = 5;
            selectStart = start + replacement.length;
            selectEnd = selectStart;
            break;
        default:
            console.warn('未知的操作:', action);
            return;
    }
    
    // 插入文本
    editor.focus();
    editor.setRangeText(replacement, start, end, 'end');
    
    // 设置选区
    if (!selectedText) {
        editor.setSelectionRange(selectStart, selectEnd);
    }
    
    // 触发更新
    updatePreview();
    updateWordCount();
    scheduleAutoSave();
    
    console.log('工具栏操作完成');
}

// ===== Tab 键处理 =====
function handleTabKey(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        
        if (e.shiftKey) {
            // Shift+Tab: 减少缩进
            const lineStart = editor.value.lastIndexOf('\n', start - 1) + 1;
            const currentLine = editor.value.substring(lineStart, end);
            if (currentLine.startsWith('    ')) {
                editor.setRangeText('', lineStart, lineStart + 4, 'end');
            } else if (currentLine.startsWith('\t')) {
                editor.setRangeText('', lineStart, lineStart + 1, 'end');
            }
        } else {
            // Tab: 增加缩进
            editor.setRangeText('    ', start, end, 'end');
        }
        
        updatePreview();
        scheduleAutoSave();
    }
}

// ===== 格式切换 =====
function setActiveFormat(format) {
    currentFormat = format;
    if (formatBlogBtn) formatBlogBtn.classList.toggle('tool-btn--active', format === 'blog');
    if (formatStandardBtn) formatStandardBtn.classList.toggle('tool-btn--active', format === 'standard');
}

// ===== 视图模式切换 =====
function setViewMode(mode) {
    currentViewMode = mode;
    viewModeBtns.forEach(function(btn) {
        btn.classList.toggle('view-mode-btn--active', btn.dataset.view === mode);
    });
    if (previewTitle) {
        previewTitle.textContent = mode === 'preview' ? '预览' : '博客源码';
    }
    if (mode === 'source') {
        if (preview) preview.style.display = 'none';
        if (sourceView) {
            sourceView.style.display = 'block';
            const converted = convertToBlogMarkdown(editor ? editor.value : '');
            sourceView.value = converted;
        }
    } else {
        if (preview) preview.style.display = 'block';
        if (sourceView) sourceView.style.display = 'none';
        updatePreview();
    }
}

// ===== 转换为博客 Markdown 格式 =====
function convertToBlogMarkdown(input) {
    if (!input) return '';
    let output = input;

    // 1. 将 GFM 提醒 ( [!TIP], [!NOTE], [!WARNING], [!CAUTION], [!IMPORTANT] ) 转换为博客 tip 卡片
    const admonitionPattern = /^> \[!(\w+)\](?:[ \t]+(.*?))?\n(>(?:.*\n?))*$/gm;
    output = output.replace(admonitionPattern, function(match, type, title, body) {
        const lines = body.split('\n').map(function(line) {
            return line.replace(/^>\s?/, '');
        }).filter(function(line) {
            return line.trim() !== '';
        }).join('\n');
        const titleLine = title ? title.trim() : '';
        const content = titleLine ? titleLine + '\n' + lines : lines;
        return ':::tip\n' + content + '\n:::';
    });

    // 2. 将标准 markdown 链接 [text](url) 还原为自定义格式（如果是特殊链接）
    output = output.replace(/\[([^\]]+)\]\(https:\/\/github\.com\/([^)]+)\)/g, '::github{repo="$2"}');
    output = output.replace(/\[NetEase Music (\d+)\]\(https:\/\/music\.163\.com\/#\/song\?id=(\d+)\)/g, '::music{id="$1"}');

    // 3. 将 GFM 任务列表 - [ ] / - [x] 保持原样（博客系统也支持）

    return output;
}

function openGfmModal(content) {
    if (!gfmModal || !gfmOutput) return;
    gfmOutput.value = content;
    gfmModal.hidden = false;
    gfmModal.classList.add('is-open');
}

function closeGfmModal() {
    if (!gfmModal) return;
    gfmModal.classList.remove('is-open');
    gfmModal.hidden = true;
}

function setCopyStatus(message) {
    if (!gfmCopyBtn) return;
    const original = gfmCopyBtn.textContent || '复制';
    gfmCopyBtn.textContent = message;
    window.setTimeout(() => {
        if (gfmCopyBtn) gfmCopyBtn.textContent = original;
    }, 1200);
}

async function copyTextToClipboard(text) {
    if (!text) return false;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            console.warn('Clipboard API copy failed:', error);
        }
    }

    const temp = document.createElement('textarea');
    temp.value = text;
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    temp.style.pointerEvents = 'none';
    document.body.appendChild(temp);
    temp.focus();
    temp.select();
    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (error) {
        console.warn('Legacy copy failed:', error);
    }
    document.body.removeChild(temp);
    return success;
}

function handleGfmCopy() {
    if (!gfmOutput) return;
    const text = gfmOutput.value;
    if (!text) return;
    copyTextToClipboard(text).then((success) => {
        setCopyStatus(success ? '已复制' : '复制失败');
    });
}

function applyGfmToEditor() {
    if (!editor || !gfmOutput) return;
    editor.value = gfmOutput.value;
    updatePreview();
    updateWordCount();
    saveToStorage();
    closeGfmModal();
}

function extractAdmonitionTitle(raw) {
    if (!raw) return '';
    const bracketMatch = raw.match(/\[([^\]]+)\]/);
    if (bracketMatch) return bracketMatch[1].trim();
    const attrMatch = raw.match(/title\s*=\s*['\"]([^'\"]+)['\"]/);
    if (attrMatch) return attrMatch[1].trim();
    const cleaned = raw.replace(/\{[^}]*\}/g, '').trim();
    return cleaned;
}

function convertInlineSyntax(line) {
    if (!line) return line;
    let output = line;
    output = output.replace(/::github\{[^}]*repo\s*=\s*['\"]([^'\"]+)['\"][^}]*\}/g, '[$1](https://github.com/$1)');
    output = output.replace(/::music\{[^}]*id\s*=\s*['\"]?(\d+)['\"]?[^}]*\}/g, '[NetEase Music $1](https://music.163.com/#/song?id=$1)');
    output = output.replace(/\{([^{}\n]+)\}\(([^()\n]+)\)/g, '$1 ($2)');
    output = output.replace(/!!([^!\n]+)!!/g, '**$1**');
    output = output.replace(/==([^=\n]+)==/g, '**$1**');
    return output;
}

function convertToGithubMarkdown(input) {
    if (!input) return '';
    const lines = input.replace(/\r\n/g, '\n').split('\n');
    const output = [];
    let inFence = false;
    let fenceMarker = '';
    let inBlock = false;
    let blockType = '';
    let blockTitle = '';
    let blockLines = [];

    const isAdmonitionType = (type) => ['tip', 'note', 'important', 'warning', 'caution'].includes(type);
    const isQuoteType = (type) => type === 'quote';

    const flushBlock = () => {
        if (!blockType) return;
        if (blockType === 'quote') {
            if (blockTitle) {
                output.push(`> **${blockTitle}**`);
            }
        } else {
            const label = blockTitle ? `[!${blockType.toUpperCase()}] ${blockTitle}` : `[!${blockType.toUpperCase()}]`;
            output.push(`> ${label}`);
        }

        const contentLines = blockLines.length > 0 ? blockLines : [''];
        contentLines.forEach((line) => {
            const converted = convertInlineSyntax(line);
            output.push(converted.trim() ? `> ${converted}` : '>');
        });
    };

    for (const line of lines) {
        const fenceMatch = line.match(/^(```+|~~~+)/);

        if (inFence) {
            output.push(line);
            if (fenceMatch && line.startsWith(fenceMarker)) {
                inFence = false;
                fenceMarker = '';
            }
            continue;
        }

        if (fenceMatch) {
            inFence = true;
            fenceMarker = fenceMatch[1];
            output.push(line);
            continue;
        }

        if (inBlock) {
            if (/^\s*:::\s*$/.test(line)) {
                flushBlock();
                inBlock = false;
                blockType = '';
                blockTitle = '';
                blockLines = [];
            } else {
                blockLines.push(line);
            }
            continue;
        }

        const blockMatch = line.match(/^\s*:::(\w+)(.*)$/);
        if (blockMatch) {
            const type = blockMatch[1].toLowerCase();
            const rest = blockMatch[2] || '';
            if (isAdmonitionType(type) || isQuoteType(type)) {
                inBlock = true;
                blockType = type;
                blockTitle = extractAdmonitionTitle(rest);
                blockLines = [];
                continue;
            }
        }

        output.push(convertInlineSyntax(line));
    }

    if (inBlock) {
        flushBlock();
    }

    return output.join('\n');
}

// ===== 导出 Markdown =====
function exportMarkdown() {
    if (!editor) return;
    
    const content = editor.value;
    if (!content) {
        alert('没有内容可导出！');
        return;
    }
    
    try {
        const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'markdown-' + new Date().toISOString().slice(0, 10) + '.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('导出失败:', error);
        alert('导出失败: ' + error.message);
    }
}

// ===== 启动应用 =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM 已经加载完成
    init();
}
