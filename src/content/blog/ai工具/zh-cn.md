---
title: AI工具
pubDate: 2026-02-21T06:08:00.000Z
updatedDate: 2026-06-11T11:03:34.237Z
draft: false
description: 
category: 工具使用
categories:
  - 工具使用
slugId: ai工具
---

这篇博客来推荐一下本人用过的一些 ai 工具以及怎么使用，后面会不断更新内容：

大模型

每个大模型都有各自擅长的领域和优势，下面我将依次介绍：

[qwen](https://chat.qwen.ai/)

最新旗舰：qwen 3.7Max

这是我用的比较多的一个模型，多模态支持，注意，max是文本模型，如果需要识图则使用plus，3.7体感不错，识图有了很大进步，建议下载qwen studio而不是千问。国内使用免费，就是一贯的阿里风格，ui 真的很丑。建议使用国外站。

[deepseek](https://chat.deepseek.com/)

最新旗舰：deepseek v4 pro max
等了一年，v4终于来了，价格来到了地板价，flash速度很快，能力不输给pro，同时代码,agent,世界知识能力大幅度提升，数学推理能力没得说，支持 1M 上下文，思考和生成速度有了很大的提升。目前已经开始多模态灰度测试，我自己购买了10元的api，烧了3300w token花了1.43，缓存命中率高达99%，简直无敌，祝贺d老师重回国产巅峰！目前接入了claude code,非常好用，后面发布教程。

[GLM](https://chat.z.ai/)

最新旗舰：GLM 5.1
国内模型中写代码能力最强，日常交流不太方便，思考太慢啦，网站很卡........国外站经常卡死.....如果不追求最新的话，用国内站速度会稍微快一点。但是说实话,5.1在代码领域确实权威

[Minimax](https://agent.minimaxi.com/)

最新旗舰：Minimax M3

怎么说呢，你先别说他聪不聪明，这个速度还是可以的，但这个价格你认真的吗？我用的不多，大家可以去尝试一下。

[Kimi](https://www.kimi.com/)

最新旗舰：kimi k2.6
识图，agent 集群。有个严重的问题就是官网的算力不足，对免费用户非常不友好。

[豆包](https://www.doubao.com/chat/)

最新旗舰：doubao 2.0 pro
豆包2.0pro在c端拥有绝对多用户占比，识图能力超过qwen3.5 plus，多模态。除了代码不行以外其他都无限接近gpt5.2了，就是思考速度有点慢，但是准确率有了很明显的进步，生图水平 国内T0 级别，毋庸置疑。有一说一字节在视频领域确实牛逼，但是收费价格你是认真的吗？比kimi还贵，再加点我可以用gpt了，为什么还要用你？依旧那句话，只适合日常用，学术和代码请换一家模型

[xiaomi mimo studio](https://aistudio.xiaomimimo.com/#/c)

最新旗舰：xiaomi mimo v2.5 pro
小米自研的大模型，跑分真不真实不知道，自从v2.5出来以后有了明显的进步，跑分超过了deepseek的旗舰，但是相对应的，价格也上去了，但是你这个缓存命中率认真的吗？我一句你好花了10000wtoken，价格0.1？你在开什么国际玩笑，就无语。现在出了一个mimo code?基于open code开发的，没用过，但感觉不如claude code

[GPT](https://chatgpt.com/)

最新旗舰：GPT 5.5 pro
需要梯子，写文章水平很高，推理能力很强，后端和程序改错能力很强，免费用户额度有限。，免费版给了5.5 instance，但是这个风控算法动不动把我降智是什么意思，只剩下5mini了...

[Gemini](https://gemini.google.com/app)

最新旗舰：Gemini 3.1 pro

新模型   Gemini 3.5 flash,你先别管正确率怎么样，你就说快不快吧...

需要梯子，多模态能力非常强，拥有非常好的前端审美，就是写后端能力不行，注册需要谷歌邮箱（国外软件通信证）。原先的thinking 模式修改了，现在有三个，3.1 flash lite,3.5flash,3.1pro,思考模式有普通和拓展，还可以，就是这个ui怎么一股子gpt味...

如果因为地区原因无法使用，建议转到 [Google ai studio](https://aistudio.google.com/prompts/new_chat)

[Claude](https://claude.com/)

最新旗舰：Claude fable 5

需要梯子.新模型非常强，但是这个限制有点太多了，而且这个额度消耗太快，价格太贵了。我的建议是除非是非常复杂的任务，不然还是用opus吧，这个模型的思考时间很长。代码能力非常强，写文章也不错，价格很贵 ,强烈建议别用4.7,简直是一坨，还不如4.6呢，我的sonnet 4.6 extent thinking老师会出手

AI IDE

trae

[国内版](https://www.trae.cn/)免费使用，可以使用大多数国内模型。就是要排队....

[国外版](https://www.trae.ai/)也有免费额度，本来额度挺多的，但是自从计算方式从此时变成token的时候，就直接劝退我了，价格直接涨了10倍............免费用户只有3刀......

github codespace

需要学生认证，要注册教育邮箱和上传相关申请材料，通过后获得 github pro 会员 2 年，可以免费在虚拟机上使用 gpt gemini 最新的模型，非常香。微软缩紧了教育账号的模型使用权限gpt5.4和claude不让用了，而且还多了周限额，6.1开始直接转为按用量来收费，彻底废了.........
