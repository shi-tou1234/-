---
title: Claude code安装教程
pubDate: 2026-06-11T15:34:00.000Z
updatedDate: 2026-06-11T15:34:31.913Z
draft: false
description: 
category: 工具使用
categories:
  - 工具使用
slugId: claude-code安装教程
---

# 从零开始，在国内用上 Claude Code

> **导语**：Claude Code 是 Anthropic 推出的终端原生 AI 编程代理，但它本质上是一个 Agent 框架——框架不绑定模型。这意味着不需要海外手机号、不需要 visa 卡，接上国产模型就能用。本文从 Mac 和 Windows 双平台出发，完整覆盖安装、接模型、初始化配置、CLAUDE.md 编写、快捷键、扩展体系，一步到位。

* * *
如果想要搭配图片理解的话，看这个[参考教程](https://www.xiaohongshu.com/explore/69e5ae66000000001a037db6?xsec_token=AB6i37qWfvWcBSUS_p0ATow-h6rVm2GsJ5-KxpJc-kPOU=&xsec_source=pc_user)
## 一、 Claude Code 是什么

Claude Code 是 Anthropic 推出的一款终端原生 AI 编程代理。它在命令行里运行，你给它自然语言指令，它会自己去读代码、改文件、执行命令、跑测试——整个过程自己完成。

**它用来做什么？**

* **复杂编码任务**：比如把整个项目的日志库从 log4j 换成 slf4j，它会先分析影响范围，再逐文件修改，最后跑一遍验证。
* **大型代码库重构与迁移**：几十万行代码的批量改动、语言迁移、API 升级，都能处理。
* **日常开发零碎活**：解释不熟悉的代码、生成文档、写脚本、排查 bug。

> **重要**：Claude Code 本质上不是一个模型，而是一个 Agent 框架。框架**不绑定模型**。你给它什么模型，它就运行什么模型。所以不需要海外手机号，不需要 visa 卡。

A 厂的封号力度大家都知道。想用官方登录，成本和网络都是很大的问题。市面上的 Agent 产品很多，OpenClaw、Hermers、Codex 都很火，但一步到位的话，还是建议直接用 Claude Code。

* * *

## 二、 安装 Claude Code

### 2.1 Mac 安装

先在 App 里找到**终端**，打开。以下演示基于全新的 macOS 账号，等价于空电脑环境。

#### 方案一：网络畅通（官方安装）

    curl -fsSL https://claude.ai/install.sh | bash

粘贴到终端，回车。光标会停一下，然后屏幕上开始滚动输出。等一会，出现安装成功的提示，就装好了。

但这里可能还会弹出另一条提示：Claude Code 已装好，但安装位置 `~/.local/bin` 还没加到 PATH 环境变量里。按它提示的做——把那一长串 `echo` 命令复制下来，粘贴到终端，回车跑一下。然后验证：

    claude --version

有版本号输出来，就表示安装成功了。

#### 方案二：没有魔法（Homebrew 安装）

**Homebrew** 是 macOS 上最流行的命令行包管理器。一条命令完成安装、更新、卸载，不用去网页上下载安装包。

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

终端弹出提示后直接回车。耐心等几分钟，出现安装成功的字样，brew 就装好了。

然后把 Homebrew 加到路径变量里去：

    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"

Homebrew 就可以正常使用了。接着装 Claude Code：

    brew install --cask claude-code

安装速度较慢。等安装成功的字样出现，在终端输入 `claude`，就能看到小螃蟹的图标了。

> **注意**：此时还显示用不了——先别管，后面会讲怎么接模型。

### 2.2 Windows 安装

Claude Code 在 Windows 上内部是用 **Git Bash** 来执行命令的，所以必须先装 Git。已装好的可跳过。

#### 装 Git（用 WinGet）

WinGet 是 Windows 官方的包管理器，可以理解为 Windows 版的 Homebrew。在任务栏搜索**终端**，打开。

    winget install Git.Git

不开启魔法，速度反而更快。也可以直接浏览器搜索 Git 官网安装。

#### 方案一：网络畅通（官方安装）

    irm https://claude.ai/install.ps1 | iex

等一会，光标闪几下，装好了。

#### 方案二：没有魔法（WinGet 安装）

    winget install Anthropic.ClaudeCode

等待安装完成。装好后在终端输入 `claude`，就能看到安装成功的提示了。

* * *

## 三、 接入模型：CC Switch

到这一步，终端里输入 `claude` 就能进入 Claude Code 的界面了。但是——光装了框架，还没接上脑子，还不能用。

有 Claude 账号的朋友直接登录就行。为了让国内所有小伙伴都能用上，这里教大家接入国产模型。同时也方便随时切换，我们用 **CC Switch**。

### Mac 安装 CC Switch

    brew tap farion1231/ccswitch
    brew install --cask cc-switch

粘贴到终端，回车，等它装好。

### Windows 安装 CC Switch

去以下链接下载安装包：

    https://github.com/farion1231/cc-switch/releases

> **注意**：进不去 GitHub 的话，公众号后台回复 `cc`，会自动发下载链接。下载后双击，一路 next 到底。

### 配置模型（Mac / Windows 通用）

打开 CC Switch——这软件不止适用于 Claude Code，Codex、小龙虾等也能用。还没配置时，界面上只有 Claude 官方的模型配置。

1. 在 Claude 那一栏下面，点右上角的**加号**，新增模型配置。
2. 在下拉菜单里选你想用的模型。
3. 填两部分：**API key** 和**模型配置**（其他字段会自动填好）。
4. API key 去对应模型的官网就能拿到。
5. 填好，点右下角的**添加**。

界面上的模型名称就切过去了。

* * *

## 四、 启动 Claude Code

回到终端，输入：

    claude

回车。

### 初始化设置

1. **颜色模式**：选深色或浅色（以后想改，在 Claude Code 里运行 `/theme`）。
2. **代码预览选项**：按自己喜好来。
3. **安全提示**：Claude 会犯错，它生成的代码和要执行的命令，过一眼再放行；只在你信任的代码库里用 Claude Code，避免提示词注入攻击。看完回车。
4. **推荐终端设置**：选推荐就好。它帮你启用两个东西——换行的快捷键，和 **Visual bell** 视觉提示（Claude 跑完任务或需要你确认的时候，终端窗口会闪一下，Dock 图标会弹跳一下）。
5. **确认当前目录可信任**：选是，回车。

> **推荐启动方式**：特别是开发的时候，不然点各种 allow 会点到怀疑人生。

    claude --dangerously-skip-permissions

或者切换为 auto 模式（后面快捷键部分会讲）。

**另外**，启动时最好对着一个文件夹，不要直接在根目录启动。这样上下文更干净。用 `cd` 命令进入某个文件夹（Mac 和 Windows 一样），然后在这个文件夹下启动 Claude Code——它默认只在这个文件夹下工作。

### 切换模型

在 CC Switch 里先配置好新模型，然后在 Claude Code 里用 `/model` 切换。一条命令，弹一个列表，选中就切过去了。

* * *

## 五、 写好 CLAUDE.md

学会启动之后，就可以正式对话了。但在深度使用之前，有一件事我想让你先做：**定好你的 CLAUDE.md 文件**。

这是我踩过的老坑。刚用的时候什么都不设，直接开始对话。每次都要重新解释自己的习惯、项目的规则、哪些东西不能碰。说了又忘，忘了又说。后来才明白，不是它记性不好，是我没把话说在前头。

### 5.1 两层结构

CLAUDE.md 是一个从上往下、分层穿透的约束体系，共两层：

| 层级  | 位置  | 作用  |
| --- | --- | --- |
| 全局级 | `~/.claude/CLAUDE.md` | 不管进哪个项目，都会被自动加载。管大框架——你是谁、做事原则、协作方式 |
| 项目级 | 项目根目录下 `CLAUDE.md` | 只在打开这个项目时加载。管具体事务——技术栈、项目约定 |

两层关系很简单：**全局定基调，项目定细节**。进一个项目时，两层合并生效。有冲突，项目级覆盖全局级。

### 5.2 创建全局 CLAUDE.md

    mkdir -p ~/.claude && touch ~/.claude/CLAUDE.md

第一段创建 `.claude` 文件夹（已有就跳过），第二段在里面创建一个空白的 `CLAUDE.md`。

> **注意**：CLAUDE.md 不是越长越好。超过八十行开始遗漏信息，最多不要超过两百行。要尽量精简。

下面是一份模板，除了"关于我"那部分换成你自己的内容，其他基本可以复用：

    ## 关于我
    [你的名字 / 身份 / 职业背景，非程序员的话一定要写出来]。我用 Claude Code 做 [具体用途 1] 和 [具体用途 2]。
    
    ## 思维原则
    所有决策从问题本质出发，不因「惯例如此」照搬。回到问题本身：要解决什么？最直接的路径是什么？从零设计会怎么做？
    不要谄媚。不要夸我的想法好、不要说「这是个很好的问题」、不要开头加「当然可以」。给我真实判断，方案有问题直接指出来。发现更好的做法直接说，不用等我问。
    
    ## 约束先行
    无论开发项目还是知识管理项目，第一步永远是建规则：新项目先写 CLAUDE.md，新目录先定结构约定（什么放哪、怎么命名、何时清理）。没有规范的工作空间不动手。已有规范的项目，严格遵守其 CLAUDE.md 中的约定。需要调整规范时先改文档、再改实践，不要反过来。
    
    ## 沟通方式
    - 默认中文，代码、命令、变量名用英文
    - 结论先行，再给理由，不要先铺垫背景
    - 遇到模糊需求，先给最合理的方案，再问要不要调整
    - 不要问「你确定要这样吗」，除非命中下方红线
    
    ## 自主边界（红线，必须先问我）
    以下操作即使在 auto-accept 模式下也必须停下来问我：
    - 删除文件、目录或 git 历史
    - 修改 .env、密钥、token、CI/CD 配置
    - 数据库 schema 变更或数据迁移
    - git push、git rebase、git reset --hard、强制推送
    - 安装新的全局依赖或修改系统配置
    - 公开发布（npm publish、部署到生产、发文章等）
    
    ## 通用工程纪律
    - 改完主动跑验证（具体命令见各项目 CLAUDE.md），不要只改不验
    - 不要为了让代码跑起来注释掉报错或加绕过标记，找根本原因
    - 密钥、token、密码不进代码、不进 commit、不进日志
    - 大改动前先在 Plan Mode 出方案，我确认后再动手

三十多行，六个部分。每一块都是跨项目通用的。

### 5.3 创建项目级 CLAUDE.md

两种方式：

**方式一：让 Claude 帮你生成**。打开那个项目文件夹，启动 Claude Code，把需求和你在意的点告诉它，让它帮你生成。完了看一眼，没问题就留下。

**方式二：用 `/init` 命令生成**。在项目根目录下启动 Claude Code，输入 `/init`，回车。它会扫描项目结构，读代码，识别技术栈和规范，自动生成一份 CLAUDE.md。检查一遍，没问题就留下。比自己手写快，也不容易漏。

* * *

## 六、 快捷键与命令速查

下面这些快捷键和命令，从各处收拢过来，放在一起。不用一次全记住，用的时候翻回来看看，用顺手了就记住了。

### 6.1 核心操作

| 快捷键 | 作用  |
| --- | --- |
| `Ctrl + C` / `Esc` | 强制中断当前生成或执行。代码块停不下来时，按一下就好 |
| `Shift + Tab` | 循环切换权限模式（编辑→自动接受→计划，按一下切一次） |
| `Enter` | 发送消息（需先跑 `/terminal-setup` 启用） |
| `Shift + Enter` | 换行不发送 |
| `Ctrl + G` | 在系统默认编辑器里打开当前输入框（适合写长内容） |
| `Ctrl + S` | 暂存当前提示，清空输入框 |
| `Ctrl + R` | 搜索命令历史 |
| `Ctrl + L` | 清屏  |
| 空输入框双击 `Esc` | 撤销 AI 上一次的文件改动，倒回之前状态 |

### 6.2 导航与编辑

| 快捷键 | 作用  |
| --- | --- |
| `Ctrl + \` | 切换侧边栏 |
| `Ctrl + J` | 粘贴图片 |
| `Shift` 或 `Shift + F` | 快速切换模型 |
| 上下箭头 | 浏览命令历史 |
| `Ctrl + A` | 光标到行首 |
| `Ctrl + E` | 光标到行尾 |
| `Ctrl + U` | 删除光标前的内容 |
| `Ctrl + K` | 删除光标后的内容 |
| `Alt + F` / `Alt + B` | 按单词跳光标前后 |
| `Ctrl + W` | 删除前一个单词 |

### 6.3 交互模式

    /tui fullscreen

进入全屏交互界面。长输出用 `PageUp`、`PageDown` 或滚轮翻页。选中文本自动复制。

### 6.4 斜杠命令

| 命令  | 作用  |
| --- | --- |
| `/help` | 列出所有可用命令和快捷键 |
| `/init` | 扫描项目，自动生成 CLAUDE.md |
| `/compact` | 压缩对话历史，释放上下文窗口。对话太长、AI 开始忘事时使用 |
| `/clear` | 清除当前对话记录（也会清掉当前目录的命令历史） |
| `/review` | 让 AI 审查当前代码，走查一遍 |
| `/config` | 打开配置界面 |

> **提示**：直接问它也可以——"有没有什么方法能提升我的使用效率"，它可能会给你一些更具体的建议。

* * *

## 七、 扩展能力：Skills 与 Plugins

约束定好了，快捷键也熟了。再往下是 Claude Code 的扩展体系——两个核心概念：**Skills** 和 **Plugins**。

### 7.1 Skills（技能）

Skills 是一个**知识包**。把解决某类任务的操作规范、脚本、模板、最佳实践，甚至踩过的坑，打包在一起，放在一个包含 `SKILL.md` 文件的文件夹里。

这种设计很轻。Claude 先快速扫一眼技能描述（约三十到五十个 token），确定相关了才加载完整指令。就算装了几十个技能，也不会影响对话速度。Skills 遵循开放标准，写好的技能不止用在 Claude Code，在 Claude.ai、OpenAI Codex 等支持同一标准的工具里也能用。

**调用方式**：手动敲 `/技能名`，或者在对话里让 Claude 根据任务自动匹配激活。

#### 创建自己的 Skill

**第一步**，建目录：

* 个人全局：`~/.claude/skills/<技能名>/`
* 项目专用：`项目根目录/.claude/skills/<技能名>/`

**第二步**，在文件夹里创建 `SKILL.md` 文件。

**第三步**，填写内容——文件顶部用 YAML 写元数据，下面用 Markdown 写具体指令：

    ---
    name: code-review
    description: 以安全和性能为重点的代码审查，遵循团队最佳实践
    ---
    
    ## 审查清单
    1. 检查SQL注入等安全漏洞
    2. 验证所有错误处理分支，确保日志不泄露敏感信息
    3. 使用项目统一的错误响应格式 `{ error: string, code: number }`

#### Skills 与相关概念的区别

| 概念  | 区别  |
| --- | --- |
| **Skills vs MCP Servers** | Skills 提供知识流程（怎么做）；MCP Servers 提供与外部系统连接的工具（做什么） |
| **Skills vs Hooks** | Hooks 是确定性自动化触发器（当 A 发生，自动做 B）；Skills 是按需加载的专业指南 |
| **Skills vs CLAUDE.md** | CLAUDE.md 是每轮对话都加载的全局规则；Skills 是按需调用的知识包 |
| **Skills vs Subagents** | Subagents 是拥有独立上下文的子智能体；Skills 是它的知识来源之一 |

### 7.2 Plugins（插件）

Plugins 是分发和共享 Claude Code 能力的最终形态。它像**一个盒子**，把 Skills、Commands、Agents、Hooks、MCP Servers 全部打包在一起。核心价值就一个：一键分发。

团队成员只需要跑一条命令：

    claude plugin install <插件名>

整套工具集就同步了，不用每个人分别配置。

* * *

## 八、 总结与注意事项

### 8.1 核心流程速查

| 阶段  | Mac 操作 | Windows 操作 |
| --- | --- | --- |
| 安装（有魔法） | `curl -fsSL https://claude.ai/install.sh \\| bash` | `irm https://claude.ai/install.ps1 \\| iex` |
| 安装（无魔法） | `brew install --cask claude-code` | `winget install Anthropic.ClaudeCode` |
| 模型切换工具 | `brew install --cask cc-switch` | GitHub 下载安装包 |
| 启动  | `claude --dangerously-skip-permissions` | `claude --dangerously-skip-permissions` |
| CLAUDE.md 位置 | `~/.claude/CLAUDE.md`（全局） | 同上  |

### 8.2 易错点提醒

1. **PATH 未配置**：安装后终端找不到 `claude` 命令，按提示把安装目录加入 PATH 即可。
2. **不在项目目录下启动**：直接在根目录启动会导致上下文混乱，始终先 `cd` 到项目文件夹。
3. **CLAUDE.md 过长**：超过 200 行时后半段会被忽略，保持精简，控制在 80 行以内最佳。
4. **每次都要解释规则**：不配 CLAUDE.md 就需要反复重复偏好——把规则写进文件，一劳永逸。
5. **权限点太多**：使用 `--dangerously-skip-permissions` 或 auto 模式，否则每次操作都要确认。

### 8.3 使用建议

* **能一步到位就一步到位**：直接选 Claude Code，不用在各种 Agent 产品之间反复横跳。
* **CLAUDE.md 是基石**：先配好全局 CLAUDE.md，再用 `/init` 生成项目级 CLAUDE.md，两层约束体系定好后再开始干活。
* **善用 Skills**：把自己的最佳实践封装成 Skill，跨项目复用，越用越顺手。
* **启动前 `cd` 到目标目录**：上下文更干净，操作范围更可控。

Claude Code 是当前阶段毕业级的 AI 工具。用好这一个，就能感受到 Agent 能做到什么程度。希望大家都能愉快地创造，做出属于你自己的作品。
