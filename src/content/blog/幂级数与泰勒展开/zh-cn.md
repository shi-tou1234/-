---
title: 幂级数与泰勒展开
pubDate: 2026-06-11T08:39:00.000Z
updatedDate: 2026-06-11T08:54:19.141Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 复变函数
slugId: 幂级数与泰勒展开
---

# 复变函数：幂级数与泰勒展开

> **导语**：本文整理了复变函数中级数部分的核心内容，包括复数列的极限、复数项级数的收敛性、幂级数的 Abel 定理、收敛圆与收敛半径的求法，以及泰勒展开定理和常见初等函数的展开式。适合作为期末复习或考研参考。

* * *

## 一、 复数列与复数项级数

### 1.1 复数列的极限

**1. 复数列的定义**

设 $\{a_n\}_{n=1}^{\infty}$ 为一复数列，其中 $a_n = a_n + ib_n$（$a_n, b_n$ 为实数）。若存在复常数 $a = a + ib$，使得 $\forall \varepsilon > 0$，$\exists N \in \mathbb{N}$，当 $n > N$ 时恒有：

$$ |a_n - a| < \varepsilon $$

则称 $a$ 为复数列 $\{a_n\}$ 的极限，记作 $\displaystyle\lim_{n \to \infty} a_n = a$。

**2. 复数列收敛的充要条件**

> **定理**$\displaystyle\lim_{n \to \infty} a_n = a$ 的充要条件是：$$ \lim_{n \to \infty} a_n = a, \quad \lim_{n \to \infty} b_n = b $$即复数列的收敛等价于其实部和虚部两个实数列同时收敛。

:::derivation
**推导过程：**

设 $a_n = a_n + i b_n$，$a = a + ib$。

**必要性**（$\Rightarrow$）：若 $\lim\limits_{n\to\infty} \alpha_n = \alpha$，即 $\forall \varepsilon > 0$，$\exists N$，当 $n > N$ 时 $|\alpha_n - \alpha| < \varepsilon$。

由不等式 $|a_n - a| \le |\alpha_n - \alpha|$ 和 $|b_n - b| \le |\alpha_n - \alpha|$，得 $|a_n - a| < \varepsilon$ 和 $|b_n - b| < \varepsilon$，故 $\lim a_n = a$，$\lim b_n = b$。

**充分性**（$\Leftarrow$）：若 $\lim a_n = a$ 且 $\lim b_n = b$，则 $\forall \varepsilon > 0$，$\exists N$，当 $n > N$ 时 $|a_n - a| < \dfrac{\varepsilon}{2}$ 且 $|b_n - b| < \dfrac{\varepsilon}{2}$。

由 $|\alpha_n - \alpha| = \sqrt{(a_n-a)^2 + (b_n-b)^2} \le |a_n-a| + |b_n-b| < \varepsilon$，故 $\lim \alpha_n = \alpha$。

因此复数列收敛 $\Leftrightarrow$ 实部和虚部同时收敛。
:::

### 1.2 复数项级数的概念

**1. 级数的定义**

设 $\{a_n\}$ 为一复数列，称表达式

$$ \sum_{n=1}^{\infty} a_n = a_1 + a_2 + \cdots + a_n + \cdots $$

为**复数项无穷级数**。其**部分和**定义为：

$$ S_n = \sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n $$

**2. 级数收敛的定义**

若部分和数列 $\{S_n\}$ 收敛于有限值 $S$，即 $\displaystyle\lim_{n \to \infty} S_n = S$，则称级数 $\sum a_n$ **收敛**，$S$ 为其和；否则称级数**发散**。

**3. 级数收敛的充要条件**

> **定理**级数 $\sum_{n=1}^{\infty} a_n$（$a_n = a_n + ib_n$）收敛的充要条件是：实部级数 $\sum_{n=1}^{\infty} a_n$ 和虚部级数 $\sum_{n=1}^{\infty} b_n$ 都收敛。

因此，**复数项级数的收敛问题可归为两个实数项级数的收敛问题**。

**4. 级数收敛的必要条件**

若级数 $\sum a_n$ 收敛，则 $\displaystyle\lim_{n \to \infty} a_n = 0$。

> **注意**：$a_n \to 0$ 是级数收敛的必要条件而非充分条件。即通项趋于零并不能保证级数收敛。

* * *

## 二、 幂级数的概念

### 2.1 幂级数的定义

形如

$$ \sum_{n=0}^{\infty} c_n (z - z_0)^n = c_0 + c_1(z - z_0) + c_2(z - z_0)^2 + \cdots $$

的级数称为**幂级数**，其中 $c_n$ 为复常数，$z_0$ 为展开中心。特别地，当 $z_0 = 0$ 时，有

$$ \sum_{n=0}^{\infty} c_n z^n = c_0 + c_1z + c_2z^2 + \cdots $$

### 2.2 幂级数的收敛域

若级数 $\sum c_n z^n$ 在 $D$ 内处处收敛，其和为 $z$ 的函数 $S(z)$。同实变函数一样，复变幂级数也有所谓的收敛定理：

> **定理 1（阿贝尔（Abel）定理）**如果级数 $\sum_{n=0}^{\infty} c_n z^n$ 在某点 $z_0 \neq 0$ 收敛，则它在 $|z| < |z_0|$ 内绝对收敛；如果在 $z_0$ 发散，则它在 $|z| > |z_0|$ 内发散。

由 Abel 定理，幂级数的收敛范围不外乎下述三种情况：

1. **全平面收敛**：若对所有正实数都收敛，则级数在复平面上处处收敛。
2. **仅在 $z = 0$ 收敛**：若对所有非零正实数都发散，则级数在复平面上除 $z = 0$ 外处处发散。
3. **存在收敛圆**：存在一个正实数 $R$，使得级数在 $|z| < R$ 内收敛，在 $|z| > R$ 内发散，在 $|z| = R$ 上可能收敛也可能发散，需具体分析。

> **几何解释**：将收敛部分染成红色，发散部分染成蓝色。随着 $|z|$ 逐渐变大，在$|z| < R$ 内都是红色，外部都是蓝色，红、蓝色不会交错。

### 2.3 收敛圆与收敛半径

称上述红蓝两色的分界圆周 $C_R : |z| = R$ 为幂级数的**收敛圆**，圆的半径 $R$ 称为幂级数的**收敛半径**。

* 幂级数 $\sum c_n z^n$ 的收敛范围是以 $0$ 为中心、半径为 $R$ 的圆域。
* 幂级数 $\sum c_n (z - z_0)^n$ 的收敛范围是以 $z_0$ 为中心、半径为 $R$ 的圆域。

> **注意**：幂级数在收敛圆内部绝对收敛，在收敛圆外部发散，在圆周上可能收敛也可能发散，具体问题要具体分析。

* * *

## 三、 收敛半径的求法

### 3.1 比值法（达朗贝尔公式）

若 $\displaystyle\lim_{n \to \infty} \left|\frac{c_{n+1}}{c_n}\right| = \lambda$（$\lambda$ 可为 $0$ 或 $+\infty$），则收敛半径为：

$$ R = \begin{cases} \dfrac{1}{\lambda}, & 0 < \lambda < +\infty \\ +\infty, & \lambda = 0 \\ 0, & \lambda = +\infty \end{cases} $$

:::derivation
**推导过程：**

考虑幂级数 $\sum\limits_{n=0}^{\infty} c_n z^n$，用比值判别法判断其绝对收敛性。

对通项 $|c_n z^n|$，取相邻项之比：

$$
\lim_{n\to\infty} \left|\frac{c_{n+1} z^{n+1}}{c_n z^n}\right| = \lim_{n\to\infty} \left|\frac{c_{n+1}}{c_n}\right| \cdot |z| = \lambda |z|
$$

由比值判别法（达朗贝尔判别法），级数收敛当且仅当 $\lambda |z| < 1$，即 $|z| < \dfrac{1}{\lambda}$。

- 当 $0 < \lambda < +\infty$ 时，$R = \dfrac{1}{\lambda}$。
- 当 $\lambda = 0$ 时，$\lambda|z| = 0 < 1$ 对所有 $z$ 成立，$R = +\infty$（全平面收敛）。
- 当 $\lambda = +\infty$ 时，$\lambda|z| = +\infty > 1$（$z \neq 0$），仅 $z = 0$ 收敛，$R = 0$。
:::

### 3.2 根值法（柯西公式）

若 $\displaystyle\lim_{n \to \infty} \sqrt[n]{\lvert c_n \rvert} = \mu$（$\mu$ 可为 $0$ 或 $+\infty$），则收敛半径为：

$$ R = \begin{cases} \dfrac{1}{\mu}, & 0 < \mu < +\infty \\ +\infty, & \mu = 0 \\ 0, & \mu = +\infty \end{cases} $$

:::derivation
**推导过程：**

考虑幂级数 $\sum\limits_{n=0}^{\infty} c_n z^n$，用根值判别法判断其绝对收敛性。

对通项 $|c_n z^n|$ 取 $n$ 次方根：

$$
\lim_{n\to\infty} \sqrt[n]{|c_n z^n|} = \lim_{n\to\infty} \sqrt[n]{|c_n|} \cdot |z| = \mu |z|
$$

由根值判别法（柯西判别法），级数收敛当且仅当 $\mu |z| < 1$，即 $|z| < \dfrac{1}{\mu}$。

- 当 $0 < \mu < +\infty$ 时，$R = \dfrac{1}{\mu}$。
- 当 $\mu = 0$ 时，$\mu|z| = 0 < 1$ 对所有 $z$ 成立，$R = +\infty$。
- 当 $\mu = +\infty$ 时，仅 $z = 0$ 收敛，$R = 0$。

**与比值法的关系**：当 $\lim\limits_{n\to\infty} \left|\dfrac{c_{n+1}}{c_n}\right|$ 存在时，根值极限也存在且相等，两种方法给出相同的收敛半径。
:::

> **注意**：收敛半径 $R$ 是正实数。幂级数在收敛圆内部绝对收敛，在圆周上敛散性不定，必须单独讨论。

* * *

## 四、 幂级数的运算和性质

### 4.1 代数运算

设 $f(z) = \sum_{n=0}^{\infty} a_n z^n$，$g(z) = \sum_{n=0}^{\infty} b_n z^n$，收敛半径分别为 $R_1, R_2$，则：

* **加减法**：$f(z) \pm g(z) = \sum_{n=0}^{\infty} (a_n \pm b_n) z^n$，收敛半径 $R \geq \min(R_1, R_2)$。
* **乘法**：$f(z) \cdot g(z) = \sum_{n=0}^{\infty} \left(\sum_{k=0}^{n} a_k b_{n-k}\right) z^n$，收敛半径 $R \geq \min(R_1, R_2)$。
* **除法**：按长除法进行，收敛半径可能小于 $\min(R_1, R_2)$。

### 4.2 分析性质

幂级数在其收敛圆内具有以下重要性质：

1. **和函数解析性**：幂级数的和函数 $S(z)$ 在其收敛圆内是解析函数。
2. **逐项求导**：在收敛圆内可逐项求导任意次：$$ S'(z) = \sum_{n=1}^{\infty} n c_n (z - z_0)^{n-1} $$

:::derivation
**推导过程：**

设 $S(z) = \sum\limits_{n=0}^{\infty} c_n (z-z_0)^n$，收敛半径为 $R$。

由泰勒展开定理，$S(z)$ 在 $|z - z_0| < R$ 内解析，因此可求导。

对 $S(z)$ 逐项求导：

$$
S'(z) = \sum_{n=0}^{\infty} c_n \frac{d}{dz}(z-z_0)^n = \sum_{n=1}^{\infty} n c_n (z-z_0)^{n-1}
$$

（$n=0$ 项为常数 $c_0$，导数为 0。）

**收敛半径不变**：新级数系数为 $c_n' = (n+1)c_{n+1}$，用比值法：

$$
\lambda' = \lim_{n\to\infty} \left|\frac{(n+2)c_{n+2}}{(n+1)c_{n+1}}\right| = \lim_{n\to\infty} \frac{n+2}{n+1} \cdot \left|\frac{c_{n+2}}{c_{n+1}}\right| = 1 \cdot \lambda = \lambda
$$

故求导后收敛半径仍为 $R$。可反复求导任意次。
:::
3. **逐项积分**：在收敛圆内可逐项积分：$$ \int_C S(z)\,dz = \sum_{n=0}^{\infty} c_n \int_C (z - z_0)^n\,dz $$

:::derivation
**推导过程：**

设 $S(z) = \sum\limits_{n=0}^{\infty} c_n (z-z_0)^n$，收敛半径为 $R$。

在收敛圆内任取一条简单曲线 $C$（从 $z_0$ 到 $z$），由于幂级数在收敛圆内一致收敛（内闭一致收敛），可以交换求和与积分的顺序：

$$
\int_C S(z)\,dz = \int_C \sum_{n=0}^{\infty} c_n (z-z_0)^n\,dz = \sum_{n=0}^{\infty} c_n \int_C (z-z_0)^n\,dz
$$

逐项积分后得到的新级数仍为幂级数形式。特别地，取 $C$ 为从 $z_0$ 到 $z$ 的直线段：

$$
\int_{z_0}^{z} S(\zeta)\,d\zeta = \sum_{n=0}^{\infty} \frac{c_n}{n+1} (z-z_0)^{n+1}
$$

**收敛半径不变**：新级数系数为 $c_n' = \dfrac{c_{n-1}}{n}$（$n \ge 1$），用比值法可证收敛半径仍为 $R$。
:::

> **注意**：幂级数的代换运算在函数展开成幂级数中很有用。

* * *

## 五、 泰勒展开定理

### 5.1 基本问题

前面研究了幂级数的和函数在收敛圆内是解析函数。现在研究相反的问题：给定一个解析函数，能否用幂级数表达？或者说，一个解析函数能否展开成幂级数？

以下定理给出了肯定的回答：

> **定理 2（泰勒（Taylor）展开定理）**任何在区域 $D$ 内解析的函数 $f(z)$ 都一定能用幂级数表示。设在 $|z - z_0| < R$ 内 $f(z)$ 解析，则$$ f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!} (z - z_0)^n $$ 其中 $R$ 为 $f(z)$ 在 $z_0$ 处的泰勒展开式的收敛半径，等于从 $z_0$ 到 $f(z)$ 最近奇点的距离。

:::derivation
**推导过程：**

设 $f(z)$ 在 $|z - z_0| < R$ 内解析。由柯西积分公式：

$$
f(z) = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{\zeta - z}\,d\zeta
$$

其中 $C$ 为含于解析区域内的简单闭曲线，$z$ 在 $C$ 内部。

将 $\dfrac{1}{\zeta - z}$ 改写为：

$$
\frac{1}{\zeta - z} = \frac{1}{(\zeta - z_0) - (z - z_0)} = \frac{1}{\zeta - z_0} \cdot \frac{1}{1 - \frac{z - z_0}{\zeta - z_0}}
$$

当 $|z - z_0| < |\zeta - z_0|$ 时，利用几何级数 $\dfrac{1}{1-u} = \sum\limits_{n=0}^{\infty} u^n$（$|u|<1$）展开：

$$
\frac{1}{\zeta - z} = \sum_{n=0}^{\infty} \frac{(z - z_0)^n}{(\zeta - z_0)^{n+1}}
$$

代入柯西积分公式并逐项积分：

$$
f(z) = \sum_{n=0}^{\infty} \left[\frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}}\,d\zeta\right] (z - z_0)^n
$$

由高阶导数公式，方括号内为 $\dfrac{f^{(n)}(z_0)}{n!}$，故：

$$
f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!} (z - z_0)^n
$$
:::

### 5.2 展开式的唯一性

> **结论**解析函数展开成幂级数是唯一的，就是它的 Taylor 级数。

**证明思路**：设 $f(z)$ 用另外一种方法展开为幂级数 $\sum a_n (z - z_0)^n$，则通过求导代入 $z_0$ 可得 $a_n = f^{(n)}(z_0)/n!$，与 Taylor 系数相同。

由展开式的唯一性，可以运用级数的代数运算、分析运算和已知函数的展开式来展开函数，这就是**间接法**。

### 5.3 函数展开成 Taylor 级数的方法

* **直接法**：直接计算 $f^{(n)}(z_0)$ 代入 Taylor 公式。
* **间接法**：利用已知展开式，通过代数运算、代换、逐项求导、逐项积分等方法得到展开式。这是最常用的方法。

* * *

## 六、 初等函数的泰勒展开式

### 6.1 基本初等函数的展开

**1. 指数函数**

$$ e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \cdots, \quad R = +\infty $$

:::derivation
**推导过程：**

对 $f(z) = e^z$ 在 $z_0 = 0$ 处进行泰勒（麦克劳林）展开。

计算各阶导数：$f^{(n)}(z) = e^z$，故 $f^{(n)}(0) = e^0 = 1$（$n = 0,1,2,\ldots$）。

代入泰勒公式：

$$
e^z = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} z^n = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \cdots
$$

**收敛半径**：用比值法，

$$
\lambda = \lim_{n\to\infty} \left|\frac{c_{n+1}}{c_n}\right| = \lim_{n\to\infty} \frac{n!}{(n+1)!} = \lim_{n\to\infty} \frac{1}{n+1} = 0
$$

故 $R = +\infty$，即 $e^z$ 的泰勒级数在全平面收敛。

$e^z$ 在整个复平面解析（无奇点），因此收敛半径为 $+\infty$。
:::

**2. 三角函数**

$$ \sin z = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} z^{2n+1} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \cdots, \quad R = +\infty $$

:::derivation
**推导过程：**

**方法一（直接法）**：对 $f(z) = \sin z$ 在 $z_0 = 0$ 处展开。

计算各阶导数并代入 $z=0$：$f(0)=0$，$f'(0)=1$，$f''(0)=0$，$f'''(0)=-1$，$f^{(4)}(0)=0$，$\ldots$

一般地：$\sin^{(n)}(0) = \begin{cases} 0, & n=2k \\ (-1)^k, & n=2k+1 \end{cases}$

代入泰勒公式，只有奇数项非零：

$$
\sin z = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)!} z^{2k+1}
$$

**方法二（间接法）**：由欧拉公式 $e^{iz}=\cos z+i\sin z$ 和 $e^{-iz}=\cos z-i\sin z$ 得 $\sin z = \dfrac{e^{iz}-e^{-iz}}{2i}$，代入 $e^z$ 展开式同样可得。

**收敛半径**：$\sin z$ 在全平面解析，$R=+\infty$。
:::

$$ \cos z = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} z^{2n} = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \cdots, \quad R = +\infty $$

:::derivation
**推导过程：**

**方法一（直接法）**：对 $f(z) = \cos z$ 在 $z_0 = 0$ 处展开。

计算各阶导数并代入 $z=0$：$f(0)=1$，$f'(0)=0$，$f''(0)=-1$，$f'''(0)=0$，$f^{(4)}(0)=1$，$\ldots$

一般地：$\cos^{(n)}(0) = \begin{cases} 0, & n=2k+1 \\ (-1)^k, & n=2k \end{cases}$

代入泰勒公式，只有偶数项非零：

$$
\cos z = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k)!} z^{2k}
$$

**方法二（间接法）**：由 $\cos z = \dfrac{e^{iz}+e^{-iz}}{2}$，代入 $e^z$ 展开式。分析 $(iz)^n + (-iz)^n$：奇数项相消为 0，偶数项（$n=2k$）为 $2(-1)^k$，同样得到上述结果。

**方法三（求导法）**：对 $\sin z$ 的展开式逐项求导：$(\sin z)' = \cos z$，故 $\cos z = \sum\limits_{k=0}^{\infty} \dfrac{(-1)^k}{(2k)!} z^{2k}$。

**收敛半径**：$\cos z$ 在全平面解析，$R=+\infty$。
:::

**3. 几何级数**

$$ \frac{1}{1-z} = \sum_{n=0}^{\infty} z^n = 1 + z + z^2 + z^3 + \cdots, \quad |z| < 1 $$

:::derivation
**推导过程：**

设部分和 $S_n = 1 + z + z^2 + \cdots + z^n = \sum\limits_{k=0}^{n} z^k$。

当 $z \neq 1$ 时，利用等比数列求和公式：

$$
S_n = \frac{1 - z^{n+1}}{1 - z}
$$

- 当 $|z| < 1$ 时，$z^{n+1} \to 0$（$n\to\infty$），故 $\lim\limits_{n\to\infty} S_n = \dfrac{1}{1-z}$，级数收敛。
- 当 $|z| \ge 1$ 时，通项 $z^n \not\to 0$，级数发散。

因此 $\dfrac{1}{1-z} = \sum\limits_{n=0}^{\infty} z^n$，收敛半径 $R = 1$。

**复变视角**：$f(z) = \dfrac{1}{1-z}$ 在 $z = 1$ 处有奇点，这是离展开中心 $z_0 = 0$ 最近的奇点，故 $R = 1$。
:::

$$ \frac{1}{1+z} = \sum_{n=0}^{\infty} (-1)^n z^n = 1 - z + z^2 - z^3 + \cdots, \quad |z| < 1 $$

:::derivation
**推导过程：**

已知 $\dfrac{1}{1-u} = \sum\limits_{n=0}^{\infty} u^n$（$|u|<1$）。

令 $u = -z$（要求 $|-z| < 1$ 即 $|z| < 1$），代入得：

$$
\frac{1}{1-(-z)} = \sum_{n=0}^{\infty} (-z)^n = \sum_{n=0}^{\infty} (-1)^n z^n
$$

即 $\dfrac{1}{1+z} = 1 - z + z^2 - z^3 + \cdots$。

**收敛半径**：$f(z) = \dfrac{1}{1+z}$ 在 $z = -1$ 处有奇点，离 $z_0 = 0$ 的距离为 1，故 $R = 1$。
:::

**4. 对数函数**

$$ \ln(1+z) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n} z^n = z - \frac{z^2}{2} + \frac{z^3}{3} - \frac{z^4}{4} + \cdots, \quad |z| < 1 $$

:::derivation
**推导过程：**

已知 $\dfrac{1}{1+z} = \sum\limits_{n=0}^{\infty} (-1)^n z^n$（$|z|<1$）。

注意到 $\dfrac{d}{dz}\ln(1+z) = \dfrac{1}{1+z}$，对两边在 $[0, z]$ 上逐项积分：

$$
\int_0^z \frac{d\zeta}{1+\zeta} = \sum_{n=0}^{\infty} (-1)^n \int_0^z \zeta^n\,d\zeta
$$

左边：$\int_0^z \dfrac{d\zeta}{1+\zeta} = \ln(1+\zeta)\Big|_0^z = \ln(1+z)$。

右边：$\sum\limits_{n=0}^{\infty} (-1)^n \dfrac{z^{n+1}}{n+1} = \sum\limits_{n=1}^{\infty} \dfrac{(-1)^{n-1}}{n} z^n$。

因此：

$$
\ln(1+z) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n} z^n, \quad |z|<1.
$$

**收敛半径**：$\ln(1+z)$ 的最近奇点为 $z = -1$（支点），离 $z_0 = 0$ 距离为 1，故 $R = 1$。
:::

> **注意**：$\ln(1+z)$ 在从 $z = -1$ 向左沿负实轴剪开的平面内解析，$\ln(1+z)$ 离原点最近的一个奇点是 $z = -1$，所以收敛半径为 $R = 1$。

**5. 幂函数**

$$ (1+z)^\alpha = 1 + \alpha z + \frac{\alpha(\alpha-1)}{2!}z^2 + \cdots, \quad |z| < 1 $$

:::derivation
**推导过程：**

对 $f(z) = (1+z)^\alpha$ 在 $z_0 = 0$ 处进行泰勒展开。

计算各阶导数：

$$
f'(z) = \alpha(1+z)^{\alpha-1}, \quad f''(z) = \alpha(\alpha-1)(1+z)^{\alpha-2}
$$

一般地：

$$
f^{(n)}(z) = \alpha(\alpha-1)\cdots(\alpha-n+1)(1+z)^{\alpha-n}
$$

代入 $z = 0$：

$$
f^{(n)}(0) = \alpha(\alpha-1)(\alpha-2)\cdots(\alpha-n+1)
$$

代入泰勒公式：

$$
(1+z)^\alpha = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} z^n = \sum_{n=0}^{\infty} \binom{\alpha}{n} z^n
$$

其中广义二项式系数 $\binom{\alpha}{n} = \dfrac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}$。

**收敛半径**：$(1+z)^\alpha$ 的奇点（支点）在 $z = -1$，离 $z_0 = 0$ 距离为 1，故 $R = 1$。
:::

### 6.2 例题

#### 例题 1：将函数 $f(z) = \dfrac{e^z}{1-z}$ 展开成 $z$ 的幂级数

**解：**由 $e^z$ 和 $\frac{1}{1-z}$ 的展开式：

$$ e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!}, \quad \frac{1}{1-z} = \sum_{n=0}^{\infty} z^n, \quad |z| < 1 $$

作 Cauchy 乘积：

$$ \frac{e^z}{1-z} = \left(\sum_{n=0}^{\infty} z^n\right)\left(\sum_{n=0}^{\infty} \frac{z^n}{n!}\right) = \sum_{n=0}^{\infty} \left(\sum_{k=0}^{n} \frac{1}{k!}\right) z^n, \quad |z| < 1 $$

:::derivation
**推导过程：**

利用**柯西乘积**（Cauchy 乘积）将两个幂级数相乘。

设 $A(z) = \sum\limits_{n=0}^{\infty} a_n z^n = \sum\limits_{n=0}^{\infty} z^n$（即 $a_n = 1$），$B(z) = \sum\limits_{n=0}^{\infty} b_n z^n = \sum\limits_{n=0}^{\infty} \dfrac{z^n}{n!}$（即 $b_n = \dfrac{1}{n!}$）。

两个幂级数的乘积为：

$$
A(z) \cdot B(z) = \sum_{n=0}^{\infty} c_n z^n, \quad \text{其中 } c_n = \sum_{k=0}^{n} a_k b_{n-k}
$$

计算 $c_n$：

$$
c_n = \sum_{k=0}^{n} a_k \cdot b_{n-k} = \sum_{k=0}^{n} 1 \cdot \frac{1}{(n-k)!} = \sum_{k=0}^{n} \frac{1}{(n-k)!}
$$

令 $j = n - k$，则 $c_n = \sum\limits_{j=0}^{n} \dfrac{1}{j!} = \sum\limits_{k=0}^{n} \dfrac{1}{k!}$。

因此：

$$
\frac{e^z}{1-z} = \sum_{n=0}^{\infty} \left(\sum_{k=0}^{n} \frac{1}{k!}\right) z^n
$$

**收敛半径**：取 $\min(R_1, R_2) = \min(1, +\infty) = 1$，故 $|z| < 1$。
:::

#### 例题 2：求 $\sin z$ 的 Taylor 展开式

**解：**方法一（直接法）：计算 $\sin z$ 的各阶导数：

$$ \sin^{(n)}(0) = \begin{cases} 0, & n = 2k \\ (-1)^k, & n = 2k+1 \end{cases} $$

代入 Taylor 公式即得展开式。

方法二（间接法）：由 $e^{iz} = \cos z + i\sin z$ 和 $e^{-iz} = \cos z - i\sin z$，可得

$$ \sin z = \frac{e^{iz} - e^{-iz}}{2i} $$

代入 $e^z$ 的展开式：

$$ \sin z = \frac{1}{2i}\sum_{n=0}^{\infty} \frac{(iz)^n - (-iz)^n}{n!} = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} z^{2n+1} $$

:::derivation
**推导过程：**

由欧拉公式 $e^{iz} = \cos z + i\sin z$ 和 $e^{-iz} = \cos z - i\sin z$，两式相减：

$$
e^{iz} - e^{-iz} = 2i\sin z \implies \sin z = \frac{e^{iz} - e^{-iz}}{2i}
$$

代入 $e^z = \sum\limits_{n=0}^{\infty} \dfrac{z^n}{n!}$：

$$
\sin z = \frac{1}{2i}\sum_{n=0}^{\infty} \frac{(iz)^n - (-iz)^n}{n!}
$$

分析 $(iz)^n - (-iz)^n$：
- 当 $n = 2k$（偶数）时：$(iz)^{2k} - (-iz)^{2k} = i^{2k}z^{2k} - (-i)^{2k}z^{2k} = (-1)^k z^{2k} - (-1)^k z^{2k} = 0$
- 当 $n = 2k+1$（奇数）时：$(iz)^{2k+1} - (-iz)^{2k+1} = i^{2k+1}z^{2k+1} - (-i)^{2k+1}z^{2k+1} = 2i(-1)^k z^{2k+1}$

故偶数项全为零，只保留奇数项：

$$
\sin z = \frac{1}{2i}\sum_{k=0}^{\infty} \frac{2i(-1)^k}{(2k+1)!} z^{2k+1} = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} z^{2n+1}
$$
:::

上述求 $\sin z, \cos z$ 展开式的方法即为**间接法**。

* * *

## 七、 总结与注意事项

### 7.1 核心公式速查

| 概念  | 公式  | 说明  |
| --- | --- | --- |
| 几何级数 | $\dfrac{1}{1-z} = \sum\limits_{n=0}^{\infty} z^n$ | 收敛域 $\lvert z \rvert < 1$ |
| 指数函数 | $e^z = \sum\limits_{n=0}^{\infty} \dfrac{z^n}{n!}$ | 全平面收敛 |
| 正弦函数 | $\sin z = \sum\limits_{n=0}^{\infty} \dfrac{(-1)^n}{(2n+1)!} z^{2n+1}$ | 全平面收敛 |
| 余弦函数 | $\cos z = \sum\limits_{n=0}^{\infty} \dfrac{(-1)^n}{(2n)!} z^{2n}$ | 全平面收敛 |
| 对数函数 | $\ln(1+z) = \sum\limits_{n=1}^{\infty} \dfrac{(-1)^{n-1}}{n} z^n$ | 收敛域 $\lvert z \rvert < 1$ |
| 收敛半径（比值） | $R = \lim\limits_{n\to\infty} \bigl\lvert \dfrac{c_n}{c_{n+1}} \bigr\rvert$ | 若极限存在 |

### 7.2 易错点提醒

1. **收敛半径与收敛圆**：收敛半径 $R$ 是正实数。幂级数在收敛圆内部绝对收敛，在圆周上可能收敛也可能发散，必须具体问题具体分析，不能默认圆周上一定发散。
2. **Taylor 展开的唯一性**：不论用什么方法展开，得到的幂级数就是 Taylor 级数。因此可使用间接法（代数运算、代换、求导积分等）简化展开过程。
3. **收敛半径由最近奇点决定**：解析函数 Taylor 展开的收敛半径等于从展开中心到最近奇点的距离。例如 $\ln(1+z)$ 在 $z = 0$ 处展开时，最近奇点为 $z = -1$，故 $R = 1$。
4. **幂级数在收敛圆内的分析性质**：在收敛圆内可以逐项求导和逐项积分，且收敛半径不变。

### 7.3 解题要点

* **求收敛半径**：使用比值法或根值法，注意 $R$ 可能为 $0$ 或 $+\infty$。
* **函数展开**：优先使用间接法——记住基本展开式，通过代换、逐项求导/积分得到目标函数的展开式。
* **判断收敛域**：先求收敛半径 $R$，再单独讨论圆周 $|z| = R$ 上的敛散性。
