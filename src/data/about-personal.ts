export type SiteTimelineItem = {
  date: string;
  content: string[];
};

export type MusicTrack = {
  title: string;
  artist: string;
  url: string;
};

export type TravelProvince = {
  province: string;
  city: string;
  visited: boolean;
  lat?: number;
  lng?: number;
};

export type AboutPersonal = {
  intro: string;
  siteTimeline: SiteTimelineItem[];
  musicTracks: MusicTrack[];
  travelCities: TravelProvince[];
};

const aboutPersonal: AboutPersonal = {
  "intro": "cmchen, 一个奇怪的名字，不是吗？这个名字源于高中时的一个谐音梗。喜欢旅行，  尝试用我的足迹去探索这个世界的美丽。喜欢 R&B、电子、K-pop 路人选手。",
  "siteTimeline": [
    {
      "date": "2026.2.12",
      "content": [
        "开发最初框架"
      ]
    },
    {
      "date": "2026.2.14",
      "content": [
        "参考 Momo 开源页面进行设计"
      ]
    },
    {
      "date": "2026.2.15",
      "content": [
        "部署到 GitHub Pages"
      ]
    },
    {
      "date": "2026.2.17",
      "content": [
        "增加分类功能，优化响应速度"
      ]
    },
    {
      "date": "2026.2.19",
      "content": [
        "增加背景粒子交互效果"
      ]
    },
    {
      "date": "2026.2.20",
      "content": [
        "后台预制 Markdown 语法插入"
      ]
    },
    {
      "date": "2026.2.21",
      "content": [
        "窄屏栏目按钮改为侧边显示"
      ]
    },
    {
      "date": "2026.2.25",
      "content": [
        "后台支持一键插入友链结构"
      ]
    },
    {
      "date": "2026.2.26",
      "content": [
        "新增博客介绍弹窗与运行时间显示"
      ]
    },
    {
      "date": "2026.3.7",
      "content": [
        "博客图片支持点击放大与左右切换"
      ]
    },
    {
      "date": "2026.3.8",
      "content": [
        "合并分类和归档，增加字数统计"
      ]
    },
    {
      "date": "2026.3.14",
      "content": [
        "修复缩放白屏，增加目录功能"
      ]
    },
    {
      "date": "2026.3.16",
      "content": [
        "新增返回按钮、打字机签名和摘要系统"
      ]
    },
    {
      "date": "2026.3.23",
      "content": [
        "后台增加预选已发布主题按钮"
      ]
    },
    {
      "date": "2026.3.26",
      "content": [
        "阅读页支持同分类文章跳转"
      ]
    },
    {
      "date": "2026.3.28",
      "content": [
        "修复问题并增强博客更新提示"
      ]
    },
    {
      "date": "2026.3.31",
      "content": [
        "增加双击全屏阅读功能"
      ]
    },
    {
      "date": "2026.4.6",
      "content": [
        "修改归档分类按钮逻辑，优化过渡动画"
      ]
    },
    {
      "date": "2026.4.12",
      "content": [
        "增加旅行地图，音乐播放器，归档页高亮介绍，优化关于页面，修改更新为时间轴"
      ]
    },
    {
      "date": "2026.4.22",
      "content": [
        "增加后台markdown预览功能"
      ]
    },
    {
      "date": "2026.5.2",
      "content": [
        "完善预览界面"
      ]
    },
    {
      "date": "2026.5.3",
      "content": [
        "增加阅读进度显示，修复目录逻辑，增加后台导出博客，修改时间轴样式，热力图提交数量"
      ]
    },
    {
      "date": "2026.5.7",
      "content": [
        "进一步优化各个动画效果，导航栏置顶和透明"
      ]
    },
    {
      "date": "2026.5.10",
      "content": [
        "提升移动端体验，修复一系列bug，博客文章卡片增加封面图"
      ]
    },
    {
      "date": "2026.5.15",
      "content": [
        "修改友链为工具栏，修改卡片样式，增加博客置顶功能"
      ]
    },
    {
      "date": "2026.5.29",
      "content": [
        "修复目录以及回弹按钮显示问题，增加字体大小调节按钮"
      ]
    },
    {
      "date": "2026.6.1",
      "content": [
        "修改分类页面，增加大分类小分类，优化移动端体验"
      ]
    },
    {
      "date": "2026.6.14",
      "content": [
        "移除一些无用代码块，拆分大文件，优化部署速度，增加solgan,删除多余复制按钮"
      ]
    },
    {
      "date": "2026.7.2",
      "content": [
        "清理锁文件、移除英文、拆分组件、按需图标、解除反爬限制、加快部署，启用图片压缩"
      ]
    },
    {
      "date": "2026.7.3",
      "content": [
        "归档页时间线增强：按年/月两级折叠，文章标签按分类着色，每篇显示阅读时长",
        "新增全局快捷键：j/k 上下篇导航，g h 回首页，/ 唤起搜索",
        "接入 Giscus 评论系统：文章末尾直接显示留言框，GitHub 账号登录后即可在网页评论",
        "404 页增强：随机推荐 4 篇文章，带分类标签和阅读时长"
      ]
    },
    {
      "date": "2026.7.8",
      "content": [
        "密码哈希 PBKDF2 迭代次数增加",
        "GitHub/Music 卡片、ruby/title 文本加输入校验 XSS 转义",
        "admin-preview 跳转加同源校验，防 Open Redirect",
        "删除 marked 废弃选项",
        "base64url 编解码改用 TextEncoder/btoa",
        "移除 Node Buffer 依赖，移除废弃 escape/unescape清理",
        "删除垃圾文件、无效 tsconfig 别名、未使用 prop、重复CSS、死函数、调试 log，",
        "提取公共 hashString 和插件工具 plugin-utils.mjs 复用插件 .js 改名为 .mjs 后缀配置",
        "脚本字段统一为 slugId/pubDate",
        "修复content.config.ts 缩进，保留双字段兼容新旧文章可观测性",
        "多处静默 catch 补 console.warn，鉴权错误（401/403）提示重新登录"
      ]
    },
    {
      "date": "2026.7.9",
      "content": [
        "合并重复函数，避免行为分叉，修正误导日志",
        "GitHub API/Giscus/高德地图等外部 URL 集中到externalUrlsConfig newpost"
      ]
    },
    {
      "date": "2026.7.10",
      "content": [
        "实现推导浮层功能：自定义 remark 插件渲染 ，hover 公式弹出推导内容；",
        "后台三栏分屏编辑器重写，后台工具栏新增推导按钮",
        "为 48 篇笔记批量添加约 650 个 推导；",
        "移除反爬虫键盘拦截；字体预加载优化；tsParticles 移动端禁用 + 粒子数减半；主题切换不再重建粒子；loading 阈值 500→200ms；移除死依赖 leaflet/overlayscrollbars；",
        "新增 ESLint + Prettier + Lighthouse CI 配置；CI 加 astro check + lint，修复依赖变更后 CI 安装失败"
      ]
    },
    {
      "date": "2026.7.26",
      "content": [
        "字体修改，大小设置逻辑修改，主题改为偏暖色调"
      ]
    },
    {
      "date": "2026.8.2",
      "content": [
        "修复后台「图片」按钮无响应，直接移除未接上功能的入口",
        "修复「新手指南」弹窗多套开关逻辑冲突，只保留主逻辑并清理多余监听",
        "修复登录后台加载未完成时按钮可点击导致误报密码错误；前置置灰防误触",
        "修复后台修改密码失败无提示，补充错误反馈",
        "修复搜索关键词高亮为透明色，改为不透明亮黄",
        "修复阅读模式去除底部留白失效，修正选择器并清理移动端残留空白",
        "修复公式推导浮层移出自动关闭但监听越积越多，切换页面时清理旧监听并修复潜在内存泄漏",
        "修复文章目录重复初始化，「点击外部关闭」监听随页面切换清理",
        "修复切回后台标签页时编辑器内容被悄悄覆盖，改为手动「从预览回填」",
        "修复文章封面文件缺失时显示破图，缺图时回退到封面 API 兜底",
        "新增统一安全文件名清洗函数，上传、slug、导出、请求路径统一防路径穿越",
        "写入发布标题/简介前转义，防止换行/冒号破坏文件结构",
        "删除整套未使用 Svelte 依赖及关联死代码",
        "删除未调用的依赖、类型、配置字段、翻译键、无用过滤逻辑和失效兜底函数",
        "删除过时文档目录、友链旧内容和各类残留无用代码",
        "合并重复的文本清洗、哈希、回到顶部、滚动进度、链接下划线、frontmatter 解析逻辑，新增公共工具和统一生命周期钩子",
        "固定中文路由并移除语言段，避免 i18n 路由和缺失翻译键导致页面异常",
        "收敛主题逻辑：首屏按记忆/系统设主题，减少不必要写回；切换亮色统一设置属性，修复后台下拉框配色问题",
        "统一头部高度变量和全局层级档位，减少硬编码",
        "统一配色：替换多组蓝/蓝紫色为主题棕色，提示框、正文、ruby 注音、typst 标题等改用统一变量"
      ]
    }
  ],
  "musicTracks": [
    {
      "title": "Paris-in-the-Rain",
      "artist": "Lauv",
      "url": "/-/music/Lauv---Paris-in-the-Rain.mp3"
    }
  ],
  "travelCities": [
    {
      "province": "安徽省",
      "city": "黄山市",
      "visited": true
    },
    {
      "province": "北京市",
      "city": "朝阳区",
      "visited": true
    },
    {
      "province": "北京市",
      "city": "东城区",
      "visited": true
    },
    {
      "province": "北京市",
      "city": "海淀区",
      "visited": true
    },
    {
      "province": "北京市",
      "city": "西城区",
      "visited": true
    },
    {
      "province": "重庆市",
      "city": "江北区",
      "visited": true
    },
    {
      "province": "重庆市",
      "city": "南岸区",
      "visited": true
    },
    {
      "province": "重庆市",
      "city": "沙坪坝区",
      "visited": true
    },
    {
      "province": "重庆市",
      "city": "渝中区",
      "visited": true
    },
    {
      "province": "福建省",
      "city": "厦门市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "嘉峪关市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "酒泉市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "兰州市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "武威市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "张掖市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "潮州市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "广州市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "揭阳市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "汕头市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "珠海市",
      "visited": true
    },
    {
      "province": "广西壮族自治区",
      "city": "北海市",
      "visited": true
    },
    {
      "province": "广西壮族自治区",
      "city": "南宁市",
      "visited": true
    },
    {
      "province": "河北省",
      "city": "秦皇岛市",
      "visited": true
    },
    {
      "province": "河南省",
      "city": "三门峡市",
      "visited": true
    },
    {
      "province": "湖北省",
      "city": "恩施土家族苗族自治州",
      "visited": true
    },
    {
      "province": "湖北省",
      "city": "武汉市",
      "visited": true
    },
    {
      "province": "吉林省",
      "city": "白山市",
      "visited": true
    },
    {
      "province": "吉林省",
      "city": "延边朝鲜族自治州",
      "visited": true
    },
    {
      "province": "江苏省",
      "city": "南京市",
      "visited": true
    },
    {
      "province": "江苏省",
      "city": "苏州市",
      "visited": true
    },
    {
      "province": "江苏省",
      "city": "无锡市",
      "visited": true
    },
    {
      "province": "江西省",
      "city": "上饶市",
      "visited": true
    },
    {
      "province": "辽宁省",
      "city": "大连市",
      "visited": true
    },
    {
      "province": "辽宁省",
      "city": "沈阳市",
      "visited": true
    },
    {
      "province": "内蒙古自治区",
      "city": "呼伦贝尔市",
      "visited": true
    },
    {
      "province": "青海省",
      "city": "海南藏族自治州",
      "visited": true
    },
    {
      "province": "青海省",
      "city": "西宁市",
      "visited": true
    },
    {
      "province": "山东省",
      "city": "青岛市",
      "visited": true
    },
    {
      "province": "山西省",
      "city": "大同市",
      "visited": true
    },
    {
      "province": "山西省",
      "city": "太原市",
      "visited": true
    },
    {
      "province": "陕西省",
      "city": "西安市",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "虹口区",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "黄浦区",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "闵行区",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "浦东新区",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "徐汇区",
      "visited": true
    },
    {
      "province": "四川省",
      "city": "成都市",
      "visited": true
    },
    {
      "province": "四川省",
      "city": "乐山市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "杭州市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "湖州市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "嘉兴市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "金华市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "丽水市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "宁波市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "绍兴市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "台州市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "温州市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "舟山市",
      "visited": true
    }
  ]
};

export default aboutPersonal;
