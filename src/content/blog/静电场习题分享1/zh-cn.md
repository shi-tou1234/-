---
title: 静电场习题分享1
pubDate: 2026-04-06T07:51:00.000Z
updatedDate: 2026-04-06T08:39:49.897Z
draft: false
description: 
category: 大物
slugId: 静电场习题分享1
---

# 保姆级详解 | 静电场5道核心题 零跳步全推导

> 本篇博客针对大学物理「静电场基础」的5道高频作业题，做**零基础友好、零跳步、全细节**的推导。
> 全程规避复杂前置知识：偏导不用线性代数行列式、电场不用高斯定理，只用基础微积分、加减消元、微元叠加思想，解决90%初学者的卡点问题。

---

## 一、高等数学 | 极坐标→直角坐标偏导数求解（数学基础）

### 题目原文
已知极坐标与直角坐标的转换关系：
$$
\begin{cases} 
x = r\cos\theta \\ 
y = r\sin\theta 
\end{cases}
$$
其中 $r=r(x,y)$、$\theta=\theta(x,y)$ 是关于 $x,y$ 的二元函数，求 $\frac{\partial r}{\partial x},\frac{\partial \theta}{\partial x},\frac{\partial r}{\partial y},\frac{\partial \theta}{\partial y}$。

### 核心原理
1. **偏导数核心规则**：对 $x$ 求偏导时，把 $y$ 当成固定常数；对 $y$ 求偏导时，把 $x$ 当成固定常数。
2. **求导基础法则**：乘积法则 $(uv)'=u'v+uv'$、复合函数链式法则 $f(g(x))'=f'(g(x))\cdot g'(x)$。
3. **求解方法**：对两个方程分别求偏导，构造二元一次方程组，用**初中加减消元法**求解，无需线性代数知识。

---

### 分步详解（零跳步）

#### 1. 求 $\frac{\partial r}{\partial x}$ 和 $\frac{\partial \theta}{\partial x}$

##### 步骤1：对两个方程两边同时对 $x$ 求偏导
我们把 $r、\theta$ 都当成随 $x$ 变化的函数，$y$ 是固定常数。

- 对 $x = r\cos\theta$ 求导：
  左边：$x$ 对 $x$ 求偏导，结果为 $1$；
  右边：是两个关于 $x$ 的函数 $r$ 和 $\cos\theta$ 相乘，用乘积法则+链式法则展开：
  $$
  \frac{\partial}{\partial x}(r\cos\theta) = \frac{\partial r}{\partial x}\cdot \cos\theta + r\cdot \frac{\partial}{\partial x}(\cos\theta)
  $$
  其中 $\cos\theta$ 是复合函数，对 $x$ 求导为：$\frac{\partial}{\partial x}(\cos\theta) = -\sin\theta \cdot \frac{\partial \theta}{\partial x}$
  最终得到第一个方程：
  $$
  \boldsymbol{1 = \cos\theta \cdot \frac{\partial r}{\partial x} - r\sin\theta \cdot \frac{\partial \theta}{\partial x}} \tag{1}
  $$

- 对 $y = r\sin\theta$ 求导：
  左边：$y$ 是固定常数，对 $x$ 求偏导，结果为 $0$；
  右边：同理用乘积法则+链式法则展开：
  $$
  \frac{\partial}{\partial x}(r\sin\theta) = \frac{\partial r}{\partial x}\cdot \sin\theta + r\cdot \frac{\partial}{\partial x}(\sin\theta)
  $$
  其中 $\sin\theta$ 对 $x$ 求导为：$\frac{\partial}{\partial x}(\sin\theta) = \cos\theta \cdot \frac{\partial \theta}{\partial x}$
  最终得到第二个方程：
  $$
  \boldsymbol{0 = \sin\theta \cdot \frac{\partial r}{\partial x} + r\cos\theta \cdot \frac{\partial \theta}{\partial x}} \tag{2}
  $$

##### 步骤2：加减消元求 $\frac{\partial r}{\partial x}$
我们的目标是消去 $\frac{\partial \theta}{\partial x}$，只保留 $\frac{\partial r}{\partial x}$：
- 把方程(1)两边同时乘以 $\cos\theta$，让含 $\frac{\partial \theta}{\partial x}$ 的项系数和方程(2)匹配：
  $$
  \cos\theta = \cos^2\theta \cdot \frac{\partial r}{\partial x} - r\sin\theta\cos\theta \cdot \frac{\partial \theta}{\partial x} \tag{1a}
  $$
- 把方程(2)两边同时乘以 $\sin\theta$：
  $$
  0 = \sin^2\theta \cdot \frac{\partial r}{\partial x} + r\sin\theta\cos\theta \cdot \frac{\partial \theta}{\partial x} \tag{2a}
  $$

把(1a)和(2a)左右两边分别相加，含 $\frac{\partial \theta}{\partial x}$ 的两项正好抵消：
$$
\cos\theta + 0 = (\cos^2\theta + \sin^2\theta) \cdot \frac{\partial r}{\partial x}
$$
根据三角恒等式 $\cos^2\theta + \sin^2\theta=1$，直接得到：
$$
\boldsymbol{\frac{\partial r}{\partial x} = \cos\theta = \frac{x}{\sqrt{x^2+y^2}}}
$$
（直角坐标转换：$r=\sqrt{x^2+y^2}$，$\cos\theta=\frac{x}{r}$）

##### 步骤3：加减消元求 $\frac{\partial \theta}{\partial x}$
这次消去 $\frac{\partial r}{\partial x}$，只保留 $\frac{\partial \theta}{\partial x}$：
- 把方程(1)两边同时乘以 $\sin\theta$：
  $$
  \sin\theta = \sin\theta\cos\theta \cdot \frac{\partial r}{\partial x} - r\sin^2\theta \cdot \frac{\partial \theta}{\partial x} \tag{1b}
  $$
- 把方程(2)两边同时乘以 $\cos\theta$：
  $$
  0 = \sin\theta\cos\theta \cdot \frac{\partial r}{\partial x} + r\cos^2\theta \cdot \frac{\partial \theta}{\partial x} \tag{2b}
  $$

用(2b)减去(1b)，含 $\frac{\partial r}{\partial x}$ 的两项正好抵消：
$$
0 - \sin\theta = r(\cos^2\theta + \sin^2\theta) \cdot \frac{\partial \theta}{\partial x}
$$
化简得：
$$
- \sin\theta = r \cdot \frac{\partial \theta}{\partial x}
$$
整理后得到：
$$
\boldsymbol{\frac{\partial \theta}{\partial x} = -\frac{\sin\theta}{r} = -\frac{y}{x^2+y^2}}
$$

---

#### 2. 求 $\frac{\partial r}{\partial y}$ 和 $\frac{\partial \theta}{\partial y}$
和上面的逻辑完全一致，这次对 $y$ 求偏导，把 $x$ 当成固定常数。

##### 步骤1：对两个方程两边同时对 $y$ 求偏导
- 对 $x = r\cos\theta$ 求导：左边 $x$ 是常数，求导为 $0$，得到：
  $$
  \boldsymbol{0 = \cos\theta \cdot \frac{\partial r}{\partial y} - r\sin\theta \cdot \frac{\partial \theta}{\partial y}} \tag{3}
  $$
- 对 $y = r\sin\theta$ 求导：左边 $y$ 对 $y$ 求导为 $1$，得到：
  $$
  \boldsymbol{1 = \sin\theta \cdot \frac{\partial r}{\partial y} + r\cos\theta \cdot \frac{\partial \theta}{\partial y}} \tag{4}
  $$

### 步骤2：消元求 $\frac{\partial r}{\partial y}$

- 方程(3)乘 $\cos\theta$：
  $$
  0 = \cos^2\theta \cdot \frac{\partial r}{\partial y} - r\sin\theta\cos\theta \cdot \frac{\partial \theta}{\partial y} \tag{3a}
  $$

- 方程(4)乘 $\sin\theta$：
  $$
  \sin\theta = \sin^2\theta \cdot \frac{\partial r}{\partial y} + r\sin\theta\cos\theta \cdot \frac{\partial \theta}{\partial y} \tag{4a}
  $$

(3a)+(4a)抵消 $\frac{\partial \theta}{\partial y}$，直接得到：

$$
\frac{\partial r}{\partial y} = \sin\theta = \frac{y}{\sqrt{x^2+y^2}}
$$

---

### 步骤3：消元求 $\frac{\partial \theta}{\partial y}$

- 方程(3)乘 $\sin\theta$：
  $$
  0 = \sin\theta\cos\theta \cdot \frac{\partial r}{\partial y} - r\sin^2\theta \cdot \frac{\partial \theta}{\partial y} \tag{3b}
  $$

- 方程(4)乘 $\cos\theta$：
  $$
  \cos\theta = \sin\theta\cos\theta \cdot \frac{\partial r}{\partial y} + r\cos^2\theta \cdot \frac{\partial \theta}{\partial y} \tag{4b}
  $$

(4b)-(3b)抵消 $\frac{\partial r}{\partial y}$，化简得：

$$
\frac{\partial \theta}{\partial y} = \frac{\cos\theta}{r} = \frac{x}{x^2+y^2}
$$
---

### 常见卡点答疑
> **问**：为什么求导后左边一个是1、一个是0？
> **答**：对 $x$ 求偏导时，$x$ 是自变量，求导为1；$y$ 是固定的常数，常数求导永远是0，反之同理。

### 最终结果汇总
| 偏导数 | 极坐标形式 | 直角坐标形式 |
|:---|:---|:---|
| $\frac{\partial r}{\partial x}$ | $\cos\theta$ | $\frac{x}{\sqrt{x^2+y^2}}$ |
| $\frac{\partial \theta}{\partial x}$ | $-\frac{\sin\theta}{r}$ | $-\frac{y}{x^2+y^2}$ |
| $\frac{\partial r}{\partial y}$ | $\sin\theta$ | $\frac{y}{\sqrt{x^2+y^2}}$ |
| $\frac{\partial \theta}{\partial y}$ | $\frac{\cos\theta}{r}$ | $\frac{x}{x^2+y^2}$ |

---

## 二、大学物理 | 均匀带电细杆延长线场强求解

### 题目原文
真空中一长为 $L$ 的均匀带电细直杆，总电荷量为 $q$，试求在直杆延长线上距杆一端距离为 $d$ 的 $P$ 点的电场强度。

### 核心原理
**微元法**：点电荷场强公式是我们唯一的基础公式，对于连续带电体，我们把它切成无数个「足够短、可视为点电荷」的微元，算出每个微元在目标点的场强，再把所有场强积分求和（连续的加法）。
点电荷场强公式：$E = \frac{1}{4\pi\varepsilon_0} \cdot \frac{Q}{r^2}$，其中 $r$ 是点电荷到场点的距离。

---

### 分步详解（零跳步）

#### 步骤1：设定坐标系与电荷线密度
首先建立坐标系，避免距离计算出错：
- 沿细杆建立 $x$ 轴，令细杆的左端在 $x=0$ 处，右端在 $x=L$ 处；
- 目标点 $P$ 在杆的右端右侧，距离右端 $d$，因此 $P$ 的坐标为 $x=L+d$。

细杆是均匀带电的，单位长度的带电量（电荷线密度）为：
$$
\lambda = \frac{总电荷量}{总长度} = \frac{q}{L}
$$
物理意义：杆上每1米长度带的电量，是一个固定值。

#### 步骤2：取电荷微元，计算微元到场点的距离
在杆上任意位置 $x$ 处，切下一个极短的小段 $dx$（短到可以当成一个点电荷），这个小段的带电量为：
$$
dq = 单位长度电量 \times 小段长度 = \lambda \cdot dx
$$
**最容易踩坑的点**：杆上不同位置的微元，到 $P$ 点的距离是不一样的！
微元在 $x$ 处，$P$ 在 $L+d$ 处，因此微元到 $P$ 点的距离为：
$$
r = P点坐标 - 微元坐标 = (L+d) - x
$$
举个例子验证：
- 微元在杆最左端（$x=0$）：$r=L+d$，符合预期；
- 微元在杆最右端（$x=L$）：$r=d$，符合题目条件。

#### 步骤3：写出单个微元在P点的场强
微元可视为点电荷，直接套点电荷场强公式，微元在 $P$ 点产生的场强大小为：
$$
dE = \frac{1}{4\pi\varepsilon_0} \cdot \frac{dq}{r^2}
$$
把 $dq=\lambda dx$、$r=(L+d)-x$ 代入，得到：
$$
dE = \frac{\lambda}{4\pi\varepsilon_0} \cdot \frac{dx}{[(L+d)-x]^2}
$$
**方向说明**：如果杆带正电，所有微元在 $P$ 点的场强方向都沿 $x$ 轴正方向（向右）；如果带负电，都沿 $x$ 轴负方向（向左），没有方向抵消，直接标量积分即可。

#### 步骤4：积分求和，计算总场强
我们需要把杆上从左端（$x=0$）到右端（$x=L$）的所有微元的场强加起来，积分范围就是 $x:0\to L$：
$$
E = \int_{0}^{L} dE = \frac{\lambda}{4\pi\varepsilon_0} \int_{0}^{L} \frac{dx}{[(L+d)-x]^2}
$$

##### 换元法计算积分（解决用户之前的卡点）
令换元 $u=(L+d)-x$（也就是微元到 $P$ 点的距离），对 $u$ 求变化量：
- $x$ 增加 $dx$，$u$ 就减少 $dx$，因此 $du = -dx$，也就是 $dx=-du$；
- 积分上下限转换：$x=0$ 时，$u=L+d$；$x=L$ 时，$u=d$。

把这些全部代入积分式，积分变量从 $x$ 换成 $u$：
$$
E = \frac{\lambda}{4\pi\varepsilon_0} \int_{L+d}^{d} \frac{-du}{u^2}
$$
积分上下限反过来，负号可以抵消：
$$
E = \frac{\lambda}{4\pi\varepsilon_0} \int_{d}^{L+d} \frac{du}{u^2}
$$
我们知道基本积分公式：$\int \frac{1}{u^2} du = -\frac{1}{u} + C$，代入上下限计算：
$$
\int_{d}^{L+d} \frac{du}{u^2} = \left. -\frac{1}{u} \right|_{d}^{L+d} = \left(-\frac{1}{L+d}\right) - \left(-\frac{1}{d}\right)
$$
通分化简：
$$
\left(-\frac{1}{L+d}\right) + \frac{1}{d} = \frac{d + L - d}{d(L+d)} = \frac{L}{d(L+d)}
$$

#### 步骤5：代入线密度，得到最终结果
把 $\lambda=\frac{q}{L}$ 代入场强公式：
$$
E = \frac{1}{4\pi\varepsilon_0} \cdot \frac{q}{L} \cdot \frac{L}{d(L+d)}
$$
$L$ 直接约掉，最终得到：
$$
\boldsymbol{E = \frac{q}{4\pi\varepsilon_0 d(L+d)}}
$$

---

### 常见卡点答疑
> **问**：为什么 $du=-dx$？
> **答**：$u=(L+d)-x$，$x$ 越大，$u$ 越小，两者变化方向相反，因此变化量差一个负号。

### 结果合理性验证
当杆的长度 $L\to0$ 时，细杆退化为一个点电荷，此时公式变为：
$$
E \approx \frac{q}{4\pi\varepsilon_0 d^2}
$$
和点电荷场强公式完全一致，验证了结果的正确性。

---

## 三、大学物理 | 均匀带电半圆环圆心场强求解

### 题目原文
用绝缘细线弯成的半圆环，半径为 $R$，其上均匀地带有正电荷 $Q$，试求圆心 $O$ 处的电场强度。

### 核心原理
**微元法+对称性分析**：半圆环上每个微元的场强方向不同，不能直接相加，需要分解到坐标轴上，利用对称性抵消掉相互抵消的分量，只对有效分量积分。

---

### 分步详解（零跳步）

#### 步骤1：设定坐标系与电荷线密度
建立坐标系，避免方向和分量出错：
- 圆心 $O$ 为坐标原点，半圆环为上半圆，两个端点落在 $x$ 轴上（坐标 $(-R,0)$ 和 $(R,0)$），对称轴为 $y$ 轴；
- 微元的位置用圆心角 $\theta$ 表示：$\theta$ 从 $x$ 轴正方向开始算，$\theta=0$ 对应右端点 $(R,0)$，$\theta=\pi/2$ 对应半圆最顶端 $(0,R)$，$\theta=\pi$ 对应左端点 $(-R,0)$，覆盖整个半圆环。

半圆环的总长度（弧长）为半个圆周：$L=\pi R$，因此电荷线密度为：
$$
\lambda = \frac{总电荷量}{总长度} = \frac{Q}{\pi R}
$$

#### 步骤2：取电荷微元，计算微元场强
在半圆环上取一个极短的弧长微元 $dl$，对应的圆心角为 $d\theta$，根据弧长公式，$dl = R \cdot d\theta$。
这个微元的带电量为：
$$
dq = \lambda \cdot dl = \lambda R d\theta
$$
所有微元到圆心的距离都是半圆环的半径 $R$，因此微元在圆心处产生的场强大小为：
$$
dE = \frac{1}{4\pi\varepsilon_0} \cdot \frac{dq}{R^2}
$$
把 $dq=\lambda R d\theta$ 代入，化简得：
$$
dE = \frac{1}{4\pi\varepsilon_0} \cdot \frac{\lambda R d\theta}{R^2} = \frac{\lambda d\theta}{4\pi\varepsilon_0 R}
$$

#### 步骤3：场强方向与分量分解（解决负号卡点）
**场强方向规则**：正电荷产生的场强，方向是「从正电荷指向场点」。
微元在半圆环上，场点是圆心 $O$，因此每个微元的场强 $dE$ 方向都是**沿半径指向圆心**。

我们把 $dE$ 分解为 $x$ 方向和 $y$ 方向的分量，先确定分量的正负：
- 我们规定 $x$ 轴向右为正，$y$ 轴向上为正；
- 微元的位置坐标是 $(R\cos\theta, R\sin\theta)$，场强方向指向原点，因此场强的单位方向矢量为 $(-\cos\theta, -\sin\theta)$（从微元指向原点，和坐标矢量方向相反）。

因此，场强的分量为：
$$
\begin{cases}
dE_x = dE \cdot (-\cos\theta) = -dE \cdot \cos\theta \\
dE_y = dE \cdot (-\sin\theta) = -dE \cdot \sin\theta
\end{cases}
$$
**负号的物理意义**：分量的方向和我们设定的坐标轴正方向相反。比如最顶端的微元（$\theta=\pi/2$），场强方向向下，和 $y$ 轴正方向相反，因此 $dE_y=-dE$，和公式完全一致。

#### 步骤4：对称性分析，简化积分
半圆环关于 $y$ 轴对称，我们可以利用对称性大幅简化计算：
- 对于任意一个 $\theta$ 处的微元，总能找到一个 $\pi-\theta$ 处的对称微元；
- 两个对称微元的 $dE_x$ 大小相等、方向相反（一个是 $-dE\cos\theta$，一个是 $-dE\cos(\pi-\theta)=dE\cos\theta$），积分后会完全抵消，因此**总场强的 $x$ 分量 $E_x=0$**；
- 两个对称微元的 $dE_y$ 大小相等、方向相同，不会抵消，总场强就等于 $y$ 分量的积分和。

#### 步骤5：积分计算总场强
总场强 $E = E_y = \int dE_y$，积分范围是 $\theta$ 从 $0$ 到 $\pi$（覆盖整个半圆环）。

把 $dE_y = -\frac{\lambda d\theta}{4\pi\varepsilon_0 R} \cdot \sin\theta$ 代入积分：
$$
E = \int_{0}^{\pi} -\frac{\lambda}{4\pi\varepsilon_0 R} \cdot \sin\theta \ d\theta
$$
把常数项（负号、$\frac{\lambda}{4\pi\varepsilon_0 R}$）提到积分外：
$$
E = -\frac{\lambda}{4\pi\varepsilon_0 R} \int_{0}^{\pi} \sin\theta \ d\theta
$$
计算定积分：
$$
\int_{0}^{\pi} \sin\theta \ d\theta = \left. -\cos\theta \right|_{0}^{\pi} = -(\cos\pi - \cos0) = -(-1-1) = 2
$$
代入积分结果：
$$
E = -\frac{\lambda}{4\pi\varepsilon_0 R} \times 2 = -\frac{\lambda}{2\pi\varepsilon_0 R}
$$
再把 $\lambda=\frac{Q}{\pi R}$ 代入，替换线密度：
$$
\boldsymbol{E = -\frac{Q}{2\pi^2 \varepsilon_0 R^2}}
$$

---

### 最终结果说明
1. **场强大小**：$\boldsymbol{E = \frac{Q}{2\pi^2 \varepsilon_0 R^2}}$
2. **场强方向**：公式中的负号表示方向沿 $y$ 轴负方向，也就是**沿半圆环的对称轴，指向半圆环的凹侧**（正电荷的情况）；如果是负电荷，方向相反，指向半圆环的凸侧。

---

## 四、大学物理 | 平行无限长带电直导线 场强与受力求解

### 题目原文
两条无限长平行带电直导线相距为 $r_0$，均匀带有等量异号电荷，电荷线密度为 $\lambda$。(1) 求两导线构成的平面上任一点的电场强度；(2) 求每一根导线上单位长度导线受到的电场力。

### 核心原理
1. **微元积分法**：不用高斯定理，纯用点电荷场强+积分，推导出单根无限长带电直导线的场强公式；
2. **电场叠加原理**：空间某点的总场强，等于两根导线在该点产生的场强的矢量和；
3. **电场力规则**：导线自身的电场不会对自己产生力，因此受力由**另一根导线产生的外电场**提供。

---

### 分步详解（零跳步）

#### 前置推导：单根无限长带电直导线的场强（纯积分，无高斯定理）
我们先推导基础公式：电荷线密度为 $\lambda$ 的无限长直导线，在距离导线垂直距离 $r$ 处的场强。

##### 步骤1：建立模型与取微元
- 无限长直导线沿 $y$ 轴放置，从 $y=-\infty$ 延伸到 $y=+\infty$；
- 待求场强的点 $P$ 在 $x$ 轴上，距离导线的垂直距离为 $x$，坐标为 $(x,0)$。

在导线上任意位置 $y$ 处，取微元 $dy$，带电量 $dq=\lambda dy$，微元到 $P$ 点的距离为 $r=\sqrt{x^2+y^2}$。

##### 步骤2：微元场强与对称性分析
微元在 $P$ 点的场强大小为：
$$
dE = \frac{1}{4\pi\varepsilon_0} \cdot \frac{dq}{r^2} = \frac{\lambda dy}{4\pi\varepsilon_0 (x^2+y^2)}
$$
**对称性分析**：无限长导线关于 $x$ 轴对称，任意 $y$ 处的微元和 $-y$ 处的微元，场强的 $y$ 分量大小相等、方向相反，积分后完全抵消，总场强只有 $x$ 方向的分量。

$dE$ 的 $x$ 分量为：$dE_x = dE \cdot \cos\theta$，其中 $\cos\theta = \frac{x}{r} = \frac{x}{\sqrt{x^2+y^2}}$，因此：
$$
dE_x = \frac{\lambda x \cdot dy}{4\pi\varepsilon_0 (x^2+y^2)^{\frac{3}{2}}}
$$

##### 步骤3：积分计算总场强
积分范围是整个无限长导线，$y$ 从 $-\infty$ 到 $+\infty$：
$$
E = \int_{-\infty}^{+\infty} dE_x = \frac{\lambda x}{4\pi\varepsilon_0} \int_{-\infty}^{+\infty} \frac{dy}{(x^2+y^2)^{\frac{3}{2}}}
$$
用三角换元法计算积分：令 $y = x \tan\theta$，则 $dy = x \sec^2\theta d\theta$，$x^2+y^2=x^2\sec^2\theta$，积分上下限变为 $\theta:-\frac{\pi}{2}\to\frac{\pi}{2}$。

代入化简：
$$
\int_{-\infty}^{+\infty} \frac{dy}{(x^2+y^2)^{\frac{3}{2}}} = \frac{1}{x^2} \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos\theta d\theta = \frac{2}{x^2}
$$
代回场强公式，最终得到单根无限长导线的场强公式：
$$
\boldsymbol{E = \frac{\lambda}{2\pi\varepsilon_0 r}}
$$
其中 $r$ 是到场点的垂直距离，方向：正电荷电场垂直导线向外，负电荷向内。

---

#### (1) 求平面上任一点的电场强度

##### 步骤1：建立坐标系
- 带 $+\lambda$ 的导线为导线1，沿 $y$ 轴放置（$x=0$ 处）；
- 带 $-\lambda$ 的导线为导线2，沿 $y$ 轴放置在 $x=r_0$ 处，两导线间距为 $r_0$；
- 待求场强的点 $P$ 的 $x$ 坐标为 $x$，到导线1的距离为 $|x|$，到导线2的距离为 $|x-r_0|$。

我们分3个区域，分别叠加场强。

##### 区域1：两导线之间（$\boldsymbol{0 < x < r_0}$）
- 导线1（$+\lambda$）在 $P$ 点的场强 $E_1$：正电荷电场向外，$P$ 在导线1右侧，$E_1$ 沿 $x$ 轴正方向，大小 $E_1 = \frac{\lambda}{2\pi\varepsilon_0 x}$；
- 导线2（$-\lambda$）在 $P$ 点的场强 $E_2$：负电荷电场向内，$P$ 在导线2左侧，$E_2$ 指向导线2（沿 $x$ 轴正方向），大小 $E_2 = \frac{\lambda}{2\pi\varepsilon_0 (r_0 - x)}$。

$E_1$ 和 $E_2$ 同方向，直接相加化简：
$$
E = E_1 + E_2 = \frac{\lambda}{2\pi\varepsilon_0} \left( \frac{1}{x} + \frac{1}{r_0 - x} \right) = \boldsymbol{\frac{\lambda r_0}{2\pi\varepsilon_0 x (r_0 - x)}}
$$
方向：沿 $x$ 轴正方向，由 $+\lambda$ 导线指向 $-\lambda$ 导线。

##### 区域2：导线1左侧（$\boldsymbol{x < 0}$）
- 导线1在 $P$ 点的场强 $E_1$：$P$ 在导线1左侧，正电荷电场向外，$E_1$ 沿 $x$ 轴负方向，大小 $E_1 = \frac{\lambda}{2\pi\varepsilon_0 |x|} = \frac{\lambda}{2\pi\varepsilon_0 (-x)}$；
- 导线2在 $P$ 点的场强 $E_2$：$P$ 在导线2左侧，距离为 $r_0 - x$，负电荷电场向内，$E_2$ 沿 $x$ 轴正方向，大小 $E_2 = \frac{\lambda}{2\pi\varepsilon_0 (r_0 - x)}$。

$E_1$ 和 $E_2$ 反方向，叠加后：
$$
E = E_2 - E_1 = \boldsymbol{-\frac{\lambda r_0}{2\pi\varepsilon_0 |x| (r_0 + |x|)}}
$$
负号表示方向沿 $x$ 轴负方向。

##### 区域3：导线2右侧（$\boldsymbol{x > r_0}$）
- 导线1在 $P$ 点的场强 $E_1$：$P$ 在导线1右侧，正电荷电场向外，$E_1$ 沿 $x$ 轴正方向，大小 $E_1 = \frac{\lambda}{2\pi\varepsilon_0 x}$；
- 导线2在 $P$ 点的场强 $E_2$：$P$ 在导线2右侧，负电荷电场向内，$E_2$ 沿 $x$ 轴负方向，大小 $E_2 = \frac{\lambda}{2\pi\varepsilon_0 (x - r_0)}$。

$E_1$ 和 $E_2$ 反方向，叠加后：
$$
E = E_1 - E_2 = \boldsymbol{-\frac{\lambda r_0}{2\pi\varepsilon_0 x (x - r_0)}}
$$
负号表示方向沿 $x$ 轴负方向。

---

#### (2) 求单位长度导线受到的电场力

##### 核心规则
导线自身的电场不会对自己产生力，因此导线受到的力，是**另一根导线在该导线位置产生的外电场**，对导线的作用力。
单位长度受力公式：$F = \lambda \cdot E_{外}$，其中 $\lambda$ 是导线的电荷线密度，$E_{外}$ 是另一根导线产生的外电场。

##### 导线1（$+\lambda$）受到的力
导线1受到的力，是导线2（$-\lambda$）在导线1位置（$x=0$，距离导线2为 $r_0$）产生的外电场，对导线1的作用力。
- 导线2在导线1处产生的外电场大小：$E_2 = \frac{\lambda}{2\pi\varepsilon_0 r_0}$，方向沿 $x$ 轴正方向（指向导线2自身）；
- 导线1单位长度带电量为 $+\lambda$，因此单位长度受力：
  $$
  F_1 = \lambda \cdot E_2 = \boldsymbol{\frac{\lambda^2}{2\pi\varepsilon_0 r_0}}
  $$
  方向：沿 $x$ 轴正方向，指向导线2（异号电荷相互吸引）。

##### 导线2（$-\lambda$）受到的力
导线2受到的力，是导线1（$+\lambda$）在导线2位置（$x=r_0$，距离导线1为 $r_0$）产生的外电场，对导线2的作用力。
- 导线1在导线2处产生的外电场大小：$E_1 = \frac{\lambda}{2\pi\varepsilon_0 r_0}$，方向沿 $x$ 轴正方向；
- 导线2单位长度带电量为 $-\lambda$，因此单位长度受力：
  $$
  F_2 = -\lambda \cdot E_1 = \boldsymbol{-\frac{\lambda^2}{2\pi\varepsilon_0 r_0}}
  $$
  负号表示方向沿 $x$ 轴负方向，指向导线1（异号电荷相互吸引）。

---

### 最终结论
1. 两导线之间的场强最大，方向由正电荷指向负电荷，大小为 $\frac{\lambda r_0}{2\pi\varepsilon_0 x (r_0 - x)}$；
2. 两根导线单位长度受到的吸引力大小均为 $\boldsymbol{\frac{\lambda^2}{2\pi\varepsilon_0 r_0}}$，方向相互指向对方。

---

## 五、大学物理 | 带圆孔无限大带电平面 轴上场强求解

### 题目原文
由平面上的一个半径为 $R$ 的圆面积范围内的电荷所产生的“无限大”平面，面电荷密度为 $\sigma$，试求距离平面 $a$ 处的一点的场强大小的一半。（注：标准题意为：无限大均匀带电平面，面密度为 $\sigma$，挖去半径为 $R$ 的圆孔，求圆孔轴线上距离平面 $a$ 处的场强）

### 核心原理
**补偿法（叠加法）**：挖去圆孔的带电平面，等效于「完整的无限大均匀带电平面（面密度 $\sigma$）」叠加「半径为 $R$、面密度为 $-\sigma$ 的均匀带电圆盘」。
挖去正电荷 = 叠加等量的负电荷，总场强为两个带电体的场强的矢量和。

---

### 分步详解（零跳步）

#### 前置推导1：无限大均匀带电平面的场强（纯积分，无高斯定理）
无限大平面可以视为「半径 $R\to\infty$ 的带电圆盘」，我们先推导带电圆盘的轴上场强公式。

##### 步骤1：均匀带电圆盘轴上场强推导
面密度为 $\sigma$、半径为 $R$ 的圆盘，求轴线上距离圆心 $a$ 处的场强：
1. **取微元**：在圆盘上取一个半径为 $r$、宽度为 $dr$ 的细圆环，圆环面积 $dS=2\pi r dr$，带电量 $dq=\sigma dS=2\pi \sigma r dr$。
2. **细圆环的场强**：细圆环上所有电荷到场点的距离均为 $\sqrt{r^2+a^2}$，对称性分析可知，垂直轴线的场强分量相互抵消，仅保留沿轴线的分量，因此细圆环的场强为：
   $$
   dE = \frac{1}{4\pi\varepsilon_0} \cdot \frac{dq \cdot a}{(r^2+a^2)^{\frac{3}{2}}}
   $$
   代入 $dq=2\pi \sigma r dr$，化简得：
   $$
   dE = \frac{\sigma a r dr}{2\varepsilon_0 (r^2+a^2)^{\frac{3}{2}}}
   $$
3. **积分求总场强**：积分范围 $r:0\to R$：
   $$
   E_{圆盘} = \int_{0}^{R} \frac{\sigma a r dr}{2\varepsilon_0 (r^2+a^2)^{\frac{3}{2}}}
   $$
   令 $u=r^2+a^2$，$du=2r dr$，积分上下限变为 $u:a^2\to R^2+a^2$，代入得：
   $$
   E_{圆盘} = \frac{\sigma a}{4\varepsilon_0} \int_{a^2}^{R^2+a^2} u^{-\frac{3}{2}} du = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{a}{\sqrt{R^2+a^2}} \right)
   $$

##### 步骤2：无限大平面的场强
当圆盘半径 $R\to\infty$ 时，$\frac{a}{\sqrt{R^2+a^2}} \to 0$，因此无限大平面的场强为：
$$
\boldsymbol{E_{平面} = \frac{\sigma}{2\varepsilon_0}}
$$
方向：垂直平面向外（$\sigma>0$ 时）。

---

#### 步骤1：等效模型建立
挖去圆孔的无限大平面 = 完整无限大平面（面密度 $\sigma$） + 带负电的圆盘（面密度 $-\sigma$，半径 $R$）。

总场强为两者的场强叠加：
$$
E_{总} = E_{平面} + E_{负圆盘}
$$

#### 步骤2：计算两个带电体的场强
1. **完整无限大平面的场强**：$E_{平面} = \frac{\sigma}{2\varepsilon_0}$，方向沿轴线向外（垂直平面指向场点）。
2. **带负电圆盘的场强**：面密度为 $-\sigma$，代入圆盘场强公式，得到：
   $$
   E_{负圆盘} = \frac{-\sigma}{2\varepsilon_0} \left( 1 - \frac{a}{\sqrt{R^2+a^2}} \right)
   $$
   负号表示场强方向与正圆盘相反，沿轴线指向圆盘。

#### 步骤3：叠加化简，得到最终结果
两个场强方向均沿轴线，直接代数相加：
$$
E_{总} = E_{平面} + E_{负圆盘}
$$
代入表达式：
$$
E_{总} = \frac{\sigma}{2\varepsilon_0} + \left[ -\frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{a}{\sqrt{R^2+a^2}} \right) \right]
$$
展开化简：
$$
E_{总} = \frac{\sigma}{2\varepsilon_0} - \frac{\sigma}{2\varepsilon_0} + \frac{\sigma a}{2\varepsilon_0 \sqrt{R^2+a^2}}
$$
前两项完全抵消，最终得到：
$$
\boldsymbol{E_{总} = \frac{\sigma a}{2\varepsilon_0 \sqrt{R^2 + a^2}}}
$$

---

### 结果合理性验证
1. **当 $R\to0$（圆孔无限小）**：$E \approx \frac{\sigma a}{2\varepsilon_0 a} = \frac{\sigma}{2\varepsilon_0}$，还原为完整无限大平面的场强，验证正确；
2. **当 $a\to0$（圆孔中心处）**：$E \to 0$，符合对称性，圆孔中心场强相互抵消，验证正确；
3. **当 $a\gg R$（距离远大于圆孔半径）**：展开近似得 $E \approx \frac{\sigma \pi R^2}{4\pi\varepsilon_0 a^2}$，等效为圆孔带电量的点电荷场强，符合物理直觉。

---

## 全篇核心方法论总结
1. **偏导数求解**：极坐标转换→对自变量求偏导构造二元一次方程→加减消元法求解，无需复杂前置知识；
2. **连续带电体场强求解通用步骤**：
   1. 建立坐标系，取可视为点电荷的微元；
   2. 计算微元带电量、到场点的距离，写出微元场强；
   3. 对称性分析，抵消无效分量，简化积分；
   4. 积分求和，得到总场强；
3. **复杂带电体简化技巧**：补偿法（挖空结构=完整结构+反向带电挖空部分）、叠加法（多个带电体场强矢量相加）。
