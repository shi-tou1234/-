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
      "content": ["开发最初框架"]
    },
    {
      "date": "2026.2.14",
      "content": ["参考 Momo 开源页面进行设计"]
    },
    {
      "date": "2026.2.15",
      "content": ["部署到 GitHub Pages"]
    },
    {
      "date": "2026.2.17",
      "content": ["增加分类功能，优化响应速度"]
    },
    {
      "date": "2026.2.19",
      "content": ["增加背景粒子交互效果"]
    },
    {
      "date": "2026.2.20",
      "content": ["后台预制 Markdown 语法插入"]
    },
    {
      "date": "2026.2.21",
      "content": ["窄屏栏目按钮改为侧边显示"]
    },
    {
      "date": "2026.2.25",
      "content": ["后台支持一键插入友链结构"]
    },
    {
      "date": "2026.2.26",
      "content": ["新增博客介绍弹窗与运行时间显示"]
    },
    {
      "date": "2026.3.7",
      "content": ["博客图片支持点击放大与左右切换"]
    },
    {
      "date": "2026.3.8",
      "content": ["合并分类和归档，增加字数统计"]
    },
    {
      "date": "2026.3.14",
      "content": ["修复缩放白屏，增加目录功能"]
    },
    {
      "date": "2026.3.16",
      "content": ["新增返回按钮、打字机签名和摘要系统"]
    },
    {
      "date": "2026.3.23",
      "content": ["后台增加预选已发布主题按钮"]
    },
    {
      "date": "2026.3.26",
      "content": ["阅读页支持同分类文章跳转"]
    },
    {
      "date": "2026.3.28",
      "content": ["修复问题并增强博客更新提示"]
    },
    {
      "date": "2026.3.31",
      "content": ["增加双击全屏阅读功能"]
    },
    {
      "date": "2026.4.6",
      "content": ["修改归档分类按钮逻辑，优化过渡动画"]
    },
    {
      "date": "2026.4.12",
      "content": ["增加旅行地图，音乐播放器，归档页高亮介绍，优化关于页面，修改更新为时间轴"]
    },
    {
      "date": "2026.4.22",
      "content": ["增加后台markdown预览功能"]
    },
    {
      "date": "2026.5.2",
      "content": ["完善预览界面"]
    },
    {
      "date": "2026.5.3",
      "content": ["增加阅读进度显示，修复目录逻辑，增加后台导出博客，修改时间轴样式，热力图提交数量"]
    },
    {
      "date": "2026.5.7",
      "content": ["进一步优化各个动画效果，导航栏置顶和透明"]
    },
    {
      "date": "2026.5.10",
      "content": ["提升移动端体验，修复一系列bug，博客文章卡片增加封面图"]
    },
    {
      "date": "2026.5.15",
      "content": ["修改友链为工具栏，修改卡片样式，增加博客置顶功能"]
    },
    {
      "date": "2026.5.29",
      "content": ["修复目录以及回弹按钮显示问题，增加字体大小调节按钮"]
    },
    {
      "date": "2026.6.1",
      "content": ["修改分类页面，增加大分类小分类，优化移动端体验"]
    },
    {
      "date": "2026.6.14",
      "content": ["移除一些无用代码块，拆分大文件，优化部署速度，增加solgan,删除多余复制按钮"]
    },
    {
      "date": "2026.7.2",
      "content": ["清理锁文件、移除英文、拆分组件、按需图标、解除反爬限制、加快部署，启用图片压缩"]
    },
    {
      "date": "2026.7.3",
      "content": [
        "归档页时间线增强：按年/月两级折叠，文章标签按分类着色，每篇显示阅读时长",
        "新增全局快捷键：j/k 上下篇导航，g h 回首页，/ 唤起搜索",
        "接入 Giscus 评论系统：文章末尾直接显示留言框，GitHub 账号登录后即可在网页评论",
        "404 页增强：随机推荐 4 篇文章，带分类标签和阅读时长"
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
