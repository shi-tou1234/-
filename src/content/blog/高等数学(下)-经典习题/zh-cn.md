---
title: 高等数学(下) 经典习题
pubDate: 2026-06-15T09:04:00.000Z
updatedDate: 2026-06-15T09:05:04.354Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 高数
slugId: 高等数学(下)-经典习题
---

# 高等数学(下) 经典习题

## 第八章 多元函数微分学

### 一、极限

* * *

**1. 求极限：$\displaystyle\lim_{(x,y)\to(0,0)} \dfrac{x^2y}{x^2+y^2}$**

**解：**

利用不等式放缩法。

首先，注意到：$$|x^2y| = x^2|y|$$

由于 $x^2 ≤ x^2 + y^2$，所以：

$$\left|\frac{x^2y}{x^2+y^2}\right| = \frac{x^2|y|}{x^2+y^2} ≤ \frac{(x^2+y^2)|y|}{x^2+y^2} = |y|$$

当 $(x,y) → (0,0)$ 时，$|y| → 0$。

由夹逼准则：

$$0 ≤ \left|\frac{x^2y}{x^2+y^2}\right| ≤ |y| → 0$$

因此：

$$\lim_{(x,y)→(0,0)} \frac{x^2y}{x^2+y^2} = 0$$

* * *

**2. 求极限：$\displaystyle\lim_{(x,y)\to(0,0)} (1-2xy)^{1/(2xy)}$**

**解：**

令 $t = 2xy$，当 $(x,y) → (0,0)$ 时，$t → 0$。

原式变为：

$$\lim_{t→0} (1-t)^{1/t}$$

令 $u = -t$，则当 $t → 0$ 时，$u → 0$：

$$\lim_{u→0} (1+u)^{-1/u} = \left[\lim_{u→0}(1+u)^{1/u}\right]^{-1} = e^{-1} = \frac{1}{e}$$

因此：

$$\lim_{(x,y)→(0,0)} (1-2xy)^{1/(2xy)} = \frac{1}{e}$$

* * *

**3. 讨论极限 $\displaystyle\lim_{(x,y)\to(0,0)} \dfrac{2xy}{x^2+y^2}$ 的存在性**

**解：**

考虑沿不同路径趋近原点。

**路径1：** 沿 $y = kx$（过原点的直线）趋近：

$$\lim_{x→0} \frac{2x·kx}{x^2+(kx)^2} = \lim_{x→0} \frac{2kx^2}{x^2(1+k^2)} = \frac{2k}{1+k^2}$$

该极限值依赖于 $k$ 的取值：

* 当 $k = 0$（沿x轴）时，极限为 $0$
* 当 $k = 1$（沿 $y = x$）时，极限为 $1$
* 当 $k = -1$（沿 $y = -x$）时，极限为 $-1$

由于沿不同路径得到的极限值不同，因此该极限**不存在**。

* * *

### 二、偏导数

* * *

**4. 设 $z = x^2y^2 + φ(x^2+y^2)$，求 $∂^2z/∂x∂y$**

**解：**

先求一阶偏导数：

$$\frac{∂z}{∂x} = 2xy^2 + φ'(x^2+y^2)·2x = 2xy^2 + 2xφ'(x^2+y^2)$$

再对 $y$ 求偏导：

$$\frac{∂^2z}{∂x∂y} = \frac{∂}{∂y}\left[2xy^2 + 2xφ'(x^2+y^2)\right]$$

$$= 4xy + 2x·φ''(x^2+y^2)·2y$$

$$= 4xy + 4xy·φ''(x^2+y^2)$$

$$= 4xy\left[1 + φ''(x^2+y^2)\right]$$

* * *

**5. 设 $z = f(x^2y^2, x^2+y^2)$，求 $∂^2z/∂x∂y$**

**解：**

设 $u = x^2y^2$，$v = x^2+y^2$，则 $z = f(u,v)$。

**一阶偏导数：**

$$\frac{∂z}{∂x} = f_1·\frac{∂u}{∂x} + f_2·\frac{∂v}{∂x} = f_1·2xy^2 + f_2·2x$$

其中 $f_1 = \frac{∂f}{∂u}$，$f_2 = \frac{∂f}{∂v}$。

**二阶混合偏导数：**

$$\frac{∂^2z}{∂x∂y} = \frac{∂}{∂y}\left[f_1·2xy^2 + f_2·2x\right]$$

对第一项：$$\frac{∂}{∂y}(f_1·2xy^2) = \frac{∂f_1}{∂y}·2xy^2 + f_1·4xy$$

其中：$$\frac{∂f_1}{∂y} = f_{11}·\frac{∂u}{∂y} + f_{12}·\frac{∂v}{∂y} = f_{11}·2x^2y + f_{12}·2y$$

所以：$$\frac{∂}{∂y}(f_1·2xy^2) = (f_{11}·2x^2y + f_{12}·2y)·2xy^2 + f_1·4xy$$$$= 4x^3y^3f_{11} + 4xy^3f_{12} + 4xyf_1$$

对第二项：$$\frac{∂}{∂y}(f_2·2x) = \frac{∂f_2}{∂y}·2x = (f_{21}·2x^2y + f_{22}·2y)·2x$$$$= 4x^3yf_{21} + 4xyf_{22}$$

合并（假设 $f$ 具有连续二阶偏导数，$f_{12} = f_{21}$）：

$$\frac{∂^2z}{∂x∂y} = 4x^3y^3f_{11} + (4xy^3 + 4x^3y)f_{12} + 4xyf_{22} + 4xyf_1$$

$$= 4xy\left[x^2y^2f_{11} + (y^2+x^2)f_{12} + f_{22} + f_1\right]$$

* * *

**6. 设 $x^2 + y^2 + e^z + 2z = 3$，求 $∂^2z/∂x∂y$**

**解：**

设 $F(x,y,z) = x^2 + y^2 + e^z + 2z - 3 = 0$

**求一阶偏导数：**

对 $x$ 求偏导（视 $z = z(x,y)$）：$$2x + e^z\frac{∂z}{∂x} + 2\frac{∂z}{∂x} = 0$$

$$\frac{∂z}{∂x} = -\frac{2x}{e^z + 2}$$

同理：$$\frac{∂z}{∂y} = -\frac{2y}{e^z + 2}$$

**求二阶混合偏导数：**

$$\frac{∂^2z}{∂x∂y} = \frac{∂}{∂y}\left(-\frac{2x}{e^z + 2}\right) = -2x·\frac{∂}{∂y}\left(\frac{1}{e^z + 2}\right)$$

$$= -2x·\left(-\frac{e^z·\frac{∂z}{∂y}}{(e^z + 2)^2}\right) = \frac{2xe^z·\frac{∂z}{∂y}}{(e^z + 2)^2}$$

代入 $\frac{∂z}{∂y} = -\frac{2y}{e^z + 2}$：

$$\frac{∂^2z}{∂x∂y} = \frac{2xe^z·\left(-\frac{2y}{e^z + 2}\right)}{(e^z + 2)^2} = -\frac{4xye^z}{(e^z + 2)^3}$$

* * *

**7. 已知方程组：**$$\begin{cases} x^2 + y^2 + u + 2v - 3 = 0 \\ x + 2y - 3u - v^2 + 1 = 0 \end{cases}$$ **求 $∂u/∂x, ∂v/∂y$**

**解：**

这是由两个方程确定的隐函数组 $u = u(x,y), v = v(x,y)$。

**求 $∂u/∂x, ∂v/∂x$：**

对两个方程关于 $x$ 求偏导：

$$\begin{cases} 2x + \frac{∂u}{∂x} + 2\frac{∂v}{∂x} = 0 \\ 1 - 3\frac{∂u}{∂x} - 2v\frac{∂v}{∂x} = 0 \end{cases}$$

即：$$\begin{cases} \frac{∂u}{∂x} + 2\frac{∂v}{∂x} = -2x \\ -3\frac{∂u}{∂x} - 2v\frac{∂v}{∂x} = -1 \end{cases}$$

由克莱姆法则，系数行列式：$$D = \begin{vmatrix} 1 & 2 \\ -3 & -2v \end{vmatrix} = -2v + 6 = 6 - 2v$$

$$D_1 = \begin{vmatrix} -2x & 2 \\ -1 & -2v \end{vmatrix} = 4xv + 2$$

$$D_2 = \begin{vmatrix} 1 & -2x \\ -3 & -1 \end{vmatrix} = -1 - 6x$$

因此：$$\frac{∂u}{∂x} = \frac{D_1}{D} = \frac{4xv + 2}{6 - 2v} = \frac{2xv + 1}{3 - v}$$

$$\frac{∂v}{∂x} = \frac{D_2}{D} = \frac{-1 - 6x}{6 - 2v} = \frac{-1 - 6x}{2(3 - v)}$$

**求 $∂u/∂y, ∂v/∂y$：**

对两个方程关于 $y$ 求偏导：

$$\begin{cases} 2y + \frac{∂u}{∂y} + 2\frac{∂v}{∂y} = 0 \\ 2 - 3\frac{∂u}{∂y} - 2v\frac{∂v}{∂y} = 0 \end{cases}$$

即：$$\begin{cases} \frac{∂u}{∂y} + 2\frac{∂v}{∂y} = -2y \\ -3\frac{∂u}{∂y} - 2v\frac{∂v}{∂y} = -2 \end{cases}$$

$$D_1' = \begin{vmatrix} -2y & 2 \\ -2 & -2v \end{vmatrix} = 4vy + 4 = 4(vy + 1)$$

$$D_2' = \begin{vmatrix} 1 & -2y \\ -3 & -2 \end{vmatrix} = -2 - 6y$$

因此：$$\frac{∂u}{∂y} = \frac{D_1'}{D} = \frac{4(vy + 1)}{6 - 2v} = \frac{2(vy + 1)}{3 - v}$$

$$\frac{∂v}{∂y} = \frac{D_2'}{D} = \frac{-2 - 6y}{6 - 2v} = \frac{-1 - 3y}{3 - v}$$

* * *

### 三、全微分

* * *

**8. 求 $z = x^2y^2 + φ(x^2+y^2)$ 的全微分**

**解：**

$$\frac{∂z}{∂x} = 2xy^2 + 2xφ'(x^2+y^2)$$

$$\frac{∂z}{∂y} = 2x^2y + 2yφ'(x^2+y^2)$$

全微分为：

$$dz = \frac{∂z}{∂x}dx + \frac{∂z}{∂y}dy$$

$$= \left[2xy^2 + 2xφ'(x^2+y^2)\right]dx + \left[2x^2y + 2yφ'(x^2+y^2)\right]dy$$

$$= 2xy(ydx + xdy) + 2φ'(x^2+y^2)(xdx + ydy)$$

* * *

**9. 已知 $df(x,y) = (y + b\sin 2x)dx + (ax + \cos^2x)dy$，求 $a, b$ 的值**

**解：**

由全微分条件，若 $df = Pdx + Qdy$，则必须有：

$$\frac{∂P}{∂y} = \frac{∂Q}{∂x}$$

这里：$$P = y + b\sin 2x, \quad Q = ax + \cos^2x$$

计算：$$\frac{∂P}{∂y} = 1$$

$$\frac{∂Q}{∂x} = a + 2\cos x·(-\sin x) = a - \sin 2x$$

由全微分条件：$$1 = a - \sin 2x$$

此等式应对所有 $x$ 成立，因此：

* 比较常数项：$a = 1$
* 比较 $\sin 2x$ 的系数：$0 = -1$，矛盾？

重新检查：实际上，若 $df$ 是某函数的全微分，则 $∂P/∂y = ∂Q/∂x$ 必须恒等成立。

$$\frac{∂Q}{∂x} = a - 2\cos x \sin x = a - \sin 2x$$

要使其等于 $1$（常数），需要 $a = 1$ 且 $\sin 2x$ 的系数为 $0$。

但 $-\sin 2x$ 不可能恒为 $0$，除非题目有误或需要重新理解。

重新考虑：$\cos^2x = \frac{1 + \cos 2x}{2}$，所以：

$$Q = ax + \frac{1 + \cos 2x}{2}$$

$$\frac{∂Q}{∂x} = a - \sin 2x$$

若要求 $∂P/∂y = ∂Q/∂x$，即 $1 = a - \sin 2x$，这不可能对所有 $x$ 成立。

检查题目：可能 $Q = ax + \cos^2x$ 中 $x$ 与 $y$ 的关系。或者可能是 $Q = ax + \cos 2x$？

假设题目无误，另一种理解：若 $f$ 存在，则 $∂^2f/∂x∂y = ∂^2f/∂y∂x$：

$$\frac{∂P}{∂y} = 1, \quad \frac{∂Q}{∂x} = a - \sin 2x$$

令二者相等：$1 = a - \sin 2x$，这要求 $a = 1$ 且 $\sin 2x = 0$ 对所有 $x$ 成立，不可能。

可能题目中 $Q = ax + \cos 2x$？若是这样：$$\frac{∂Q}{∂x} = a - 2\sin 2x$$

仍不匹配。若 $P = y + b\sin x$，则 $∂P/∂y = 1$，仍不匹配。

若 $Q = ax + \cos^2 y$？则 $∂Q/∂x = a$，此时 $a = 1$，$b$ 任意。

按照题目原样，最可能的答案是 $a = 1$，且题目可能有印刷问题。若强行令 $∂P/∂y = ∂Q/∂x$ 在某种意义下成立，则 $a = 1$。

对于 $b$，由于 $b$ 只出现在 $P$ 中而不影响 $∂P/∂y$，需要更多信息。

实际上，若 $f$ 存在：$$f(x,y) = \int P dx = xy - \frac{b}{2}\cos 2x + g(y)$$

$$\frac{∂f}{∂y} = x + g'(y) = Q = ax + \cos^2x$$

所以 $x + g'(y) = ax + \cos^2x$，即 $g'(y) = (a-1)x + \cos^2x$。

左端与 $y$ 有关，右端与 $x$ 有关，要使其成立，需要 $a = 1$ 且 $g'(y) = \cos^2x$，但 $\cos^2x$ 不是 $y$ 的函数。

因此，严格来说，按照题目所给，不存在这样的 $a, b$ 使得 $df$ 是全微分，除非题目有印刷错误。

**最可能的修正：** 若 $Q = ax + \cos^2y$，则 $∂Q/∂x = a = 1$，且 $g'(y) = \cos^2y$，$g(y) = \frac{y}{2} + \frac{\sin 2y}{4} + C$，此时 $a = 1$，$b$ 任意（或题目可能要求 $b = 0$）。

若 $Q = ax + \cos 2y$，同样 $a = 1$。

按照标准教材常见题型，**答案为 $a = 1, b = 0$**（假设 $b\sin 2x$ 项应为 $0$ 或题目有误）。

* * *

**10. 求 $u = x^2y^2z + φ(x^2+y^2+2z)$ 的全微分**

**解：**

$$\frac{∂u}{∂x} = 2xy^2z + φ'(x^2+y^2+2z)·2x$$

$$\frac{∂u}{∂y} = 2x^2yz + φ'(x^2+y^2+2z)·2y$$

$$\frac{∂u}{∂z} = x^2y^2 + φ'(x^2+y^2+2z)·2$$

全微分：

$$du = \frac{∂u}{∂x}dx + \frac{∂u}{∂y}dy + \frac{∂u}{∂z}dz$$

$$= \left[2xy^2z + 2xφ'(x^2+y^2+2z)\right]dx + \left[2x^2yz + 2yφ'(x^2+y^2+2z)\right]dy + \left[x^2y^2 + 2φ'(x^2+y^2+2z)\right]dz$$

$$= 2xyz(ydx + xdy) + x^2y^2dz + 2φ'(x^2+y^2+2z)(xdx + ydy + dz)$$

* * *

### 四、极值

* * *

**11. 求 $f(x,y) = e^{2x}(x^2+y^2+2x)$ 的极值**

**解：**

**Step 1：求驻点**

$$\frac{∂f}{∂x} = 2e^{2x}(x^2+y^2+2x) + e^{2x}(2x+2) = e^{2x}(2x^2+2y^2+4x+2x+2)$$

$$= e^{2x}(2x^2 + 2y^2 + 6x + 2) = 0$$

由于 $e^{2x} > 0$，所以：$$2x^2 + 2y^2 + 6x + 2 = 0$$$$x^2 + y^2 + 3x + 1 = 0 \quad (1)$$

$$\frac{∂f}{∂y} = e^{2x}·2y = 0$$

所以 $y = 0$。

代入 (1)：$$x^2 + 3x + 1 = 0$$

$$x = \frac{-3 ± \sqrt{9-4}}{2} = \frac{-3 ± \sqrt{5}}{2}$$

驻点为：$\left(\frac{-3+\sqrt{5}}{2}, 0\right)$ 和 $\left(\frac{-3-\sqrt{5}}{2}, 0\right)$。

**Step 2：二阶导数判别**

$$\frac{∂^2f}{∂x^2} = 2e^{2x}(2x^2+2y^2+6x+2) + e^{2x}(4x+6) = e^{2x}(4x^2+4y^2+16x+10)$$

$$\frac{∂^2f}{∂y^2} = 2e^{2x}$$

$$\frac{∂^2f}{∂x∂y} = e^{2x}·4y$$

在驻点处 $y = 0$：

$$A = \frac{∂^2f}{∂x^2} = e^{2x}(4x^2+16x+10)$$$$B = \frac{∂^2f}{∂x∂y} = 0$$$$C = \frac{∂^2f}{∂y^2} = 2e^{2x}$$

判别式 $Δ = AC - B^2 = 2e^{4x}(4x^2+16x+10)$

对于 $x = \frac{-3+\sqrt{5}}{2} ≈ -0.382$：

$$x^2 = \frac{14-6\sqrt{5}}{4} = \frac{7-3\sqrt{5}}{2}$$

$$4x^2 + 16x + 10 = 2(7-3\sqrt{5}) + 8(-3+\sqrt{5}) + 10$$$$= 14 - 6\sqrt{5} - 24 + 8\sqrt{5} + 10 = -6\sqrt{5} + 8\sqrt{5} = 2\sqrt{5} > 0$$

$Δ > 0$ 且 $A > 0$（因为 $C > 0$ 且 $Δ > 0$），所以是**极小值点**。

极小值：$$f\left(\frac{-3+\sqrt{5}}{2}, 0\right) = e^{-3+\sqrt{5}}\left(\frac{7-3\sqrt{5}}{2} + (-3+\sqrt{5})\right)$$

$$= e^{-3+\sqrt{5}}\left(\frac{7-3\sqrt{5}-6+2\sqrt{5}}{2}\right) = e^{-3+\sqrt{5}}·\frac{1-\sqrt{5}}{2}$$

对于 $x = \frac{-3-\sqrt{5}}{2} ≈ -2.618$：

$$4x^2 + 16x + 10 = 2(7+3\sqrt{5}) + 8(-3-\sqrt{5}) + 10$$$$= 14 + 6\sqrt{5} - 24 - 8\sqrt{5} + 10 = -2\sqrt{5} < 0$$

$Δ < 0$，所以该点**不是极值点**（是鞍点）。

**答案：** 函数在 $\left(\frac{-3+\sqrt{5}}{2}, 0\right)$ 处取得极小值 $e^{-3+\sqrt{5}}·\frac{1-\sqrt{5}}{2}$。

* * *

**12. 求 $f(x,y) = x^2 - y^2 + 2xy$ 在条件 $x^2 + y^2 + 2xy = 1$ 下的极值**

**解：**

约束条件可写为 $(x+y)^2 = 1$，即 $x + y = ±1$。

**方法：代入法**

令 $u = x + y$，$v = x - y$，则 $x = \frac{u+v}{2}$，$y = \frac{u-v}{2}$。

约束条件：$u^2 = 1$，即 $u = 1$ 或 $u = -1$。

目标函数：$$f = x^2 - y^2 + 2xy = (x+y)(x-y) + 2xy = uv + 2·\frac{u^2-v^2}{4} = uv + \frac{u^2-v^2}{2}$$

$$= \frac{2uv + u^2 - v^2}{2} = \frac{u^2 + 2uv - v^2}{2}$$

当 $u = 1$：$$f = \frac{1 + 2v - v^2}{2} = \frac{-(v-1)^2 + 2}{2} = -\frac{(v-1)^2}{2} + 1$$

最大值为 $1$（当 $v = 1$，即 $x = 1, y = 0$），无最小值（当 $v → ±∞$）。

当 $u = -1$：$$f = \frac{1 - 2v - v^2}{2} = \frac{-(v+1)^2 + 2}{2} = -\frac{(v+1)^2}{2} + 1$$

最大值为 $1$（当 $v = -1$，即 $x = -1, y = 0$）。

但注意约束条件 $(x+y)^2 = 1$ 并不限制 $v$，所以 $f$ 可以趋于 $-∞$。

若约束条件理解为 $x^2 + y^2 + 2xy = 1$ 且 $x, y$ 为实数，则：

由 $x + y = 1$：$f = x^2 - y^2 + 2xy = (x+y)(x-y) + 2xy = x - y + 2xy$。

令 $y = 1 - x$：$$f = x - (1-x) + 2x(1-x) = 2x - 1 + 2x - 2x^2 = -2x^2 + 4x - 1$$

$$= -2(x-1)^2 + 1$$

最大值为 $1$（当 $x = 1, y = 0$），无下界。

由 $x + y = -1$：$y = -1 - x$$$f = x - (-1-x) + 2x(-1-x) = 2x + 1 - 2x - 2x^2 = 1 - 2x^2$$

最大值为 $1$（当 $x = 0, y = -1$），无下界。

**若题目约束条件为 $x^2 + y^2 = 1$ 或 $x^2 + y^2 + 2xy ≤ 1$（有界区域），则需要重新理解。**

按照原题 $x^2 + y^2 + 2xy = 1$，即 $(x+y)^2 = 1$，这是两条直线，函数在这两条直线上：

* 在 $x + y = 1$ 上，$f = -2x^2 + 4x - 1$，最大值 $1$，无最小值
* 在 $x + y = -1$ 上，$f = 1 - 2x^2$，最大值 $1$，无最小值

**答案：** 极大值为 $1$，无极小值（或下确界为 $-∞$）。

* * *

### 五、空间曲线的切线与法平面

* * *

**13. 求曲线 $x = t, y = t^2, z = t^3 - 1$ 在对应于 $t = 1$ 点处的切线方程及法平面方程**

**解：**

当 $t = 1$ 时，点为 $(1, 1, 0)$。

切向量：$$\vec{T} = (x'(t), y'(t), z'(t)) = (1, 2t, 3t^2)$$

在 $t = 1$ 处：$$\vec{T} = (1, 2, 3)$$

**切线方程：**$$\frac{x-1}{1} = \frac{y-1}{2} = \frac{z-0}{3}$$

即：$$\frac{x-1}{1} = \frac{y-1}{2} = \frac{z}{3}$$

**法平面方程：**

法平面过点 $(1,1,0)$，法向量为切向量 $(1,2,3)$：

$$1·(x-1) + 2·(y-1) + 3·(z-0) = 0$$

$$x - 1 + 2y - 2 + 3z = 0$$

$$x + 2y + 3z - 3 = 0$$

* * *

**14. 求曲线 $\begin{cases} x^2 + y^2 + z - 3 = 0 \\ x + 2y - 2z + 1 = 0 \end{cases}$ 在对应于点 $(1,1,1)$ 处的切线方程及法平面方程**

**解：**

这是两曲面的交线。设 $F(x,y,z) = x^2 + y^2 + z - 3$，$G(x,y,z) = x + 2y - 2z + 1$。

切向量垂直于两个曲面的法向量：

$$\vec{n}_1 = ∇F = (2x, 2y, 1), \quad \vec{n}_2 = ∇G = (1, 2, -2)$$

在点 $(1,1,1)$：$$\vec{n}_1 = (2, 2, 1), \quad \vec{n}_2 = (1, 2, -2)$$

切向量：$$\vec{T} = \vec{n}_1 × \vec{n}_2 = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 2 & 1 \\ 1 & 2 & -2 \end{vmatrix}$$

$$= \vec{i}(-4-2) - \vec{j}(-4-1) + \vec{k}(4-2)$$

$$= (-6, 5, 2)$$

**切线方程：**$$\frac{x-1}{-6} = \frac{y-1}{5} = \frac{z-1}{2}$$

**法平面方程：**$$-6(x-1) + 5(y-1) + 2(z-1) = 0$$

$$-6x + 6 + 5y - 5 + 2z - 2 = 0$$

$$-6x + 5y + 2z - 1 = 0$$

或：$$6x - 5y - 2z + 1 = 0$$

* * *

### 六、方向导数与梯度

* * *

**15. 求 $f(x,y,z) = x^2 + y^2 + 2z + z^3$ 在点 $(1,1,1)$ 沿方向 $l = (2,3,1)$ 的方向导数**

**解：**

**Step 1：求梯度**

$$\frac{∂f}{∂x} = 2x, \quad \frac{∂f}{∂y} = 2y, \quad \frac{∂f}{∂z} = 2 + 3z^2$$

在点 $(1,1,1)$：$$\frac{∂f}{∂x} = 2, \quad \frac{∂f}{∂y} = 2, \quad \frac{∂f}{∂z} = 5$$

梯度：$$∇f = (2, 2, 5)$$

**Step 2：单位化方向向量**

$$|\vec{l}| = \sqrt{2^2 + 3^2 + 1^2} = \sqrt{4 + 9 + 1} = \sqrt{14}$$

单位向量：$$\vec{e}_l = \left(\frac{2}{\sqrt{14}}, \frac{3}{\sqrt{14}}, \frac{1}{\sqrt{14}}\right)$$

**Step 3：方向导数**

$$\frac{∂f}{∂l} = ∇f · \vec{e}_l = 2·\frac{2}{\sqrt{14}} + 2·\frac{3}{\sqrt{14}} + 5·\frac{1}{\sqrt{14}}$$

$$= \frac{4 + 6 + 5}{\sqrt{14}} = \frac{15}{\sqrt{14}} = \frac{15\sqrt{14}}{14}$$

* * *

**16. 求 $f(x,y,z) = x^2 + y^2 + 2z + z^3$ 在点 $(1,1,1)$ 的梯度**

**解：**

$$\frac{∂f}{∂x} = 2x = 2$$

$$\frac{∂f}{∂y} = 2y = 2$$

$$\frac{∂f}{∂z} = 2 + 3z^2 = 5$$

梯度：

$$\text{grad } f(1,1,1) = (2, 2, 5)$$

或写成：

$$\text{grad } f(1,1,1) = 2\vec{i} + 2\vec{j} + 5\vec{k}$$

* * *

## 第九章 重积分

### 二重积分

* * *

**17. 设 $f(x,y) = \sqrt{x^2+y^2} - \frac{2}{π}∬_{x^2+y^2≤1} f(x,y)dσ$，求 $f(x,y)$ 表达式**

**解：**

设 $I = ∬_{x^2+y^2≤1} f(x,y)dσ$（常数），则：

$$f(x,y) = \sqrt{x^2+y^2} - \frac{2}{π}I$$

两边在区域 $D: x^2+y^2 ≤ 1$ 上积分：

$$I = ∬_D \sqrt{x^2+y^2} dσ - \frac{2}{π}I · ∬_D dσ$$

计算 $∬_D \sqrt{x^2+y^2} dσ$（用极坐标）：

$$∬_D \sqrt{x^2+y^2} dσ = \int_0^{2π} dθ \int_0^1 r·r dr = 2π · \frac{1}{3} = \frac{2π}{3}$$

$∬_D dσ = π·1^2 = π$（单位圆面积）

所以：$$I = \frac{2π}{3} - \frac{2}{π}I · π = \frac{2π}{3} - 2I$$

$$3I = \frac{2π}{3}$$

$$I = \frac{2π}{9}$$

因此：

$$f(x,y) = \sqrt{x^2+y^2} - \frac{2}{π}·\frac{2π}{9} = \sqrt{x^2+y^2} - \frac{4}{9}$$

* * *

**18. 比较积分 $∬_{D: x+y≥1} (x+y)dσ$ 与 $∬_{D: x+y≥1} (x+y)^2dσ$ 的大小**

**解：**

在区域 $D$ 上，$x + y ≥ 1$。

当 $t ≥ 1$ 时，$t^2 ≥ t$（因为 $t^2 - t = t(t-1) ≥ 0$）。

所以在 $D$ 上，$(x+y)^2 ≥ x+y$。

由二重积分的保号性：

$$∬_D (x+y)^2 dσ ≥ ∬_D (x+y) dσ$$

且在 $D$ 的某些部分（如 $x+y > 1$ 的区域），严格有 $(x+y)^2 > x+y$。

因此：

$$∬_{D: x+y≥1} (x+y)dσ < ∬_{D: x+y≥1} (x+y)^2dσ$$

* * *

**19. 证明：$9π ≤ ∬_{D: x^2+y^2≤9} \frac{6}{1+2\cos^2x+3\sin^2y} dσ ≤ 54π$**

**解：**

区域 $D$ 是半径为 $3$ 的圆，面积 $= 9π$。

**求被积函数的上下界：**

分母：$1 + 2\cos^2x + 3\sin^2y$

由于 $0 ≤ \cos^2x ≤ 1$，$0 ≤ \sin^2y ≤ 1$：

**下界：** $1 + 2·0 + 3·0 = 1$（当 $\cos x = 0, \sin y = 0$ 时）

实际上，$\cos^2x ≥ 0$，$\sin^2y ≥ 0$，所以：

$$1 + 2\cos^2x + 3\sin^2y ≥ 1$$

因此：$$\frac{6}{1+2\cos^2x+3\sin^2y} ≤ 6$$

**上界：** $1 + 2·1 + 3·1 = 6$（当 $\cos^2x = 1, \sin^2y = 1$ 时）

所以：$$1 + 2\cos^2x + 3\sin^2y ≤ 6$$

因此：$$\frac{6}{1+2\cos^2x+3\sin^2y} ≥ \frac{6}{6} = 1$$

综上，在 $D$ 上：$$1 ≤ \frac{6}{1+2\cos^2x+3\sin^2y} ≤ 6$$

由积分保号性：

$$∬_D 1·dσ ≤ ∬_D \frac{6}{1+2\cos^2x+3\sin^2y} dσ ≤ ∬_D 6·dσ$$

$$9π ≤ ∬_D \frac{6}{1+2\cos^2x+3\sin^2y} dσ ≤ 6·9π = 54π$$

证毕。

* * *

**20. 计算 $∬_D (1+2x+xy \ln\frac{x^2+y^2}{1+x^2+y^2}) dσ$，其中 $D$ 为曲线 $x^2+y^2=1$ 围成的闭区域**

**解：**

区域 $D$ 关于 $x$ 轴和 $y$ 轴对称。

将被积函数拆分为三部分：

$$I = ∬_D 1·dσ + ∬_D 2x·dσ + ∬_D xy\ln\frac{x^2+y^2}{1+x^2+y^2} dσ$$

**第一部分：**$$∬_D 1·dσ = π·1^2 = π$$

**第二部分：**

$2x$ 关于 $x$ 是奇函数，区域 $D$ 关于 $y$ 轴对称，所以：$$∬_D 2x·dσ = 0$$

**第三部分：**

令 $g(x,y) = xy\ln\frac{x^2+y^2}{1+x^2+y^2}$

关于 $x$：$g(-x,y) = (-x)y\ln\frac{x^2+y^2}{1+x^2+y^2} = -g(x,y)$，是奇函数。

区域 $D$ 关于 $y$ 轴对称，所以：$$∬_D xy\ln\frac{x^2+y^2}{1+x^2+y^2} dσ = 0$$

（或者：关于 $y$ 也是奇函数，区域关于 $x$ 轴对称，积分也为 $0$）

**最终结果：**

$$I = π + 0 + 0 = π$$

* * *

### 21. 计算 $\iint_D (xy^2 + x^2y) \, d\sigma$，D 由直线 $y=2, y=x, y=2x$ 围成

**解：**

首先确定积分区域 D 的边界：

* 直线 $y = 2$
* 直线 $y = x$（即 $x = y$）
* 直线 $y = 2x$（即 $x = y/2$）

求交点：

* $y = x$ 与 $y = 2$ 交于点 $(2, 2)$
* $y = 2x$ 与 $y = 2$ 交于点 $(1, 2)$
* $y = x$ 与 $y = 2x$ 交于点 $(0, 0)$

区域 D 可以表示为：$y/2 \leq x \leq y$，$0 \leq y \leq 2$

$$\iint_D (xy^2 + x^2y) \, d\sigma = \int_0^2 dy \int_{y/2}^{y} (xy^2 + x^2y) \, dx$$

先计算内层积分：$$\int_{y/2}^{y} (xy^2 + x^2y) \, dx = \left[\frac{x^2y^2}{2} + \frac{x^3y}{3}\right]_{y/2}^{y}$$

$$= \left(\frac{y^4}{2} + \frac{y^4}{3}\right) - \left(\frac{y^4}{8} + \frac{y^4}{24}\right)$$

$$= \frac{5y^4}{6} - \frac{3y^4 + y^4}{24} = \frac{5y^4}{6} - \frac{4y^4}{24} = \frac{5y^4}{6} - \frac{y^4}{6} = \frac{4y^4}{6} = \frac{2y^4}{3}$$

再计算外层积分：$$\int_0^2 \frac{2y^4}{3} \, dy = \frac{2}{3} \cdot \frac{y^5}{5}\Big|_0^2 = \frac{2}{15} \cdot 32 = \frac{64}{15}$$

**答案：$\dfrac{64}{15}$**

* * *

### 22. 交换二重积分次序：$\int_0^1 dy \int_{1-y}^{1+y^2} f(x,y) \, dx$

**解：**

原积分区域由以下边界确定：

* $0 \leq y \leq 1$
* $1-y \leq x \leq 1+y^2$

分析边界曲线：

* $x = 1-y$（即 $y = 1-x$）
* $x = 1+y^2$
* $y = 0$ 和 $y = 1$

当 $y = 0$ 时，$x$ 从 1 到 1当 $y = 1$ 时，$x$ 从 0 到 2

需要找到 $x = 1-y$ 和 $x = 1+y^2$ 的交点：$1-y = 1+y^2 \Rightarrow y^2 + y = 0 \Rightarrow y(y+1) = 0$

在 $y \in [0,1]$ 内，交点在 $y = 0$，即点 $(1, 0)$

分析 x 的范围：

* 当 $0 \leq x \leq 1$ 时：$y$ 从 $1-x$ 到 1（因为 $x = 1-y$ 给出 $y = 1-x$，而 $x = 1+y^2 \geq 1$）
* 当 $1 \leq x \leq 2$ 时：$y$ 从 0 到 $\sqrt{x-1}$（因为 $x = 1+y^2$ 给出 $y = \sqrt{x-1}$）

验证：当 $x \in [0,1]$，由 $x = 1-y$ 得 $y = 1-x$，且 $y \leq 1$，所以 $1-x \leq y \leq 1$

当 $x \in [1,2]$，由 $x = 1+y^2$ 得 $y = \sqrt{x-1}$，且 $y \geq 0$，所以 $0 \leq y \leq \sqrt{x-1}$

**答案：**$$\int_0^1 dx \int_{1-x}^{1} f(x,y) \, dy + \int_1^2 dx \int_0^{\sqrt{x-1}} f(x,y) \, dy$$

* * *

### 23. 计算 $\int_1^3 dx \int_1^x \frac{\sin y}{3-y} \, dy$

**解：**

直接计算内层积分较困难，考虑交换积分次序。

原积分区域：$1 \leq x \leq 3$，$1 \leq y \leq x$

这等价于：$1 \leq y \leq 3$，$y \leq x \leq 3$

交换次序：$$\int_1^3 dx \int_1^x \frac{\sin y}{3-y} \, dy = \int_1^3 dy \int_y^3 \frac{\sin y}{3-y} \, dx$$

$$= \int_1^3 \frac{\sin y}{3-y} \cdot (3-y) \, dy = \int_1^3 \sin y \, dy$$

$$= -\cos y \Big|_1^3 = -\cos 3 + \cos 1 = \cos 1 - \cos 3$$

**答案：$\cos 1 - \cos 3$**

* * *

### 24. 计算 $I = \iint_D \frac{\sin y}{y} \, dxdy$，其中 D 由 $y=x$ 及 $y^2=x$ 所围成的平面区域

**解：**

求交点：$y = x$ 与 $y^2 = x$ 联立$y = y^2 \Rightarrow y(y-1) = 0 \Rightarrow y = 0$ 或 $y = 1$

交点为 $(0, 0)$ 和 $(1, 1)$

区域 D：在 $y \in [0, 1]$ 时，$y^2 \leq x \leq y$（因为 $y^2 \leq y$ 当 $0 \leq y \leq 1$）

$$I = \int_0^1 dy \int_{y^2}^{y} \frac{\sin y}{y} \, dx$$

$$= \int_0^1 \frac{\sin y}{y} \cdot (y - y^2) \, dy$$

$$= \int_0^1 \frac{\sin y}{y} \cdot y(1-y) \, dy = \int_0^1 (1-y)\sin y \, dy$$

用分部积分：$$\int (1-y)\sin y \, dy = -(1-y)\cos y - \int \cos y \, dy = -(1-y)\cos y - \sin y$$

（这里用分部积分：$u = 1-y$，$dv = \sin y \, dy$，则 $du = -dy$，$v = -\cos y$）

$$= (y-1)\cos y - \sin y \Big|_0^1$$

$$= [(1-1)\cos 1 - \sin 1] - [(0-1)\cos 0 - \sin 0]$$

$$= [0 - \sin 1] - [-1 - 0] = -\sin 1 + 1 = 1 - \sin 1$$

**答案：$1 - \sin 1$**

* * *

### 25. 计算 $\iint_D \sqrt{x^2+y^2} \, d\sigma$，其中 D 为曲线 $x^2+y^2 \leq 4, y > 0$ 及 x 轴围成的闭区域

**解：**

区域 D 是上半圆：$x^2 + y^2 \leq 4$，$y \geq 0$

采用极坐标：$x = r\cos\theta$，$y = r\sin\theta$，$d\sigma = r \, dr \, d\theta$

* $0 \leq r \leq 2$
* $0 \leq \theta \leq \pi$（上半平面）

$$\iint_D \sqrt{x^2+y^2} \, d\sigma = \int_0^{\pi} d\theta \int_0^2 r \cdot r \, dr$$

$$= \int_0^{\pi} d\theta \int_0^2 r^2 \, dr = \pi \cdot \frac{r^3}{3}\Big|_0^2 = \pi \cdot \frac{8}{3} = \frac{8\pi}{3}$$

**答案：$\dfrac{8\pi}{3}$**

* * *

### 26. 计算 $\iint_D \sqrt{x^2+y^2} \, d\sigma$，其中 D 为曲线 $x^2+y^2 \leq 2y, x > 0$ 及 y 轴围成的闭区域

**解：**

将 $x^2 + y^2 \leq 2y$ 化为标准形式：$x^2 + (y-1)^2 \leq 1$

这是圆心在 $(0, 1)$，半径为 1 的圆。

区域 D 是这个圆的右半部分（$x \geq 0$）。

采用极坐标：$x = r\cos\theta$，$y = r\sin\theta$

$x^2 + y^2 = 2y$ 化为 $r^2 = 2r\sin\theta$，即 $r = 2\sin\theta$

对于圆的右半部分：

* $0 \leq \theta \leq \pi/2$（第一象限，$x \geq 0, y \geq 0$）
* 以及 $\pi/2 \leq \theta \leq \pi$（第二象限，$x \leq 0$，但要求 $x > 0$，所以只取第一象限部分）

等等，重新分析：圆 $x^2 + (y-1)^2 = 1$ 在 $x \geq 0$ 的部分。

当 $x \geq 0$ 时，$\theta$ 从 0 到 $\pi/2$（上半平面的右半部分）。

但圆也延伸到 $y < 1$ 的区域。实际上圆的范围是 $0 \leq y \leq 2$。

对于 $x \geq 0$：$\theta$ 从 0 到 $\pi/2$。

验证：当 $\theta = 0$，$r = 0$；当 $\theta = \pi/2$，$r = 2$。

$$\iint_D \sqrt{x^2+y^2} \, d\sigma = \int_0^{\pi/2} d\theta \int_0^{2\sin\theta} r \cdot r \, dr$$

$$= \int_0^{\pi/2} d\theta \int_0^{2\sin\theta} r^2 \, dr = \int_0^{\pi/2} \frac{(2\sin\theta)^3}{3} \, d\theta$$

$$= \frac{8}{3} \int_0^{\pi/2} \sin^3\theta \, d\theta$$

计算 $\int_0^{\pi/2} \sin^3\theta \, d\theta$：$$\int_0^{\pi/2} \sin^3\theta \, d\theta = \int_0^{\pi/2} (1-\cos^2\theta)\sin\theta \, d\theta$$

令 $u = \cos\theta$，$du = -\sin\theta \, d\theta$$$= \int_1^0 -(1-u^2) \, du = \int_0^1 (1-u^2) \, du = \left[u - \frac{u^3}{3}\right]_0^1 = 1 - \frac{1}{3} = \frac{2}{3}$$

所以：$$I = \frac{8}{3} \cdot \frac{2}{3} = \frac{16}{9}$$

**答案：$\dfrac{16}{9}$**

* * *

### 27. 计算 $\iint_D \sqrt{x^2+y^2} \, d\sigma$，其中 D 为曲线 $x^2+y^2 \leq 2x, y > 0$ 及 x 轴围成的闭区域

**解：**

将 $x^2 + y^2 \leq 2x$ 化为标准形式：$(x-1)^2 + y^2 \leq 1$

这是圆心在 $(1, 0)$，半径为 1 的圆。

区域 D 是这个圆的上半部分（$y \geq 0$）。

采用极坐标：$x = r\cos\theta$，$y = r\sin\theta$

$x^2 + y^2 = 2x$ 化为 $r^2 = 2r\cos\theta$，即 $r = 2\cos\theta$

对于上半圆（$y \geq 0$）：$0 \leq \theta \leq \pi/2$

验证：当 $\theta = 0$，$r = 2$（点 $(2, 0)$）；当 $\theta = \pi/2$，$r = 0$（原点）。

$$\iint_D \sqrt{x^2+y^2} \, d\sigma = \int_0^{\pi/2} d\theta \int_0^{2\cos\theta} r^2 \, dr$$

$$= \int_0^{\pi/2} \frac{(2\cos\theta)^3}{3} \, d\theta = \frac{8}{3} \int_0^{\pi/2} \cos^3\theta \, d\theta$$

计算 $\int_0^{\pi/2} \cos^3\theta \, d\theta$：$$\int_0^{\pi/2} \cos^3\theta \, d\theta = \int_0^{\pi/2} (1-\sin^2\theta)\cos\theta \, d\theta$$

令 $u = \sin\theta$，$du = \cos\theta \, d\theta$$$= \int_0^1 (1-u^2) \, du = \left[u - \frac{u^3}{3}\right]_0^1 = 1 - \frac{1}{3} = \frac{2}{3}$$

所以：$$I = \frac{8}{3} \cdot \frac{2}{3} = \frac{16}{9}$$

**答案：$\dfrac{16}{9}$**

* * *

## 三重积分

### 28. 计算 $\iiint_\Omega (x^2+y^2) \, dv$，其中 $\Omega$ 为曲面 $x^2+y^2 = 2z$ 及 $z = 2$ 围成的闭区域

**解：**

区域 $\Omega$ 由抛物面 $x^2 + y^2 = 2z$ 和平面 $z = 2$ 围成。

两曲面交线：$x^2 + y^2 = 4$（在 $z = 2$ 平面上）

采用柱坐标：$x = r\cos\theta$，$y = r\sin\theta$，$z = z$，$dv = r \, dr \, d\theta \, dz$

* $x^2 + y^2 = 2z$ 化为 $r^2 = 2z$，即 $z = r^2/2$
* $z = 2$

对于固定的 $r$，$z$ 从 $r^2/2$ 到 $2$。$r$ 的范围：当 $z = 2$ 时，$r^2 = 4$，所以 $0 \leq r \leq 2$。

$$\iiint_\Omega (x^2+y^2) \, dv = \int_0^{2\pi} d\theta \int_0^2 dr \int_{r^2/2}^{2} r^2 \cdot r \, dz$$

$$= 2\pi \int_0^2 r^3 \left(2 - \frac{r^2}{2}\right) \, dr$$

$$= 2\pi \int_0^2 \left(2r^3 - \frac{r^5}{2}\right) \, dr$$

$$= 2\pi \left[\frac{r^4}{2} - \frac{r^6}{12}\right]_0^2$$

$$= 2\pi \left(\frac{16}{2} - \frac{64}{12}\right) = 2\pi \left(8 - \frac{16}{3}\right)$$

$$= 2\pi \cdot \frac{24-16}{3} = 2\pi \cdot \frac{8}{3} = \frac{16\pi}{3}$$

**答案：$\dfrac{16\pi}{3}$**

* * *

### 29. 计算 $\iiint_\Omega (3+2x^2+3y^3-6z^5) \, dv$，其中 $\Omega$ 为 $x^2+y^2+z^2 \leq 1$ 的闭区域

**解：**

区域 $\Omega$ 是单位球体，关于三个坐标平面对称。

利用对称性分析各项：

**第一项：** $\iiint_\Omega 3 \, dv = 3 \cdot V = 3 \cdot \frac{4\pi}{3} = 4\pi$

**第二项：** $\iiint_\Omega 2x^2 \, dv$

由对称性，$\iiint_\Omega x^2 \, dv = \iiint_\Omega y^2 \, dv = \iiint_\Omega z^2 \, dv$

且 $\iiint_\Omega (x^2+y^2+z^2) \, dv = 3\iiint_\Omega x^2 \, dv$

计算 $\iiint_\Omega (x^2+y^2+z^2) \, dv$：用球坐标：$x^2+y^2+z^2 = r^2$，$dv = r^2\sin\varphi \, dr \, d\varphi \, d\theta$

$$= \int_0^{2\pi} d\theta \int_0^{\pi} \sin\varphi \, d\varphi \int_0^1 r^2 \cdot r^2 \, dr$$

$$= 2\pi \cdot 2 \cdot \frac{1}{5} = \frac{4\pi}{5}$$

所以 $\iiint_\Omega x^2 \, dv = \frac{4\pi}{15}$

$$\iiint_\Omega 2x^2 \, dv = \frac{8\pi}{15}$$

**第三项：** $\iiint_\Omega 3y^3 \, dv$

区域关于 $y = 0$ 平面对称，$y^3$ 是关于 $y$ 的奇函数，所以：$$\iiint_\Omega 3y^3 \, dv = 0$$

**第四项：** $\iiint_\Omega (-6z^5) \, dv$

区域关于 $z = 0$ 平面对称，$z^5$ 是关于 $z$ 的奇函数，所以：$$\iiint_\Omega (-6z^5) \, dv = 0$$

综上：$$\iiint_\Omega (3+2x^2+3y^3-6z^5) \, dv = 4\pi + \frac{8\pi}{15} + 0 + 0 = \frac{60\pi + 8\pi}{15} = \frac{68\pi}{15}$$

**答案：$\dfrac{68\pi}{15}$**

* * *

## 第十章 无穷级数

### 数项级数求和

### 30. 求级数和：$\sum_{n=2}^{+\infty} \frac{1}{n(n+2)}$

**解：**

使用部分分式分解：$$\frac{1}{n(n+2)} = \frac{A}{n} + \frac{B}{n+2}$$

$1 = A(n+2) + Bn = (A+B)n + 2A$

比较系数：$A + B = 0$，$2A = 1$

所以 $A = \frac{1}{2}$，$B = -\frac{1}{2}$

$$\frac{1}{n(n+2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{1}{n+2}\right)$$

求部分和：$$S_N = \sum_{n=2}^{N} \frac{1}{n(n+2)} = \frac{1}{2}\sum_{n=2}^{N}\left(\frac{1}{n} - \frac{1}{n+2}\right)$$

展开（裂项相消）：$$= \frac{1}{2}\left[\left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \left(\frac{1}{4} - \frac{1}{6}\right) + \cdots + \left(\frac{1}{N} - \frac{1}{N+2}\right)\right]$$

消去后剩余：$$= \frac{1}{2}\left(\frac{1}{2} + \frac{1}{3} - \frac{1}{N+1} - \frac{1}{N+2}\right)$$

取极限：$$S = \lim_{N\to\infty} S_N = \frac{1}{2}\left(\frac{1}{2} + \frac{1}{3}\right) = \frac{1}{2} \cdot \frac{5}{6} = \frac{5}{12}$$

**答案：$\dfrac{5}{12}$**

* * *

### 31. 求级数和：$\sum_{n=1}^{+\infty} \left(\frac{\ln 2}{2}\right)^n$

**解：**

这是等比级数，公比 $q = \frac{\ln 2}{2}$

验证 $|q| < 1$：$\ln 2 \approx 0.693 < 2$，所以 $|q| = \frac{\ln 2}{2} < 1$

等比级数求和公式：$\sum_{n=1}^{\infty} q^n = \frac{q}{1-q}$（当 $|q| < 1$）

$$S = \frac{\frac{\ln 2}{2}}{1 - \frac{\ln 2}{2}} = \frac{\ln 2}{2 - \ln 2}$$

**答案：$\dfrac{\ln 2}{2 - \ln 2}$**

* * *

### 敛散性判别

### 32. 判别级数 $\sum_{n=1}^{+\infty} \cos\frac{1}{n}$ 的敛散性

**解：**

考察一般项的极限：$$\lim_{n\to\infty} \cos\frac{1}{n} = \cos 0 = 1 \neq 0$$

由于一般项不趋于 0，根据级数收敛的必要条件，级数发散。

**答案：发散**

* * *

### 33. 判别级数 $\sum_{n=1}^{+\infty} \frac{1}{n^3+2n-1}$ 的敛散性

**解：**

当 $n \to \infty$ 时：$$\frac{1}{n^3+2n-1} \sim \frac{1}{n^3}$$

用比较判别法的极限形式：$$\lim_{n\to\infty} \frac{\frac{1}{n^3+2n-1}}{\frac{1}{n^3}} = \lim_{n\to\infty} \frac{n^3}{n^3+2n-1} = 1$$

由于 $p$-级数 $\sum \frac{1}{n^3}$（$p = 3 > 1$）收敛，所以原级数收敛。

**答案：收敛**

* * *

### 34. 判别级数 $\sum_{n=3}^{+\infty} \sin\frac{1}{n^2}$ 的敛散性

**解：**

当 $n \to \infty$ 时，$\frac{1}{n^2} \to 0$，所以 $\sin\frac{1}{n^2} \sim \frac{1}{n^2}$

用比较判别法的极限形式：$$\lim_{n\to\infty} \frac{\sin\frac{1}{n^2}}{\frac{1}{n^2}} = 1$$

由于 $\sum \frac{1}{n^2}$（$p = 2 > 1$）收敛，所以原级数收敛。

**答案：收敛**

* * *

### 35. 判别级数 $\sum_{n=3}^{+\infty} \frac{1}{\ln n}$ 的敛散性

**解：**

当 $n \geq 3$ 时，$\ln n < n$，所以 $\frac{1}{\ln n} > \frac{1}{n}$

由于调和级数 $\sum \frac{1}{n}$ 发散，且 $\frac{1}{\ln n} > \frac{1}{n} > 0$

由比较判别法，原级数发散。

（注：也可用极限比较：$\lim_{n\to\infty} \frac{1/\ln n}{1/n} = \lim_{n\to\infty} \frac{n}{\ln n} = +\infty$，由于 $\sum \frac{1}{n}$ 发散，所以原级数发散）

**答案：发散**

* * *

### 36. 判别级数 $\sum_{n=3}^{+\infty} \frac{(\ln n)^3}{n^2}$ 的敛散性

**解：**

用比较判别法。对于任意 $p > 0$ 和任意 $q$，当 $n$ 充分大时，$(\ln n)^q < n^p$。

取 $p = \frac{1}{2}$，则当 $n$ 充分大时：$$(\ln n)^3 < n^{1/2}$$

所以：$$\frac{(\ln n)^3}{n^2} < \frac{n^{1/2}}{n^2} = \frac{1}{n^{3/2}}$$

由于 $\sum \frac{1}{n^{3/2}}$（$p = 3/2 > 1$）收敛，所以原级数收敛。

或者用极限比较：$$\lim_{n\to\infty} \frac{(\ln n)^3/n^2}{1/n^{3/2}} = \lim_{n\to\infty} \frac{(\ln n)^3}{n^{1/2}} = 0$$

由于 $\sum \frac{1}{n^{3/2}}$ 收敛，且极限为 0，所以原级数收敛。

**答案：收敛**

* * *

### 37. 判别级数 $\sum_{n=1}^{+\infty} \frac{3^n \cdot n!}{n^n}$ 的敛散性

**解：**

使用比值判别法：$$a_n = \frac{3^n \cdot n!}{n^n}$$

$$\frac{a_{n+1}}{a_n} = \frac{3^{n+1} \cdot (n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{3^n \cdot n!}$$

$$= 3 \cdot (n+1) \cdot \frac{n^n}{(n+1)^{n+1}} = 3 \cdot \frac{n^n}{(n+1)^n} = 3 \cdot \left(\frac{n}{n+1}\right)^n$$

$$= 3 \cdot \frac{1}{\left(1+\frac{1}{n}\right)^n}$$

取极限：$$\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = 3 \cdot \frac{1}{e} = \frac{3}{e}$$

由于 $e \approx 2.718$，所以 $\frac{3}{e} > 1$

根据比值判别法，级数发散。

**答案：发散**

* * *

### 极限证明

### 38. 证明：$\lim_{n\to\infty} \frac{2^n \cdot n!}{n^n} = 0$

**证明：**

考虑级数 $\sum_{n=1}^{\infty} \frac{2^n \cdot n!}{n^n}$

使用比值判别法：$$\frac{a_{n+1}}{a_n} = \frac{2^{n+1} \cdot (n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{2^n \cdot n!}$$

$$= 2 \cdot (n+1) \cdot \frac{n^n}{(n+1)^{n+1}} = 2 \cdot \left(\frac{n}{n+1}\right)^n$$

$$= \frac{2}{\left(1+\frac{1}{n}\right)^n}$$

取极限：$$\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \frac{2}{e} < 1$$

由于 $e \approx 2.718 > 2$，所以 $\frac{2}{e} < 1$。

根据比值判别法，级数 $\sum_{n=1}^{\infty} \frac{2^n \cdot n!}{n^n}$ 收敛。

由级数收敛的必要条件，一般项趋于 0：$$\lim_{n\to\infty} \frac{2^n \cdot n!}{n^n} = 0$$

**证毕。**

* * *

### 绝对收敛与条件收敛

### 39. 判断级数 $\sum_{n=1}^{+\infty} (-1)^n \cdot \frac{n}{2n^2+1}$ 是绝对收敛、条件收敛还是发散

**解：**

**第一步：判断绝对收敛性**

考虑绝对值级数：$$\sum_{n=1}^{\infty} \left|(-1)^n \cdot \frac{n}{2n^2+1}\right| = \sum_{n=1}^{\infty} \frac{n}{2n^2+1}$$

当 $n \to \infty$ 时：$$\frac{n}{2n^2+1} \sim \frac{n}{2n^2} = \frac{1}{2n}$$

用极限比较：$$\lim_{n\to\infty} \frac{\frac{n}{2n^2+1}}{\frac{1}{n}} = \lim_{n\to\infty} \frac{n^2}{2n^2+1} = \frac{1}{2}$$

由于 $\sum \frac{1}{n}$ 发散，所以 $\sum \frac{n}{2n^2+1}$ 发散。

因此原级数**不是绝对收敛**。

**第二步：判断条件收敛性**

原级数是交错级数，使用莱布尼茨判别法：

设 $b_n = \frac{n}{2n^2+1}$

(i) 验证 $b_n \to 0$：$$\lim_{n\to\infty} \frac{n}{2n^2+1} = 0$$

(ii) 验证 $b_n$ 单调递减：

考虑函数 $f(x) = \frac{x}{2x^2+1}$（$x \geq 1$）

$$f'(x) = \frac{(2x^2+1) - x \cdot 4x}{(2x^2+1)^2} = \frac{2x^2+1-4x^2}{(2x^2+1)^2} = \frac{1-2x^2}{(2x^2+1)^2}$$

当 $x \geq 1$ 时，$1 - 2x^2 < 0$，所以 $f'(x) < 0$。

因此 $b_n$ 单调递减。

由莱布尼茨判别法，交错级数收敛。

综上，原级数**条件收敛**。

**答案：条件收敛**

* * *

### 40. 判断级数 $\sum_{n=1}^{+\infty} \frac{\sin(n\pi/3)}{2n^2+1}$ 是否收敛

**解：**

**方法一：绝对收敛判别**

考虑绝对值：$$\left|\frac{\sin(n\pi/3)}{2n^2+1}\right| \leq \frac{1}{2n^2+1} < \frac{1}{2n^2}$$

由于 $\sum \frac{1}{2n^2} = \frac{1}{2}\sum \frac{1}{n^2}$ 收敛（$p = 2 > 1$），

由比较判别法，$\sum \left|\frac{\sin(n\pi/3)}{2n^2+1}\right|$ 收敛。

因此原级数**绝对收敛**，从而收敛。

**答案：收敛（绝对收敛）**

### 41. 求幂级数 $\displaystyle\sum_{n=1}^{+\infty} (-1)^n \cdot \frac{2^n}{n+1} \cdot x^n$ 的收敛域

**解：**

使用比值法求收敛半径：

$$R = \lim_{n\to\infty} \left|\frac{a_n}{a_{n+1}}\right| = \lim_{n\to\infty} \left|\frac{n+2}{2(n+1)}\right| = \frac{1}{2}$$

当 $x = \dfrac{1}{2}$ 时，级数为 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n}{n+1}$，收敛（交错级数）当 $x = -\dfrac{1}{2}$ 时，级数为 $\displaystyle\sum_{n=1}^{+\infty} \frac{1}{n+1}$，发散（调和级数）

**答案：收敛域为 $\left(-\dfrac{1}{2}, \dfrac{1}{2}\right]$**

* * *

### 42. 求幂级数 $\displaystyle\sum_{n=1}^{+\infty} (-1)^n \cdot \frac{n}{2^n} \cdot (x-1)^n$ 的收敛域

**解：**

$$R = \lim_{n\to\infty} \left|\frac{a_n}{a_{n+1}}\right| = \lim_{n\to\infty} \left|\frac{n \cdot 2^{n+1}}{(n+1) \cdot 2^n}\right| = 2$$

收敛区间 $|x-1| < 2$，即 $-1 < x < 3$

当 $x = -1$ 时，级数为 $\displaystyle\sum_{n=1}^{+\infty} n$，发散当 $x = 3$ 时，级数为 $\displaystyle\sum_{n=1}^{+\infty} (-1)^n \cdot n$，发散

**答案：收敛域为 $(-1, 3)$**

* * *

### 43. 已知 $\displaystyle\sum_{n=1}^{+\infty} a_n(x-2)^n$ 在 $x = -3$ 条件收敛，求收敛区间

**解：**

$x = -3$ 距中心 $x=2$ 的距离为 $|-3-2| = 5$，故收敛半径 $R = 5$

收敛区间为 $|x-2| < 5$，即 $-3 < x < 7$

**答案：收敛区间为 $(-3, 7)$**

* * *

### 44. 求幂级数 $\displaystyle\sum_{n=1}^{+\infty} \frac{n}{2^n} \cdot x^{n+1}$ 的和函数

**解：**

$$S(x) = x \cdot \sum_{n=1}^{+\infty} n\left(\frac{x}{2}\right)^n = x \cdot \frac{x/2}{(1-x/2)^2} = \frac{2x^2}{(2-x)^2}$$

**答案：$S(x) = \dfrac{2x^2}{(2-x)^2}$，$x \in (-2, 2)$**

* * *

### 45. 求幂级数 $\displaystyle\sum_{n=0}^{+\infty} \frac{2^n}{n+1} \cdot x^n$ 的和函数

**解：**

$$xS(x) = \sum_{n=0}^{+\infty} \frac{(2x)^{n+1}}{n+1} = -\ln(1-2x)$$

$$S(x) = -\frac{\ln(1-2x)}{2x} \quad (x \neq 0), \quad S(0) = 1$$

**答案：$S(x) = -\dfrac{\ln(1-2x)}{2x} \; (x \neq 0)$，$S(0) = 1$**

* * *

### 46. 将 $f(x) = e^{2x}$ 展开成 $x-3$ 的幂级数

**解：**

$$e^{2x} = e^6 \cdot e^{2(x-3)} = e^6 \cdot \sum_{n=0}^{+\infty} \frac{2^n}{n!} (x-3)^n$$

**答案：$e^{2x} = e^6 \displaystyle\sum_{n=0}^{+\infty} \frac{2^n}{n!} (x-3)^n$，$x \in \mathbb{R}$**

* * *

### 47. 将 $f(x) = x \sin^2 x$ 展开成 $x$ 的幂级数

**解：**

$$\sin^2 x = \frac{1-\cos 2x}{2}$$

$$x \sin^2 x = \frac{x}{2} - \frac{x}{2}\cos 2x = \sum_{n=0}^{+\infty} (-1)^{n+1} \frac{2^{2n-1}}{(2n)!} x^{2n+1}$$

* * *

### 48. 将 $f(x) = \dfrac{1}{x^2+3x+2}$ 展开成 $x-3$ 的幂级数

**解：**

$$\frac{1}{(x+1)(x+2)} = \frac{1}{x+1} - \frac{1}{x+2}$$

$$= \frac{1}{4} \cdot \frac{1}{1+\dfrac{x-3}{4}} - \frac{1}{5} \cdot \frac{1}{1+\dfrac{x-3}{5}}$$

$$= \sum_{n=0}^{+\infty} (-1)^n \left(\frac{1}{4^{n+1}} - \frac{1}{5^{n+1}}\right) (x-3)^n, \quad x \in (-1, 7)$$

* * *

### 49. 将 $f(x) = \ln(1+x)$ 展开成 $x-3$ 的幂级数

**解：**

$$\ln(1+x) = \ln 4 + \ln\left(1+\frac{x-3}{4}\right)$$

$$= \ln 4 + \sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n \cdot 4^n} (x-3)^n, \quad x \in (-1, 7]$$

* * *

## 第十一章 微分方程

### 50. 求解 $\dfrac{dy}{dx} = \dfrac{2x}{1+x^2} \cdot y$

**解：**

分离变量：$\dfrac{dy}{y} = \dfrac{2x}{1+x^2} \, dx$

$$\ln|y| = \ln(1+x^2) + C$$

**答案：$y = C(1+x^2)$**

* * *

### 51. 求解 $\dfrac{dy}{dx} = 4x \cdot y^2$

**解：**

分离变量：$\dfrac{dy}{y^2} = 4x \, dx$

$$-\frac{1}{y} = 2x^2 + C$$

**答案：$y = -\dfrac{1}{2x^2+C}$（及特解 $y=0$）**

* * *

### 52. 求解 $\dfrac{dy}{dx} = 2\left(\dfrac{y}{x}\right) + \left(\dfrac{y}{x}\right)^2$

**解：**

令 $u = \dfrac{y}{x}$，化为可分离变量方程

$$\frac{du}{u^2+u} = \frac{dx}{x}$$

积分得 $\ln\left|\dfrac{u}{u+1}\right| = \ln|x| + C$

**答案：$y = \dfrac{Cx^2}{1-Cx}$（及特解 $y = -x$）**

* * *

### 53. 已知 $y_1, y_2, y_3$ 为 $y''+py'+qy=f(x)$ 的三个线性无关解，求通解

**解：**

$y_2-y_1$ 和 $y_3-y_1$ 是对应齐次方程的线性无关解

**答案：$y = C_1(y_2-y_1) + C_2(y_3-y_1) + y_1$**

* * *

### 54. 求 $y''+4y'-5y = xe^x$ 的通解

**解：**

特征方程 $r^2+4r-5=0$，$r_1=1$，$r_2=-5$

齐次通解 $Y = C_1e^x + C_2e^{-5x}$

特解 $y^* = \dfrac{3x^2-x}{36}e^x$

**答案：$y = C_1e^x + C_2e^{-5x} + \dfrac{3x^2-x}{36}e^x$**

* * *

### 55. 求 $y''+3y'-4y = e^{2x}$ 的通解

**解：**

特征方程 $r^2+3r-4=0$，$r_1=1$，$r_2=-4$

齐次通解 $Y = C_1e^x + C_2e^{-4x}$

特解 $y^* = \dfrac{e^{2x}}{6}$

**答案：$y = C_1e^x + C_2e^{-4x} + \dfrac{e^{2x}}{6}$**

* * *

### 56. 求 $y''+3y'-4y = xe^x \cos 2x$ 的特解形式

**解：**

特征根 $r=1, -4$，$\lambda + i\omega = 1+2i$ 不是特征根

**答案：$y^* = e^x[(ax+b)\cos 2x + (cx+d)\sin 2x]$**

* * *

### 57. 求 $y''-2y'+4y = xe^x \cos\sqrt{3}x$ 的特解形式

**解：**

特征根 $r = 1 \pm \sqrt{3}i$，$\lambda + i\omega = 1+\sqrt{3}i$ 是特征根

**答案：$y^* = xe^x[(ax+b)\cos\sqrt{3}x + (cx+d)\sin\sqrt{3}x]$**

* * *

### 58. 求 $y''-3y'+2y = 6e^x + x^2$ 的特解形式

**解：**

特征根 $r=1, 2$，$\lambda=1$ 是单特征根

对 $6e^x$：$y_1^* = Axe^x$；对 $x^2$：$y_2^* = Bx^2 + Cx + D$

**答案：$y^* = Axe^x + Bx^2 + Cx + D$**
