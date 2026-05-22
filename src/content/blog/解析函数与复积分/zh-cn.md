---
title: 解析函数与复积分
pubDate: 2026-05-22T10:39:00.000Z
updatedDate: 2026-05-22T10:40:36.861Z
draft: false
description: 
category: 复变函数
slugId: 解析函数与复积分
---

# 复变函数核心笔记：解析函数与复积分

> **导语**：本文整理了复变函数课程的核心内容，涵盖解析函数的基本概念、柯西-黎曼方程、初等复变函数、复积分的计算以及柯西积分定理与公式。所有定理均附带详细的公式推导与经典例题讲解，适合作为期末复习或考研专业课的参考指南。

---

## 一、 解析函数的概念与充要条件

### 1.1 复变函数的导数与解析性

**1. 导数的定义**
设函数 $w = f(z)$ 在区域 $D$ 内有定义，且 $z_0, z_0 + \Delta z \in D$。如果极限
$$ \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z} $$
存在，则称 $f(z)$ 在点 $z_0$ 处**可导**。此极限值称为 $f(z)$ 在 $z_0$ 的导数，记作 $f'(z_0)$ 或 $\left. \frac{dw}{dz} \right|_{z=z_0}$。

> **注意**：$\Delta z \to 0$ 意味着在复平面上以**任意方式**（任意方向、任意路径）趋于零。这比实变函数的要求严苛得多。

**2. 解析函数的概念**
- **解析**：如果 $f(z)$ 在点 $z_0$ 及其某个邻域内处处可导，则称 $f(z)$ 在 $z_0$ 处解析。
- **区域解析**：如果 $f(z)$ 在区域 $D$ 内每一点都解析，则称 $f(z)$ 在 $D$ 内解析（或称全纯函数、正则函数）。
- **奇点**：如果 $f(z)$ 在点 $z_0$ 不解析，则称 $z_0$ 为 $f(z)$ 的奇点。

#### 例题 1：判断函数 $f(z) = x + 2yi$ 的可导性与解析性
**解：**
设 $z = x + iy$，则 $f(z) = x + 2yi$。根据导数定义：
$$ f'(z) = \lim_{\Delta z \to 0} \frac{f(z+\Delta z) - f(z)}{\Delta z} = \lim_{\substack{\Delta x \to 0 \\ \Delta y \to 0}} \frac{(x+\Delta x) + 2(y+\Delta y)i - (x+2yi)}{\Delta x + i\Delta y} = \lim_{\substack{\Delta x \to 0 \\ \Delta y \to 0}} \frac{\Delta x + 2i\Delta y}{\Delta x + i\Delta y} $$
- 当 $\Delta z$ 沿实轴方向趋于 $0$（即 $\Delta y = 0, \Delta x \to 0$）时：
  $$ \lim_{\Delta x \to 0} \frac{\Delta x}{\Delta x} = 1 $$
- 当 $\Delta z$ 沿虚轴方向趋于 $0$（即 $\Delta x = 0, \Delta y \to 0$）时：
  $$ \lim_{\Delta y \to 0} \frac{2i\Delta y}{i\Delta y} = 2 $$
由于沿不同路径极限值不同，故极限不存在。因此，$f(z) = x + 2yi$ 在复平面上**处处不可导，处处不解析**。

---

### 1.2 柯西-黎曼 (Cauchy-Riemann) 方程

要判断复变函数 $f(z) = u(x,y) + iv(x,y)$ 的解析性，直接利用定义往往很困难。我们通过考察实部 $u$ 和虚部 $v$ 的偏导数来给出充要条件。

**推导过程**：
假设 $f(z)$ 在 $z = x+iy$ 处可导，则极限 $\lim_{\Delta z \to 0} \frac{\Delta w}{\Delta z}$ 存在且与趋近方式无关。
1. **沿平行于实轴方向** ($\Delta y = 0, \Delta z = \Delta x$)：
   $$ f'(z) = \lim_{\Delta x \to 0} \frac{u(x+\Delta x, y) - u(x,y)}{\Delta x} + i \lim_{\Delta x \to 0} \frac{v(x+\Delta x, y) - v(x,y)}{\Delta x} = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} $$
2. **沿平行于虚轴方向** ($\Delta x = 0, \Delta z = i\Delta y$)：
   $$ f'(z) = \lim_{\Delta y \to 0} \frac{u(x, y+\Delta y) - u(x,y)}{i\Delta y} + i \lim_{\Delta y \to 0} \frac{v(x, y+\Delta y) - v(x,y)}{i\Delta y} = \frac{1}{i}\frac{\partial u}{\partial y} + \frac{\partial v}{\partial y} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y} $$

由于可导要求两者相等，即实部与虚部分别对应相等，得到著名的 **C-R 方程**：
$$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $$

> **定理 (解析的充要条件)**
> 函数 $f(z) = u(x,y) + iv(x,y)$ 在区域 $D$ 内解析的**充要条件**是：
> 1. $u(x,y)$ 和 $v(x,y)$ 在 $D$ 内可微；
> 2. 满足 C-R 方程：$u_x = v_y$ 且 $u_y = -v_x$。
> 
> 此时，导数公式为：$f'(z) = u_x + iv_x = v_y - iu_y$。

#### 例题 2：判断 $f(z) = e^x(\cos y + i\sin y)$ 的解析性
**解：**
已知 $u(x,y) = e^x \cos y$，$v(x,y) = e^x \sin y$。
计算一阶偏导数：
$$ u_x = e^x \cos y, \quad u_y = -e^x \sin y $$
$$ v_x = e^x \sin y, \quad v_y = e^x \cos y $$
显然，偏导数在全平面连续，且满足 C-R 方程：
$$ u_x = v_y = e^x \cos y, \quad u_y = -v_x = -e^x \sin y $$
因此，$f(z)$ 在全平面处处解析。其导数为：
$$ f'(z) = u_x + iv_x = e^x \cos y + i e^x \sin y = e^x(\cos y + i\sin y) = f(z) $$
*(注：这正是复指数函数 $e^z$ 的性质)*

#### 例题 3：证明解析函数的等值线族正交
**题目**：若 $f(z) = u(x,y) + iv(x,y)$ 是解析函数，且 $f'(z) \neq 0$，证明曲线族 $u(x,y) = C_1$ 与 $v(x,y) = C_2$ 互相正交。
**证明：**
由隐函数求导法则，曲线 $u(x,y) = C_1$ 的斜率为 $k_1 = -\frac{u_x}{u_y}$；曲线 $v(x,y) = C_2$ 的斜率为 $k_2 = -\frac{v_x}{v_y}$。
计算斜率之积：
$$ k_1 \cdot k_2 = \left(-\frac{u_x}{u_y}\right) \cdot \left(-\frac{v_x}{v_y}\right) = \frac{u_x v_x}{u_y v_y} $$
利用 C-R 方程 $u_x = v_y$ 和 $u_y = -v_x$ 代入上式：
$$ k_1 \cdot k_2 = \frac{v_y (-u_y)}{u_y v_y} = -1 $$
故两曲线族在交点处互相正交。证毕。

---

## 二、 初等复变函数

### 2.1 指数函数
**定义**：对于 $z = x + iy$，定义指数函数为：
$$ e^z = \exp(z) = e^x(\cos y + i\sin y) $$
**性质**：
1. **处处解析**：$(e^z)' = e^z$。
2. **加法定理**：$e^{z_1 + z_2} = e^{z_1} \cdot e^{z_2}$。
3. **周期性**：$e^{z + 2k\pi i} = e^z$ （$k \in \mathbb{Z}$），即 $2\pi i$ 是其基本周期。（实指数函数无此性质）

### 2.2 三角函数与双曲函数
利用欧拉公式 $e^{iz} = \cos z + i\sin z$ 和 $e^{-iz} = \cos z - i\sin z$，推广定义：
$$ \sin z = \frac{e^{iz} - e^{-iz}}{2i}, \quad \cos z = \frac{e^{iz} + e^{-iz}}{2} $$
双曲函数定义为：
$$ \text{sh} z = \frac{e^z - e^{-z}}{2}, \quad \text{ch} z = \frac{e^z + e^{-z}}{2} $$
> **注意**：在复数域中，$|\sin z| \le 1$ 和 $|\cos z| \le 1$ **不再成立**。例如 $\sin(i) = \frac{e^{-1} - e^1}{2i} = i \text{sh}(1)$，其模可以大于1。

### 2.3 对数函数
**定义**：指数函数的反函数称为对数函数，记作 $w = \text{Ln} z$。
设 $z = r e^{i\theta}$，则：
$$ \text{Ln} z = \ln r + i(\theta + 2k\pi) = \ln|z| + i\text{Arg}z \quad (k \in \mathbb{Z}) $$
- **多值性**：由于幅角的多值性，$\text{Ln} z$ 是一个无穷多值函数。
- **主值支**：当 $k=0$ 时，记为 $\ln z = \ln|z| + i\arg z$（其中 $-\pi < \arg z \le \pi$）。
- **解析性**：对数函数的主值支在**除去原点及负实轴**的复平面内处处解析，且 $(\ln z)' = \frac{1}{z}$。

#### 例题 4：求 $\text{Ln}(-1)$ 及其主值
**解：**
$z = -1$，其模 $r = 1$，幅角主值 $\arg(-1) = \pi$。
$$ \text{Ln}(-1) = \ln 1 + i(\pi + 2k\pi) = (2k+1)\pi i \quad (k \in \mathbb{Z}) $$
其主值为 $\ln(-1) = \pi i$。这说明在复数域中，**负数也有对数**。

### 2.4 乘幂与幂函数
**定义**：设 $a \neq 0, b$ 为复数，定义乘幂 $a^b$ 为：
$$ a^b = e^{b \text{Ln} a} = e^{b(\ln|a| + i\arg a + 2k\pi i)} $$
- 当 $b$ 为整数时，$a^b$ 为单值。
- 当 $b = \frac{p}{q}$（既约分数）时，$a^b$ 具有 $q$ 个值。
- 当 $b$ 为无理数或复数时，$a^b$ 为无穷多值。

#### 例题 5：计算 $1^{1/3}$ 和 $i^i$
**解：**
1. **计算 $1^{1/3}$**：
   $$ 1^{1/3} = e^{\frac{1}{3} \text{Ln} 1} = e^{\frac{1}{3}(0 + 2k\pi i)} = e^{i \frac{2k\pi}{3}} \quad (k=0,1,2) $$
   三个值分别为：$1, \quad -\frac{1}{2} + i\frac{\sqrt{3}}{2}, \quad -\frac{1}{2} - i\frac{\sqrt{3}}{2}$。
2. **计算 $i^i$**：
   $$ i^i = e^{i \text{Ln} i} = e^{i \left( \ln 1 + i\left(\frac{\pi}{2} + 2k\pi\right) \right)} = e^{-\left(\frac{\pi}{2} + 2k\pi\right)} \quad (k \in \mathbb{Z}) $$
   可见 $i^i$ 的值均为**正实数**，其主值（$k=0$）为 $e^{-\pi/2}$。

---

## 三、 复变函数的积分

### 3.1 积分的定义与计算
设 $C$ 为复平面上的有向光滑曲线，$f(z)$ 在 $C$ 上有定义。复积分的定义与实变函数的第二型曲线积分完全类似：
$$ \int_C f(z) dz = \lim_{\delta \to 0} \sum_{k=1}^n f(\zeta_k) \Delta z_k $$
**参数化计算法**：
若曲线 $C$ 的参数方程为 $z(t) = x(t) + iy(t)$，$t \in [\alpha, \beta]$，则：
$$ \int_C f(z) dz = \int_\alpha^\beta f(z(t)) z'(t) dt $$
也可以转化为两个实二元函数的线积分：
$$ \int_C f(z) dz = \int_C (u+iv)(dx+idy) = \int_C (udx - vdy) + i \int_C (vdx + udy) $$

#### 例题 6：计算 $\oint_C \frac{dz}{(z-z_0)^n}$
**题目**：$C$ 为以 $z_0$ 为圆心、$r$ 为半径的正向圆周，$n$ 为整数。
**解：**
参数化圆周：$z = z_0 + r e^{i\theta}$，$\theta \in [0, 2\pi]$，则 $dz = i r e^{i\theta} d\theta$。
$$ \oint_C \frac{dz}{(z-z_0)^n} = \int_0^{2\pi} \frac{i r e^{i\theta}}{r^n e^{in\theta}} d\theta = i r^{1-n} \int_0^{2\pi} e^{i(1-n)\theta} d\theta $$
- **当 $n = 1$ 时**：
  $$ \oint_C \frac{dz}{z-z_0} = i \int_0^{2\pi} d\theta = 2\pi i $$
- **当 $n \neq 1$ 时**：
  $$ \oint_C \frac{dz}{(z-z_0)^n} = i r^{1-n} \left[ \frac{e^{i(1-n)\theta}}{i(1-n)} \right]_0^{2\pi} = \frac{r^{1-n}}{1-n} (1 - 1) = 0 $$
> **重要结论**：$\oint_C \frac{dz}{(z-z_0)^n} = \begin{cases} 2\pi i, & n = 1 \\ 0, & n \neq 1 \end{cases}$。此结论在后续留数定理中极为关键。

### 3.2 柯西-古萨基本定理 (Cauchy-Goursat)
> **定理**：如果函数 $f(z)$ 在单连通区域 $B$ 内处处解析，则沿 $B$ 内任意一条闭曲线 $C$，有：
> $$ \oint_C f(z) dz = 0 $$
**推论**：在单连通区域内，解析函数的积分**与路径无关**，只与起点和终点有关。

---

## 四、 柯西积分定理的推广与积分公式

### 4.1 复合闭路定理与闭路变形原理
对于**多连通区域**（即区域内有“洞”），柯西定理推广为复合闭路定理。
设 $C$ 为外边界，$C_1, C_2, \dots, C_n$ 为内边界（均取正向，即逆时针），若 $f(z)$ 在由这些曲线围成的多连通区域内解析，并在边界上连续，则：
$$ \oint_C f(z) dz = \sum_{k=1}^n \oint_{C_k} f(z) dz $$
**闭路变形原理**：解析函数沿闭曲线的积分，不因闭曲线在解析区域内作连续变形而改变其积分值。

#### 例题 7：计算 $\oint_\Gamma \frac{2z}{z^2-1} dz$
**题目**：$\Gamma$ 为包含圆周 $|z|=1$ 在内的任意正向简单闭曲线。
**解：**
被积函数 $f(z) = \frac{2z}{(z-1)(z+1)}$ 有两个奇点：$z_1 = 1$ 和 $z_2 = -1$。
因为 $\Gamma$ 包含 $|z|=1$，所以这两个奇点都在 $\Gamma$ 内部。
我们在 $\Gamma$ 内部分别作两个互不相交且互不包含的小圆周 $C_1$ (包围 $z=1$) 和 $C_2$ (包围 $z=-1$)。由复合闭路定理：
$$ \oint_\Gamma \frac{2z}{z^2-1} dz = \oint_{C_1} \frac{2z}{z^2-1} dz + \oint_{C_2} \frac{2z}{z^2-1} dz $$
利用部分分式分解：$\frac{2z}{z^2-1} = \frac{1}{z-1} + \frac{1}{z+1}$。
- 在 $C_1$ 上，$\frac{1}{z+1}$ 解析，积分为 $0$；$\oint_{C_1} \frac{1}{z-1} dz = 2\pi i$。
- 在 $C_2$ 上，$\frac{1}{z-1}$ 解析，积分为 $0$；$\oint_{C_2} \frac{1}{z+1} dz = 2\pi i$。
因此，原积分 $= 2\pi i + 2\pi i = 4\pi i$。

### 4.2 原函数与不定积分
若 $f(z)$ 在单连通区域 $B$ 内解析，则变上限积分 $F(z) = \int_{z_0}^z f(\zeta) d\zeta$ 也是 $B$ 内的解析函数，且 $F'(z) = f(z)$。
**牛顿-莱布尼兹公式**：
$$ \int_{z_0}^{z_1} f(z) dz = G(z_1) - G(z_0) $$
其中 $G(z)$ 是 $f(z)$ 的任意一个原函数。

#### 例题 8：计算 $\int_C z^2 dz$ 和 $\int_C \frac{1}{z} dz$
**解：**
1. $\int_C z^2 dz$：由于 $z^2$ 在全平面解析，原函数为 $\frac{1}{3}z^3$。
   $$ \int_{z_0}^{z_1} z^2 dz = \frac{1}{3}z_1^3 - \frac{1}{3}z_0^3 $$
2. $\int_C \frac{1}{z} dz$：若 $C$ 是不包含原点的单连通区域内的曲线，原函数为 $\ln z$（取单值分支）。
   $$ \int_{z_0}^{z_1} \frac{1}{z} dz = \ln z_1 - \ln z_0 $$

### 4.3 柯西积分公式 (Cauchy Integral Formula)
> **定理**：设 $f(z)$ 在区域 $D$ 内处处解析，$C$ 为 $D$ 内的任意正向简单闭曲线，其内部完全含于 $D$，$z_0$ 为 $C$ 内部的任意一点，则：
> $$ f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz $$
**物理/几何意义**：解析函数在区域内部任一点的值，完全由它在边界上的值决定。
**推论 (平均值公式)**：解析函数在圆心处的值等于它在圆周上的平均值。

#### 例题 9：利用柯西积分公式计算闭路积分
**题目**：计算 $\oint_{|z|=4} \frac{\sin z}{z} dz$ 和 $\oint_{|z|=2} \frac{e^z}{z-1} dz$。
**解：**
1. 对于 $\oint_{|z|=4} \frac{\sin z}{z} dz$：
   令 $f(z) = \sin z$，在全平面解析。奇点 $z_0 = 0$ 在 $|z|=4$ 内部。
   由柯西积分公式：
   $$ \oint_{|z|=4} \frac{\sin z}{z - 0} dz = 2\pi i \cdot f(0) = 2\pi i \cdot \sin(0) = 0 $$
2. 对于 $\oint_{|z|=2} \frac{e^z}{z-1} dz$：
   令 $f(z) = e^z$，在全平面解析。奇点 $z_0 = 1$ 在 $|z|=2$ 内部。
   由柯西积分公式：
   $$ \oint_{|z|=2} \frac{e^z}{z - 1} dz = 2\pi i \cdot f(1) = 2\pi i e $$

#### 例题 10：柯西积分公式的高阶应用
**题目**：设 $C$ 为圆周 $x^2+y^2=3$ (即 $|z|=\sqrt{3}$)，定义函数 $f(z) = \oint_C \frac{3\zeta^2+7\zeta+1}{\zeta-z} d\zeta$。求 $f'(1+i)$。
**解：**
首先判断点 $z_0 = 1+i$ 的位置。$|1+i| = \sqrt{2} < \sqrt{3}$，故 $z_0$ 在圆周 $C$ 的内部。
根据柯西积分公式，对于 $C$ 内部的任意点 $z$，有：
$$ f(z) = 2\pi i (3z^2 + 7z + 1) $$
对 $f(z)$ 求导：
$$ f'(z) = 2\pi i (6z + 7) $$
将 $z = 1+i$ 代入：
$$ f'(1+i) = 2\pi i [6(1+i) + 7] = 2\pi i (13 + 6i) = -12\pi + 26\pi i $$

---

## 五、 总结与学习建议

1. **核心主线**：复变函数的理论大厦建立在**解析性**之上。C-R方程是判断解析性的代数工具，而柯西-古萨定理则是解析函数在积分学上的宏观体现。
2. **计算技巧**：
   - 遇到闭路积分，首先寻找**奇点**，判断奇点与积分路径的位置关系。
   - 熟练运用**复合闭路定理**将复杂区域拆分为多个单连通区域。
   - 掌握**柯西积分公式**及其高阶导数公式，这是计算闭路积分最锋利的武器。
3. **多值函数陷阱**：在处理对数函数 $\text{Ln} z$ 和幂函数 $z^b$ 时，务必注意其多值性，明确题目要求的是“所有值”还是“主值支”，并在积分时注意分支割线的选取。

> **课后作业提示**：建议重点推导柯西积分公式的证明过程（利用闭路变形原理将积分路径缩小为以 $z_0$ 为圆心的小圆），并独立完成教材中关于留数定理前置知识的练习题。
