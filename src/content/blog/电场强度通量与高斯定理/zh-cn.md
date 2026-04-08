---
title: 电场强度通量与高斯定理
pubDate: 2026-04-08T11:17:00.000Z
updatedDate: 2026-04-08T11:18:46.963Z
draft: false
description: 
slugId: 电场强度通量与高斯定理
---

# 📐 5-4 电场强度通量 与 高斯定理

> 本文档基于大学物理《静电场》章节整理，涵盖电场线、电通量定义、高斯定理的完整推导过程及其在典型对称电场中的应用。

## 📖 一、 核心概念

### 1. 电场线 (Electric Field Lines)
- **方向规定**：曲线上任一点的切线方向即为该点电场强度 $\vec{E}$ 的方向。
- **疏密规定**：电场线的疏密程度表示电场强度的大小。
- **基本性质**：
  1. 始于正电荷，止于负电荷（非闭合曲线）。
  2. 任意两条电场线在无电荷处**不相交**。

### 2. 电场强度通量 $\Phi_e$ (Electric Flux)
物理意义：通过电场中某一给定曲面的电场线总数。

| 场景 | 数学表述 |
|:---|:---|
| **匀强电场，垂直平面** | $\Phi_e = E S$ |
| **匀强电场，法向夹角 $\theta$** | $\Phi_e = \vec{E} \cdot \vec{S} = E S \cos\theta$ |
| **非匀强电场，任意曲面 $S$** | $\Phi_e = \int_S \vec{E} \cdot d\vec{S} = \int_S E \cos\theta \, dS$ |
| **非匀强电场，闭合曲面** | $\Phi_e = \oint_S \vec{E} \cdot d\vec{S}$ |

> 📌 **符号规定**：对闭合曲面，规定法向 $\vec{e}_n$ **向外为正**。电场线“穿出”时 $\theta < 90^\circ$，通量为正；“穿进”时 $\theta > 90^\circ$，通量为负。

---

## 🧮 二、 高斯定理推导过程

高斯定理揭示了静电场的基本性质：**穿过任意闭合曲面的电通量，仅由该曲面所包围的电荷决定。**

### 1. 点电荷位于球面中心
以点电荷 $q$ 为球心作半径为 $R$ 的球面：
$$
E = \frac{q}{4\pi\varepsilon_0 R^2} \quad (\text{方向沿径向向外})
$$
球面上各点 $\vec{E}$ 与 $d\vec{S}$ 平行，$\theta = 0$：
$$
\Phi_e = \oint_S \vec{E} \cdot d\vec{S} = \oint_S E \, dS = \frac{q}{4\pi\varepsilon_0 R^2} \oint_S dS = \frac{q}{4\pi\varepsilon_0 R^2} \cdot 4\pi R^2 = \frac{q}{\varepsilon_0}
$$

### 2. 点电荷位于任意闭合曲面内
利用立体角 $d\Omega$ 的概念。在曲面上取面元 $dS$，其投影到以 $q$ 为球心的单位球面上的面积为 $dS' = dS \cos\theta$。
$$
d\Phi_e = \vec{E} \cdot d\vec{S} = E \cos\theta \, dS = \frac{q}{4\pi\varepsilon_0 r^2} dS' = \frac{q}{4\pi\varepsilon_0} d\Omega
$$
对全空间积分，闭合曲面对内部点所张的立体角为 $4\pi$：
$$
\Phi_e = \oint_S d\Phi_e = \frac{q}{4\pi\varepsilon_0} \oint d\Omega = \frac{q}{4\pi\varepsilon_0} \cdot 4\pi = \frac{q}{\varepsilon_0}
$$

### 3. 点电荷位于闭合曲面外
电场线从曲面一侧穿入，必从另一侧穿出。穿入通量与穿出通量大小相等、符号相反：
$$
d\Phi_{e1} + d\Phi_{e2} = 0 \quad \Rightarrow \quad \oint_S \vec{E} \cdot d\vec{S} = 0
$$

### 4. 任意电荷系（叠加原理）
空间中有多个点电荷 $q_1, q_2, \dots, q_n$。根据电场叠加原理 $\vec{E} = \sum \vec{E}_i$：
$$
\Phi_e = \oint_S \vec{E} \cdot d\vec{S} = \oint_S \left( \sum_{i=1}^n \vec{E}_i \right) \cdot d\vec{S} = \sum_{i=1}^n \oint_S \vec{E}_i \cdot d\vec{S}
$$
曲面外电荷贡献为 $0$，仅曲面内电荷 $q_{\text{in}}$ 有贡献：
$$
\boxed{\oint_S \vec{E} \cdot d\vec{S} = \frac{1}{\varepsilon_0} \sum_{\text{in}} q_i}
$$
此即**高斯定理**的积分形式。

---

## 🔍 三、 高斯定理的典型应用

**解题通用步骤**：
1. **对称性分析**（球对称、轴对称、面对称）
2. **选取高斯面**（使 $\vec{E}$ 与 $d\vec{S}$ 平行或垂直，且面上 $E$ 大小恒定）
3. **计算通量与包围电荷**，代入定理求解。

### 1. 均匀带电球面（半径 $R$，总电量 $Q$）
| 区域 | 高斯面内电荷 $
