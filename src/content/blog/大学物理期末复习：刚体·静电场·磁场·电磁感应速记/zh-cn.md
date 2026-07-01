---
title: 大学物理期末复习：刚体·静电场·磁场·电磁感应速记
pubDate: 2026-07-01T04:32:00.000Z
updatedDate: 2026-07-01T04:38:35.957Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 大物
slugId: 大学物理期末复习：刚体·静电场·磁场·电磁感应速记
---

# 大学物理期末复习：刚体·静电场·磁场·电磁感应速记

> **导语**：本文整理了大学物理中刚体转动、静电场、恒定磁场、电磁感应四大章节的核心公式与常见模型推导，涵盖转动惯量、高斯定理、安培环路定理、法拉第定律等重点内容，适合作为期末复习或考研参考。基于马文蔚《物理学》第六版整理。

* * *

## 一、刚体转动

### 1.1 角量与线量关系

刚体转动中，角量与线量通过半径相联系：

$$ \omega = \frac{d\theta}{dt}, \quad \alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2} $$

$$ v = r\omega, \quad a_t = r\alpha, \quad a_n = r\omega^2 $$

匀角加速转动公式（类比匀变速直线运动）：

$$ \omega = \omega_0 + \alpha t, \quad \theta = \omega_0 t + \frac{1}{2}\alpha t^2, \quad \omega^2 - \omega_0^2 = 2\alpha\theta $$

### 1.2 力矩与转动定律

$$ \boldsymbol{M} = \boldsymbol{r} \times \boldsymbol{F}, \qquad M_z = rF\sin\theta $$

> **转动牛顿第二定律**$$ \boldsymbol{M} = J\alpha $$ 类比平动中的 $F = ma$，其中 $J$ 为转动惯量，$\alpha$ 为角加速度。

### 1.3 转动惯量

$$ J = \sum \Delta m_i r_i^2 \quad (\text{离散}), \qquad J = \int r^2 \, dm \quad (\text{连续}) $$

**常见转动惯量速查：**

| 模型  | 转轴  | $J$ |
| --- | --- | --- |
| 细杆（长 $L$） | 过中心 $\perp$ 杆 | $\frac{1}{12}mL^2$ |
| 细杆（长 $L$） | 过端点 $\perp$ 杆 | $\frac{1}{3}mL^2$ |
| 圆盘/圆柱（半径 $R$） | 过中心轴 | $\frac{1}{2}mR^2$ |
| 薄球壳（半径 $R$） | 过直径 | $\frac{2}{3}mR^2$ |
| 实心球（半径 $R$） | 过直径 | $\frac{2}{5}mR^2$ |
| 圆环（半径 $R$） | 过中心轴 | $mR^2$ |

**平行轴定理：**

$$ J_O = J_C + md^2 $$

其中 $d$ 为两平行轴之间的间距。

### 1.4 角动量与角动量守恒

$$ \boldsymbol{L} = \boldsymbol{r} \times \boldsymbol{p} = J\boldsymbol{\omega} $$

角动量定理：

$$ \frac{d\boldsymbol{L}}{dt} = \boldsymbol{M} \quad\Rightarrow\quad \int_{t_1}^{t_2} M \, dt = L_2 - L_1 $$

> **角动量守恒定律**若合外力矩 $M_{\text{外}} = 0$，则角动量守恒：$$ L = J\omega = \text{const} $$

#### 例题 1：子弹射入杆端

**题目：** 一质量为 $m$、速度为 $v_0$ 的子弹水平射入一静止细杆的一端，入射点距转轴 $L/4$ 处。细杆质量为 $m'$、长度为 $L$，绕端点转动。求碰撞后杆的角速度。

**解：**碰撞瞬间，系统对转轴无外力矩作用，角动量守恒。杆绕端点的转动惯量为 $\frac{1}{12}m'L^2$，子弹对转轴的转动惯量为 $m(L/4)^2$：

$$ m v_0 \cdot \frac{L}{4} = \left[\frac{1}{12}m'L^2 + m\left(\frac{L}{4}\right)^2\right]\omega $$

解得：

$$ \omega = \frac{12 v_0}{7L} $$

> **思路关键**：碰撞瞬间对转轴角动量守恒（无外力矩作用）。

### 1.5 力矩做功与转动动能

力矩的功和功率：

$$ W = \int_{\theta_1}^{\theta_2} M \, d\theta, \qquad P = M\omega $$

转动动能：

$$ E_k = \frac{1}{2} J \omega^2 $$

> **转动动能定理**$$ W = \int M \, d\theta = \frac{1}{2} J \omega_2^2 - \frac{1}{2} J \omega_1^2 $$

#### 例题 2：杆从水平自由下落到竖直

**题目：** 一长为 $L$、质量为 $m$ 的均匀细杆，一端固定，从水平位置由静止释放，求转到竖直位置时的角速度。

**解：**杆绕端点的转动惯量为 $J = \frac{1}{3}mL^2$。重力做功等于质心下移高度 $\frac{L}{2}$ 对应的势能减少。由转动动能定理：

$$ mg \cdot \frac{L}{2} = \frac{1}{2} J \omega^2 = \frac{1}{2} \cdot \frac{1}{3} m L^2 \cdot \omega^2 $$

解得：

$$ \omega = \sqrt{\frac{3g}{L}} $$

#### 例题 3：滑轮系统

**题目：** 一质量为 $m_A$、$m_B$ 的物体通过轻绳跨过质量为 $m$、半径为 $R$、转动惯量为 $J$ 的滑轮，求系统的加速度。

**解：**分别对两物体和滑轮列方程：

$$ \begin{aligned} m_A g - T_1 &= m_A a \\ T_2 - m_B g &= m_B a \\ (T_1 - T_2)R &= J\alpha \\ a &= R\alpha \end{aligned} $$

联立解得：

$$ a = \frac{m_A g}{m_A + m_B + J/R^2}, \qquad \alpha = \frac{a}{R} $$

> **注意**：滑轮有转动惯量时，绳两端张力不等，$T_1 \neq T_2$。

* * *

## 二、静电场

### 2.1 库仑定律与电场强度

$$ \boldsymbol{F} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2} \, \hat{\boldsymbol{r}}, \qquad \boldsymbol{E} = \frac{\boldsymbol{F}}{q_0} $$

点电荷电场：

$$ E = \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2} $$

**常见带电体电场强度速查：**

| 模型  | 位置  | $E$ |
| --- | --- | --- |
| 无限长均匀带电直线（线密度 $\lambda$） | 距线 $r$ 处 | $\displaystyle \frac{\lambda}{2\pi\varepsilon_0 r}$ |
| 无限大均匀带电平面（面密度 $\sigma$） | 任意处 | $\displaystyle \frac{\sigma}{2\varepsilon_0}$ |
| 均匀带电球面（半径 $R$，带电量 $q$） | 球外 $r > R$ | $\displaystyle \frac{q}{4\pi\varepsilon_0 r^2}$ |
| 均匀带电球面（半径 $R$，带电量 $q$） | 球内 $r < R$ | $0$ |
| 均匀带电球体（半径 $R$，带电量 $q$） | 球内 $r < R$ | $\displaystyle \frac{qr}{4\pi\varepsilon_0 R^3}$ |
| 均匀带电圆环（半径 $R$，带电量 $q$） | 轴线上 $x$ 处 | $\displaystyle \frac{qx}{4\pi\varepsilon_0 (x^2+R^2)^{3/2}}$ |

### 2.2 高斯定理

> **高斯定理**$$ \oint_S \boldsymbol{E} \cdot d\boldsymbol{S} = \frac{\sum q_{\text{内}}}{\varepsilon_0} $$

**利用高斯定理求 $E$ 的步骤：**

1. 分析电场对称性，选择合适的高斯面（球面/圆柱面/药盒面）
2. 计算电通量 $\Phi_e = E \cdot S_{\text{有效}}$
3. 计算高斯面内包围的总电荷 $\sum q_{\text{内}}$
4. 代入高斯定理，解出 $E$

### 2.3 电势

$$ V_P = \int_P^{\infty} \boldsymbol{E} \cdot d\boldsymbol{l}, \qquad V_{AB} = V_A - V_B = \int_A^B \boldsymbol{E} \cdot d\boldsymbol{l} $$

点电荷电势：

$$ V = \frac{q}{4\pi\varepsilon_0 r} $$

电场力做功与电势差：

$$ W_{AB} = q_0 (V_A - V_B), \qquad \boldsymbol{E} = -\nabla V $$

> **电势叠加原理**：电势为标量叠加 $V = \sum V_i$，比电场矢量的叠加更简单。

#### 例题 4：均匀带电圆环轴线上的电势

**题目：** 一半径为 $R$、总电量为 $q$ 的均匀带电圆环，求其轴线上距圆心 $x$ 处的电势。

**解：**由电势叠加原理，将圆环分割为无数个电荷元 $dq$，每个 $dq$ 到场点的距离为 $\sqrt{x^2+R^2}$：

$$ V = \int \frac{dq}{4\pi\varepsilon_0 \sqrt{x^2+R^2}} = \frac{1}{4\pi\varepsilon_0 \sqrt{x^2+R^2}} \int dq = \frac{q}{4\pi\varepsilon_0 \sqrt{x^2+R^2}} $$

**电偶极子：**

电偶极矩：

$$ \boldsymbol{p} = q\boldsymbol{l} $$

在均匀电场中：$\boldsymbol{F} = 0$，$\boldsymbol{M} = \boldsymbol{p} \times \boldsymbol{E}$，电势能 $W = -\boldsymbol{p} \cdot \boldsymbol{E}$

**均匀带电球面/球体的电势分布：**

$$ V(r) = \begin{cases} \displaystyle \frac{q}{4\pi\varepsilon_0 R} & r \le R \quad (\text{球面内}) \\[10pt] \displaystyle \frac{q}{4\pi\varepsilon_0 r} & r > R \quad (\text{球面外}) \end{cases} $$

* * *

## 三、恒定磁场

### 3.1 磁感强度与洛伦兹力

$$ B = \frac{F_{\max}}{qv}, \qquad \boldsymbol{F} = q\boldsymbol{v} \times \boldsymbol{B} $$

### 3.2 毕奥–萨伐尔定律

> **毕奥–萨伐尔定律**$$ d\boldsymbol{B} = \frac{\mu_0}{4\pi} \frac{I \, d\boldsymbol{l} \times \hat{\boldsymbol{r}}}{r^2} $$ 其中 $\mu_0 = 4\pi \times 10^{-7}\ \text{T·m/A}$ 为真空磁导率。

**常见载流导线磁场速查：**

| 模型  | 位置  | $B$ |
| --- | --- | --- |
| 无限长直导线（电流 $I$） | 距导线 $r$ 处 | $\displaystyle \frac{\mu_0 I}{2\pi r}$ |
| 半无限长直导线 | 端点正对 $r$ 处 | $\displaystyle \frac{\mu_0 I}{4\pi r}$ |
| 圆形电流（半径 $R$） | 圆心处 | $\displaystyle \frac{\mu_0 I}{2R}$ |
| 圆形电流（半径 $R$） | 轴线上 $x$ 处 | $\displaystyle \frac{\mu_0 I R^2}{2(x^2+R^2)^{3/2}}$ |
| 长直螺线管（$n = N/l$） | 管内  | $\mu_0 n I$ |
| 半无限长螺线管 | 端口  | $\displaystyle \frac{1}{2}\mu_0 n I$ |
| 螺绕环（$N$ 匝） | 环内 $r$ 处 | $\displaystyle \frac{\mu_0 N I}{2\pi r}$ |

**载流直导线磁场的推导公式（一般形式）：**

$$ B = \frac{\mu_0 I}{4\pi r_0} (\cos\theta_1 - \cos\theta_2) $$

代换关系：$z = -r_0 \cot\theta$，$r = r_0 / \sin\theta$，$dz = r_0 \, d\theta / \sin^2\theta$

* 无限长情形：$\theta_1 \to 0,\ \theta_2 \to \pi \Rightarrow B = \dfrac{\mu_0 I}{2\pi r_0}$
* 半无限长情形：$\theta_1 \to \dfrac{\pi}{2},\ \theta_2 \to \pi \Rightarrow B = \dfrac{\mu_0 I}{4\pi r_0}$

**圆电流轴线磁场推导：**

由对称性，只有 $x$ 方向分量保留：

$$ dB_x = \frac{\mu_0}{4\pi} \frac{I \cos\alpha \, dl}{r^2}, \quad \cos\alpha = \frac{R}{r}, \quad r^2 = x^2+R^2 $$

$$ \Rightarrow B = \frac{\mu_0 I R^2}{2(x^2+R^2)^{3/2}} $$

### 3.3 磁偶极矩

$$ \boldsymbol{m} = IS \, \hat{\boldsymbol{e}}_n $$

远场（轴线上 $x \gg R$）：

$$ \boldsymbol{B}_{\text{远场}} = \frac{\mu_0 \boldsymbol{m}}{2\pi x^3} $$

### 3.4 磁通量与磁场高斯定理

$$ \Phi_m = \int_S \boldsymbol{B} \cdot d\boldsymbol{S} $$

> **磁场高斯定理**$$ \oint_S \boldsymbol{B} \cdot d\boldsymbol{S} = 0 $$磁场是无源场，不存在磁单极。

### 3.5 安培环路定理

> **安培环路定理**$$ \oint_L \boldsymbol{B} \cdot d\boldsymbol{l} = \mu_0 \sum I_{\text{内}} $$

**利用安培环路定理求 $B$ 的步骤：**

分析对称性 → 选择安培环路 → 计算 $\oint B \, dl = B \cdot L$ → 计算 $\sum I_{\text{内}}$ → 解出 $B$

**无限长载流圆柱体（半径 $R$）的磁场分布：**

$$ B = \begin{cases} \dfrac{\mu_0 I r}{2\pi R^2}, & r < R \\[8pt] \dfrac{\mu_0 I}{2\pi r}, & r \ge R \end{cases} $$

**螺线管内磁场：**

$$ B \cdot l = \mu_0 n I l \;\Rightarrow\; B = \mu_0 n I \quad (n = N/l\ \text{为单位长度匝数}) $$

### 3.6 带电粒子在磁场中的运动

$$ \text{回旋半径：}\quad R = \frac{mv}{qB} $$

$$ \text{回旋周期：}\quad T = \frac{2\pi m}{qB} \quad (\text{与速度无关！}) $$

$$ \text{螺旋运动螺距：}\quad h = v_\parallel T = \frac{2\pi m v \cos\theta}{qB} $$

**霍尔效应：**

$$ U_H = \frac{IB}{nqd}, \qquad R_H = \frac{1}{nq} \quad (\text{霍尔系数}) $$

### 3.7 安培力与磁力矩

安培力：

$$ d\boldsymbol{F} = I \, d\boldsymbol{l} \times \boldsymbol{B} $$

载流线圈在均匀磁场中受到的磁力矩：

$$ \boldsymbol{M} = \boldsymbol{m} \times \boldsymbol{B}, \qquad \boldsymbol{m} = N I S \, \hat{\boldsymbol{e}}_n $$

> **注意**：均匀磁场中半圆导线受力可等效为直径直导线受力，$F = 2RIB$。

* * *

## 四、电磁感应

### 4.1 法拉第电磁感应定律

> **法拉第电磁感应定律**$$ \mathcal{E}_i = -\frac{d\Phi}{dt} $$ $N$ 匝线圈：$\mathcal{E}_i = -\dfrac{d\Psi}{dt}$，其中 $\Psi = N\Phi$。

**感应电量（与变化快慢无关！）：**

$$ q = \int I \, dt = \frac{|\Delta\Phi|}{R} $$

### 4.2 动生电动势

> **动生电动势公式**$$ \mathcal{E}_i = \int (\boldsymbol{v} \times \boldsymbol{B}) \cdot d\boldsymbol{l} $$

**导体棒切割磁力线**（$B$、$l$、$v$ 两两垂直时）：

$$ \mathcal{E}_i = Blv $$

#### 例题 5：铜棒在均匀磁场中旋转

**题目：** 一长为 $L$ 的铜棒在均匀磁场 $B$ 中以角速度 $\omega$ 绕一端旋转，求棒两端的电动势。

**解：**取微元 $dl$，其线速度为 $v = \omega l$，方向与磁场垂直：

$$ \mathcal{E}_i = \int_0^L vB\,dl = \int_0^L \omega l B\,dl = \frac{1}{2} B\omega L^2 $$

**圆盘发电机（半径 $R_1$ 到 $R_2$）：**

$$ \mathcal{E}_i = \int_{R_1}^{R_2} r\omega B\,dr = \frac{1}{2}\omega B(R_2^2 - R_1^2) $$

**交流发电机**（$N$ 匝线圈在均匀磁场中匀速转动）：

$$ \Psi = NBS\cos\omega t \;\Rightarrow\; \mathcal{E}_i = NBS\omega\sin\omega t = \mathcal{E}_m \sin\omega t $$

**矩形框上导体棒减速运动：**

$$ m\frac{dv}{dt} = -\frac{B^2 l^2 v}{R} \;\Rightarrow\; v = v_0 e^{-B^2 l^2 t/(mR)} $$

### 4.3 感生电动势与感生电场

> **感生电场环路定理**$$ \oint_L \boldsymbol{E}_k \cdot d\boldsymbol{l} = -\int_S \frac{\partial \boldsymbol{B}}{\partial t} \cdot d\boldsymbol{S} $$

感生电场由变化磁场激发，是非保守场（$\oint \boldsymbol{E}_k \cdot d\boldsymbol{l} \neq 0$）。

**均匀变化磁场中圆形区域内的感生电场（$r < R$）：**

$$ E_k \cdot 2\pi r = \pi r^2 \frac{dB}{dt} \;\Rightarrow\; E_k = \frac{r}{2} \frac{dB}{dt} $$

### 4.4 自感

$$ \Psi = LI, \qquad L = \frac{\Psi}{I} $$

$$ \mathcal{E}_L = -L\frac{dI}{dt} $$

**长直密绕螺线管自感系数：**

$$ B = \mu_0 n I, \quad \Psi = NBS = \mu_0 n^2 I V \;\Rightarrow\; L = \mu_0 n^2 V $$

其中 $V = lS$ 为螺线管体积，$n = N/l$。

**同轴圆柱电缆单位长度自感：**

$$ \frac{L}{l} = \frac{\mu_0}{2\pi} \ln\frac{R_2}{R_1} $$

### 4.5 互感

$$ M = \frac{\Phi_{21}}{I_1} = \frac{\Phi_{12}}{I_2}, \qquad \mathcal{E}_{12} = -M\frac{dI_2}{dt}, \qquad \mathcal{E}_{21} = -M\frac{dI_1}{dt} $$

**同轴双螺线管互感：**

$$ M = \mu_0 n_1 n_2 l (\pi r_1^2) \quad (r_1\ \text{为内管半径}) $$

**长直导线与矩形线圈互感：**

$$ M = \frac{\mu_0 l}{2\pi} \ln\frac{d+b}{d} $$

### 4.6 磁场能量

> **载流线圈的磁场能量**$$ W_m = \frac{1}{2} L I^2 $$

**磁场能量密度：**

$$ w_m = \frac{B^2}{2\mu_0} = \frac{1}{2} BH = \frac{1}{2}\mu_0 H^2 $$

总磁场能量：

$$ W_m = \int_V w_m \, dV = \int_V \frac{B^2}{2\mu_0} \, dV $$

**RL 电路充电过程：**

$$ I = \frac{\mathcal{E}}{R}\left(1 - e^{-Rt/L}\right), \qquad \tau = \frac{L}{R} $$

**RL 电路放电过程：**

$$ I = I_0 \, e^{-Rt/L} $$

### 4.7 麦克斯韦方程组（积分形式）

> **麦克斯韦方程组**$$ \oint_S \boldsymbol{D} \cdot d\boldsymbol{S} = \sum q \quad \text{（电场有源——高斯定理）} $$$$ \oint_L \boldsymbol{E} \cdot d\boldsymbol{l} = -\int_S \frac{\partial \boldsymbol{B}}{\partial t} \cdot d\boldsymbol{S} \quad \text{（变化磁场产生电场——法拉第定律）} $$$$ \oint_S \boldsymbol{B} \cdot d\boldsymbol{S} = 0 \quad \text{（磁场无源——磁场高斯定理）} $$$$ \oint_L \boldsymbol{H} \cdot d\boldsymbol{l} = \int_S \left( \boldsymbol{j}_c + \frac{\partial \boldsymbol{D}}{\partial t} \right) \cdot d\boldsymbol{S} \quad \text{（全电流安培定律）} $$

**位移电流：**

$$ I_d = \frac{d\Psi_D}{dt} = \int_S \frac{\partial \boldsymbol{D}}{\partial t} \cdot d\boldsymbol{S} $$

**电磁波速：**

$$ c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}} $$

* * *

## 五、总结与注意事项

### 5.1 核心公式速查

| 章节  | 核心公式 | 说明  |
| --- | --- | --- |
| 刚体转动 | $\boldsymbol{M} = J\alpha$ | 转动牛顿第二定律 |
| 刚体转动 | $J_O = J_C + md^2$ | 平行轴定理 |
| 刚体转动 | $M_{\text{外}} = 0 \Rightarrow J\omega = \text{const}$ | 角动量守恒条件 |
| 静电场 | $\displaystyle \oint_S \boldsymbol{E} \cdot d\boldsymbol{S} = \frac{\sum q_{\text{内}}}{\varepsilon_0}$ | 高斯定理 |
| 静电场 | $\displaystyle V = \frac{q}{4\pi\varepsilon_0 r}$ | 点电荷电势 |
| 磁场  | $\displaystyle d\boldsymbol{B} = \frac{\mu_0}{4\pi} \frac{I d\boldsymbol{l} \times \hat{\boldsymbol{r}}}{r^2}$ | 毕奥–萨伐尔定律 |
| 磁场  | $\displaystyle \oint_L \boldsymbol{B} \cdot d\boldsymbol{l} = \mu_0 \sum I_{\text{内}}$ | 安培环路定理 |
| 电磁感应 | $\displaystyle \mathcal{E}_i = -\frac{d\Phi}{dt}$ | 法拉第定律 |
| 电磁感应 | $\displaystyle \mathcal{E}_i = \int (\boldsymbol{v} \times \boldsymbol{B}) \cdot d\boldsymbol{l}$ | 动生电动势 |
| 电磁感应 | $\displaystyle w_m = \frac{B^2}{2\mu_0}$ | 磁场能量密度 |
| 电磁感应 | $\displaystyle L = \mu_0 n^2 V$ | 螺线管自感系数 |

### 5.2 易错点提醒

1. **转动惯量转轴选择**：同一物体绕不同轴的转动惯量不同，计算时务必先明确转轴位置，注意区分"过中心"和"过端点"的细杆公式。
  
2. **高斯定理 vs 安培环路定理**：两者形式对称但物理意义不同——高斯定理描述电场的有源性，安培环路定理描述磁场的涡旋性。求解时都需分析对称性，但高斯面是闭合曲面，安培环路是闭合回路。
  
3. **电动势方向**：法拉第定律中的负号（楞次定律）表示感应电动势的方向总是阻碍磁通量的变化。判断方向时不要忽略。
  
4. **动生 vs 感生**：动生电动势源于导体切割磁力线$(\boldsymbol{v} \times \boldsymbol{B})$，感生电动势源于变化磁场激发的感生电场$(\partial \boldsymbol{B} / \partial t)$，两者物理机制不同。
  
5. **积分路径符号**：计算电势 $V_{AB} = \int_A^B \boldsymbol{E} \cdot d\boldsymbol{l}$ 时，积分下限为起点 $A$，上限为终点 $B$，不要搞反。
  
6. **$L$ 与 $\Psi$ 的关系**：自感系数 $L = \Psi / I$，但只有无铁磁介质时 $L$ 才为常数（与 $I$ 无关）。
  
7. **位移电流**：位移电流的本质是变化的电场，不涉及电荷的真实移动，但在产生磁场方面与传导电流等效。
  

### 5.3 解题要点

* **刚体问题**：先明确转轴 → 计算转动惯量（平行轴定理）→ 判断角动量是否守恒（有无外力矩）→ 必要时联立转动动能定理。
  
* **静电场问题**：对称性好的带电体优先用高斯定理求 $E$；求电势时优先用电势叠加原理（标量叠加比矢量叠加简单）；非对称带电体用积分法。
  
* **磁场问题**：对称性好的载流导体优先用安培环路定理；非对称或求空间分布用毕奥–萨伐尔定律（注意矢量叉积方向）。
  
* **电磁感应问题**：先判断是动生还是感生→动生用 $\mathcal{E} = Blv$ 或积分形式；感生用 $\mathcal{E} = -d\Phi/dt$；综合性问题（如导体棒在磁场中减速）需联立牛顿定律和电磁感应方程。
  

* * *

> *基于马文蔚《物理学》第六版整理 · 期末复习速记用*
