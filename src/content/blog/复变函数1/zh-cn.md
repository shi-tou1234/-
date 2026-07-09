---
title: 复变函数1
pubDate: 2026-05-19T14:13:00.000Z
updatedDate: 2026-05-19T14:14:11.681Z
draft: false
description: 
category: 复变函数
slugId: 复变函数1
---

### 第一章 复数及其运算

#### 1.1 复数的概念

**定义**：对任意两个实数 $x$、$y$，称
$$z = x + iy \quad \text{或} \quad z = x + yi$$
为复数。其中 $i^2 = -1$，$i$ 称为虚单位。

**实部和虚部**：
$$\operatorname{Re}(z) = x, \qquad \operatorname{Im}(z) = y$$

**注意**：任意两个复数不能比较大小。复数之间只定义了相等关系。

**模的定义**：
$$|z| = \sqrt{x^2 + y^2} \geq 0$$

**复数相等的判据**：
$$z_1 = z_2 \iff \operatorname{Re}(z_1) = \operatorname{Re}(z_2) \;\text{且}\; \operatorname{Im}(z_1) = \operatorname{Im}(z_2)$$

#### 1.2 代数运算

设 $z_1 = x_1 + iy_1$，$z_2 = x_2 + iy_2$，则：

**加减法**：
$$z_1 \pm z_2 = (x_1 \pm x_2) + i(y_1 \pm y_2)$$

**乘法**：
$$z_1 \cdot z_2 = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + x_2 y_1)$$

:::derivation
**复数乘法公式推导**：

设 $z_1 = x_1 + iy_1$，$z_2 = x_2 + iy_2$，利用分配律展开并注意 $i^2 = -1$：

$$z_1 \cdot z_2 = (x_1 + iy_1)(x_2 + iy_2)$$

$$= x_1 x_2 + x_1 \cdot iy_2 + iy_1 \cdot x_2 + iy_1 \cdot iy_2$$

$$= x_1 x_2 + i x_1 y_2 + i x_2 y_1 + i^2 y_1 y_2$$

由于 $i^2 = -1$：

$$= (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + x_2 y_1)$$

**几何验证**：用指数形式 $z_1 = r_1 e^{i\theta_1}$，$z_2 = r_2 e^{i\theta_2}$，则 $z_1 z_2 = r_1 r_2 e^{i(\theta_1+\theta_2)}$，模相乘、辐角相加，与代数展开一致。
:::

**除法**（$z_2 \neq 0$）：
$$\frac{z_1}{z_2} = \frac{x_1 x_2 + y_1 y_2}{x_2^2 + y_2^2} + i\frac{x_2 y_1 - x_1 y_2}{x_2^2 + y_2^2}$$

:::derivation
**复数除法公式推导**：

设 $z_1 = x_1 + iy_1$，$z_2 = x_2 + iy_2 \neq 0$，求 $\dfrac{z_1}{z_2}$。

**核心技巧**：分子分母同乘分母的共轭复数 $\bar{z}_2 = x_2 - iy_2$，使分母实数化：

$$\frac{z_1}{z_2} = \frac{z_1 \cdot \bar{z}_2}{z_2 \cdot \bar{z}_2}$$

**分母**：$z_2 \cdot \bar{z}_2 = (x_2 + iy_2)(x_2 - iy_2) = x_2^2 + y_2^2$（利用 $(a+b)(a-b)=a^2-b^2$ 且 $i^2y_2^2=-y_2^2$）。

**分子**：

$$z_1 \cdot \bar{z}_2 = (x_1 + iy_1)(x_2 - iy_2)$$

$$= x_1 x_2 - ix_1 y_2 + ix_2 y_1 - i^2 y_1 y_2$$

$$= (x_1 x_2 + y_1 y_2) + i(x_2 y_1 - x_1 y_2)$$

故：

$$\frac{z_1}{z_2} = \frac{x_1 x_2 + y_1 y_2}{x_2^2 + y_2^2} + i\frac{x_2 y_1 - x_1 y_2}{x_2^2 + y_2^2}$$

**关键思想**：共轭复数是复数除法的"实数化工具"，$z\bar{z}=|z|^2$ 将复分母变为实数。
:::

**运算规律**：

| 运算律 | 加法 | 乘法 |
|--------|------|------|
| 交换律 | $z_1 + z_2 = z_2 + z_1$ | $z_1 \cdot z_2 = z_2 \cdot z_1$ |
| 结合律 | $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$ | $(z_1 z_2) z_3 = z_1(z_2 z_3)$ |
| 分配律 | $z_1(z_2 + z_3) = z_1 z_2 + z_1 z_3$ | — |

#### 1.3 共轭复数

**定义**：若 $z = x + iy$，则称
$$\bar{z} = x - iy$$
为 $z$ 的共轭复数。

**重要性质**：

1. $\overline{z_1 \pm z_2} = \bar{z}_1 \pm \bar{z}_2$
2. $\overline{z_1 \cdot z_2} = \bar{z}_1 \cdot \bar{z}_2$
3. $z \cdot \bar{z} = x^2 + y^2 = |z|^2$
4. $\operatorname{Re}(z) = \dfrac{z + \bar{z}}{2}, \qquad \operatorname{Im}(z) = \dfrac{z - \bar{z}}{2i}$

### 第二章 复数的表示方法

#### 2.1 直角坐标表示

$$z = x + iy \longleftrightarrow P(x, y)$$

#### 2.2 极坐标表示

**模**：
$$|z| = r = \sqrt{x^2 + y^2}$$

**辐角**：
$$\theta = \operatorname{Arg} z = \theta_0 + 2k\pi, \quad k \in \mathbb{Z}$$

**辐角主值**：
$$\arg z \in (-\pi, \pi]$$

#### 2.3 三角表示法

$$z = r(\cos\theta + i\sin\theta)$$

#### 2.4 指数表示法

由 Euler 公式：
$$e^{i\theta} = \cos\theta + i\sin\theta$$

:::derivation
**Euler 公式推导**：

利用指数函数的 Taylor 级数展开：

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$$

将 $x = i\theta$ 代入：

$$e^{i\theta} = 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \frac{(i\theta)^4}{4!} + \frac{(i\theta)^5}{5!} + \cdots$$

利用 $i^2=-1$，$i^3=-i$，$i^4=1$，$i^5=i$，...，将实部和虚部分离：

$$e^{i\theta} = \left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\right) + i\left(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots\right)$$

而 $\cos\theta$ 和 $\sin\theta$ 的 Taylor 级数恰好为：

$$\cos\theta = 1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots, \quad \sin\theta = \theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots$$

故：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

**意义**：Euler 公式将指数函数与三角函数统一，是复分析最优雅的公式之一，也是复数指数表示法的理论基础。
:::

得：
$$z = re^{i\theta}$$

**Euler 恒等式**（令 $\theta = \pi$）：
$$e^{i\pi} + 1 = 0$$

:::derivation
**Euler 恒等式推导**：

由 Euler 公式 $e^{i\theta} = \cos\theta + i\sin\theta$，令 $\theta = \pi$：

$$e^{i\pi} = \cos\pi + i\sin\pi = -1 + i\cdot 0 = -1$$

移项得：

$$e^{i\pi} + 1 = 0$$

**意义**：这个公式将数学中最重要的五个常数 $e$（自然对数底）、$i$（虚单位）、$\pi$（圆周率）、$1$（乘法单位元）、$0$（加法单位元）用一个简洁的等式联系起来，被誉为"最美的数学公式"。
:::

#### 2.5 三角不等式

$$|z_1 + z_2| \leq |z_1| + |z_2|$$
$$|z_1 - z_2| \geq \big||z_1| - |z_2|\big|$$

:::derivation
**复数三角不等式推导**：

设 $z_1 = x_1 + iy_1$，$z_2 = x_2 + iy_2$。

**第一步**：计算 $|z_1+z_2|^2$：

$$|z_1+z_2|^2 = (x_1+x_2)^2 + (y_1+y_2)^2 = (x_1^2+y_1^2) + (x_2^2+y_2^2) + 2(x_1x_2+y_1y_2)$$

即 $|z_1+z_2|^2 = |z_1|^2 + |z_2|^2 + 2\operatorname{Re}(z_1\bar{z}_2)$。

**第二步**：利用 $\operatorname{Re}(z_1\bar{z}_2) \leq |z_1\bar{z}_2| = |z_1||z_2|$（实部不超过模）：

$$|z_1+z_2|^2 \leq |z_1|^2 + |z_2|^2 + 2|z_1||z_2| = (|z_1|+|z_2|)^2$$

两边开方得：

$$|z_1+z_2| \leq |z_1| + |z_2|$$

**几何意义**：复数对应向量，模即向量长度。三角形两边之和大于等于第三边，等号当且仅当 $z_1$、$z_2$ 同向（幅角相同）时成立。

**第二不等式**：将 $z_2$ 替换为 $-z_2$ 代入第一不等式即得 $|z_1-z_2| \geq \big||z_1|-|z_2|\big|$。
:::

### 第三章 复数的乘幂与方根

#### 3.1 乘积与商

**定理 1**（乘积的模和辐角）：
$$|z_1 z_2| = |z_1| \cdot |z_2|, \qquad \operatorname{Arg}(z_1 z_2) = \operatorname{Arg} z_1 + \operatorname{Arg} z_2$$

:::derivation
**乘积的模和辐角定理推导**：

设 $z_1 = r_1(\cos\theta_1 + i\sin\theta_1) = r_1 e^{i\theta_1}$，$z_2 = r_2(\cos\theta_2 + i\sin\theta_2) = r_2 e^{i\theta_2}$。

**用指数形式推导**：

$$z_1 z_2 = r_1 e^{i\theta_1} \cdot r_2 e^{i\theta_2} = r_1 r_2 \cdot e^{i(\theta_1+\theta_2)}$$

由指数运算性质 $e^a \cdot e^b = e^{a+b}$，立得：

- **模**：$|z_1 z_2| = r_1 r_2 = |z_1| \cdot |z_2|$
- **辐角**：$\operatorname{Arg}(z_1 z_2) = \theta_1 + \theta_2 + 2k\pi = \operatorname{Arg} z_1 + \operatorname{Arg} z_2$

**用三角形式验证**：

$$z_1 z_2 = r_1 r_2[(\cos\theta_1\cos\theta_2 - \sin\theta_1\sin\theta_2) + i(\sin\theta_1\cos\theta_2 + \cos\theta_1\sin\theta_2)]$$

利用和角公式：

$$= r_1 r_2[\cos(\theta_1+\theta_2) + i\sin(\theta_1+\theta_2)]$$

结果一致：模为 $r_1r_2$，辐角为 $\theta_1+\theta_2$。
:::

**定理 2**（商的模和辐角）：
$$\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}, \qquad \operatorname{Arg}\left(\frac{z_1}{z_2}\right) = \operatorname{Arg} z_1 - \operatorname{Arg} z_2 \quad (z_2 \neq 0)$$

:::derivation
**商的模和辐角定理推导**：

设 $z_1 = r_1 e^{i\theta_1}$，$z_2 = r_2 e^{i\theta_2}$（$r_2 \neq 0$）。

**用指数形式推导**：

$$\frac{z_1}{z_2} = \frac{r_1 e^{i\theta_1}}{r_2 e^{i\theta_2}} = \frac{r_1}{r_2} \cdot e^{i(\theta_1-\theta_2)}$$

由指数运算性质 $\dfrac{e^a}{e^b} = e^{a-b}$，立得：

- **模**：$\left|\dfrac{z_1}{z_2}\right| = \dfrac{r_1}{r_2} = \dfrac{|z_1|}{|z_2|}$
- **辐角**：$\operatorname{Arg}\left(\dfrac{z_1}{z_2}\right) = \theta_1 - \theta_2 + 2k\pi = \operatorname{Arg} z_1 - \operatorname{Arg} z_2$

**几何意义**：除法的模为模之商，辐角为辐角之差。这对应于复平面上"长度相除、角度相减"的几何操作。
:::

#### 3.2 复数的乘幂

设 $z = r(\cos\theta + i\sin\theta) = re^{i\theta}$，$n$ 为正整数，则：
$$z^n = r^n(\cos n\theta + i\sin n\theta) = r^n e^{in\theta}$$

:::derivation
**复数乘幂公式推导**（$z^n = r^n e^{in\theta}$）：

设 $z = re^{i\theta}$，$n$ 为正整数。

**数学归纳法推导**：

1. **$n=1$ 时**：$z^1 = re^{i\theta}$，公式显然成立。

2. **假设 $n=k$ 时成立**：$z^k = r^k e^{ik\theta}$。

3. **证明 $n=k+1$ 时成立**：

$$z^{k+1} = z^k \cdot z = r^k e^{ik\theta} \cdot r e^{i\theta} = r^{k+1} e^{i(k+1)\theta}$$

由数学归纳法，公式对一切正整数 $n$ 成立。

**展开为三角形式**：由 Euler 公式 $e^{in\theta} = \cos n\theta + i\sin n\theta$：

$$z^n = r^n(\cos n\theta + i\sin n\theta)$$

**几何意义**：乘方运算将模 $n$ 次方，辐角 $n$ 倍。即复数 $z$ 自乘 $n$ 次，相当于在复平面上将向量长度变为 $n$ 次方，辐角旋转 $n$ 次。
:::

**棣莫弗（De Moivre）公式**（当 $r = 1$ 时）：
$$(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$$

:::derivation
**棣莫弗（De Moivre）公式推导**：

棣莫弗公式是乘幂公式在 $r=1$（即单位圆上复数）时的特例。

**推导**：设 $z = \cos\theta + i\sin\theta = e^{i\theta}$（$r=1$），代入乘幂公式 $z^n = r^n(\cos n\theta + i\sin n\theta)$：

$$(\cos\theta + i\sin\theta)^n = 1^n \cdot (\cos n\theta + i\sin n\theta) = \cos n\theta + i\sin n\theta$$

**应用价值**：

1. **计算高次幂**：如 $(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6})^{12}=\cos 2\pi+i\sin 2\pi=1$。

2. **推导倍角公式**：展开 $(\cos\theta+i\sin\theta)^n$ 并比较实虚部，可得 $\cos n\theta$ 和 $\sin n\theta$ 用 $\cos\theta$、$\sin\theta$ 表示的多项式。例如 $n=2$ 时：

   $$(\cos\theta+i\sin\theta)^2 = \cos^2\theta-\sin^2\theta+2i\sin\theta\cos\theta = \cos 2\theta + i\sin 2\theta$$

   由此得 $\cos 2\theta = \cos^2\theta-\sin^2\theta$，$\sin 2\theta = 2\sin\theta\cos\theta$。
:::

#### 3.3 复数的方根

设 $z = r(\cos\theta + i\sin\theta) \neq 0$，$n$ 为正整数，则 $z$ 的 $n$ 次方根为：
$$z^{1/n} = r^{1/n}\left[\cos\frac{\theta + 2k\pi}{n} + i\sin\frac{\theta + 2k\pi}{n}\right], \quad k = 0, 1, 2, \ldots, n-1$$

:::derivation
**复数 $n$ 次方根公式推导**：

设 $z = r(\cos\theta + i\sin\theta) = re^{i\theta}$，求 $w$ 使得 $w^n = z$。

**步骤 1**：设 $w = \rho(\cos\varphi + i\sin\varphi) = \rho e^{i\varphi}$。

**步骤 2**：由乘幂公式：

$$w^n = \rho^n(\cos n\varphi + i\sin n\varphi) = r(\cos\theta + i\sin\theta)$$

**步骤 3**：两复数相等，模相等、辐角相差 $2k\pi$：

$$\rho^n = r \implies \rho = r^{1/n}$$

$$n\varphi = \theta + 2k\pi \implies \varphi = \frac{\theta + 2k\pi}{n}, \quad k \in \mathbb{Z}$$

**步骤 4**：当 $k = 0, 1, 2, \ldots, n-1$ 时，$\varphi$ 取 $n$ 个不同的值（模 $2\pi$ 不等），得到 $n$ 个不同的方根。当 $k \geq n$ 时，$\varphi$ 增加 $2\pi$ 的整数倍，$w$ 重复出现。

故：

$$z^{1/n} = r^{1/n}\left[\cos\frac{\theta + 2k\pi}{n} + i\sin\frac{\theta + 2k\pi}{n}\right], \quad k = 0, 1, \ldots, n-1$$

**几何意义**：$n$ 个方根均匀分布在以原点为中心、$r^{1/n}$ 为半径的圆上，构成正 $n$ 边形的顶点。
:::

**几何意义**：$n$ 个方根在复平面上位于以原点为中心、$r^{1/n}$ 为半径的圆周上，且这 $n$ 个点将圆周 $n$ 等分。

### 第四章 区域

#### 4.1 区域的基本概念

**邻域**：
$$N(z_0, \delta) = \{z : |z - z_0| < \delta\}$$

**去心邻域**：
$$\mathring{N}(z_0, \delta) = \{z : 0 < |z - z_0| < \delta\}$$

**内点**：若存在 $\delta > 0$ 使得 $N(z_0, \delta) \subset D$，则称 $z_0$ 为 $D$ 的内点。

**开集**：若点集 $D$ 中的每一点都是内点，则称 $D$ 为开集。

**区域**：满足以下两个条件的点集 $D$ 称为区域：
1. $D$ 是一个开集
2. $D$ 是连通的

**边界点**：若点 $z_0$ 的任意邻域中既有属于 $D$ 的点，也有不属于 $D$ 的点，则称 $z_0$ 为 $D$ 的边界点。

**闭区域**：$\bar{D} = D \cup \partial D$

**有界区域与无界区域**：若存在正数 $M$，使得对一切 $z \in D$ 都有 $|z| < M$，则称 $D$ 为有界区域。

#### 4.2 简单曲线（Jordan 曲线）

**定义**：设 $C$ 是一条连续曲线，其参数方程为：
$$z = z(t) = x(t) + iy(t), \quad \alpha \leq t \leq \beta$$

若对于 $(\alpha, \beta)$ 内任意两个不同的参数值 $t_1 \neq t_2$，都有 $z(t_1) \neq z(t_2)$，则称 $C$ 为简单曲线（或 Jordan 曲线）。

若还满足 $z(\alpha) = z(\beta)$，则称 $C$ 为简单闭曲线（或 Jordan 闭曲线）。

**Jordan 曲线定理**：一条简单闭曲线将复平面分为两个区域：一个是有界的内部，一个是无界的外部。

#### 4.3 单连通域与多连通域

**单连通域**：若区域 $D$ 内的任意简单闭曲线的内部完全包含在 $D$ 中，则称 $D$ 为单连通域。

**多连通域**：不是单连通域的区域称为多连通域。

### 第五章 复变函数

#### 5.1 复变函数的定义

**定义**：设 $D$ 为复平面上的一个点集。若存在一个确定的法则 $f$，使得对 $D$ 中的每个复数 $z$，都有一个（或多个）确定的复数 $w$ 与之对应，则称 $f$ 为定义在 $D$ 上的复变函数，记作：
$$w = f(z), \quad z \in D$$

由于 $z = x + iy$，$w = u + iv$，复变函数可表示为：
$$w = f(z) = u(x, y) + iv(x, y)$$

#### 5.2 映射的概念

复变函数 $w = f(z)$ 可以理解为映射：它将 $z$ 平面上的点集 $D$ 映射到 $w$ 平面上的点集 $G = f(D)$。

#### 5.3 反函数与逆映射

**定义**：设 $w = f(z)$ 是定义在 $D$ 上的单值函数，其值域为 $G$。若对 $G$ 中的每个 $w$，都存在唯一的 $z \in D$ 使得 $w = f(z)$，则可以定义 $f$ 的反函数：
$$z = f^{-1}(w), \quad w \in G$$

### 第六章 复变函数的极限与连续性

#### 6.1 函数的极限

**定义**：设 $f(z)$ 在 $z_0$ 的去心邻域内有定义。若存在常数 $A$，使得对于任意给定的 $\varepsilon > 0$，都存在 $\delta > 0$，当 $0 < |z - z_0| < \delta$ 时，有
$$|f(z) - A| < \varepsilon$$
则称 $A$ 为 $f(z)$ 当 $z$ 趋于 $z_0$ 时的极限，记作：
$$\lim_{z \to z_0} f(z) = A$$

**重要定理**：设 $f(z) = u(x, y) + iv(x, y)$，$z_0 = x_0 + iy_0$，$A = a + ib$，则
$$\lim_{z \to z_0} f(z) = A \iff \lim_{\substack{x \to x_0 \\ y \to y_0}} u(x, y) = a \;\text{且}\; \lim_{\substack{x \to x_0 \\ y \to y_0}} v(x, y) = b$$

:::derivation
**复变函数极限的等价条件定理推导**：

设 $f(z) = u(x,y) + iv(x,y)$，$z_0 = x_0 + iy_0$，$A = a + ib$。

**必要性**（$\Rightarrow$）：若 $\lim_{z\to z_0} f(z) = A$，即对任意 $\varepsilon > 0$，存在 $\delta > 0$，当 $0 < |z-z_0| < \delta$ 时 $|f(z)-A| < \varepsilon$。

注意 $|f(z)-A|^2 = |(u-a)+i(v-b)|^2 = (u-a)^2+(v-b)^2$，故：

$$(u-a)^2 + (v-b)^2 < \varepsilon^2$$

这蕴含 $(u-a)^2 < \varepsilon^2$ 且 $(v-b)^2 < \varepsilon^2$，即 $|u-a|<\varepsilon$ 且 $|v-b|<\varepsilon$。

而 $0 < |z-z_0| = \sqrt{(x-x_0)^2+(y-y_0)^2} < \delta$ 蕴含 $0 < |x-x_0| < \delta$（取 $y=y_0$ 时需小心，但二元极限定义允许任意路径趋近）。

故 $\lim_{(x,y)\to(x_0,y_0)} u(x,y) = a$，$\lim_{(x,y)\to(x_0,y_0)} v(x,y) = b$。

**充分性**（$\Leftarrow$）：若 $u\to a$ 且 $v\to b$，则对任意 $\varepsilon > 0$，存在 $\delta > 0$，当 $0 < |z-z_0| < \delta$ 时：

$$|u-a| < \frac{\varepsilon}{\sqrt{2}}, \quad |v-b| < \frac{\varepsilon}{\sqrt{2}}$$

故 $|f(z)-A| = \sqrt{(u-a)^2+(v-b)^2} < \sqrt{\dfrac{\varepsilon^2}{2}+\dfrac{\varepsilon^2}{2}} = \varepsilon$。

**结论**：复变函数的极限等价于实部函数和虚部函数的二元极限同时存在。这说明复变函数的极限可转化为两个实二元函数的极限问题。
:::

#### 6.2 极限的运算性质

设 $\lim_{z \to z_0} f(z) = A$，$\lim_{z \to z_0} g(z) = B$，则：

**线性性质**：
$$\lim_{z \to z_0} [f(z) \pm g(z)] = A \pm B$$
$$\lim_{z \to z_0} [c \cdot f(z)] = cA \quad (c \in \mathbb{C})$$

**乘积的极限**：
$$\lim_{z \to z_0} [f(z) \cdot g(z)] = A \cdot B$$

**商的极限**（$B \neq 0$）：
$$\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{A}{B}$$

#### 6.3 函数的连续性

**定义**：设 $f(z)$ 在 $z_0$ 的某邻域内有定义。若
$$\lim_{z \to z_0} f(z) = f(z_0)$$
则称 $f(z)$ 在点 $z_0$ 处连续。

**连续性的等价条件**：设 $f(z) = u(x, y) + iv(x, y)$，则 $f(z)$ 在 $z_0 = x_0 + iy_0$ 处连续的充分必要条件是 $u(x, y)$ 和 $v(x, y)$ 在点 $(x_0, y_0)$ 处都连续。

---

