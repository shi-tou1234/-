# 公式 Hover 推导浮层 + 后台统一重写 实施计划

> **For Claude:** 本计划分两大块（A/B），文件层面基本不交叉，可并行推进。执行时用 `astro check` + 手动验证清单作为验证手段（项目无测试框架）。每个任务完成后建议提交一次。

**目标：**
- A：让公式支持 hover/点击弹出推导与图解，作者只需用 `:::derivation` 容器标记，零 ID 自动关联。
- B：把分裂的 6 个后台模块重写为侧边栏 Tab 布局，文章编辑器升级为三栏分屏 + 工具栏 + 实时预览，AdminSiteSettings 拆成 8 个子组件 + 子 Tab。

**架构：**
- A：rehype 组件把 `:::derivation` 渲染成 hidden div，客户端脚本运行时自动绑定前一个 `.katex-display`，桌面 hover / 移动端 click 弹出浮层。
- B：admin.astro 改为侧边栏 Tab 骨架；AdminPostManager 重写为三栏（列表/编辑/预览）；AdminSiteSettings 拆为 8 个子组件 + 顶部子 Tab；实时预览用 iframe 嵌入现有 `/admin-preview/?embed=1`（给预览器加 postMessage 监听模式）。业务工具层（core.ts/login.ts/github-connection.ts/export.ts/site-settings.ts）逻辑保留不动，仅调整 posts.ts 渲染与事件绑定。

**技术栈：** Astro 5 + Svelte + Tailwind 4 + remark/rehype + KaTeX + marked（预览器现有）

**硬约束（来自项目记忆）：**
- CSS transition 统一用 `cubic-bezier(0.23, 1, 0.320, 1)` / `0.32s`
- 移动端兼容 iOS 12+ / Android 8.0+（Chrome/Safari/Firefox）
- hover 不可靠的场景必须提供 click 替代
- 动画用 transform/opacity（GPU 加速），避免 padding-left/letter-spacing/font-weight 等 layout reflow 属性
- 不触碰 admin-security.json、GitHub Token 存储、后台登录链路（安全零回归）
- 后台 select 下拉用主题色 `var(--bg-color)` / `var(--text-color)`

---

## 方案 A：公式 Hover 推导浮层

### 任务 A1：新增 rehype-component-derivation 插件

**Files:**
- Create: `src/plugins/rehype-component-derivation.mjs`
- Modify: `src/plugins/plugin-utils.mjs`（若需 escapeHtml 复用，已有则跳过）

**实现：** 参照 [rehype-component-admonition.mjs](file:///d:/项目/blog/src/plugins/rehype-component-admonition.mjs) 的写法，把 `:::derivation` 容器转成 `<div class="derivation-block" hidden>...children...</div>`。

```js
// src/plugins/rehype-component-derivation.mjs
import { h } from "hastscript";

export function DerivationComponent(properties, children) {
  if (!Array.isArray(children) || children.length === 0) {
    return h("div", { class: "hidden" }, "Invalid derivation directive.");
  }
  // has-directive-label 时跳过第一个子节点（label），与 admonition 一致
  let body = children;
  if (properties?.["has-directive-label"]) {
    body = children.slice(1);
  }
  return h("div", { class: "derivation-block", hidden: true, "aria-hidden": "true" }, body);
}
```

**验证：** 暂不注册，先确保文件无语法错误。

### 任务 A2：注册插件到 astro.config.mjs

**Files:**
- Modify: `astro.config.mjs`（import + components 注册）

**改动：**
1. 顶部 import：`import { DerivationComponent } from "./src/plugins/rehype-component-derivation.mjs";`
2. 在 `rehypeComponents.components` 对象里加一行：`derivation: DerivationComponent,`

**验证：** `pnpm dev` 启动无报错；在任一文章里写 `:::derivation\n测试\n:::`，构建后 DOM 里出现 `<div class="derivation-block" hidden>...`。

### 任务 A3：新增 DerivationPopup 组件 + CSS

**Files:**
- Create: `src/components/misc/DerivationPopup.astro`
- Modify: `src/styles/markdown.css`（追加样式，约 50 行）

**DerivationPopup.astro 逻辑：**
- 客户端 `<script>` 扫描页面上所有 `.derivation-block`
- 每个 derivation 向上查找前一个兄弟节点中的 `.katex-display`（display 公式）或 `.katex`（行内公式）
- 找到后：给公式加 `derivable` class（虚线下划线 + cursor:help + tabindex=0 + role=button + aria-expanded=false）
- 把 derivation 内容移入浮层 DOM（公式节点下方的 absolute 定位容器）
- 桌面：mouseenter/focus 显示，mouseleave/blur 隐藏
- 移动端（通过 `matchMedia('(hover: none)')` 检测）：click 切换显示/隐藏
- 浮层定位：`position: absolute`，相对公式父容器；超出视口右侧时自动左移
- 关闭：点击浮层外部 / ESC / 失焦

**CSS 要点（markdown.css 追加）：**
```css
/* 公式可推导提示 */
.markdown-content .katex-display.derivable,
.markdown-content .katex.derivable {
  border-bottom: 1px dashed var(--button-border-color);
  cursor: help;
  position: relative;
}

/* 浮层 */
.derivation-popup {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: var(--bg-color);
  border: 1px solid var(--button-border-color);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  box-shadow: 0 8px 24px var(--shadow-color);
  z-index: 20;
  max-height: 60vh;
  overflow-y: auto;
  opacity: 0;
  transform: translateY(4px);
  pointer-events: none;
  transition: opacity 0.32s cubic-bezier(0.23, 1, 0.320, 1),
              transform 0.32s cubic-bezier(0.23, 1, 0.320, 1);
}
.derivation-popup.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.derivation-popup-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}
/* 移动端展开图标提示 */
.markdown-content .katex-display.derivable::after {
  content: "🔍";
  position: absolute;
  top: -0.5rem;
  right: 0;
  font-size: 0.75rem;
  opacity: 0.6;
}
```

**验证：** 在测试文章里写一个公式 + `:::derivation`，桌面 hover 公式弹出推导；移动端点击展开；ESC 关闭；无 derivation 的公式无任何变化。

### 任务 A4：在文章页引入 DerivationPopup

**Files:**
- Modify: `src/pages/[...locale]/blog/[...id].astro`（import + 放置组件）

**改动：** 在文章正文渲染区后引入 `<DerivationPopup />`。组件本身只输出一个 `<script>`，无可见 DOM。

**验证：**
- [ ] 有 derivation 的公式：hover 弹出，动画顺滑无卡顿
- [ ] 移动端点击展开/收起
- [ ] 无 derivation 的公式：显示与现状完全一致
- [ ] 推导容器内可包含公式、图片、列表，渲染正确
- [ ] `astro check` 通过
- [ ] iOS Safari / Android Chrome 点击正常

**提交：** `feat: 公式 hover 推导浮层（:::derivation 容器）`

---

## 方案 B：后台统一重写

### 任务 B1：给 admin-preview 加 embed 模式（为实时预览做准备）

**Files:**
- Modify: `public/admin-preview/js/app.js`
- Modify: `public/admin-preview/index.html`（可选，加一个隐藏编辑器的 class）

**改动：** app.js 的 `init()` 里检测 URL 参数 `?embed=1`：
- 若 embed 模式：隐藏左侧编辑器/工具栏，只显示预览区；监听 `window.addEventListener('message', ...)`，收到 `{type:'preview-update', content}` 时更新 `editor.value` 并触发渲染
- 非 embed 模式：行为完全不变（兼容现有独立预览器）

**验证：** 访问 `/admin-preview/?embed=1`，编辑器 UI 隐藏；通过 devtools `postMessage({type:'preview-update',content:'# 测试'}, '*')` 能更新预览；无参数访问行为不变。

**提交：** `feat: admin-preview 支持 embed 模式用于后台实时预览`

### 任务 B2：新建 AdminLayout 侧边栏 Tab 骨架

**Files:**
- Create: `src/components/admin/AdminLayout.astro`

**设计：**
- 左侧固定侧边栏（宽度 200px，移动端折叠为顶部水平滚动 Tab）
- 5 个 Tab：📝 文章 / ⚙️ 设置 / 🔒 安全 / 📦 导出 / 🔗 GitHub
- 内容区右侧主区域，通过 JS 切换 `data-tab` 显示/隐藏对应 panel
- 顶部栏：标题 + 退出登录 + 打开前台
- 登录前只显示登录面板；登录后（`sessionStorage.cmchen_admin_ok === '1'`）显示侧边栏 + 内容

**验证：** 暂不放内容，先确认 Tab 切换交互正常，移动端折叠正常。

### 任务 B3：重写 admin.astro 接入 AdminLayout

**Files:**
- Modify: `src/pages/admin.astro`

**改动：**
- 引入 AdminLayout
- 各 Admin* 组件作为 Tab panel 内容，包裹在 `<div data-panel="posts">` 等
- 保留现有 `<script>` 初始化逻辑（initLoginHandlers 等不变）
- 登录成功后自动切换到"文章" Tab

**验证：** 登录后能看到侧边栏 + 5 个 Tab 切换；各模块原有功能不受影响（先确保不回归）。

**提交：** `refactor: 后台改为侧边栏 Tab 布局`

### 任务 B4：重写 AdminPostManager 为三栏分屏

**Files:**
- Modify: `src/components/admin/AdminPostManager.astro`
- Modify: `src/utils/admin/posts.ts`（`loadPostList` 渲染逻辑）
- Create: `src/components/admin/PostToolbar.astro`（工具栏）

**布局：**
```
左栏（列表，280px）| 中栏（编辑器）| 右栏（预览，40%）
```
移动端：三栏改为单栏 + 顶部 Tab 切换（列表/编辑/预览）。

**左栏改进：**
- `<select>` → 自定义 `<div>` 列表，每项显示：标题（首行）+ 日期 + 分类标签 + 置顶图标
- 顶部搜索框（按标题/slug 过滤）
- 底部 [+ 新建] 按钮
- 选中项高亮

**中栏改进：**
- 标题输入框置顶（大字号）
- 工具栏按钮组（替代 select）：`[B] [I] [S] [H2] [H3] [链接] [图片] [上传] [代码] [公式行] [公式块] [列表] [引用] [tip] [表格] [分隔]`，点击直接 insertAtCursor
- 正文 textarea（最小高度 60vh，monospace 字体）
- 元数据折叠面板（slug/日期/分类/小分类/简介/封面/置顶），日期默认展开
- 底部操作栏：[保存] [删除当前语言] [删除整个目录]

**右栏改进：**
- iframe 嵌入 `/admin-preview/?embed=1`
- textarea 输入时 debounce 300ms，postMessage 推送内容到 iframe
- 顶部小切换：预览/源码

**posts.ts 改动：**
- `loadPostList`：渲染自定义列表项（需获取每篇文章标题——`listBlogMarkdownEntries` 已有 path，可顺带 fetch frontmatter；为省请求，先只显示 slug+lang，标题异步补全）
- 加 `debounceAutoSave()`：textarea input 时 debounce 2s 调 `saveGitHubDraft()`，顶部显示"已自动保存 HH:MM"

**保留：** 所有现有函数（ensurePostSlug, loadSelectedPostToEditor, publishPost 等）逻辑不动，仅调整事件绑定目标 ID。

**验证：**
- [ ] 文章列表显示标题+日期+分类
- [ ] 工具栏按钮点击直接插入语法
- [ ] 右侧实时预览（输入后 300ms 更新）
- [ ] 自动保存提示
- [ ] 移动端三栏切单栏 Tab
- [ ] 保存/删除功能正常

**提交：** `feat: 文章编辑器三栏分屏 + 工具栏 + 实时预览`

### 任务 B5：拆分 AdminSiteSettings 为 8 个子组件 + 子 Tab

**Files:**
- Modify: `src/components/admin/AdminSiteSettings.astro`（改为子 Tab 容器）
- Create: `src/components/admin/settings/AboutMarkdown.astro`
- Create: `src/components/admin/settings/AboutTimeline.astro`
- Create: `src/components/admin/settings/AboutPersonal.astro`
- Create: `src/components/admin/settings/AboutProfile.astro`
- Create: `src/components/admin/settings/ToolsLinks.astro`
- Create: `src/components/admin/settings/SiteSlogan.astro`
- Create: `src/components/admin/settings/HeaderContact.astro`
- Create: `src/components/admin/settings/BlogGuide.astro`

**改动：**
- AdminSiteSettings 改为顶部水平子 Tab 容器（8 个 Tab），内容区切换显示对应子组件
- 每个子组件把原 AdminSiteSettings 对应区块的 HTML 原样搬过去，DOM id 保持不变（site-settings.ts 事件绑定不动）
- TravelMap 留在 AboutPersonal 子组件内

**验证：**
- [ ] 8 个子 Tab 切换正常
- [ ] 各子模块加载/保存功能正常（DOM id 未变）
- [ ] TravelMap 在"个人介绍" Tab 内正常显示
- [ ] 颜色选择器在"工具链接" Tab 内正常

**提交：** `refactor: AdminSiteSettings 拆分为 8 个子组件 + 子 Tab`

### 任务 B6：统一加载入口

**Files:**
- Modify: `src/pages/admin.astro`（script 段）
- Modify: `src/utils/admin/site-settings.ts`（导出各 load 函数，已有）

**改动：**
- 登录成功后（`initLoginHandlers` 回调）自动依次调用各设置模块的 load 函数（loadAboutMarkdown, loadToolsLinks 等），而非让用户手动点
- 顶部显示"加载中..."进度，全部完成后显示"已加载全部设置"
- 各模块仍保留独立"保存"按钮（保存是按需的，不自动）

**验证：** 登录后所有设置 Tab 的内容自动填充，无需手动点"加载"。

**提交：** `feat: 后台登录后自动加载所有设置`

### 任务 B7：后台专属样式

**Files:**
- Create: `src/styles/admin.css`（或追加到现有 style 块）
- Modify: `src/pages/admin.astro`（import 样式）

**内容：**
- 侧边栏样式（固定、主题色、hover）
- Tab 激活态样式
- 三栏分屏布局（桌面 grid，移动端 flex column + Tab）
- 文章列表项样式（hover、选中、置顶图标、分类标签）
- 工具栏按钮样式（紧凑、图标）
- 预览 iframe 容器样式
- select 下拉用 `var(--bg-color)` / `var(--text-color)`（遵循约束）

**验证：** 深色/浅色主题下都正常；移动端布局不溢出。

**提交：** `style: 后台专属样式（分屏、工具栏、列表）`

### 任务 B8：收尾验证

**验证清单：**
- [ ] `astro check` 通过
- [ ] `pnpm build` 成功
- [ ] 登录 → 自动加载全部设置
- [ ] 文章：新建/编辑/保存/删除
- [ ] 文章：工具栏插入语法
- [ ] 文章：实时预览
- [ ] 文章：自动保存
- [ ] 设置：8 个子 Tab 切换 + 各自保存
- [ ] 安全：修改密码
- [ ] 导出：CSV/Markdown
- [ ] GitHub：测试连接
- [ ] 移动端：侧边栏折叠 + 三栏单栏切换
- [ ] 深色/浅色主题正常
- [ ] 安全链路无回归（admin-security.json 不可公开访问、登录禁用回退）

**提交：** `chore: 后台重写收尾验证`

---

## 风险与回滚

| 风险 | 缓解 |
|---|---|
| 后台重写引入安全回归 | 工具层（core/login/github/export/site-settings）逻辑零改动，只动 UI 层 |
| 实时预览 iframe 跨域 | 同源（都在 `/-/admin-preview/`），postMessage 无跨域问题 |
| 文章列表标题需额外请求 | 先显示 slug，标题异步补全（不阻塞） |
| 移动端三栏溢出 | 改为单栏 Tab 切换，遵循 iOS12+/Android8+ 约束 |
| hover 浮层遮挡正文 | 浮层 absolute 定位，max-height 60vh + 滚动，点击外部关闭 |

**回滚：** 两块各自独立提交，可单独 revert。后台重写按任务粒度提交（B1-B8），可回滚到任一中间状态。

---

## 执行顺序建议

A 和 B 文件层面不交叉，可并行：
- A1-A4 动 `src/plugins/` + `src/components/misc/` + `src/styles/markdown.css`
- B1-B8 动 `public/admin-preview/` + `src/components/admin/` + `src/pages/admin.astro` + `src/utils/admin/posts.ts`

唯一共享文件是 `src/styles/markdown.css`（A 追加浮层样式），但 B7 的后台样式走独立 `admin.css`，不冲突。

建议：A 全程独立可并行；B 内部 B1→B2→B3 串行（布局依赖），B4/B5 可并行，B6/B7 串行，B8 收尾。
