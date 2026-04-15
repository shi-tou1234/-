---
title: 多元函数微分法及其运用
pubDate: 2026-04-15T05:36:00.000Z
updatedDate: 2026-04-15T11:55:01.093Z
draft: false
description: 
category: 高数
slugId: 多元函数微分法及其运用
---

#多元函数微分学全解

> **适用对象**：大学生期末复习、考研数学基础强化、博客知识沉淀  
> **参考教材**：同济大学《高等数学》下册、主流考研数学大纲  
> **核心目标**：构建清晰的知识框架，掌握核心计算技巧，规避高频易错点  
> **特别说明**：本章内容结合了经典高数课程（如宋浩老师系列）的讲解逻辑，重点梳理了链式法则的树状图技巧。

---

## 第一章 多元函数的基本概念

### 1.1 多元函数的定义
设 $D$ 是 $\mathbb{R}^n$ 中的一个非空点集，若对于 $D$ 中的每一个点 $P(x_1, x_2, ..., x_n)$，按照某种对应法则 $f$，都有唯一确定的实数 $u$ 与之对应，则称 $u$ 为 $n$ 元函数，记作：
$$
u = f(x_1, x_2, ..., x_n)
$$
- **二元函数**：$z = f(x, y)$，几何上通常表示空间直角坐标系中的一张**曲面**。
- **定义域 ($D_f$)**：使函数表达式有意义的自变量取值集合。
  - **常见限制**：
    1. 分母不为零：$\frac{1}{g(x,y)} \implies g(x,y) \neq 0$
    2. 偶次根号内非负：$\sqrt{g(x,y)} \implies g(x,y) \geq 0$
    3. 对数真数大于零：$\ln(g(x,y)) \implies g(x,y) > 0$
    4. 反正弦/余弦定义域：$\arcsin(g(x,y)) \implies |g(x,y)| \leq 1$

> **例题 1.1**：求函数 $z = \ln(x+y) + \sqrt{1-x^2-y^2}$ 的定义域。
>
> **解析**：
> 1. 对数部分要求：$x+y > 0 \implies y > -x$
> 2. 根式部分要求：$1-x^2-y^2 \geq 0 \implies x^2+y^2 \leq 1$
> 3. **结论**：定义域为圆域 $x^2+y^2 \leq 1$ 与半平面 $y > -x$ 的交集部分。

### 1.2 邻域与区域
- **邻域**：点 $P_0(x_0, y_0)$ 的 $\delta$ 邻域记为 $U(P_0, \delta)$，即满足 $\sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$ 的所有点 $(x,y)$ 的集合。
- **去心邻域**：$\mathring{U}(P_0, \delta)$，排除中心点 $P_0$ 本身，用于定义极限。
- **区域分类**：
  - **开区域**：不包含边界的区域。
  - **闭区域**：包含边界的区域。
  - **有界区域**：可以被包含在一个有限圆内的区域。
  - **连通性**：区域内任意两点可用完全属于该区域的折线连接。

---

## 第二章 多元函数的极限与连续

### 2.1 极限的定义 ($\epsilon-\delta$ 语言)
设函数 $z = f(x, y)$ 在点 $P_0(x_0, y_0)$ 的某去心邻域内有定义。若存在常数 $A$，对于任意给定的 $\epsilon > 0$，总存在 $\delta > 0$，使得当 $0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$ 时，恒有：
$$
|f(x, y) - A| < \epsilon
$$
则称 $A$ 为函数当 $(x, y) \to (x_0, y_0)$ 时的二重极限，记作：
$$
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = A
$$

### 2.2 极限存在的判定（核心难点）
- **核心逻辑**：多元函数极限存在要求**沿任意路径**趋近于该点时，极限值都必须相等且唯一。
- **证明极限不存在的方法**：只要找到两条不同的路径，使得沿这两条路径趋近时极限值不相等，即可断定极限不存在。

> **例题 2.1**：讨论极限 $\lim_{(x, y) \to (0, 0)} \frac{xy}{x^2 + y^2}$ 是否存在。
>
> **解析**：
> 1. **路径 1**：沿 $x$ 轴趋近 ($y=0, x \to 0$)
>    $$ \lim_{x \to 0} \frac{x \cdot 0}{x^2 + 0} = 0 $$
> 2. **路径 2**：沿直线 $y=kx$ 趋近 ($x \to 0$)
>    $$ \lim_{x \to 0} \frac{x \cdot kx}{x^2 + (kx)^2} = \lim_{x \to 0} \frac{kx^2}{(1+k^2)x^2} = \frac{k}{1+k^2} $$
> 3. **结论**：结果依赖于斜率 $k$。当 $k=1$ 时极限为 $1/2$，当 $k=0$ 时极限为 $0$。因路径不同极限值不同，故**极限不存在**。

### 2.3 连续性
- **定义**：若 $\lim_{(x, y) \to (x_0, y_0)} f(x, y) = f(x_0, y_0)$，则称函数在该点连续。
- **间断点**：函数无定义、极限不存在或极限值不等于函数值的点。
- **有界闭区域上连续函数的性质**：
  1. **最值定理**：必有最大值和最小值。
  2. **介值定理**：必能取到介于最大值和最小值之间的任何值。

---

## 第三章 偏导数与全微分

### 3.1 偏导数定义
函数 $z = f(x, y)$ 在点 $(x_0, y_0)$ 处对 $x$ 的偏导数定义为：
$$
\frac{\partial z}{\partial x}\bigg|_{(x_0, y_0)} = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x, y_0) - f(x_0, y_0)}{\Delta x}
$$
- **计算方法**：求 $\frac{\partial z}{\partial x}$ 时，将 $y$ 视为常数，对 $x$ 求一元导数；反之亦然。
- **几何意义**：曲面 $z=f(x,y)$ 被平面 $y=y_0$ 截得的曲线在点 $(x_0, y_0, z_0)$ 处切线对 $x$ 轴的斜率。

### 3.2 高阶偏导数
- **定义**：偏导数的偏导数。例如 $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right)$。
- **混合偏导数相等定理 (Clairaut 定理)**：若 $f_{xy}''$ 和 $f_{yx}''$ 在区域内**连续**，则 $f_{xy}'' = f_{yx}''$。此时求导顺序无关。

### 3.3 全微分
- **定义**：若函数 $z = f(x, y)$ 在点 $(x, y)$ 处的全增量 $\Delta z$ 可表示为：
  $$
  \Delta z = A \Delta x + B \Delta y + o(\rho), \quad \rho = \sqrt{(\Delta x)^2 + (\Delta y)^2}
  $$
  则称 $A \Delta x + B \Delta y$ 为全微分，记作 $dz = A dx + B dy$。
- **可微的必要条件**：若可微，则偏导数存在，且 $A = \frac{\partial z}{\partial x}, B = \frac{\partial z}{\partial y}$。
- **可微的充分条件**：若偏导数 $\frac{\partial z}{\partial x}, \frac{\partial z}{\partial y}$ 在点 $(x, y)$ 处**连续**，则函数在该点可微。

### 3.4 重要关系图（必考逻辑）
这是多元微分学中最容易混淆的逻辑链条，请务必记忆：
$$
\text{偏导连续} \implies \text{可微} \implies \begin{cases} \text{连续} \\ \text{偏导存在} \end{cases}
$$
- **反向均不成立**：
  - 偏导存在 $\nRightarrow$ 连续（例如分段函数在原点）
  - 连续 $\nRightarrow$ 偏导存在（例如圆锥顶点）
  - 偏导存在 $\nRightarrow$ 可微（可微要求增量近似是线性的，偏导存在只保证坐标轴方向可导）

---

## 第四章 多元函数求导法则（核心重点）

> 本章节结合了经典高数课程（如宋浩老师系列）的讲解逻辑，重点梳理链式法则的树状图技巧与易错点。

### 4.1 核心逻辑：链式法则
多元复合函数求导是一元复合函数链式法则在多维空间的推广。
- **核心口诀**：**「分段相乘，分叉相加；单路全导，多路偏导」**
- **可视化工具**：**变量依赖树状图**。
  - **画法**：将因变量作为根节点，中间变量作为中间节点，最终自变量作为叶子节点。
  - **规则**：
    1. 每一条从根到叶子的路径，就是一个乘积项。
    2. 所有路径的乘积项相加，即为最终导数。
    3. 路径上的函数是一元函数用 $d$，多元函数用 $\partial$。


公式：
$$
\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u} \cdot \frac{\partial u}{\partial x} + \frac{\partial z}{\partial v} \cdot \frac{\partial v}{\partial x}
$$

### 4.2 三种核心复合情形

#### 情形 1：全导数（单自变量复合）
- **场景**：所有中间变量均为同一个一元函数 $t$ 的函数。
- **公式**：设 $z=f(u,v), u=\varphi(t), v=\psi(t)$，则：
  $$
  \frac{dz}{dt} = \frac{\partial z}{\partial u} \cdot \frac{du}{dt} + \frac{\partial z}{\partial v} \cdot \frac{dv}{dt}
  $$
- **注意**：若 $z$ 显含 $t$（即 $z=f(u,v,t)$），公式需增加一项 $\frac{\partial z}{\partial t}$。

#### 情形 2：标准多元复合（多自变量 + 多中间变量）
- **场景**：考试中最常用场景。
- **公式**：设 $z=f(u,v), u=\varphi(x,y), v=\psi(x,y)$，则：
  $$
  \frac{\partial z}{\partial x} = \frac{\partial z}{\partial u} \cdot \frac{\partial u}{\partial x} + \frac{\partial z}{\partial v} \cdot \frac{\partial v}{\partial x}
  $$

#### 情形 3：混合复合（自变量兼作中间变量）
- **场景**：自变量既直接出现在外层，又通过中间变量间接复合。**高频易错点**。
- **公式**：设 $z=f(u,x,y), u=\varphi(x,y)$，则：
  $$
  \frac{\partial z}{\partial x} = \frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial x} + \frac{\partial f}{\partial x}
  $$
- **符号区分（必考）**：
  - $\boldsymbol{\frac{\partial f}{\partial x}}$：仅对函数表达式中**显式**的 $x$ 求导（视 $u,y$ 为常数）。这是对“位置变量”的偏导。
  - $\boldsymbol{\frac{\partial z}{\partial x}}$：对最终自变量 $x$ 的**全偏导**（包含间接影响）。这是对“最终自变量”的偏导。
  - **结论**：二者绝对不能划等号。

> **例题 4.1**：设 $z = f(x, xy)$，其中 $f$ 具有二阶连续偏导数，求 $\frac{\partial^2 z}{\partial x \partial y}$。
>
> **解析**：
> 1. **设定中间变量**：令 $u = x, v = xy$。则 $z = f(u, v)$。
> 2. **求一阶偏导 $\frac{\partial z}{\partial x}$**：
>    - 树状图路径：$x$ 直接影响 $u$ 和 $v$。
>    - $\frac{\partial u}{\partial x} = 1, \frac{\partial v}{\partial x} = y$
>    - $\frac{\partial z}{\partial x} = f_1' \cdot 1 + f_2' \cdot y = f_1' + y f_2'$
> 3. **求二阶偏导 $\frac{\partial}{\partial y}(\frac{\partial z}{\partial x})$**：
>    - 注意 $f_1'$ 和 $f_2'$ 仍然是 $u, v$ 的函数，而 $u, v$ 含 $y$。
>    - $\frac{\partial}{\partial y}(f_1') = f_{11}'' \frac{\partial u}{\partial y} + f_{12}'' \frac{\partial v}{\partial y} = 0 + f_{12}'' \cdot x = x f_{12}''$
>    - $\frac{\partial}{\partial y}(y f_2') = 1 \cdot f_2' + y \cdot \frac{\partial}{\partial y}(f_2')$
>    - $\frac{\partial}{\partial y}(f_2') = f_{21}'' \frac{\partial u}{\partial y} + f_{22}'' \frac{\partial v}{\partial y} = 0 + f_{22}'' \cdot x = x f_{22}''$
> 4. **合并结果**：
>    $$
>    \frac{\partial^2 z}{\partial x \partial y} = x f_{12}'' + f_2' + y(x f_{22}'') = f_2' + x f_{12}'' + xy f_{22}''
>    $$
>    *(注：因二阶连续，$f_{12}'' = f_{21}''$)*

### 4.3 核心技巧：全微分形式不变性
- **性质**：无论 $u,v$ 是自变量还是中间变量，只要 $z=f(u,v)$ 可微，全微分形式永远为：
  $$
  dz = \frac{\partial z}{\partial u} du + \frac{\partial z}{\partial v} dv
  $$
- **优势**：无需区分变量类型，直接展开微分，合并 $dx, dy$ 系数即可得到偏导数，可有效避免链式法则漏项。

### 4.4 隐函数求导法则
- **方程形式**：$F(x, y, z) = 0$ 确定 $z = z(x, y)$。
- **公式**：
  $$
  \frac{\partial z}{\partial x} = -\frac{F_x}{F_z}, \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}
  $$
- **推导逻辑**：对方程两边同时求微分 $d(F)=0$，解出 $dz$ 即可。

---

## 第五章 多元函数微分学的几何应用

### 5.1 空间曲线的切线与法平面
- **曲线方程**：$\Gamma: \begin{cases} x = \varphi(t) \\ y = \psi(t) \\ z = \omega(t) \end{cases}$
- **切向量**：$\vec{T} = (\varphi'(t_0), \psi'(t_0), \omega'(t_0))$
- **切线方程**：$\frac{x-x_0}{\varphi'(t_0)} = \frac{y-y_0}{\psi'(t_0)} = \frac{z-z_0}{\omega'(t_0)}$
- **法平面方程**：$\varphi'(t_0)(x-x_0) + \psi'(t_0)(y-y_0) + \omega'(t_0)(z-z_0) = 0$

### 5.2 空间曲面的切平面与法线
- **曲面方程**：$F(x, y, z) = 0$
- **法向量**：$\vec{n} = (F_x', F_y', F_z')\big|_{P_0}$
- **切平面方程**：$F_x'(x-x_0) + F_y'(y-y_0) + F_z'(z-z_0) = 0$
- **法线方程**：$\frac{x-x_0}{F_x'} = \frac{y-y_0}{F_y'} = \frac{z-z_0}{F_z'}$

> **例题 5.1**：求曲面 $z = x^2 + y^2$ 在点 $(1, 2, 5)$ 处的切平面方程。
>
> **解析**：
> 1. 构造隐函数：$F(x, y, z) = x^2 + y^2 - z = 0$。
> 2. 求偏导：$F_x = 2x, F_y = 2y, F_z = -1$。
> 3. 代入点 $(1, 2, 5)$ 得法向量 $\vec{n} = (2, 4, -1)$。
> 4. 切平面方程：$2(x-1) + 4(y-2) - 1(z-5) = 0$。
> 5. 化简：$2x + 4y - z - 5 = 0$。

---

## 第六章 方向导数与梯度

### 6.1 方向导数
- **定义**：函数 $z=f(x,y)$ 在点 $P$ 处沿方向 $l$ 的变化率。
- **计算公式**：若函数可微，方向 $l$ 的方向余弦为 $(\cos \alpha, \cos \beta)$，则：
  $$
  \frac{\partial f}{\partial l} = \frac{\partial f}{\partial x} \cos \alpha + \frac{\partial f}{\partial y} \cos \beta
  $$
- **注意**：方向余弦必须归一化，即 $\cos^2 \alpha + \cos^2 \beta = 1$。若给定向量 $\vec{v}=(a,b)$，需先单位化。

### 6.2 梯度（Gradient）
- **定义**：由偏导数组成的向量，记作 $\text{grad } f$ 或 $\nabla f$。
  $$
  \text{grad } f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right)
  $$
- **核心性质**：
  1. 梯度方向是函数**增长最快**的方向。
  2. 梯度的模 $|\text{grad } f|$ 是该方向上的最大方向导数。
  3. 梯度方向与等高线（面）的法线方向一致，指向函数值增加的一侧。
  4. 方向导数与梯度的关系：$\frac{\partial f}{\partial l} = \text{grad } f \cdot \vec{e}_l = |\text{grad } f| \cos \theta$。

---

## 第七章 多元函数的极值与最值

### 7.1 无条件极值
- **必要条件**：若 $z=f(x,y)$ 在 $(x_0, y_0)$ 处可微且取得极值，则 $f_x'(x_0, y_0) = 0, f_y'(x_0, y_0) = 0$（驻点）。
- **充分条件（Hessian 判别法）**：设 $A = f_{xx}'', B = f_{xy}'', C = f_{yy}''$ 在驻点处的值。
  - 若 $AC - B^2 > 0$ 且 $A < 0$，则为**极大值**。
  - 若 $AC - B^2 > 0$ 且 $A > 0$，则为**极小值**。
  - 若 $AC - B^2 < 0$，则**不是极值**（ saddle point 鞍点）。
  - 若 $AC - B^2 = 0$，判别法失效，需进一步讨论。

### 7.2 条件极值（拉格朗日乘数法）
- **问题**：求 $z = f(x, y)$ 在约束条件 $\varphi(x, y) = 0$ 下的极值。
- **构造辅助函数**：
  $$
  L(x, y, \lambda) = f(x, y) + \lambda \varphi(x, y)
  $$
- **求解步骤**：
  1. 解方程组 $\begin{cases} L_x' = 0 \\ L_y' = 0 \\ L_\lambda' = 0 \end{cases}$ 得到驻点 $(x_0, y_0, \lambda_0)$。
  2. 根据实际问题意义判断是否为极值点（通常应用题中唯一驻点即为最值点）。

> **例题 7.1**：欲做一个容积为 $V$ 的无盖圆柱形水桶，问底半径 $r$ 和高 $h$ 为何值时，所用材料最省？
>
> **解析**：
> 1. **目标函数**（表面积）：$S = \pi r^2 + 2\pi r h$
> 2. **约束条件**（体积）：$V = \pi r^2 h \implies h = \frac{V}{\pi r^2}$
> 3. **化为一元函数**（也可用拉格朗日法）：
>    $$
>    S(r) = \pi r^2 + 2\pi r \cdot \frac{V}{\pi r^2} = \pi r^2 + \frac{2V}{r}
>    $$
> 4. **求导令为零**：$S'(r) = 2\pi r - \frac{2V}{r^2} = 0 \implies r^3 = \frac{V}{\pi}$
> 5. **解得**：$r = \sqrt[3]{\frac{V}{\pi}}$，此时 $h = \frac{V}{\pi r^2} = r$。
> 6. **结论**：当底半径等于高时，材料最省。

### 7.3 闭区域上的最值
- **求法**：比较区域内所有**驻点**的函数值与**边界上**的最值。
- **步骤**：
  1. 求内部驻点函数值。
  2. 求边界上的条件极值（或化为一元函数求最值）。
  3. 比较所有值，最大者为最大值，最小者为最小值。

---

## 第八章 高频易错点避坑指南

1.  **极限路径依赖**：
    - 判断多元极限存在时，不能只试 $x$ 轴和 $y$ 轴，必须考虑 $y=kx$ 或 $y=x^2$ 等路径。
    - 若路径不同极限不同，则极限不存在。

2.  **符号混用**：
    - 一元函数关系用全导符号 $d$（如 $\frac{du}{dt}$）。
    - 多元函数关系用偏导符号 $\partial$（如 $\frac{\partial u}{\partial x}$）。
    - 严禁将 $\frac{du}{dt}$ 写成 $\frac{\partial u}{\partial t}$。

3.  **可微与偏导存在**：
    - 偏导存在推不出可微，也推不出连续。
    - 可微是最强的条件（可微 $\implies$ 连续 & 偏导存在）。

4.  **链式法则漏项**：
    - 未画树状图梳理所有路径，遗漏分叉的乘积项。
    - 高阶求导时，忘记一阶偏导数仍是复合函数，漏乘中间变量的偏导。
    - **切记**：抽象函数的一阶导数仍然是复合函数。

5.  **混淆偏导符号含义**：
    - 在混合复合情形中，错误将 $\frac{\partial z}{\partial x}$ 与 $\frac{\partial f}{\partial x}$ 划等号。
    - 忽略间接路径的贡献（即漏掉 $\frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial x}$ 项）。

6.  **拉格朗日漏解**：
    - 解方程组时容易漏掉 $\lambda=0$ 或变量为 0 的情况，需仔细讨论。
    - 忘记验证约束条件。

7.  **梯度方向**：
    - 梯度指向函数值**增加**最快的方向，而非减少。
    - 计算方向导数时，方向向量必须**单位化**。

---

## 第九章 总结与学习建议

多元函数微分学是一元微积分的推广，但维度增加带来了本质区别（如路径依赖、偏导与可微的关系）。

1.  **理清结构**：做题前先画出变量依赖树状图，明确谁是自变量，谁是中间变量。
2.  **规范符号**：严格区分 $d$ 与 $\partial$，区分 $\frac{\partial z}{\partial x}$ 与 $\frac{\partial f}{\partial x}$。
3.  **掌握技巧**：
    - 基础求导：熟练使用树状图路径法。
    - 复杂求导：优先尝试全微分形式不变性，可减少出错率。
    - 高阶求导：牢记一阶偏导与原函数同复合结构，每一次求导都必须重复使用链式法则。
4.  **针对性练习**：重点练习「抽象复合函数的高阶偏导」、「隐函数求导」和「拉格朗日乘数法」题型，这是考试的核心考点。
