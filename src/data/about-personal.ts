export type SiteTimelineItem = {
  date: string;
  content: string;
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
      "content": "开发最初框架"
    },
    {
      "date": "2026.2.14",
      "content": "参考 Momo 开源页面进行设计"
    },
    {
      "date": "2026.2.15",
      "content": "部署到 GitHub Pages"
    },
    {
      "date": "2026.2.17",
      "content": "增加分类功能，优化响应速度"
    },
    {
      "date": "2026.2.19",
      "content": "增加背景粒子交互效果"
    },
    {
      "date": "2026.2.20",
      "content": "后台预制 Markdown 语法插入"
    },
    {
      "date": "2026.2.21",
      "content": "窄屏栏目按钮改为侧边显示"
    },
    {
      "date": "2026.2.25",
      "content": "后台支持一键插入友链结构"
    },
    {
      "date": "2026.2.26",
      "content": "新增博客介绍弹窗与运行时间显示"
    },
    {
      "date": "2026.3.7",
      "content": "博客图片支持点击放大与左右切换"
    },
    {
      "date": "2026.3.8",
      "content": "合并分类和归档，增加字数统计"
    },
    {
      "date": "2026.3.14",
      "content": "修复缩放白屏，增加目录功能"
    },
    {
      "date": "2026.3.16",
      "content": "新增返回按钮、打字机签名和摘要系统"
    },
    {
      "date": "2026.3.23",
      "content": "后台增加预选已发布主题按钮"
    },
    {
      "date": "2026.3.26",
      "content": "阅读页支持同分类文章跳转"
    },
    {
      "date": "2026.3.28",
      "content": "修复问题并增强博客更新提示"
    },
    {
      "date": "2026.3.31",
      "content": "增加双击全屏阅读功能"
    },
    {
      "date": "2026.4.6",
      "content": "修改归档分类按钮逻辑，优化过渡动画"
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
      "province": "浙江省",
      "city": "宁波市",
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
