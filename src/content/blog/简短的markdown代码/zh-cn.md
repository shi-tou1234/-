---
title: 简短的markdown代码
pubDate: 2026-03-13T14:34:00.000Z
updatedDate: 2026-06-09T14:41:54.694Z
draft: false
description: 
category: 课外学习
categories:
  - 课外学习
slugId: 简短的markdown代码
---

这篇文章是一份高效编写 Markdown 的简明速查表。

> 参考来源：<https://note.motues.top/docs/Markdown/use>

## 标题

使用 `#` 到 `######` 表示 1 到 6 级标题。

# 标题 1
## 标题 2
### 标题 3

## 段落和换行

使用空行分隔段落。在行尾添加两个空格可以实现换行。

这是第一段。

这是第二段。  
这是同一段落中的新行。


## 强调


**粗体**
*斜体*
***粗斜体***
~~删除线~~

## 引用


> 这是一个引用
>> 这是一个嵌套引用


## 代码
```cpp
#include <iostream>
using namespace std;

int main() {
  cout<<"Hello World!"<<endl;
  return 0;
}
```

### 有序列表


1. 项目一
2. 项目二
3. 项目三


### 任务列表


- [x] 已完成任务
- [ ] 待办任务


## 链接和图片


[访问网站](https://example.com)

![](./assets/example.png)


## 表格


| 名称 | 类型 | 备注 |
| --- | --- | --- |
| Markdown | 标记语言 | 轻量且易读 |


对齐方式：


| 左对齐 | 居中对齐 | 右对齐 |
| :--- | :---: | ---: |
| A | B | C |


## 公式 (KaTeX)

行内公式：


勾股定理：$a^2+b^2=c^2$


块级公式：


$$
\int_a^b f(x)\,dx
$$


## 提示块


:::tip
这是一个提示卡片。
:::


## 分隔线

---




如果你在后台编辑器中编写，可以使用内置的 Markdown 快速插入菜单来快速生成这些代码片段。
