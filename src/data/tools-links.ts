export interface ToolLink {
  name: string
  url: string
  icon: string
  description: string
}

const toolsLinks: ToolLink[] = [
  {
    name: "真值表",
    url: "https://shi-tou1234.github.io/zhenzhibiao",
    icon: "fa6-solid:table",
    description: "逻辑真值表生成工具，支持多种逻辑运算",
  },
  {
    name: "在线计算",
    url: "https://shi-tou1234.github.io/jisuan/",
    icon: "fa6-solid:calculator",
    description: "多功能在线计算工具，便捷实用",
  },
  {
    name: "GitHub",
    url: "https://github.com/shi-tou1234",
    icon: "fa6-brands:github",
    description: "我的 GitHub 主页，开源项目与代码",
  },
  {
    name: "Gitee",
    url: "https://gitee.com/cmchen1234",
    icon: "simple-icons:gitee",
    description: "我的 Gitee 主页，国内代码托管平台",
  },
]

export default toolsLinks