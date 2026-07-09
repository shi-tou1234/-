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

:::derivation
**推导过程：**

二重积分是定积分在二维区域的推广。设有界闭区域 $D$ 上的有界函数 $f(x,y)$。

**步骤1（分割）**：用任意曲线网将 $D$ 分割为 $n$ 个小区域 $\Delta\sigma_1, \Delta\sigma_2, \ldots, \Delta\sigma_n$，$\Delta\sigma_i$ 同时表示该小区域的面积。

**步骤2（取点）**：在每个 $\Delta\sigma_i$ 内任取一点 $(\xi_i, \eta_i)$，以 $f(\xi_i, \eta_i)$ 近似代替该小区域上的函数值。

**步骤3（求和）**：构造黎曼和 $S_n = \sum_{i=1}^{n} f(\xi_i, \eta_i)\Delta\sigma_i$，它对应于以 $\Delta\sigma_i$ 为底、$f(\xi_i,\eta_i)$ 为高的小平顶柱体体积之和。

**步骤4（取极限）**：记 $\lambda = \max_{1\le i\le n}\{\text{diam}(\Delta\sigma_i)\}$ 为所有小区域直径的最大值。当 $\lambda \to 0$ 时（意味着分割无限细化，而不仅仅是 $n\to\infty$），若极限 $\lim_{\lambda\to 0}\sum_{i=1}^n f(\xi_i,\eta_i)\Delta\sigma_i$ 存在且与分割方式及取点方式无关，则称 $f$ 在 $D$ 上可积，该极限值即为二重积分。

**可积充分条件**：若 $f(x,y)$ 在有界闭区域 $D$ 上连续，则 $f$ 必可积。
:::

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

:::derivation
**推导过程：**

设 $f(x,y) \ge 0$ 在 X 型区域 $D = \{(x,y)\mid a\le x\le b,\ \phi_1(x)\le y\le \phi_2(x)\}$ 上连续，则以 $D$ 为底、$z=f(x,y)$ 为顶的曲顶柱体体积 $V = \iint_D f(x,y)\,dxdy$。

**关键思路（切片法）**：用平行于 $yOz$ 平面的平面 $x = x_0$（$x_0\in[a,b]$）截曲顶柱体，所得截面是 $yOz$ 平面上的一个曲边梯形。

对该固定的 $x = x_0$，$y$ 的范围是 $[\phi_1(x_0), \phi_2(x_0)]$，截面曲边为 $z = f(x_0, y)$。故截面面积为：

$$
A(x_0) = \int_{\phi_1(x_0)}^{\phi_2(x_0)} f(x_0, y)\,dy
$$

将 $x_0$ 重新记作 $x$，则 $A(x) = \int_{\phi_1(x)}^{\phi_2(x)} f(x,y)\,dy$。由已知结论「已知平行截面面积的立体体积公式」$V = \int_a^b A(x)\,dx$，代入得：

$$
V = \int_a^b \left[\int_{\phi_1(x)}^{\phi_2(x)} f(x,y)\,dy\right] dx
$$

去掉 $f\ge 0$ 的限制，由代数和性质即得 X 型区域上的累次积分公式。习惯上写作 $\int_a^b dx\int_{\phi_1(x)}^{\phi_2(x)} f(x,y)\,dy$，内层对 $y$ 积分时 $x$ 视作常数。
:::

**推导思路**：
- 用平面 x = x₀ 截曲顶柱体，得截面面积 A(x) = ∫_{φ₁(x)}^{φ₂(x)} f(x,y) dy
- 体积 V = ∫_a^b A(x) dx，即得累次积分

**Y 型区域**：D = {(x,y) | c≤y≤d, ψ₁(y)≤x≤ψ₂(y)}

$$
\iint_D f(x,y) \, dxdy = \int_c^d dy \int_{\psi_1(y)}^{\psi_2(y)} f(x,y) \, dx
$$

:::derivation
**推导过程：**

Y 型区域 $D = \{(x,y)\mid c\le y\le d,\ \psi_1(y)\le x\le \psi_2(y)\}$，其中边界曲线 $x = \psi_1(y)$ 与 $x = \psi_2(y)$ 在 $[c,d]$ 上连续。

与 X 型区域对称地，改用平行于 $xOz$ 平面的平面 $y = y_0$（$y_0\in[c,d]$）截曲顶柱体，所得截面为 $xOz$ 平面上的曲边梯形。

对固定的 $y = y_0$，$x$ 的范围是 $[\psi_1(y_0), \psi_2(y_0)]$，截面曲边为 $z = f(x, y_0)$，截面面积：

$$
A(y_0) = \int_{\psi_1(y_0)}^{\psi_2(y_0)} f(x, y_0)\,dx
$$

由 $V = \int_c^d A(y)\,dy$ 得：

$$
\iint_D f(x,y)\,dxdy = \int_c^d \left[\int_{\psi_1(y)}^{\psi_2(y)} f(x,y)\,dx\right] dy
$$

此时内层对 $x$ 积分时将 $y$ 视作常数。X 型与 Y 型可互换：选择的原则是看哪种次序下的积分限更简单、被积函数更易积分，避免出现分段函数或不收敛的内层积分。
:::

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

:::derivation
**推导过程：**

由极坐标变换 $x = r\cos\theta$，$y = r\sin\theta$，雅可比行列式定义为：

$$
J = \frac{\partial(x,y)}{\partial(r,\theta)} = \begin{vmatrix} \dfrac{\partial x}{\partial r} & \dfrac{\partial x}{\partial \theta} \\[6pt] \dfrac{\partial y}{\partial r} & \dfrac{\partial y}{\partial \theta} \end{vmatrix}
$$

分别计算四个偏导数：

$$
\frac{\partial x}{\partial r} = \cos\theta,\quad \frac{\partial x}{\partial \theta} = -r\sin\theta
$$

$$
\frac{\partial y}{\partial r} = \sin\theta,\quad \frac{\partial y}{\partial \theta} = r\cos\theta
$$

代入行列式：

$$
J = \begin{vmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{vmatrix} = \cos\theta\cdot r\cos\theta - (-r\sin\theta)\cdot\sin\theta
$$

$$
= r\cos^2\theta + r\sin^2\theta = r(\cos^2\theta + \sin^2\theta) = r\cdot 1 = r
$$

由于 $r \ge 0$，故 $|J| = r$，从而面积微元 $dxdy = |J|\,drd\theta = r\,drd\theta$。这与几何法得到的结果一致：环形扇面面积 $\Delta A \approx r\,dr\,d\theta$，二者相互印证。
:::

故 dxdy = |J|·drdθ = r·drdθ

**极坐标积分公式**：

$$
\iint_D f(x,y) \, dxdy = \iint_{D'} f(r\cos\theta, r\sin\theta) \cdot r \, drd\theta
$$

:::derivation
**推导过程：**

由二重积分定义 $\iint_D f(x,y)\,d\sigma = \lim_{\lambda\to 0}\sum f(\xi_i,\eta_i)\Delta\sigma_i$。在极坐标变换 $x = r\cos\theta$，$y = r\sin\theta$ 下，$D$ 上的分割对应到 $rO\theta$ 平面区域 $D'$ 上的分割。

**面积微元替换**：由雅可比行列式 $|J| = r$，面积微元变换关系为 $d\sigma = dxdy = |J|\,drd\theta = r\,drd\theta$。

**被积函数替换**：将 $x, y$ 用 $r, \theta$ 表示，得 $f(x,y) = f(r\cos\theta, r\sin\theta)$。

**积分区域替换**：原区域 $D$（在 $xOy$ 平面）对应到 $D'$（在 $rO\theta$ 平面），边界方程需化为 $r = r(\theta)$ 形式。

将三处替换合写即得极坐标下的积分公式：

$$
\iint_D f(x,y)\,dxdy = \iint_{D'} f(r\cos\theta, r\sin\theta)\cdot r\,drd\theta
$$

**为何必须乘 $r$**：从微元角度看，极坐标下小面积不是 $dr\,d\theta$ 而是环形扇面面积 $r\,dr\,d\theta$；从变换角度看，坐标变换引起面积伸缩，伸缩系数恰为雅可比行列式的绝对值 $|J| = r$。漏乘 $r$ 是极坐标计算的最高频错误。
:::

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

:::derivation
**推导过程：**

三重积分是二重积分在三维区域的自然推广，用于描述分布在空间体积上的量的累加。

设 $\Omega$ 为 $\mathbb{R}^3$ 中有界闭区域，$f(x,y,z)$ 在 $\Omega$ 上有界。

**步骤1（分割）**：用任意曲面网将 $\Omega$ 分割为 $n$ 个小闭区域 $\Delta V_1, \Delta V_2, \ldots, \Delta V_n$，$\Delta V_i$ 同时表示该小区域的体积。

**步骤2（取点）**：在每个 $\Delta V_i$ 内任取一点 $(\xi_i, \eta_i, \zeta_i)$。

**步骤3（求和）**：作黎曼和 $S_n = \sum_{i=1}^n f(\xi_i, \eta_i, \zeta_i)\Delta V_i$。物理上，若 $f$ 表示密度，则每项 $f(\xi_i, \eta_i, \zeta_i)\Delta V_i$ 近似为小块质量，黎曼和近似总质量。

**步骤4（取极限）**：记 $\lambda = \max_i\{\text{diam}(\Delta V_i)\}$，若 $\lambda\to 0$ 时极限存在且与分割及取点无关，则称 $f$ 在 $\Omega$ 上可积，该极限即为三重积分。

**与二重积分的关系**：当被积函数 $f(x,y,z)$ 仅依赖于 $x,y$、与 $z$ 无关，且 $\Omega$ 为柱体 $D\times[0,1]$ 时，三重积分退化为二重积分。因此三重积分是更一般的 $n$ 重黎曼积分在 $n=3$ 时的特例。
:::

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

:::derivation
**推导过程：**

设空间区域 $\Omega$ 可表示为 $\Omega = \{(x,y,z)\mid (x,y)\in D_{xy},\ z_1(x,y)\le z\le z_2(x,y)\}$，其中 $D_{xy}$ 为 $\Omega$ 在 $xOy$ 平面上的投影，$z_1, z_2$ 在 $D_{xy}$ 上连续。

**思路（先一后二）**：先把 $(x,y)$ 暂时固定，对 $z$ 进行一元积分；再对 $(x,y)$ 在投影区域上做二重积分。

对固定的 $(x_0, y_0)\in D_{xy}$，在 $\Omega$ 内 $z$ 沿直线段 $[z_1(x_0,y_0), z_2(x_0,y_0)]$ 取值。沿该直线的积分为：

$$
g(x_0, y_0) = \int_{z_1(x_0,y_0)}^{z_2(x_0,y_0)} f(x_0, y_0, z)\,dz
$$

将 $(x_0,y_0)$ 重新记作 $(x,y)$，则原三重积分等于函数 $g(x,y)$ 在投影区域 $D_{xy}$ 上的二重积分：

$$
\iiint_\Omega f\,dV = \iint_{D_{xy}} g(x,y)\,dxdy = \iint_{D_{xy}}\left[\int_{z_1(x,y)}^{z_2(x,y)} f(x,y,z)\,dz\right] dxdy
$$

**几何意义**：相当于先用竖直「针」穿过 $\Omega$ 在 $z$ 方向上积分，再把所有针的结果在投影面上累加。该法适用于上下边界 $z = z_1(x,y), z = z_2(x,y)$ 容易写出的区域。
:::

**截面法（先二后一）**：

$$
\iiint_\Omega f \, dV = \int_c^d \left[ \iint_{D_z} f(x,y,z) \, dxdy \right] dz
$$

:::derivation
**推导过程：**

设空间区域 $\Omega$ 介于平面 $z = c$ 与 $z = d$（$c < d$）之间。对任一 $z\in[c,d]$，用平面 $z = z_0$ 截 $\Omega$，所得截面记为 $D_{z_0}$。

**思路（先二后一）**：先在截面 $D_z$ 上做二重积分，再对 $z$ 在 $[c,d]$ 上做一元积分。

对固定的 $z = z_0$，截面 $D_{z_0}$ 上的积分为：

$$
h(z_0) = \iint_{D_{z_0}} f(x, y, z_0)\,dxdy
$$

将 $z_0$ 重新记作 $z$，原三重积分等于 $h(z)$ 沿 $z$ 方向的定积分：

$$
\iiint_\Omega f\,dV = \int_c^d h(z)\,dz = \int_c^d \left[\iint_{D_z} f(x,y,z)\,dxdy\right] dz
$$

**与投影法的区别**：投影法是「先 $z$ 后 $(x,y)$」，截面法是「先 $(x,y)$ 后 $z$」。当截面 $D_z$ 的形状随 $z$ 变化规律简单、被积函数对 $z$ 单独积分困难时，宜选用截面法。典型应用：求旋转体的体积、被积函数仅依赖 $z$ 的情形（此时 $\iint_{D_z} dxdy = A(D_z)$ 即截面面积）。
:::

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

:::derivation
**推导过程：**

柱面坐标变换 $x = r\cos\theta$，$y = r\sin\theta$，$z = z$ 的雅可比行列式为三阶行列式：

$$
J = \frac{\partial(x,y,z)}{\partial(r,\theta,z)} = \begin{vmatrix} \dfrac{\partial x}{\partial r} & \dfrac{\partial x}{\partial \theta} & \dfrac{\partial x}{\partial z} \\[4pt] \dfrac{\partial y}{\partial r} & \dfrac{\partial y}{\partial \theta} & \dfrac{\partial y}{\partial z} \\[4pt] \dfrac{\partial z}{\partial r} & \dfrac{\partial z}{\partial \theta} & \dfrac{\partial z}{\partial z} \end{vmatrix}
$$

计算各偏导数：$\dfrac{\partial x}{\partial r} = \cos\theta$，$\dfrac{\partial x}{\partial \theta} = -r\sin\theta$，$\dfrac{\partial x}{\partial z} = 0$；$\dfrac{\partial y}{\partial r} = \sin\theta$，$\dfrac{\partial y}{\partial \theta} = r\cos\theta$，$\dfrac{\partial y}{\partial z} = 0$；$\dfrac{\partial z}{\partial r} = 0$，$\dfrac{\partial z}{\partial \theta} = 0$，$\dfrac{\partial z}{\partial z} = 1$。

代入得：

$$
J = \begin{vmatrix} \cos\theta & -r\sin\theta & 0 \\ \sin\theta & r\cos\theta & 0 \\ 0 & 0 & 1 \end{vmatrix}
$$

按第三行展开（第三行仅有 $a_{33} = 1$ 非零）：

$$
J = 1\cdot(-1)^{3+3}\begin{vmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{vmatrix} = \cos\theta\cdot r\cos\theta - (-r\sin\theta)\cdot\sin\theta
$$

$$
= r\cos^2\theta + r\sin^2\theta = r
$$

由于 $r\ge 0$，故 $|J| = r$，体积微元 $dV = |J|\,drd\theta dz = r\,drd\theta dz$。

**几何意义**：柱面坐标下体积微元为「环形扇面面积 $\times$ 高度」$= r\,dr\,d\theta \cdot dz$，雅可比 $r$ 正好对应环形扇面的面积因子。
:::

体积微元：dV = r·dr·dθ·dz

积分公式：

$$
\iiint_\Omega f \, dV = \iiint_{\Omega'} f(r\cos\theta, r\sin\theta, z) \cdot r \, drd\theta dz
$$

:::derivation
**推导过程：**

由三重积分定义和柱面坐标变换 $x = r\cos\theta$，$y = r\sin\theta$，$z = z$，三处替换：

1. **被积函数**：$f(x,y,z) \to f(r\cos\theta, r\sin\theta, z)$
2. **体积微元**：$dV = dxdydz \to |J|\,drd\theta dz = r\,drd\theta dz$
3. **积分区域**：$\Omega$（$xyz$ 空间）对应到 $\Omega'$（$r\theta z$ 空间）

合并即得：

$$
\iiint_\Omega f\,dV = \iiint_{\Omega'} f(r\cos\theta, r\sin\theta, z)\cdot r\,drd\theta dz
$$

**适用场景**：当积分区域关于 $z$ 轴对称、投影区域为圆/圆环/扇形，或被积函数含 $x^2+y^2$ 项时，柱面坐标能将复杂的二重积分化为简单的极坐标积分。典型如圆柱体、圆锥体、旋转抛物面围成的区域。
:::

### 2.5 球面坐标变换（详细推导）

变换公式：

$$
x = r\sin\phi\cos\theta, \quad y = r\sin\phi\sin\theta, \quad z = r\cos\phi
$$

:::derivation
**推导过程：**

球面坐标用三个参数 $(r, \theta, \phi)$ 描述空间一点 $P(x,y,z)$：

- $r = |\overrightarrow{OP}|$：点 $P$ 到原点的距离（径向距离），$r\ge 0$。
- $\theta$：点 $P$ 在 $xOy$ 平面上的投影 $P'$ 与 $x$ 轴正向的夹角（方位角），$\theta\in[0,2\pi)$。
- $\phi$：$\overrightarrow{OP}$ 与 $z$ 轴正向的夹角（天顶角/极角），$\phi\in[0,\pi]$。

**分解步骤**：先将 $\overrightarrow{OP}$ 投影到 $xOy$ 平面，得投影向量 $\overrightarrow{OP'}$，其长度为 $r\sin\phi$（由直角三角形 $O P' P$，斜边 $r$，$\phi$ 为与 $z$ 轴夹角，故水平投影 $= r\sin\phi$，竖直分量 $= r\cos\phi$，即 $z = r\cos\phi$）。

再将水平投影 $\overrightarrow{OP'}$（长度 $r\sin\phi$）分解到 $x$ 轴和 $y$ 轴：

$$
x = |\overrightarrow{OP'}|\cos\theta = r\sin\phi\cos\theta,\quad y = |\overrightarrow{OP'}|\sin\theta = r\sin\phi\sin\theta
$$

**与柱面坐标的关系**：球面坐标相当于柱面坐标中把 $(r, z)$ 进一步用极坐标 $(r, \phi)$ 表示，即柱面坐标 $r_{\text{柱}} = r\sin\phi$，$z = r\cos\phi$。
:::

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

:::derivation
**推导过程：**

将 $M_{31} = -r^2\sin\phi\cos\phi$ 和 $M_{33} = r\sin^2\phi$ 代入 $|J| = |\cos\phi\cdot M_{31} + (-r\sin\phi)\cdot M_{33}|$：

$$
|J| = \left|\cos\phi\cdot(-r^2\sin\phi\cos\phi) + (-r\sin\phi)\cdot(r\sin^2\phi)\right|
$$

展开两项：

$$
= \left|-r^2\sin\phi\cos^2\phi - r^2\sin^3\phi\right|
$$

提取公因子 $-r^2\sin\phi$：

$$
= \left|-r^2\sin\phi(\cos^2\phi + \sin^2\phi)\right| = \left|-r^2\sin\phi\cdot 1\right| = r^2|\sin\phi|
$$

由于 $\phi\in[0,\pi]$，故 $\sin\phi\ge 0$，从而 $|\sin\phi| = \sin\phi$，最终：

$$
|J| = r^2\sin\phi
$$

**几何意义**：体积微元 $dV = r^2\sin\phi\,drd\theta d\phi$ 中，$r^2\sin\phi$ 体现了球面坐标下体积元的几何构成：
- $dr$：径向方向长度微元；
- $r\,d\phi$：经线方向弧长微元（圆心角 $d\phi$，半径 $r$）；
- $r\sin\phi\,d\theta$：纬线方向弧长微元（圆心角 $d\theta$，半径为投影长度 $r\sin\phi$）。

三者相乘 $dr\cdot r\,d\phi\cdot r\sin\phi\,d\theta = r^2\sin\phi\,drd\theta d\phi$，与雅可比结果一致。
:::

体积微元：dV = r²·sinφ·dr·dθ·dφ

积分公式：

$$
\iiint_\Omega f \, dV = \iiint_{\Omega'} f \cdot r^2\sin\phi \, drd\theta d\phi
$$

:::derivation
**推导过程：**

由三重积分定义和球面坐标变换 $x = r\sin\phi\cos\theta$，$y = r\sin\phi\sin\theta$，$z = r\cos\phi$，进行三处替换：

1. **被积函数**：$f(x,y,z) \to f(r\sin\phi\cos\theta, r\sin\phi\sin\theta, r\cos\phi)$，简记为 $f$。
2. **体积微元**：$dV = dxdydz \to |J|\,drd\theta d\phi = r^2\sin\phi\,drd\theta d\phi$。
3. **积分区域**：$\Omega$（$xyz$ 空间）对应到 $\Omega'$（$r\theta\phi$ 空间）。

合并即得球面坐标下的积分公式：

$$
\iiint_\Omega f\,dV = \iiint_{\Omega'} f\cdot r^2\sin\phi\,drd\theta d\phi
$$

**适用场景**：当积分区域为球体、球冠、球壳，或被积函数含 $x^2+y^2+z^2$ 项时，球面坐标能极大简化计算。

**积分限的典型形式**：
- 整个球体：$r\in[0,R]$，$\theta\in[0,2\pi)$，$\phi\in[0,\pi]$。
- 上半球：$\phi\in[0,\pi/2]$。
- 球壳：$r\in[a,b]$。

**易错提醒**：$\phi$ 是与 $z$ 轴正向的夹角（天顶角），不是地理纬度（地理纬度以赤道为 $0°$，天顶角以北极点为 $0°$，二者关系为「纬度 = $\pi/2 - \phi$」）。漏乘 $r^2\sin\phi$ 是球面坐标计算的最高频错误。
:::

### 2.6 一般换元公式

设变换 T: (u,v,w) → (x,y,z) 为 C¹ 双射，雅可比行列式 J ≠ 0，则：

$$
\iiint_\Omega f(x,y,z) \, dV = \iiint_{\Omega'} f(T(u,v,w)) \cdot |J| \, dudvdw
$$

:::derivation
**推导过程：**

设变换 $T: (u,v,w)\to(x,y,z)$，即 $x = x(u,v,w)$，$y = y(u,v,w)$，$z = z(u,v,w)$，为 $C^1$ 连续可微的双射，雅可比行列式 $J = \dfrac{\partial(x,y,z)}{\partial(u,v,w)} \neq 0$。

**核心思想**：在变换 $T$ 下，$(u,v,w)$ 空间中的小长方体 $du\,dv\,dw$ 映射到 $(x,y,z)$ 空间中的小曲边六面体。该小六面体的体积近似为原长方体体积乘以雅可比行列式的绝对值：

$$
dV = dxdydz = |J|\,dudvdw
$$

**几何解释**：雅可比行列式 $J$ 度量了变换 $T$ 在每一点处的「体积伸缩率」。$|J|$ 为伸缩比的绝对值，保证体积非负。

**推导要点**：
1. 在 $(u,v,w)$ 空间中取微小长方体 $[u,u+du]\times[v,v+dv]\times[w,w+dw]$。
2. 该长方体在变换 $T$ 下的像是由三个切向量 $\vec{r}_u = (x_u, y_u, z_u)\,du$、$\vec{r}_v = (x_v, y_v, z_v)\,dv$、$\vec{r}_w = (x_w, y_w, z_w)\,dw$ 张成的平行六面体。
3. 平行六面体体积等于三向量混合积的绝对值：

$$
dV = \left| \vec{r}_u\cdot(\vec{r}_v\times\vec{r}_w) \right| = \left| \begin{vmatrix} x_u & x_v & x_w \\ y_u & y_v & y_w \\ z_u & z_v & z_w \end{vmatrix} \right| dudvdw = |J|\,dudvdw
$$

4. 被积函数 $f(x,y,z) = f(T(u,v,w))$，积分区域 $\Omega$ 对应到 $\Omega'$。

合并即得一般换元公式：

$$
\iiint_\Omega f(x,y,z)\,dV = \iiint_{\Omega'} f(T(u,v,w))\cdot |J|\,dudvdw
$$

**统一性**：该公式是所有坐标变换的统一形式。极坐标、柱面坐标、球面坐标都是其特例：
- 极坐标：$|J| = r$
- 柱面坐标：$|J| = r$
- 球面坐标：$|J| = r^2\sin\phi$

**注意事项**：必须取 $|J|$（绝对值），因为 $J$ 可能为负（取决于变量顺序）；变换必须是一一对应的（双射），否则需分割区域分别换元。
:::

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

