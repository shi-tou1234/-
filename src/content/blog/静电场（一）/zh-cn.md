---
title: 静电场（一）
pubDate: 2026-04-01T08:46:00.000Z
updatedDate: 2026-04-01T08:47:41.203Z
draft: false
description: 
category: 大物
slugId: 静电场（一）
---

# 静电场（一）

## 1. 电荷的基本性质

### 1.1 电荷的量子化
电荷不是连续的，而是量子化的。任何带电体的电荷量 $q$ 都是元电荷 $e$ 的整数倍。
$$ q = \pm ne \quad (n = 1, 2, 3, \dots) $$
其中元电荷：
$$ e \approx 1.602 \times 10^{-19} \, \text{C} $$

### 1.2 电荷守恒定律
在一个孤立系统中，不管系统中的电荷如何迁移，系统的电荷代数和保持不变。
> 这是自然界的基本守恒定律之一。

---

## 2. 库仑定律 (Coulomb's Law)

真空中两个静止点电荷之间的相互作用力，与它们的电荷量的乘积成正比，与它们之间距离的平方成反比，作用力的方向在它们的连线上。

### 2.1 公式
$$ \vec{F} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2} \vec{e_r} $$

*   $\varepsilon_0$：真空电容率，$\varepsilon_0 \approx 8.85 \times 10^{-12} \, \text{C}^2 \cdot \text{N}^{-1} \cdot \text{m}^{-2}$
*   $\vec{e_r}$：单位矢量，方向从施力电荷指向受力电荷。
*   **方向**：同号相斥，异号相吸。

### 2.2 点电荷模型
*   带电体的形状和大小对相互作用力的影响可以忽略不计。
*   抽象模型，类似于力学中的质点。

---

## 3. 电场强度 (Electric Field Intensity)

### 3.1 定义
电场强度是描述电场强弱和方向的物理量。定义为单位正试验电荷在电场中某点所受的电场力。
$$ \vec{E} = \frac{\vec{F}}{q_0} $$
*   $q_0$：试验电荷（电荷量足够小的点电荷）。
*   **单位**：$\text{N/C}$ 或 $\text{V/m}$。
*   **性质**：电场强度与试验电荷 $q_0$ 无关，由场源电荷及空间位置决定。

### 3.2 电场力
电荷 $q$ 在电场 $\vec{E}$ 中受到的电场力：
$$ \vec{F} = q\vec{E} $$

---

## 4. 电场强度的计算

### 4.1 点电荷的电场强度
真空中，点电荷 $Q$ 在距离 $r$ 处产生的电场强度：
$$ \vec{E} = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r^2} \vec{e_r} $$
*   $Q > 0$：$\vec{E}$ 沿径向向外。
*   $Q < 0$：$\vec{E}$ 沿径向向内。

### 4.2 电场强度叠加原理
点电荷系在某点产生的总电场强度等于各点电荷单独存在时在该点产生的电场强度的矢量和。
$$ \vec{E} = \sum_i \vec{E}_i = \sum_i \frac{1}{4\pi\varepsilon_0} \frac{q_i}{r_i^2} \vec{e_{ri}} $$

### 4.3 电荷连续分布的电场
对于连续分布的带电体，将其划分为无限多个电荷元 $dq$，每个电荷元视为点电荷，利用积分求解。
$$ \vec{E} = \int d\vec{E} = \int \frac{1}{4\pi\varepsilon_0} \frac{dq}{r^2} \vec{e_r} $$

根据电荷分布形态，$dq$ 的取值不同：
1.  **体分布** (体密度 $\rho$): $dq = \rho dV$
    $$ \vec{E} = \int_V \frac{1}{4\pi\varepsilon_0} \frac{\rho dV}{r^2} \vec{e_r} $$
2.  **面分布** (面密度 $\sigma$): $dq = \sigma dS$
    $$ \vec{E} = \int_S \frac{1}{4\pi\varepsilon_0} \frac{\sigma dS}{r^2} \vec{e_r} $$
3.  **线分布** (线密度 $\lambda$): $dq = \lambda dl$
    $$ \vec{E} = \int_l \frac{1}{4\pi\varepsilon_0} \frac{\lambda dl}{r^2} \vec{e_r} $$

---

## 5. 电偶极子的电场强度

### 5.1 电偶极矩 (电矩)
由一对等值异号点电荷 $+q$ 和 $-q$ 组成的系统，间距为 $r_0$。
$$ \vec{p} = q \vec{r_0} $$
*   方向：由负电荷指向正电荷。

### 5.2 轴线延长线上一点的电场强度 (远场 $x \gg r_0$)
$$ \vec{E} \approx \frac{1}{4\pi\varepsilon_0} \frac{2\vec{p}}{x^3} $$
*   方向与电矩 $\vec{p}$ 方向相同。

### 5.3 轴线中垂线上一点的电场强度 (远场 $y \gg r_0$)
$$ \vec{E} \approx -\frac{1}{4\pi\varepsilon_0} \frac{\vec{p}}{y^3} $$
*   方向与电矩 $\vec{p}$ 方向相反。

---

## 6. 典型例题推导

### 6.1 均匀带电圆环轴线上的电场
**模型**：正电荷 $q$ 均匀分布在半径为 $R$ 的圆环上，求轴线上距离环心 $x$ 处 $P$ 点的电场强度。

**推导要点**：
1.  取电荷元 $dq = \lambda dl$，其中 $\lambda = \frac{q}{2\pi R}$。
2.  电荷元在 $P$ 点产生的场强 $dE = \frac{1}{4\pi\varepsilon_0} \frac{dq}{r^2}$，其中 $r = \sqrt{R^2 + x^2}$。
3.  由对称性分析，垂直于轴线的分量 $dE_\perp$ 相互抵消，仅需计算轴线分量 $dE_x = dE \cos\theta$。
4.  $\cos\theta = \frac{x}{r} = \frac{x}{\sqrt{R^2 + x^2}}$。
5.  积分求解：
    $$ E = \int dE_x = \int \frac{1}{4\pi\varepsilon_0} \frac{dq}{r^2} \frac{x}{r} = \frac{1}{4\pi\varepsilon_0} \frac{x}{r^3} \int dq $$
    $$ E = \frac{1}{4\pi\varepsilon_0} \frac{qx}{(R^2 + x^2)^{3/2}} $$

**讨论**：
*   $x = 0$ (环心)：$E = 0$。
*   $x \gg R$ (远场)：$E \approx \frac{1}{4\pi\varepsilon_0} \frac{q}{x^2}$ (近似为点电荷)。
*   极值位置：$x = \pm \frac{R}{\sqrt{2}}$ 时场强最大。

### 6.2 均匀带电薄圆盘轴线上的电场
**模型**：半径为 $R$，电荷面密度为 $\sigma$ 的薄圆盘，求轴线上距离盘心 $x$ 处的电场强度。

**推导要点**：
1.  将圆盘分割为无数个同心圆环，取半径为 $r$，宽度为 $dr$ 的圆环。
2.  圆环电荷量 $dq = \sigma dS = \sigma (2\pi r dr)$。
3.  利用圆环电场公式，该圆环在 $P$ 点产生的场强：
    $$ dE = \frac{1}{4\pi\varepsilon_0} \frac{x \cdot dq}{(r^2 + x^2)^{3/2}} = \frac{1}{4\pi\varepsilon_0} \frac{x \cdot \sigma 2\pi r dr}{(r^2 + x^2)^{3/2}} $$
4.  积分求解 ($r$ 从 $0$ 到 $R$)：
    $$ E = \int_0^R \frac{\sigma x}{2\varepsilon_0} \frac{r dr}{(r^2 + x^2)^{3/2}} $$
    $$ E = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{x}{\sqrt{R^2 + x^2}} \right) $$

**讨论**：
*   $R \to \infty$ (无限大均匀带电平面)：$E = \frac{\sigma}{2\varepsilon_0}$ (匀强电场)。
*   $x \gg R$ (远场)：$E \approx \frac{1}{4\pi\varepsilon_0} \frac{q}{x^2}$ (近似为点电荷，其中 $q = \sigma \pi R^2$)。

---

