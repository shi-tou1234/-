---
title: 牛顿定律、动量与能量
pubDate: 2026-03-10T09:15:00.000Z
draft: false
description: 
category: 大物
slugId: 牛顿定律、动量与能量
---

---

## 目录

1. [牛顿运动定律与常见力](#1-牛顿运动定律与常见力)
2. [动量定理](#2-动量定理)
3. [动量守恒定律](#3-动量守恒定律)
4. [功与动能定理](#4-功与动能定理)
5. [力学三大观点对比](#5-力学三大观点对比)

---

## 1. 牛顿运动定律与常见力

### 1.1 牛顿第二定律

牛顿第二定律描述了力与运动状态变化之间的瞬时关系。

**微分形式**：
$$ \vec{F} = \frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt} $$

:::derivation
牛顿第二定律的原始表述为：物体动量的变化率等于其所受合外力。

动量定义为 $\vec{p} = m\vec{v}$，对时间求导：
$$
\frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt}
$$
由定义，此即合外力 $\vec{F}$，故：
$$
\vec{F} = \frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt}
$$
此为牛顿第二定律的最普遍形式，适用于变质量情形（如火箭运动）。
:::

**质量恒定情况**：
$$ \vec{F} = m\frac{d\vec{v}}{dt} = m\vec{a} $$

:::derivation
当质量 $m$ 为常量时，由微分形式 $\vec{F} = \dfrac{d(m\vec{v})}{dt}$，将常量 $m$ 提出导数符号：
$$
\vec{F} = m\frac{d\vec{v}}{dt}
$$
代入加速度定义 $\vec{a} = \dfrac{d\vec{v}}{dt}$，即得：
$$
\vec{F} = m\vec{a}
$$
此即中学常见的牛顿第二定律形式，仅适用于质量不变的低速运动。
:::

**动力学两类基本问题**：
1.  **已知力求运动**：$\vec{F} \rightarrow \vec{a} \rightarrow \vec{v} \rightarrow \vec{r}$（积分过程）
2.  **已知运动求力**：$\vec{r} \rightarrow \vec{v} \rightarrow \vec{a} \rightarrow \vec{F}$（微分过程）

**解题一般步骤**：
1.  隔离物体
2.  受力分析
3.  建立坐标系
4.  列分量方程
5.  解方程
6.  结果讨论

### 1.2 万有引力与重力

**万有引力定律**：
$$ F = G\frac{m_1 m_2}{r^2} $$
其中引力常数 $G \approx 6.67 \times 10^{-11} \, \text{N}\cdot\text{m}^2/\text{kg}^2$。

**重力**：
在地表附近，物体所受重力近似为：
$$ P = mg $$
其中重力加速度 $g = \frac{Gm_E}{R^2} \approx 9.80 \, \text{m/s}^2$。

:::derivation
地表物体所受万有引力近似等于重力。设地球质量为 $m_E$，半径为 $R$，物体质量为 $m$，由万有引力定律：
$$
F = G\frac{m_E \cdot m}{R^2}
$$
此力即重力 $P = mg$，故：
$$
mg = G\frac{m_E m}{R^2}
$$
两边消去 $m$，得地表附近的重力加速度：
$$
g = \frac{Gm_E}{R^2}
$$
代入 $G \approx 6.67\times10^{-11}\,\text{N}\cdot\text{m}^2/\text{kg}^2$，$m_E \approx 5.97\times10^{24}\,\text{kg}$，$R \approx 6.37\times10^{6}\,\text{m}$，得 $g \approx 9.80\,\text{m/s}^2$。
:::

### 1.3 四种基本相互作用

自然界中所有的力均可归结为以下四种基本相互作用：

| 种类 | 相互作用粒子 | 力程 (m) | 相对强度 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **引力作用** | 所有粒子、质点 | $\infty$ | $10^{-39}$ | 宏观主导 |
| **电磁作用** | 带电粒子 | $\infty$ | $10^{-3}$ | 微观宏观均重要 |
| **弱相互作用** | 强子等大多数粒子 | $10^{-18}$ | $10^{-12}$ | 负责$\beta$衰变 |
| **强相互作用** | 核子、介子等强子 | $10^{-15}$ | $1$ | 维持原子核稳定 |

> **注**：强度是以两质子间相距为 $10^{-15}\text{m}$ 时的相互作用强度为 1 给出的。

### 1.4 弹性力

由物体形变而产生的力，常见于正压力、张力、弹簧等。

**胡克定律**（弹簧弹性力）：
$$ F = -kx $$
其中 $k$ 为劲度系数，$x$ 为形变量，负号表示力指向平衡位置。

### 1.5 摩擦力

**最大静摩擦力**：
$$ F_{f0m} = \mu_0 F_N $$

**滑动摩擦力**：
$$ F_f = \mu F_N $$

**静摩擦力范围**：
$$ F_{f0} \leq F_{f0m} $$
一般情况下 $\mu_0 \approx \mu$。

---

## 2. 动量定理

### 2.1 力的时间累积效应

力对时间的积累效应导致动量的变化。

**动量定义**：
$$ \vec{p} = m\vec{v} $$

**冲量定义**：
$$ \vec{I} = \int_{t_1}^{t_2} \vec{F} dt $$

### 2.2 质点的动量定理推导

从牛顿第二定律出发：
$$ \vec{F} = \frac{d\vec{p}}{dt} $$

分离变量：
$$ \vec{F} dt = d\vec{p} $$

两边积分（时间从 $t_1$ 到 $t_2$，动量从 $\vec{p}_1$ 到 $\vec{p}_2$）：
$$ \int_{t_1}^{t_2} \vec{F} dt = \int_{\vec{p}_1}^{\vec{p}_2} d\vec{p} $$

**得到质点动量定理**：
$$ \vec{I} = \vec{p}_2 - \vec{p}_1 = m\vec{v}_2 - m\vec{v}_1 $$

:::derivation
从牛顿第二定律 $\vec{F} = \dfrac{d\vec{p}}{dt}$ 出发，分离变量：
$$
\vec{F}\,dt = d\vec{p}
$$
两边积分，时间从 $t_1$ 到 $t_2$，动量从 $\vec{p}_1$ 到 $\vec{p}_2$：
$$
\int_{t_1}^{t_2} \vec{F}\,dt = \int_{\vec{p}_1}^{\vec{p}_2} d\vec{p} = \vec{p}_2 - \vec{p}_1
$$
左端为力的冲量 $\vec{I} = \int_{t_1}^{t_2} \vec{F}\,dt$，代入动量定义 $\vec{p} = m\vec{v}$：
$$
\vec{I} = \vec{p}_2 - \vec{p}_1 = m\vec{v}_2 - m\vec{v}_1
$$
即合外力对质点的冲量等于质点动量的增量。
:::

**文字表述**：在给定的时间间隔内，外力作用在质点上的冲量，等于质点在此时间内动量的增量。

**分量形式**：
$$ I_x = \int_{t_1}^{t_2} F_x dt = mv_{2x} - mv_{1x} $$
$$ I_y = \int_{t_1}^{t_2} F_y dt = mv_{2y} - mv_{1y} $$
$$ I_z = \int_{t_1}^{t_2} F_z dt = mv_{2z} - mv_{1z} $$

> **说明**：某方向受到冲量，该方向上动量就改变。

### 2.3 质点系的动量定理推导

考虑由 $n$ 个质点组成的系统。

**对第 $i$ 个质点应用动量定理**：
$$ \int_{t_1}^{t_2} (\vec{F}_i^{\text{ex}} + \sum_{j \neq i} \vec{F}_{ij}^{\text{in}}) dt = \vec{p}_i - \vec{p}_{i0} $$
其中 $\vec{F}_i^{\text{ex}}$ 为外力，$\vec{F}_{ij}^{\text{in}}$ 为内力。

**对所有质点求和**：
$$ \sum_{i=1}^n \int_{t_1}^{t_2} \vec{F}_i^{\text{ex}} dt + \sum_{i=1}^n \sum_{j \neq i} \int_{t_1}^{t_2} \vec{F}_{ij}^{\text{in}} dt = \sum_{i=1}^n \vec{p}_i - \sum_{i=1}^n \vec{p}_{i0} $$

**内力抵消**：
根据牛顿第三定律，$\vec{F}_{ij}^{\text{in}} = -\vec{F}_{ji}^{\text{in}}$，故内力冲量之和为零：
$$ \sum_{i=1}^n \sum_{j \neq i} \vec{F}_{ij}^{\text{in}} = 0 $$

:::derivation
考虑由 $n$ 个质点组成的系统，对第 $i$ 个质点，它受到外力 $\vec{F}_i^{\text{ex}}$ 和其他质点对它的内力 $\vec{F}_{ij}^{\text{in}}$（$j \neq i$）。

对所有质点求和时，内力成对出现。由牛顿第三定律：
$$
\vec{F}_{ij}^{\text{in}} = -\vec{F}_{ji}^{\text{in}}
$$
即第 $i$ 个质点对第 $j$ 个质点的作用力，与第 $j$ 个质点对第 $i$ 个质点的作用力大小相等、方向相反。

求和时每一对内力 $(\vec{F}_{ij}^{\text{in}}, \vec{F}_{ji}^{\text{in}})$ 相互抵消：
$$
\vec{F}_{ij}^{\text{in}} + \vec{F}_{ji}^{\text{in}} = 0
$$
故所有内力之和为零：
$$
\sum_{i=1}^n \sum_{j \neq i} \vec{F}_{ij}^{\text{in}} = 0
$$
此结果说明：内力不能改变系统的总动量，只有外力才能改变系统的总动量。
:::

**得到质点系动量定理**：
$$ \int_{t_1}^{t_2} \sum_{i=1}^n \vec{F}_i^{\text{ex}} dt = \vec{P} - \vec{P}_0 $$
即：
$$ \vec{I}^{\text{ex}} = \Delta \vec{P} $$

:::derivation
对系统内 $n$ 个质点分别应用质点动量定理并求和：
$$
\sum_{i=1}^n \int_{t_1}^{t_2} \vec{F}_i^{\text{ex}} dt + \sum_{i=1}^n \sum_{j \neq i} \int_{t_1}^{t_2} \vec{F}_{ij}^{\text{in}} dt = \sum_{i=1}^n \vec{p}_i - \sum_{i=1}^n \vec{p}_{i0}
$$
由内力抵消 $\sum_{i=1}^n \sum_{j \neq i} \vec{F}_{ij}^{\text{in}} = 0$，第二项为零。

定义系统总动量 $\vec{P} = \sum_{i=1}^n \vec{p}_i$，初态总动量 $\vec{P}_0 = \sum_{i=1}^n \vec{p}_{i0}$，合外力冲量 $\vec{I}^{\text{ex}} = \int_{t_1}^{t_2} \sum_{i=1}^n \vec{F}_i^{\text{ex}} dt$，得：
$$
\vec{I}^{\text{ex}} = \vec{P} - \vec{P}_0 = \Delta \vec{P}
$$
即合外力对系统的冲量等于系统总动量的增量。
:::

**文字表述**：作用于系统的合外力的冲量等于系统动量的增量。

> **注意**：内力仅能改变系统内某个物体的动量，但不能改变系统的总动量。

### 2.4 平均冲力

对于变力 $\vec{F}(t)$，定义平均冲力 $\bar{F}$ 使得：
$$ \vec{I} = \bar{F} (t_2 - t_1) = \Delta \vec{p} $$

**平均冲力公式**：
$$ \bar{F} = \frac{\Delta \vec{p}}{\Delta t} $$

:::derivation
由质点动量定理 $\vec{I} = \Delta\vec{p}$，其中冲量 $\vec{I} = \int_{t_1}^{t_2} \vec{F}(t)\,dt$。

对于随时间变化的力 $\vec{F}(t)$，定义平均冲力 $\bar{F}$ 使得其冲量与变力冲量相等：
$$
\bar{F}\,(t_2 - t_1) = \int_{t_1}^{t_2} \vec{F}(t)\,dt = \Delta\vec{p}
$$
令 $\Delta t = t_2 - t_1$，解得：
$$
\bar{F} = \frac{\Delta\vec{p}}{\Delta t}
$$
此式说明：当动量变化 $\Delta\vec{p}$ 一定时，作用时间 $\Delta t$ 越短，平均冲力越大。
:::

> **应用**：在动量变化 $\Delta \vec{p}$ 一定时，作用时间 $\Delta t$ 越小，平均冲力 $\bar{F}$ 越大（碰撞问题的核心）。

---

## 3. 动量守恒定律

### 3.1 定律推导

由质点系动量定理：
$$ \frac{d\vec{P}}{dt} = \sum \vec{F}^{\text{ex}} $$

**若系统所受合外力为零**：
$$ \sum \vec{F}^{\text{ex}} = 0 $$

则：
$$ \frac{d\vec{P}}{dt} = 0 \Rightarrow \vec{P} = \text{常量} $$

**动量守恒定律表达式**：
$$ \sum_{i=1}^n m_i \vec{v}_i = \text{常量} $$

:::derivation
由质点系动量定理的微分形式：
$$
\frac{d\vec{P}}{dt} = \sum \vec{F}^{\text{ex}}
$$
若系统所受合外力为零，即 $\sum \vec{F}^{\text{ex}} = 0$，则：
$$
\frac{d\vec{P}}{dt} = 0
$$
由导数为零可知 $\vec{P}$ 为常量，即系统总动量守恒：
$$
\vec{P} = \sum_{i=1}^n m_i \vec{v}_i = \text{常量}
$$
此定律比牛顿定律更基本，在相对论和量子力学中仍然成立。
:::

### 3.2 守恒条件

1.  **严格守恒**：系统所受合外力为零。
    $$ \vec{F}^{\text{ex}} = 0 $$
2.  **近似守恒**：当外力远小于内力时（如碰撞、爆炸）。
    $$ \vec{F}^{\text{ex}} \ll \vec{F}^{\text{in}} $$
3.  **分量守恒**：若合外力在某一方向的分量为零。
    $$ F_x^{\text{ex}} = 0 \Rightarrow P_x = \sum m_i v_{ix} = \text{常量} $$

### 3.3 重要说明

1.  系统的总动量不变，但系统内任一质点的动量是可变的。
2.  动量守恒定律是物理学最普遍、最基本的定律之一，适用于宏观和微观世界，在相对论和量子力学中仍然成立。

---

## 4. 功与动能定理

### 4.1 功的定义

**恒力的功**：
$$ W = \vec{F} \cdot \Delta \vec{r} = F \Delta r \cos \theta $$

**变力的功**：
元功：
$$ dW = \vec{F} \cdot d\vec{r} = F \cos \theta ds $$

总功（沿路径 $L$ 积分）：
$$ W = \int_{A}^{B} \vec{F} \cdot d\vec{r} = \int_{A}^{B} F \cos \theta ds $$

**直角坐标系表达**：
$$ W = \int_{A}^{B} (F_x dx + F_y dy + F_z dz) $$

**功的性质**：
1.  功是过程量，与路径有关。
2.  合力的功等于各分力的功的代数和。
3.  正负功判断：
    *   $0^\circ \leq \theta < 90^\circ$，$W > 0$（力做正功）
    *   $\theta = 90^\circ$，$W = 0$（力不做功）
    *   $90^\circ < \theta \leq 180^\circ$，$W < 0$（力做负功）

### 4.2 功率

**平均功率**：
$$ \bar{P} = \frac{\Delta W}{\Delta t} $$

**瞬时功率**：
$$ P = \frac{dW}{dt} = \vec{F} \cdot \frac{d\vec{r}}{dt} = \vec{F} \cdot \vec{v} = Fv \cos \theta $$

:::derivation
由功率定义 $P = \dfrac{dW}{dt}$，元功 $dW = \vec{F}\cdot d\vec{r}$，代入：
$$
P = \frac{dW}{dt} = \frac{\vec{F}\cdot d\vec{r}}{dt} = \vec{F}\cdot \frac{d\vec{r}}{dt}
$$
由速度定义 $\vec{v} = \dfrac{d\vec{r}}{dt}$，代入得：
$$
P = \vec{F}\cdot \vec{v}
$$
由点积的定义 $\vec{F}\cdot\vec{v} = Fv\cos\theta$（$\theta$ 为力与速度方向的夹角），故：
$$
P = Fv\cos\theta
$$
当力与速度同向时 $\theta = 0$，$P = Fv$；当力与速度垂直时 $\theta = 90^\circ$，$P = 0$（如向心力不做功）。
:::

**单位**：
*   功：焦耳 (J), $1 \text{ J} = 1 \text{ N}\cdot\text{m}$
*   功率：瓦特 (W), $1 \text{ W} = 1 \text{ J/s}$

### 4.3 质点的动能定理推导

从牛顿第二定律出发：
$$ \vec{F} = m\frac{d\vec{v}}{dt} $$

两边同时点乘位移微元 $d\vec{r}$：
$$ \vec{F} \cdot d\vec{r} = m\frac{d\vec{v}}{dt} \cdot d\vec{r} $$

由于 $d\vec{r} = \vec{v} dt$，代入右边：
$$ \vec{F} \cdot d\vec{r} = m\frac{d\vec{v}}{dt} \cdot (\vec{v} dt) = m \vec{v} \cdot d\vec{v} $$

利用矢量恒等式 $\vec{v} \cdot d\vec{v} = \frac{1}{2} d(\vec{v} \cdot \vec{v}) = \frac{1}{2} d(v^2)$：
$$ dW = \vec{F} \cdot d\vec{r} = \frac{1}{2} m d(v^2) $$

两边积分（从状态 1 到状态 2）：
$$ W = \int_{1}^{2} d\left( \frac{1}{2} m v^2 \right) = \frac{1}{2} m v_2^2 - \frac{1}{2} m v_1^2 $$

**得到动能定理**：
$$ W = E_{k2} - E_{k1} = \Delta E_k $$
其中动能定义为 $E_k = \frac{1}{2}mv^2$。

:::derivation
从牛顿第二定律 $\vec{F} = m\dfrac{d\vec{v}}{dt}$ 出发，两边点乘位移微元 $d\vec{r}$：
$$
\vec{F}\cdot d\vec{r} = m\frac{d\vec{v}}{dt}\cdot d\vec{r}
$$
由于 $d\vec{r} = \vec{v}\,dt$，代入右端：
$$
\vec{F}\cdot d\vec{r} = m\frac{d\vec{v}}{dt}\cdot(\vec{v}\,dt) = m\,\vec{v}\cdot d\vec{v}
$$
利用矢量恒等式 $\vec{v}\cdot d\vec{v} = \frac{1}{2}d(\vec{v}\cdot\vec{v}) = \frac{1}{2}d(v^2)$：
$$
dW = \vec{F}\cdot d\vec{r} = \frac{1}{2}m\,d(v^2) = d\left(\frac{1}{2}mv^2\right)
$$
两边积分（从状态 1 到状态 2）：
$$
W = \int_1^2 d\left(\frac{1}{2}mv^2\right) = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2
$$
定义动能 $E_k = \frac{1}{2}mv^2$，即得动能定理：
$$
W = E_{k2} - E_{k1} = \Delta E_k
$$
即合外力对质点所做的功等于质点动能的增量。
:::

**文字表述**：合外力对质点所作的功，等于质点动能的增量。

> **注意**：
> 1. 功是过程量，动能是状态量。
> 2. 功和动能依赖于惯性系的选取，但对不同惯性系动能定理形式相同。

---

## 5. 力学三大观点对比

| 观点 | 核心定律 | 基本方程 | 适用场景 | 物理量性质 |
| :--- | :--- | :--- | :--- | :--- |
| **力的观点** | 牛顿第二定律 | $\vec{F} = m\vec{a}$ | 求瞬时加速度、轨迹方程、受力细节 | 矢量、瞬时性 |
| **动量观点** | 动量定理 | $\vec{I} = \Delta\vec{p}$ | 碰撞、打击、变质量问题、涉及时间 | 矢量、累积性 (时间) |
| **能量观点** | 动能定理 | $W = \Delta E_k$ | 变力做功、求速度大小、涉及位移 | 标量、累积性 (空间) |

### 5.1 守恒律比较

| 守恒律 | 守恒条件 | 适用范围 | 物理量性质 |
| :--- | :--- | :--- | :--- |
| **动量守恒** | $\sum \vec{F}^{\text{ex}} = 0$ | 宏观、微观均适用 | 矢量 |
| **机械能守恒** | 只有保守力做功 | 宏观系统 | 标量 |

### 5.2 概念对比表

| 概念 | 定义式 | 性质 | 单位 |
| :--- | :--- | :--- | :--- |
| **动量** $\vec{p}$ | $m\vec{v}$ | 状态量、矢量 | $\text{kg}\cdot\text{m/s}$ |
| **冲量** $\vec{I}$ | $\int \vec{F} dt$ | 过程量、矢量 | $\text{N}\cdot\text{s}$ |
| **动能** $E_k$ | $\frac{1}{2}mv^2$ | 状态量、标量 | $\text{J}$ |
| **功** $W$ | $\int \vec{F} \cdot d\vec{r}$ | 过程量、标量 | $\text{J}$ |

---
