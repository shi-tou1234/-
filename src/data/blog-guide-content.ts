export type BlogGuideLocaleContent = {
  title: string;
  subtitle: string;
  items: string[];
};

export type BlogGuideContent = {
  "zh-cn": BlogGuideLocaleContent;
  en: BlogGuideLocaleContent;
};

const blogGuideContent: BlogGuideContent = {
  "zh-cn": {
    title: "博客使用指南",
    subtitle: "首次访问自动弹出；你可以随时通过右上角问号按钮重新打开。",
    items: [
      "首页更新提示：发布新内容或更新旧文后，首页会弹出一次更新通知，可直达最新文章。",
      "顶部导航：快速进入首页、归档、关于、工具栏；工具栏页面内整合了常用工具和站点链接，移动端可通过菜单操作。",
      "全站搜索：支持标题与正文关键词检索，快捷键 / 或 Ctrl/Cmd + K 可快速唤起。",
      "主题与偏好：支持亮色/暗色主题切换，本地自动记忆你的选择。",
      "正文阅读：支持双击正文进入全屏阅读，再次双击退出；适合沉浸式长文阅读。",
      "图片预览：点击图片可全屏查看，支持手势/滚轮缩放、拖拽查看和多图切换。",
      "目录与同类文章：支持目录定位和同分类推荐，快速跳转到感兴趣段落与内容。",
      "便捷操作：右侧提供返回顶部等工具，减少长文来回滚动成本。"
    ]
  },
  en: {
    title: "Blog User Guide",
    subtitle: "Shown automatically on first visit. Reopen anytime with the top-right help button.",
    items: [
      "Homepage update notice: after new posts or revisions, a one-time popup helps you jump to the latest update.",
      "Top navigation: quickly access Home, Archives, About, and Tools; the Tools page combines useful tools and site links, with mobile menu support.",
      "Global search: find content by title or body keywords, and open instantly with / or Ctrl/Cmd + K.",
      "Theme and preferences: switch between light/dark themes; your preference is stored locally.",
      "Article reading: double-click the main text to enter fullscreen reading, and double-click again to exit.",
      "Image preview: click images for fullscreen viewing with wheel/pinch zoom, drag panning, and gallery navigation.",
      "TOC and related posts: use outline navigation and same-category recommendations for faster exploration.",
      "Convenience tools: floating actions like back-to-top reduce scrolling effort in long reads."
    ]
  }
};

export default blogGuideContent;
