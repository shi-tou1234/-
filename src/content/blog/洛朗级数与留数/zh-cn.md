---
title: 洛朗级数与留数
pubDate: 2026-06-11T08:54:00.000Z
updatedDate: 2026-06-11T08:55:14.902Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 复变函数
slugId: 洛朗级数与留数
---

# 复变函数：洛朗级数与留数

> **导语**：本文从双边幂级数出发，讲解洛朗（Laurent）级数展开、孤立奇点的三类分类（可去奇点、极点、本性奇点）、零点与极点的关系，最后介绍留数的定义、留数定理以及三类奇点的留数计算规则。这些内容是复变函数积分计算的核心工具。

* * *

## 一、 洛朗级数

### 1.1 问题的提出

对于在 $z_0$ 点不解析的函数 $f(z)$，在 $z_0$ 的邻域中不可能展开成 $(z - z_0)$ 的幂级数（Taylor 级数）。

但是，如果在圆环域 $R_1 < |z - z_0| < R_2$ 内 $f(z)$ 解析，$f(z)$ 能否用级数表示呢？答案是肯定的——$f(z)$ 可以展开成级数，只是这个级数含有**负幂次项**。

### 1.2 双边幂级数

同时含有正幂项和负幂项的级数称为**双边幂级数**：

$$ \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n = \cdots + \frac{c_{-2}}{(z - z_0)^2} + \frac{c_{-1}}{z - z_0} + c_0 + c_1(z - z_0) + c_2(z - z_0)^2 + \cdots $$

其中：

* $\displaystyle\sum_{n=0}^{\infty} c_n (z - z_0)^n$ 称为**解析部分**（正幂次部分）。
* $\displaystyle\sum_{n=-\infty}^{-1} c_n (z - z_0)^n$ 称为**主要部分**（负幂次部分）。

级数 $\sum_{n=0}^{\infty} c_n (z - z_0)^n$ 是一幂级数，设收敛半径为 $R_2$，则该部分在 $|z - z_0| < R_2$ 内收敛；负幂次部分在 $|z - z_0| > R_1$ 内收敛。因此，双边幂级数的收敛域为圆环域：

$$ R_1 < |z - z_0| < R_2 $$

### 1.3 洛朗展开定理

> **定理（洛朗（Laurent）展开定理）**设 $f(z)$ 在圆环域 $R_1 < |z - z_0| < R_2$ 内处处解析，则在此圆环域内 $f(z)$ 可展开为双边幂级数：$$ f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n $$其中系数$$ c_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}}\,d\zeta $$ $C$ 为圆环域内绕 $z_0$ 的任意正向简单闭曲线。

:::derivation
**推导过程（洛朗系数公式 $c_n = \dfrac{1}{2\pi i}\displaystyle\oint_C \dfrac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta$）：**

在圆环域 $R_1 < |z-z_0| < R_2$ 内取两个同心圆周 $C_1$（半径 $r_1$）、$C_2$（半径 $r_2$），$R_1 < r_1 < r_2 < R_2$，$z$ 在两圆之间的环域内。

由复合闭路定理，$f(z)$ 沿边界 $\Gamma = C_2 - C_1$（$C_2$ 逆时针、$C_1$ 顺时针）的积分可用柯西积分公式表示：

$$ f(z) = \frac{1}{2\pi i}\oint_{C_2}\frac{f(\zeta)}{\zeta - z}\,d\zeta - \frac{1}{2\pi i}\oint_{C_1}\frac{f(\zeta)}{\zeta - z}\,d\zeta $$

第一项中 $\lvert\zeta - z_0\rvert = r_2 > \lvert z - z_0\rvert$，故 $\dfrac{1}{\zeta - z} = \dfrac{1}{(\zeta-z_0)-(z-z_0)} = \dfrac{1}{\zeta-z_0}\cdot\dfrac{1}{1-\dfrac{z-z_0}{\zeta-z_0}}$，按 $\dfrac{1}{1-t}=\sum t^n$（$t=\dfrac{z-z_0}{\zeta-z_0}$，$\lvert t\rvert<1$）展开，得**正幂项**。

第二项中 $\lvert\zeta - z_0\rvert = r_1 < \lvert z - z_0\rvert$，改写 $\dfrac{1}{\zeta-z} = -\dfrac{1}{z-z_0}\cdot\dfrac{1}{1-\dfrac{\zeta-z_0}{z-z_0}}$，按几何级数展开（$\lvert\frac{\zeta-z_0}{z-z_0}\rvert<1$），得**负幂项**。

合并两部分，$f(z) = \sum\limits_{n=-\infty}^{\infty} c_n(z-z_0)^n$。两端乘 $(z-z_0)^{-n-1}$ 后沿 $C$ 积分，由 $\displaystyle\oint_C(z-z_0)^k\,dz = \begin{cases}2\pi i,&k=-1\\0,&k\neq -1\end{cases}$，只有 $k=-1$（即 $k=-n-1 \Rightarrow n$ 对应项）留下，得：

$$ c_n = \frac{1}{2\pi i}\oint_C \frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta $$

该公式对一切整数 $n$（正、负、零）统一成立，这是洛朗级数与泰勒级数（仅 $n\geq 0$）的关键区别。
:::

在许多实际应用中，经常遇到 $f(z)$ 在奇点 $z_0$ 的去心邻域内解析，需要把 $f(z)$ 展成级数，这时就利用**洛朗（Laurent）级数**来展开。

### 1.4 展开式的唯一性

> **结论**一个在某一圆环域内解析的函数展开为含有正、负幂项的级数是唯一的，这个级数就是 $f(z)$ 的洛朗级数。

### 1.5 洛朗级数的求法

在实际应用中，将函数展开成 Laurent 级数，通常使用**间接法**。在大多数情况，均采用这一简便的方法求函数在指定圆环域内的 Laurent 展开式，只有在个别情况下，才直接采用公式求 Laurent 系数。

**有理函数的洛朗展开步骤**：

1. 首先把有理函数分解成多项式与若干个最简分式之和。
2. 然后利用已知的几何级数 $\dfrac{1}{1-z} = \sum_{n=0}^{\infty} z^n$，经计算展成需要的形式。

**小结**：把 $f(z)$ 展成洛朗级数的方法：

| 情况  | 展开方式 |
| --- | --- |
| 在圆域内解析 | 展开成 Taylor 级数（正幂项） |
| 在环域内解析 | 展开成 Laurent 级数（含负幂项） |

**Laurent 级数与 Taylor 级数的不同点**：

* Taylor 级数：先展开，再求收敛半径 $R$，找出收敛域。
* Laurent 级数：先求 $f(z)$ 的奇点，然后以 $z_0$ 为中心，奇点为分隔点，找出 $z_0$ 到无穷远点的所有使 $f(z)$ 解析的环域，在环域上展开。

#### 例题 1：将函数 $f(z) = \dfrac{1}{(z-1)(z-2)}$ 在 $z=1$ 的去心邻域内展开成洛朗级数

**解：**在 $z=1$ 的去心邻域 $0 < |z-1| < 1$ 内：

$$ \frac{1}{(z-1)(z-2)} = \frac{1}{z-1} \cdot \frac{1}{(z-1)-1} = -\frac{1}{z-1} \cdot \frac{1}{1-(z-1)} $$

利用几何级数 $\frac{1}{1-w} = \sum_{n=0}^{\infty} w^n$，令 $w = z-1$：

$$ \frac{1}{(z-1)(z-2)} = -\frac{1}{z-1} \sum_{n=0}^{\infty} (z-1)^n = -\sum_{n=-1}^{\infty} (z-1)^n $$

:::derivation
**推导过程（$f(z)=\dfrac{1}{(z-1)(z-2)}$ 在 $0<|z-1|<1$ 的洛朗展开）：**

展开中心 $z_0=1$，区域 $0<|z-1|<1$（去心邻域，内半径为 $0$ 因 $z=1$ 是奇点）。

**步骤1**：拆分引发极点的因子。$z-1$ 是分母因子，故 $\dfrac{1}{z-1}$ 单独提出，剩余部分应展为 $(z-1)$ 的幂级数：

$$ \frac{1}{(z-1)(z-2)} = \frac{1}{z-1}\cdot\frac{1}{z-2} $$

**步骤2**：把 $z-2$ 用 $(z-1)$ 表示。$z-2 = (z-1) - 1 = -[1 - (z-1)]$，故：

$$ \frac{1}{z-2} = -\frac{1}{1-(z-1)} $$

**步骤3**：判断收敛区域。$|z-1|<1 \Rightarrow |z-1|<1$，可套用几何级数 $\dfrac{1}{1-t}=\sum t^n$（$t = z-1$）：

$$ \frac{1}{z-2} = -\sum_{n=0}^{\infty}(z-1)^n $$

**步骤4**：合并。乘以 $\dfrac{1}{z-1}$：

$$ f(z) = -\frac{1}{z-1}\sum_{n=0}^{\infty}(z-1)^n = -\sum_{n=0}^{\infty}(z-1)^{n-1} $$

令下标 $m = n-1$（$n=0\Rightarrow m=-1$），得 $f(z) = -\sum\limits_{m=-1}^{\infty}(z-1)^m$，即：

$$ f(z) = -\frac{1}{z-1} - 1 - (z-1) - (z-1)^2 - \cdots $$

主部仅一项 $-\dfrac{1}{z-1}$（$c_{-1}=-1\neq 0$），故 $z=1$ 为一级极点，留数 $\operatorname{Res}[f,1] = -1$。
:::

这就是 $f(z)$ 在 $0 < |z-1| < 1$ 内的洛朗展开式。

* * *

## 二、 孤立奇点

### 2.1 孤立奇点的定义

如果函数 $f(z)$ 在 $z_0$ 的某个邻域内（除 $z_0$ 点外）处处可导，但在 $z_0$ 点不解析，那么称 $z_0$ 为 $f(z)$ 的**孤立奇点**。

> **注意**：离散奇点未必都是孤立的。例如，函数 $f(z) = \dfrac{1}{\sin(1/z)}$ 在 $z = 0$ 处为非孤立奇点。但绝大部分离散奇点是孤立的。

### 2.2 孤立奇点的分类

设 $z_0$ 是 $f(z)$ 的一个孤立奇点，在 $z_0$ 的去心邻域 $0 < |z - z_0| < \delta$ 内，$f(z)$ 可展开为洛朗级数：

$$ f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n $$

根据洛朗级数中**负幂项**的不同情况，将孤立奇点分为三类：

| 类型  | 洛朗级数特征 | 示例  |
| --- | --- | --- |
| **可去奇点** | 没有负幂次项 | $\displaystyle\frac{\sin z}{z}$ 在 $z=0$ |
| **$m$ 级极点** | 只有有限多个负幂次项（最高负幂次为 $-m$） | $\displaystyle\frac{1}{(z-1)^2}$ 在 $z=1$ |
| **本性奇点** | 有无穷多个负幂次项 | $\displaystyle e^{1/z}$ 在 $z=0$ |

### 2.3 可去奇点

若洛朗展开式中不含 $z - z_0$ 的负幂项，则称 $z = z_0$ 为 $f(z)$ 的**可去奇点**。

> **等价条件**$z_0$ 为 $f(z)$ 的可去奇点 $\iff$ $\displaystyle\lim_{z \to z_0} f(z)$ 存在且有限。

**特点**：奇点同时为分子、分母的零点，且分子的零点阶数不低于分母的零点阶数，即能消去分母的零项。

#### 例题 2：判断 $f(z) = \dfrac{\sin z}{z}$ 的孤立奇点类型

**解：**将 $\sin z$ 在 $z=0$ 处展开：

$$ \frac{\sin z}{z} = \frac{1}{z}\left(z - \frac{z^3}{3!} + \frac{z^5}{5!} - \cdots\right) = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \cdots $$

:::derivation
**推导过程（$\dfrac{\sin z}{z}$ 的洛朗展开与可去奇点判定）：**

$\sin z$ 在全平面解析，在 $z=0$ 处的泰勒级数为：

$$ \sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}z^{2n+1} $$

在去心邻域 $0 < |z| < \infty$ 内，$z \neq 0$，可两边除以 $z$：

$$ \frac{\sin z}{z} = \frac{1}{z}\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}z^{2n+1} = \sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}z^{2n} = 1 - \frac{z^2}{3!} + \frac{z^4}{5!} - \cdots $$

除以 $z$ 使每项幂次降低 $1$，原最低次项 $z^1$ 变为 $z^0$（常数项），**不产生负幂项**。

按奇点分类：洛朗级数无负幂项 $\Rightarrow$ $z=0$ 为**可去奇点**。补充定义 $f(0) = 1$（即 $\lim\limits_{z\to 0}\dfrac{\sin z}{z} = 1$）后，$f(z)$ 在 $z=0$ 解析，故留数 $\operatorname{Res} = c_{-1} = 0$。

**对比**：若分子为 $1 - \cos z = \dfrac{z^2}{2!} - \cdots$（最低次 $z^2$），除以 $z$ 仍无负幂项，$z=0$ 仍可去；但若除以 $z^3$，则会出现 $\dfrac{1}{z}$ 项，留数非零。
:::

展开式中不含 $z$ 的负幂项，所以 $z=0$ 是**可去奇点**。

> **验证**：$\displaystyle\lim_{z \to 0} \frac{\sin z}{z} = 1$，极限存在且有限。

### 2.4 极点

若洛朗展开式中含有有限多个 $z - z_0$ 的负幂项，且最高负幂次为 $-m$，即

$$ f(z) = \frac{c_{-m}}{(z - z_0)^m} + \cdots + \frac{c_{-1}}{z - z_0} + c_0 + c_1(z - z_0) + \cdots, \quad c_{-m} \neq 0 $$

则称 $z = z_0$ 为 $f(z)$ 的 **$m$ 级极点**（$m$ 阶极点）。

> **等价条件**$z_0$ 为 $f(z)$ 的 $m$ 级极点 $\iff$ $\displaystyle\lim_{z \to z_0} f(z) = \infty$。

#### 例题 3：判断 $f(z) = \dfrac{1}{(z-1)(z-2)}$ 的奇点类型

**解：**$z=1$ 和 $z=2$ 是 $f(z)$ 的孤立奇点。由例题 1 知，在 $z=1$ 的去心邻域内：

$$ \frac{1}{(z-1)(z-2)} = -\sum_{n=-1}^{\infty} (z-1)^n $$

$c_{-1} \neq 0$，所以 $z=1$ 是 $f(z)$ 的**一级极点**。同理可证，$z=2$ 也是 $f(z)$ 的**一级极点**。

### 2.5 本性奇点

若洛朗展开式中含有无穷多个 $z - z_0$ 的负幂项，则称 $z = z_0$ 为 $f(z)$ 的**本性奇点**。

> **等价条件**$z_0$ 为 $f(z)$ 的本性奇点 $\iff$ $\displaystyle\lim_{z \to z_0} f(z)$ 不存在且不为 $\infty$。

#### 例题 4：判断 $f(z) = e^{1/z}$ 在 $z=0$ 处的奇点类型

**解：**在 $0 < \lvert z \rvert < \infty$ 圆环域内，将其展开成洛朗级数：

$$ e^{1/z} = \sum_{n=0}^{\infty} \frac{1}{n!} \cdot \frac{1}{z^n} = 1 + \frac{1}{z} + \frac{1}{2!\,z^2} + \frac{1}{3!\,z^3} + \cdots $$

:::derivation
**推导过程（$e^{1/z}$ 的洛朗展开）：**

已知指数函数的泰勒级数 $e^w = \sum\limits_{n=0}^{\infty}\dfrac{w^n}{n!}$ 对一切 $w \in \mathbb{C}$ 成立。

令 $w = 1/z$（在去心邻域 $0 < |z| < \infty$ 内 $w$ 有限），直接代入：

$$ e^{1/z} = \sum_{n=0}^{\infty}\frac{(1/z)^n}{n!} = \sum_{n=0}^{\infty}\frac{1}{n!\,z^n} $$

逐项写出：$e^{1/z} = 1 + \dfrac{1}{z} + \dfrac{1}{2!\,z^2} + \dfrac{1}{3!\,z^3} + \cdots$。

该展开式中除 $n=0$ 的常数项外，**$n \geq 1$ 的项全是 $z$ 的负幂项，且有无穷多个**。按奇点分类定义，洛朗级数含无穷多负幂项 $\Rightarrow$ $z=0$ 为本性奇点。

（也可验证极限：$z \to 0^+$ 时 $e^{1/z} \to +\infty$；$z \to 0^-$ 时 $e^{1/z} \to 0$；沿虚轴 $z = it\to 0$ 时 $e^{1/(it)} = e^{-i/t}$ 振荡无极限，故 $\lim_{z\to 0}e^{1/z}$ 不存在且不为 $\infty$，符合本性奇点特征。）
:::

$f(z)$ 含有无穷多项 $z$ 的负幂次项，因此 $z=0$ 是 $f(z)$ 的**本性奇点**。

### 2.6 三类奇点的判别总结

> **充要条件**可去奇点、极点、本性奇点的判别依据为：当 $z \to z_0$ 时，$f(z)$ 的极限为：
> 
> 1. **有限数** $\to$ 可去奇点
> 2. **无穷大** $\to$ 极点
> 3. **不存在且不为无穷大** $\to$ 本性奇点

在实际解题过程中，还可以根据孤立奇点的性质来判断孤立奇点的类型，无需每次都把函数展开成洛朗级数。

* * *

## 三、 零点与极点的关系

### 3.1 零点的定义

> **定义**不恒等于 0 的解析函数 $f(z)$ 如果能表示成$$ f(z) = (z - z_0)^m \varphi(z) $$ 其中 $\varphi(z)$ 在 $z_0$ 处解析且 $\varphi(z_0) \neq 0$，则称 $z = z_0$ 为 $f(z)$ 的 **$m$ 级零点**（$m$ 阶零点）。

### 3.2 零点阶数的判别

> **定理（零点阶数判别）**$z_0$ 是 $f(z)$ 的 $m$ 级零点 $\iff$ $f^{(k)}(z_0) = 0$（$k = 0, 1, \cdots, m-1$），且 $f^{(m)}(z_0) \neq 0$。

:::derivation
**推导过程（零点阶数与导数的关系）：**

由零点定义，$z_0$ 为 $f(z)$ 的 $m$ 级零点 $\iff$ $f(z) = (z-z_0)^m\varphi(z)$，$\varphi$ 在 $z_0$ 解析且 $\varphi(z_0)\neq 0$。

因 $\varphi(z)$ 在 $z_0$ 解析，可在 $z_0$ 处展为泰勒级数 $\varphi(z) = \sum\limits_{k=0}^{\infty} b_k(z-z_0)^k$，$b_0 = \varphi(z_0) \neq 0$。于是：

$$ f(z) = (z-z_0)^m\sum_{k=0}^{\infty} b_k(z-z_0)^k = \sum_{k=0}^{\infty} b_k (z-z_0)^{m+k} $$

此即 $f$ 在 $z_0$ 的泰勒展开。可见展开式中 $(z-z_0)^0, (z-z_0)^1, \ldots, (z-z_0)^{m-1}$ 项系数均为 $0$，$(z-z_0)^m$ 项系数 $b_0 \neq 0$。

由泰勒级数系数公式 $a_n = \dfrac{f^{(n)}(z_0)}{n!}$：

- $k = 0,1,\ldots,m-1$：$a_k = 0 \Rightarrow f^{(k)}(z_0) = 0$；
- $k = m$：$a_m = b_0 \neq 0 \Rightarrow f^{(m)}(z_0) = m!\,b_0 \neq 0$。

反之，若 $f^{(0)}=\cdots=f^{(m-1)}=0$ 且 $f^{(m)}\neq 0$，则泰勒级数最低次项为 $(z-z_0)^m$，提出该因子即得 $f(z) = (z-z_0)^m\varphi(z)$，$\varphi(z_0) = f^{(m)}(z_0)/m! \neq 0$，故 $z_0$ 为 $m$ 级零点。
:::

### 3.3 零点与极点的关系

> **定理**若 $z_0$ 是 $f(z)$ 的 $m$ 级零点，则 $z_0$ 是 $\dfrac{1}{f(z)}$ 的 $m$ 级极点；反之亦然。

:::derivation
**推导过程（零点与极点的对偶关系）：**

设 $z_0$ 是 $f(z)$ 的 $m$ 级零点，则 $f(z) = (z-z_0)^m\varphi(z)$，$\varphi(z_0) \neq 0$ 且 $\varphi$ 在 $z_0$ 解析。取倒数：

$$ \frac{1}{f(z)} = \frac{1}{(z-z_0)^m\varphi(z)} = \frac{1}{(z-z_0)^m}\cdot\frac{1}{\varphi(z)} $$

令 $\psi(z) = 1/\varphi(z)$。因 $\varphi(z_0)\neq 0$ 且 $\varphi$ 在 $z_0$ 解析，由解析函数除法（或在 $z_0$ 邻域内 $\varphi\neq 0$，$1/\varphi$ 解析），$\psi(z)$ 在 $z_0$ 解析且 $\psi(z_0) = 1/\varphi(z_0) \neq 0$。

于是 $\dfrac{1}{f(z)} = \dfrac{\psi(z)}{(z-z_0)^m}$，这正是 $m$ 级极点的标准形式（洛朗主部最高负幂次为 $-m$，系数 $\psi(z_0)\neq 0$），故 $z_0$ 是 $1/f(z)$ 的 $m$ 级极点。

反之，若 $z_0$ 是 $1/f(z)$ 的 $m$ 级极点，则 $1/f(z) = (z-z_0)^{-m}\psi(z)$，$\psi(z_0)\neq 0$，取倒数 $f(z) = (z-z_0)^m/\psi(z) = (z-z_0)^m\varphi(z)$，$\varphi(z_0) = 1/\psi(z_0)\neq 0$，故 $z_0$ 是 $f(z)$ 的 $m$ 级零点。

**意义**：判断极点阶数时，只需找分母的零点阶数，无需展开洛朗级数。
:::

利用倒数的零点来判断极点阶数，比直接用洛朗级数判断更简便。

#### 例题 5：求 $f(z) = \dfrac{1}{\sin z}$ 的极点

**解：**$\sin z$ 的零点为 $z = k\pi$（$k \in \mathbb{Z}$），且 $(\sin z)'|_{z=k\pi} = \cos(k\pi) = \pm 1 \neq 0$，故 $z = k\pi$ 是 $\sin z$ 的**一级零点**。

因此，$z = k\pi$ 是 $f(z) = \dfrac{1}{\sin z}$ 的**一级极点**。

* * *

## 四、 留数

### 4.1 留数的定义

> **定义**设 $z_0$ 为 $f(z)$ 的孤立奇点，$f(z)$ 在 $z_0$ 的去心邻域内的洛朗级数为：$$ f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n $$ 称系数 $c_{-1}$（即 $(z - z_0)^{-1}$ 项的系数）为 $f(z)$ 在 $z_0$ 处的**留数**（Residue），记作：$$ \operatorname{Res}[f(z), z_0] = c_{-1} $$

由洛朗系数的积分表达式可得：

$$ \operatorname{Res}[f(z), z_0] = \frac{1}{2\pi i} \oint_{|z-z_0|=\rho} f(z)\,dz $$

:::derivation
**推导过程（留数的积分表达式 $\operatorname{Res}[f,z_0] = \dfrac{1}{2\pi i}\displaystyle\oint f\,dz$）：**

设 $z_0$ 为 $f(z)$ 的孤立奇点，在去心邻域 $0<|z-z_0|<\rho$ 内 $f(z)$ 的洛朗展开为：

$$ f(z) = \sum_{n=-\infty}^{\infty} c_n (z-z_0)^n $$

沿圆周 $C: |z-z_0|=\rho$（正向）逐项积分：

$$ \oint_C f(z)\,dz = \sum_{n=-\infty}^{\infty} c_n \oint_C (z-z_0)^n\,dz $$

由基本结论 $\displaystyle\oint_C (z-z_0)^n\,dz = \begin{cases}2\pi i,& n=-1\\0,& n\neq -1\end{cases}$（参数化 $z = z_0 + \rho e^{i\theta}$ 即可验证），求和式中仅 $n=-1$ 项非零：

$$ \oint_C f(z)\,dz = c_{-1}\cdot 2\pi i $$

按定义 $\operatorname{Res}[f,z_0] = c_{-1}$，故：

$$ \operatorname{Res}[f(z),z_0] = c_{-1} = \frac{1}{2\pi i}\oint_C f(z)\,dz $$

**意义**：留数把"局部洛朗系数"与"小围道积分"联系起来，是留数定理的基石。该积分与 $\rho$ 的大小无关（只要圆内无其他奇点）。
:::

其中 $\rho$ 足够小，使圆周内除 $z_0$ 外无其他奇点。

### 4.2 留数定理

> **定理（留数定理）**设 $f(z)$ 在区域 $D$ 内除有限个孤立奇点 $z_1, z_2, \cdots, z_n$ 外处处解析，$C$ 为 $D$ 内包围这些奇点的正向简单闭曲线，则：$$ \oint_C f(z)\,dz = 2\pi i \sum_{k=1}^{n} \operatorname{Res}[f(z), z_k] $$

:::derivation
**推导过程（留数定理）：**

设 $f(z)$ 在闭曲线 $C$ 内部除奇点 $z_1,\ldots,z_n$ 外处处解析。

在每个奇点 $z_k$ 周围作小圆周 $C_k: |z-z_k|=\rho_k$，取 $\rho_k$ 充分小，使各 $C_k$ 互不相交且互不包含，并全部含于 $C$ 内。

在由外边界 $C$ 与内边界 $C_1,\ldots,C_n$ 围成的多连通区域内 $f(z)$ 解析。由**复合闭路定理**（柯西定理在多连通区域的推广）：

$$ \oint_C f(z)\,dz = \sum_{k=1}^{n}\oint_{C_k} f(z)\,dz $$

（外边界积分 = 各内边界积分之和，注意 $C_k$ 取逆时针正向。）

对每个小圆周 $C_k$，由留数的积分表达式 $\operatorname{Res}[f,z_k] = \dfrac{1}{2\pi i}\displaystyle\oint_{C_k} f\,dz$，得：

$$ \oint_{C_k} f(z)\,dz = 2\pi i\,\operatorname{Res}[f,z_k] $$

代入求和：

$$ \oint_C f(z)\,dz = \sum_{k=1}^{n} 2\pi i\,\operatorname{Res}[f,z_k] = 2\pi i\sum_{k=1}^{n}\operatorname{Res}[f(z),z_k] $$

**核心思想**：把"沿大围道的积分"分解为"各奇点处小围道积分之和"，而每个小围道积分由该点留数完全决定。
:::

留数定理将求沿闭曲线 $C$ 的积分，归结为求在 $C$ 中各孤立奇点的留数。这是复变函数积分计算的核心方法。

### 4.3 留数的计算规则

对于不同类型的孤立奇点，可采用不同的方法求留数。

#### 规则 I：可去奇点

若 $z_0$ 是 $f(z)$ 的可去奇点，则：

$$ \operatorname{Res}[f(z), z_0] = 0 $$

:::derivation
**推导过程（可去奇点处留数为零）：**

$z_0$ 为可去奇点 $\iff$ $f(z)$ 在 $z_0$ 去心邻域的洛朗级数**不含负幂项**：

$$ f(z) = c_0 + c_1(z-z_0) + c_2(z-z_0)^2 + \cdots $$

（即主部为零，只有解析部分。）

由留数定义 $\operatorname{Res}[f,z_0] = c_{-1}$，而可去奇点对应的洛朗级数中 $c_{-1} = 0$（根本不存在负幂项），故：

$$ \operatorname{Res}[f(z), z_0] = c_{-1} = 0 $$

**等价理解**：可去奇点处 $\lim_{z\to z_0} f(z)$ 存在有限（设为 $L$），补充定义 $f(z_0)=L$ 后 $f$ 在 $z_0$ 解析。解析函数沿包围 $z_0$ 的小围道积分为零（柯西定理），由 $\operatorname{Res} = \dfrac{1}{2\pi i}\oint f\,dz$ 即得留数为零。

例：$\dfrac{\sin z}{z}$ 在 $z=0$ 处可去，$\operatorname{Res}=0$。
:::

#### 规则 II：一级极点

若 $z_0$ 是 $f(z)$ 的一级极点，则：

$$ \operatorname{Res}[f(z), z_0] = \lim_{z \to z_0} (z - z_0) f(z) $$

:::derivation
**推导过程（一级极点留数公式 $\operatorname{Res}[f,z_0]=\lim\limits_{z\to z_0}(z-z_0)f(z)$）：**

$z_0$ 为 $f(z)$ 的一级（阶）极点 $\iff$ 洛朗级数主部仅含一项 $\dfrac{c_{-1}}{z-z_0}$（$c_{-1}\neq 0$）：

$$ f(z) = \frac{c_{-1}}{z-z_0} + c_0 + c_1(z-z_0) + c_2(z-z_0)^2 + \cdots $$

两边同乘 $(z - z_0)$：

$$ (z-z_0)f(z) = c_{-1} + c_0(z-z_0) + c_1(z-z_0)^2 + \cdots $$

右端除首项 $c_{-1}$ 外，各项均含因子 $(z-z_0)$，令 $z \to z_0$ 时全部趋于 $0$，故：

$$ \lim_{z\to z_0}(z-z_0)f(z) = c_{-1} = \operatorname{Res}[f,z_0] $$

**等价刻画**：一级极点意味着 $f(z) = \dfrac{g(z)}{z-z_0}$，$g(z_0)\neq 0$ 且 $g$ 在 $z_0$ 解析。乘 $(z-z_0)$ 后消去极点因子，极限即 $g(z_0) = c_{-1}$。

这就是"消去引发极点的因子后取极限"的由来。
:::

特别地，若 $f(z) = \dfrac{P(z)}{Q(z)}$，其中 $P(z_0) \neq 0$，$Q(z_0) = 0$，$Q'(z_0) \neq 0$，则：

$$ \operatorname{Res}[f(z), z_0] = \frac{P(z_0)}{Q'(z_0)} $$

:::derivation
**推导过程（$P/Q$ 型一级极点留数公式 $\operatorname{Res} = \dfrac{P(z_0)}{Q'(z_0)}$）：**

设 $f(z) = \dfrac{P(z)}{Q(z)}$，$P(z_0)\neq 0$，$Q(z_0) = 0$，$Q'(z_0)\neq 0$。

$Q(z_0)=0$ 且 $Q'(z_0)\neq 0$ 表明 $z_0$ 是 $Q(z)$ 的一级零点，从而 $z_0$ 是 $f(z)$ 的一级极点（分子 $P(z_0)\neq 0$）。

由一级极点留数公式：

$$ \operatorname{Res}[f,z_0] = \lim_{z\to z_0}(z-z_0)\frac{P(z)}{Q(z)} $$

因 $Q(z_0)=0$，$Q(z)$ 在 $z_0$ 处可写为 $Q(z) = Q'(z_0)(z-z_0) + \dfrac{Q''(z_0)}{2!}(z-z_0)^2 + \cdots$，提出 $(z-z_0)$：

$$ Q(z) = (z-z_0)\left[Q'(z_0) + \frac{Q''(z_0)}{2!}(z-z_0) + \cdots\right] $$

故 $(z-z_0) = \dfrac{Q(z)}{Q'(z_0) + O(z-z_0)}$，代入极限（等价于洛必达法则思想）：

$$ \lim_{z\to z_0}(z-z_0)\frac{P(z)}{Q(z)} = \lim_{z\to z_0}\frac{P(z)}{\dfrac{Q(z)}{z-z_0}} = \frac{P(z_0)}{Q'(z_0)} $$

（因 $\lim\limits_{z\to z_0}\dfrac{Q(z)}{z-z_0} = Q'(z_0)$，正是导数定义。）

**适用条件**：$z_0$ 必须是 $Q$ 的一级零点（$Q'(z_0)\neq 0$）；高阶零点不可直接用此式。
:::

#### 规则 III：$m$ 级极点

若 $z_0$ 是 $f(z)$ 的 $m$ 级极点，则：

$$ \operatorname{Res}[f(z), z_0] = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{\,m-1}}{dz^{\,m-1}} \left[(z - z_0)^m f(z)\right] $$

:::derivation
**推导过程（$m$ 级极点留数公式）：**

$z_0$ 为 $f(z)$ 的 $m$ 级极点 $\iff$ 洛朗级数主部最高负幂次为 $-m$（$c_{-m}\neq 0$）：

$$ f(z) = \frac{c_{-m}}{(z-z_0)^m} + \cdots + \frac{c_{-1}}{z-z_0} + c_0 + c_1(z-z_0) + \cdots $$

两边乘 $(z-z_0)^m$，消去全部负幂：

$$ (z-z_0)^m f(z) = c_{-m} + c_{-m+1}(z-z_0) + \cdots + c_{-1}(z-z_0)^{m-1} + c_0(z-z_0)^m + \cdots $$

记 $g(z) = (z-z_0)^m f(z)$，它在 $z_0$ 处解析（极点已消去），上式即 $g$ 在 $z_0$ 的泰勒展开。$c_{-1}$ 是 $g(z)$ 中 $(z-z_0)^{m-1}$ 项的系数。

由泰勒系数公式 $a_k = \dfrac{g^{(k)}(z_0)}{k!}$，取 $k = m-1$：

$$ c_{-1} = \frac{g^{(m-1)}(z_0)}{(m-1)!} = \frac{1}{(m-1)!}\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\left[(z-z_0)^m f(z)\right] $$

即 $\operatorname{Res}[f,z_0] = c_{-1} = \dfrac{1}{(m-1)!}\lim\limits_{z\to z_0}\dfrac{d^{m-1}}{dz^{m-1}}[(z-z_0)^m f(z)]$。

**要点**：乘 $(z-z_0)^m$ 消去极点后，目标系数 $c_{-1}$ 变成解析函数 $g$ 的第 $(m-1)$ 阶泰勒系数，故求 $(m-1)$ 阶导数除以 $(m-1)!$。一级极点 $m=1$ 时退化为 $\lim (z-z_0)f(z)$（零阶导数即自身）。
:::

> **注意**：
> 
> 1. 要灵活运用规则及洛朗级数展开来求留数，不要死套规则。
> 2. 由规则 II 的推导过程知，在使用规则 II 时，可将 $m$ 取得比实际级数高，这可使计算更简单。

#### 规则 IV：本性奇点

若 $z_0$ 是 $f(z)$ 的本性奇点，则直接展开成洛朗级数求 $c_{-1}$。

### 4.4 计算示例

#### 例题 6：求 $f(z) = \dfrac{1}{(z-1)(z-2)}$ 在各奇点的留数

**解：**$f(z)$ 有孤立奇点 $z=1$ 和 $z=2$，均为一级极点。由规则 II：

$$ \operatorname{Res}[f(z), 1] = \lim_{z \to 1} (z-1)f(z) = \lim_{z \to 1} \frac{1}{z-2} = -1 $$

$$ \operatorname{Res}[f(z), 2] = \lim_{z \to 2} (z-2)f(z) = \lim_{z \to 2} \frac{1}{z-1} = 1 $$

#### 例题 7：求 $f(z) = \dfrac{e^z}{z^2+1}$ 在 $z=i$ 处的留数

**解：**$z=i$ 是一级极点（分母的一级零点）。

方法一（利用公式）：$P(z)=e^z$，$Q(z)=z^2+1$，$Q'(z)=2z$

$$ \operatorname{Res}[f(z), i] = \frac{P(i)}{Q'(i)} = \frac{e^i}{2i} = -\frac{i}{2}e^i $$

方法二（极限法）：

$$ \operatorname{Res}[f(z), i] = \lim_{z \to i} (z-i)\frac{e^z}{z^2+1} = \lim_{z \to i} \frac{e^z}{z+i} = \frac{e^i}{2i} $$

两种方法结果相同。

#### 例题 8：计算积分 $\displaystyle\oint_{\lvert z \rvert=2} \frac{1}{(z-1)(z-2)}\,dz$

**解：**在圆周 $\lvert z \rvert=2$ 内，$f(z)$ 有孤立奇点 $z=1$ 和 $z=2$。由留数定理和例题 6 的结果：

$$ \oint_{|z|=2} \frac{1}{(z-1)(z-2)}\,dz = 2\pi i \left[\operatorname{Res}(f, 1) + \operatorname{Res}(f, 2)\right] = 2\pi i(-1 + 1) = 0 $$

:::derivation
**推导过程（留数抵消使积分为零）：**

围道 $|z|=2$ 内含两个奇点 $z=1$、$z=2$（均为一级极点）。由留数定理：

$$ \oint_{|z|=2} f(z)\,dz = 2\pi i\,[\operatorname{Res}(f,1) + \operatorname{Res}(f,2)] $$

分别计算（规则 II）：

$$ \operatorname{Res}(f,1) = \lim_{z\to 1}(z-1)\cdot\frac{1}{(z-1)(z-2)} = \lim_{z\to 1}\frac{1}{z-2} = \frac{1}{1-2} = -1 $$

$$ \operatorname{Res}(f,2) = \lim_{z\to 2}(z-2)\cdot\frac{1}{(z-1)(z-2)} = \lim_{z\to 2}\frac{1}{z-1} = \frac{1}{2-1} = 1 $$

两个留数互为相反数：$\operatorname{Res}(f,1) + \operatorname{Res}(f,2) = -1 + 1 = 0$。

**原因**：$f(z) = \dfrac{1}{(z-1)(z-2)}$ 在 $|z|$ 充分大时渐近于 $\dfrac{1}{z^2}$（即 $f(z) \sim 1/z^2$，洛朗展在无穷远无 $1/z$ 项）。等价地，把 $f(z)$ 在无穷远邻域展开，$\infty$ 处留数为 $0$；而全平面所有奇点（含 $\infty$）留数之和恒为 $0$，故有限远奇点留数之和必为 $0$。

因此积分 $= 2\pi i \cdot 0 = 0$。
:::

* * *

## 五、 总结与注意事项

### 5.1 核心公式速查

| 概念  | 公式 / 定义 | 说明  |
| --- | --- | --- |
| 洛朗级数 | $\displaystyle f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n$ | 在圆环域内成立 |
| 洛朗系数 | $\displaystyle c_n = \frac{1}{2\pi i}\oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}}\,d\zeta$ | 积分路径在圆环域内 |
| 留数定义 | $\operatorname{Res}[f, z_0] = c_{-1}$ | 洛朗级数中 $(z-z_0)^{-1}$ 的系数 |
| 留数定理 | $\displaystyle\oint_C f(z)\,dz = 2\pi i\sum_{k=1}^{n}\operatorname{Res}[f, z_k]$ | 核心积分公式 |
| 可去奇点 | 无负幂项，$\lim f(z)$ 有限 | $\operatorname{Res} = 0$ |
| $m$ 级极点 | 最高负幂次 $-m$，$\lim f(z) = \infty$ | $\displaystyle \operatorname{Res} = \frac{1}{(m-1)!}\lim\frac{d^{\,m-1}}{dz^{\,m-1}}[(z-z_0)^m f(z)]$ |
| 本性奇点 | 无穷多负幂项，极限不存在 | 展开求 $c_{-1}$ |

### 5.2 易错点提醒

1. **孤立奇点 vs 非孤立奇点**：离散奇点未必是孤立的，但绝大部分是孤立的。例如 $\dfrac{1}{\sin(1/z)}$ 在 $z=0$ 处为非孤立奇点。
2. **洛朗级数与泰勒级数的区别**：泰勒级数只有正幂项，在圆域内成立；洛朗级数含有负幂项，在环域内成立。
3. **留数计算时极点阶数的判断**：不要盲目用规则 III 的公式，对一级极点优先使用极限法 $\lim_{z \to z_0} (z - z_0)f(z)$。
4. **零点阶数与极点阶数的关系**：$f(z)$ 的 $m$ 级零点 $\iff$ $\dfrac{1}{f(z)}$ 的 $m$ 级极点，这一关系可简化极点阶数的判断。
5. **洛朗展开的唯一性**：不论用什么方法展开，得到的洛朗级数是唯一的，因此可用间接法（几何级数、代数运算）求展开式和留数。

### 5.3 解题要点

* **求洛朗展开**：① 确定圆环域（以各奇点为分界）；② 在指定圆环域内，利用已知展开式（几何级数、$e^z$ 等）进行代换和运算。
* **判断奇点类型**：优先使用极限法（有限 / 无穷 / 不存在），必要时展开洛朗级数观察负幂项。
* **求留数**：先判断奇点类型，再选择适当的规则。一级极点用极限法，高阶极点用公式法，本质奇点展开求系数。
* **计算闭路积分**：① 找出被积函数在积分路径内的所有孤立奇点；② 计算各奇点的留数；③ 应用留数定理求和乘以 $2\pi i$。
