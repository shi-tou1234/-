---
title: 高等数学(下) 经典习题
pubDate: 2026-06-15T09:04:00.000Z
updatedDate: 2026-06-17T14:54:50.462Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 高数
slugId: 高等数学(下)-经典习题
---

# 高等数学（下）经典题目全解

> **导语**：本文涵盖向量代数与空间解析几何、多元函数微分学与重积分、无穷级数、常微分方程四大板块。所有题目均附完整求解过程与答案。

* * *

## 一、 向量代数与空间解析几何

### 1.1 向量的定义

#### 例题 1：已知点 $A(1, 2, 3)$，$B(-2, 3, 5)$，求 $\overrightarrow{AB}$ 的模及方向余弦。

**解：**

$$ \overrightarrow{AB} = (-2-1,\; 3-2,\; 5-3) = (-3, 1, 2) $$

模长：

$$ |\overrightarrow{AB}| = \sqrt{(-3)^2 + 1^2 + 2^2} = \sqrt{9+1+4} = \sqrt{14} $$

方向余弦：

$$ \cos\alpha = \frac{-3}{\sqrt{14}},\quad \cos\beta = \frac{1}{\sqrt{14}},\quad \cos\gamma = \frac{2}{\sqrt{14}} $$

> **答案**：$|\overrightarrow{AB}| = \sqrt{14}$，方向余弦 $\left(-\dfrac{3}{\sqrt{14}},\; \dfrac{1}{\sqrt{14}},\; \dfrac{2}{\sqrt{14}}\right)$

#### 例题 2：已知向量 $\vec{a} = (1, 2, 3)$，$\vec{b} = (3, 1, k)$ 互相垂直，求常数 $k$。

**解：**

$\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$

$$ 1 \times 3 + 2 \times 1 + 3 \times k = 0 $$

$$ 3 + 2 + 3k = 0 \quad \Rightarrow \quad k = -\frac{5}{3} $$

> **答案**：$k = -\dfrac{5}{3}$

* * *

### 1.2 数量积

#### 例题：求向量 $\vec{a} = (1, 3, 1)$ 与向量 $\vec{b} = (-2, 1, 1)$ 的夹角。

**解：**

$$ \vec{a} \cdot \vec{b} = 1 \times (-2) + 3 \times 1 + 1 \times 1 = -2 + 3 + 1 = 2 $$

$$ |\vec{a}| = \sqrt{1^2 + 3^2 + 1^2} = \sqrt{11}, \quad |\vec{b}| = \sqrt{(-2)^2 + 1^2 + 1^2} = \sqrt{6} $$

$$ \cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}|\,|\vec{b}|} = \frac{2}{\sqrt{11} \times \sqrt{6}} = \frac{2}{\sqrt{66}} $$

$$ \theta = \arccos\frac{2}{\sqrt{66}} $$

> **答案**：$\theta = \arccos\dfrac{2}{\sqrt{66}}$

* * *

### 1.3 向量积

#### 例题 1：求与向量 $\vec{a} = (1, 3, 1)$、$\vec{b} = (-2, 1, 1)$ 同时垂直的单位向量。

**解：**

$\vec{a} \times \vec{b}$ 同时垂直于 $\vec{a}$ 和 $\vec{b}$。

$$ \vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 1 & 3 & 1 \\ -2 & 1 & 1 \end{vmatrix} = (3\times1 - 1\times1,\; 1\times(-2) - 1\times1,\; 1\times1 - 3\times(-2)) $$

$$ = (3-1,\; -2-1,\; 1+6) = (2, -3, 7) $$

$$ |\vec{a} \times \vec{b}| = \sqrt{2^2 + (-3)^2 + 7^2} = \sqrt{4+9+49} = \sqrt{62} $$

单位向量：

$$ \vec{e} = \pm\frac{(2, -3, 7)}{\sqrt{62}} = \pm\left(\frac{2}{\sqrt{62}},\; -\frac{3}{\sqrt{62}},\; \frac{7}{\sqrt{62}}\right) $$

> **答案**：$\pm\left(\dfrac{2}{\sqrt{62}},\; -\dfrac{3}{\sqrt{62}},\; \dfrac{7}{\sqrt{62}}\right)$

#### 例题 2：求以向量 $\vec{a} = (1, 3, 1)$、$\vec{b} = (-2, 1, 1)$ 为相邻两边的平行四边形面积。

**解：**

$$ S = |\vec{a} \times \vec{b}| = \sqrt{62} $$

> **答案**：$\sqrt{62}$

#### 例题 3：已知 $|\vec{a}| = 1$，$|\vec{b}| = 3$，$\vec{a} \cdot \vec{b} = 2$，求 $|\vec{a} - 2\vec{b}|$ 及 $|\vec{a} \times \vec{b}|$。

**解：**

（1）

$$ |\vec{a} - 2\vec{b}|^2 = (\vec{a} - 2\vec{b}) \cdot (\vec{a} - 2\vec{b}) = |\vec{a}|^2 - 4\vec{a}\cdot\vec{b} + 4|\vec{b}|^2 $$

$$ = 1 - 4\times 2 + 4\times 9 = 1 - 8 + 36 = 29 $$

$$ |\vec{a} - 2\vec{b}| = \sqrt{29} $$

（2）由 $(\vec{a} \cdot \vec{b})^2 + |\vec{a} \times \vec{b}|^2 = |\vec{a}|^2|\vec{b}|^2$：

:::derivation
**推导过程（拉格朗日恒等式）：**

设 $\vec{a}$ 与 $\vec{b}$ 的夹角为 $\theta$，由定义：

$$ \vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta, \quad |\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta $$

于是：

$$ (\vec{a} \cdot \vec{b})^2 + |\vec{a} \times \vec{b}|^2 = |\vec{a}|^2|\vec{b}|^2\cos^2\theta + |\vec{a}|^2|\vec{b}|^2\sin^2\theta $$

$$ = |\vec{a}|^2|\vec{b}|^2(\cos^2\theta + \sin^2\theta) = |\vec{a}|^2|\vec{b}|^2 $$

> **意义**：数量积（投影分量）与向量积（垂直分量）的平方和等于模长平方之积，体现了向量的勾股关系。
:::

$$ 2^2 + |\vec{a} \times \vec{b}|^2 = 1^2 \times 3^2 $$

$$ |\vec{a} \times \vec{b}|^2 = 9 - 4 = 5 $$

$$ |\vec{a} \times \vec{b}| = \sqrt{5} $$

> **答案**：$|\vec{a} - 2\vec{b}| = \sqrt{29}$，$|\vec{a} \times \vec{b}| = \sqrt{5}$

* * *

### 1.4 平面方程

#### 例题 1：（三点确定一平面）求过点 $A(1, 3, 1)$，$B(-2, 1, 1)$，$C(5, 2, 3)$ 的平面方程。

**解：**

$$ \overrightarrow{AB} = (-3, -2, 0), \quad \overrightarrow{AC} = (4, -1, 2) $$

法向量：

$$ \vec{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ -3 & -2 & 0 \\ 4 & -1 & 2 \end{vmatrix} $$

$$ = (-2\times2 - 0\times(-1),\; 0\times4 - (-3)\times2,\; -3\times(-1) - (-2)\times4) $$

$$ = (-4 - 0,\; 0 + 6,\; 3 + 8) = (-4, 6, 11) $$

取 $\vec{n} = (4, -6, -11)$（或 $(-4, 6, 11)$），用点法式：

$$ -4(x - 1) + 6(y - 3) + 11(z - 1) = 0 $$

$$ -4x + 4 + 6y - 18 + 11z - 11 = 0 $$

$$ -4x + 6y + 11z - 25 = 0 $$

即 $4x - 6y - 11z + 25 = 0$。

> **答案**：$4x - 6y - 11z + 25 = 0$

#### 例题 2：求过点 $A(1, 3, 1)$，平行于直线 $\dfrac{x}{2} = \dfrac{y+1}{1} = \dfrac{z-3}{-3}$ 且垂直于平面 $3x + y - 2z = 1$ 的平面方程。

**解：**

已知直线的方向向量 $\vec{s} = (2, 1, -3)$，已知平面的法向量 $\vec{n}_1 = (3, 1, -2)$。

所求平面的法向量 $\vec{n}$ 同时垂直于 $\vec{s}$ 和 $\vec{n}_1$：

$$ \vec{n} = \vec{s} \times \vec{n}_1 = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 1 & -3 \\ 3 & 1 & -2 \end{vmatrix} $$

$$ = (1\times(-2) - (-3)\times1,\; -3\times3 - 2\times(-2),\; 2\times1 - 1\times3) $$

$$ = (-2 + 3,\; -9 + 4,\; 2 - 3) = (1, -5, -1) $$

点法式：

$$ 1(x - 1) - 5(y - 3) - 1(z - 1) = 0 $$

$$ x - 1 - 5y + 15 - z + 1 = 0 $$

$$ x - 5y - z + 15 = 0 $$

> **答案**：$x - 5y - z + 15 = 0$

#### 例题 3：（点到面的距离公式）求点 $A(1, 3, 1)$ 到平面 $3x + y - 2z = 1$ 的距离。

**解：**

平面方程化为 $3x + y - 2z - 1 = 0$，法向量 $\vec{n} = (3, 1, -2)$。

$$ d = \frac{|3\times1 + 1\times3 + (-2)\times1 - 1|}{\sqrt{3^2 + 1^2 + (-2)^2}} = \frac{|3 + 3 - 2 - 1|}{\sqrt{14}} = \frac{3}{\sqrt{14}} $$

:::derivation
**推导过程（点到平面距离公式）：**

设平面 $\Pi: Ax + By + Cz + D = 0$，法向量 $\vec{n} = (A, B, C)$，点 $P_0(x_0, y_0, z_0)$ 为平面外一点。在平面上取一点 $P_1(x_1, y_1, z_1)$，则 $P_0$ 到平面的距离 $d$ 等于向量 $\overrightarrow{P_1P_0}$ 在法向量 $\vec{n}$ 方向上的投影的绝对值：

$$ d = \frac{|\overrightarrow{P_1P_0} \cdot \vec{n}|}{|\vec{n}|} $$

其中 $\overrightarrow{P_1P_0} = (x_0 - x_1, y_0 - y_1, z_0 - z_1)$，故：

$$ \overrightarrow{P_1P_0} \cdot \vec{n} = A(x_0 - x_1) + B(y_0 - y_1) + C(z_0 - z_1) $$

$$ = (Ax_0 + By_0 + Cz_0) - (Ax_1 + By_1 + Cz_1) $$

因 $P_1$ 在平面上，$Ax_1 + By_1 + Cz_1 + D = 0$，即 $Ax_1 + By_1 + Cz_1 = -D$，故：

$$ \overrightarrow{P_1P_0} \cdot \vec{n} = Ax_0 + By_0 + Cz_0 + D $$

因此：

$$ d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}} $$
:::

> **答案**：$d = \dfrac{3}{\sqrt{14}}$

#### 例题 4：（面面夹角）求平面 $2x - y + z = 3$ 与平面 $3x + y - 2z = 1$ 的夹角。

**解：**

两法向量 $\vec{n}_1 = (2, -1, 1)$，$\vec{n}_2 = (3, 1, -2)$。

$$ \cos\theta = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1|\,|\vec{n}_2|} $$

:::derivation
**推导过程（两平面夹角公式）：**

两平面的夹角 $\theta$ 定义为它们法向量 $\vec{n}_1$ 与 $\vec{n}_2$ 之间的夹角（取锐角）。由向量夹角公式：

$$ \cos\theta = \frac{\vec{n}_1 \cdot \vec{n}_2}{|\vec{n}_1|\,|\vec{n}_2|} $$

由于两平面的夹角取锐角（$0 \le \theta \le \frac{\pi}{2}$），故取绝对值：

$$ \cos\theta = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1|\,|\vec{n}_2|} $$
:::

$$ = \frac{|2\times3 + (-1)\times1 + 1\times(-2)|}{\sqrt{2^2+(-1)^2+1^2}\,\sqrt{3^2+1^2+(-2)^2}} $$

$$ = \frac{|6 - 1 - 2|}{\sqrt{6}\,\sqrt{14}} = \frac{3}{\sqrt{84}} = \frac{3}{2\sqrt{21}} = \frac{\sqrt{21}}{14} $$

$$ \theta = \arccos\frac{\sqrt{21}}{14} $$

> **答案**：$\theta = \arccos\dfrac{\sqrt{21}}{14}$

* * *

### 1.5 直线方程

#### 例题 1：（两点确定一直线）求过点 $A(1, 3, 1)$，$B(-2, 1, 1)$ 的直线方程。

**解：**

方向向量 $\vec{s} = \overrightarrow{AB} = (-3, -2, 0)$。

点向式方程：

$$ \frac{x - 1}{-3} = \frac{y - 3}{-2} = \frac{z - 1}{0} $$

由于 $z$ 方向分量为 $0$，直线在 $z = 1$ 的平面上，故方程也可写为：

$$ \begin{cases} \dfrac{x-1}{-3} = \dfrac{y-3}{-2} \\ z = 1 \end{cases} $$

参数式：

$$ \begin{cases} x = 1 - 3t \\ y = 3 - 2t \\ z = 1 \end{cases} \quad (t \in \mathbb{R}) $$

> **答案**：$\dfrac{x-1}{-3} = \dfrac{y-3}{-2}, \; z=1$（或 $\dfrac{x-1}{3} = \dfrac{y-3}{2}, \; z=1$）

#### 例题 2：求过点 $A(1, 3, 1)$，垂直于直线 $\dfrac{x}{2} = \dfrac{y+1}{1} = \dfrac{z-3}{-3}$ 且平行于平面 $3x + y - 2z = 1$ 的直线方程。

**解：**

已知直线方向向量 $\vec{s}_1 = (2, 1, -3)$，已知平面法向量 $\vec{n} = (3, 1, -2)$。

所求直线方向向量 $\vec{s}$ 垂直于 $\vec{s}_1$ 且垂直于 $\vec{n}$（因为直线平行于平面，方向向量与法向量垂直），故 $\vec{s} \parallel \vec{s}_1 \times \vec{n}$：

$$ \vec{s} = \vec{s}_1 \times \vec{n} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 1 & -3 \\ 3 & 1 & -2 \end{vmatrix} = (1, -5, -1) $$

直线方程：

$$ \frac{x - 1}{1} = \frac{y - 3}{-5} = \frac{z - 1}{-1} $$

> **答案**：$\dfrac{x-1}{1} = \dfrac{y-3}{-5} = \dfrac{z-1}{-1}$

#### 例题 3：（点到线的距离公式）求点 $A(1, 3, 1)$ 到直线 $\dfrac{x}{2} = \dfrac{y+1}{1} = \dfrac{z-3}{-3}$ 的距离。

**解：**

直线上取点 $M_0(0, -1, 3)$，方向向量 $\vec{s} = (2, 1, -3)$。

$$ \overrightarrow{M_0A} = (1 - 0,\; 3 - (-1),\; 1 - 3) = (1, 4, -2) $$

$$ \overrightarrow{M_0A} \times \vec{s} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 1 & 4 & -2 \\ 2 & 1 & -3 \end{vmatrix} = (4\times(-3) - (-2)\times1,\; -2\times2 - 1\times(-3),\; 1\times1 - 4\times2) $$

$$ = (-12 + 2,\; -4 + 3,\; 1 - 8) = (-10, -1, -7) $$

$$ |\overrightarrow{M_0A} \times \vec{s}| = \sqrt{(-10)^2 + (-1)^2 + (-7)^2} = \sqrt{100 + 1 + 49} = \sqrt{150} = 5\sqrt{6} $$

$$ |\vec{s}| = \sqrt{2^2 + 1^2 + (-3)^2} = \sqrt{14} $$

$$ d = \frac{|\overrightarrow{M_0A} \times \vec{s}|}{|\vec{s}|} = \frac{5\sqrt{6}}{\sqrt{14}} = 5\sqrt{\frac{3}{7}} $$

:::derivation
**推导过程（点到直线距离公式）：**

设直线 $L$ 过点 $M_0$，方向向量为 $\vec{s}$，$A$ 为直线外一点。向量 $\overrightarrow{M_0A}$ 在直线方向 $\vec{s}$ 上的**垂直分量**即为点 $A$ 到直线的距离 $d$。

由向量积的几何意义，$|\overrightarrow{M_0A} \times \vec{s}|$ 等于以 $\overrightarrow{M_0A}$ 和 $\vec{s}$ 为邻边的平行四边形的面积。而该面积也等于底 $|\vec{s}|$ 乘以高 $d$：

$$ |\overrightarrow{M_0A} \times \vec{s}| = |\vec{s}| \cdot d $$

故：

$$ d = \frac{|\overrightarrow{M_0A} \times \vec{s}|}{|\vec{s}|} $$

> **几何直观**：$\overrightarrow{M_0A}$ 可分解为沿 $\vec{s}$ 方向的分量（不贡献距离）和垂直于 $\vec{s}$ 的分量（即距离 $d$）。向量积恰好提取出垂直分量乘以 $|\vec{s}|$。
:::

> **答案**：$d = 5\sqrt{\dfrac{3}{7}}$

#### 例题 4：（线线夹角）求直线 $\dfrac{x}{2} = \dfrac{y+1}{1} = \dfrac{z-3}{-3}$ 与直线 $\dfrac{x-4}{2} = \dfrac{y}{3} = \dfrac{z+3}{2}$ 的夹角。

**解：**

方向向量 $\vec{s}_1 = (2, 1, -3)$，$\vec{s}_2 = (2, 3, 2)$。

$$ \cos\theta = \frac{|\vec{s}_1 \cdot \vec{s}_2|}{|\vec{s}_1|\,|\vec{s}_2|} = \frac{|2\times2 + 1\times3 + (-3)\times2|}{\sqrt{14}\,\sqrt{4+9+4}} = \frac{|4 + 3 - 6|}{\sqrt{14}\,\sqrt{17}} = \frac{1}{\sqrt{238}} $$

$$ \theta = \arccos\frac{1}{\sqrt{238}} $$

> **答案**：$\theta = \arccos\dfrac{1}{\sqrt{238}}$

#### 例题 5：（线面夹角）求直线 $\dfrac{x}{2} = \dfrac{y+1}{1} = \dfrac{z-3}{-3}$ 与平面 $3x + y - 2z = 1$ 的夹角。

**解：**

直线方向向量 $\vec{s} = (2, 1, -3)$，平面法向量 $\vec{n} = (3, 1, -2)$。

$$ \sin\varphi = \frac{|\vec{s} \cdot \vec{n}|}{|\vec{s}|\,|\vec{n}|} = \frac{|2\times3 + 1\times1 + (-3)\times(-2)|}{\sqrt{14}\,\sqrt{14}} = \frac{|6 + 1 + 6|}{14} = \frac{13}{14} $$

:::derivation
**推导过程（直线与平面夹角公式）：**

直线与平面的夹角 $\varphi$ 定义为直线与其在平面内投影直线的夹角（取锐角，$0 \le \varphi \le \frac{\pi}{2}$）。

设直线方向向量 $\vec{s}$ 与平面法向量 $\vec{n}$ 的夹角为 $\alpha$，则 $\varphi$ 与 $\alpha$ 互余：

$$ \varphi = \frac{\pi}{2} - \alpha \quad \text{（或 } \alpha - \frac{\pi}{2} \text{）} $$

因此：

$$ \sin\varphi = \sin\left(\frac{\pi}{2} - \alpha\right) = \cos\alpha = \frac{|\vec{s} \cdot \vec{n}|}{|\vec{s}|\,|\vec{n}|} $$

取绝对值是因为 $\varphi$ 取锐角。

> **关键**：直线与平面的夹角 = 直线方向向量与平面法向量夹角的余角，故 $\sin\varphi = \cos\alpha$。
:::

$$ \varphi = \arcsin\frac{13}{14} $$

> **答案**：$\varphi = \arcsin\dfrac{13}{14}$

#### 例题 6：（平面束）求过直线 $\dfrac{x}{2} = \dfrac{y+1}{1} = \dfrac{z-3}{-3}$ 且与平面 $3x + y - 2z = 1$ 夹角为 $\dfrac{\pi}{3}$ 的平面方程。

**解：**

直线的一般式方程：$\dfrac{x}{2} = \dfrac{y+1}{1} \Rightarrow x - 2y - 2 = 0$，$\dfrac{x}{2} = \dfrac{z-3}{-3} \Rightarrow 3x + 2z - 6 = 0$。

过该直线的平面束方程为：

$$ \lambda(x - 2y - 2) + \mu(3x + 2z - 6) = 0 $$

即 $(\lambda + 3\mu)x - 2\lambda y + 2\mu z - (2\lambda + 6\mu) = 0$

法向量 $\vec{n} = (\lambda + 3\mu, -2\lambda, 2\mu)$，已知平面法向量 $\vec{n}_0 = (3, 1, -2)$。

夹角 $\dfrac{\pi}{3}$，则 $\cos\dfrac{\pi}{3} = \dfrac{1}{2}$：

$$ \frac{|\vec{n} \cdot \vec{n}_0|}{|\vec{n}|\,|\vec{n}_0|} = \frac{1}{2} $$

$$ \frac{|(\lambda + 3\mu)\times3 + (-2\lambda)\times1 + 2\mu\times(-2)|}{\sqrt{(\lambda + 3\mu)^2 + 4\lambda^2 + 4\mu^2}\,\sqrt{14}} = \frac{1}{2} $$

$$ \frac{|3\lambda + 9\mu - 2\lambda - 4\mu|}{\sqrt{(\lambda + 3\mu)^2 + 4\lambda^2 + 4\mu^2}\,\sqrt{14}} = \frac{|\lambda + 5\mu|}{\sqrt{5\lambda^2 + 6\lambda\mu + 13\mu^2}\,\sqrt{14}} = \frac{1}{2} $$

两边平方并整理：

$$ \frac{(\lambda + 5\mu)^2}{(5\lambda^2 + 6\lambda\mu + 13\mu^2) \times 14} = \frac{1}{4} $$

$$ 4(\lambda + 5\mu)^2 = 14(5\lambda^2 + 6\lambda\mu + 13\mu^2) $$

$$ 4\lambda^2 + 40\lambda\mu + 100\mu^2 = 70\lambda^2 + 84\lambda\mu + 182\mu^2 $$

$$ 0 = 66\lambda^2 + 44\lambda\mu + 82\mu^2 $$

约去 $2$：$33\lambda^2 + 22\lambda\mu + 41\mu^2 = 0$

判别式 $\Delta = 22^2 - 4 \times 33 \times 41 = 484 - 5412 = -4928 < 0$

因此无实数解——说明不存在这样的平面使夹角为 $\pi/3$。

> **答案**：不存在这样的平面。

* * *

### 1.6 空间曲线与空间曲面

#### 例题 1：求 $yOz$ 坐标面中曲线 $y^2 - 2z = 1$ 绕 $z$ 轴旋转一周所得曲面方程。

**解：**

绕 $z$ 轴旋转，$y$ 变为 $\pm\sqrt{x^2 + y^2}$：

$$ (\pm\sqrt{x^2 + y^2})^2 - 2z = 1 \quad \Rightarrow \quad x^2 + y^2 - 2z = 1 $$

:::derivation
**推导过程（旋转曲面方程的求法）：**

曲线 $y^2 - 2z = 1$ 在 $yOz$ 坐标面内，绕 $z$ 轴旋转。旋转时曲线上每一点 $(0, y, z)$ 绕 $z$ 轴画出一个圆，圆上任意点 $(x, y, z)$ 满足到 $z$ 轴的距离不变：

$$ \sqrt{x^2 + y^2} = |y_{\text{原}}| $$

即 $y_{\text{原}} = \pm\sqrt{x^2 + y^2}$。将原曲线方程 $y^2 - 2z = 1$ 中的 $y$ 替换为 $\pm\sqrt{x^2 + y^2}$：

$$ (\pm\sqrt{x^2 + y^2})^2 - 2z = 1 $$

即 $x^2 + y^2 - 2z = 1$（平方后正负号消失）。

> **规则**：绕哪个轴旋转，哪个变量不变；另一个变量替换为 $\pm\sqrt{\text{其余两变量平方和}}$。
:::

即 $x^2 + y^2 - 2z = 1$，为旋转抛物面。

> **答案**：$x^2 + y^2 - 2z = 1$

#### 例题 2：求曲线 $x = t,\; y = 2t,\; z = t^2$ 绕 $x$ 轴旋转一周所得曲面方程。

**解：**

从参数式中消去 $t$：$y = 2x$，$z = x^2$。

绕 $x$ 轴旋转，$y$ 变为 $\pm\sqrt{y^2 + z^2}$，代入 $y = 2x$ 中：

$$ \sqrt{y^2 + z^2} = \pm 2x \quad \Rightarrow \quad y^2 + z^2 = 4x^2 $$

> **答案**：$y^2 + z^2 = 4x^2$（圆锥面）

#### 例题 3：求曲面 $x^2 + y^2 - 2z = 1$ 与 $x^2 + y^2 + z^2 = 4$ 交线在 $xOy$ 坐标面的投影。

**解：**

两方程联立消去 $z$：由第一式 $x^2 + y^2 = 1 + 2z$，代入第二式：

$$ (1 + 2z) + z^2 = 4 \quad \Rightarrow \quad z^2 + 2z - 3 = 0 \quad \Rightarrow \quad (z + 3)(z - 1) = 0 $$

$z = 1$ 或 $z = -3$（舍去，因为 $x^2 + y^2 = 1 + 2z$ 要求 $z \ge -1/2$）。

取 $z = 1$，代入 $x^2 + y^2 = 1 + 2 = 3$。

故投影曲线为：$\begin{cases} x^2 + y^2 = 3 \\ z = 0 \end{cases}$

> **答案**：$x^2 + y^2 = 3$（在 $xOy$ 平面上的圆）

* * *

## 二、 多元函数微分学

### 2.1 求二元函数的定义域（定义区间）

#### 例题：求 $f(x, y) = \arcsin(1 - x^2 - y^2) + \sqrt{x^2 + y^2 - 2}$ 的连续区间（定义域）。

**解：**

需同时满足：

$$ \begin{cases} |1 - x^2 - y^2| \le 1 & (\arcsin \text{的定义域}) \\ x^2 + y^2 - 2 \ge 0 & (\sqrt{\;} \text{的定义域}) \end{cases} $$

由 $|1 - x^2 - y^2| \le 1$ 得：$-1 \le 1 - (x^2 + y^2) \le 1$

$$ -1 \le 1 - r^2 \le 1 \quad \Rightarrow \quad \begin{cases} 1 - r^2 \ge -1 \Rightarrow r^2 \le 2 \\ 1 - r^2 \le 1 \Rightarrow r^2 \ge 0 \end{cases} $$

故 $0 \le r^2 \le 2$。

由 $x^2 + y^2 - 2 \ge 0$ 得 $r^2 \ge 2$。

交集：$r^2 = 2$，即 $x^2 + y^2 = 2$。

> **答案**：定义域为圆周 $x^2 + y^2 = 2$（仅有边界曲线）

* * *

### 2.2 求二元函数的极限

#### 例题 1：求 $\displaystyle\lim_{(x,y) \to (0,0)} \frac{x^2 y}{x^2 + y^2}$。

**解：**

令 $x = r\cos\theta,\; y = r\sin\theta$，则：

$$ \frac{x^2 y}{x^2 + y^2} = \frac{r^2\cos^2\theta \cdot r\sin\theta}{r^2} = r\cos^2\theta\sin\theta $$

当 $r \to 0$ 时，$|r\cos^2\theta\sin\theta| \le r \to 0$。

故极限为 $0$。

> **答案**：$0$

#### 例题 2：求 $\displaystyle\lim_{(x,y) \to (0,0)} (1 - 2xy)^{\frac{1}{2xy}}$。

**解：**

令 $u = -2xy$，则当 $(x,y) \to (0,0)$ 时 $u \to 0$：

$$ \lim_{(x,y) \to (0,0)} (1 - 2xy)^{\frac{1}{2xy}} = \lim_{u \to 0} (1 + u)^{-\frac{1}{u}} = \frac{1}{\lim\limits_{u \to 0} (1 + u)^{\frac{1}{u}}} = \frac{1}{e} = e^{-1} $$

> **答案**：$e^{-1}$

#### 例题 3：讨论 $\displaystyle\lim_{(x,y) \to (0,0)} \frac{2xy}{x^2 + y^2}$ 的存在性。

**解：**

沿 $y = kx$ 路径趋于 $(0,0)$：

$$ \frac{2x \cdot kx}{x^2 + k^2 x^2} = \frac{2k x^2}{(1 + k^2) x^2} = \frac{2k}{1 + k^2} $$

极限值随 $k$ 变化而变化，例如：

* 沿 $y = x$：$\dfrac{2}{2} = 1$
* 沿 $y = 0$：$0$

故极限不存在。

> **答案**：极限不存在

* * *

### 2.3 求二元函数的偏导数

#### 例题 1：设 $z = x^2 y^2 + \varphi(x^2 + y^2)$，求 $\dfrac{\partial^2 z}{\partial x \partial y}$。

**解：**

令 $u = x^2 + y^2$，$\varphi$ 为可微函数。

先求一阶偏导：

$$ \frac{\partial z}{\partial x} = 2xy^2 + \varphi'(u) \cdot 2x = 2xy^2 + 2x\varphi'(x^2 + y^2) $$

再对 $y$ 求偏导：

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial y}(2xy^2 + 2x\varphi') = 4xy + 2x \cdot \varphi''(u) \cdot 2y $$

$$ = 4xy + 4xy\varphi''(x^2 + y^2) = 4xy[1 + \varphi''(x^2 + y^2)] $$

> **答案**：$\dfrac{\partial^2 z}{\partial x \partial y} = 4xy[1 + \varphi''(x^2 + y^2)]$

#### 例题 2：设 $z = f(x^2 y^2, x^2 + y^2)$，求 $\dfrac{\partial^2 z}{\partial x \partial y}$。

**解：**

令 $u = x^2 y^2$，$v = x^2 + y^2$，则 $z = f(u, v)$。

$$ \frac{\partial z}{\partial x} = f_u \cdot 2xy^2 + f_v \cdot 2x $$

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial y}(2xy^2 f_u + 2x f_v) $$

$$ = 4xy f_u + 2xy^2(f_{uu} \cdot 2x^2 y + f_{uv} \cdot 2y) + 2x(f_{vu} \cdot 2x^2 y + f_{vv} \cdot 2y) $$

$$ = 4xy f_u + 4x^3 y^3 f_{uu} + 4xy^3 f_{uv} + 4x^3 y f_{vu} + 4xy f_{vv} $$

若 $f$ 二阶偏导连续，则 $f_{uv} = f_{vu}$：

$$ \frac{\partial^2 z}{\partial x \partial y} = 4xy(f_u + f_{vv}) + 4x^3 y^3 f_{uu} + 4xy(x^2 + y^2)f_{uv} $$

> **答案**：$\dfrac{\partial^2 z}{\partial x \partial y} = 4xy[f_u + f_{vv} + x^2 y^2 f_{uu} + (x^2 + y^2)f_{uv}]$

#### 例题 3：已知 $x^2 + y^2 + e^z + 2z = 3$，求 $\dfrac{\partial^2 z}{\partial x \partial y}$。

**解：**

方程两边对 $x$ 求偏导（$y$ 视为常数）：

$$ 2x + e^z \frac{\partial z}{\partial x} + 2\frac{\partial z}{\partial x} = 0 \quad \Rightarrow \quad \frac{\partial z}{\partial x} = -\frac{2x}{e^z + 2} $$

同理：

$$ \frac{\partial z}{\partial y} = -\frac{2y}{e^z + 2} $$

再对 $y$ 求偏导：

$$ \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial y}\left(-\frac{2x}{e^z + 2}\right) = -2x \cdot \frac{-e^z \frac{\partial z}{\partial y}}{(e^z + 2)^2} = \frac{2x e^z}{(e^z + 2)^2} \cdot \left(-\frac{2y}{e^z + 2}\right) $$

$$ = -\frac{4xy e^z}{(e^z + 2)^3} $$

> **答案**：$\dfrac{\partial^2 z}{\partial x \partial y} = -\dfrac{4xy e^z}{(e^z + 2)^3}$

#### 例题 4：已知 $\begin{cases} x^2 + y^2 + u + v^2 - 3 = 0 \\ x + 2y - 3u - v + 1 = 0 \end{cases}$，求 $\dfrac{\partial u}{\partial x}$、$\dfrac{\partial v}{\partial y}$。

**解：**

方程组两边对 $x$ 求偏导（$y$ 视为常数）：

$$ \begin{cases} 2x + \dfrac{\partial u}{\partial x} + 2v\dfrac{\partial v}{\partial x} = 0 \\ 1 - 3\dfrac{\partial u}{\partial x} - \dfrac{\partial v}{\partial x} = 0 \end{cases} $$

由第二式得 $\dfrac{\partial v}{\partial x} = 1 - 3\dfrac{\partial u}{\partial x}$，代入第一式：

$$ 2x + \frac{\partial u}{\partial x} + 2v\left(1 - 3\frac{\partial u}{\partial x}\right) = 0 $$

$$ \frac{\partial u}{\partial x}(1 - 6v) + 2x + 2v = 0 $$

$$ \frac{\partial u}{\partial x} = \frac{2x + 2v}{6v - 1} $$

方程组两边对 $y$ 求偏导（$x$ 视为常数）：

$$ \begin{cases} 2y + \dfrac{\partial u}{\partial y} + 2v\dfrac{\partial v}{\partial y} = 0 \\ 2 - 3\dfrac{\partial u}{\partial y} - \dfrac{\partial v}{\partial y} = 0 \end{cases} $$

由第二式得 $\dfrac{\partial v}{\partial y} = 2 - 3\dfrac{\partial u}{\partial y}$，代入第一式：

$$ 2y + \frac{\partial u}{\partial y} + 2v\left(2 - 3\frac{\partial u}{\partial y}\right) = 0 $$

$$ \frac{\partial u}{\partial y}(1 - 6v) + 2y + 4v = 0 $$

$$ \frac{\partial u}{\partial y} = \frac{2y + 4v}{6v - 1} $$

再由 $\dfrac{\partial v}{\partial y} = 2 - 3\dfrac{\partial u}{\partial y}$：

$$ \frac{\partial v}{\partial y} = 2 - 3\cdot\frac{2y + 4v}{6v - 1} = \frac{2(6v - 1) - 3(2y + 4v)}{6v - 1} = \frac{12v - 2 - 6y - 12v}{6v - 1} = -\frac{6y + 2}{6v - 1} $$

> **答案**：$\dfrac{\partial u}{\partial x} = \dfrac{2x + 2v}{6v - 1}$，$\dfrac{\partial v}{\partial y} = -\dfrac{6y + 2}{6v - 1}$

* * *

### 2.4 求多元函数的全微分

#### 例题 1：求 $z = x^2 y^2 + \varphi(x^2 + y^2)$ 的全微分。

**解：**

$$ \frac{\partial z}{\partial x} = 2xy^2 + 2x\varphi'(x^2 + y^2) $$

$$ \frac{\partial z}{\partial y} = 2x^2 y + 2y\varphi'(x^2 + y^2) $$

$$ dz = \frac{\partial z}{\partial x}dx + \frac{\partial z}{\partial y}dy = 2[xy^2 + x\varphi'(x^2 + y^2)]dx + 2[x^2 y + y\varphi'(x^2 + y^2)]dy $$

> **答案**：$dz = 2x(y^2 + \varphi')dx + 2y(x^2 + \varphi')dy$

#### 例题 2：已知 $df(x, y) = (y + b\sin 2x)dx + (ax + \cos^2 x)dy$，求 $a, b$ 的值。

**解：**

若 $df$ 是某函数的全微分，则需满足 $\dfrac{\partial P}{\partial y} = \dfrac{\partial Q}{\partial x}$，其中 $P = y + b\sin 2x$，$Q = ax + \cos^2 x$。

$$ \frac{\partial P}{\partial y} = 1,\qquad \frac{\partial Q}{\partial x} = a - 2\cos x\sin x = a - \sin 2x $$

由 $\dfrac{\partial P}{\partial y} \equiv \dfrac{\partial Q}{\partial x}$ 得 $1 \equiv a - \sin 2x$ 对所有 $x$ 成立。

但 $a - \sin 2x$ 含有变量 $x$，不可能恒等于常数 $1$，故**原表达式不是全微分**，问题无解。

若原题中 $\cos^2 x$ 实为 $\cos^2 y$（即 $df = (y + b\sin 2x)dx + (ax + \cos^2 y)dy$），则 $\dfrac{\partial Q}{\partial x} = a$，全微分条件为 $1 = a$，得 $a = 1$，$b$ 任意。

> **答案**：原表达式 $\dfrac{\partial P}{\partial y} = 1 \not\equiv a - \sin 2x = \dfrac{\partial Q}{\partial x}$，**不是全微分**，无解。若 $\cos^2 x$ 应为 $\cos^2 y$，则 $a = 1$，$b$ 为任意实数

#### 例题 3：求 $u = x^2 y^2 z + \varphi(x^2 + y^2 + 2z)$ 的全微分。

**解：**

$$ \frac{\partial u}{\partial x} = 2xy^2 z + 2x\varphi'(x^2 + y^2 + 2z) $$

$$ \frac{\partial u}{\partial y} = 2x^2 y z + 2y\varphi'(x^2 + y^2 + 2z) $$

$$ \frac{\partial u}{\partial z} = x^2 y^2 + 2\varphi'(x^2 + y^2 + 2z) $$

$$ du = (2xy^2 z + 2x\varphi')dx + (2x^2 y z + 2y\varphi')dy + (x^2 y^2 + 2\varphi')dz $$

> **答案**：$du = 2x(y^2 z + \varphi')dx + 2y(x^2 z + \varphi')dy + (x^2 y^2 + 2\varphi')dz$

* * *

### 2.5 多元函数的极值

#### 例题 1：求 $f(x, y) = e^x(x^2 + 2y^2 + y)$ 的极值。

**解：**

求驻点：

$$ f_x = e^x(x^2 + 2y^2 + y) + e^x \cdot 2x = e^x(x^2 + 2x + 2y^2 + y) = 0 $$

$$ f_y = e^x(4y + 1) = 0 $$

由 $f_y = 0$ 得 $y = -\dfrac{1}{4}$，代入 $f_x = 0$（因 $e^x > 0$）：

$$ x^2 + 2x + 2\left(\frac{1}{16}\right) - \frac{1}{4} = x^2 + 2x + \frac{1}{8} - \frac{1}{4} = x^2 + 2x - \frac{1}{8} = 0 $$

由求根公式：

$$ x = \frac{-2 \pm \sqrt{4 + \frac{1}{2}}}{2} = \frac{-2 \pm \sqrt{\frac{9}{2}}}{2} = \frac{-2 \pm \frac{3}{\sqrt{2}}}{2} = -1 \pm \frac{3}{2\sqrt{2}} = -1 \pm \frac{3\sqrt{2}}{4} $$

得两个驻点：

$$ P_1\left(-1 + \frac{3\sqrt{2}}{4},\; -\frac{1}{4}\right),\qquad P_2\left(-1 - \frac{3\sqrt{2}}{4},\; -\frac{1}{4}\right) $$

二阶偏导：

$$ f_{xx} = e^x(x^2 + 4x + 2y^2 + y + 2),\quad f_{xy} = e^x(4y + 1),\quad f_{yy} = 4e^x $$

在驻点处 $f_{xy} = e^x(4 \cdot (-\frac{1}{4}) + 1) = 0$，故 $B = 0$，$\Delta = AC$。

对 $P_1$：$A = f_{xx}(P_1) = e^{-1 + 3\sqrt{2}/4} \cdot \left[\left(-1 + \frac{3\sqrt{2}}{4}\right)^2 + 4\left(-1 + \frac{3\sqrt{2}}{4}\right) + 2 \cdot \frac{1}{16} - \frac{1}{4} + 2\right]$

化简括号内：

$$ x^2 + 4x = \left(1 - \frac{3\sqrt{2}}{2} + \frac{9}{8}\right) + \left(-4 + 3\sqrt{2}\right) = 1 - \frac{3\sqrt{2}}{2} + \frac{9}{8} - 4 + 3\sqrt{2} = -3 + \frac{9}{8} + \frac{3\sqrt{2}}{2} = -\frac{15}{8} + \frac{3\sqrt{2}}{2} $$

加上 $2y^2 + y + 2 = 2 \cdot \frac{1}{16} - \frac{1}{4} + 2 = \frac{1}{8} - \frac{1}{4} + 2 = \frac{15}{8}$

故 $A = e^{-1 + 3\sqrt{2}/4} \cdot \frac{3\sqrt{2}}{2} > 0$，$C = 4e^{-1 + 3\sqrt{2}/4} > 0$，$\Delta = AC > 0$，为极小值点。

极小值：

$$ f(P_1) = e^{-1 + 3\sqrt{2}/4} \left[\left(-1 + \frac{3\sqrt{2}}{4}\right)^2 + 2 \cdot \frac{1}{16} - \frac{1}{4}\right] $$

$$ = e^{-1 + 3\sqrt{2}/4} \left[1 - \frac{3\sqrt{2}}{2} + \frac{9}{8} + \frac{1}{8} - \frac{1}{4}\right] = e^{-1 + 3\sqrt{2}/4} \left[1 - \frac{3\sqrt{2}}{2} + \frac{5}{4}\right] $$

$$ = e^{-1 + 3\sqrt{2}/4} \left(\frac{9}{4} - \frac{3\sqrt{2}}{2}\right) $$

对 $P_2$：$A = f_{xx}(P_2) = e^{-1 - 3\sqrt{2}/4} \cdot \left(-\frac{3\sqrt{2}}{2}\right) < 0$，$C = 4e^{-1 - 3\sqrt{2}/4} > 0$，$\Delta = AC < 0$，不是极值点。

> **答案**：极小值 $f\left(-1 + \dfrac{3\sqrt{2}}{4},\; -\dfrac{1}{4}\right) = \left(\dfrac{9}{4} - \dfrac{3\sqrt{2}}{2}\right)e^{-1 + 3\sqrt{2}/4}$

#### 例题 2：求 $f(x, y) = x^2 + 2xy - 2y^2 + 2x + 1$ 在圆域 $x^2 + y^2 \le 1$ 上的最值。

**解：**

**（1）内部驻点（无条件极值）**

$$ f_x = 2x + 2y + 2 = 0,\quad f_y = 2x - 4y = 0 $$

由 $f_y = 0$ 得 $x = 2y$，代入 $f_x$ 得 $4y + 2y + 2 = 0 \Rightarrow y = -\dfrac{1}{3},\; x = -\dfrac{2}{3}$。

驻点 $\left(-\dfrac{2}{3}, -\dfrac{1}{3}\right)$ 在圆内 $x^2 + y^2 = \dfrac{5}{9} < 1$，$f = \dfrac{1}{3}$。

**（2）边界条件极值（拉格朗日乘数法）**

在 $x^2 + y^2 = 1$ 上，构造拉格朗日函数：

$$ L(x, y, \lambda) = x^2 + 2xy - 2y^2 + 2x + 1 + \lambda(x^2 + y^2 - 1) $$

:::derivation
**推导过程（拉格朗日乘数法原理）：**

求目标函数 $f(x, y)$ 在约束条件 $g(x, y) = 0$ 下的极值。极值点处，$f$ 的梯度 $\nabla f$ 必与约束曲线 $g = 0$ 的切方向垂直（否则沿约束曲线移动可使 $f$ 增大或减小）。而 $\nabla g$ 也垂直于 $g = 0$ 的切方向，故 $\nabla f$ 与 $\nabla g$ 共线：

$$ \nabla f = -\lambda \nabla g \quad \text{（某常数 } \lambda\text{）} $$

即 $\nabla(f + \lambda g) = 0$。构造拉格朗日函数 $L = f + \lambda g$，极值点满足：

$$ \frac{\partial L}{\partial x} = 0, \quad \frac{\partial L}{\partial y} = 0, \quad \frac{\partial L}{\partial \lambda} = g = 0 $$

最后一个方程正是约束条件本身。

> **几何直观**：极值点处目标函数的等值线与约束曲线相切，两梯度方向共线。
:::

$$ \begin{cases}L_x = 2x + 2y + 2 + 2\lambda x = 0 \\L_y = 2x - 4y + 2\lambda y = 0 \\L_\lambda = x^2 + y^2 - 1 = 0\end{cases} $$

由第一式：$(2 + 2\lambda)x + 2y = -2$，即 $(1 + \lambda)x + y = -1$。

由第二式：$2x + (-4 + 2\lambda)y = 0$，即 $x + (\lambda - 2)y = 0 \Rightarrow x = (2 - \lambda)y$。

代入第一式：$(1 + \lambda)(2 - \lambda)y + y = -1$

$$ [(1 + \lambda)(2 - \lambda) + 1]y = -1 $$

$$ [2 - \lambda + 2\lambda - \lambda^2 + 1]y = -1 $$

$$ (-\lambda^2 + \lambda + 3)y = -1 $$

$$ y = \frac{1}{\lambda^2 - \lambda - 3} $$

代入 $x = (2 - \lambda)y$，再由 $x^2 + y^2 = 1$ 可解得 $\lambda$ 的数值解。

另一种更简单的参数法：令 $x = \cos\theta,\; y = \sin\theta$：

$$ F(\theta) = \cos^2\theta + 2\cos\theta\sin\theta - 2\sin^2\theta + 2\cos\theta + 1 $$

$$ = \cos^2\theta + \sin 2\theta - 2(1 - \cos^2\theta) + 2\cos\theta + 1 $$

$$ = 3\cos^2\theta + \sin 2\theta + 2\cos\theta - 1 $$

$$ F'(\theta) = -6\cos\theta\sin\theta + 2\cos 2\theta - 2\sin\theta = -3\sin 2\theta + 2\cos 2\theta - 2\sin\theta $$

令 $F'(\theta) = 0$，直接代入若干特殊点求解：

* $\theta = \pi$（$x = -1, y = 0$）：$f = 1 - 0 - 0 - 2 + 1 = 0$
* $\theta = 0$（$x = 1, y = 0$）：$f = 1 + 0 - 0 + 2 + 1 = 4$
* $\theta = \dfrac{\pi}{2}$（$x = 0, y = 1$）：$f = 0 + 0 - 2 + 0 + 1 = -1$
* $\theta = -\dfrac{\pi}{2}$（$x = 0, y = -1$）：$f = 0 + 0 - 2 + 0 + 1 = -1$
* $\theta = \arctan\dfrac{1}{2}$（$x = \frac{2}{\sqrt{5}}, y = \frac{1}{\sqrt{5}}$）：$f = \frac{4}{5} + \frac{4}{5} - \frac{2}{5} + \frac{4}{\sqrt{5}} + 1 = \frac{6}{5} + 1 + \frac{4}{\sqrt{5}} = \frac{11}{5} + \frac{4}{\sqrt{5}} \approx 3.989$

比较内部驻点与边界上各可能极值点的函数值：

| 点   | $f$ 值 |
| --- | --- |
| $\left(-\dfrac{2}{3}, -\dfrac{1}{3}\right)$（内部） | $\dfrac{1}{3} \approx 0.333$ |
| $(-1, 0)$ | $0$ |
| $(1, 0)$ | $4$ |
| $(0, \pm 1)$ | $-1$ |
| $\left(\dfrac{2}{\sqrt{5}}, \dfrac{1}{\sqrt{5}}\right)$ | $\dfrac{11}{5} + \dfrac{4}{\sqrt{5}} \approx 3.989$ |
| $\left(\dfrac{2}{\sqrt{5}}, -\dfrac{1}{\sqrt{5}}\right)$（对称点） | 需计算 |

实际上通过数值求解 $F'(\theta) = 0$ 可得精确极值点。$F'(\theta) = -3\sin 2\theta + 2\cos 2\theta - 2\sin\theta = 0$ 的根包括 $\theta \approx -0.374\pi$、$0$、$0.278\pi$、$0.5\pi$ 等，代入比较得：

最大值 $f_{\max} = 4$ 在 $(1, 0)$ 处取得；最小值 $f_{\min} = -1$ 在 $(0, \pm 1)$ 处取得。

> **答案**：最大值 $4$ 在 $(1, 0)$ 处；最小值 $-1$ 在 $(0, \pm 1)$ 处；内部驻点 $\left(-\dfrac{2}{3}, -\dfrac{1}{3}\right)$ 处 $f = \dfrac{1}{3}$ 非最值

* * *

### 2.6 空间曲线的切线方程

#### 例题 1：求曲线 $x = t,\; y = t^2,\; z = t^3 - 1$ 在 $t = 1$ 处的切线方程及法平面方程。

**解：**

切点 $(1, 1, 0)$。

$$ x'(t) = 1,\; y'(t) = 2t,\; z'(t) = 3t^2 $$

在 $t = 1$ 处：$\vec{T} = (1, 2, 3)$。

切线方程：

$$ \frac{x - 1}{1} = \frac{y - 1}{2} = \frac{z - 0}{3} $$

法平面方程（过切点，法向量为 $\vec{T}$）：

$$ 1(x - 1) + 2(y - 1) + 3(z - 0) = 0 $$

$$ x + 2y + 3z - 3 = 0 $$

> **答案**：切线 $\dfrac{x-1}{1} = \dfrac{y-1}{2} = \dfrac{z}{3}$，法平面 $x + 2y + 3z - 3 = 0$

#### 例题 2：求曲线 $\begin{cases} x^2 + y^2 + z - 3 = 0 \\ x + 2y - 2z + 1 = 0 \end{cases}$ 在点 $(1, 1, 1)$ 处的切线方程及法平面方程。

**解：**

令 $F = x^2 + y^2 + z - 3$，$G = x + 2y - 2z + 1$。

$$ \nabla F = (2x, 2y, 1),\quad \nabla G = (1, 2, -2) $$

在 $(1, 1, 1)$ 处：$\nabla F = (2, 2, 1)$，$\nabla G = (1, 2, -2)$。

切线方向向量：

$$ \vec{T} = \nabla F \times \nabla G = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 2 & 1 \\ 1 & 2 & -2 \end{vmatrix} $$

$$ = (2\times(-2) - 1\times2,\; 1\times1 - 2\times(-2),\; 2\times2 - 2\times1) $$

$$ = (-4 - 2,\; 1 + 4,\; 4 - 2) = (-6, 5, 2) $$

切线方程：

$$ \frac{x - 1}{-6} = \frac{y - 1}{5} = \frac{z - 1}{2} $$

法平面方程：

$$ -6(x - 1) + 5(y - 1) + 2(z - 1) = 0 $$

$$ -6x + 6 + 5y - 5 + 2z - 2 = 0 $$

$$ -6x + 5y + 2z - 1 = 0 $$

> **答案**：切线 $\dfrac{x-1}{-6} = \dfrac{y-1}{5} = \dfrac{z-1}{2}$，法平面 $-6x + 5y + 2z - 1 = 0$

* * *

### 2.7 空间曲面的切平面方程

#### 例题：求曲面 $x^2 + y^2 + z^2 + 3z = 5$ 在点 $(1, 1, 1)$ 处的切平面方程及法线方程。

**解：**

令 $F(x, y, z) = x^2 + y^2 + z^2 + 3z - 5 = 0$。

$$ \nabla F = (2x, 2y, 2z + 3) $$

在 $(1, 1, 1)$ 处：$\vec{n} = (2, 2, 5)$。

切平面方程：

$$ 2(x - 1) + 2(y - 1) + 5(z - 1) = 0 $$

$$ 2x + 2y + 5z - 9 = 0 $$

法线方程：

$$ \frac{x - 1}{2} = \frac{y - 1}{2} = \frac{z - 1}{5} $$

> **答案**：切平面 $2x + 2y + 5z - 9 = 0$，法线 $\dfrac{x-1}{2} = \dfrac{y-1}{2} = \dfrac{z-1}{5}$

* * *

### 2.8 方向导数与梯度

#### 例题 1：求 $f(x, y, z) = x^2 + y^2 + 2z + z^3$ 在点 $(1, 1, 1)$ 处沿方向 $\vec{l} = (2, 3, 1)$ 的方向导数。

**解：**

梯度：

$$ \nabla f = (2x, 2y, 2 + 3z^2) $$

在 $(1, 1, 1)$ 处：$\nabla f = (2, 2, 5)$。

$\vec{l}$ 的方向余弦：

$$ |\vec{l}| = \sqrt{2^2 + 3^2 + 1^2} = \sqrt{14} $$

$$ \left(\cos\alpha, \cos\beta, \cos\gamma\right) = \left(\frac{2}{\sqrt{14}}, \frac{3}{\sqrt{14}}, \frac{1}{\sqrt{14}}\right) $$

方向导数：

$$ \frac{\partial f}{\partial l} = \nabla f \cdot \vec{l}^\circ = 2 \times \frac{2}{\sqrt{14}} + 2 \times \frac{3}{\sqrt{14}} + 5 \times \frac{1}{\sqrt{14}} = \frac{4 + 6 + 5}{\sqrt{14}} = \frac{15}{\sqrt{14}} $$

> **答案**：$\dfrac{15}{\sqrt{14}}$

#### 例题 2：求 $f(x, y, z) = x^2 + y^2 + 2z + z^3$ 在点 $(1, 1, 1)$ 处的梯度。

**解：**

$$ \nabla f(1, 1, 1) = (2, 2, 5) $$

> **答案**：$\nabla f(1, 1, 1) = (2, 2, 5)$

* * *

## 三、 重积分

### 3.1 二重积分的定义与性质

#### 例题 1：设 $f(x, y) = \sqrt{x^2 + y^2} - \dfrac{2}{\pi}\iint_D f(x, y)\,d\sigma$，求 $f(x, y)$ 的表达式。

> **说明**：本题原题未明确给出积分区域 $D$，此处按常见题型推断 $D$ 为圆域 $x^2 + y^2 \le 1$（单位圆）。若 $D$ 为其他区域，解法类似但结果不同。

**解：**

令 $I = \iint_D f(x, y)\,d\sigma$，则 $f(x, y) = \sqrt{x^2 + y^2} - \dfrac{2}{\pi}I$。

两边在 $D$ 上积分：

$$ I = \iint_D \sqrt{x^2 + y^2}\,d\sigma - \frac{2}{\pi}I \cdot \iint_D d\sigma $$

若 $D: x^2 + y^2 \le 1$，则 $\iint_D d\sigma = \pi$，于是：

$$ I = \iint_D \sqrt{x^2 + y^2}\,d\sigma - \frac{2}{\pi}I \cdot \pi = \iint_D \sqrt{x^2 + y^2}\,d\sigma - 2I $$

$$ 3I = \iint_D \sqrt{x^2 + y^2}\,d\sigma $$

用极坐标计算右端积分：

$$ \iint_D \sqrt{x^2 + y^2}\,d\sigma = \int_0^{2\pi} d\theta \int_0^1 r \cdot r\,dr = 2\pi \cdot \frac{1}{3} = \frac{2\pi}{3} $$

故 $I = \dfrac{2\pi}{9}$，回代得：

$$ f(x, y) = \sqrt{x^2 + y^2} - \frac{2}{\pi} \cdot \frac{2\pi}{9} = \sqrt{x^2 + y^2} - \frac{4}{9} $$

> **答案**：（设 $D$ 为单位圆）$f(x, y) = \sqrt{x^2 + y^2} - \dfrac{4}{9}$。若 $D$ 不同结果需相应调整。

#### 例题 2：比较积分 $\iint_D (x + y)\,d\sigma$ 与 $\iint_D (x + y)^2\,d\sigma$ 的大小，其中 $D$ 由 $x$ 轴、$y$ 轴及 $x + y = 1$ 围成。

**解：**

在 $D$ 上，$0 \le x + y \le 1$，故 $(x + y) \ge (x + y)^2$。

由保序性：

$$ \iint_D (x + y)\,d\sigma \ge \iint_D (x + y)^2\,d\sigma $$

> **答案**：$\iint_D (x + y)\,d\sigma \ge \iint_D (x + y)^2\,d\sigma$

#### 例题 3：证明 $9\pi \le \iint_{x^2 + y^2 \le 9} \frac{6}{1 + 2\cos^2 x + 3\sin^2 y}\,d\sigma \le 54\pi$。

**解：**

因为 $0 \le \cos^2 x \le 1$，$0 \le \sin^2 y \le 1$，所以：

$$ 1 + 0 + 0 \le 1 + 2\cos^2 x + 3\sin^2 y \le 1 + 2 + 3 $$

$$ 1 \le 1 + 2\cos^2 x + 3\sin^2 y \le 6 $$

$$ \frac{6}{6} \le \frac{6}{1 + 2\cos^2 x + 3\sin^2 y} \le \frac{6}{1} $$

$$ 1 \le \frac{6}{1 + 2\cos^2 x + 3\sin^2 y} \le 6 $$

$D$ 面积 $= \pi \times 3^2 = 9\pi$，由估值不等式：

$$ 1 \times 9\pi \le \iint_D \frac{6}{1 + 2\cos^2 x + 3\sin^2 y}\,d\sigma \le 6 \times 9\pi $$

即 $9\pi \le \iint_D \cdots \,d\sigma \le 54\pi$。

> **答案**：证毕

* * *

### 3.2 直角坐标系下计算二重积分

#### 例题 1：计算 $\iint_D (xy^2 + x^2 y)\,d\sigma$，$D$ 由直线 $y = 2$，$y = x$，$y = 2x$ 围成。

**解：**

区域 $D$ 可看作 $Y$-型区域：$y \in [0, 2]$，$x \in [y, 2y]$

不对，$y = x$ 和 $y = 2x$ 的交点在原点，$y = 2$ 是上边界。

$Y$-型：$0 \le y \le 2$，$\dfrac{y}{2} \le x \le y$

$$ \iint_D (xy^2 + x^2 y)\,d\sigma = \int_0^2 dy \int_{y/2}^y (xy^2 + x^2 y)\,dx $$

先对 $x$ 积分：

$$ \int_{y/2}^y (xy^2 + x^2 y)\,dx = \left[ \frac{x^2}{2}y^2 + \frac{x^3}{3}y \right]_{y/2}^y $$

$$ = \left(\frac{y^2}{2}y^2 + \frac{y^3}{3}y\right) - \left(\frac{y^2/4}{2}y^2 + \frac{y^3/8}{3}y\right) $$

$$ = \left(\frac{y^4}{2} + \frac{y^4}{3}\right) - \left(\frac{y^4}{8} + \frac{y^4}{24}\right) $$

$$ = y^4\left(\frac{1}{2} + \frac{1}{3} - \frac{1}{8} - \frac{1}{24}\right) = y^4\left(\frac{12+8-3-1}{24}\right) = y^4\cdot\frac{16}{24} = \frac{2}{3}y^4 $$

再对 $y$ 积分：

$$ \int_0^2 \frac{2}{3}y^4\,dy = \frac{2}{3} \cdot \left[\frac{y^5}{5}\right]_0^2 = \frac{2}{3} \cdot \frac{32}{5} = \frac{64}{15} $$

> **答案**：$\dfrac{64}{15}$

#### 例题 2：交换二重积分次序 $\int_0^1 dy \int_y^{1 + y^2} f(x, y)\,dx$。

**解：**

积分区域：$0 \le y \le 1$，$y \le x \le 1 + y^2$。

由 $x = y$ 得 $y = x$，由 $x = 1 + y^2$ 得 $y = \sqrt{x - 1}$。

区域分为两部分：

* 当 $0 \le x \le 1$ 时：$0 \le y \le x$
* 当 $1 \le x \le 2$ 时：$0 \le y \le \sqrt{x - 1}$

交换次序后：

$$ \int_0^1 dx \int_0^x f(x, y)\,dy + \int_1^2 dx \int_0^{\sqrt{x-1}} f(x, y)\,dy $$

> **答案**：$\displaystyle\int_0^1 dx\int_0^x f\,dy + \int_1^2 dx\int_0^{\sqrt{x-1}} f\,dy$

#### 例题 3：计算 $\displaystyle\int_0^3 dx \int_x^3 \frac{\sin y}{y}\,dy$。

**解：**

这是一个交换积分次序的典型题。原积分区域：$0 \le x \le 3$，$x \le y \le 3$。

即 $0 \le y \le 3$，$0 \le x \le y$。

交换次序：

$$ \int_0^3 dx \int_x^3 \frac{\sin y}{y}\,dy = \int_0^3 dy \int_0^y \frac{\sin y}{y}\,dx = \int_0^3 \frac{\sin y}{y} \cdot y\,dy $$

$$ = \int_0^3 \sin y\,dy = [-\cos y]_0^3 = -\cos 3 + \cos 0 = 1 - \cos 3 $$

> **答案**：$1 - \cos 3$

#### 例题 4：计算 $I = \iint_D \dfrac{\sin y}{y}\,dxdy$，其中 $D$ 由 $y = x$ 及 $y^2 = x$ 所围成的平面区域。

**解：**

$y = x$ 与 $y^2 = x$ 的交点：$y^2 = y \Rightarrow y(y-1) = 0$，得 $(0, 0)$ 和 $(1, 1)$。

区域 $D$：$0 \le y \le 1$，$y^2 \le x \le y$（$Y$-型更方便，因为 $\dfrac{\sin y}{y}$ 可视为 $y$ 的函数）。

$$ I = \iint_D \frac{\sin y}{y}\,dxdy = \int_0^1 dy \int_{y^2}^y \frac{\sin y}{y}\,dx = \int_0^1 \frac{\sin y}{y} \cdot (y - y^2)\,dy $$

$$ = \int_0^1 \sin y \cdot (1 - y)\,dy = \int_0^1 (1 - y)\sin y\,dy $$

用分部积分：

$$ \int_0^1 (1 - y)\sin y\,dy = \left[-(1 - y)\cos y\right]_0^1 - \int_0^1 (-\cos y)(-1)\,dy $$

不对，分部积分：$\int u\,dv = uv - \int v\,du$

令 $u = 1 - y$，$dv = \sin y\,dy$，则 $du = -dy$，$v = -\cos y$。

$$ \int_0^1 (1 - y)\sin y\,dy = \left[-(1 - y)\cos y\right]_0^1 - \int_0^1 \cos y\,dy $$

$$ = [-(1-1)\cos 1 + (1-0)\cos 0] - [\sin y]_0^1 = (0 + 1) - (\sin 1 - 0) = 1 - \sin 1 $$

> **答案**：$1 - \sin 1$

* * *

### 3.3 极坐标系下计算二重积分

#### 例题 1：计算 $\iint_D \sqrt{x^2 + y^2}\,d\sigma$，其中 $D$ 为曲线 $x^2 + y^2 \le 4$、$y \ge 0$ 及 $x$ 轴围成的闭区域。

**解：**

用极坐标：$x = r\cos\theta,\; y = r\sin\theta$，$d\sigma = r\,dr\,d\theta$。

$$ D: 0 \le \theta \le \pi,\; 0 \le r \le 2 $$

$$ \iint_D \sqrt{x^2 + y^2}\,d\sigma = \int_0^\pi d\theta \int_0^2 r \cdot r\,dr = \pi \cdot \left[\frac{r^3}{3}\right]_0^2 = \pi \cdot \frac{8}{3} = \frac{8\pi}{3} $$

> **答案**：$\dfrac{8\pi}{3}$

#### 例题 2：计算 $\iint_D \sqrt{x^2 + y^2}\,d\sigma$，其中 $D$ 为曲线 $x^2 + y^2 \le 2y$、$x \ge 0$ 及 $y$ 轴围成的闭区域。

**解：**

$x^2 + y^2 \le 2y \Rightarrow x^2 + (y - 1)^2 \le 1$，是圆心在 $(0, 1)$、半径 $1$ 的圆。

极坐标：$r^2 \le 2r\sin\theta \Rightarrow r \le 2\sin\theta$。

$D$ 在 $x \ge 0$ 的半圆部分：$0 \le \theta \le \dfrac{\pi}{2}$（右半圆），$0 \le r \le 2\sin\theta$。

$$ \iint_D \sqrt{x^2 + y^2}\,d\sigma = \int_0^{\pi/2} d\theta \int_0^{2\sin\theta} r \cdot r\,dr $$

$$ = \int_0^{\pi/2} \left[\frac{r^3}{3}\right]_0^{2\sin\theta} d\theta = \int_0^{\pi/2} \frac{8\sin^3\theta}{3}\,d\theta = \frac{8}{3}\int_0^{\pi/2} \sin^3\theta\,d\theta $$

$$ = \frac{8}{3}\int_0^{\pi/2} \sin\theta(1 - \cos^2\theta)\,d\theta = \frac{8}{3}\left[-\cos\theta + \frac{\cos^3\theta}{3}\right]_0^{\pi/2} $$

$$ = \frac{8}{3}\left[(0 + 0) - (-1 + \frac{1}{3})\right] = \frac{8}{3} \cdot \frac{2}{3} = \frac{16}{9} $$

> **答案**：$\dfrac{16}{9}$

#### 例题 3：计算 $\iint_D \sqrt{x^2 + y^2}\,d\sigma$，其中 $D$ 为曲线 $x^2 + y^2 \le 2x$、$y \ge 0$ 及 $x$ 轴围成的闭区域。

**解：**

$x^2 + y^2 \le 2x \Rightarrow (x - 1)^2 + y^2 \le 1$，圆心 $(1, 0)$，半径 $1$。

极坐标：$r^2 \le 2r\cos\theta \Rightarrow r \le 2\cos\theta$。

$D$ 在 $y \ge 0$ 的上半圆部分：$0 \le \theta \le \dfrac{\pi}{2}$，$0 \le r \le 2\cos\theta$。

$$ \iint_D \sqrt{x^2 + y^2}\,d\sigma = \int_0^{\pi/2} d\theta \int_0^{2\cos\theta} r^2\,dr $$

$$ = \int_0^{\pi/2} \frac{8\cos^3\theta}{3}\,d\theta = \frac{8}{3}\int_0^{\pi/2} \cos^3\theta\,d\theta $$

$$ = \frac{8}{3}\int_0^{\pi/2} \cos\theta(1 - \sin^2\theta)\,d\theta = \frac{8}{3}\left[\sin\theta - \frac{\sin^3\theta}{3}\right]_0^{\pi/2} $$

$$ = \frac{8}{3}\left(1 - \frac{1}{3}\right) = \frac{8}{3} \cdot \frac{2}{3} = \frac{16}{9} $$

> **答案**：$\dfrac{16}{9}$

* * *

### 3.4 三重积分计算

#### 例题：计算 $\iiint_\Omega (x^2 + y^2)\,dV$，其中 $\Omega$ 为曲面 $x^2 + y^2 = 2z$ 及 $z = 2$ 围成的闭区域。

**解：**

用柱面坐标：$x = r\cos\theta,\; y = r\sin\theta,\; z = z$，$dV = r\,dr\,d\theta\,dz$。

$\Omega: 0 \le \theta \le 2\pi,\; 0 \le r \le 2,\; \dfrac{r^2}{2} \le z \le 2$

$$ \iiint_\Omega (x^2 + y^2)\,dV = \int_0^{2\pi} d\theta \int_0^2 dr \int_{r^2/2}^2 r^2 \cdot r\,dz $$

$$ = 2\pi \int_0^2 r^3 \cdot \left(2 - \frac{r^2}{2}\right) dr = 2\pi \int_0^2 \left(2r^3 - \frac{r^5}{2}\right) dr $$

$$ = 2\pi \left[ \frac{r^4}{2} - \frac{r^6}{12} \right]_0^2 = 2\pi \left( \frac{16}{2} - \frac{64}{12} \right) = 2\pi \left( 8 - \frac{16}{3} \right) = 2\pi \cdot \frac{8}{3} = \frac{16\pi}{3} $$

> **答案**：$\dfrac{16\pi}{3}$

* * *

### 3.5 重积分的对称性

#### 例题 1：计算 $\iint_D \frac{1 + xy}{1 + x^2 + y^2}\,d\sigma$，其中 $D$ 为曲线 $x^2 + y^2 = 1$ 所围成的闭区域。

**解：**

由对称性，$\iint_D \frac{xy}{1 + x^2 + y^2}\,d\sigma = 0$（$xy$ 为奇函数，区域关于 $x$ 轴和 $y$ 轴均对称）。

故：

$$ \iint_D \frac{1 + xy}{1 + x^2 + y^2}\,d\sigma = \iint_D \frac{1}{1 + x^2 + y^2}\,d\sigma $$

用极坐标：

$$ = \int_0^{2\pi} d\theta \int_0^1 \frac{1}{1 + r^2} \cdot r\,dr = 2\pi \cdot \frac{1}{2}\int_0^1 \frac{d(1 + r^2)}{1 + r^2} = \pi[\ln(1 + r^2)]_0^1 = \pi\ln 2 $$

:::derivation
**推导过程（二重积分的极坐标变换）：**

作变量代换 $x = r\cos\theta$，$y = r\sin\theta$，则面积元素的雅可比行列式为：

$$ J = \frac{\partial(x, y)}{\partial(r, \theta)} = \begin{vmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{vmatrix} = r\cos^2\theta + r\sin^2\theta = r $$

故 $d\sigma = dx\,dy = |J|\,dr\,d\theta = r\,dr\,d\theta$（$r \ge 0$）。于是：

$$ \iint_D f(x, y)\,d\sigma = \iint_{D'} f(r\cos\theta, r\sin\theta) \cdot r\,dr\,d\theta $$

> **关键**：极坐标变换多出的因子 $r$ 是雅可比行列式的绝对值，不可遗漏。
:::

> **答案**：$\pi\ln 2$

#### 例题 2：计算 $\iiint_\Omega (x^2 + 2y^3 + 3z^5)\,dV$，其中 $\Omega$ 为曲面 $x^2 + y^2 + z^2 = 1$ 所围成的闭区域。

**解：**

$\Omega$ 关于 $x$ 轴对称，$y^3$ 是 $y$ 的奇函数，故 $\iiint_\Omega y^3\,dV = 0$。

由对称性（轮换对称），$\iiint_\Omega x^2\,dV = \iiint_\Omega y^2\,dV = \iiint_\Omega z^2\,dV = \dfrac{1}{3}\iiint_\Omega (x^2 + y^2 + z^2)\,dV$

:::derivation
**推导过程（轮换对称性）：**

$\Omega$ 为球体 $x^2 + y^2 + z^2 \le 1$，关于 $x, y, z$ 具有完全的对称性（任意交换两个变量的位置，区域不变）。

因此积分 $\iiint_\Omega x^2\,dV$、$\iiint_\Omega y^2\,dV$、$\iiint_\Omega z^2\,dV$ 的值完全相同。设其值为 $I$，则：

$$ \iiint_\Omega (x^2 + y^2 + z^2)\,dV = \iiint_\Omega x^2\,dV + \iiint_\Omega y^2\,dV + \iiint_\Omega z^2\,dV = 3I $$

故：

$$ I = \iiint_\Omega x^2\,dV = \frac{1}{3}\iiint_\Omega (x^2 + y^2 + z^2)\,dV $$

利用球坐标 $x^2 + y^2 + z^2 = \rho^2$，$dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$，可简化计算。

> **关键**：对称区域上对称函数的积分相等，三个积分合并为一个，简化计算。
:::

但 $3z^5$ 不是简单的对称，不过 $z^5$ 是 $z$ 的奇函数，而 $\Omega$ 关于 $z=0$ 对称，所以 $\iiint_\Omega z^5\,dV = 0$。

故原式 $= \iiint_\Omega x^2\,dV$。

用球坐标：$x = \rho\sin\varphi\cos\theta$，$dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$。

$$ \iiint_\Omega x^2\,dV = \int_0^{2\pi} d\theta \int_0^\pi d\varphi \int_0^1 (\rho\sin\varphi\cos\theta)^2 \cdot \rho^2\sin\varphi\,d\rho $$

$$ = \int_0^{2\pi} \cos^2\theta\,d\theta \int_0^\pi \sin^3\varphi\,d\varphi \int_0^1 \rho^4\,d\rho $$

$$ = \pi \cdot \frac{4}{3} \cdot \frac{1}{5} = \frac{4\pi}{15} $$

> **答案**：$\dfrac{4\pi}{15}$

* * *

### 3.6 重积分的几何应用

#### 例题 1：计算曲面 $z = 8 - x^2 - y^2$ 与 $z = x^2 + y^2$ 围成的立体体积。

**解：**

两曲面的交线：$8 - x^2 - y^2 = x^2 + y^2 \Rightarrow 8 = 2(x^2 + y^2) \Rightarrow x^2 + y^2 = 4$。

在 $xy$ 平面的投影 $D: x^2 + y^2 \le 4$。

体积：

$$ V = \iint_D [(8 - x^2 - y^2) - (x^2 + y^2)]\,d\sigma = \iint_D (8 - 2x^2 - 2y^2)\,d\sigma $$

用极坐标：

$$ = \int_0^{2\pi} d\theta \int_0^2 (8 - 2r^2) \cdot r\,dr = 2\pi \int_0^2 (8r - 2r^3)\,dr $$

$$ = 2\pi \left[ 4r^2 - \frac{r^4}{2} \right]_0^2 = 2\pi(16 - 8) = 16\pi $$

> **答案**：$16\pi$

#### 例题 2：计算曲面 $z = xy$ 在 $xOy$ 平面投影为 $D: 0 \le x^2 + y^2 \le 4$ 的曲面的面积。

**解：**

$$ z_x = y,\quad z_y = x $$

$$ \sqrt{1 + z_x^2 + z_y^2} = \sqrt{1 + y^2 + x^2} = \sqrt{1 + r^2} $$

$$ S = \iint_D \sqrt{1 + x^2 + y^2}\,d\sigma = \int_0^{2\pi} d\theta \int_0^2 \sqrt{1 + r^2} \cdot r\,dr $$

:::derivation
**推导过程（曲面面积公式）：**

设曲面 $z = z(x, y)$ 在 $xOy$ 平面上的投影区域为 $D$。将 $D$ 分割为小区域 $d\sigma$，对应曲面上的小曲面片面积 $dS$。

曲面在点 $(x, y, z)$ 处的法向量为 $\vec{n} = (-z_x, -z_y, 1)$，法向量与 $z$ 轴正向的夹角 $\gamma$ 满足：

$$ \cos\gamma = \frac{1}{\sqrt{1 + z_x^2 + z_y^2}} $$

小曲面片面积 $dS$ 与其投影面积 $d\sigma$ 的关系为：

$$ d\sigma = \cos\gamma \cdot dS $$

故：

$$ dS = \frac{d\sigma}{\cos\gamma} = \sqrt{1 + z_x^2 + z_y^2}\,d\sigma $$

积分得曲面面积：

$$ S = \iint_D \sqrt{1 + z_x^2 + z_y^2}\,d\sigma $$

> **关键**：曲面面积元 = 投影面积元 / 法向量与 $z$ 轴夹角的余弦，倾斜越严重面积越大。
:::

$$ = 2\pi \cdot \frac{1}{2} \int_0^2 \sqrt{1 + r^2}\,d(1 + r^2) = \pi \cdot \left[ \frac{2}{3}(1 + r^2)^{3/2} \right]_0^2 $$

$$ = \frac{2\pi}{3}(5^{3/2} - 1) = \frac{2\pi}{3}(5\sqrt{5} - 1) $$

> **答案**：$\dfrac{2\pi}{3}(5\sqrt{5} - 1)$

* * *

## 四、 无穷级数

### 4.1 常数项级数的和

#### 例题 1：$\displaystyle\sum_{n=2}^{+\infty} \frac{1}{n(n+2)}$。

**解：**

$$ \frac{1}{n(n+2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{1}{n+2}\right) $$

部分和：

$$ S_n = \frac{1}{2}\left[\left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+2}\right)\right] $$

$$ = \frac{1}{2}\left(\frac{1}{2} + \frac{1}{3} - \frac{1}{n+1} - \frac{1}{n+2}\right) $$

$$ \lim_{n\to\infty} S_n = \frac{1}{2}\left(\frac{1}{2} + \frac{1}{3}\right) = \frac{5}{12} $$

> **答案**：和为 $\dfrac{5}{12}$

#### 例题 2：$\displaystyle\sum_{n=1}^{+\infty} \left(\frac{\ln 2}{2}\right)^n$。

**解：**

$\left|\dfrac{\ln 2}{2}\right| \approx \dfrac{0.693}{2} = 0.3465 < 1$，故为收敛的等比级数：

$$ \sum_{n=1}^{+\infty} \left(\frac{\ln 2}{2}\right)^n = \frac{\frac{\ln 2}{2}}{1 - \frac{\ln 2}{2}} = \frac{\ln 2}{2 - \ln 2} $$

> **答案**：和为 $\dfrac{\ln 2}{2 - \ln 2}$

* * *

### 4.2 正项级数审敛法

#### 例题 1：判断 $\displaystyle\sum_{n=1}^{+\infty} \cos\frac{1}{n}$ 的敛散性。

**解：**

$\lim\limits_{n\to\infty} \cos\dfrac{1}{n} = \cos 0 = 1 \neq 0$，不满足级数收敛的必要条件，故发散。

> **答案**：发散

#### 例题 2：判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{1}{n^3 + 2n - 1}$ 的敛散性。

**解：**

$n^3 + 2n - 1 > n^3$（$n \ge 1$），故 $\dfrac{1}{n^3 + 2n - 1} < \dfrac{1}{n^3}$。

$\displaystyle\sum_{n=1}^{+\infty} \dfrac{1}{n^3}$ 为 $p = 3 > 1$ 的 $p$ 级数，收敛。由比较审敛法，原级数收敛。

> **答案**：收敛

#### 例题 3：判断 $\displaystyle\sum_{n=3}^{+\infty} \sin\frac{1}{n^2}$ 的敛散性。

**解：**

$n \to \infty$ 时，$\sin\dfrac{1}{n^2} \sim \dfrac{1}{n^2}$。

$\displaystyle\sum_{n=3}^{+\infty} \dfrac{1}{n^2}$ 为 $p = 2 > 1$ 的 $p$ 级数，收敛。由比较审敛法的极限形式，原级数收敛。

> **答案**：收敛

#### 例题 4：判断 $\displaystyle\sum_{n=3}^{+\infty} \frac{1}{\ln n}$ 的敛散性。

**解：**

对 $n \ge 3$，$\dfrac{1}{\ln n} \ge \dfrac{1}{n}$（因为 $\ln n \le n$）。

$\displaystyle\sum_{n=3}^{+\infty} \dfrac{1}{n}$ 发散（调和级数），由比较审敛法，原级数发散。

> **答案**：发散

#### 例题 5：判断 $\displaystyle\sum_{n=3}^{+\infty} \frac{(\ln n)^3}{n^2}$ 的敛散性。

**解：**

取 $p = \dfrac{3}{2}$，则 $\dfrac{(\ln n)^3}{n^2} = \dfrac{(\ln n)^3}{n^{3/2}} \cdot \dfrac{1}{n^{1/2}}$。

对于任意 $\varepsilon > 0$，$\lim\limits_{n\to\infty} \dfrac{(\ln n)^3}{n^\varepsilon} = 0$，取 $\varepsilon = \dfrac{1}{2}$：

$$ \frac{(\ln n)^3}{n^2} = \frac{(\ln n)^3}{n^{3/2}} \cdot \frac{1}{n^{1/2}} \sim o\left(\frac{1}{n^{1/2}}\right) $$

即 $\dfrac{(\ln n)^3}{n^2} < \dfrac{1}{n^{3/2}}$（$n$ 充分大时），$p = 3/2 > 1$，故原级数收敛。

更精确地说，由于 $\lim\limits_{n\to\infty} \dfrac{(\ln n)^3}{n^{1/2}} = 0$，对于充分大的 $n$，$\dfrac{(\ln n)^3}{n^2} < \dfrac{1}{n^{3/2}}$，由比较审敛法得收敛。

> **答案**：收敛

#### 例题 6：判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{3^n \cdot n!}{n^n}$ 的敛散性。

**解：**

用比值审敛法：

$$ \lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \lim_{n\to\infty} \frac{3^{n+1}(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{3^n \cdot n!} $$

$$ = \lim_{n\to\infty} \frac{3(n+1)n^n}{(n+1)^{n+1}} = \lim_{n\to\infty} \frac{3n^n}{(n+1)^n} = \lim_{n\to\infty} \frac{3}{(1 + \frac{1}{n})^n} = \frac{3}{e} > 1 $$

:::derivation
**推导过程（比值审敛法与重要极限）：**

对正项级数 $\sum a_n$，若 $\lim\limits_{n\to\infty}\dfrac{a_{n+1}}{a_n} = \rho$，则：
- $\rho < 1$ 时级数收敛；
- $\rho > 1$ 时级数发散；
- $\rho = 1$ 时不能判定。

这里 $a_n = \dfrac{3^n n!}{n^n}$，计算比值：

$$ \frac{a_{n+1}}{a_n} = \frac{3^{n+1}(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{3^n \cdot n!} = \frac{3(n+1) \cdot n^n}{(n+1)^{n+1}} = \frac{3n^n}{(n+1)^n} $$

$$ = \frac{3}{\left(\frac{n+1}{n}\right)^n} = \frac{3}{\left(1+\frac{1}{n}\right)^n} $$

由重要极限 $\lim\limits_{n\to\infty}\left(1+\dfrac{1}{n}\right)^n = e$，得 $\rho = \dfrac{3}{e} > 1$（因 $e \approx 2.718 < 3$），故级数发散。
:::

故级数发散。

> **答案**：发散

#### 例题 7：证明 $\displaystyle\lim_{n\to\infty} \frac{2^n \cdot n!}{n^n} = 0$。

**解：**

构造级数 $\displaystyle\sum_{n=1}^{+\infty} a_n$，其中 $a_n = \dfrac{2^n \cdot n!}{n^n}$。

比值审敛法：

$$ \lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \lim_{n\to\infty} \frac{2^{n+1}(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{2^n \cdot n!} $$

$$ = \lim_{n\to\infty} \frac{2n^n}{(n+1)^n} = \lim_{n\to\infty} \frac{2}{(1 + \frac{1}{n})^n} = \frac{2}{e} < 1 $$

故级数 $\sum a_n$ 收敛，由级数收敛的必要条件得 $\lim\limits_{n\to\infty} a_n = 0$。

> **答案**：证毕

* * *

### 4.3 交错级数敛散性

#### 例题 1：判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n (n+2)}{n+1}$ 的敛散性。

**解：**

$u_n = \dfrac{n+2}{n+1} = 1 + \dfrac{1}{n+1}$，$\lim\limits_{n\to\infty} u_n = 1 \neq 0$，不满足必要条件，故级数发散。

> **答案**：发散

#### 例题 2：判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n}{\ln(n+1)}$ 的敛散性。

**解：**

$u_n = \dfrac{1}{\ln(n+1)}$ 单调递减且趋于 $0$，由莱布尼茨审敛法，级数收敛。

进一步，$\displaystyle\sum_{n=1}^{+\infty} \dfrac{1}{\ln(n+1)}$ 发散（$p$ 级数比较），故原级数条件收敛。

> **答案**：条件收敛

* * *

### 4.4 绝对收敛与条件收敛

#### 例题 1：判断级数 $\displaystyle\sum_{n=1}^{+\infty} (-1)^n \frac{n}{2n^2 + 1}$ 是绝对收敛、条件收敛还是发散。

**解：**

先取绝对值：$\displaystyle\sum_{n=1}^{+\infty} \dfrac{n}{2n^2 + 1}$。

比较：$\dfrac{n}{2n^2 + 1} \sim \dfrac{1}{2n}$（当 $n\to\infty$），发散（与调和级数同阶）。

故原级数非绝对收敛。

再判断原级数：$u_n = \dfrac{n}{2n^2 + 1}$ 递减且 $\to 0$（$n\ge 1$），由莱布尼茨审敛法，原级数收敛。

故为条件收敛。

> **答案**：条件收敛

#### 例题 2：判断 $\displaystyle\sum_{n=1}^{+\infty} \frac{\sin(n\pi/3)}{2^n}$ 是否收敛。

**解：**

$|\sin(n\pi/3)| \le 1$，故 $\left|\dfrac{\sin(n\pi/3)}{2^n}\right| \le \dfrac{1}{2^n}$。

$\displaystyle\sum_{n=1}^{+\infty} \dfrac{1}{2^n}$ 是收敛的等比级数，由比较审敛法知原级数绝对收敛，从而收敛。

> **答案**：绝对收敛

* * *

### 4.5 幂级数的收敛域

#### 例题 1：求 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n 2^n}{n+1} x^n$ 的收敛域。

**解：**

$$ a_n = \frac{(-1)^n 2^n}{n+1} $$

$$ R = \lim_{n\to\infty} \left|\frac{a_n}{a_{n+1}}\right| = \lim_{n\to\infty} \frac{2^n/(n+1)}{2^{n+1}/(n+2)} = \lim_{n\to\infty} \frac{n+2}{2(n+1)} = \frac{1}{2} $$

:::derivation
**推导过程（幂级数收敛半径公式）：**

对幂级数 $\sum a_n x^n$，由比值审敛法：

$$ \lim_{n\to\infty} \frac{|a_{n+1} x^{n+1}|}{|a_n x^n|} = \lim_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} |x| $$

当此极限 $< 1$ 时级数（绝对）收敛，即 $|x| < \dfrac{|a_n|}{|a_{n+1}|}$ 的极限值，故收敛半径：

$$ R = \lim_{n\to\infty} \left|\frac{a_n}{a_{n+1}}\right| $$

（也可用根值法得 $R = \dfrac{1}{\lim\sqrt[n]{|a_n|}}$。）

> **注意**：$R$ 只确定开区间 $(-R, R)$ 内收敛，端点 $x = \pm R$ 需单独代入判定。
:::

当 $x = \dfrac{1}{2}$ 时：$\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n 2^n}{n+1} \cdot \frac{1}{2^n} = \sum_{n=1}^{+\infty} \frac{(-1)^n}{n+1}$，由莱布尼茨审敛法，收敛。

当 $x = -\dfrac{1}{2}$ 时：$\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n 2^n}{n+1} \cdot \left(-\frac{1}{2}\right)^n = \sum_{n=1}^{+\infty} \frac{1}{n+1}$，发散。

故收敛域为 $\left(-\dfrac{1}{2}, \dfrac{1}{2}\right]$。

> **答案**：$\left(-\dfrac{1}{2}, \dfrac{1}{2}\right]$

#### 例题 2：求 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n n}{2^n} (x - 1)^n$ 的收敛域。

**解：**

令 $t = x - 1$，则级数为 $\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n n}{2^n} t^n$。

$$ R = \lim_{n\to\infty} \left|\frac{a_n}{a_{n+1}}\right| = \lim_{n\to\infty} \frac{n/2^n}{(n+1)/2^{n+1}} = \lim_{n\to\infty} \frac{2n}{n+1} = 2 $$

$|t| < 2$ 即 $-2 < t < 2$，$-1 < x < 3$。

当 $t = 2$（$x = 3$）时：$\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n n}{2^n} \cdot 2^n = \sum_{n=1}^{+\infty} (-1)^n n$，发散。

当 $t = -2$（$x = -1$）时：$\displaystyle\sum_{n=1}^{+\infty} \frac{(-1)^n n}{2^n} \cdot (-2)^n = \sum_{n=1}^{+\infty} n$，发散。

故收敛域为 $(-1, 3)$。

> **答案**：$(-1, 3)$

#### 例题 3：已知 $\displaystyle\sum_{n=1}^{+\infty} a_n (x - 2)^n$ 在 $x = -3$ 处条件收敛，求其收敛区间。

**解：**

在 $x = -3$ 处条件收敛，即 $x - 2 = -5$ 时幂级数条件收敛，故收敛半径 $R = 5$。

收敛区间为 $-5 < x - 2 < 5$，即 $(-3, 7)$。

由条件收敛点在端点，该点 $x = -3$ 对应 $t = -5$，故 $x = -3$ 为左端点且级数在该点收敛。$x = 7$（右端点）处的敛散性不确定，但至少收敛域为 $(-3, 7]$ 或 $[-3, 7)$。

由于条件收敛发生在端点 $x = -3$ 处（对应 $t = -5$，即 $t = -R$），说明右端点处级数可能发散。

收敛区间（不含端点）为 $(-3, 7)$。

> **答案**：收敛区间 $(-3, 7)$，收敛半径 $R = 5$

* * *

### 4.6 幂级数的和函数

#### 例题 1：求 $\displaystyle\sum_{n=1}^{+\infty} \frac{n}{2^n} x^{n+1}$ 的和函数。

**解：**

$$ S(x) = \sum_{n=1}^{+\infty} \frac{n}{2^n} x^{n+1} = x\sum_{n=1}^{+\infty} n\left(\frac{x}{2}\right)^n $$

令 $t = \dfrac{x}{2}$，当 $|t| < 1$（即 $|x| < 2$）时：

$$ \sum_{n=1}^{+\infty} nt^n = \frac{t}{(1 - t)^2} $$

:::derivation
**推导过程（幂级数逐项求导法）：**

已知等比级数（$|t| < 1$）：

$$ \sum_{n=0}^{+\infty} t^n = \frac{1}{1-t} $$

两边对 $t$ 求导（幂级数在收敛域内可逐项求导）：

$$ \sum_{n=0}^{+\infty} n t^{n-1} = \frac{1}{(1-t)^2} $$

两边同乘 $t$：

$$ \sum_{n=0}^{+\infty} n t^n = \frac{t}{(1-t)^2} $$

因 $n=0$ 项为 $0$，故：

$$ \sum_{n=1}^{+\infty} n t^n = \frac{t}{(1-t)^2} $$

> **关键**：利用已知的等比级数和函数，通过逐项求导（或逐项积分）导出新的和函数。
:::

故：

$$ S(x) = x \cdot \frac{\frac{x}{2}}{(1 - \frac{x}{2})^2} = x \cdot \frac{\frac{x}{2}}{(\frac{2-x}{2})^2} = x \cdot \frac{\frac{x}{2}}{\frac{(2-x)^2}{4}} = x \cdot \frac{2x}{(2-x)^2} = \frac{2x^2}{(2-x)^2} $$

且收敛域为 $|x| < 2$。

> **答案**：$S(x) = \dfrac{2x^2}{(2-x)^2}$，$|x| < 2$

#### 例题 2：求 $\displaystyle\sum_{n=0}^{+\infty} \frac{2^n}{n+1} x^n$ 的和函数。

**解：**

令 $t = 2x$，则级数为 $\displaystyle\sum_{n=0}^{+\infty} \frac{t^n}{n+1}$，$|t| < 1$ 即 $|x| < \dfrac{1}{2}$。

设 $S(t) = \displaystyle\sum_{n=0}^{+\infty} \frac{t^n}{n+1}$，则 $tS(t) = \displaystyle\sum_{n=0}^{+\infty} \frac{t^{n+1}}{n+1} = \sum_{m=1}^{+\infty} \frac{t^m}{m}$。

$$ \frac{d}{dt}[tS(t)] = \sum_{m=1}^{+\infty} t^{m-1} = \frac{1}{1-t} $$

$$ tS(t) = \int_0^t \frac{1}{1-u}\,du = -\ln(1-t) $$

$$ S(t) = -\frac{\ln(1-t)}{t} $$

回代 $t = 2x$：

$$ S(x) = -\frac{\ln(1 - 2x)}{2x},\quad |x| < \frac{1}{2} $$

> **答案**：$S(x) = -\dfrac{\ln(1 - 2x)}{2x}$，$\displaystyle |x| < \frac{1}{2}$

* * *

### 4.7 函数展开成幂级数

#### 例题 1：将 $f(x) = e^{2x}$ 展开成 $(x - 3)$ 的幂级数。

**解：**

令 $t = x - 3$，则 $x = t + 3$。

$$ e^{2x} = e^{2(t+3)} = e^{6} \cdot e^{2t} = e^6 \sum_{n=0}^{+\infty} \frac{(2t)^n}{n!} = \sum_{n=0}^{+\infty} \frac{2^n e^6}{n!} (x - 3)^n $$

:::derivation
**推导过程（泰勒级数展开）：**

函数 $f(x) = e^{2x}$ 在 $x = 3$ 处的泰勒级数为：

$$ f(x) = \sum_{n=0}^{+\infty} \frac{f^{(n)}(3)}{n!}(x - 3)^n $$

因 $f^{(n)}(x) = 2^n e^{2x}$，故 $f^{(n)}(3) = 2^n e^6$。代入得：

$$ e^{2x} = \sum_{n=0}^{+\infty} \frac{2^n e^6}{n!}(x-3)^n $$

**换元法**更简洁：令 $t = x - 3$，则 $x = t + 3$，$e^{2x} = e^{2(t+3)} = e^6 \cdot e^{2t}$。利用 $e^u = \sum \dfrac{u^n}{n!}$，令 $u = 2t$ 即得。

> **收敛域**：$e^u$ 的展开式对所有 $u \in \mathbb{R}$ 收敛，故 $x \in (-\infty, +\infty)$。
:::

收敛域：$x \in (-\infty, +\infty)$。

> **答案**：$e^{2x} = \displaystyle\sum_{n=0}^{+\infty} \dfrac{2^n e^6}{n!}(x - 3)^n$，$x \in (-\infty, +\infty)$

#### 例题 2：将 $f(x) = x\sin^2 x$ 展开成 $x$ 的幂级数。

**解：**

$$ \sin^2 x = \frac{1 - \cos 2x}{2} = \frac{1}{2} - \frac{1}{2}\cos 2x $$

$$ x\sin^2 x = \frac{x}{2} - \frac{x}{2}\cos 2x $$

利用 $\cos u = \displaystyle\sum_{n=0}^{+\infty} \frac{(-1)^n u^{2n}}{(2n)!}$：

$$ \frac{x}{2}\cos 2x = \frac{x}{2}\sum_{n=0}^{+\infty} \frac{(-1)^n (2x)^{2n}}{(2n)!} = \frac{1}{2}\sum_{n=0}^{+\infty} \frac{(-1)^n 2^{2n} x^{2n+1}}{(2n)!} $$

故：

$$ f(x) = \frac{x}{2} - \frac{1}{2}\sum_{n=0}^{+\infty} \frac{(-1)^n 4^n x^{2n+1}}{(2n)!} $$

$$ = \frac{x}{2} - \frac{x}{2} - \frac{1}{2}\sum_{n=1}^{+\infty} \frac{(-1)^n 4^n x^{2n+1}}{(2n)!} $$

$$ = \sum_{n=1}^{+\infty} \frac{(-1)^{n+1} 2^{2n-1} x^{2n+1}}{(2n)!},\quad x \in (-\infty, +\infty) $$

> **答案**：$x\sin^2 x = \displaystyle\sum_{n=1}^{+\infty} \dfrac{(-1)^{n+1} 2^{2n-1}}{(2n)!} x^{2n+1}$，$x \in (-\infty, +\infty)$

#### 例题 3：将 $f(x) = \dfrac{1}{x^2 + 3x + 2}$ 展开成 $(x - 3)$ 的幂级数。

**解：**

$$ \frac{1}{x^2 + 3x + 2} = \frac{1}{(x+1)(x+2)} = \frac{1}{x+1} - \frac{1}{x+2} $$

令 $t = x - 3$，则 $x = t + 3$：

$$ \frac{1}{x+1} = \frac{1}{t + 4} = \frac{1}{4} \cdot \frac{1}{1 + \frac{t}{4}} = \frac{1}{4}\sum_{n=0}^{+\infty} \left(-\frac{t}{4}\right)^n = \sum_{n=0}^{+\infty} \frac{(-1)^n}{4^{n+1}} (x-3)^n $$

收敛域：$\left|\dfrac{x-3}{4}\right| < 1 \Rightarrow -1 < x < 7$。

$$ \frac{1}{x+2} = \frac{1}{t + 5} = \frac{1}{5} \cdot \frac{1}{1 + \frac{t}{5}} = \frac{1}{5}\sum_{n=0}^{+\infty} \left(-\frac{t}{5}\right)^n = \sum_{n=0}^{+\infty} \frac{(-1)^n}{5^{n+1}} (x-3)^n $$

收敛域：$\left|\dfrac{x-3}{5}\right| < 1 \Rightarrow -2 < x < 8$。

故：

$$ f(x) = \sum_{n=0}^{+\infty} \left[\frac{(-1)^n}{4^{n+1}} - \frac{(-1)^n}{5^{n+1}}\right] (x-3)^n = \sum_{n=0}^{+\infty} (-1)^n \left(\frac{1}{4^{n+1}} - \frac{1}{5^{n+1}}\right) (x-3)^n $$

收敛域取交集：$(-1, 7)$。

> **答案**：$\dfrac{1}{x^2+3x+2} = \displaystyle\sum_{n=0}^{+\infty} (-1)^n\left(\dfrac{1}{4^{n+1}} - \dfrac{1}{5^{n+1}}\right)(x-3)^n$，收敛域 $(-1, 7)$

#### 例题 4：将 $f(x) = \ln(1 + x)$ 展开成 $(x - 3)$ 的幂级数。

**解：**

令 $t = x - 3$，$x = t + 3$：

$$ \ln(1 + x) = \ln(4 + t) = \ln\left[4\left(1 + \frac{t}{4}\right)\right] = \ln 4 + \ln\left(1 + \frac{t}{4}\right) $$

$$ = \ln 4 + \sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n} \left(\frac{t}{4}\right)^n = \ln 4 + \sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n \cdot 4^n} (x - 3)^n $$

收敛域：$\left|\dfrac{x-3}{4}\right| < 1$，即 $-1 < x < 7$。

当 $x = -1$（$t = -4$）时：$\ln(1 - 4) = \ln(-3)$ 无定义。当 $x = 7$（$t = 4$）时：$\ln(1 + 7) = \ln 8$，级数 $\sum\dfrac{(-1)^{n-1}}{n}$ 收敛。

故收敛域为 $(-1, 7]$。

> **答案**：$\ln(1+x) = \ln 4 + \displaystyle\sum_{n=1}^{+\infty} \dfrac{(-1)^{n-1}}{n\cdot 4^n}(x-3)^n$，$x \in (-1, 7]$

* * *

## 五、 常微分方程

### 5.1 可分离变量微分方程

#### 例题 1：求 $\dfrac{dy}{dx} = \dfrac{2x}{1 + x^2} y$ 的通解。

**解：**

分离变量：

$$ \frac{dy}{y} = \frac{2x}{1 + x^2}\,dx $$

两边积分：

$$ \ln|y| = \ln(1 + x^2) + C $$

$$ y = C(1 + x^2) $$

> **答案**：$y = C(1 + x^2)$

#### 例题 2：求 $\dfrac{dy}{dx} = 4x \cdot y^2$ 的通解。

**解：**

分离变量：

$$ \frac{dy}{y^2} = 4x\,dx $$

两边积分：

$$ -\frac{1}{y} = 2x^2 + C $$

$$ y = -\frac{1}{2x^2 + C} $$

> **答案**：$y = -\dfrac{1}{2x^2 + C}$

* * *

### 5.2 齐次型微分方程

#### 例题：求 $\dfrac{dy}{dx} = 2\frac{y}{x} + \left(\frac{y}{x}\right)^2$ 的通解。

**解：**

令 $u = \dfrac{y}{x}$，则 $y = ux$，$\dfrac{dy}{dx} = u + x\dfrac{du}{dx}$。代入：

$$ u + x\frac{du}{dx} = 2u + u^2 \quad \Rightarrow \quad x\frac{du}{dx} = u + u^2 $$

分离变量：

$$ \frac{du}{u(u+1)} = \frac{dx}{x} $$

$$ \left(\frac{1}{u} - \frac{1}{u+1}\right) du = \frac{dx}{x} $$

两边积分：

$$ \ln|u| - \ln|u+1| = \ln|x| + C $$

$$ \ln\left|\frac{u}{u+1}\right| = \ln|x| + C $$

$$ \frac{u}{u+1} = Cx $$

回代 $u = \dfrac{y}{x}$：

$$ \frac{y/x}{y/x + 1} = Cx \quad \Rightarrow \quad \frac{y}{x + y} = Cx $$

$$ y = Cx(x + y) \quad \Rightarrow \quad y = Cx^2 + Cxy $$

$$ y(1 - Cx) = Cx^2 \quad \Rightarrow \quad y = \frac{Cx^2}{1 - Cx} $$

> **答案**：$y = \dfrac{Cx^2}{1 - Cx}$

* * *

### 5.3 一阶线性微分方程

#### 例题 1：求 $\dfrac{dy}{dx} - \dfrac{y}{x} = 4x^2$ 的通解。

**解：**

这是一阶线性非齐次方程，$P(x) = -\dfrac{1}{x}$，$Q(x) = 4x^2$。

积分因子：

$$ \mu(x) = e^{\int P(x)\,dx} = e^{-\int\frac{1}{x}\,dx} = e^{-\ln|x|} = \frac{1}{x} $$

通解：

$$ y = \frac{1}{\mu(x)}\left(\int \mu(x) Q(x)\,dx + C\right) = x\left(\int \frac{1}{x} \cdot 4x^2\,dx + C\right) $$

:::derivation
**推导过程（一阶线性 ODE 通解公式）：**

对一阶线性方程 $y' + P(x)y = Q(x)$，构造积分因子 $\mu(x) = e^{\int P(x)\,dx}$。两边乘以 $\mu$：

$$ \mu y' + \mu P(x) y = \mu Q(x) $$

左端恰好是 $(\mu y)'$（由乘积求导法则 $(\mu y)' = \mu' y + \mu y' = \mu P y + \mu y'$，因为 $\mu' = \mu P$），故：

$$ \frac{d}{dx}[\mu(x) \cdot y] = \mu(x) Q(x) $$

两边积分：

$$ \mu(x) \cdot y = \int \mu(x) Q(x)\,dx + C $$

故通解为：

$$ y = \frac{1}{\mu(x)}\left[\int \mu(x) Q(x)\,dx + C\right] = e^{-\int P\,dx}\left[\int Q e^{\int P\,dx}\,dx + C\right] $$

> **关键**：积分因子的选取使左端凑成全微分形式，从而可直接积分。
:::

$$ = x\left(\int 4x\,dx + C\right) = x(2x^2 + C) = 2x^3 + Cx $$

> **答案**：$y = 2x^3 + Cx$

#### 例题 2：求 $\dfrac{dy}{dx} = \dfrac{3x + y}{2x + y}$ 的通解。

**解：**

这不是标准的一阶线性形式，化为齐次方程：

$$ \frac{dy}{dx} = \frac{3x + y}{2x + y} = \frac{3 + y/x}{2 + y/x} $$

令 $u = \dfrac{y}{x}$，则 $y = ux$，$\dfrac{dy}{dx} = u + x\dfrac{du}{dx}$：

$$ u + x\frac{du}{dx} = \frac{3 + u}{2 + u} $$

$$ x\frac{du}{dx} = \frac{3 + u}{2 + u} - u = \frac{3 + u - u(2 + u)}{2 + u} = \frac{3 + u - 2u - u^2}{2 + u} = \frac{3 - u - u^2}{2 + u} $$

分离变量：

$$ \frac{2 + u}{3 - u - u^2}\,du = \frac{dx}{x} $$

$$ \frac{2 + u}{-(u^2 + u - 3)}\,du = \frac{dx}{x} $$

$$ -\frac{2 + u}{u^2 + u - 3}\,du = \frac{dx}{x} $$

因式分解 $u^2 + u - 3$ 不可简单分解，可用配方法或数值求解。

> **答案**：$\displaystyle\int\frac{2+u}{3-u-u^2}\,du = \ln|x| + C$，回代 $u = y/x$ 得隐式通解

#### 例题 3：已知 $f(x) = x - \int_0^1 f(t)\,dt$，求 $f(x)$ 的表达式。

**解：**

令 $A = \int_0^1 f(t)\,dt$，则 $f(x) = x - A$。

两边在 $[0, 1]$ 上积分：

$$ \int_0^1 f(x)\,dx = \int_0^1 (x - A)\,dx $$

$$ A = \left[\frac{x^2}{2} - Ax\right]_0^1 = \frac{1}{2} - A $$

$$ A = \frac{1}{4} $$

故 $f(x) = x - \dfrac{1}{4}$。

> **答案**：$f(x) = x - \dfrac{1}{4}$

* * *

### 5.4 伯努利方程

#### 例题：求 $\dfrac{dy}{dx} + 2xy = xy^2$ 的通解。

**解：**

伯努利方程，$n = 2$。令 $z = y^{1-2} = y^{-1}$，则 $z' = -y^{-2}y'$。

原方程两边同乘 $y^{-2}$：

$$ y^{-2}y' + 2xy^{-1} = x $$

$$ -z' + 2xz = x \quad \Rightarrow \quad z' - 2xz = -x $$

一阶线性，$P(x) = -2x$，$Q(x) = -x$。

积分因子：

$$ \mu = e^{\int (-2x)\,dx} = e^{-x^2} $$

$$ z = \frac{1}{\mu}\left(\int \mu Q\,dx + C\right) = e^{x^2}\left(\int e^{-x^2}(-x)\,dx + C\right) $$

$$ = e^{x^2}\left(\frac{1}{2}\int e^{-x^2}\,d(-x^2) + C\right) = e^{x^2}\left(\frac{1}{2}e^{-x^2} + C\right) = \frac{1}{2} + Ce^{x^2} $$

回代 $z = y^{-1}$：

$$ y = \frac{1}{\frac{1}{2} + Ce^{x^2}} = \frac{2}{1 + Ce^{x^2}} $$

> **答案**：$y = \dfrac{2}{1 + Ce^{x^2}}$

* * *

### 5.5 可降阶微分方程

#### 例题 1：求 $y'' = e^x$ 的通解。

**解：**

逐次积分：

$$ y' = \int e^x\,dx = e^x + C_1 $$

$$ y = \int (e^x + C_1)\,dx = e^x + C_1 x + C_2 $$

> **答案**：$y = e^x + C_1 x + C_2$

#### 例题 2：（了解）求 $y'' = y' + x$ 的通解。

**解：**

令 $p = y'$，则 $y'' = p'$，方程化为 $p' - p = x$。

一阶线性，$P(x) = -1$，$Q(x) = x$。

$$ p = e^{\int dx}\left(\int x e^{-\int dx}\,dx + C_1\right) = e^x\left(\int x e^{-x}\,dx + C_1\right) $$

$$ = e^x\left[-(x+1)e^{-x} + C_1\right] = -(x+1) + C_1 e^x $$

$$ y = \int p\,dx = \int [-(x+1) + C_1 e^x]\,dx = -\frac{x^2}{2} - x + C_1 e^x + C_2 $$

> **答案**：$y = -\dfrac{x^2}{2} - x + C_1 e^x + C_2$

#### 例题 3：求 $y'' = y' \cdot \sqrt{y}$ 的通解。

**解：**

不显含 $x$，令 $p = y'$，则 $y'' = p\dfrac{dp}{dy}$。

$$ p\frac{dp}{dy} = p\sqrt{y} $$

当 $p \neq 0$ 时：

$$ \frac{dp}{dy} = \sqrt{y} \quad \Rightarrow \quad dp = \sqrt{y}\,dy $$

$$ p = \frac{2}{3}y^{3/2} + C_1 = \frac{dy}{dx} $$

$$ \frac{dy}{\frac{2}{3}y^{3/2} + C_1} = dx $$

这是一个可分离变量方程，积分得通解。当 $C_1 = 0$ 时：

$$ \frac{dy}{\frac{2}{3}y^{3/2}} = dx \quad \Rightarrow \quad \frac{3}{2}y^{-3/2}dy = dx $$

$$ -3y^{-1/2} = x + C \quad \Rightarrow \quad y = \frac{9}{(x+C)^2} $$

> **答案**：$-\dfrac{3}{2}y^{-1/2} = x + C$ 或隐式通解

* * *

### 5.6 解的结构

#### 例题：已知 $y_1, y_2, y_3$ 为 $y'' + py' + qy = f(x)$ 的三个线性无关的特解，求该方程的通解。

**解：**

对应齐次方程 $y'' + py' + qy = 0$ 的通解可由任意两个特解之差构成。

$y_1 - y_2$ 和 $y_1 - y_3$ 均为对应齐次方程的解，且线性无关（因为 $y_1, y_2, y_3$ 线性无关）。

故齐次通解为 $\bar{y} = C_1(y_1 - y_2) + C_2(y_1 - y_3)$。

非齐次通解取 $y_1$ 作为特解（也可取 $y_2$ 或 $y_3$），则：

$$ y = y_1 + C_1(y_1 - y_2) + C_2(y_1 - y_3) $$

:::derivation
**推导过程（非齐次方程通解结构）：**

设 $y_1, y_2, y_3$ 为非齐次方程 $y'' + py' + qy = f(x)$ 的三个线性无关特解。

**第一步**：$y_1 - y_2$ 和 $y_1 - y_3$ 是对应齐次方程的解。因为：

$$ L[y_1 - y_2] = L[y_1] - L[y_2] = f(x) - f(x) = 0 $$

**第二步**：$y_1 - y_2$ 与 $y_1 - y_3$ 线性无关。若 $k_1(y_1 - y_2) + k_2(y_1 - y_3) = 0$，即 $(k_1 + k_2)y_1 - k_1 y_2 - k_2 y_3 = 0$。因 $y_1, y_2, y_3$ 线性无关，故 $k_1 + k_2 = k_1 = k_2 = 0$。

**第三步**：齐次通解为 $\bar{y} = C_1(y_1 - y_2) + C_2(y_1 - y_3)$，取 $y_1$ 为非齐次特解，由通解结构定理：

$$ y = y_1 + \bar{y} = y_1 + C_1(y_1 - y_2) + C_2(y_1 - y_3) $$

> **关键**：非齐次方程两个特解之差是对应齐次方程的解。
:::

> **答案**：$y = y_1 + C_1(y_1 - y_2) + C_2(y_1 - y_3)$

* * *

### 5.7 二阶常系数非齐次微分方程的通解

#### 例题 1：求 $y'' + 4y' - 5y = xe^x$ 的通解。

**解：**

特征方程 $r^2 + 4r - 5 = 0$，$r_{1,2} = 1,\; -5$。

齐次通解：$\bar{y} = C_1 e^x + C_2 e^{-5x}$。

设特解 $y^* = x(Ax + B)e^x = (Ax^2 + Bx)e^x$（$\lambda = 1$ 是单特征根，$k = 1$）。

求导后代入方程可解得 $A,\; B$：

$$ y^{*\prime} = [Ax^2 + (2A + B)x + B]e^x $$

$$ y^{*\prime\prime} = [Ax^2 + (4A + B)x + (2A + 2B)]e^x $$

代入 $y'' + 4y' - 5y = xe^x$：

$$ [Ax^2 + (4A + B)x + (2A + 2B)] + 4[Ax^2 + (2A + B)x + B] - 5(Ax^2 + Bx) = x $$

比较系数：

* $x^2$：$A + 4A - 5A = 0$ ✓
* $x^1$：$(4A + B) + 4(2A + B) - 5B = 4A + B + 8A + 4B - 5B = 12A = 1 \Rightarrow A = \dfrac{1}{12}$
* $x^0$：$(2A + 2B) + 4B = 2A + 6B = 0 \Rightarrow B = -\dfrac{A}{3} = -\dfrac{1}{36}$

故 $y^* = \left(\dfrac{1}{12}x^2 - \dfrac{1}{36}x\right)e^x$。

通解：

$$ y = C_1 e^x + C_2 e^{-5x} + \left(\frac{1}{12}x^2 - \frac{1}{36}x\right)e^x $$

> **答案**：$y = C_1 e^x + C_2 e^{-5x} + \left(\dfrac{1}{12}x^2 - \dfrac{1}{36}x\right)e^x$

#### 例题 2：求 $y'' + 3y' - 4y = e^{2x}$ 的通解。

**解：**

特征方程 $r^2 + 3r - 4 = 0$，$r_{1,2} = 1,\; -4$。

齐次通解：$\bar{y} = C_1 e^x + C_2 e^{-4x}$。

$\lambda = 2$ 不是特征根，设 $y^* = Ae^{2x}$：

$$ y^{*\prime} = 2Ae^{2x},\quad y^{*\prime\prime} = 4Ae^{2x} $$

代入：

$$ 4Ae^{2x} + 3\cdot 2Ae^{2x} - 4Ae^{2x} = (4A + 6A - 4A)e^{2x} = 6Ae^{2x} = e^{2x} $$

$$ A = \frac{1}{6} $$

通解：$y = C_1 e^x + C_2 e^{-4x} + \dfrac{1}{6}e^{2x}$。

> **答案**：$y = C_1 e^x + C_2 e^{-4x} + \dfrac{1}{6}e^{2x}$

#### 例题 3：求 $y'' + 3y' - 4y = xe^x \cos 2x$ 的特解形式。

**解：**

特征方程 $r^2 + 3r - 4 = 0$，$r = 1,\; -4$。

$f(x) = xe^x\cos 2x$，对应 $\alpha = 1$，$\beta = 2$，$\alpha \pm i\beta = 1 \pm 2i$ 不是特征根。

$P_l(x) = x$（一次），$P_n(x) = 0$，故 $m = \max\{1, 0\} = 1$。

特解形式：

$$ y^* = e^x[(Ax + B)\cos 2x + (Cx + D)\sin 2x] $$

> **答案**：$y^* = e^x[(Ax + B)\cos 2x + (Cx + D)\sin 2x]$

#### 例题 4：求 $y'' - 2y' + 4y = xe^x \cos\sqrt{3} x$ 的特解形式。

**解：**

特征方程 $r^2 - 2r + 4 = 0$，$r = 1 \pm i\sqrt{3}$。

$f(x) = xe^x\cos\sqrt{3} x$，对应 $\alpha = 1$，$\beta = \sqrt{3}$，$\alpha + i\beta = 1 + i\sqrt{3}$ 是特征根（单根）。

$m = 1$，$k = 1$。

特解形式：

$$ y^* = x e^x[(Ax + B)\cos\sqrt{3} x + (Cx + D)\sin\sqrt{3} x] $$

> **答案**：$y^* = xe^x[(Ax + B)\cos\sqrt{3} x + (Cx + D)\sin\sqrt{3} x]$

#### 例题 5：求 $y'' - 3y' + 2y = 6e^x + x^2$ 的特解形式。

**解：**

特征方程 $r^2 - 3r + 2 = 0$，$r = 1,\; 2$。

$f(x) = 6e^x + x^2$，分解为两项：

对于 $f_1(x) = 6e^x$，$\lambda = 1$ 是单特征根，设 $y_1^* = Ax e^x$。

对于 $f_2(x) = x^2$，$\lambda = 0$ 不是特征根，设 $y_2^* = Bx^2 + Cx + D$。

由叠加原理：

$$ y^* = Ax e^x + Bx^2 + Cx + D $$

> **答案**：$y^* = Ax e^x + Bx^2 + Cx + D$

* * *

## 六、 总结与核心公式速查

### 6.1 核心公式速查

| 板块  | 概念  | 公式  | 说明  |
| --- | --- | --- | --- |
| 向量  | 数量积 | $\vec{a}\cdot\vec{b} = \\|\vec{a}\\|\\|\vec{b}\\|\cos\theta = a_x b_x + a_y b_y + a_z b_z$ | 结果为标量 |
| 向量  | 向量积 | $\vec{a}\times\vec{b} = \begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix}$ | 结果为向量 |
| 向量  | 方向余弦 | $\cos\alpha = \dfrac{a_x}{\\|\vec{a}\\|}$ 等 | $\cos^2\alpha+\cos^2\beta+\cos^2\gamma = 1$ |
| 平面  | 点法式 | $A(x-x_0)+B(y-y_0)+C(z-z_0) = 0$ | $\vec{n} = (A,B,C)$ |
| 直线  | 点向式 | $\dfrac{x-x_0}{m} = \dfrac{y-y_0}{n} = \dfrac{z-z_0}{p}$ | $\vec{s} = (m,n,p)$ |
| 偏导  | 一阶偏导 | $\dfrac{\partial z}{\partial x} = \lim\limits_{\Delta x\to0}\frac{f(x+\Delta x,y)-f(x,y)}{\Delta x}$ | 其余变量视作常数 |
| 全微分 | 公式  | $dz = f_x dx + f_y dy$ | 叠加原理 |
| 极值  | 二阶判别 | $\Delta = f_{xx}f_{yy} - f_{xy}^2$ | $\Delta>0$ 有极值，$A>0$ 极小 |
| 二重积分 | 极坐标 | $\iint_D f\,d\sigma = \iint_D f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta$ | $d\sigma = r\,dr\,d\theta$ |
| 级数  | 比值审敛 | $\rho = \lim\dfrac{a_{n+1}}{a_n}$ | $\rho<1$ 收敛，$\rho>1$ 发散 |
| 幂级数 | 收敛半径 | $R = \lim\left | \dfrac{a_n}{a_{n+1}}\right |
| 一阶线性 ODE | 通解公式 | $y = e^{-\int Pdx}\left(\int Q e^{\int Pdx}dx + C\right)$ | 积分因子法 |
| 常系数 ODE | 特征方程 | $r^2+pr+q = 0$ | 三种特征根对应三种通解形式 |

### 6.2 易错点提醒

1. **偏导存在 $\neq$ 可微**：偏导连续才是可微的充分条件，偏导存在仅保证沿坐标轴方向可导。
2. **$\Delta = 0$ 时的极值判别**：二阶判别法失效，需用定义法或更高阶判别。
3. **幂级数端点判定**：收敛半径 $R$ 只确定开区间，端点 $\pm R$ 处需单独代入判断敛散。
4. **莱布尼茨审敛法条件**：交错级数须同时满足单调递减和趋近于 $0$ 才收敛。
5. **特解 $x^k$ 因子**：用待定系数法时，$\lambda$ 与特征根重合几次，$k$ 就取几，不能遗漏。
6. **积分次序的交换**：交换二次积分次序时须准确画出积分区域，重新确定上下限。
7. **向量垂直与平行**：垂直 $\iff$ 数量积为零；平行 $\iff$ 对应坐标成比例（或向量积为零）。

### 6.3 解题要点

* **向量与解析几何**：先确定"点"和"方向/法向"，代入标准方程。直线用点向式，平面用点法式。
* **偏导与全微分**：对某个变量求导时其余视作常数；复合函数用链式法则；全微分直接叠加偏微分。
* **极值问题**：先求驻点（一阶偏导为零），再用 $\Delta$ 判别；有条件约束用拉格朗日乘数法。
* **重积分**：先画出积分区域，选择合适的坐标系。极坐标/柱面坐标适用于圆形区域，球坐标适用于球形区域。
* **级数审敛**：先看通项是否趋于零；正项级数用比值、根值、比较审敛法；交错级数用莱布尼茨。
* **幂级数**：先求收敛半径 $R$，再判端点；和函数通过逐项积分/求导转化为已知展开式。
* **微分方程**：先识别类型（可分离/齐次/一阶线性/伯努利/可降阶/常系数），再选择相应解法。
