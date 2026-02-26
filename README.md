# 📝 My Blog (cmchen 的博客)

> 记录技术探索与生活瞬间的现代化个人博客系统。

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro)](https://astro.build)
[![Svelte](https://img.shields.io/badge/Svelte-5.x-FF3E00?logo=svelte)](https://svelte.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/github/license/shi-tou1234/-)](./LICENSE)

这是一个基于 **Astro 5** 与 **Svelte 5** 构建的高性能静态博客，融合了极致的加载速度与梦幻的动态交互体验。本项目深受 [motues/Momo](https://github.com/motues/Momo) 启发，并在此基础上进行了深度自定义与功能扩展。

🔗 **访问站点**: [shi-tou1234.github.io/-](https://shi-tou1234.github.io/-/)

---

## ✨ 核心特性

### 🎨 沉浸式动态交互 (New!)
- **标题视觉特效**: 站点标题集成 **Hover Slice 动态切片效果**，带来独特的品牌感。
- **动态粒子背景**: 全局自适应交互粒子背景，支持阅读模式下的视觉降噪。
- **博客介绍弹窗**: 新增站点信息弹窗，快速了解博客使命与当前状态。
- **实时运行显示**: 记录并显示博客的精准运行时间，见证成长的每一秒。

### 📝 深度 Markdown 渲染能力
- **Typst 数学公式**: 通过 `remark-typst` 完美支持 Typst 语法，渲染比传统 LaTeX 更精美的数学文档。
- **增强富文本**:
    - `{文字}(拼音)`: 原生注音符号 (Ruby) 支持。
    - `!!剧透!!`: 模糊遮盖效果 (Spoiler)。
    - `==彩虹==`: 绚丽的渐变文本 (Rainbow Text)。
- **丰富组件库**: 集成 GitHub 卡片、音乐播放器卡片、自定义引用块 (Admonitions)。

### 🚀 高效创作后台
- **集成编辑器**: 内置 Markdown 快捷插入菜单（支持一键插入公式、卡片、友链结构等）。
- **极速检索**: 基于 [Pagefind](https://pagefind.app/) 的本地全文检索，毫秒级响应。
- **自动化流**: 提供 `pnpm newpost` 脚本快速生成规范的文章模板。

## 🛠️ 技术栈

| 类别 | 技术方案 |
| :--- | :--- |
| **核心框架** | Astro 5.x (Island Architecture) + Svelte 5 (Runes) |
| **样式方案** | TailwindCSS 4.x + Vite |
| **内容处理** | Remark / Rehype 插件链 + KaTeX + Typst |
| **部署环境** | GitHub Pages + GitHub Actions |

---

## 🌐 进化轨迹 (Site Log)

- **2026.02.26**: 🚀 增加博客介绍弹窗、运行时间显示、以及右上角标题 Hover 动画。
- **2026.02.25**: 🛠️ 优化 UI 响应速度与流畅性，新增后端一键插入友链结构。
- **2026.02.21**: 📱 完成窄屏适配优化，栏目导航动态侧滑显示。
- **2026.02.19**: ✨ 引入交互式背景粒子系统。
- **2026.02.12**: 🌱 项目立项，探索 Vibe Coding 开发模式。

---

## 🏗️ 快速开始

1. **克隆仓库**:
   ```bash
   git clone https://github.com/shi-tou1234/-.git
   ```
2. **安装依赖**:
   ```bash
   pnpm install
   ```
3. **本地开发**:
   ```bash
   pnpm dev
   ```
4. **撰写新文**:
   ```bash
   pnpm newpost
   ```

---

如果你喜欢这个项目，欢迎点击右上角的 **Star** ⭐！
