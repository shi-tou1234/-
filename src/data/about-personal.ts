export type SiteTimelineItem = {
  date: string;
  content: string;
};

export type MusicTrack = {
  title: string;
  artist: string;
  url: string;
};

export type TravelCity = {
  city: string;
  lat: number;
  lng: number;
  visited: boolean;
};

export type AboutPersonal = {
  intro: string;
  siteTimeline: SiteTimelineItem[];
  musicTracks: MusicTrack[];
  travelCities: TravelCity[];
};

const aboutPersonal: AboutPersonal = {
  "intro": "cmchen,一个奇怪的名字，不是吗？为什么是这个看上奇奇怪怪的名字，源于高中的时候的一个谐音梗，具体就不解释了，我自己觉得挺好玩的，于是就叫这个啦！\n- **🌍 旅行**  \n  尝试用我的足迹去探索这个世界的美丽\n\n- **🎵 音乐**  \n 喜欢 R&B、电子、K-pop 路人选手\n  有任何问题可以点击右上邮箱按钮联系我哦！",
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
      "title": "Lauv---Paris-in-the-Rain",
      "artist": "Unknown Artist",
      "url": "/-/music/Lauv---Paris-in-the-Rain.mp3"
    }
  ],
  "travelCities": [
    {
      "city": "北京",
      "lat": 39.9042,
      "lng": 116.4074,
      "visited": false
    },
    {
      "city": "上海",
      "lat": 31.2304,
      "lng": 121.4737,
      "visited": false
    },
    {
      "city": "广州",
      "lat": 23.1291,
      "lng": 113.2644,
      "visited": false
    },
    {
      "city": "深圳",
      "lat": 22.5431,
      "lng": 114.0579,
      "visited": false
    },
    {
      "city": "杭州",
      "lat": 30.2741,
      "lng": 120.1551,
      "visited": false
    },
    {
      "city": "南京",
      "lat": 32.0603,
      "lng": 118.7969,
      "visited": false
    },
    {
      "city": "成都",
      "lat": 30.5728,
      "lng": 104.0668,
      "visited": false
    },
    {
      "city": "重庆",
      "lat": 29.563,
      "lng": 106.5516,
      "visited": false
    },
    {
      "city": "西安",
      "lat": 34.3416,
      "lng": 108.9398,
      "visited": false
    },
    {
      "city": "武汉",
      "lat": 30.5928,
      "lng": 114.3055,
      "visited": false
    },
    {
      "city": "香港",
      "lat": 22.3193,
      "lng": 114.1694,
      "visited": false
    },
    {
      "city": "东京",
      "lat": 35.6762,
      "lng": 139.6503,
      "visited": false
    },
    {
      "city": "首尔",
      "lat": 37.5665,
      "lng": 126.978,
      "visited": false
    },
    {
      "city": "新加坡",
      "lat": 1.3521,
      "lng": 103.8198,
      "visited": false
    },
    {
      "city": "巴黎",
      "lat": 48.8566,
      "lng": 2.3522,
      "visited": false
    },
    {
      "city": "伦敦",
      "lat": 51.5072,
      "lng": -0.1276,
      "visited": false
    },
    {
      "city": "纽约",
      "lat": 40.7128,
      "lng": -74.006,
      "visited": false
    },
    {
      "city": "洛杉矶",
      "lat": 34.0522,
      "lng": -118.2437,
      "visited": false
    },
    {
      "city": "悉尼",
      "lat": -33.8688,
      "lng": 151.2093,
      "visited": false
    }
  ]
};

export default aboutPersonal;
