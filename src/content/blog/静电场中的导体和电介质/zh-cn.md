---
title: 静电场中的导体和电介质
pubDate: 2026-05-09T15:05:00.000Z
updatedDate: 2026-05-09T15:08:19.276Z
draft: false
description: 
category: 大物
slugId: 静电场中的导体和电介质
---

# 第六章 静电场中的导体和电介质

> 基于《物理学 第六版》课程笔记整理

---

## 6-1 静电场中的导体

### 一、静电平衡条件

#### 1. 静电感应
当导体置于外电场中时，导体内部自由电荷在电场力作用下重新分布，在导体表面产生感应电荷的现象。

#### 2. 静电平衡状态
导体内电荷不再作定向运动时的状态。

#### 3. 静电平衡条件
- 导体内部任何一点处的电场强度为零：$\vec{E}_{\text{内}} = 0$
- 导体表面处电场强度方向与导体表面垂直：$\vec{E}_{\text{表面}} \perp \text{表面}$

#### 4. 推论：导体为等势体
由电场强度与电势的关系 $\vec{E} = -\nabla V$，结合 $\vec{E}_{\text{内}} = 0$ 可得：

$$
V_A = V_B \quad (\forall A, B \in \text{导体})
$$

即导体内部及表面各点电势相等，导体为等势体，表面为等势面。

---

### 二、静电平衡时导体上电荷的分布

#### 1. 实心导体
在导体内部作任意高斯面 $S$，由高斯定理：

$$
\oint_S \vec{E} \cdot d\vec{S} = \frac{q_{\text{内}}}{\varepsilon_0}
$$

由于静电平衡时 $\vec{E}_{\text{内}} = 0$，故：

$$
q_{\text{内}} = 0
$$

**结论**：导体内部无净电荷，电荷只分布在导体表面。

#### 2. 空腔导体（腔内无电荷）
在导体内部作高斯面 $S$ 包围空腔：

$$
\oint_S \vec{E} \cdot d\vec{S} = \frac{\sum q_i}{\varepsilon_0} = 0
$$

若内表面带电，必为等量异号电荷，但此时沿腔内路径积分：

$$
U_{AB} = \int_A^B \vec{E} \cdot d\vec{l} \neq 0
$$

与导体为等势体矛盾。

**结论**：空腔内无电荷时，电荷只分布在外表面，内表面无电荷。

#### 3. 空腔导体（腔内有电荷 $+q$）
由高斯定理，内表面感应电荷为 $-q$；由电荷守恒，外表面感应电荷为 $+q$。

**结论**：
- 内表面感应电荷：$-q$
- 外表面感应电荷：$+q$（原电荷 $+$ 感应电荷）

#### 4. 导体表面附近场强与电荷面密度的关系
作扁圆柱形高斯面，底面 $\Delta S$ 平行于导体表面：

$$
\oint \vec{E} \cdot d\vec{S} = E \Delta S = \frac{\sigma \Delta S}{\varepsilon_0}
$$

$$
\boxed{E = \frac{\sigma}{\varepsilon_0}}
$$

#### 5. 导体表面电荷分布规律
- 曲率半径小处（尖端）：$\sigma$ 大，$E$ 大
- 曲率半径大处（平坦）：$\sigma$ 小，$E$ 小

**尖端放电**：尖端附近电场强度极大，可使空气电离产生放电现象。

---

### 三、静电屏蔽

| 类型 | 原理 | 应用 |
|------|------|------|
| 屏蔽外电场 | 空腔导体内部 $\vec{E}=0$ | 精密仪器金属外壳 |
| 屏蔽内电场 | 接地空腔导体，外表面电荷流入大地 | 高压设备防护 |

---

## 6-2 静电场中的电介质

### 一、电介质对电场的影响：相对电容率

平行板电容器中插入电介质后，电场强度减弱：

$$
E = \frac{E_0}{\varepsilon_r}
$$

其中：
- $E_0 = \dfrac{\sigma}{\varepsilon_0}$：真空中的电场强度
- $\varepsilon_r$：相对电容率（$\varepsilon_r > 1$）
- $\varepsilon = \varepsilon_0 \varepsilon_r$：电介质的电容率

---

### 二、电介质的极化

#### 1. 电介质分类
| 类型 | 分子特征 | 示例 |
|------|----------|------|
| 无极分子 | 正负电荷中心重合，无固有电偶极矩 | $\text{H}_2$、$\text{CH}_4$、石蜡 |
| 有极分子 | 正负电荷中心不重合，有固有电偶极矩 | $\text{H}_2\text{O}$、有机玻璃 |

#### 2. 极化机制
- **无极分子**：外电场作用下产生**位移极化**，形成感应电偶极矩
- **有极分子**：外电场使固有电偶极矩**转向极化**，沿电场方向有序排列

---

### 三、电极化强度

#### 1. 定义
电极化强度 $\vec{P}$ 表示单位体积内分子电偶极矩的矢量和：

$$
\vec{P} = \frac{\sum \vec{p}}{\Delta V}
$$

其中 $\vec{p}$ 为分子电偶极矩。

#### 2. 极化电荷面密度
对于均匀极化的电介质：

$$
\sigma' = P = \frac{\sum p}{\Delta S \cdot l} \cdot l = \frac{\sum p}{\Delta V} \cdot l
$$

$$
\boxed{\sigma' = P}
$$

---

### 四、极化电荷与自由电荷的关系

由电场叠加原理，电介质内总电场：

$$
E = E_0 - E'
$$

其中 $E' = \dfrac{\sigma'}{\varepsilon_0}$ 为极化电荷产生的反向电场。

结合 $E = \dfrac{E_0}{\varepsilon_r}$，推导得：

$$
E' = E_0 - E = E_0 \left(1 - \frac{1}{\varepsilon_r}\right) = \frac{\varepsilon_r - 1}{\varepsilon_r} E_0
$$

$$
\sigma' = \varepsilon_0 E' = \frac{\varepsilon_r - 1}{\varepsilon_r} \sigma_0
$$

$$
\boxed{\sigma' = \frac{\varepsilon_r - 1}{\varepsilon_r} \sigma_0}, \quad \boxed{Q' = \frac{\varepsilon_r - 1}{\varepsilon_r} Q_0}
$$

---

### 五、电极化强度与电场的关系

$$
\vec{P} = \varepsilon_0 (\varepsilon_r - 1) \vec{E} = \varepsilon_0 \chi_e \vec{E}
$$

其中 $\chi_e = \varepsilon_r - 1$ 为**电极化率**。

验证：

$$
\sigma' = P = \varepsilon_0 \chi_e E = \varepsilon_0 (\varepsilon_r - 1) \cdot \frac{\sigma_0}{\varepsilon_0 \varepsilon_r} = \frac{\varepsilon_r - 1}{\varepsilon_r} \sigma_0 \quad \checkmark
$$

---

## 6-3 电位移 有介质时的高斯定理

### 一、有介质时的高斯定理推导

自由电荷 $Q_0$ 与极化电荷 $Q'$ 共同产生电场：

$$
\oint_S \vec{E} \cdot d\vec{S} = \frac{Q_0 - Q'}{\varepsilon_0}
$$

代入 $Q' = \dfrac{\varepsilon_r - 1}{\varepsilon_r} Q_0$：

$$
\oint_S \vec{E} \cdot d\vec{S} = \frac{Q_0}{\varepsilon_0 \varepsilon_r} = \frac{Q_0}{\varepsilon}
$$

### 二、电位移矢量 $\vec{D}$

#### 1. 定义

$$
\boxed{\vec{D} = \varepsilon \vec{E} = \varepsilon_0 \varepsilon_r \vec{E}}
$$

#### 2. 有介质时的高斯定理

$$
\boxed{\oint_S \vec{D} \cdot d\vec{S} = \sum_{i=1}^n Q_{0i}}
$$

**物理意义**：电位移通量仅与自由电荷有关，与极化电荷无关。

---

### 三、典型例题

#### 例1：平行板电容器中插入电介质

已知：$\varepsilon_r = 3$，$d = 1\ \text{mm}$，$U = 1000\ \text{V}$

**求解**：$E$、$P$、$\sigma_0$、$\sigma'$、$D$

**解**：
1. 电场强度：

   $$
   E = \frac{U}{d} = \frac{1000}{1 \times 10^{-3}} = 1.0 \times 10^6\ \text{V/m}
   $$

   $$
   E_{\text{介质内}} = \frac{E}{\varepsilon_r} = \frac{1.0 \times 10^6}{3} = 3.33 \times 10^5\ \text{V/m}
   $$

2. 电极化强度：

   $$
   P = \varepsilon_0 (\varepsilon_r - 1) E = 8.85 \times 10^{-12} \times 2 \times 3.33 \times 10^5 = 5.89 \times 10^{-6}\ \text{C/m}^2
   $$

3. 自由电荷面密度：

   $$
   \sigma_0 = \varepsilon_0 E_0 = \varepsilon_0 \varepsilon_r E = 8.85 \times 10^{-12} \times 3 \times 3.33 \times 10^5 = 8.85 \times 10^{-6}\ \text{C/m}^2
   $$

4. 极化电荷面密度：

   $$
   \sigma' = P = 5.89 \times 10^{-6}\ \text{C/m}^2
   $$

5. 电位移：

   $$
   D = \varepsilon E = \varepsilon_0 \varepsilon_r E = \sigma_0 = 8.85 \times 10^{-6}\ \text{C/m}^2
   $$

---

#### 例2：圆柱形电容器中的电介质

已知：内半径 $R_1$，外半径 $R_2$，单位长度电荷 $\pm \lambda$，相对电容率 $\varepsilon_r$

**求解**：(1) 电介质中 $\vec{E}$、$\vec{D}$、$\vec{P}$；(2) 内外表面极化电荷面密度 $\sigma'$

**解**：

(1) 由有介质时的高斯定理，取半径为 $r$、长度为 $l$ 的同轴圆柱面：

$$
\oint \vec{D} \cdot d\vec{S} = D \cdot 2\pi r l = \lambda l
$$

$$
D = \frac{\lambda}{2\pi r}
$$

$$
E = \frac{D}{\varepsilon_0 \varepsilon_r} = \frac{\lambda}{2\pi \varepsilon_0 \varepsilon_r r} \quad (R_1 < r < R_2)
$$

$$
P = \varepsilon_0 (\varepsilon_r - 1) E = \frac{\lambda}{2\pi r} \left(1 - \frac{1}{\varepsilon_r}\right)
$$

(2) 极化电荷面密度 $\sigma' = \vec{P} \cdot \hat{n}$：
- 内表面 ($r = R_1$，$\hat{n}$ 指向圆心)：

  $$
  \sigma_1' = -P(R_1) = -\frac{\lambda}{2\pi R_1} \left(1 - \frac{1}{\varepsilon_r}\right)
  $$
- 外表面 ($r = R_2$，$\hat{n}$ 指向外)：

  $$
  \sigma_2' = +P(R_2) = +\frac{\lambda}{2\pi R_2} \left(1 - \frac{1}{\varepsilon_r}\right)
  $$

---

## 6-4 电容 电容器

### 一、孤立导体的电容

#### 1. 定义

$$
\boxed{C = \frac{Q}{V}}
$$

- $Q$：导体所带电荷量
- $V$：导体电势（相对于无穷远）
- 单位：法拉 $\text{F}$，$1\ \text{F} = 1\ \text{C/V}$

#### 2. 球形孤立导体的电容
由 $V = \dfrac{Q}{4\pi \varepsilon_0 R}$ 得：

$$
C = \frac{Q}{V} = 4\pi \varepsilon_0 R
$$

**例**：地球半径 $R = 6.4 \times 10^6\ \text{m}$，则：

$$
C_{\text{地球}} = 4\pi \times 8.85 \times 10^{-12} \times 6.4 \times 10^6 \approx 7 \times 10^{-4}\ \text{F} = 700\ \mu\text{F}
$$

---

### 二、电容器

#### 1. 定义
由两个彼此绝缘、相互靠近的导体组成，电容定义为：

$$
\boxed{C = \frac{Q}{U} = \frac{Q}{V_A - V_B}}
$$

**注意**：电容大小仅取决于导体形状、相对位置及介质，与 $Q$、$U$ 无关。

#### 2. 电容器分类
| 分类依据 | 类型 |
|----------|------|
| 形状 | 平行板、圆柱形、球形 |
| 型式 | 固定、可变、半可变 |
| 介质 | 空气、陶瓷、云母、电解质等 |

---

### 三、电容器电容的计算步骤

1. 设两极板带电 $\pm Q$
2. 求两极板间电场强度 $\vec{E}$
3. 求两极板间电势差 $U = \displaystyle\int_A^B \vec{E} \cdot d\vec{l}$
4. 由 $C = Q/U$ 求电容

---

### 四、典型电容器电容公式推导

#### 1. 平行板电容器

设极板面积 $S$，间距 $d$，介质相对电容率 $\varepsilon_r$

- 电场强度：$E = \dfrac{\sigma}{\varepsilon_0 \varepsilon_r} = \dfrac{Q}{\varepsilon_0 \varepsilon_r S}$
- 电势差：$U = Ed = \dfrac{Qd}{\varepsilon_0 \varepsilon_r S}$
- 电容：

  $$
  \boxed{C = \frac{Q}{U} = \frac{\varepsilon_0 \varepsilon_r S}{d}}
  $$

#### 2. 圆柱形电容器

设内半径 $R_A$，外半径 $R_B$，长度 $l \gg R_B$，介质 $\varepsilon_r$

- 电场强度（$R_A < r < R_B$）：

  $$
  E = \frac{\lambda}{2\pi \varepsilon_0 \varepsilon_r r}, \quad \lambda = \frac{Q}{l}
  $$
- 电势差：

  $$
  U = \int_{R_A}^{R_B} E\,dr = \frac{\lambda}{2\pi \varepsilon_0 \varepsilon_r} \ln\frac{R_B}{R_A}
  $$
- 电容：

  $$
  \boxed{C = \frac{Q}{U} = \frac{2\pi \varepsilon_0 \varepsilon_r l}{\ln(R_B/R_A)}}
  $$

**近似**：当 $R_B - R_A = d \ll R_A$ 时，$\ln(R_B/R_A) \approx d/R_A$，则：

$$
C \approx \frac{2\pi \varepsilon_0 \varepsilon_r l R_A}{d} = \frac{\varepsilon_0 \varepsilon_r S}{d} \quad (S = 2\pi R_A l)
$$

即退化为平行板电容器公式。

#### 3. 球形电容器

设内半径 $R_1$，外半径 $R_2$，介质 $\varepsilon_0$（真空）

- 电场强度（$R_1 < r < R_2$）：

  $$
  E = \frac{Q}{4\pi \varepsilon_0 r^2}
  $$
- 电势差：

  $$
  U = \int_{R_1}^{R_2} E\,dr = \frac{Q}{4\pi \varepsilon_0} \left(\frac{1}{R_1} - \frac{1}{R_2}\right)
  $$
- 电容：

  $$
  \boxed{C = \frac{Q}{U} = \frac{4\pi \varepsilon_0 R_1 R_2}{R_2 - R_1}}
  $$

**讨论**：当 $R_2 \to \infty$ 时，退化为孤立导体球电容：

$$
C = 4\pi \varepsilon_0 R_1
$$

#### 4. 平行长直导线电容器（单位长度电容）

设导线半径 $R$，中心间距 $d \gg R$，电荷线密度 $\pm \lambda$

- 电场强度（近似）：

  $$
  E \approx \frac{\lambda}{2\pi \varepsilon_0} \left(\frac{1}{x} + \frac{1}{d-x}\right)
  $$
- 电势差：

  $$
  U = \int_R^{d-R} E\,dx \approx \frac{\lambda}{\pi \varepsilon_0} \ln\frac{d}{R}
  $$
- 单位长度电容：

  $$
  \boxed{C_l = \frac{\lambda}{U} = \frac{\pi \varepsilon_0}{\ln(d/R)}}
  $$

---

### 五、电容器的并联与串联

| 连接方式 | 等效电容 | 特点 |
|----------|----------|------|
| 并联 | $C = C_1 + C_2 + \cdots$ | 电压相同，电荷相加 |
| 串联 | $\dfrac{1}{C} = \dfrac{1}{C_1} + \dfrac{1}{C_2} + \cdots$ | 电荷相同，电压相加 |

---

## 6-5 静电场的能量和能量密度

### 一、电容器的电能

电容器充电过程中，外力克服电场力做功转化为电场能量。

微元过程：将电荷 $dq$ 从一极板移到另一极板，做功：

$$
dW = U\,dq = \frac{q}{C}\,dq
$$

总能量：

$$
W_e = \int_0^Q \frac{q}{C}\,dq = \frac{Q^2}{2C}
$$

结合 $Q = CU$，得三种等价表达式：

$$
\boxed{W_e = \frac{1}{2}CU^2 = \frac{1}{2}QU = \frac{Q^2}{2C}}
$$

---

### 二、静电场的能量密度

#### 1. 平行板电容器推导

- 电容：$C = \dfrac{\varepsilon_0 \varepsilon_r S}{d}$
- 电场：$E = \dfrac{U}{d}$
- 能量：

  $$
  W_e = \frac{1}{2}CU^2 = \frac{1}{2} \cdot \frac{\varepsilon_0 \varepsilon_r S}{d} \cdot (Ed)^2 = \frac{1}{2} \varepsilon_0 \varepsilon_r E^2 \cdot (Sd)
  $$
- 体积 $V = Sd$，故能量密度：

  $$
  \boxed{w_e = \frac{W_e}{V} = \frac{1}{2} \varepsilon_0 \varepsilon_r E^2 = \frac{1}{2} \varepsilon E^2 = \frac{1}{2} ED}
  $$

#### 2. 一般电场中的能量
电场空间存储的总能量：

$$
\boxed{W_e = \int_V w_e\,dV = \int_V \frac{1}{2} \varepsilon E^2\,dV}
$$

**重要结论**：静电场能量定域于电场存在的空间，能量密度与 $E^2$ 成正比。

---

### 三、典型例题

#### 例1：球形电容器的电场能量

已知：内半径 $R_1$，外半径 $R_2$，电荷 $\pm Q$，介质电容率 $\varepsilon$

**求解**：电容器储存的电场能量

**解**：

1. 电场强度（$R_1 < r < R_2$）：

   $$
   E = \frac{Q}{4\pi \varepsilon r^2}
   $$

2. 能量密度：

   $$
   w_e = \frac{1}{2} \varepsilon E^2 = \frac{Q^2}{32\pi^2 \varepsilon r^4}
   $$

3. 取半径 $r$、厚度 $dr$ 的球壳体积元 $dV = 4\pi r^2 dr$，能量微元：

   $$
   dW_e = w_e\,dV = \frac{Q^2}{32\pi^2 \varepsilon r^4} \cdot 4\pi r^2 dr = \frac{Q^2}{8\pi \varepsilon} \cdot \frac{dr}{r^2}
   $$

4. 积分得总能量：

   $$
   W_e = \int_{R_1}^{R_2} \frac{Q^2}{8\pi \varepsilon} \cdot \frac{dr}{r^2} = \frac{Q^2}{8\pi \varepsilon} \left(\frac{1}{R_1} - \frac{1}{R_2}\right)
   $$

5. 验证：由 $C = \dfrac{4\pi \varepsilon R_1 R_2}{R_2 - R_1}$，得：

   $$
   \frac{Q^2}{2C} = \frac{Q^2 (R_2 - R_1)}{8\pi \varepsilon R_1 R_2} = \frac{Q^2}{8\pi \varepsilon} \left(\frac{1}{R_1} - \frac{1}{R_2}\right) \quad \checkmark
   $$

**讨论**：
- 当 $R_2 \to \infty$（孤立导体球）：

  $$
  W_e = \frac{Q^2}{8\pi \varepsilon R_1}
  $$
- 能量全部储存在 $R_1 < r < R_2$ 的电场空间中。

---

#### 例2：圆柱形电容器最大储能设计

已知：空气电容器，击穿场强 $E_b = 3 \times 10^6\ \text{V/m}$，外半径 $R_2 = 10^{-2}\ \text{m}$

**求解**：内半径 $R_1$ 取何值时，单位长度储能最大？

**解**：

1. 电场强度分布（$R_1 < r < R_2$）：

   $$
   E(r) = \frac{\lambda}{2\pi \varepsilon_0 r}
   $$

   最大值在 $r = R_1$ 处：$E_{\max} = \dfrac{\lambda}{2\pi \varepsilon_0 R_1}$

2. 不击穿条件：$E_{\max} \le E_b$，取临界：

   $$
   \lambda_{\max} = 2\pi \varepsilon_0 R_1 E_b
   $$

3. 单位长度电容：

   $$
   C_l = \frac{2\pi \varepsilon_0}{\ln(R_2/R_1)}
   $$

4. 单位长度储能：

   $$
   w_l = \frac{1}{2} C_l U^2 = \frac{1}{2} \cdot \frac{2\pi \varepsilon_0}{\ln(R_2/R_1)} \cdot \left(\frac{\lambda}{2\pi \varepsilon_0} \ln\frac{R_2}{R_1}\right)^2 = \frac{\lambda^2}{4\pi \varepsilon_0} \ln\frac{R_2}{R_1}
   $$

   代入 $\lambda_{\max}$：

   $$
   w_l = \frac{(2\pi \varepsilon_0 R_1 E_b)^2}{4\pi \varepsilon_0} \ln\frac{R_2}{R_1} = \pi \varepsilon_0 E_b^2 R_1^2 \ln\frac{R_2}{R_1}
   $$

5. 求极值：令 $\dfrac{dw_l}{dR_1} = 0$

   $$
   \frac{d}{dR_1} \left(R_1^2 \ln\frac{R_2}{R_1}\right) = 2R_1 \ln\frac{R_2}{R_1} + R_1^2 \cdot \left(-\frac{1}{R_1}\right) = R_1 \left(2\ln\frac{R_2}{R_1} - 1\right) = 0
   $$

   $$
   \Rightarrow \ln\frac{R_2}{R_1} = \frac{1}{2} \quad \Rightarrow \quad \frac{R_2}{R_1} = e^{1/2} \quad \Rightarrow \quad R_1 = \frac{R_2}{\sqrt{e}}
   $$

6. 数值计算：

   $$
   R_1 = \frac{10^{-2}}{\sqrt{2.718}} \approx 6.07 \times 10^{-3}\ \text{m}
   $$

   最大电压：

   $$
   U_{\max} = \frac{\lambda_{\max}}{2\pi \varepsilon_0} \ln\frac{R_2}{R_1} = R_1 E_b \cdot \frac{1}{2} = \frac{1}{2} R_1 E_b \approx 9.1 \times 10^3\ \text{V}
   $$

**结论**：当 $R_1 = R_2 / \sqrt{e} \approx 0.607 R_2$ 时，圆柱形电容器单位长度储能最大。

---

## 附录：常见电介质参数

| 电介质 | 相对电容率 $\varepsilon_r$ | 击穿场强 $(10^6\ \text{V/m})$ |
|--------|---------------------------|---------------------------|
| 真空 | 1.000000 | — |
| 空气 (0℃) | 1.00059 | 3 |
| 水 | 80 | — |
| 变压器油 | 2.2~2.5 | 12 |
| 瓷器 | 6 | 12 |
| 酚醛塑料 | 4.9 | 24 |
| 聚苯乙烯 | 3.56 | 24 |
| 聚四氟乙烯 | 2.1 | 60 |
| 石英 | 3.78 | 8 |
| 钛酸锶 | 223 | 8 |


