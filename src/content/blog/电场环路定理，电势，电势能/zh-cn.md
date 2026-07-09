---
title: 电场环路定理，电势，电势能
pubDate: 2026-04-15T13:52:00.000Z
updatedDate: 2026-04-15T13:53:05.433Z
draft: false
description: 
category: 大物
slugId: 电场环路定理，电势，电势能
---

# 📚 静电场核心概念与公式推导（5-6 ~ 5-8）

> 本文基于《物理学（第六版）》第五章内容整理，系统梳理静电场的环路定理、电势能、电势定义及其与电场强度的微分关系。适合考研复习、期末备考或物理博客发布。

---

## 一、静电场的环路定理与电势能（5-6）

### 🔹 核心概念
| 概念 | 物理意义 |
|:---|:---|
| **保守场** | 静电场力做功仅与电荷的始末位置有关，与移动路径无关。 |
| **环路定理** | 试验电荷沿任意闭合路径移动一周，静电场力做功恒为零。 |
| **电势能** | 电荷在电场中某点具有的能量。电场力做正功，电势能减少；做负功，电势能增加。 |

### 📐 关键公式与推导

#### 1. 点电荷电场中电场力做功
设源电荷为 $q$，试验电荷为 $q_0$。在点电荷电场中移动 $q_0$ 时：
$$
dW = q_0 \vec{E} \cdot d\vec{l} = q_0 \frac{q}{4\pi\varepsilon_0 r^2} \hat{e}_r \cdot d\vec{l}
$$
由几何关系 $dr = \cos\theta \, dl = \hat{e}_r \cdot d\vec{l}$，得：
$$
dW = \frac{q q_0}{4\pi\varepsilon_0 r^2} dr
$$
从 $A$ 点移动到 $B$ 点积分：
$$
W_{AB} = \int_{r_A}^{r_B} \frac{q q_0}{4\pi\varepsilon_0 r^2} dr = \frac{q q_0}{4\pi\varepsilon_0} \left( \frac{1}{r_A} - \frac{1}{r_B} \right)
$$

:::derivation
点电荷 $q$ 产生的电场中，试验电荷 $q_0$ 所受电场力 $\vec{F} = q_0 \vec{E} = \dfrac{q q_0}{4\pi\varepsilon_0 r^2}\hat{e}_r$。移动 $q_0$ 时电场力做元功：

$$
dW = \vec{F} \cdot d\vec{l} = q_0 \vec{E} \cdot d\vec{l} = \frac{q q_0}{4\pi\varepsilon_0 r^2}\hat{e}_r \cdot d\vec{l}
$$

由几何关系，$\hat{e}_r \cdot d\vec{l} = \cos\theta\,dl = dr$（径向位移分量），故：

$$
dW = \frac{q q_0}{4\pi\varepsilon_0 r^2}\,dr
$$

从 $A$ 点（距源电荷 $r_A$）到 $B$ 点（距源电荷 $r_B$）沿任意路径积分：

$$
W_{AB} = \int_{r_A}^{r_B} \frac{q q_0}{4\pi\varepsilon_0 r^2}\,dr = \frac{q q_0}{4\pi\varepsilon_0}\left[-\frac{1}{r}\right]_{r_A}^{r_B} = \frac{q q_0}{4\pi\varepsilon_0}\left(\frac{1}{r_A} - \frac{1}{r_B}\right)
$$

结果仅与始末位置 $r_A$、$r_B$ 有关，与路径无关，说明静电场力是保守力。
:::
✅ **结论**：$W_{AB}$ 仅取决于 $r_A, r_B$，与路径无关。

#### 2. 静电场的环路定理
对任意闭合回路 $L$：
$$
\oint_L \vec{E} \cdot d\vec{l} = 0
$$

:::derivation
由点电荷电场力做功公式 $W_{AB} = \dfrac{q q_0}{4\pi\varepsilon_0}\left(\dfrac{1}{r_A} - \dfrac{1}{r_B}\right)$，可知静电场力做功仅与始末位置有关，与路径无关。对任意闭合回路 $L$，起点和终点重合（$A = B$，即 $r_A = r_B$），故：

$$
W_{AA} = \oint_L q_0 \vec{E} \cdot d\vec{l} = \frac{q q_0}{4\pi\varepsilon_0}\left(\frac{1}{r_A} - \frac{1}{r_A}\right) = 0
$$

两边除以 $q_0$ 得：

$$
\oint_L \vec{E} \cdot d\vec{l} = 0
$$

由叠加原理，任意带电体可视为点电荷的集合，每个点电荷电场沿闭合路径积分为零，故总电场的环路积分也为零。该定理表明静电场是保守场，电场线不可能闭合。
:::
> **物理意义**：静电场是保守场，电场线不可能闭合。

#### 3. 电势能定义
电场力做功等于电势能增量的负值：
$$
W_{AB} = E_{pA} - E_{pB}
$$
若规定 $B$ 点为零势能点（$E_{pB}=0$），则 $A$ 点电势能为：
$$
E_{pA} = \int_{A}^{B} q_0 \vec{E} \cdot d\vec{l}
$$

:::derivation
由静电场力做功与电势能的关系 $W_{AB} = E_{pA} - E_{pB}$（电场力做正功，电势能减少）。若规定 $B$ 点为零势能参考点（$E_{pB} = 0$），则：

$$
W_{AB} = E_{pA} - 0 = E_{pA}
$$

而 $W_{AB} = \int_A^B q_0 \vec{E} \cdot d\vec{l}$，故 $A$ 点电势能为：

$$
E_{pA} = \int_{A}^{B} q_0 \vec{E} \cdot d\vec{l}
$$

由于静电场力做功与路径无关，可选任意方便的路径积分。通常选无穷远处为零势能点（$B \to \infty$），则 $E_{pA} = \int_A^{\infty} q_0 \vec{E} \cdot d\vec{l}$。注意电势能属于电荷与电场组成的系统。
:::
> **注意**：电势能属于电荷与电场组成的系统，不是试探电荷单独所有。

---

## 二、电势（5-7）

### 🔹 核心概念
| 概念 | 说明 |
|:---|:---|
| **电势 $V$** | 单位正电荷在某点具有的电势能，或从该点移到零势点电场力做的功。 |
| **电势差 $U_{AB}$** | $U_{AB} = V_A - V_B = \int_A^B \vec{E} \cdot d\vec{l}$ |
| **零势点选取** | 有限带电体通常选 $\infty$ 处为零势点；实际问题中常选大地为零势点。无限大/长带电体不能选 $\infty$ 为零势点。 |
| **电子伏特 (eV)** | 原子物理常用能量单位：$1\text{ eV} = 1.602 \times 10^{-19} \text{ J}$ |

### 📐 关键公式与推导

#### 1. 电势定义式
$$
V_A = \int_{A}^{\infty} \vec{E} \cdot d\vec{l} \quad (V_\infty = 0)
$$

:::derivation
电势能 $E_{pA} = \int_A^{\infty} q_0 \vec{E} \cdot d\vec{l}$ 与试验电荷 $q_0$ 成正比。为消除对 $q_0$ 的依赖，定义电势为电势能与电荷量之比：

$$
V_A = \frac{E_{pA}}{q_0} = \frac{\int_A^{\infty} q_0 \vec{E} \cdot d\vec{l}}{q_0} = \int_{A}^{\infty} \vec{E} \cdot d\vec{l}
$$

物理意义：$A$ 点电势等于将单位正电荷从 $A$ 点沿任意路径移到零势点（无穷远）时，电场力所做的功。电势是标量，仅取决于电场分布和参考点选取，与试验电荷无关。对于有限带电体，通常选 $V_\infty = 0$。
:::

#### 2. 点电荷的电势
$$
V = \int_{r}^{\infty} \frac{q}{4\pi\varepsilon_0 r'^2} dr' = \frac{q}{4\pi\varepsilon_0 r}
$$

:::derivation
点电荷 $q$ 产生的电场 $\vec{E} = \dfrac{q}{4\pi\varepsilon_0 r^2}\hat{e}_r$，选无穷远处电势为零。由电势定义 $V = \int_r^{\infty} \vec{E} \cdot d\vec{l}$，沿径向积分（$\vec{E} \cdot d\vec{l} = E\,dr'$）：

$$
V = \int_{r}^{\infty} \frac{q}{4\pi\varepsilon_0 r'^2}\,dr' = \frac{q}{4\pi\varepsilon_0}\left[-\frac{1}{r'}\right]_{r}^{\infty} = \frac{q}{4\pi\varepsilon_0}\left(0 - \left(-\frac{1}{r}\right)\right) = \frac{q}{4\pi\varepsilon_0 r}
$$

正电荷产生正电势，负电荷产生负电势，电势以 $\dfrac{1}{r}$ 规律衰减（比场强的 $\dfrac{1}{r^2}$ 衰减更慢）。
:::

#### 3. 电势叠加原理
- **离散点电荷系**：
  $$
  V_A = \sum_{i=1}^{n} \frac{q_i}{4\pi\varepsilon_0 r_i}
  $$

  :::derivation
  由电势定义 $V_A = \int_A^{\infty} \vec{E} \cdot d\vec{l}$，而总电场由叠加原理 $\vec{E} = \sum_{i=1}^n \vec{E}_i$ 给出，代入：

  $$
  V_A = \int_A^{\infty} \sum_{i=1}^n \vec{E}_i \cdot d\vec{l} = \sum_{i=1}^n \int_A^{\infty} \vec{E}_i \cdot d\vec{l} = \sum_{i=1}^n V_i
  $$

  其中 $V_i = \dfrac{q_i}{4\pi\varepsilon_0 r_i}$ 为第 $i$ 个点电荷在 $A$ 点产生的电势。故：

  $$
  V_A = \sum_{i=1}^{n} \frac{q_i}{4\pi\varepsilon_0 r_i}
  $$

  与场强叠加（矢量叠加）不同，电势叠加是**标量叠加**，无需分解方向，计算更简便。
  :::
- **连续带电体**：
  $$
  V_A = \int \frac{dq}{4\pi\varepsilon_0 r}
  $$

  :::derivation
  对连续带电体，将其分割为无数微小电荷元 $dq$，每个电荷元可视为点电荷，在 $A$ 点产生的电势 $dV = \dfrac{dq}{4\pi\varepsilon_0 r}$（$r$ 为 $dq$ 到 $A$ 点的距离）。由电势叠加原理（标量积分）：

  $$
  V_A = \int dV = \int \frac{dq}{4\pi\varepsilon_0 r}
  $$

  根据电荷分布类型，$dq$ 可表示为：
  - 线电荷：$dq = \lambda\,dl$
  - 面电荷：$dq = \sigma\,dS$
  - 体电荷：$dq = \rho\,dV$

  由于电势是标量，此积分无需矢量分解，通常比直接积分求场强更简便。
  :::

#### 4. 典型模型电势分布
| 模型 | 电势分布 $V$ |
|:---|:---|
| **均匀带电细圆环（轴线上）** | $V_P = \dfrac{q}{4\pi\varepsilon_0 \sqrt{R^2+x^2}}$ |
| **均匀带电球面（半径 $R$）** | $\displaystyle V = \begin{cases} \dfrac{Q}{4\pi\varepsilon_0 R} & (r \le R) \\ \dfrac{Q}{4\pi\varepsilon_0 r} & (r > R) \end{cases}$ |
| **无限长均匀带电直导线** | $V_P = \dfrac{\lambda}{2\pi\varepsilon_0} \ln \dfrac{r_B}{r} \quad (V_B=0)$ |

> 💡 **球面内电势推导提示**：球内 $E=0$，从球内任意点移到球面电场力不做功，故球内电势等于球面电势，为常数。

---

## 三、电场强度与电势梯度（5-8）

### 🔹 核心概念
| 概念 | 说明 |
|:---|:---|
| **等势面** | 电势相等的点构成的面。电荷沿等势面移动时，电场力做功为零。 |
| **正交性** | 电场线处处与等势面垂直，且由高电势指向低电势。 |
| **疏密关系** | 等势面越密处，电势变化越快，电场强度越大。 |

### 📐 关键公式与推导

#### 1. 场强与电势的微分关系
沿任意方向 $l$ 移动 $dl$：
$$
dW = q E_l dl = -q dV \quad \Rightarrow \quad E_l = -\frac{dV}{dl}
$$
当 $dl$ 沿电势下降最快的方向（法向 $\vec{n}$）时，场强最大：
$$
E = -\frac{dV}{dn} \quad \Rightarrow \quad \vec{E} = -\nabla V = -\text{grad} V
$$

:::derivation
将试验电荷 $q_0$ 沿任意方向 $\hat{l}$ 移动微小位移 $dl$，电场力做功 $dW = q_0 E_l\,dl$，同时电势变化 $dV$。由电场力做功与电势能关系 $dW = -q_0\,dV$，故：

$$
q_0 E_l\,dl = -q_0\,dV \quad \Rightarrow \quad E_l = -\frac{dV}{dl}
$$

即场强沿 $\hat{l}$ 方向的分量等于电势在该方向的方向导数的负值。当 $\hat{l}$ 取电势变化最快的方向（等势面法向 $\hat{n}$）时，场强分量最大：

$$
E = -\frac{dV}{dn}
$$

一般地，场强为电势梯度的负值：

$$
\vec{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}\right)
$$

负号表示场强指向电势降低的方向，即电场线由高电势指向低电势。
:::
直角坐标系展开：
$$
\vec{E} = -\left( \frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k} \right)
$$

#### 2. 应用：由电势求场强（例题）
**例1：带电细圆环轴线上场强**
已知 $V = \dfrac{q}{4\pi\varepsilon_0 \sqrt{R^2+x^2}}$，由对称性知 $E_y=E_z=0$：
$$
E_x = -\frac{\partial V}{\partial x} = -\frac{q}{4\pi\varepsilon_0} \cdot \left(-\frac{1}{2}\right)(R^2+x^2)^{-3/2} \cdot 2x = \frac{qx}{4\pi\varepsilon_0 (R^2+x^2)^{3/2}}
$$

**例2：电偶极子电场**
远场近似（$r \gg l$）下电势：
$$
V = \frac{p \cos\theta}{4\pi\varepsilon_0 r^2}
$$

:::derivation
电偶极子由相距 $l$ 的一对等量异号电荷 $\pm q$ 组成，电偶极矩 $\vec{p} = q\vec{l}$（由负电荷指向正电荷）。在远场区（$r \gg l$），场点 $P$ 到正负电荷的距离分别为：

$$
r_+ \approx r - \frac{l}{2}\cos\theta, \quad r_- \approx r + \frac{l}{2}\cos\theta
$$

由电势叠加原理：

$$
V = \frac{q}{4\pi\varepsilon_0 r_+} - \frac{q}{4\pi\varepsilon_0 r_-} \approx \frac{q}{4\pi\varepsilon_0}\left(\frac{1}{r - \frac{l}{2}\cos\theta} - \frac{1}{r + \frac{l}{2}\cos\theta}\right)
$$

利用泰勒展开近似 $\dfrac{1}{r \pm a} \approx \dfrac{1}{r} \mp \dfrac{a}{r^2}$：

$$
V \approx \frac{q}{4\pi\varepsilon_0} \cdot \frac{l\cos\theta}{r^2} = \frac{p\cos\theta}{4\pi\varepsilon_0 r^2}
$$

电偶极子电势以 $\dfrac{1}{r^2}$ 衰减，比点电荷 $\dfrac{1}{r}$ 更快，因为远处正负电荷的电势相互抵消。
:::
在直角坐标系中（$p$ 沿 $x$ 轴）：
$$
V(x,y) = \frac{px}{4\pi\varepsilon_0 (x^2+y^2)^{3/2}}
$$
求偏导得场强分量：
$$
E_x = -\frac{\partial V}{\partial x} = \frac{p(2x^2-y^2)}{4\pi\varepsilon_0 (x^2+y^2)^{5/2}}, \quad E_y = -\frac{\partial V}{\partial y} = \frac{3pxy}{4\pi\varepsilon_0 (x^2+y^2)^{5/2}}
$$
合场强大小：
$$
E = \sqrt{E_x^2+E_y^2} = \frac{p}{4\pi\varepsilon_0 r^3} \sqrt{1+3\cos^2\theta}
$$

:::derivation
由电偶极子电势 $V = \dfrac{p\cos\theta}{4\pi\varepsilon_0 r^2}$，利用 $\vec{E} = -\nabla V$ 在球坐标系中求梯度：

$$
E_r = -\frac{\partial V}{\partial r} = -\frac{p\cos\theta}{4\pi\varepsilon_0}\left(-\frac{2}{r^3}\right) = \frac{2p\cos\theta}{4\pi\varepsilon_0 r^3}
$$

$$
E_\theta = -\frac{1}{r}\frac{\partial V}{\partial \theta} = -\frac{1}{r}\cdot\frac{p(-\sin\theta)}{4\pi\varepsilon_0 r^2} = \frac{p\sin\theta}{4\pi\varepsilon_0 r^3}
$$

合场强大小：

$$
E = \sqrt{E_r^2 + E_\theta^2} = \frac{p}{4\pi\varepsilon_0 r^3}\sqrt{4\cos^2\theta + \sin^2\theta} = \frac{p}{4\pi\varepsilon_0 r^3}\sqrt{1+3\cos^2\theta}
$$

- 轴线上（$\theta = 0$）：$E = \dfrac{2p}{4\pi\varepsilon_0 r^3}$（最大）
- 中垂面（$\theta = \pi/2$）：$E = \dfrac{p}{4\pi\varepsilon_0 r^3}$

电偶极子场强以 $\dfrac{1}{r^3}$ 衰减，比点电荷 $\dfrac{1}{r^2}$ 更快。
:::

---

## 📝 总结与复习建议
1. **做功与路径**：静电场保守性 $\rightarrow$ 环路定理 $\rightarrow$ 引入电势能与电势。
2. **计算电势的两条路径**：
   - 已知 $\vec{E}$：$V_A = \int_A^\infty \vec{E} \cdot d\vec{l}$（适合对称分布）
   - 已知电荷分布：$V = \int \frac{dq}{4\pi\varepsilon_0 r}$（叠加原理，标量积分更简单）
3. **$\vec{E}$ 与 $V$ 的关系**：$\vec{E} = -\nabla V$。已知 $V$ 求 $\vec{E}$ 通常比直接积分求 $\vec{E}$ 更简便（避免矢量分解）。
4. **零势点陷阱**：无限长带电直线/无限大带电平面必须选有限远处为零势点，否则积分发散。

> 📎 *本文公式均通过标准 LaTeX 编写，GitHub/Gitee 博客已原生支持 KaTeX 渲染。如需适配特定静态博客框架（Hexo/Hugo），请确保开启 MathJax 插件。*
