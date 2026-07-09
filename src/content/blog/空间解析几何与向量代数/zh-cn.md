---
title: 空间解析几何与向量代数
pubDate: 2026-03-12T14:18:00.000Z
updatedDate: 2026-06-01T14:20:11.767Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 高数
slugId: 空间解析几何与向量代数
---

# 空间解析几何与向量代数核心概念与公式推导全解

**前言**：本文详细梳理了高等数学/解析几何中“第六章 空间解析几何与向量代数”（6.1节至6.6节）的核心概念、定理及公式推导。内容力求详尽严谨，适合作为复习笔记或博客分享。本文采用 LaTeX 渲染数学公式，完美适配 GitHub Pages 及各类支持 MathJax/KaTeX 的博客平台。

---

## 6.1 向量及其线性运算

### 核心概念
- **向量（矢量）**：既有大小又有方向的量，通常用有向线段 $\overrightarrow{M_1M_2}$ 或粗体字母 $\boldsymbol{a}$ 表示。
- **向量的模**：向量的大小，记作 $|\boldsymbol{a}|$ 或 $|\overrightarrow{M_1M_2}|$。
- **特殊向量**：
  - **单位向量**：模为 1 的向量（$\boldsymbol{e}$）。
  - **零向量**：模为 0 的向量（$\boldsymbol{0}$），方向任意，规定零向量与任何向量平行。
  - **自由向量**：与起点无关的向量（可任意平移）。
  - **负向量**：与 $\boldsymbol{a}$ 模相同但方向相反的向量，记作 $-\boldsymbol{a}$。
- **向量间的关系**：
  - **平行（共线）**：方向相同或相反，记作 $\boldsymbol{a} \parallel \boldsymbol{b}$。
  - **共面**：$k (\ge 3)$ 个向量经平移可移到同一平面上。

### 空间直角坐标系与坐标表示
- 过空间定点 $O$，由三条互相垂直的数轴（$x$轴、$y$轴、$z$轴）按右手规则组成空间直角坐标系。
- **向量的坐标分解式**：任意向量 $\boldsymbol{r}$ 可用向径 $\overrightarrow{OM}$ 表示。设点 $M(x,y,z)$，则：
  $$ \boldsymbol{r} = x\boldsymbol{i} + y\boldsymbol{j} + z\boldsymbol{k} $$
  其中 $\boldsymbol{i}, \boldsymbol{j}, \boldsymbol{k}$ 为沿坐标轴方向的单位向量（基向量）。

### 重要公式与推导

#### (1) 向量的模与两点间距离公式
设 $\boldsymbol{r} = (x, y, z)$，由勾股定理可得向量的模：
$$ |\boldsymbol{r}| = \sqrt{x^2 + y^2 + z^2} $$

:::derivation
**推导过程：**

设向量 $\boldsymbol{r} = x\boldsymbol{i} + y\boldsymbol{j} + z\boldsymbol{k}$。由向量模的定义 $|\boldsymbol{r}|^2 = \boldsymbol{r} \cdot \boldsymbol{r}$，计算其自身数量积：

$$
\boldsymbol{r} \cdot \boldsymbol{r} = (x\boldsymbol{i} + y\boldsymbol{j} + z\boldsymbol{k}) \cdot (x\boldsymbol{i} + y\boldsymbol{j} + z\boldsymbol{k})
$$

利用基向量的正交归一性 $\boldsymbol{i}\cdot\boldsymbol{i} = \boldsymbol{j}\cdot\boldsymbol{j} = \boldsymbol{k}\cdot\boldsymbol{k} = 1$，$\boldsymbol{i}\cdot\boldsymbol{j} = \boldsymbol{j}\cdot\boldsymbol{k} = \boldsymbol{k}\cdot\boldsymbol{i} = 0$，展开后交叉项全为零：

$$
|\boldsymbol{r}|^2 = x^2 + y^2 + z^2
$$

两边开平方即得 $|\boldsymbol{r}| = \sqrt{x^2 + y^2 + z^2}$。从几何上看，这是三维空间中勾股定理的直接推广。
:::
**推导两点间距离**：设空间两点 $M_1(x_1, y_1, z_1)$ 和 $M_2(x_2, y_2, z_2)$，则向量 $\overrightarrow{M_1M_2} = (x_2-x_1, y_2-y_1, z_2-z_1)$。其模即为两点间距离 $d$：
$$ d = |\overrightarrow{M_1M_2}| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2} $$

:::derivation
**推导过程：**

设空间两点 $M_1(x_1, y_1, z_1)$ 和 $M_2(x_2, y_2, z_2)$。

构造向量 $\overrightarrow{M_1M_2} = \overrightarrow{OM_2} - \overrightarrow{OM_1}$，按坐标分量相减：

$$
\overrightarrow{M_1M_2} = (x_2 - x_1,\ y_2 - y_1,\ z_2 - z_1)
$$

两点间距离 $d$ 即为该向量的模，代入向量模公式 $|\boldsymbol{r}| = \sqrt{x^2+y^2+z^2}$：

$$
d = |\overrightarrow{M_1M_2}| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}
$$
:::

#### (2) 方向角与方向余弦
非零向量 $\boldsymbol{r}$ 与三坐标轴正向的夹角 $\alpha, \beta, \gamma$ 称为方向角。方向角的余弦称为方向余弦。
**公式推导**：
$$ \cos\alpha = \frac{x}{|\boldsymbol{r}|}, \quad \cos\beta = \frac{y}{|\boldsymbol{r}|}, \quad \cos\gamma = \frac{z}{|\boldsymbol{r}|} $$

:::derivation
**推导过程：**

设非零向量 $\boldsymbol{r} = (x, y, z)$，它与 $x$ 轴、$y$ 轴、$z$ 轴正向的夹角分别为 $\alpha, \beta, \gamma$。

向量 $\boldsymbol{r}$ 在 $x$ 轴上的投影即为 $\boldsymbol{r}$ 与 $x$ 轴方向单位向量 $\boldsymbol{i}$ 的数量积：

$$
\text{Prj}_{x}\boldsymbol{r} = \boldsymbol{r} \cdot \boldsymbol{i} = x
$$

另一方面，由投影定理 $\text{Prj}_{x}\boldsymbol{r} = |\boldsymbol{r}|\cos\alpha$。两式相等得：

$$
|\boldsymbol{r}|\cos\alpha = x \implies \cos\alpha = \frac{x}{|\boldsymbol{r}|}
$$

同理，分别对 $y$ 轴（单位向量 $\boldsymbol{j}$）和 $z$ 轴（单位向量 $\boldsymbol{k}$）投影，得 $\cos\beta = \frac{y}{|\boldsymbol{r}|}$，$\cos\gamma = \frac{z}{|\boldsymbol{r}|}$。
:::
**性质**：方向余弦的平方和等于 1。
$$ \cos^2\alpha + \cos^2\beta + \cos^2\gamma = \frac{x^2+y^2+z^2}{|\boldsymbol{r}|^2} = 1 $$

:::derivation
**推导过程：**

由方向余弦公式 $\cos\alpha = \frac{x}{|\boldsymbol{r}|}$，$\cos\beta = \frac{y}{|\boldsymbol{r}|}$，$\cos\gamma = \frac{z}{|\boldsymbol{r}|}$，求平方和：

$$
\cos^2\alpha + \cos^2\beta + \cos^2\gamma = \frac{x^2}{|\boldsymbol{r}|^2} + \frac{y^2}{|\boldsymbol{r}|^2} + \frac{z^2}{|\boldsymbol{r}|^2} = \frac{x^2+y^2+z^2}{|\boldsymbol{r}|^2}
$$

由向量模公式 $|\boldsymbol{r}|^2 = x^2+y^2+z^2$，代入得：

$$
\cos^2\alpha + \cos^2\beta + \cos^2\gamma = \frac{|\boldsymbol{r}|^2}{|\boldsymbol{r}|^2} = 1
$$

这说明方向余弦 $(\cos\alpha, \cos\beta, \cos\gamma)$ 恰为单位向量 $\boldsymbol{e}_r = \frac{\boldsymbol{r}}{|\boldsymbol{r}|}$ 的三个分量。
:::
**结论**：向量 $\boldsymbol{r}$ 的单位向量可表示为 $\boldsymbol{e}_r = (\cos\alpha, \cos\beta, \cos\gamma)$。

#### (3) 向量在轴上的投影（投影定理）
设向量 $\overrightarrow{AB}$ 与轴 $u$ 的夹角为 $\varphi$，则 $\overrightarrow{AB}$ 在轴 $u$ 上的投影（记作 $\text{Prj}_u \overrightarrow{AB}$）为：
$$ \text{Prj}_u \overrightarrow{AB} = |\overrightarrow{AB}| \cos\varphi $$

:::derivation
**推导过程：**

设向量 $\overrightarrow{AB}$ 的起点 $A$、终点 $B$ 在轴 $u$ 上的投影分别为 $A'$、$B'$，则 $\overrightarrow{AB}$ 在轴 $u$ 上的投影定义为有向线段 $A'B'$ 的代数长度 $\text{Prj}_u \overrightarrow{AB}$。

设 $\overrightarrow{AB}$ 与轴 $u$ 正向夹角为 $\varphi$。将 $\overrightarrow{AB}$ 分解为沿 $u$ 轴和垂直于 $u$ 轴的两个分量，沿 $u$ 轴方向的分量长度为 $|\overrightarrow{AB}|\cos\varphi$（当 $\varphi$ 为锐角时为正，钝角时为负，恰为有向投影）。

过 $A$、$B$ 分别作轴 $u$ 的垂线，垂足为 $A'$、$B'$，在直角三角形中可知有向线段 $A'B'$ 的代数长度即为 $|\overrightarrow{AB}|\cos\varphi$，故：

$$
\text{Prj}_u \overrightarrow{AB} = |\overrightarrow{AB}|\cos\varphi
$$

该结果表明投影是一个数量（标量），其符号由夹角 $\varphi$ 决定。
:::
*注：投影是一个数量（标量），而非向量。*

---

## 6.2 数量积、向量积与混合积

### 数量积（点积）
- **物理背景**：恒力 $\boldsymbol{F}$ 作用下物体产生位移 $\boldsymbol{s}$，做功 $W = |\boldsymbol{F}||\boldsymbol{s}|\cos\theta$。
- **定义**：$\boldsymbol{a} \cdot \boldsymbol{b} = |\boldsymbol{a}||\boldsymbol{b}|\cos\theta$ （结果是一个标量）。
- **坐标表示**：设 $\boldsymbol{a}=(a_x, a_y, a_z)$，$\boldsymbol{b}=(b_x, b_y, b_z)$，则：
  $$ \boldsymbol{a} \cdot \boldsymbol{b} = a_x b_x + a_y b_y + a_z b_z $$

:::derivation
**推导过程：**

设 $\boldsymbol{a} = a_x\boldsymbol{i} + a_y\boldsymbol{j} + a_z\boldsymbol{k}$，$\boldsymbol{b} = b_x\boldsymbol{i} + b_y\boldsymbol{j} + b_z\boldsymbol{k}$。

由数量积的分配律与线性性展开：

$$
\boldsymbol{a} \cdot \boldsymbol{b} = (a_x\boldsymbol{i} + a_y\boldsymbol{j} + a_z\boldsymbol{k}) \cdot (b_x\boldsymbol{i} + b_y\boldsymbol{j} + b_z\boldsymbol{k})
$$

利用基向量的性质：相同方向 $\boldsymbol{i}\cdot\boldsymbol{i} = \boldsymbol{j}\cdot\boldsymbol{j} = \boldsymbol{k}\cdot\boldsymbol{k} = 1$，互相垂直 $\boldsymbol{i}\cdot\boldsymbol{j} = \boldsymbol{j}\cdot\boldsymbol{k} = \boldsymbol{k}\cdot\boldsymbol{i} = 0$，故交叉项全部为零，只剩同方向项：

$$
\boldsymbol{a} \cdot \boldsymbol{b} = a_x b_x (\boldsymbol{i}\cdot\boldsymbol{i}) + a_y b_y (\boldsymbol{j}\cdot\boldsymbol{j}) + a_z b_z (\boldsymbol{k}\cdot\boldsymbol{k}) = a_x b_x + a_y b_y + a_z b_z
$$
:::
- **夹角公式**：
  $$ \cos\theta = \frac{\boldsymbol{a} \cdot \boldsymbol{b}}{|\boldsymbol{a}||\boldsymbol{b}|} = \frac{a_x b_x + a_y b_y + a_z b_z}{\sqrt{a_x^2+a_y^2+a_z^2}\sqrt{b_x^2+b_y^2+b_z^2}} $$

:::derivation
**推导过程：**

由数量积的定义 $\boldsymbol{a} \cdot \boldsymbol{b} = |\boldsymbol{a}||\boldsymbol{b}|\cos\theta$，当 $\boldsymbol{a}, \boldsymbol{b}$ 均非零时，两边除以 $|\boldsymbol{a}||\boldsymbol{b}|$ 得：

$$
\cos\theta = \frac{\boldsymbol{a} \cdot \boldsymbol{b}}{|\boldsymbol{a}||\boldsymbol{b}|}
$$

将数量积的坐标表示 $\boldsymbol{a} \cdot \boldsymbol{b} = a_x b_x + a_y b_y + a_z b_z$ 及模的坐标表示 $|\boldsymbol{a}| = \sqrt{a_x^2+a_y^2+a_z^2}$、$|\boldsymbol{b}| = \sqrt{b_x^2+b_y^2+b_z^2}$ 代入即得夹角公式。

由此可推出垂直的充要条件：$\boldsymbol{a} \perp \boldsymbol{b} \iff \cos\theta = 0 \iff \boldsymbol{a}\cdot\boldsymbol{b} = 0 \iff a_x b_x + a_y b_y + a_z b_z = 0$。
:::
- **垂直条件**：$\boldsymbol{a} \perp \boldsymbol{b} \iff \boldsymbol{a} \cdot \boldsymbol{b} = 0 \iff a_x b_x + a_y b_y + a_z b_z = 0$。

### 向量积（叉积）
- **几何背景**：以 $\boldsymbol{a}, \boldsymbol{b}$ 为邻边的平行四边形面积。
- **定义**：$\boldsymbol{c} = \boldsymbol{a} \times \boldsymbol{b}$。
  - **模**：$|\boldsymbol{c}| = |\boldsymbol{a}||\boldsymbol{b}|\sin\theta$。
  - **方向**：垂直于 $\boldsymbol{a}, \boldsymbol{b}$ 所在平面，且符合右手规则。
- **坐标表示（行列式法）**：
  $$ \boldsymbol{a} \times \boldsymbol{b} = \begin{vmatrix} \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix} = (a_y b_z - a_z b_y)\boldsymbol{i} - (a_x b_z - a_z b_x)\boldsymbol{j} + (a_x b_y - a_y b_x)\boldsymbol{k} $$

:::derivation
**推导过程：**

设 $\boldsymbol{a} = a_x\boldsymbol{i} + a_y\boldsymbol{j} + a_z\boldsymbol{k}$，$\boldsymbol{b} = b_x\boldsymbol{i} + b_y\boldsymbol{j} + b_z\boldsymbol{k}$。由向量积的分配律展开：

$$
\boldsymbol{a} \times \boldsymbol{b} = (a_x\boldsymbol{i} + a_y\boldsymbol{j} + a_z\boldsymbol{k}) \times (b_x\boldsymbol{i} + b_y\boldsymbol{j} + b_z\boldsymbol{k})
$$

利用基向量的叉积性质：自身叉积为零 $\boldsymbol{i}\times\boldsymbol{i} = \boldsymbol{j}\times\boldsymbol{j} = \boldsymbol{k}\times\boldsymbol{k} = \boldsymbol{0}$，以及右手规则下的循环关系：

$$
\boldsymbol{i}\times\boldsymbol{j} = \boldsymbol{k},\quad \boldsymbol{j}\times\boldsymbol{k} = \boldsymbol{i},\quad \boldsymbol{k}\times\boldsymbol{i} = \boldsymbol{j}
$$

$$
\boldsymbol{j}\times\boldsymbol{i} = -\boldsymbol{k},\quad \boldsymbol{k}\times\boldsymbol{j} = -\boldsymbol{i},\quad \boldsymbol{i}\times\boldsymbol{k} = -\boldsymbol{j}
$$

代入展开并合并同类项得：

$$
\boldsymbol{a} \times \boldsymbol{b} = (a_y b_z - a_z b_y)\boldsymbol{i} + (a_z b_x - a_x b_z)\boldsymbol{j} + (a_x b_y - a_y b_x)\boldsymbol{k}
$$

该结果恰好可用三阶行列式表示（按第一行展开，注意 $\boldsymbol{j}$ 的系数为 $-(a_x b_z - a_z b_x)$，故行列式第二项前带负号）。
:::
- **平行条件**：$\boldsymbol{a} \parallel \boldsymbol{b} \iff \boldsymbol{a} \times \boldsymbol{b} = \boldsymbol{0} \iff \frac{a_x}{b_x} = \frac{a_y}{b_y} = \frac{a_z}{b_z}$。

### 混合积
- **定义**：三个向量 $\boldsymbol{a}, \boldsymbol{b}, \boldsymbol{c}$ 的混合积记作 $[\boldsymbol{a}\boldsymbol{b}\boldsymbol{c}] = (\boldsymbol{a} \times \boldsymbol{b}) \cdot \boldsymbol{c}$。
- **坐标表示**：
  $$ [\boldsymbol{a}\boldsymbol{b}\boldsymbol{c}] = \begin{vmatrix} a_x & a_y & a_z \\ b_x & b_y & b_z \\ c_x & c_y & c_z \end{vmatrix} $$

:::derivation
**推导过程：**

设 $\boldsymbol{a} = (a_x, a_y, a_z)$，$\boldsymbol{b} = (b_x, b_y, b_z)$，$\boldsymbol{c} = (c_x, c_y, c_z)$。

先求向量积 $\boldsymbol{a} \times \boldsymbol{b}$，其分量为：

$$
\boldsymbol{a} \times \boldsymbol{b} = \big(a_y b_z - a_z b_y,\ a_z b_x - a_x b_z,\ a_x b_y - a_y b_x\big)
$$

再与 $\boldsymbol{c}$ 作数量积，由数量积坐标表示得：

$$
[\boldsymbol{a}\boldsymbol{b}\boldsymbol{c}] = (\boldsymbol{a} \times \boldsymbol{b}) \cdot \boldsymbol{c} = (a_y b_z - a_z b_y)c_x + (a_z b_x - a_x b_z)c_y + (a_x b_y - a_y b_x)c_z
$$

按 $a_x, a_y, a_z$ 重新合并：

$$
= a_x(b_y c_z - b_z c_y) - a_y(b_x c_z - b_z c_x) + a_z(b_x c_y - b_y c_x)
$$

这恰是三阶行列式按第一行展开的结果，故混合积可用行列式表示。其几何意义为：该行列式的绝对值等于以 $\boldsymbol{a}, \boldsymbol{b}, \boldsymbol{c}$ 为棱的平行六面体体积；三向量共面 $\iff$ 行列式 $= 0$。
:::
- **几何意义**：其绝对值等于以 $\boldsymbol{a}, \boldsymbol{b}, \boldsymbol{c}$ 为棱的平行六面体的体积。
- **共面条件**：三向量共面 $\iff [\boldsymbol{a}\boldsymbol{b}\boldsymbol{c}] = 0$。

---

## 6.3 平面及其方程

### 平面的基本方程
- **点法式方程**：已知平面过点 $M_0(x_0, y_0, z_0)$，法向量为 $\boldsymbol{n}=(A, B, C)$。
  $$ A(x-x_0) + B(y-y_0) + C(z-z_0) = 0 $$

:::derivation
**推导过程：**

设平面过点 $M_0(x_0, y_0, z_0)$，法向量为 $\boldsymbol{n} = (A, B, C)$。

在平面上任取一点 $M(x, y, z)$，则向量 $\overrightarrow{M_0M} = (x-x_0,\ y-y_0,\ z-z_0)$ 位于该平面内。

由法向量定义，法向量 $\boldsymbol{n}$ 垂直于平面内的任一向量，故 $\boldsymbol{n} \perp \overrightarrow{M_0M}$，即：

$$
\boldsymbol{n} \cdot \overrightarrow{M_0M} = 0
$$

代入坐标即得点法式方程 $A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$。

展开并令 $D = -(Ax_0 + By_0 + Cz_0)$，便得一般式 $Ax + By + Cz + D = 0$，其中法向量始终为 $\boldsymbol{n} = (A, B, C)$。
:::
- **一般式方程**：$Ax + By + Cz + D = 0$ （法向量始终为 $\boldsymbol{n}=(A,B,C)$）。
- **截距式方程**：若平面在 $x, y, z$ 轴上的截距分别为 $a, b, c$（均不为0），则：
  $$ \frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1 $$

:::derivation
**推导过程：**

设平面与 $x$ 轴交于 $(a, 0, 0)$、与 $y$ 轴交于 $(0, b, 0)$、与 $z$ 轴交于 $(0, 0, c)$，其中 $a, b, c \neq 0$。

设平面一般方程为 $Ax + By + Cz + D = 0$（$D \neq 0$，否则平面过原点无三截距）。将三个交点分别代入：

$$
\begin{cases} Aa + D = 0 \implies A = -\dfrac{D}{a} \\ Bb + D = 0 \implies B = -\dfrac{D}{b} \\ Cc + D = 0 \implies C = -\dfrac{D}{c} \end{cases}
$$

将 $A, B, C$ 代入一般方程并两边除以 $-D$（$D \neq 0$）：

$$
\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1
$$

即为截距式方程，其中 $a, b, c$ 分别为平面在三坐标轴上的截距。
:::

### 两平面的夹角
两平面的夹角 $\theta$ 定义为其法向量 $\boldsymbol{n}_1, \boldsymbol{n}_2$ 的夹角（通常取锐角）。
$$ \cos\theta = \frac{|\boldsymbol{n}_1 \cdot \boldsymbol{n}_2|}{|\boldsymbol{n}_1||\boldsymbol{n}_2|} = \frac{|A_1A_2 + B_1B_2 + C_1C_2|}{\sqrt{A_1^2+B_1^2+C_1^2}\sqrt{A_2^2+B_2^2+C_2^2}} $$

:::derivation
**推导过程：**

设两平面 $\Pi_1: A_1x + B_1y + C_1z + D_1 = 0$ 与 $\Pi_2: A_2x + B_2y + C_2z + D_2 = 0$，其法向量分别为 $\boldsymbol{n}_1 = (A_1, B_1, C_1)$、$\boldsymbol{n}_2 = (A_2, B_2, C_2)$。

两平面的夹角 $\theta$ 定义为其法向量的夹角。由于两平面形成两个互补的角，通常取锐角，故用绝对值形式：

$$
\cos\theta = \frac{|\boldsymbol{n}_1 \cdot \boldsymbol{n}_2|}{|\boldsymbol{n}_1||\boldsymbol{n}_2|}
$$

代入数量积与模的坐标表示 $\boldsymbol{n}_1 \cdot \boldsymbol{n}_2 = A_1A_2 + B_1B_2 + C_1C_2$，$|\boldsymbol{n}_1| = \sqrt{A_1^2+B_1^2+C_1^2}$，$|\boldsymbol{n}_2| = \sqrt{A_2^2+B_2^2+C_2^2}$ 即得。

由此立得：垂直 $\iff \boldsymbol{n}_1 \cdot \boldsymbol{n}_2 = 0 \iff A_1A_2 + B_1B_2 + C_1C_2 = 0$；平行 $\iff \boldsymbol{n}_1 \parallel \boldsymbol{n}_2 \iff \frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2}$。
:::
- **垂直**：$\Pi_1 \perp \Pi_2 \iff A_1A_2 + B_1B_2 + C_1C_2 = 0$
- **平行**：$\Pi_1 \parallel \Pi_2 \iff \frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2}$

### 点到平面的距离公式推导
- **问题**：求平面外一点 $P_0(x_0, y_0, z_0)$ 到平面 $\Pi: Ax+By+Cz+D=0$ 的距离 $d$。
- **推导过程**：
  1. 在平面 $\Pi$ 上任取一点 $P_1(x_1, y_1, z_1)$，则满足 $Ax_1+By_1+Cz_1+D=0$。
  2. 构造向量 $\overrightarrow{P_1P_0} = (x_0-x_1, y_0-y_1, z_0-z_1)$。
  3. 距离 $d$ 即为 $\overrightarrow{P_1P_0}$ 在法向量 $\boldsymbol{n}=(A,B,C)$ 方向上投影的绝对值：
     $$ d = \left| \text{Prj}_{\boldsymbol{n}} \overrightarrow{P_1P_0} \right| = \frac{|\overrightarrow{P_1P_0} \cdot \boldsymbol{n}|}{|\boldsymbol{n}|} $$
  4. 展开分子：
     $$ |\overrightarrow{P_1P_0} \cdot \boldsymbol{n}| = |A(x_0-x_1) + B(y_0-y_1) + C(z_0-z_1)| $$
     $$ = |Ax_0 + By_0 + Cz_0 - (Ax_1 + By_1 + Cz_1)| $$
  5. 代入 $Ax_1+By_1+Cz_1 = -D$，得到最终公式：
     $$ d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}} $$

:::derivation
**推导过程（综合）：**

设点 $P_0(x_0, y_0, z_0)$，平面 $\Pi: Ax + By + Cz + D = 0$，法向量 $\boldsymbol{n} = (A, B, C)$。

**第一步**：在平面上任取一点 $P_1(x_1, y_1, z_1)$，满足 $Ax_1 + By_1 + Cz_1 + D = 0$。

**第二步**：构造向量 $\overrightarrow{P_1P_0} = (x_0 - x_1,\ y_0 - y_1,\ z_0 - z_1)$。

**第三步**：距离 $d$ 即为 $\overrightarrow{P_1P_0}$ 在法向量 $\boldsymbol{n}$ 方向上投影的绝对值：

$$
d = \left|\text{Prj}_{\boldsymbol{n}}\overrightarrow{P_1P_0}\right| = \frac{|\overrightarrow{P_1P_0} \cdot \boldsymbol{n}|}{|\boldsymbol{n}|}
$$

**第四步**：展开分子并利用 $Ax_1 + By_1 + Cz_1 = -D$ 消去 $P_1$ 坐标：

$$
|\overrightarrow{P_1P_0} \cdot \boldsymbol{n}| = |A(x_0-x_1) + B(y_0-y_1) + C(z_0-z_1)| = |Ax_0 + By_0 + Cz_0 + D|
$$

**第五步**：代入 $|\boldsymbol{n}| = \sqrt{A^2 + B^2 + C^2}$ 即得最终公式。

该公式的巧妙之处在于：不必具体求出 $P_1$ 的坐标，任取平面上一点即可，因为 $P_1$ 满足的方程恰好消去了 $P_1$ 的具体坐标。
:::

---

## 6.4 空间直线及其方程

### 直线的基本方程
- **一般式方程**：视为两平面的交线。
  $$ \begin{cases} A_1x + B_1y + C_1z + D_1 = 0 \\ A_2x + B_2y + C_2z + D_2 = 0 \end{cases} $$
- **对称式（点向式）方程**：已知直线上一点 $M_0(x_0, y_0, z_0)$ 和方向向量 $\boldsymbol{s}=(m, n, p)$。
  $$ \frac{x-x_0}{m} = \frac{y-y_0}{n} = \frac{z-z_0}{p} $$
- **参数式方程**：引入参数 $t$。
  $$ \begin{cases} x = x_0 + mt \\ y = y_0 + nt \\ z = z_0 + pt \end{cases} $$

### 线面间的位置关系
- **两直线的夹角 $\varphi$**（方向向量 $\boldsymbol{s}_1, \boldsymbol{s}_2$ 的夹角）：
  $$ \cos\varphi = \frac{|\boldsymbol{s}_1 \cdot \boldsymbol{s}_2|}{|\boldsymbol{s}_1||\boldsymbol{s}_2|} = \frac{|m_1m_2 + n_1n_2 + p_1p_2|}{\sqrt{m_1^2+n_1^2+p_1^2}\sqrt{m_2^2+n_2^2+p_2^2}} $$

:::derivation
**推导过程：**

设两直线的方向向量分别为 $\boldsymbol{s}_1 = (m_1, n_1, p_1)$ 和 $\boldsymbol{s}_2 = (m_2, n_2, p_2)$。

两直线的夹角 $\varphi$ 定义为方向向量的夹角，取锐角，故用绝对值形式：

$$
\cos\varphi = \frac{|\boldsymbol{s}_1 \cdot \boldsymbol{s}_2|}{|\boldsymbol{s}_1||\boldsymbol{s}_2|}
$$

代入数量积与模的坐标表示 $\boldsymbol{s}_1 \cdot \boldsymbol{s}_2 = m_1m_2 + n_1n_2 + p_1p_2$，$|\boldsymbol{s}_1| = \sqrt{m_1^2+n_1^2+p_1^2}$，$|\boldsymbol{s}_2| = \sqrt{m_2^2+n_2^2+p_2^2}$ 即得。

由此可推出：两直线垂直 $\iff m_1m_2 + n_1n_2 + p_1p_2 = 0$；两直线平行 $\iff \frac{m_1}{m_2} = \frac{n_1}{n_2} = \frac{p_1}{p_2}$。
:::
- **直线与平面的夹角 $\varphi$**（直线方向向量 $\boldsymbol{s}$ 与平面法向量 $\boldsymbol{n}$ 夹角的余角）：
  $$ \sin\varphi = \frac{|\boldsymbol{s} \cdot \boldsymbol{n}|}{|\boldsymbol{s}||\boldsymbol{n}|} = \frac{|Am + Bn + Cp|}{\sqrt{A^2+B^2+C^2}\sqrt{m^2+n^2+p^2}} $$

:::derivation
**推导过程：**

设直线方向向量 $\boldsymbol{s} = (m, n, p)$，平面法向量 $\boldsymbol{n} = (A, B, C)$。

设直线与平面的夹角为 $\varphi$（取锐角，$0 \le \varphi \le \frac{\pi}{2}$）。注意 $\varphi$ 是直线与其在平面内投影直线的夹角，故 $\varphi$ 与 $\boldsymbol{s}$、$\boldsymbol{n}$ 的夹角 $\theta$ 互为余角：

$$
\varphi = \frac{\pi}{2} - \theta \quad (\text{当 } \theta \le \tfrac{\pi}{2})
$$

因此 $\sin\varphi = \cos\theta$，而 $\cos\theta$ 可由数量积求出（取绝对值保证锐角）：

$$
\sin\varphi = \cos\theta = \frac{|\boldsymbol{s} \cdot \boldsymbol{n}|}{|\boldsymbol{s}||\boldsymbol{n}|}
$$

代入坐标表示 $\boldsymbol{s} \cdot \boldsymbol{n} = Am + Bn + Cp$，$|\boldsymbol{s}| = \sqrt{m^2+n^2+p^2}$，$|\boldsymbol{n}| = \sqrt{A^2+B^2+C^2}$ 即得。

特例：直线与平面垂直 $\iff \boldsymbol{s} \parallel \boldsymbol{n} \iff \frac{A}{m} = \frac{B}{n} = \frac{C}{p}$；直线与平面平行 $\iff \boldsymbol{s} \perp \boldsymbol{n} \iff Am + Bn + Cp = 0$。
:::

### 平面束方程与点到直线的距离
- **平面束方程**：过直线 $\begin{cases} \Pi_1=0 \\ \Pi_2=0 \end{cases}$ 的所有平面方程可表示为：
  $$ \Pi_1 + \lambda \Pi_2 = 0 \quad (\text{不包含 } \Pi_2=0) $$

:::derivation
**推导过程：**

设直线 $L$ 由两平面交线给出：$\Pi_1: A_1x + B_1y + C_1z + D_1 = 0$，$\Pi_2: A_2x + B_2y + C_2z + D_2 = 0$。

构造方程 $\Pi_1 + \lambda \Pi_2 = 0$，即：

$$
(A_1 + \lambda A_2)x + (B_1 + \lambda B_2)y + (C_1 + \lambda C_2)z + (D_1 + \lambda D_2) = 0
$$

**第一步（是平面）**：对任意 $\lambda$，上式是 $x, y, z$ 的一次方程，且因 $\boldsymbol{n}_1, \boldsymbol{n}_2$ 不成比例（否则两平面重合或平行，不构成直线），系数不全为零，故表示一个平面。

**第二步（过直线 $L$）**：$L$ 上任一点满足 $\Pi_1 = 0$ 且 $\Pi_2 = 0$，代入得 $0 + \lambda \cdot 0 = 0$，故该平面过直线 $L$。

**第三步（完备性）**：任一过 $L$ 的平面 $\Pi$（除 $\Pi_2$ 外），在 $L$ 外取一点 $P_0$，由 $\Pi_1(P_0) + \lambda \Pi_2(P_0) = 0$ 可解出唯一 $\lambda = -\frac{\Pi_1(P_0)}{\Pi_2(P_0)}$（$\Pi_2(P_0) \neq 0$，否则 $P_0 \in \Pi_2$），故 $\Pi$ 可由某 $\lambda$ 表示。

注意：$\lambda \to \infty$ 时退化为 $\Pi_2 = 0$，故该束方程不含 $\Pi_2$。
:::
- **点到直线的距离**：点 $P_0$ 到直线 $L$ (过点 $P_1$，方向向量 $\boldsymbol{s}$) 的距离 $d$。
  - **推导**：利用向量积的几何意义，以 $\overrightarrow{P_1P_0}$ 和 $\boldsymbol{s}$ 为邻边的平行四边形面积为 $|\overrightarrow{P_1P_0} \times \boldsymbol{s}|$，底边长为 $|\boldsymbol{s}|$，故高（即距离）为：
  $$ d = \frac{|\overrightarrow{P_1P_0} \times \boldsymbol{s}|}{|\boldsymbol{s}|} $$

:::derivation
**推导过程：**

设点 $P_0$，直线 $L$ 过点 $P_1$ 且方向向量为 $\boldsymbol{s}$。

**几何思路**：以向量 $\overrightarrow{P_1P_0}$ 和 $\boldsymbol{s}$ 为邻边构造平行四边形。由向量积的几何意义，该平行四边形面积为：

$$
S = |\overrightarrow{P_1P_0} \times \boldsymbol{s}|
$$

另一方面，该平行四边形以 $\boldsymbol{s}$ 为底边，底边长为 $|\boldsymbol{s}|$，而点 $P_0$ 到直线 $L$ 的距离 $d$ 恰为该底边上的高，故面积又可表示为：

$$
S = |\boldsymbol{s}| \cdot d
$$

两式联立，解出距离：

$$
|\boldsymbol{s}| \cdot d = |\overrightarrow{P_1P_0} \times \boldsymbol{s}| \implies d = \frac{|\overrightarrow{P_1P_0} \times \boldsymbol{s}|}{|\boldsymbol{s}|}
$$

该方法巧妙地利用向量积的几何意义，避免了复杂的投影计算。
:::

---

## 6.5 曲面及其方程

### 曲面方程的概念
若曲面 $S$ 与三元方程 $F(x,y,z)=0$ 满足：
1. $S$ 上任一点的坐标都满足该方程；
2. 坐标满足该方程的点都在 $S$ 上；
则称 $F(x,y,z)=0$ 为曲面 $S$ 的方程。

### 旋转曲面与柱面
- **旋转曲面**：平面曲线绕其平面内的一条定直线（旋转轴）旋转一周形成的曲面。
  - **推导法则**：绕哪个轴旋转，哪个轴的变量保持不变，另一个变量替换为“该变量与第三变量平方和的正负平方根”。
  - **示例**：$yOz$ 面上的曲线 $f(y,z)=0$ 绕 $z$ 轴旋转，方程变为 $f(\pm\sqrt{x^2+y^2}, z) = 0$。
- **柱面**：平行于定直线（母线）并沿定曲线（准线）移动的直线轨迹。
  - **例如**：$x^2+y^2=R^2$ 在空间中表示母线平行于 $z$ 轴的圆柱面。

### 二次曲面（截痕法）
三元二次方程表示的曲面称为二次曲面。研究其形状的基本方法是截痕法（用平行于坐标面的平面去截割曲面）。
- **椭球面**：
  $$ \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1 $$
- **抛物面**：
  - **椭圆抛物面**：
    $$ z = \frac{x^2}{a^2} + \frac{y^2}{b^2} $$
  - **双曲抛物面（马鞍面）**：
    $$ z = \frac{x^2}{a^2} - \frac{y^2}{b^2} $$
- **双曲面**：
  - **单叶双曲面**：
    $$ \frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1 $$
  - **双叶双曲面**：
    $$ \frac{x^2}{a^2} - \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1 $$
- **椭圆锥面**：
  $$ \frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0 $$

---

## 6.6 空间曲线及其方程

### 空间曲线的一般方程与参数方程
- **一般方程**：视为两曲面的交线。
  $$ \begin{cases} F(x,y,z) = 0 \\ G(x,y,z) = 0 \end{cases} $$
- **参数方程**：引入参数 $t$。
  $$ \begin{cases} x = x(t) \\ y = y(t) \\ z = z(t) \end{cases} \quad (\alpha \le t \le \beta) $$
- **经典案例**：圆柱螺旋线 $x=R\cos\omega t, y=R\sin\omega t, z=vt$。

### 空间曲线在坐标面上的投影
- **核心思想**：消元法求投影柱面。
- 设空间曲线 $C: \begin{cases} F(x,y,z) = 0 \\ G(x,y,z) = 0 \end{cases}$
- **求投影柱面**：从方程组中消去 $z$，得到仅含 $x, y$ 的方程 $H(x,y)=0$。这在空间中表示一个母线平行于 $z$ 轴的柱面，且包含曲线 $C$。
- **求投影曲线**：该柱面与 $xOy$ 面的交线即为 $C$ 在 $xOy$ 面上的投影曲线 $C'$：
  $$ \begin{cases} H(x,y) = 0 \\ z = 0 \end{cases} $$
- **注**：同理，消去 $x$ 可得在 $yOz$ 面的投影；消去 $y$ 可得在 $zOx$ 面的投影。

---

## 结语

空间解析几何的核心思想是“**数形结合**”——用代数方程研究几何图形，用几何直观解释代数关系。掌握向量的运算规则以及各类方程的标准形式，是后续学习多元函数微积分的重要基石。
