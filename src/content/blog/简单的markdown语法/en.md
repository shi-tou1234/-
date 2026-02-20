---
title: Basic Markdown Syntax (Quick Reference)
pubDate: 2026-02-20T12:00:00.000Z
draft: false
description: "A practical quick reference for common Markdown syntax: headings, emphasis, quotes, code, lists, links, tables, tasks, and more."
category: 工具使用
slugId: markdown-basic-syntax
---

This post is a compact cheat sheet for writing Markdown efficiently.

> Reference source: <https://note.motues.top/docs/Markdown/use>

## Headings

Use `#` to `######` for heading levels 1 to 6.

```markdown
# Heading 1
## Heading 2
### Heading 3
```

## Paragraphs and Line Breaks

Separate paragraphs with a blank line. Add two trailing spaces for a line break.

```markdown
This is paragraph one.

This is paragraph two.  
This is a new line in the same paragraph.
```

## Emphasis

```markdown
**bold**
*italic*
***bold italic***
~~strikethrough~~
```

## Blockquotes

```markdown
> A blockquote
>> A nested blockquote
```

## Code

Inline code:

```markdown
Use `console.log` to print logs.
```

Code block:

```markdown
```ts
const name = "Markdown";
console.log(name);
```
```

## Lists

### Unordered

```markdown
- Item one
- Item two
- Item three
```

### Ordered

```markdown
1. Item one
2. Item two
3. Item three
```

### Task list

```markdown
- [x] Done task
- [ ] Todo task
```

## Links and Images

```markdown
[Visit site](https://example.com)

![Image alt text](./assets/example.png)
```

## Tables

```markdown
| Name | Type | Notes |
| --- | --- | --- |
| Markdown | Markup | Lightweight and readable |
```

Alignment:

```markdown
| Left | Center | Right |
| :--- | :---: | ---: |
| A | B | C |
```

## Formulas (KaTeX)

Inline:

```markdown
Pythagorean theorem: $a^2+b^2=c^2$
```

Block:

```markdown
$$
\int_a^b f(x)\,dx
$$
```

## Admonition

```markdown
:::tip
This is a tip card.
:::
```

## Horizontal Rule

```markdown
---
```

---

If you're writing in the admin editor, you can use the built-in Markdown quick insert menu to generate these snippets quickly.