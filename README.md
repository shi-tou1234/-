# 📝 My Blog (cmchen 的博客)

> 记录技术探索与生活瞬间的现代化个人博客系统。

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro)](https://astro.build)
[![Svelte](https://img.shields.io/badge/Svelte-5.x-FF3E00?logo=svelte)](https://svelte.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/github/license/shi-tou1234/-)](./LICENSE)

这是一个基于 **Astro 5** 与 **Svelte 5** 构建的高性能静态博客，融合了极致的加载速度与梦幻的动态交互体验。本项目深受 [motues/Momo](https://github.com/motues/Momo) 启发，并进行了深度的功能进化。

🔗 **访问站点**: [shi-tou1234.github.io/-](https://shi-tou1234.github.io/-/)

---

## ✨ 核心特性

### 🖼️ 极致阅读体验 (New!)
- **智能图片预览**: 全新集成的图片预览增强功能，支持**点击放大、平滑缩放与拖拽查看**，让技术图解清晰可见。
- **沉浸式交互**: 
  - 站点标题 **Hover Slice** 动态切片特效。
  - 全局自适应 **交互粒子背景**，支持阅读模式视觉降噪。
  - 实时运行时间显示，记录每一刻的成长。

### 🛠️ 强大的后台管理 (Refactored!)
- **GitHub API 深度集成**: 重构了 `AdminService` 逻辑，支持 **GitHub API 代理端点** 配置，彻底解决国内网络直连难题。
- **连接自检**: 内置「测试连接」功能，可快速验证 Token 有效性与仓库读写权限。
- **二进制上传**: 优化了图片等二进制文件的上传流，支持自动编码处理中文文件名。

### 📝 深度 Markdown 渲染
- **Typst 数学公式**: 完美支持Typst 语法，渲染效果优于传统 LaTeX。
- **富文本增强**: 支持 Ruby 注音、剧透遮盖 (Spoiler)、彩虹文字 (Rainbow Text) 等。
- **组件库**: 集成 GitHub 卡片、音乐播放器、自定义引用块 (Admonitions)。

---

## 🛠️ 技术栈

| 类别 | 技术方案 |
| :--- | :--- |
| **核心框架** | Astro 5.x (Island Architecture) + Svelte 5 (Runes) |
| **样式方案** | TailwindCSS 4.x + Vite |
| **搜索引擎** | Pagefind (毫秒级本地全文检索) |
| **部署环境** | GitHub Pages + GitHub Actions |

---

## 🌐 进化轨迹 (Recent Logs)

- **2026.03.07**: 🚀 **[New]** 增强正文图片预览交互，支持点击放大查看。
- **2026.03.01**: 🛠️ **[Refactor]** 重写 GitHub API 后台逻辑，新增端点代理配置与连接测试。
- **2026.02.26**: ✨ 增加博客介绍弹窗、运行时间显示及标题 Hover 动画。
- **2026.02.19**: 🎨 引入交互式背景粒子系统。

---

## 🏗️ 快速开始

1. **克隆并安装**:
   ```bash
   git clone https://github.com/shi-tou1234/-.git
   pnpm install
   ```
2. **本地开发**:
   ```bash
   pnpm dev
   ```
3. **管理内容**:
   访问 `/admin` 路径进入后台，配置你的 GitHub Token 即可开始创作。

---

如果你喜欢这个项目，欢迎点击右上角的 **Star** ⭐！
