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
    title: "博客功能简介",
    subtitle: "首次访问会自动弹出，关闭后可用右上角问号按钮再次打开。",
    items: [
      "首页更新提示：后台更新旧文或新文后，首页会弹出一次更新通知，可直接跳转到最新文章。",
      "顶部导航：快速进入首页、归档、分类、关于、友链等页面；移动端可在菜单里操作。",
      "搜索功能：支持标题与正文关键词检索，快捷键 / 或 Ctrl/Cmd + K 可快速打开。",
      "主题切换：支持亮色/暗色主题，系统会记住你的偏好设置。",
      "文章卡片：展示分类标签、阅读时长与摘要，点击进入详情可继续阅读。",
      "正文阅读：支持目录定位、公式、代码块、高亮链接与图片灯箱预览。",
      "分类与归档：可按主题或时间线筛选历史内容，快速定位同类文章。",
      "便捷操作：右下角返回顶部，长文阅读后可一键回到页面顶部。"
    ]
  },
  en: {
    title: "Blog Quick Guide",
    subtitle: "Shown on first visit. Reopen anytime with the top-right question button.",
    items: [
      "Homepage update notice: after publishing new or revised posts, a one-time popup appears with direct navigation.",
      "Top navigation: jump to Home, Archives, Categories, About, and Friends, with mobile menu support.",
      "Search: find posts by title/body keywords, and open quickly with / or Ctrl/Cmd + K.",
      "Theme switch: toggle light/dark mode; your preference is remembered locally.",
      "Post cards: include category tags, reading time, and summary previews for faster scanning.",
      "Reading experience: supports TOC navigation, math, code blocks, enhanced links, and image lightbox.",
      "Categories and archives: browse historical posts by topic or timeline.",
      "Convenience tools: use the back-to-top button for long-form reading."
    ]
  }
};

export default blogGuideContent;
