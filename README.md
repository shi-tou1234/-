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

## 🚀 快速开始

### 环境要求

- Node.js >= 18.x
- pnpm >= 9.x（推荐）

### 安装

```bash
# 克隆仓库
git clone https://github.com/shi-tou1234/-.git
cd -

# 安装依赖
pnpm install
```

### 本地开发

```bash
# 启动开发服务器
pnpm dev

# 访问 http://localhost:4321
```

### 构建部署

```bash
# 构建生产版本（包含搜索索引）
pnpm build

# 预览生产构建
pnpm preview
```

### 代码检查

```bash
# 代码检查
pnpm check

# 代码格式化
pnpm lint

# 自动修复代码格式
pnpm lint:fix

# 格式化代码
pnpm format
```

## ⚙️ 配置说明

### 站点配置 (`src/config.ts`)

```typescript
export const siteConfig = {
    title: "cmchen的博客",           // 站点标题
    subTitle: "记录技术与生活",        // 站点副标题
    favicon: "/favicon/favicon.ico",  // 站点图标
    pageSize: 6,                      // 每页文章数量
    blogNavi: {
        enable: true                  // 启用博客导航
    }
}

export const profileConfig = {
    avatar: "assets/Motues.jpg",      // 头像路径
    name: "shi-tou1234",              // 显示名称
    description: "分享编程、工具和日常记录",
    indexPage: "https://shi-tou1234.github.io/-/",
    startYear: 2026,                  // 站点起始年份
}

export const licenseConfig = {
    enable: true,
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
}

export const externalUrlsConfig = {
    githubApi: "https://api.github.com",
    githubRepo: "shi-tou1234/-",
    giscusRepoId: "R_kgDORRKvYA",
    geoDataVBase: "https://geo.datav.aliyun.com/areas_v3/bound",
    geoDataVBaseLegacy: "https://geo.datav.aliyun.com/areas/bound",
}
```

### 内容配置 (`src/content.config.ts`)

文章内容采用 Astro Content Collections 管理，支持以下 Frontmatter 字段：

```yaml
---
title: 文章标题              # 必填
pubDate: 2026-02-20         # 必填，发布时间
updatedDate: 2026-02-21     # 可选，更新时间
draft: false                # 可选，草稿状态
pinned: false               # 可选，是否置顶
description: 文章描述        # 可选
image: ./assets/cover.png   # 可选，封面图片
category: 技术分享           # 可选，主分类
categories:                  # 可选，多级分类
  - 技术分享
  - Astro
slugId: unique-slug-id      # 必填，URL 标识符
---
```

### 分类系统

项目支持灵活的分类体系：

```typescript
// 单分类自动升级为多级分类
category: "电路"  // 自动升级为 ["学习笔记", "电路"]

// 多级分类
categories: ["学习笔记", "电路", "模电"]

// 访问分类页面
# 分类页面自动处理 base64 编码的分类名
/categories/b64-5Lya6K6u5a2m  // 对应 "学习笔记"
```

## 📝 创建文章

### 使用脚本创建

```bash
pnpm newpost
```

按照提示输入文章标题和分类，脚本将自动创建标准文章模板。

### 手动创建

在 `src/content/blog/<分类目录>/` 下创建 `.md` 文件：

```markdown
---
title: 新文章标题
pubDate: 2026-08-02T08:00:00.000Z
draft: false
description: 文章简要描述
category: 分类名称
slugId: unique-identifier
---

## 文章正文

这里是文章内容，支持标准 Markdown 语法。
```

## 🎯 自定义组件使用

### 数学公式

```markdown
<!-- LaTeX 行内公式 -->
$E = mc^2$

<!-- LaTeX 块级公式 -->
$$
\int_{a}^{b} x^2 dx = \frac{b^3 - a^3}{3}
$$

<!-- Typst 公式 -->
```typst
$ x = (-b +- sqrt(b^2 - 4ac)) / (2a) $
```
```

### 自定义组件

```markdown
<!-- 引用块 -->
> 这是一段引用内容

<!-- 提示框 -->
:::note
这是一个提示信息
:::

:::tip
这是一个小贴士
:::

:::important
这是重要信息
:::

:::caution
这是警告信息
:::

:::warning
这是危险警告
:::

<!-- 音乐卡片 -->
:::{ .music }
"https://music.163.com/song?id=186016"
:::

<!-- GitHub 卡片 -->
:::{ .github }
"motues/Momo"
:::

<!-- 推导过程 -->
:::{ .derivation }
$$
a^2 + b^2 = c^2
$$
:::
```

## 🔐 管理后台

访问 `/admin` 进入管理后台，需要配置访问密码。

### 后台功能

1. **文章管理**
   - 查看所有文章列表
   - 创建/编辑/删除文章
   - 文章预览与回填
   - 批量导入文章

2. **站点设置**
   - 修改站点标题、副标题
   - 更新个人资料
   - 管理工具链接
   - 编辑博客指南

3. **GitHub 连接**
   - 配置 GitHub Token
   - 选择仓库分支
   - 直接提交到远程仓库

4. **安全设置**
   - 设置访问密码
   - 配置安全策略

5. **数据导出**
   - 导出文章数据
   - 导出站点配置

### 安全配置

在 `public/admin-security.json` 中配置访问密码：

```json
{
  "password": "your-password-here"
}
```

**注意**：该文件不会提交到 Git，请手动配置。

## 🚀 部署

### GitHub Pages

项目已配置 GitHub Actions 自动部署，推送到 main 分支后自动构建并部署。

### 其他平台

构建命令：

```bash
pnpm build
```

构建产物位于 `dist/` 目录，可部署到任何静态托管服务。

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议开源。

- **署名（BY）**：必须给出适当的署名
- **非商业性使用（NC）**：不得用于商业目的
- **相同方式共享（SA）**：基于本作品的演绎作品必须以相同协议共享

## 🙏 致谢

本项目深受 [motues/Momo](https://github.com/motues/Momo) 启发，并在此基础上进行了深度功能进化。

## 📮 联系方式

- GitHub: [@shi-tou1234](https://github.com/shi-tou1234)
- 博客: [cmchen的博客](https://shi-tou1234.github.io/-/)

---

<p align="center">Made with ❤️ by cmchen</p>
