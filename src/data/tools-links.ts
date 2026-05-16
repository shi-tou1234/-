export interface ToolLink {
  name: string
  url: string
  icon: string
  description: string
  color?: string
}

const toolsLinks: ToolLink[] = [
  {
    name: "真值表",
    url: "https://shi-tou1234.github.io/zhenzhibiao",
    icon: "fa6-solid:table",
    description: "逻辑真值表生成工具，支持多种逻辑运算",
    color: "linear-gradient(-45deg, hsl(235, 45%, 48%) 0%, hsl(275, 40%, 42%) 100%)",
  },
  {
    name: "在线计算",
    url: "https://shi-tou1234.github.io/jisuan/",
    icon: "fa6-solid:calculator",
    description: "多功能在线计算工具，便捷实用",
    color: "linear-gradient(-45deg, hsl(165, 45%, 45%) 0%, hsl(195, 40%, 45%) 100%)",
  },
  {
    name: "GitHub",
    url: "https://github.com/shi-tou1234",
    icon: "fa6-brands:github",
    description: "我的 GitHub 主页，开源项目与代码",
    color: "linear-gradient(-45deg, hsl(0, 0%, 25%) 0%, hsl(220, 35%, 35%) 100%)",
  },
  {
    name: "Gitee",
    url: "https://gitee.com/cmchen1234",
    icon: "simple-icons:gitee",
    description: "我的 Gitee 主页，国内代码托管平台",
    color: "linear-gradient(-45deg, hsl(20, 60%, 50%) 0%, hsl(10, 55%, 48%) 100%)",
  },
  {
    name: "Markdown 预览器",
    url: "https://shi-tou1234.github.io/yulan/",
    icon: "fa6-solid:file-lines",
    description: "在线 Markdown 编辑与实时预览工具",
    color: "linear-gradient(-45deg, hsl(260, 45%, 48%) 0%, hsl(300, 40%, 42%) 100%)",
  },
  {
    name: "Markdown 预览器",
    url: "https://shi-tou1234.github.io/yulan/",
    icon: "fa6-solid:file-lines",
    description: "在线 Markdown 编辑与实时预览工具",
    color: "linear-gradient(-45deg, hsl(210, 45%, 48%) 0%, hsl(270, 40%, 42%) 100%)",
  },
]

export default toolsLinks
