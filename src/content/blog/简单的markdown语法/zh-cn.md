---
title: 简单的 Markdown 语法（速查）
pubDate: 2026-02-20T12:00:00.000Z
draft: false
description: 一篇覆盖标题、文本强调、引用、代码、列表、链接、图片、表格、任务清单等常见 Markdown 语法的快速参考。
category: 工具使用
slugId: 简单的markdown语法
---

这篇文章整理了常用 Markdown 语法，适合作为写作时的速查手册。

> 参考来源：<https://note.motues.top/docs/Markdown/use>

## 标题

使用 `#` 到 `######` 表示 1 到 6 级标题。

```markdown
# 一级标题
## 二级标题
### 三级标题
```

## 段落与换行

段落之间空一行；行内换行可在行尾添加两个空格。

```markdown
这是第一段。

这是第二段。  
这是同一段中的下一行。
```

## 文本强调

```markdown
**粗体**
*斜体*
***粗斜体***
~~删除线~~
```

## 引用

```markdown
> 这是一段引用
>> 这是嵌套引用
```

## 代码

行内代码用反引号包裹：

```markdown
使用 `console.log` 输出日志。
```

代码块用三个反引号：

```markdown
```ts
const name = "Markdown";
console.log(name);
```
```

## 列表

### 无序列表

```markdown
- 第一项
- 第二项
- 第三项
```

### 有序列表

```markdown
1. 第一项
2. 第二项
3. 第三项
```

### 任务列表

```markdown
- [x] 已完成
- [ ] 待完成
```

## 链接与图片

```markdown
[访问网站](https://example.com)

![图片说明](./assets/example.png)
```

## 表格

```markdown
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| Markdown | 标记语言 | 轻量、易读 |
```

对齐示例：

```markdown
| 左对齐 | 居中 | 右对齐 |
| :--- | :---: | ---: |
| A | B | C |
```

## 公式（KaTeX）

行内公式：

```markdown
勾股定理：$a^2+b^2=c^2$
```

块级公式：

```markdown
$$
\int_a^b f(x)\,dx
$$
```

## 提示卡片

```markdown
:::tip
这是一个提示卡片。
:::
```

## 水平线

```markdown
---
```

---


