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
✅ **结论**：$W_{AB}$ 仅取决于 $r_A, r_B$，与路径无关。

#### 2. 静电场的环路定理
对任意闭合回路 $L$：
$$
\oint_L \vec{E} \cdot d\vec{l} = 0
$$
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

#### 2. 点电荷的电势
$$
V = \int_{r}^{\infty} \frac{q}{4\pi\varepsilon_0 r'^2} dr' = \frac{q}{4\pi\varepsilon_0 r}
$$

#### 3. 电势叠加原理
- **离散点电荷系**：
  $$
  V_A = \sum_{i=1}^{n} \frac{q_i}{4\pi\varepsilon_0 r_i}
  $$
- **连续带电体**：
  $$
  V_A = \int \frac{dq}{4\pi\varepsilon_0 r}
  $$

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

---

## 📝 总结与复习建议
1. **做功与路径**：静电场保守性 $\rightarrow$ 环路定理 $\rightarrow$ 引入电势能与电势。
2. **计算电势的两条路径**：
   - 已知 $\vec{E}$：$V_A = \int_A^\infty \vec{E} \cdot d\vec{l}$（适合对称分布）
   - 已知电荷分布：$V = \int \frac{dq}{4\pi\varepsilon_0 r}$（叠加原理，标量积分更简单）
3. **$\vec{E}$ 与 $V$ 的关系**：$\vec{E} = -\nabla V$。已知 $V$ 求 $\vec{E}$ 通常比直接积分求 $\vec{E}$ 更简便（避免矢量分解）。
4. **零势点陷阱**：无限长带电直线/无限大带电平面必须选有限远处为零势点，否则积分发散。

> 📎 *本文公式均通过标准 LaTeX 编写，GitHub/Gitee 博客已原生支持 KaTeX 渲染。如需适配特定静态博客框架（Hexo/Hugo），请确保开启 MathJax 插件。*
