---
title: 复变函数作业整理
pubDate: 2026-06-15T12:27:00.000Z
updatedDate: 2026-06-15T12:36:32.390Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 复变函数
slugId: 复变函数作业整理
---

# 复变函数作业整理

> **导语**：本文整理了复变函数课程中作业，涵盖复数运算、解析函数判定、复变积分、级数展开与留数计算五大核心章节。每道题均配有详细的解题过程，适合作为期末复习或考研参考。

* * *

## 一、 复数与复变函数

### 1.1 复数的基本运算

**1. 求复数的实部、虚部、共轭、模与辐角**

#### 例题 1：求 $z = \dfrac{1}{3+2i}$ 的实部、虚部、共轭复数、模与辐角

**解：**

先将分母实数化：

$$ z = \frac{1}{3+2i} = \frac{3-2i}{(3+2i)(3-2i)} = \frac{3-2i}{9+4} = \frac{3-2i}{13} = \frac{3}{13} - \frac{2}{13}i $$

由此可得：

* **实部**：$\operatorname{Re}(z) = \displaystyle\frac{3}{13}$
* **虚部**：$\operatorname{Im}(z) = -\displaystyle\frac{2}{13}$
* **共轭复数**：$\bar{z} = \displaystyle\frac{3}{13} + \frac{2}{13}i$
* **模**：$\lvert z \rvert = \sqrt{\left(\frac{3}{13}\right)^2 + \left(-\frac{2}{13}\right)^2} = \dfrac{\sqrt{13}}{13} = \dfrac{1}{\sqrt{13}}$
* **辐角**：$\operatorname{Arg}(z) = \arctan\!\left(-\frac{2}{3}\right) + 2k\pi,\; k \in \mathbb{Z}$

* * *

#### 例题 2：求 $z = \dfrac{(2+4i)(2-5i)}{2i}$ 的实部、虚部、共轭复数、模与辐角

**解：**

先计算分子：

$$ (2+4i)(2-5i) = 4 - 10i + 8i - 20i^2 = 4 - 2i + 20 = 24 - 2i $$

则：

$$ z = \frac{24-2i}{2i} = \frac{(24-2i)(-i)}{2i \cdot (-i)} = \frac{-24i + 2i^2}{-2i^2} = \frac{-24i - 2}{2} = -1 - 12i $$

由此可得：

* **实部**：$\operatorname{Re}(z) = -1$
* **虚部**：$\operatorname{Im}(z) = -12$
* **共轭复数**：$\bar{z} = -1 + 12i$
* **模**：$\lvert z \rvert = \sqrt{(-1)^2 + (-12)^2} = \sqrt{145}$
* **辐角**：$\operatorname{Arg}(z) = \arctan(12) + \pi + 2k\pi,\; k \in \mathbb{Z}$（$z$ 在第三象限）

* * *

### 1.2 复数的三角形式与指数形式

#### 例题 3：将 $z = 1 + i\sqrt{3}$ 化为三角表示式和指数表示式

**解：**

先求模和辐角：

$$ \lvert z \rvert = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{4} = 2 $$

再求辐角：

$$ \arg(z) = \arctan\!\left(\frac{\sqrt{3}}{1}\right) = \frac{\pi}{3} $$

故：

* **三角表示式**：$z = 2\left[\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right]$
* **指数表示式**：$z = 2e^{i\pi/3}$

* * *

#### 例题 4：将 $z = 1 - \cos\varphi + i\sin\varphi\;(0 \leq \varphi \leq \pi)$ 化为三角表示式和指数表示式

**解：**

利用半角公式：

$$ 1 - \cos\varphi = 2\sin^2\frac{\varphi}{2},\quad \sin\varphi = 2\sin\frac{\varphi}{2}\cos\frac{\varphi}{2} $$

则：

$$
\begin{aligned}z &= 2\sin^2\frac{\varphi}{2} + i\cdot 2\sin\frac{\varphi}{2}\cos\frac{\varphi}{2} \\  &= 2\sin\frac{\varphi}{2}\left[\sin\frac{\varphi}{2} + i\cos\frac{\varphi}{2}\right] \\  &= 2\sin\frac{\varphi}{2}\left[\cos\left(\frac{\pi}{2}-\frac{\varphi}{2}\right) + i\sin\left(\frac{\pi}{2}-\frac{\varphi}{2}\right)\right] \\  &= 2\sin\frac{\varphi}{2} \cdot e^{i(\pi-\varphi)/2}\end{aligned}
$$

* **模**：$\lvert z \rvert = 2\sin\frac{\varphi}{2}$
* **辐角**：$\arg(z) = \dfrac{\pi - \varphi}{2}$

* * *

### 1.3 复数的幂与方根

#### 例题 5：求 $(1+i)^6$ 的值

**解：**

先将 $1+i$ 化为指数形式：

$$ 1+i = \sqrt{2}\, e^{i\pi/4} $$

则：

$$ (1+i)^6 = (\sqrt{2})^6 \cdot e^{i\cdot 6\pi/4} = 8 \cdot e^{i\cdot 3\pi/2} = 8\left[\cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2}\right] = 8(0 - i) = -8i $$

* * *

#### 例题 6：求 $(1-i)^{1/3}$ 的三个根

**解：**

先将 $1-i$ 化为指数形式：

$$ 1-i = \sqrt{2}\, e^{-i\pi/4} $$

则：

$$ (1-i)^{1/3} = (\sqrt{2})^{1/3} \cdot e^{-i\pi/12 + i\cdot 2k\pi/3},\quad k = 0, 1, 2 $$

:::derivation
**推导过程（复数的 $n$ 次方根公式）：**

设 $z = re^{i\theta}$，求 $w = z^{1/n}$，即 $w^n = z$。

令 $w = \rho e^{i\varphi}$，则 $w^n = \rho^n e^{in\varphi} = re^{i\theta}$。

比较模与辐角（注意辐角的多值性 $\theta + 2k\pi$）：

$$ \rho^n = r \;\Rightarrow\; \rho = r^{1/n} = \sqrt[n]{r} $$

$$ n\varphi = \theta + 2k\pi \;\Rightarrow\; \varphi = \frac{\theta + 2k\pi}{n} $$

故 $w_k = r^{1/n}\,e^{i(\theta + 2k\pi)/n}$。

当 $k$ 取 $0, 1, \ldots, n-1$ 时得到 $n$ 个不同的根；$k$ 取其他整数时根会重复（因 $e^{i2\pi} = 1$）。

本题中 $z = 1-i = \sqrt{2}\,e^{-i\pi/4}$，故 $r = \sqrt{2}$，$\theta = -\pi/4$，$n=3$：

$$ w_k = (\sqrt{2})^{1/3}\, e^{i(-\pi/4 + 2k\pi)/3} = 2^{1/6}\, e^{-i\pi/12 + i\cdot 2k\pi/3},\quad k=0,1,2 $$
:::

三个根分别为：

| $k$ | 根   | 化简  |
| --- | --- | --- |
| $k=0$ | $2^{1/6} e^{-i\pi/12}$ | —   |
| $k=1$ | $2^{1/6} e^{-i\pi/12 + i\cdot 2\pi/3}$ | $2^{1/6} e^{i\cdot 7\pi/12}$ |
| $k=2$ | $2^{1/6} e^{-i\pi/12 + i\cdot 4\pi/3}$ | $2^{1/6} e^{i\cdot 5\pi/4}$ |

> **注意**：$n$ 次方根在复平面上均匀分布在半径为 $\sqrt[n]{\lvert z \rvert}$ 的圆周上，相邻根的辐角相差 $2\pi/n$。

* * *

### 1.4 映射问题

#### 例题 7：函数 $w = \dfrac{1}{z}$ 把下列 $z$ 平面上的曲线映射成 $w$ 平面上怎样的曲线？

**（1）$x^2 + y^2 = 4$**

**解：**

设 $z = x + iy$，$w = u + iv = \dfrac{1}{z} = \dfrac{\bar{z}}{\lvert z \rvert^2} = \dfrac{x - iy}{x^2 + y^2}$，则：

$$ u = \frac{x}{x^2 + y^2},\quad v = -\frac{y}{x^2 + y^2} $$

当 $x^2 + y^2 = 4$ 时：

$$ u^2 + v^2 = \frac{x^2 + y^2}{(x^2 + y^2)^2} = \frac{1}{x^2 + y^2} = \frac{1}{4} $$

即映射为 $w$ 平面上的圆：$u^2 + v^2 = \dfrac{1}{4}$，也即 $\lvert w \rvert = \dfrac{1}{2}$。

**（2）$y = x$**

**解：**

当 $y = x$ 时：

$$ u = \frac{x}{2x^2} = \frac{1}{2x},\quad v = -\frac{x}{2x^2} = -\frac{1}{2x} $$

所以 $v = -u$，映射为 $w$ 平面上的直线 $v = -u$（即第二、四象限角平分线）。

> **规律**：$w = 1/z$ 称为反演变换，将圆映射为圆（直线视为半径为无穷大的圆）。

* * *

## 二、 解析函数

### 2.1 可导性与解析性的判定

#### 例题 8：判断 $f(z) = 2x^3 + 3y^3 i$ 的可导性与解析性

**解：**

令 $u = 2x^3$，$v = 3y^3$，则四个一阶偏导数为：

$$ \frac{\partial u}{\partial x} = 6x^2,\quad \frac{\partial u}{\partial y} = 0 $$

$v$ 的偏导数为：

$$ \frac{\partial v}{\partial x} = 0,\quad \frac{\partial v}{\partial y} = 9y^2 $$

柯西-黎曼条件要求：

$$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad\text{且}\quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} $$

:::derivation
**推导过程（柯西-黎曼条件）：**

设 $f(z) = u(x,y) + iv(x,y)$ 在 $z = x+iy$ 处可导，则极限 $f'(z) = \lim\limits_{\Delta z \to 0} \dfrac{\Delta w}{\Delta z}$ 存在且与 $\Delta z \to 0$ 的方式无关。

**沿实轴方向**（$\Delta y = 0,\ \Delta z = \Delta x$）：

$$ f'(z) = \lim_{\Delta x \to 0} \frac{u(x+\Delta x,y)-u(x,y)}{\Delta x} + i\lim_{\Delta x \to 0}\frac{v(x+\Delta x,y)-v(x,y)}{\Delta x} = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} $$

**沿虚轴方向**（$\Delta x = 0,\ \Delta z = i\Delta y$）：

$$ f'(z) = \frac{1}{i}\frac{\partial u}{\partial y} + \frac{\partial v}{\partial y} = \frac{\partial v}{\partial y} - i\frac{\partial u}{\partial y} $$

可导要求两种方式结果相等，实部、虚部分别对应相等：

$$ \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y},\qquad \frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y} $$

此即 C-R 方程。它是解析性的必要条件；当 $u,v$ 一阶偏导连续时，也是充分条件。
:::

即：

$$ 6x^2 = 9y^2 \quad\text{且}\quad 0 = 0 $$

由 $6x^2 = 9y^2$ 得 $y = \pm\dfrac{\sqrt{6}}{3}x = \pm\dfrac{\sqrt{2}}{\sqrt{3}}x$。

故 $f(z)$ **仅在直线 $y = \pm\dfrac{\sqrt{6}}{3}x$ 上可导**，在整个复平面上**不解析**（可导点不构成区域）。

* * *

#### 例题 9：判断 $f(z) = \sin x \cdot \operatorname{ch} y + i\cos x \cdot \operatorname{sh} y$ 的可导性与解析性

**解：**

令 $u = \sin x \cdot \operatorname{ch} y$，$v = \cos x \cdot \operatorname{sh} y$，则：

$u$ 的一阶偏导数：

$$ \frac{\partial u}{\partial x} = \cos x \cdot \operatorname{ch} y,\quad \frac{\partial u}{\partial y} = \sin x \cdot \operatorname{sh} y $$

$v$ 的一阶偏导数：

$$ \frac{\partial v}{\partial x} = -\sin x \cdot \operatorname{sh} y,\quad \frac{\partial v}{\partial y} = \cos x \cdot \operatorname{ch} y $$

验证柯西-黎曼条件：

首先检验第一个条件 $\dfrac{\partial u}{\partial x} = \dfrac{\partial v}{\partial y}$：

$$ \frac{\partial u}{\partial x} = \cos x \cdot \operatorname{ch} y = \frac{\partial v}{\partial y} \quad\checkmark $$

再检验第二个条件 $\dfrac{\partial u}{\partial y} = -\dfrac{\partial v}{\partial x}$：

$$ \frac{\partial u}{\partial y} = \sin x \cdot \operatorname{sh} y = -(-\sin x \cdot \operatorname{sh} y) = -\frac{\partial v}{\partial x} \quad\checkmark $$

C-R 条件在全平面成立，且 $u$、$v$ 的一阶偏导数连续，所以 $f(z)$ **在全平面解析**。

实际上，$f(z) = \sin(x + iy) = \sin z$，这正是正弦函数在复平面上的推广。

> **定理**：函数 $f(z) = u + iv$ 在区域 $D$ 内解析的充要条件是 $u$、$v$ 在 $D$ 内可微且满足 C-R 条件。

* * *

### 2.2 解析函数的参数确定

#### 例题 10：设 $my^3 + nx^2y + i(x^3 + lxy^2)$ 为解析函数，试确定 $l, m, n$ 的值

**解：**

令 $u = my^3 + nx^2y$，$v = x^3 + lxy^2$，则：

$u$ 的一阶偏导数：

$$ \frac{\partial u}{\partial x} = 2nxy,\quad \frac{\partial u}{\partial y} = 3my^2 + nx^2 $$

$v$ 的一阶偏导数：

$$ \frac{\partial v}{\partial x} = 3x^2 + ly^2,\quad \frac{\partial v}{\partial y} = 2lxy $$

由 C-R 条件：

**（1）** $\dfrac{\partial u}{\partial x} = \dfrac{\partial v}{\partial y}$：$$ 2nxy = 2lxy \quad\Rightarrow\quad n = l $$

**（2）** $\dfrac{\partial u}{\partial y} = -\dfrac{\partial v}{\partial x}$：$$ 3my^2 + nx^2 = -(3x^2 + ly^2) = -3x^2 - ly^2 $$

比较系数得：

$$ 3m = -l,\quad n = -3 $$

由 $n = l$ 且 $n = -3$ 得 $l = -3$，代入 $3m = -l = 3$ 得 $m = 1$。

故答案为：$l = -3$，$m = 1$，$n = -3$。

* * *

### 2.3 复对数与复幂

#### 例题 11：求 $\operatorname{Ln}(-i)$ 和 $\operatorname{Ln}(-3+4i)$ 及其主值

**解：**

复对数的定义：

$$ \operatorname{Ln}(z) = \ln\lvert z \rvert + i\operatorname{Arg}(z) = \ln\lvert z \rvert + i\arg(z) + i\cdot 2k\pi,\; k \in \mathbb{Z} $$

:::derivation
**推导过程（复对数公式）：**

复对数定义为复指数函数的反函数：设 $w = \operatorname{Ln} z$，则 $e^w = z$。

令 $w = u + iv$（$u,v \in \mathbb{R}$），$z = re^{i\theta}$（$r = \lvert z\rvert$，$\theta = \arg z$），则：

$$ e^{u+iv} = e^u \cdot e^{iv} = r\,e^{i\theta} $$

比较两端的模与辐角：

- 模：$e^u = r \;\Rightarrow\; u = \ln r = \ln\lvert z\rvert$；
- 辐角：$v = \theta + 2k\pi = \operatorname{Arg}(z)$（$k \in \mathbb{Z}$），因 $e^{iv}$ 以 $2\pi$ 为周期。

故 $w = \ln\lvert z\rvert + i\operatorname{Arg}(z)$。

由于辐角 $\operatorname{Arg}(z)$ 多值（差 $2k\pi$），复对数是无穷多值函数；取主值 $\arg z \in (-\pi,\pi]$ 时得到主值支 $\ln z$。
:::

**（1）$\operatorname{Ln}(-i)$：**

先求模和辐角：$\lvert -i \rvert = 1$，$\arg(-i) = -\dfrac{\pi}{2}$。

代入定义式：

$$ \operatorname{Ln}(-i) = \ln 1 + i\left(-\frac{\pi}{2} + 2k\pi\right) = i\left(-\frac{\pi}{2} + 2k\pi\right),\; k \in \mathbb{Z} $$

**主值**：$\ln(-i) = -\dfrac{i\pi}{2}$

**（2）$\operatorname{Ln}(-3+4i)$：**

先求模：$\lvert -3+4i \rvert = \sqrt{9 + 16} = 5$

再求辐角（注意 $-3+4i$ 在第二象限）：

$$ \arg(-3+4i) = \pi - \arctan\frac{4}{3} $$

代入定义式：

$$ \operatorname{Ln}(-3+4i) = \ln 5 + i\left[\pi - \arctan\frac{4}{3} + 2k\pi\right],\; k \in \mathbb{Z} $$

**主值**：$\ln(-3+4i) = \ln 5 + i\left[\pi - \arctan\frac{4}{3}\right]$

> **注意**：复对数是多值函数，主值 $\ln z$ 取辐角主值 $\arg z \in (-\pi, \pi]$。求复对数时，先求模长和辐角，再套用定义即可。

* * *

#### 例题 12：求 $e^{1-i\pi/2}$、$\exp\dfrac{1+i\pi}{4}$、$3^i$ 和 $(1+i)^i$ 的值

**解：**

**（1）$e^{1-i\pi/2}$：**

$$ e^{1-i\pi/2} = e^1 \cdot e^{-i\pi/2} = e\left[\cos\left(-\frac{\pi}{2}\right) + i\sin\left(-\frac{\pi}{2}\right)\right] = e(0 - i) = -ei $$

**（2）$\exp\dfrac{1+i\pi}{4}$：**

$$ \exp\frac{1+i\pi}{4} = e^{1/4} \cdot e^{i\pi/4} = e^{1/4}\left[\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right] = e^{1/4}\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = \frac{\sqrt{2}}{2}e^{1/4}(1+i) $$

**（3）$3^i$：**

利用公式 $a^b = e^{b\operatorname{Ln}a}$：

$$ 3^i = e^{i\operatorname{Ln}3} = e^{i(\ln 3 + i\cdot 2k\pi)} = e^{-2k\pi + i\ln 3} = e^{-2k\pi}\left[\cos(\ln 3) + i\sin(\ln 3)\right],\; k \in \mathbb{Z} $$

:::derivation
**推导过程（复幂公式 $a^b = e^{b\operatorname{Ln}a}$）：**

对实数情形，$a^b = e^{b\ln a}$ 自然成立。将其推广到复数，只需把实对数 $\ln a$ 换成复对数 $\operatorname{Ln}a$（多值），即定义：

$$ a^b := e^{b\,\operatorname{Ln}a},\quad a \neq 0 $$

由于 $\operatorname{Ln}a = \ln\lvert a\rvert + i\arg a + i\cdot 2k\pi$ 多值，$a^b$ 一般也是多值的。

本题 $a = 3,\ b = i$。先算 $\operatorname{Ln}3 = \ln 3 + i\cdot 2k\pi$（$3>0$，主辐角为 $0$）。

代入：

$$ 3^i = e^{i(\ln 3 + i\cdot 2k\pi)} = e^{i\ln 3 + i^2\cdot 2k\pi} = e^{i\ln 3 - 2k\pi} = e^{-2k\pi}\cdot e^{i\ln 3} $$

再用欧拉公式 $e^{i\theta} = \cos\theta + i\sin\theta$（取 $\theta = \ln 3$）：

$$ 3^i = e^{-2k\pi}\left[\cos(\ln 3) + i\sin(\ln 3)\right] $$

可见虚数指数幂 $3^i$ 的所有值都是复数（且模长 $e^{-2k\pi}$ 随 $k$ 变化），主值取 $k=0$。
:::

**主值**（$k=0$）：$3^i = \cos(\ln 3) + i\sin(\ln 3)$"

**（4）$(1+i)^i$：**

$$ \begin{aligned}(1+i)^i &= e^{i\operatorname{Ln}(1+i)} = e^{i\left[\ln\sqrt{2} + i(\pi/4 + 2k\pi)\right]} \\&= e^{i\ln\sqrt{2} - \pi/4 - 2k\pi} = e^{-\pi/4 - 2k\pi} \cdot e^{i\ln\sqrt{2}} \\&= e^{-\pi/4 - 2k\pi}\left[\cos(\ln\sqrt{2}) + i\sin(\ln\sqrt{2})\right],\; k \in \mathbb{Z}\end{aligned} $$

**主值**（$k=0$）：$(1+i)^i = e^{-\pi/4}\left[\cos(\ln\sqrt{2}) + i\sin(\ln\sqrt{2})\right]$

> **注意**：复幂函数一般为多值函数。当指数为无理数或虚数时，有无穷多支。取 $k=0$ 对应主值。

* * *

## 三、 复变函数的积分

### 3.1 与路径无关的积分

#### 例题 13：沿路线计算 $\displaystyle\int_0^{3+i} z^2\,dz$

**解：**

由于 $z^2$ 在全平面解析，积分与路径无关，可选取直线段直接计算原函数：

$$ \int_0^{3+i} z^2\,dz = \left[\frac{z^3}{3}\right]_0^{3+i} = \frac{(3+i)^3}{3} $$

:::derivation
**推导过程（解析函数积分与路径无关 / 复牛顿-莱布尼兹公式）：**

由柯西-古萨定理，若 $f(z)$ 在单连通区域 $D$ 内解析，则沿 $D$ 内任意两条同端点的路径积分相等，即积分只与起点、终点有关。

定义变上限积分 $F(z) = \int_{z_0}^{z} f(\zeta)\,d\zeta$。可证 $F(z)$ 在 $D$ 内解析且 $F'(z) = f(z)$（即 $F$ 是 $f$ 的一个原函数）。

若 $G(z)$ 是 $f(z)$ 的任一原函数（$G'(z) = f(z)$），则 $F(z) - G(z)$ 导数为零，在连通域内为常数，故：

$$ \int_{z_0}^{z_1} f(z)\,dz = G(z_1) - G(z_0) $$

此即复牛顿-莱布尼兹公式，形式与实变量完全一致。

本题 $f(z) = z^2$ 在全平面解析，原函数 $G(z) = \dfrac{z^3}{3}$，故：

$$ \int_0^{3+i} z^2\,dz = G(3+i) - G(0) = \frac{(3+i)^3}{3} - 0 = \frac{(3+i)^3}{3} $$
:::

计算 $(3+i)^3$：

先算平方：

$$ (3+i)^2 = 9 + 6i + i^2 = 8 + 6i $$

再乘以 $(3+i)$ 得立方：

$$ (3+i)^3 = (3+i)(8+6i) = 24 + 18i + 8i + 6i^2 = 24 + 26i - 6 = 18 + 26i $$

故积分值为：

$$ \frac{18 + 26i}{3} = 6 + \frac{26}{3}i $$

> **要点**：解析函数的积分与路径无关，可像实函数一样用原函数计算。这是复变积分最基本的技巧。

* * *

### 3.2 沿闭曲线的积分

#### 例题 14：计算积分 $\displaystyle\oint_C \frac{\bar{z}}{\lvert z \rvert}\,dz$，其中 $C$ 为正向圆周 $\lvert z \rvert = 2$

**解：**

在圆周 $\lvert z \rvert = 2$ 上，$\lvert z \rvert = 2$，且 $z \cdot \bar{z} = \lvert z \rvert^2 = 4$，故 $\bar{z} = \dfrac{4}{z}$。

于是：

$$ \frac{\bar{z}}{\lvert z \rvert} = \frac{4/z}{2} = \frac{2}{z} $$

所以：

$$ \oint_C \frac{\bar{z}}{\lvert z \rvert}\,dz = \oint_C \frac{2}{z}\,dz = 2 \cdot 2\pi i = 4\pi i $$

:::derivation
**推导过程（基础结论 $\displaystyle\oint_C \frac{1}{z-z_0}\,dz = 2\pi i$）：**

取 $C$ 为以 $z_0$ 为圆心、$r$ 为半径的正向圆周，参数化为 $z = z_0 + re^{i\theta}$，$\theta \in [0, 2\pi]$。

则 $dz = ire^{i\theta}\,d\theta$，且 $z - z_0 = re^{i\theta}$，于是：

$$ \oint_C \frac{dz}{z-z_0} = \int_0^{2\pi} \frac{ire^{i\theta}}{re^{i\theta}}\,d\theta = i\int_0^{2\pi} d\theta = 2\pi i $$

结果与半径 $r$ 无关。对于 $z_0 = 0$ 即得 $\displaystyle\oint_C \frac{1}{z}\,dz = 2\pi i$。

更一般地，对整数 $n$：

$$ \oint_C \frac{dz}{(z-z_0)^n} = \int_0^{2\pi} \frac{ire^{i\theta}}{r^n e^{in\theta}}\,d\theta = ir^{1-n}\int_0^{2\pi} e^{i(1-n)\theta}\,d\theta $$

当 $n=1$ 时积分为 $2\pi$；当 $n \neq 1$ 时 $\int_0^{2\pi} e^{i(1-n)\theta}d\theta = 0$（复指数整周期积分为零）。

本题中 $\bar z/\lvert z\rvert = 2/z$，故积分 $= 2 \cdot 2\pi i = 4\pi i$。
:::

> **注意**：这里用到了 $\displaystyle\oint_C \frac{1}{z}\,dz = 2\pi i$（柯西积分公式的基本结论），这是留数定理的基础。

* * *

## 四、 级数

### 4.1 幂级数展开

#### 例题 15：将 $\dfrac{1}{(1+z^2)^2}$ 展开成 $z$ 的幂级数，并指出收敛半径

**解：**

已知 $\dfrac{1}{1+w} = \sum_{n=0}^{\infty} (-1)^n w^n$，$\lvert w \rvert < 1$。

令 $w = z^2$：

$$ \frac{1}{1+z^2} = \sum_{n=0}^{\infty} (-1)^n z^{2n},\quad \lvert z \rvert < 1 $$

:::derivation
**推导过程（几何级数 $\dfrac{1}{1-w} = \sum\limits_{n=0}^{\infty} w^n$）：**

设 $S = 1 + w + w^2 + \cdots + w^{N-1}$，则 $wS = w + w^2 + \cdots + w^N$。

两式相减：$(1-w)S = 1 - w^N$，故 $S = \dfrac{1-w^N}{1-w}$（$w \neq 1$）。

当 $\lvert w\rvert < 1$ 时，$w^N \to 0\ (N \to \infty)$，故：

$$ \frac{1}{1-w} = \sum_{n=0}^{\infty} w^n,\quad \lvert w\rvert < 1 $$

本题令 $w = z^2$（$\lvert z\rvert < 1 \Rightarrow \lvert z^2\rvert < 1$）：

$$ \frac{1}{1+z^2} = \frac{1}{1-(-z^2)} = \sum_{n=0}^{\infty}(-z^2)^n = \sum_{n=0}^{\infty}(-1)^n z^{2n} $$

收敛半径由最近的奇点 $z = \pm i$（使分母为零）决定，$R = 1$。
:::

两边对 $z$ 求导：

$$ -\frac{2z}{(1+z^2)^2} = \sum_{n=1}^{\infty} (-1)^n \cdot 2n \cdot z^{2n-1} $$

整理得：

$$ \frac{1}{(1+z^2)^2} = -\sum_{n=1}^{\infty} (-1)^n \cdot n \cdot z^{2n-2} = \sum_{n=1}^{\infty} (-1)^{n+1} \cdot n \cdot z^{2n-2} = \sum_{n=0}^{\infty} (-1)^{n} (n+1) z^{2n} $$

:::derivation
**推导过程（逐项求导法）：**

幂级数在其收敛圆内可逐项求导，且求导后收敛半径不变。已知：

$$ \frac{1}{1+z^2} = \sum_{n=0}^{\infty}(-1)^n z^{2n} $$

两边对 $z$ 求导。左端用复合函数求导法则：

$$ \frac{d}{dz}\left(\frac{1}{1+z^2}\right) = -\frac{2z}{(1+z^2)^2} $$

右端逐项求导（$\frac{d}{dz}z^{2n} = 2n\,z^{2n-1}$，$n=0$ 项导数为 $0$ 故从 $n=1$ 起）：

$$ \sum_{n=0}^{\infty}(-1)^n \cdot 2n \cdot z^{2n-1} = \sum_{n=1}^{\infty}(-1)^n \cdot 2n \cdot z^{2n-1} $$

两端相等：$-\dfrac{2z}{(1+z^2)^2} = \sum\limits_{n=1}^{\infty}(-1)^n \cdot 2n \cdot z^{2n-1}$。

两边除以 $-2z$：

$$ \frac{1}{(1+z^2)^2} = -\sum_{n=1}^{\infty}(-1)^n \cdot n \cdot z^{2n-2} = \sum_{n=1}^{\infty}(-1)^{n+1} n\,z^{2n-2} $$

作指标平移 $n \to n+1$（使下标从 $0$ 开始，幂次变为 $z^{2n}$）：

$$ \frac{1}{(1+z^2)^2} = \sum_{n=0}^{\infty}(-1)^n (n+1)\,z^{2n} $$

逐项求导不改变收敛半径，故 $R$ 仍为 $1$。
:::

**收敛半径** $R = 1$（由奇点 $z = \pm i$ 决定）。

> **技巧**：对已知展开式求导或积分，可得到新函数的展开式。注意收敛半径由离展开中心最近的奇点决定。

* * *

### 4.2 泰勒展开

#### 例题 16：求 $\dfrac{1}{4-3z}$ 在 $z_0 = 1+i$ 处的泰勒展开式，并指出收敛半径

**解：**

设 $z_0 = 1+i$，则 $z = z_0 + (z - z_0)$：

$$
\begin{aligned}\frac{1}{4-3z} &= \frac{1}{4 - 3[z_0 + (z - z_0)]} \\&= \frac{1}{4 - 3z_0 - 3(z - z_0)} \\&= \frac{1}{(1-3i) - 3(z - z_0)}\end{aligned}
$$

因为 $4 - 3z_0 = 4 - 3(1+i) = 1 - 3i$，所以：

$$
\frac{1}{4-3z} = \frac{1}{1-3i} \cdot \frac{1}{1 - \dfrac{3(z - z_0)}{1-3i}}
$$

利用几何级数：

$$ \frac{1}{4-3z} = \frac{1}{1-3i} \sum_{n=0}^{\infty} \left[\frac{3(z - z_0)}{1-3i}\right]^n = \sum_{n=0}^{\infty} \frac{3^n}{(1-3i)^{n+1}} (z - z_0)^n $$

:::derivation
**推导过程（泰勒展开的"凑几何级数"法）：**

泰勒展开的中心思想：把函数凑成 $\dfrac{1}{1-w}$ 的形式，其中 $w$ 是 $(z - z_0)$ 的某个倍数，再套用几何级数 $\dfrac{1}{1-w} = \sum w^n$。

本题展开中心 $z_0 = 1+i$，故应以 $(z - z_0)$ 为变量改写。令 $z = z_0 + (z-z_0)$：

$$ 4 - 3z = 4 - 3[z_0 + (z-z_0)] = (4 - 3z_0) - 3(z-z_0) $$

计算常数项 $4 - 3z_0 = 4 - 3(1+i) = 1 - 3i$，故：

$$ \frac{1}{4-3z} = \frac{1}{(1-3i) - 3(z-z_0)} = \frac{1}{1-3i}\cdot\frac{1}{1 - \dfrac{3(z-z_0)}{1-3i}} $$

令 $w = \dfrac{3(z-z_0)}{1-3i}$，当 $\lvert w\rvert < 1$ 时：

$$ \frac{1}{1-w} = \sum_{n=0}^{\infty} w^n \;\Rightarrow\; \frac{1}{4-3z} = \frac{1}{1-3i}\sum_{n=0}^{\infty}\left[\frac{3(z-z_0)}{1-3i}\right]^n = \sum_{n=0}^{\infty}\frac{3^n}{(1-3i)^{n+1}}(z-z_0)^n $$

收敛半径 $R$ 等于展开中心 $z_0$ 到最近奇点的距离。奇点 $z = 4/3$（使分母为零），故 $R = \lvert z_0 - 4/3\rvert = \lvert (1+i) - 4/3\rvert = \lvert -1/3 + i\rvert = \sqrt{1/9 + 1} = \sqrt{10}/3$，与下式一致。
:::

收敛条件为 $\left\lvert \dfrac{3(z - z_0)}{1-3i} \right\rvert < 1$，即：

$$ \lvert z - z_0 \rvert < \frac{\lvert 1-3i \rvert}{3} = \frac{\sqrt{10}}{3} $$

**收敛半径** $R = \dfrac{\sqrt{10}}{3}$。

> **规律**：将函数变形为 $\dfrac{1}{1 - \text{公比}}$ 的形式是泰勒展开的核心技巧。收敛半径等于展开中心到最近奇点的距离。

* * *

## 五、 留数

### 5.1 利用留数定理计算闭曲线积分

#### 例题 17：计算 $\displaystyle\oint_C \frac{dz}{z^2 - a^2}$，$C: \lvert z - a \rvert = a$（正向）

**解：**

被积函数 $f(z) = \dfrac{1}{z^2 - a^2} = \dfrac{1}{(z-a)(z+a)}$，奇点为 $z = a$ 和 $z = -a$。

圆周 $C: \lvert z - a \rvert = a$ 是以 $a$ 为圆心、$a$ 为半径的圆，$z = a$ 在边界上，$z = -a$ 在圆外。

$a$ 为一阶极点，留数为：

$$ \operatorname{Res}(f, a) = \lim_{z \to a} (z-a)f(z) = \lim_{z \to a} \frac{1}{z+a} = \frac{1}{2a} $$

:::derivation
**推导过程（一阶极点留数公式 $\operatorname{Res}[f,z_0]=\lim\limits_{z\to z_0}(z-z_0)f(z)$）：**

设 $z_0$ 为 $f(z)$ 的一阶极点，则 $f(z)$ 在 $z_0$ 去心邻域内的洛朗展开式主部仅含一项：

$$ f(z) = \frac{c_{-1}}{z-z_0} + c_0 + c_1(z-z_0) + \cdots $$

按定义，留数 $\operatorname{Res}[f,z_0] = c_{-1}$。两边同乘 $(z - z_0)$：

$$ (z-z_0)f(z) = c_{-1} + c_0(z-z_0) + c_1(z-z_0)^2 + \cdots $$

令 $z \to z_0$，等式右端除 $c_{-1}$ 外各项均趋于 $0$，故：

$$ c_{-1} = \lim_{z \to z_0}(z-z_0)f(z) $$

本题 $f(z) = \dfrac{1}{(z-a)(z+a)}$，$z=a$ 为一阶极点（分母单零点）：

$$ \operatorname{Res}(f,a) = \lim_{z\to a}(z-a)\cdot\frac{1}{(z-a)(z+a)} = \lim_{z\to a}\frac{1}{z+a} = \frac{1}{2a} $$

即消去引发极点的因子 $(z-a)$ 后取极限。
:::

由留数定理：

$$ \oint_C f(z)\,dz = 2\pi i \cdot \operatorname{Res}(f, a) = 2\pi i \cdot \frac{1}{2a} = \frac{\pi i}{a} $$

:::derivation
**推导过程（留数定理 $\displaystyle\oint_C f(z)\,dz = 2\pi i\sum_k \operatorname{Res}[f,z_k]$）：**

设 $f(z)$ 在闭曲线 $C$ 内部除有限个奇点 $z_1,\ldots,z_n$ 外处处解析。

在每个奇点 $z_k$ 周围作充分小圆周 $C_k$（互不相交且全含于 $C$ 内）。由复合闭路定理：

$$ \oint_C f(z)\,dz = \sum_{k=1}^{n}\oint_{C_k} f(z)\,dz $$

在 $C_k$ 的去心邻域内，$f(z)$ 的洛朗展开式为：

$$ f(z) = \cdots + \frac{c_{-1}^{(k)}}{z-z_k} + c_0^{(k)} + c_1^{(k)}(z-z_k) + \cdots $$

逐项积分。由 $\displaystyle\oint_{C_k}(z-z_k)^m\,dz = \begin{cases}2\pi i,&m=-1\\0,&m\neq -1\end{cases}$，只有 $m=-1$ 项留下：

$$ \oint_{C_k} f(z)\,dz = 2\pi i\cdot c_{-1}^{(k)} = 2\pi i\,\operatorname{Res}[f,z_k] $$

求和即得留数定理。本题 $C$ 内仅有一个奇点 $z=a$，故 $\displaystyle\oint_C f\,dz = 2\pi i\cdot\frac{1}{2a} = \frac{\pi i}{a}$。
:::

* * *

#### 例题 18：计算 $\displaystyle\oint_C \frac{dz}{(z^2-1)(z^3-1)}$，$C: \lvert z \rvert = r < 1$"

**解：**

将分母因式分解：

$$ \frac{1}{(z^2-1)(z^3-1)} = \frac{1}{(z-1)(z+1)(z-1)(z^2+z+1)} = \frac{1}{(z-1)^2(z+1)(z^2+z+1)} $$

奇点：$z = 1$（二阶极点），$z = -1$（一阶极点），$z = \dfrac{-1 \pm i\sqrt{3}}{2}$（一阶极点）。

由于 $\lvert z \rvert = r < 1$，**所有奇点的模都等于 1**（$\lvert 1 \rvert = 1$，$\lvert -1 \rvert = 1$，$\lvert (-1 \pm i\sqrt{3})/2 \rvert = 1$），全部在圆外。

$f(z)$ 在 $\lvert z \rvert \leq r < 1$ 内解析，由柯西积分定理：

$$ \oint_C f(z)\,dz = 0 $$

:::derivation
**推导过程（柯西-古萨基本定理 $\oint_C f(z)\,dz = 0$）：**

设 $f(z) = u + iv$ 在单连通区域 $D$ 内解析，$C$ 为 $D$ 内任一闭曲线。

由复积分与线积分的关系：

$$ \oint_C f(z)\,dz = \oint_C (u\,dx - v\,dy) + i\oint_C (v\,dx + u\,dy) $$

对两个实线积分应用格林公式 $\oint_C P\,dx + Q\,dy = \iint_D\!\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dx\,dy$：

- 第一个：$P = u,\ Q = -v$，被积式 $\dfrac{\partial(-v)}{\partial x} - \dfrac{\partial u}{\partial y} = -v_x - u_y$；
- 第二个：$P = v,\ Q = u$，被积式 $u_x - v_y$。

由 C-R 方程 $u_x = v_y$、$u_y = -v_x$，两个被积式均为 $0$，故：

$$ \oint_C (u\,dx - v\,dy) = 0,\qquad \oint_C (v\,dx + u\,dy) = 0 $$

从而 $\oint_C f(z)\,dz = 0$。（古萨的贡献在于去掉了"导数连续"的额外假设。）

本题所有奇点模均为 $1$，而 $\lvert z\rvert = r < 1$，故 $C$ 内无奇点，$f$ 在 $C$ 内解析，积分 $= 0$。
:::

> **提醒**：留数定理的基础是判断奇点是否在围道内。若围道内无奇点，积分直接为零。

* * *

#### 例题 19：计算 $\displaystyle\oint_C \frac{dz}{(z^2+1)(z^2+4)}$，$C: \lvert z \rvert = \frac{3}{2}$

**解：**

被积函数 $f(z) = \dfrac{1}{(z^2+1)(z^2+4)} = \dfrac{1}{(z+i)(z-i)(z+2i)(z-2i)}$。

奇点：$z = \pm i$，$z = \pm 2i$。

在圆周 $\lvert z \rvert = 3/2$ 内：$\lvert i \rvert = 1 < 3/2$，$\lvert -i \rvert = 1 < 3/2$；而 $\lvert 2i \rvert = 2 > 3/2$，$\lvert -2i \rvert = 2 > 3/2$。

故 $z = i$ 和 $z = -i$ 在圆内，$z = \pm 2i$ 在圆外。

计算各留数：

在 $z = i$ 处：

$$ \operatorname{Res}(f, i) = \lim_{z \to i} (z-i)f(z) = \frac{1}{(2i)(i^2+4)} = \frac{1}{2i \cdot 3} = \frac{1}{6i} = -\frac{i}{6} $$

在 $z = -i$ 处：

$$ \operatorname{Res}(f, -i) = \lim_{z \to -i} (z+i)f(z) = \frac{1}{(-2i)((-i)^2+4)} = \frac{1}{-2i \cdot 3} = -\frac{1}{6i} = \frac{i}{6} $$

由留数定理：

$$ \oint_C f(z)\,dz = 2\pi i\left[\operatorname{Res}(f,i) + \operatorname{Res}(f,-i)\right] = 2\pi i\left[-\frac{i}{6} + \frac{i}{6}\right] = 0 $$

:::derivation
**推导过程（多奇点留数定理 + 对称性）：**

被积函数 $f(z) = \dfrac{1}{(z^2+1)(z^2+4)}$ 是 $z$ 的**偶函数**：$f(-z) = f(z)$。

其奇点成对出现：$z = i$ 与 $z = -i$（均在 $C$ 内），$z = 2i$ 与 $z = -2i$（均在 $C$ 外）。

对偶函数的成对奇点 $z_0$ 与 $-z_0$，留数满足 $\operatorname{Res}(f, -z_0) = -\operatorname{Res}(f, z_0)$（因 $f$ 偶，洛朗主部关于 $z \to -z$ 反号）。验证：

$$ \operatorname{Res}(f,i) = \frac{1}{(2i)(i^2+4)} = \frac{1}{2i\cdot 3} = -\frac{i}{6} $$

$$ \operatorname{Res}(f,-i) = \frac{1}{(-2i)((-i)^2+4)} = \frac{1}{-2i\cdot 3} = \frac{i}{6} $$

二者互为相反数，求和为零。由留数定理：

$$ \oint_C f\,dz = 2\pi i\sum\operatorname{Res} = 2\pi i\cdot 0 = 0 $$

**结论**：偶函数沿关于原点对称的围道积分，若围道内奇点成对且无原点奇点，则积分必为零；奇函数类似（奇点成对留数同号，积分非零）。
:::

* * *

#### 例题 20：计算 $\displaystyle\int_{-\pi i}^{3\pi i} e^{2z}\,dz$

**解：**

$e^{2z}$ 在全平面解析，积分与路径无关。先求原函数：

$$ \int e^{2z}\,dz = \frac{1}{2}e^{2z} $$

再代入积分上下限：

$$ \begin{aligned}\int_{-\pi i}^{3\pi i} e^{2z}\,dz &= \frac{1}{2}\left[e^{6\pi i} - e^{-2\pi i}\right] \\&= \frac{1}{2}\bigl[\cos(6\pi) + i\sin(6\pi) - \cos(-2\pi) - i\sin(-2\pi)\bigr] \\&= \frac{1}{2}[1 + 0 - 1 + 0] = 0\end{aligned} $$

* * *

#### 例题 21：计算 $\displaystyle\int_1^i \operatorname{ch}(3z)\,dz$

**解：**

$\operatorname{ch}(3z)$ 在全平面解析。先求原函数：

$$ \int \operatorname{ch}(3z)\,dz = \frac{1}{3}\operatorname{sh}(3z) $$

再代入积分上下限：

$$ \int_1^i \operatorname{ch}(3z)\,dz = \frac{1}{3}\bigl[\operatorname{sh}(3i) - \operatorname{sh}(3)\bigr] $$

利用关系 $\operatorname{sh}(ix) = i\sin x$，得 $\operatorname{sh}(3i) = i\sin(3)$，所以：

$$ \int_1^i \operatorname{ch}(3z)\,dz = \frac{1}{3}\bigl[i\sin(3) - \operatorname{sh}(3)\bigr] = -\frac{\operatorname{sh}(3)}{3} + i\frac{\sin(3)}{3} $$

:::derivation
**推导过程（双曲函数与三角函数的关系 $\operatorname{sh}(ix) = i\sin x$、$\operatorname{ch}(ix) = \cos x$）：**

由定义 $\operatorname{sh} z = \dfrac{e^z - e^{-z}}{2}$，令 $z = ix$（$x \in \mathbb{R}$）：

$$ \operatorname{sh}(ix) = \frac{e^{ix} - e^{-ix}}{2} $$

由欧拉公式 $e^{ix} = \cos x + i\sin x$，$e^{-ix} = \cos x - i\sin x$，相减：

$$ e^{ix} - e^{-ix} = 2i\sin x \;\Rightarrow\; \operatorname{sh}(ix) = \frac{2i\sin x}{2} = i\sin x $$

同理 $\operatorname{ch}(ix) = \dfrac{e^{ix} + e^{-ix}}{2} = \dfrac{2\cos x}{2} = \cos x$。

反过来有 $\sin(ix) = i\,\operatorname{sh}(x)$、$\cos(ix) = \operatorname{ch}(x)$（用 $\sin z = \dfrac{e^{iz}-e^{-iz}}{2i}$ 令 $z = ix$ 即得）。

本题需算 $\operatorname{sh}(3i)$：$\operatorname{sh}(3i) = i\sin 3$，故：

$$ \int_1^i \operatorname{ch}(3z)\,dz = \frac{1}{3}[\operatorname{sh}(3i) - \operatorname{sh}(3)] = \frac{1}{3}[i\sin 3 - \operatorname{sh} 3] $$
:::

> **注意**：双曲函数与三角函数的关系 $\operatorname{sh}(ix) = i\sin x$、$\operatorname{ch}(ix) = \cos x$ 是处理虚数自变量的关键。

* * *

### 5.3 洛朗级数展开

#### 例题 22：将 $\dfrac{1}{(z-1)(z-2)}$ 在指定圆环域内展开成洛朗级数

**（1）$0 < \lvert z-1 \rvert < 1$**

**解：**

$$ \frac{1}{(z-1)(z-2)} = \frac{1}{z-1} \cdot \frac{1}{z-2} $$

将 $z-2$ 改写为：

$$ z-2 = (z-1)-1 = -[1 - (z-1)] $$

于是：

$$ \frac{1}{z-2} = -\frac{1}{1 - (z-1)} = -\sum_{n=0}^{\infty} (z-1)^n,\quad \lvert z-1 \rvert < 1 $$

所以：

$$ f(z) = -\frac{1}{z-1} \sum_{n=0}^{\infty} (z-1)^n = -\sum_{n=0}^{\infty} (z-1)^{n-1} = -\frac{1}{z-1} - 1 - (z-1) - (z-1)^2 - \cdots $$

**（2）$1 < \lvert z-2 \rvert < +\infty$**

**解：**

令 $w = z-2$，则 $\lvert w \rvert > 1$，且 $z-1 = w+1 = w\left(1 + \dfrac{1}{w}\right)$。

于是：

$$
\begin{aligned}\frac{1}{(z-1)(z-2)} &= \frac{1}{w \cdot w\left(1 + \dfrac{1}{w}\right)} \\&= \frac{1}{w^2} \cdot \frac{1}{1 + \dfrac{1}{w}} \\&= \frac{1}{w^2} \sum_{n=0}^{\infty} (-1)^n \frac{1}{w^n} = \sum_{n=0}^{\infty} (-1)^n \frac{1}{w^{n+2}} \\&= \frac{1}{w^2} - \frac{1}{w^3} + \frac{1}{w^4} - \frac{1}{w^5} + \cdots \\&= \frac{1}{(z-2)^2} - \frac{1}{(z-2)^3} + \frac{1}{(z-2)^4} - \cdots\end{aligned}
$$

:::derivation
**推导过程（外圆环 $|z-z_0|>r$ 的洛朗展开法）：**

洛朗展开的关键：根据展开区域，把函数凑成几何级数 $\dfrac{1}{1-t} = \sum t^n$，要求 $\lvert t\rvert < 1$。

- **内圆环** $|z-z_0|<r$：直接以 $(z-z_0)$ 为变量，得泰勒级数（仅正幂项）。
- **外圆环** $|z-z_0|>r$：$(z-z_0)$ 模较大，应取 $t = \dfrac{c}{z-z_0}$（模小于 $1$），展开后产生**负幂项**。

本题展开中心 $z_0 = 2$，区域 $1 < |z-2| < \infty$。令 $w = z - 2$（$|w|>1$），则 $z - 1 = w + 1 = w\!\left(1 + \dfrac{1}{w}\right)$。

于是：

$$ \frac{1}{(z-1)(z-2)} = \frac{1}{w\cdot w(1+1/w)} = \frac{1}{w^2}\cdot\frac{1}{1+1/w} $$

因 $|w|>1 \Rightarrow |1/w|<1$，可令 $t = -1/w$，套用 $\dfrac{1}{1-t} = \sum t^n$：

$$ \frac{1}{1+1/w} = \frac{1}{1-(-1/w)} = \sum_{n=0}^{\infty}\left(-\frac{1}{w}\right)^n = \sum_{n=0}^{\infty}\frac{(-1)^n}{w^n} $$

代回：

$$ f(z) = \frac{1}{w^2}\sum_{n=0}^{\infty}\frac{(-1)^n}{w^n} = \sum_{n=0}^{\infty}\frac{(-1)^n}{w^{n+2}} = \frac{1}{w^2} - \frac{1}{w^3} + \frac{1}{w^4} - \cdots $$

换回 $z$：$f(z) = \dfrac{1}{(z-2)^2} - \dfrac{1}{(z-2)^3} + \dfrac{1}{(z-2)^4} - \cdots$。该级数仅含负幂项（无正幂项），符合外圆环展开的特征。
:::

> **技巧**：洛朗展开的关键是将函数变形为以 $(z-z_0)$ 为变量的几何级数，注意区分展开区域：$\lvert z-z_0 \rvert < r$ 对应泰勒级数（负幂次项仅在 $n=0$ 时出现），$\lvert z-z_0 \rvert > r$ 对应主要含负幂次的洛朗级数。

* * *

## 六、 总结与注意事项

### 6.1 核心公式速查

| 概念  | 公式  | 说明  |
| --- | --- | --- |
| 复数指数形式 | $z = \lvert z \rvert e^{i\theta}$ | 沟通代数与三角的桥梁 |
| 柯西-黎曼条件 | $\dfrac{\partial u}{\partial x} = \dfrac{\partial v}{\partial y}$，$\dfrac{\partial u}{\partial y} = -\dfrac{\partial v}{\partial x}$ | 解析函数的核心判别条件 |
| 复对数 | $\operatorname{Ln}z = \ln\lvert z \rvert + i\operatorname{Arg}z$ | 多值函数，注意辐角的多值性 |
| 柯西积分定理 | $\displaystyle\oint_C f(z)\,dz = 0$（$f$ 在 $C$ 内解析） | 闭曲线积分为零的条件 |
| 柯西积分公式 | $\displaystyle\oint_C \frac{f(z)}{z-z_0}\,dz = 2\pi i f(z_0)$ | 用边界值表示内部值 |
| 留数定理 | $\displaystyle\oint_C f(z)\,dz = 2\pi i\sum_k \operatorname{Res}(f, z_k)$ | 将围道积分化为留数之和 |
| 一阶极点留数 | $\operatorname{Res}(f, z_0) = \lim\limits_{z \to z_0} (z-z_0)f(z)$ | 最常用的留数计算公式 |
| 几何级数 | $\dfrac{1}{1-w} = \sum_{n=0}^{\infty} w^n$，$\lvert w \rvert < 1$ | 幂级数和洛朗展开的基础 |

### 6.2 易错点提醒

1. **辐角的多值性**：$\operatorname{Arg}z$ 是多值的，相角相差 $2\pi$ 的倍数。求复对数、复幂时注意 $+2k\pi$ 不可遗漏。
  
2. **解析 vs 可导**：可导只在孤立的点或直线上，而解析要求在某个**区域**内处处可导。例题 8 中 $f(z)$ 在直线上可导但不解析，就是典型例子。
  
3. **C-R 条件是必要条件非充分条件**：需要同时验证 $u$、$v$ 的可微性。但若已预知 $u$、$v$ 一阶偏导连续，则 C-R 条件成为充要条件。
  
4. **洛朗展开的区域适应性**：同一函数在不同圆环域（$0<\lvert z-z_0\rvert<r$ 与 $\lvert z-z_0\rvert>r$）的展开式不同，展开前务必确认展开区域。
  
5. **奇点在围道上的处理**：若奇点恰好在积分路径上，需用主值积分或修改围道避开（如例题 17 中的 $z=a$ 在边界上）。
  
6. **留数计算中的符号**：分母因式分解后计算 $(z-z_0)f(z)$ 的极限时，注意代入后不要漏掉符号。
  

### 6.3 解题要点

* **求复数各种表示**：先化标准形式（分母实数化），再提取实部虚部，模为 $\sqrt{a^2+b^2}$，辐角注意象限。
* **判断解析性**：写出 $u$、$v$ → 求四个偏导 → 验证 C-R 条件 → 判断偏导连续性。
* **复变积分**：先判断被积函数是否解析 → 解析则用原函数法（路径无关）；非解析则用留数定理。
* **幂级数展开**：以 $\dfrac{1}{1-w}$ 为基本型，通过代数变形、求导、积分得到目标展开式。
* **留数法算积分**：找所有奇点 → 判断哪些在围道内 → 计算各留数 → 代入 $2\pi i\sum\operatorname{Res}$。
* **洛朗展开**：确定展开中心 $z_0$ 和展开区域 → 将函数拆分为 $\dfrac{1}{z-z_0}$ 与「好部分」→ 将好部分展成几何级数。


