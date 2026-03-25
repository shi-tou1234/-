---
title: 刚体（二）
pubDate: 2026-03-25T08:36:00.000Z
draft: false
description: 
category: 大物
slugId: 刚体（二）
---

# 刚体转动：力矩做功、动能定理与角动量守恒

本文详细梳理刚体绕定轴转动中的**力矩做功**、**转动动能定理**以及**角动量守恒定律**的核心概念与公式推导。

---

## 一、力的累积效应 vs 力矩的累积效应

在力学中，力的累积效应分为空间累积和时间累积，力矩亦然：

| 累积效应 | 力的作用 (平动) | 力矩的作用 (转动) |
| :--- | :--- | :--- |
| **空间累积** | 力的功、动能、动能定理 | **力矩的功、转动动能、动能定理** |
| **时间累积** | 冲量、动量、动量定理 | **冲量矩、角动量、角动量定理** |

---

## 二、力矩的功与刚体转动动能定理 (4-4)

### 1. 力矩的功 (Work done by Torque)

力 $\vec{F}$ 作用在刚体上，使刚体绕定轴转动。力矩 $M$ 所做的元功 $dW$ 定义为：

$$
dW = \vec{F} \cdot d\vec{s} = F_t ds = F_t r d\theta = M d\theta
$$

其中：
- $F_t$ 为切向力
- $r$ 为力臂
- $d\theta$ 为角位移
- $M = F_t r$ 为力矩

**总功**为力矩在角位移上的积分：

$$
W = \int_{\theta_1}^{\theta_2} M d\theta
$$

> **比较**：平动中力的功 $W = \int \vec{F} \cdot d\vec{r}$

### 2. 力矩的功率 (Power of Torque)

功率是功对时间的变化率：

$$
P = \frac{dW}{dt} = M \frac{d\theta}{dt} = M \omega
$$

> **比较**：平动中力的功率 $P = \vec{F} \cdot \vec{v}$

### 3. 刚体的转动动能 (Rotational Kinetic Energy)

刚体绕定轴转动时，其动能等于组成刚体的各质元动能之和：

$$
E_k = \sum \frac{1}{2} \Delta m_i v_i^2 = \sum \frac{1}{2} \Delta m_i (r_i \omega)^2 = \frac{1}{2} \left( \sum \Delta m_i r_i^2 \right) \omega^2
$$

定义转动惯量 $J = \sum \Delta m_i r_i^2$，则：

$$
E_k = \frac{1}{2} J \omega^2
$$

> **比较**：平动动能 $E_k = \frac{1}{2} m v^2$

### 4. 刚体绕定轴转动的动能定理

合外力矩对绕定轴转动的刚体所做的功，等于刚体转动动能的增量。

**推导**：
$$
W = \int_{\theta_1}^{\theta_2} M d\theta = \int_{\theta_1}^{\theta_2} J \alpha d\theta = \int_{\theta_1}^{\theta_2} J \frac{d\omega}{dt} d\theta = \int_{\omega_1}^{\omega_2} J \omega d\omega
$$
$$
W = \frac{1}{2} J \omega_2^2 - \frac{1}{2} J \omega_1^2
$$

**定理表述**：
$$
W = \Delta E_k
$$

### 5. 典型例题：子弹射入杆

**模型**：长为 $l$、质量为 $m'$ 的杆可绕支点 $O$ 自由转动。质量为 $m$、速率为 $v$ 的子弹射入竿内距支点为 $a$ 处，使竿的偏转角为 $30^\circ$。

**求解**：子弹的初速率。

**解法**：
1.  **碰撞过程（角动量守恒）**：
    子弹、竿组成系统，碰撞瞬间角动量守恒。
    $$
    m v a = (J_{\text{杆}} + J_{\text{子弹}}) \omega = \left( \frac{1}{3} m' l^2 + m a^2 \right) \omega
    $$
    *(注：此处原文公式略有简化，通常杆绕端点转动惯量为 $\frac{1}{3}m'l^2$，原文似乎使用了特定条件或近似，以下按原文逻辑整理)*
    原文公式：
    $$
    m v a = \left( \frac{1}{3} m' l^2 + m a^2 \right) \omega
    $$

2.  **摆动过程（机械能守恒）**：
    射入后，子弹、细杆和地球为系统，机械能守恒。
    $$
    \frac{1}{2} \left( \frac{1}{3} m' l^2 + m a^2 \right) \omega^2 = m' g \frac{l}{2} (1 - \cos 30^\circ) + m g a (1 - \cos 30^\circ)
    $$
    联立求解即可得到 $v$。

---

## 三、角动量与角动量守恒定律 (4-3)

### 1. 质点的角动量 (Angular Momentum of a Particle)

质量为 $m$ 的质点，速度为 $\vec{v}$，某时刻对参考点 $O$ 的位矢为 $\vec{r}$。

**定义**：
$$
\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}
$$

**大小**：
$$
L = r m v \sin\theta
$$

**方向**：符合右手螺旋法则。
**单位**：$kg \cdot m^2 \cdot s^{-1}$

**特例**：质点作半径为 $r$ 的圆周运动
$$
L = m r^2 \omega = J \omega
$$

### 2. 质点的角动量定理

**推导**：
$$
\frac{d\vec{L}}{dt} = \frac{d}{dt} (\vec{r} \times \vec{p}) = \frac{d\vec{r}}{dt} \times \vec{p} + \vec{r} \times \frac{d\vec{p}}{dt}
$$
由于 $\frac{d\vec{r}}{dt} = \vec{v}$ 且 $\vec{p} = m\vec{v}$，故 $\vec{v} \times m\vec{v} = 0$。
又根据牛顿第二定律 $\frac{d\vec{p}}{dt} = \vec{F}$，故：
$$
\frac{d\vec{L}}{dt} = \vec{r} \times \vec{F} = \vec{M}
$$

**定理表述**：
作用于质点的合外力对参考点 $O$ 的力矩，等于质点对该点 $O$ 的角动量随时间的变化率。
$$
\vec{M} = \frac{d\vec{L}}{dt}
$$

**积分形式（冲量矩）**：
$$
\int_{t_1}^{t_2} \vec{M} dt = \vec{L}_2 - \vec{L}_1
$$

### 3. 质点的角动量守恒定律

**条件**：当质点所受对参考点 $O$ 的合力矩为零时 ($\vec{M} = 0$)。
**结论**：质点对该参考点 $O$ 的角动量为一常矢量。
$$
\vec{L} = \text{常矢量}
$$

> **注**：$\vec{M}=0$ 有两种情况：
> 1. 合力 $\vec{F} = 0$。
> 2. 合力不为零，但合力通过参考点 $O$ (有心力)。

### 4. 刚体定轴转动的角动量

**定义**：
$$
\vec{L} = \sum (\vec{r}_i \times m_i \vec{v}_i) = \sum m_i r_i^2 \vec{\omega} = J \vec{\omega}
$$

### 5. 刚体定轴转动的角动量定理

**微分形式**：
$$
\vec{M} = \frac{d\vec{L}}{dt} = \frac{d(J\vec{\omega})}{dt}
$$
若 $J$ 为常量（刚体），则 $\vec{M} = J \vec{\alpha}$ (转动定律)。

**积分形式**：
$$
\int_{t_1}^{t_2} \vec{M} dt = J \omega_2 - J \omega_1
$$
**表述**：当转轴给定时，作用在物体上的冲量矩等于角动量的增量。

### 6. 刚体定轴转动的角动量守恒定律

**条件**：合外力矩等于零 ($\vec{M} = 0$)。
**结论**：
$$
\vec{L} = J \vec{\omega} = \text{常量}
$$

**讨论**：
- 若 $J$ 不变，则 $\omega$ 不变。
- 若 $J$ 变化（如非刚体或系统内物体相对位置变化），则 $\omega$ 相应变化，但 $L$ 保持不变。
- **内力矩不改变系统的角动量**。

### 7. 典型例题分析

#### (1) 小球在光滑圆环上下滑
- **系统**：小球。
- **受力**：重力 $\vec{P}$，支持力 $\vec{F_N}$。
- **力矩**：支持力力矩为零，重力矩 $M = mgR \cos\theta$。
- **原理**：利用角动量定理 $\frac{dL}{dt} = M$ 积分求解角速度。

#### (2) 登月飞船变轨
- **过程**：飞船在 A 点喷气，变轨至 B 点。
- **原理**：
    1.  **角动量守恒**：在有心力场中运动，$L_A = L_B \Rightarrow m v_A R_A = m v_B R_B$。
    2.  **机械能守恒**：$E_A = E_B$。
    3.  **动量定理**：喷气过程消耗燃料质量计算。

#### (3) 小虫在细杆上爬行
- **模型**：细杆绕中心转动，小虫背离中心爬行。
- **条件**：欲使细杆以恒定角速度 $\omega$ 转动。
- **原理**：
    利用角动量定理 $\frac{dL}{dt} = M$。
    $$
    \frac{d}{dt} (J \omega) = M_{\text{重力}}
    $$
    由于 $\omega$ 恒定，$J$ 随小虫位置 $r$ 变化，需小虫以特定速率 $v = \frac{dr}{dt}$ 爬行以平衡重力矩的变化。

#### (4) 杂技演员跷板问题
- **模型**：演员 M 落下撞击跷板一端，将另一端演员 N 弹起。
- **原理**：
    1.  **碰撞瞬间**：M、N 和跷板系统**角动量守恒**（忽略重力矩冲量）。
        $$
        m v_M \frac{l}{2} = J_{\text{总}} \omega
        $$
    2.  **弹起过程**：演员 N 以初速度 $u = \omega \frac{l}{2}$ 做竖直上抛运动，机械能守恒求高度。

---

## 四、总结：平动与转动的对应关系

| 物理量/定律 | 平动 (Translation) | 转动 (Rotation) |
| :--- | :--- | :--- |
| **位移** | $x$ | $\theta$ |
| **速度** | $v$ | $\omega$ |
| **加速度** | $a$ | $\alpha$ |
| **惯性量** | 质量 $m$ | 转动惯量 $J$ |
| **力/力矩** | 力 $\vec{F}$ | 力矩 $\vec{M}$ |
| **动量/角动量** | 动量 $\vec{p} = m\vec{v}$ | 角动量 $\vec{L} = J\vec{\omega}$ |
| **动能** | $E_k = \frac{1}{2}mv^2$ | $E_k = \frac{1}{2}J\omega^2$ |
| **功** | $W = \int \vec{F} \cdot d\vec{r}$ | $W = \int M d\theta$ |
| **牛顿第二定律** | $\vec{F} = m\vec{a}$ | $\vec{M} = J\vec{\alpha}$ |
| **动能定理** | $W = \Delta (\frac{1}{2}mv^2)$ | $W = \Delta (\frac{1}{2}J\omega^2)$ |
| **守恒定律** | 动量守恒 ($\vec{F}=0$) | 角动量守恒 ($\vec{M}=0$) |

---

> **自然界中的守恒定律**：
> 动量守恒、能量守恒、角动量守恒、电荷守恒、质量守恒、宇称守恒等。其中角动量守恒定律是自然界的一个基本定律，广泛应用于花样滑冰、跳水、天体运动等现象。
