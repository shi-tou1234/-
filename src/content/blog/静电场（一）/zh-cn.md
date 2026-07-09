---
title: 电荷与电场
pubDate: 2026-04-01T08:46:00.000Z
updatedDate: 2026-04-08T11:19:23.289Z
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

:::derivation
**推导过程：**

点电荷场强公式可由库仑定律和电场强度定义直接导出。

1. 由库仑定律，场源电荷 $Q$ 对试验电荷 $q_0$（位于距离 $r$ 处）的库仑力为：

$$\vec{F} = \frac{1}{4\pi\varepsilon_0}\frac{Q\,q_0}{r^2}\vec{e_r}$$

2. 由电场强度定义 $\vec{E} = \dfrac{\vec{F}}{q_0}$，将上式两边除以 $q_0$：

$$\vec{E} = \frac{\vec{F}}{q_0} = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\vec{e_r}$$

3. 由于 $\vec{F} \propto q_0$，比值 $\dfrac{\vec{F}}{q_0}$ 与 $q_0$ 无关，仅由场源电荷 $Q$ 和位置 $r$ 决定，这正是电场强度的物理本质。
:::

*   $Q > 0$：$\vec{E}$ 沿径向向外。
*   $Q < 0$：$\vec{E}$ 沿径向向内。

### 4.2 电场强度叠加原理
点电荷系在某点产生的总电场强度等于各点电荷单独存在时在该点产生的电场强度的矢量和。
$$ \vec{E} = \sum_i \vec{E}_i = \sum_i \frac{1}{4\pi\varepsilon_0} \frac{q_i}{r_i^2} \vec{e_{ri}} $$

:::derivation
**推导过程：**

叠加原理是静电场的基本原理之一，可由库仑定律的线性性质导出。

1. 设空间中有 $n$ 个点电荷 $q_1, q_2, \dots, q_n$，在场点 $P$ 处放置试验电荷 $q_0$。
2. 由库仑定律，第 $i$ 个点电荷 $q_i$ 对 $q_0$ 的作用力为：

$$\vec{F}_i = \frac{1}{4\pi\varepsilon_0}\frac{q_i\,q_0}{r_i^2}\vec{e_{ri}}$$

3. 实验表明，多个电荷对 $q_0$ 的合力等于各电荷单独作用力的**矢量和**（力的叠加原理）：

$$\vec{F}_{\text{总}} = \sum_i \vec{F}_i$$

4. 由 $\vec{E} = \dfrac{\vec{F}_{\text{总}}}{q_0}$，两边除以 $q_0$：

$$\vec{E} = \frac{\vec{F}_{\text{总}}}{q_0} = \sum_i \frac{\vec{F}_i}{q_0} = \sum_i \vec{E}_i$$

即总场强等于各点电荷单独产生场强的矢量和。
:::

### 4.3 电荷连续分布的电场
对于连续分布的带电体，将其划分为无限多个电荷元 $dq$，每个电荷元视为点电荷，利用积分求解。
$$ \vec{E} = \int d\vec{E} = \int \frac{1}{4\pi\varepsilon_0} \frac{dq}{r^2} \vec{e_r} $$

:::derivation
**推导过程：**

连续分布带电体的场强公式是叠加原理从**离散求和**到**连续积分**的自然推广。

1. 将带电体分割为 $N$ 个微小电荷元 $\Delta q_i$（$i=1,\dots,N$），每个电荷元足够小，可视为点电荷。
2. 由点电荷场强公式，第 $i$ 个电荷元在场点产生的场强：

$$\Delta\vec{E}_i = \frac{1}{4\pi\varepsilon_0}\frac{\Delta q_i}{r_i^2}\vec{e_{ri}}$$

3. 由叠加原理，总场强为离散求和：

$$\vec{E} = \sum_{i=1}^{N} \Delta\vec{E}_i = \sum_{i=1}^{N} \frac{1}{4\pi\varepsilon_0}\frac{\Delta q_i}{r_i^2}\vec{e_{ri}}$$

4. 当 $N\to\infty$，$\Delta q_i \to dq$，求和变为积分：

$$\vec{E} = \int \frac{1}{4\pi\varepsilon_0}\frac{dq}{r^2}\vec{e_r}$$

根据电荷分布形态，$dq$ 分别取 $\rho\,dV$（体）、$\sigma\,dS$（面）、$\lambda\,dl$（线）。
:::

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

:::derivation
**推导过程：**

电偶极子由 $+q$ 和 $-q$ 组成，间距 $r_0$，电矩 $\vec{p} = q\vec{r_0}$（由 $-q$ 指向 $+q$）。场点 $P$ 在轴线延长线上，距偶极子中心 $x$（远场 $x \gg r_0$）。

1. $+q$ 到 $P$ 距离为 $x - \dfrac{r_0}{2}$，$-q$ 到 $P$ 距离为 $x + \dfrac{r_0}{2}$。
2. 两电荷在 $P$ 点的场强方向相反（$+q$ 推、$-q$ 拉，均沿轴向同侧），取沿 $\vec{p}$ 方向为正：

$$E = E_+ - E_- = \frac{q}{4\pi\varepsilon_0}\left[\frac{1}{(x-\frac{r_0}{2})^2} - \frac{1}{(x+\frac{r_0}{2})^2}\right]$$

3. 通分后分子为：

$$\left(x+\frac{r_0}{2}\right)^2 - \left(x-\frac{r_0}{2}\right)^2 = 2x\cdot r_0$$

4. 远场近似 $x \gg r_0$，分母 $(x^2 - r_0^2/4)^2 \approx x^4$，故：

$$E \approx \frac{q}{4\pi\varepsilon_0}\cdot\frac{2x\,r_0}{x^4} = \frac{q\,r_0}{2\pi\varepsilon_0\,x^3} = \frac{1}{4\pi\varepsilon_0}\frac{2p}{x^3}$$

其中 $p = q\,r_0$。方向沿 $\vec{p}$ 方向。
:::

*   方向与电矩 $\vec{p}$ 方向相同。

### 5.3 轴线中垂线上一点的电场强度 (远场 $y \gg r_0$)
$$ \vec{E} \approx -\frac{1}{4\pi\varepsilon_0} \frac{\vec{p}}{y^3} $$

:::derivation
**推导过程：**

场点 $P$ 在中垂线上，距偶极子中心 $y$（远场 $y \gg r_0$）。

1. $+q$ 和 $-q$ 到 $P$ 点的距离相等：$r = \sqrt{y^2 + \left(\dfrac{r_0}{2}\right)^2}$。
2. 两电荷在 $P$ 点的场强大小相等：$E_+ = E_- = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r^2}$。
3. **对称性分析**：两场强的 $y$ 方向分量相互抵消（一个 $+q$ 在上方推、一个 $-q$ 在下方拉，$y$ 分量方向相反）；$x$ 方向分量叠加（均沿 $-\vec{p}$ 方向，即由 $+q$ 指向 $-q$）。
4. 取场强与轴线的夹角 $\alpha$，$\cos\alpha = \dfrac{r_0/2}{r}$，仅 $x$ 分量有效：

$$E = 2E_+\cos\alpha = \frac{2q}{4\pi\varepsilon_0\,r^2}\cdot\frac{r_0/2}{r} = \frac{q\,r_0}{4\pi\varepsilon_0\,r^3} = \frac{p}{4\pi\varepsilon_0\,r^3}$$

5. 远场近似 $y \gg r_0$，$r \approx y$：

$$E \approx \frac{p}{4\pi\varepsilon_0\,y^3}$$

方向沿 $-\vec{p}$（与电矩反向），故 $\vec{E} \approx -\dfrac{1}{4\pi\varepsilon_0}\dfrac{\vec{p}}{y^3}$。
:::

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

:::derivation
**推导过程：**

均匀带电圆环半径 $R$、总电量 $q$，求轴线上距环心 $x$ 处的场强。

1. **取微元**：在圆环上取弧长微元 $dl$，带电量 $dq = \lambda\,dl$，其中 $\lambda = \dfrac{q}{2\pi R}$。
2. **微元到场点距离**：所有微元到 $P$ 点的距离相等，$r = \sqrt{R^2 + x^2}$。
3. **微元场强**：$dE = \dfrac{1}{4\pi\varepsilon_0}\dfrac{dq}{r^2}$，方向沿微元指向 $P$ 点。
4. **对称性分析**：圆环关于轴线旋转对称，各微元场强的**垂直轴线分量** $dE_\perp$ 相互抵消，仅保留**沿轴线分量**：

$$dE_x = dE\cos\theta, \quad \cos\theta = \frac{x}{r} = \frac{x}{\sqrt{R^2+x^2}}$$

5. **积分**：$r$ 和 $\cos\theta$ 对所有微元相同，可提出积分号外，$\int dq = q$：

$$E = \int dE_x = \frac{1}{4\pi\varepsilon_0}\frac{x}{r^3}\int dq = \frac{1}{4\pi\varepsilon_0}\frac{qx}{(R^2+x^2)^{3/2}}$$
:::

**讨论**：
*   $x = 0$ (环心)：$E = 0$。
*   $x \gg R$ (远场)：$E \approx \frac{1}{4\pi\varepsilon_0} \frac{q}{x^2}$ (近似为点电荷)。
*   极值位置：$x = \pm \frac{R}{\sqrt{2}}$ 时场强最大。

:::derivation
**讨论结论的推导：**

**1. 远场近似（$x \gg R$）：**

当 $x \gg R$ 时，$R^2 + x^2 \approx x^2$，故 $(R^2+x^2)^{3/2} \approx x^3$，代入场强公式：

$$E \approx \frac{1}{4\pi\varepsilon_0}\frac{qx}{x^3} = \frac{1}{4\pi\varepsilon_0}\frac{q}{x^2}$$

这与点电荷场强公式一致，说明远场时圆环等效为全部电荷集中于环心的点电荷。

**2. 极值位置推导：**

对 $E(x) = \dfrac{qx}{4\pi\varepsilon_0(R^2+x^2)^{3/2}}$ 求导并令其为零：

$$\frac{dE}{dx} = \frac{q}{4\pi\varepsilon_0}\left[\frac{(R^2+x^2)^{3/2} - x\cdot\frac{3}{2}(R^2+x^2)^{1/2}\cdot 2x}{(R^2+x^2)^3}\right] = 0$$

分子为零（去掉非零因子 $(R^2+x^2)^{1/2}$）：

$$(R^2+x^2) - 3x^2 = 0 \quad \Rightarrow \quad R^2 = 2x^2 \quad \Rightarrow \quad x = \pm\frac{R}{\sqrt{2}}$$

此时场强最大值 $E_{\max} = \dfrac{q}{6\sqrt{3}\pi\varepsilon_0 R^2}$。
:::

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

:::derivation
**推导过程：**

将圆盘视为无数同心圆环的叠加，利用已得的圆环场强公式。

1. **取微元**：在圆盘上取半径 $r$、宽度 $dr$ 的细圆环，面积 $dS = 2\pi r\,dr$，带电量 $dq = \sigma\cdot 2\pi r\,dr$。
2. **利用圆环公式**：该细圆环在轴线上 $P$ 点（距盘心 $x$）产生的场强为：

$$dE = \frac{1}{4\pi\varepsilon_0}\frac{x\,dq}{(r^2+x^2)^{3/2}} = \frac{\sigma x\,r\,dr}{2\varepsilon_0(r^2+x^2)^{3/2}}$$

3. **积分**：$r$ 从 $0$ 到 $R$，所有圆环场强同方向（沿轴线），直接积分：

$$E = \int_0^R \frac{\sigma x}{2\varepsilon_0}\frac{r\,dr}{(r^2+x^2)^{3/2}}$$

4. **换元**：令 $u = r^2 + x^2$，$du = 2r\,dr$，上下限 $u: x^2 \to R^2+x^2$：

$$E = \frac{\sigma x}{4\varepsilon_0}\int_{x^2}^{R^2+x^2} u^{-3/2}\,du = \frac{\sigma x}{4\varepsilon_0}\left[-2u^{-1/2}\right]_{x^2}^{R^2+x^2}$$

5. 代入上下限：

$$E = \frac{\sigma x}{4\varepsilon_0}\left(\frac{2}{x} - \frac{2}{\sqrt{R^2+x^2}}\right) = \frac{\sigma}{2\varepsilon_0}\left(1 - \frac{x}{\sqrt{R^2+x^2}}\right)$$
:::

**讨论**：
*   $R \to \infty$ (无限大均匀带电平面)：$E = \frac{\sigma}{2\varepsilon_0}$ (匀强电场)。
*   $x \gg R$ (远场)：$E \approx \frac{1}{4\pi\varepsilon_0} \frac{q}{x^2}$ (近似为点电荷，其中 $q = \sigma \pi R^2$)。

:::derivation
**讨论结论的推导：**

**1. 无限大平面极限（$R \to \infty$）：**

当 $R \to \infty$ 时，$\dfrac{x}{\sqrt{R^2+x^2}} \to \dfrac{x}{R} \to 0$，故：

$$E = \frac{\sigma}{2\varepsilon_0}(1 - 0) = \frac{\sigma}{2\varepsilon_0}$$

此即无限大均匀带电平面的场强公式。**关键特征**：$E$ 与距离 $x$ 无关，是匀强电场。

**2. 远场近似（$x \gg R$）：**

当 $x \gg R$ 时，利用泰勒展开 $\dfrac{1}{\sqrt{1+u}} \approx 1 - \dfrac{u}{2}$（$u = \dfrac{R^2}{x^2} \ll 1$）：

$$\frac{x}{\sqrt{R^2+x^2}} = \frac{1}{\sqrt{1+\frac{R^2}{x^2}}} \approx 1 - \frac{R^2}{2x^2}$$

代入场强公式：

$$E \approx \frac{\sigma}{2\varepsilon_0}\left(1 - 1 + \frac{R^2}{2x^2}\right) = \frac{\sigma R^2}{4\varepsilon_0 x^2} = \frac{\sigma\pi R^2}{4\pi\varepsilon_0 x^2} = \frac{q}{4\pi\varepsilon_0 x^2}$$

其中 $q = \sigma\pi R^2$ 为圆盘总电量。远场时圆盘等效为点电荷。
:::

---
