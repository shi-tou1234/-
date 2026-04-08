# 项目文件夹结构说明

本文档详细说明了项目中各个文件夹的作用和用途。

## 根目录结构

### 📁 `.github/`
存放 GitHub 相关配置文件：
- **workflows/**: GitHub Actions 工作流配置，用于自动化 CI/CD 流程

### 📁 `src/`
项目的主要源代码目录，包含所有应用程序代码：

#### 📂 `src/assets/`
静态资源文件：
- 图片资源（如头像 `Motues.jpg`、404 页面图片等）
- 这些资源会被 Astro 处理和优化

#### 📂 `src/components/`
可复用的 Astro 组件：
- `Cover.astro`: 封面组件
- `Footer.astro`: 页脚组件
- `Header.astro`: 页头导航组件
- `PostCard.astro`: 博客文章卡片组件
- `PostPage.astro`: 博客文章页面组件
- `control/`: 控制类组件子目录
- `misc/`: 其他杂项组件子目录

#### 📂 `src/content/`
内容集合目录，存放博客文章和其他内容：
- **blog/**: 博客文章（Markdown 格式）
- **spec/**: 规范说明文档（Markdown 格式）

由 `content.config.ts` 定义内容集合的 schema 和结构。

#### 📂 `src/data/`
静态数据文件：
- `about-profile.ts`: 个人简介数据
- `blog-guide-content.ts`: 博客指南内容
- `friend-links.ts`: 友情链接数据
- `header-contact.ts`: 头部联系方式数据

#### 📂 `src/i18n/`
国际化配置：
- `key.ts`: i18n 键定义
- `translation.ts`: 翻译工具函数
- `language/`: 语言包目录（支持中文和英文）

#### 📂 `src/layouts/`
页面布局组件：
- `Layout.astro`: 基础布局模板
- `MainPageLayout.astro`: 主页面布局模板

布局定义了页面的整体结构和通用元素。

#### 📂 `src/pages/`
路由页面目录：
- `404.astro`: 404 错误页面
- `admin.astro`: 管理后台页面
- `rss.xml.ts`: RSS 订阅源生成
- `[...locale]/`: 支持多语言的动态路由页面

Astro 基于文件系统路由，此目录中的文件会自动生成对应路由。

#### 📂 `src/plugins/`
自定义插件和扩展：
- **rehype 插件**: 处理 HTML AST
  - `rehype-component-admonition.mjs`: 警告提示组件
  - `rehype-component-github-card.mjs`: GitHub 卡片组件
  - `rehype-component-music-card.mjs`: 音乐卡片组件
  - `rehype-component-quote.mjs`: 引用组件
  - `rehype-figure-plugin.mjs`: 图片说明插件
- **remark 插件**: 处理 Markdown AST
  - `remark-auto-math.mjs`: 自动数学公式处理
  - `remark-combined.mjs`: 组合多个 remark 插件
  - `remark-directive-rehype.js`: 指令转换
  - `remark-normalize-links.mjs`: 链接规范化
  - `remark-typst.mjs`: Typst 排版支持

#### 📂 `src/styles/`
全局样式文件：
- `global.css`: 全局通用样式
- `markdown.css`: Markdown 内容样式
- `scrollbar.css`: 滚动条样式
- `special.css`: 特殊效果样式
- `variables.css`: CSS 变量定义

#### 📂 `src/types/`
TypeScript 类型定义：
- `config.ts`: 配置相关类型
- `friend.ts`: 友链相关类型

#### 📂 `src/utils/`
工具函数库：
- `admin-service.ts`: 管理后台服务
- `blog-taxonomy.ts`: 博客分类工具
- `content-utils.ts`: 内容处理工具
- `reading-time.ts`: 阅读时间计算
- `time.ts`: 时间处理工具
- `url-utils.ts`: URL 处理工具

#### 📄 `src/config.ts`
站点主配置文件，包含：
- 站点基本信息（标题、副标题等）
- 个人资料配置
- 许可证配置
- 友链配置

#### 📄 `src/content.config.ts`
内容集合配置文件，定义博客和规范文档的数据 schema。

### 📁 `public/`
静态公共资源目录：
- **favicon/**: 网站图标文件
- `admin-security.json`: 管理后台安全配置

此目录中的文件会直接复制到构建输出，不经过处理。

### 📁 `script/`
辅助脚本：
- `newpost.js`: 创建新博客文章的脚本工具

可通过 `pnpm newpost` 命令执行。

### 📁 `doc/`
项目文档目录：
- `README_zh-cn.md`: 中文版说明文档
- `config_zh-cn.md`: 中文版配置指南
- `images/`: 文档图片资源

## 配置文件说明

### 📄 `astro.config.mjs`
Astro 框架主配置文件，配置：
- 站点 URL 和基础路径
- 国际化（i18n）设置
- 集成插件（图标、Svelte）
- Markdown 处理插件
- Vite 配置

### 📄 `package.json`
Node.js 项目配置：
- 项目元信息
- 依赖包管理
- npm 脚本命令

### 📄 `tsconfig.json`
TypeScript 编译配置

### 📄 `svelte.config.js`
Svelte 框架配置

### 📄 `pagefind.yml`
Pagefind 搜索功能配置

### 📄 `pnpm-workspace.yaml`
pnpm 工作空间配置

### 📄 `.gitignore`
Git 忽略文件配置

## 项目技术栈

- **框架**: Astro 5.x（静态站点生成器）
- **UI 组件**: Svelte 5.x
- **样式**: Tailwind CSS 4.x
- **内容**: Markdown + MDX
- **搜索**: Pagefind
- **数学公式**: KaTeX
- **包管理**: pnpm
- **语言**: TypeScript

## 开发命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # 构建生产版本
pnpm preview  # 预览构建结果
pnpm newpost  # 创建新文章
```
