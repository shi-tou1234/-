---
title: 多元积分
pubDate: 2026-04-29T15:13:00.000Z
updatedDate: 2026-04-29T15:17:54.402Z
draft: false
description: 
category: 高数
slugId: 多元积分
---

# 高等数学核心笔记：二重积分与三重积分

> 本文档为多元微积分重积分部分的系统性学习笔记，所有公式已优化为 GitHub Markdown 兼容格式。内容涵盖定义、几何意义、性质、坐标系变换推导、积分限确定方法及计算策略。

---

## 一、二重积分 (Double Integrals)

### 1.1 严格定义

设 D 为 xOy 平面上的有界闭区域，f(x,y) 在 D 上有界。

1. 分割：用任意曲线网将 D 分为 n 个小区域 Δσ₁, Δσ₂, ..., Δσₙ
2. 取点：在每个 Δσᵢ 内任取一点 (ξᵢ, ηᵢ)
3. 作和：构造黎曼和 S = Σ f(ξᵢ, ηᵢ)·Δσᵢ
4. 取极限：记 λ = max{diam(Δσᵢ)}，若极限

$$
\lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i, \eta_i) \Delta \sigma_i
$$

存在且与分割及取点无关，则称 f 在 D 上可积，该极限称为二重积分：

$$
\iint_D f(x,y) \, d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i, \eta_i) \Delta \sigma_i
$$

### 1.2 几何意义

- 当 f(x,y) ≥ 0 时，积分值表示以 D 为底、z=f(x,y) 为顶的曲顶柱体体积
- 当 f 变号时，积分值为 xOy 平面上方体积与下方体积的代数和

### 1.3 基本性质

1. 线性性：∬[k₁f + k₂g]dσ = k₁∬fdσ + k₂∬gdσ
2. 区域可加性：D = D₁∪D₂ ⇒ ∬_D = ∬_{D₁} + ∬_{D₂}
3. 保号性：f ≤ g ⇒ ∬f ≤ ∬g
4. 估值定理：m ≤ f ≤ M ⇒ m·A(D) ≤ ∬f ≤ M·A(D)
5. 中值定理：f 连续 ⇒ 存在 (ξ,η)∈D 使 ∬f = f(ξ,η)·A(D)

### 1.4 直角坐标系计算：累次积分

**X 型区域**：D = {(x,y) | a≤x≤b, φ₁(x)≤y≤φ₂(x)}

$$
\iint_D f(x,y) \, dxdy = \int_a^b dx \int_{\phi_1(x)}^{\phi_2(x)} f(x,y) \, dy
$$

**推导思路**：
- 用平面 x = x₀ 截曲顶柱体，得截面面积 A(x) = ∫_{φ₁(x)}^{φ₂(x)} f(x,y) dy
- 体积 V = ∫_a^b A(x) dx，即得累次积分

**Y 型区域**：D = {(x,y) | c≤y≤d, ψ₁(y)≤x≤ψ₂(y)}

$$
\iint_D f(x,y) \, dxdy = \int_c^d dy \int_{\psi_1(y)}^{\psi_2(y)} f(x,y) \, dx
$$

### 1.5 极坐标变换（完整推导）

变换公式：

$$
x = r\cos\theta, \quad y = r\sin\theta
$$

**面积微元推导（几何法）**：
- 取微元 [r, r+dr]×[θ, θ+dθ]
- 该环形扇面面积 ≈ 外扇形 - 内扇形
- ΔA = ½(r+dr)²dθ - ½r²dθ = r·dr·dθ + ½(dr)²dθ
- 忽略高阶项得：dσ = r·dr·dθ

**雅可比行列式推导**：

$$
J = \frac{\partial(x,y)}{\partial(r,\theta)} = 
\begin{vmatrix}
\cos\theta & -r\sin\theta \\
\sin\theta &  r\cos\theta
\end{vmatrix}
= r(\cos^2\theta + \sin^2\theta) = r
$$

故 dxdy = |J|·drdθ = r·drdθ

**极坐标积分公式**：

$$
\iint_D f(x,y) \, dxdy = \iint_{D'} f(r\cos\theta, r\sin\theta) \cdot r \, drd\theta
$$

**积分限确定步骤**：
1. 将边界方程化为 r = r(θ)
2. 确定 θ 的扫描范围 [α, β]
3. 对固定 θ，r 从内边界积到外边界
4. 形式：∫_α^β dθ ∫_{r₁(θ)}^{r₂(θ)} f·r dr

### 1.6 对称性简化

设区域 D 关于坐标轴对称：

| 对称性 | 函数奇偶性 | 积分结果 |
|--------|-----------|---------|
| 关于 y 轴对称 | f(-x,y) = -f(x,y) | 0 |
| 关于 y 轴对称 | f(-x,y) = f(x,y) | 2∬_{x≥0} f |
| 关于 x 轴对称 | f(x,-y) = -f(x,y) | 0 |
| 关于原点对称 | f(-x,-y) = -f(x,y) | 0 |
| 关于 y=x 对称 | 任意 | ∬_D f(x,y) = ∬_D f(y,x) |

---

## 二、三重积分 (Triple Integrals)

### 2.1 定义

设 Ω 为 ℝ³ 中有界闭区域，f(x,y,z) 在 Ω 上有界。将 Ω 分割为小区域 ΔVᵢ，若极限

$$
\iiint_\Omega f(x,y,z) \, dV = \lim_{\lambda \to 0} \sum_{i=1}^n f(\xi_i,\eta_i,\zeta_i) \Delta V_i
$$

存在，则称为三重积分，dV 为体积微元。

### 2.2 几何与物理意义

- f ≡ 1 时：积分值 = 区域 Ω 的体积
- f = ρ(x,y,z)（密度）时：积分值 = 物体总质量
- 可计算质心、转动惯量等物理量

### 2.3 直角坐标系计算

**投影法（先一后二）**：

$$
\iiint_\Omega f \, dV = \iint_{D_{xy}} \left[ \int_{z_1(x,y)}^{z_2(x,y)} f(x,y,z) \, dz \right] dxdy
$$

**截面法（先二后一）**：

$$
\iiint_\Omega f \, dV = \int_c^d \left[ \iint_{D_z} f(x,y,z) \, dxdy \right] dz
$$

### 2.4 柱面坐标变换

变换公式：

$$
x = r\cos\theta, \quad y = r\sin\theta, \quad z = z
$$

雅可比行列式：

$$
J = \begin{vmatrix}
\cos\theta & -r\sin\theta & 0 \\
\sin\theta &  r\cos\theta & 0 \\
0 & 0 & 1
\end{vmatrix} = r
$$

体积微元：dV = r·dr·dθ·dz

积分公式：

$$
\iiint_\Omega f \, dV = \iiint_{\Omega'} f(r\cos\theta, r\sin\theta, z) \cdot r \, drd\theta dz
$$

### 2.5 球面坐标变换（详细推导）

变换公式：

$$
x = r\sin\phi\cos\theta, \quad y = r\sin\phi\sin\theta, \quad z = r\cos\phi
$$

其中：r ≥ 0，θ ∈ [0, 2π)，φ ∈ [0, π]

**雅可比行列式计算**：

$$
J = \begin{vmatrix}
\sin\phi\cos\theta & -r\sin\phi\sin\theta & r\cos\phi\cos\theta \\
\sin\phi\sin\theta &  r\sin\phi\cos\theta & r\cos\phi\sin\theta \\
\cos\phi & 0 & -r\sin\phi
\end{vmatrix}
$$

按第三行展开：

$$
|J| = |\cos\phi \cdot M_{31} + (-r\sin\phi) \cdot M_{33}|
$$

其中：

$$
M_{31} = \begin{vmatrix}
-r\sin\phi\sin\theta & r\cos\phi\cos\theta \\
 r\sin\phi\cos\theta & r\cos\phi\sin\theta
\end{vmatrix} = -r^2\sin\phi\cos\phi
$$

$$
M_{33} = \begin{vmatrix}
\sin\phi\cos\theta & -r\sin\phi\sin\theta \\
\sin\phi\sin\theta &  r\sin\phi\cos\theta
\end{vmatrix} = r\sin^2\phi
$$

代入得：

$$
|J| = |\cos\phi(-r^2\sin\phi\cos\phi) + (-r\sin\phi)(r\sin^2\phi)| = r^2\sin\phi
$$

体积微元：dV = r²·sinφ·dr·dθ·dφ

积分公式：

$$
\iiint_\Omega f \, dV = \iiint_{\Omega'} f \cdot r^2\sin\phi \, drd\theta d\phi
$$

### 2.6 一般换元公式

设变换 T: (u,v,w) → (x,y,z) 为 C¹ 双射，雅可比行列式 J ≠ 0，则：

$$
\iiint_\Omega f(x,y,z) \, dV = \iiint_{\Omega'} f(T(u,v,w)) \cdot |J| \, dudvdw
$$

---

## 三、积分限确定与计算策略

### 3.1 积分限确定步骤

1. 画区域草图，标出边界方程
2. 选择合适坐标系（见下表）
3. 确定投影区域，写出不等式
4. 用"穿线法"确定内层积分上下限
5. 检查：内层限可含外层变量，外层限必须为常数

### 3.2 坐标系选择指南

| 区域特征 | 推荐坐标系 | 微元 | 适用场景 |
|---------|-----------|------|---------|
| 矩形/多边形 | 直角坐标 | dxdy 或 dxdydz | 边界为直线 |
| 圆/扇形/圆环 | 极坐标 | r·drdθ | x²+y² 形式 |
| 圆柱/圆锥 | 柱面坐标 | r·drdθdz | 绕 z 轴旋转体 |
| 球体/球冠 | 球面坐标 | r²sinφ·drdθdφ | x²+y²+z² 形式 |

### 3.3 对称性判断流程
1.判断区域是否关于坐标面/轴/原点对称
2.判断被积函数对应变量的奇偶性
3.奇函数在对称区域积分 = 0
4.偶函数在对称区域积分 = 2×半区积分（或4倍、8倍）

---

## 四、高频易错点提醒

1. **雅可比行列式**：坐标变换后必须乘 |J|，极坐标漏乘 r、球坐标漏乘 r²sinφ 是最常见错误

2. **积分限顺序**：内层积分限可含外层变量，外层积分限必须为常数

3. **区域分割**：边界函数分段时，必须分割区域分别积分

4. **球坐标 φ 范围**：φ ∈ [0, π]（与 z 轴夹角），不是地理纬度

5. **微分符号**：使用 dx 而非 d x，避免渲染错误

6. **奇点处理**：被积函数无界时按广义积分处理，需验证极限存在

---

## 五、典型例题模板

**题目**：计算 ∬_D √(x²+y²) dσ，D: a² ≤ x²+y² ≤ b²

**解**：

1. 区域为圆环，选用极坐标
2. 变换：x = rcosθ, y = rsinθ, dσ = r·drdθ
3. 被积函数：√(x²+y²) = r
4. 积分限：r ∈ [a,b], θ ∈ [0, 2π)
5. 代入计算：

$$
\begin{aligned}
I &= \int_0^{2\pi} d\theta \int_a^b r \cdot r \, dr \\
  &= 2\pi \int_a^b r^2 \, dr \\
  &= 2\pi \cdot \left[ \frac{r^3}{3} \right]_a^b \\
  &= \frac{2\pi}{3}(b^3 - a^3)
\end{aligned}
$$

**答案**：$\frac{2\pi}{3}(b^3 - a^3)$

---

