# cmchen的博客

一个基于 [Astro](https://astro.build) 构建的现代化静态博客站点，深受 [motues/Momo](https://github.com/motues/Momo) 启发并进行了深度功能进化。本项目专注于提供极致的阅读体验、强大的数学公式支持以及便捷的文章管理能力。

## ✨ 功能特性

### 📝 核心博客功能
- **Markdown 文章管理**：基于 Astro Content Collections 的文章系统，支持 Frontmatter 元数据
- **文章分类与标签**：灵活的分类体系，支持多级分类和标签系统
- **归档页面**：按时间线展示所有文章，支持分页浏览
- **阅读进度条**：实时显示文章阅读进度，提升阅读体验
- **阅读时间估算**：自动计算文章预计阅读时长
- **文章置顶**：支持重要文章置顶展示

### 🎨 界面与交互
- **响应式设计**：完美适配桌面端、平板和移动设备
- **暗黑/明亮模式**：支持系统主题自动切换，也可手动切换
- **字体大小控制**：读者可自定义正文字体大小
- **AOS 滚动动画**：流畅的元素入场动画效果
- **粒子动画背景**：基于 tsparticles 的交互式粒子效果
- **页面过渡动画**：Astro View Transitions 带来的丝滑页面切换

### 🔧 高级功能
- **数学公式渲染**：完整支持 LaTeX（KaTeX）和 Typst 数学公式
- **自定义组件**：
  - 音乐卡片（embed 音乐播放器）
  - GitHub 卡片（展示仓库信息）
  - 引用块（样式化引用）
  - 推导过程（数学推导展示）
  - 提示框（Note/Tip/Important/Caution/Warning）
- **代码高亮**：Shiki 提供的精美代码语法高亮
- **全文搜索**：基于 Pagefind 的静态站点搜索引擎
- **国际化支持**：内置 i18n 框架，支持多语言扩展

### 🛡️ 管理后台
- **GitHub 集成**：通过 GitHub API 实现远程文章管理
- **文章管理**：在线创建、编辑、删除文章
- **站点设置**：动态修改站点配置（标题、头像、签名等）
- **安全配置**：基于 JSON 文件的访问密码保护
- **数据导出**：支持批量导出站点数据
- **预览功能**：文章实时预览与回填
- **PDF 转图片**：内置 PDF 页面渲染为图片功能
- **文件上传**：支持文章附件和资源文件上传

### 📊 数据可视化
- **访问统计热力图**：基于 GitHub 贡献图风格的访问可视化
- **ECharts 集成**：支持复杂数据图表展示

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| [Astro](https://astro.build) 5.x | 静态站点生成框架 |
| [TypeScript](https://www.typescriptlang.org/) 5.x | 类型安全的 JavaScript |
| [Tailwind CSS](https://tailwindcss.com) 4.x | 实用优先的 CSS 框架 |
| [Shiki](https://shiki.style) | 代码语法高亮 |
| [KaTeX](https://katex.org) | LaTeX 数学公式渲染 |
| [Typst](https://typst.app) | 科学文档排版引擎 |
| [Pagefind](https://pagefind.app) | 静态站点搜索 |
| [AOS](https://michalsnik.github.io/aos/) | 滚动动画库 |
| [tsparticles](https://particles.js.org) | 粒子动画效果 |
| [ECharts](https://echarts.apache.org) | 数据可视化图表 |
| [astro-icon](https://www.astroicon.dev) | 图标管理 |
| [pnpm](https://pnpm.io) | 高效的包管理器 |

## 📦 项目结构

```
博客站点/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署配置
├── config/
│   └── mcporter.json           # McPorter 配置
├── public/
│   ├── admin-preview/
│   │   └── js/
│   │       └── app.js          # 预览工具脚本
│   ├── favicon/
│   │   └── favicon.ico         # 网站图标
│   ├── maps/
│   │   └── china.full.json     # 地图数据
│   └── admin-security.json     # 后台访问密码（需自行配置）
├── script/
│   └── newpost.js              # 新建文章脚本
├── src/
│   ├── assets/                 # 静态资源（图片等）
│   ├── components/             # Astro 组件
│   │   ├── Cover.astro         # 封面组件
│   │   ├── Footer.astro        # 页脚组件
│   │   ├── Header.astro        # 头部导航组件
│   │   ├── NavCard.astro       # 导航卡片
│   │   ├── PostCard.astro      # 文章卡片
│   │   └── PostPage.astro      # 文章页面组件
│   ├── content/                # 内容目录
│   │   ├── blog/               # 博客文章（Markdown）
│   │   │   ├── ai工具/
│   │   │   ├── ide/
│   │   │   ├── 三极管/
│   │   │   └── ...            # 按分类组织的文章
│   │   └── spec/               # 规格说明文档
│   │       └── about/
│   ├── data/                   # 数据文件（TypeScript）
│   │   ├── about-personal.ts   # 个人简介数据
│   │   ├── about-profile.ts    # 个人资料
│   │   ├── blog-guide-content.ts # 博客指南内容
│   │   ├── cover-image-config.ts # 封面图片配置
│   │   ├── header-contact.ts   # 联系方式
│   │   ├── home-cover.ts       # 首页封面配置
│   │   ├── site-slogan.ts      # 站点签名
│   │   └── tools-links.ts      # 工具链接
│   ├── i18n/                   # 国际化
│   │   ├── language/
│   │   │   └── zh-cn.ts        # 中文翻译
│   │   ├── key.ts              # 翻译键类型定义
│   │   └── translation.ts      # 翻译函数
│   ├── layouts/                # 布局组件
│   │   └── Layout.astro        # 全局布局
│   ├── pages/                  # 页面路由
│   │   ├── blog/
│   │   │   └── [...id].astro   # 博客文章详情页
│   │   ├── 404.astro           # 404 页面
│   │   ├── [...page].astro     # 通用页面
│   │   ├── about.astro         # 关于页面
│   │   ├── admin.astro         # 管理后台
│   │   ├── archives.astro      # 归档页面
│   │   └── tools.astro         # 工具页面
│   ├── plugins/                # Markdown 插件
│   │   ├── remark-*.mjs        # Remark 插件
│   │   └── rehype-*.mjs        # Rehype 插件
│   ├── styles/                 # 全局样式
│   │   ├── global.css          # 全局样式
│   │   ├── markdown.css        # Markdown 内容样式
│   │   ├── scrollbar.css       # 滚动条样式
│   │   ├── special.css         # 特殊效果样式
│   │   └── variables.css       # CSS 变量定义
│   ├── types/                  # TypeScript 类型定义
│   │   └── config.ts           # 配置类型
│   ├── utils/                  # 工具函数
│   │   ├── admin/              # 后台管理工具
│   │   │   ├── constants.ts    # 常量定义
│   │   │   ├── core.ts         # 核心逻辑
│   │   │   ├── export.ts       # 导出功能
│   │   │   ├── index.ts        # 统一导出
│   │   │   ├── login.ts        # 登录逻辑
│   │   │   └── posts.ts        # 文章管理
│   │   ├── admin-service.ts    # GitHub API 服务
│   │   ├── blog-taxonomy.ts    # 文章分类工具
│   │   ├── content-utils.ts    # 内容处理工具
│   │   └── ...                 # 其他工具函数
│   ├── config.ts               # 站点配置
│   └── content.config.ts       # 内容集合配置
├── .gitignore                  # Git 忽略配置
├── .prettierignore             # Prettier 忽略配置
├── .prettierrc.json            # Prettier 配置
├── LICENSE                     # 开源协议
├── README.md                   # 项目说明文档
├── astro.config.mjs            # Astro 配置
├── eslint.config.js            # ESLint 配置
├── lighthouserc.json           # Lighthouse 配置
├── package.json                # 项目依赖
├── pagefind.yml                # 搜索配置
├── pnpm-lock.yaml              # pnpm 锁定文件
├── pnpm-workspace.yaml         # pnpm 工作空间配置
└── tsconfig.json               # TypeScript 配置
```
## 🙏 致谢

本项目深受 [motues/Momo](https://github.com/motues/Momo) 启发，并在此基础上进行了深度功能进化。
---

<p align="center">Made with ❤️ by cmchen</p>
