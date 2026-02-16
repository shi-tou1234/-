# cmchen 的博客

基于 Astro 构建，部署在 GitHub Pages，支持中英文与后台在线管理（发布/删除文章、编辑 About、友链、联系方式）。

## 站点功能

- 博客首页与归档（按发布时间倒序）
- 中英文切换
- 评论系统（Momo-Backend）
- 后台管理页面：`/-/admin/`
    - 发布/更新文章
    - 上传图片与视频
    - 插入 iframe 模板
    - 删除指定博客（单语言或整目录）
    - 编辑 About、友链、右上角联系方式
    - 管理员密码哈希配置（跨设备统一）

## 本地开发

```bash
pnpm install
pnpm dev
```

本地默认地址：`http://localhost:4321`

## 构建与预览

```bash
pnpm build
pnpm preview
```

## 目录说明

- `src/content/blog/`：博客文章内容
- `src/content/spec/about/`：About 页面内容
- `src/data/friend-links.ts`：友链数据
- `src/data/header-contact.ts`：右上角 GitHub/邮箱配置
- `public/admin-security.json`：后台密码哈希配置
- `src/pages/admin.astro`：后台管理页面

## 部署

仓库使用 GitHub Actions 自动部署到 GitHub Pages。
推送到 `main` 分支后会自动触发部署。
