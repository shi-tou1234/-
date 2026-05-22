---
title: 恒定磁场
pubDate: 2026-05-22T12:45:00.000Z
updatedDate: 2026-05-22T12:49:56.617Z
draft: false
description: 
category: 大物
slugId: 恒定磁场
---


# 大学物理笔记：恒定磁场

> **导语**：本文系统整理了恒定磁场章节的核心内容，涵盖恒定电流、电动势、磁感强度、毕奥-萨伐尔定律及磁场高斯定理。所有公式均附带详细推导与经典例题讲解，适合作为期末复习或考研物理的参考指南。

---

## 一、恒定电流

### 1.1 电流与电流密度

**1. 电流的定义**
电流是单位时间内通过导体横截面的电荷量：
$$ I = \frac{dq}{dt} $$

对于金属导体，自由电子定向漂移形成电流。设电子数密度为 $n$，电子电荷量为 $e$，漂移速度为 $v_d$，横截面积为 $S$，则：
$$ I = n e v_d S $$

**2. 电流密度矢量**
为描述导体内各点电流分布的细致情况，引入电流密度 $\vec{j}$：

- **方向**：该点正电荷运动方向
- **大小**：单位时间内通过该点且垂直于正电荷运动方向的单位面积的电荷量

$$ j = \frac{dI}{dS_\perp} = \frac{dI}{dS \cos\alpha} $$

通过任意曲面 $S$ 的电流为电流密度的通量：
$$ I = \int_S \vec{j} \cdot d\vec{S} $$

#### 例题 1：铜导线中电子漂移速率计算
**题目**：家用线路电流最大值 15 A，铜导线半径 0.81 mm，每个铜原子贡献一个自由电子，求电子漂移速率。

**解**：
1. 计算铜的自由电子数密度：
   $$ n = \frac{\rho N_A}{M} = \frac{8.96 \times 10^3 \times 6.02 \times 10^{23}}{63.5 \times 10^{-3}} \approx 8.48 \times 10^{28} \, \text{m}^{-3} $$

2. 由 $I = n e v_d S$ 得：
   $$ v_d = \frac{I}{n e S} = \frac{15}{8.48 \times 10^{28} \times 1.6 \times 10^{-19} \times \pi \times (0.81 \times 10^{-3})^2} \approx 5.36 \times 10^{-4} \, \text{m/s} $$

> **结论**：电子漂移速率极小（约 0.5 mm/s），但电场传播速度接近光速，故电路响应迅速。

### 1.2 电流的连续性方程与恒定电流条件

**电流连续性方程**：
单位时间内通过闭合曲面向外流出的电荷，等于该闭合曲面内电荷的减少量：
$$ \oint_S \vec{j} \cdot d\vec{S} = -\frac{dQ_{\text{内}}}{dt} $$

**恒定电流条件**：
若闭合曲面内电荷分布不随时间变化（$\frac{dQ_{\text{内}}}{dt} = 0$），则：
$$ \oint_S \vec{j} \cdot d\vec{S} = 0 $$

> **物理意义**：恒定电流场是无源场，电流线是连续闭合的。

### 1.3 欧姆定律的微分形式

**宏观欧姆定律**：$U = IR$，电阻定律 $R = \rho \frac{l}{S}$

**微分形式推导**：
取导体微元 $dl$，横截面积 $dS$，则：
$$ dR = \rho \frac{dl}{dS}, \quad dU = E \cdot dl, \quad dI = j \cdot dS $$

代入 $dU = dI \cdot dR$ 得：
$$ E \cdot dl = (j \cdot dS) \cdot \left(\rho \frac{dl}{dS}\right) \Rightarrow E = \rho j $$

即欧姆定律的微分形式：
$$ \vec{j} = \gamma \vec{E} = \frac{1}{\rho} \vec{E} $$

> **说明**：任一点的电流密度与该点电场强度方向相同，大小成正比。

#### 例题 2：金属圆筒的径向电流
**题目**：内、外半径分别为 $R_1$ 和 $R_2$ 的金属圆筒，长度 $l$，电阻率 $\rho$，筒内外电势差为 $U$（内缘电势高），求径向电流强度。

**解法一（电阻法）**：
取半径为 $r$、厚度为 $dr$ 的薄圆筒微元，其电阻：
$$ dR = \rho \frac{dr}{2\pi r l} $$

总电阻：
$$ R = \int_{R_1}^{R_2} \rho \frac{dr}{2\pi r l} = \frac{\rho}{2\pi l} \ln\frac{R_2}{R_1} $$

由欧姆定律：
$$ I = \frac{U}{R} = \frac{2\pi l U}{\rho \ln(R_2/R_1)} $$

**解法二（场强积分法）**：
由对称性，电流密度 $\vec{j}$ 沿径向，大小为 $j = \frac{I}{2\pi r l}$

由欧姆定律微分形式 $E = \rho j$：
$$ E = \frac{\rho I}{2\pi r l} $$

电势差：
$$ U = \int_{R_1}^{R_2} \vec{E} \cdot d\vec{l} = \int_{R_1}^{R_2} \frac{\rho I}{2\pi r l} dr = \frac{\rho I}{2\pi l} \ln\frac{R_2}{R_1} $$

解得：
$$ I = \frac{2\pi l U}{\rho \ln(R_2/R_1)} $$

---

## 二、电源与电动势

### 2.1 非静电力与电源

**非静电力**：能将正电荷从低电势处移到高电势处的力（如化学力、洛伦兹力等），其场强定义为：
$$ \vec{E}_k = \frac{\vec{F}_k}{q} $$

**电源**：提供非静电力的装置，在电源内部非静电力克服静电力做功，将其他形式能量转化为电能。

### 2.2 电动势的定义

**电动势**：单位正电荷绕闭合回路运动一周，非静电力所做的功：
$$ \mathcal{E} = \frac{W_k}{q} = \oint_L \vec{E}_k \cdot d\vec{l} $$

**重要结论**：
电源外部 $\vec{E}_k = 0$，故：

$$ \mathcal{E} = \int_{-}^{+} \vec{E}_k \cdot d\vec{l} $$
- 电动势大小等于将单位正电荷从负极经电源内部移至正极时非静电力所做的功。

#### 例题 3：两导体间电流与几何参数无关的证明
**题目**：两个导体 A、B 带电 $-Q$、$+Q$，被相对电容率 $\varepsilon_r$、电阻率 $\rho$ 的物质包围，证明两导体之间电流与导体尺寸及距离无关。

**证明**：
1. 由高斯定理，电位移通量：
   $$ \oint_S \vec{D} \cdot d\vec{S} = Q \Rightarrow \oint_S \varepsilon_0 \varepsilon_r \vec{E} \cdot d\vec{S} = Q $$

2. 由欧姆定律微分形式 $\vec{j} = \frac{1}{\rho} \vec{E}$，得 $\vec{E} = \rho \vec{j}$

3. 通过任意包围导体 A 的闭合曲面 $S$ 的电流：
   $$ I = \oint_S \vec{j} \cdot d\vec{S} = \oint_S \frac{1}{\rho} \vec{E} \cdot d\vec{S} = \frac{1}{\rho \varepsilon_0 \varepsilon_r} \oint_S \varepsilon_0 \varepsilon_r \vec{E} \cdot d\vec{S} = \frac{Q}{\rho \varepsilon_0 \varepsilon_r} $$

> **结论**：电流 $I$ 仅与 $Q$、$\rho$、$\varepsilon_r$ 有关，与导体几何形状及相对位置无关。

---

## 三、磁场与磁感强度

### 3.1 磁场的起源

- **磁铁的磁场**：磁极成对出现，同名相斥、异名相吸
- **电流的磁场**：奥斯特实验表明电流周围存在磁场
- **本质**：运动电荷产生磁场，磁现象的电本质

### 3.2 磁感强度 $\vec{B}$ 的定义

**实验规律**：
1. 带电粒子在磁场中沿某一特定方向运动时不受力，该方向定义为 $\vec{B}$ 的方向
2. 当粒子速度 $\vec{v}$ 垂直于 $\vec{B}$ 时，受力最大：$F_{\text{max}} \propto qv$

**磁感强度定义**：
$$ B = \frac{F_{\text{max}}}{qv} $$

**方向**：正电荷垂直于特定直线运动时，$\vec{F}_{\text{max}}$ 与 $\vec{v}$ 的叉积方向，即：
$$ \vec{F} = q \vec{v} \times \vec{B} $$

**单位**：特斯拉（T），$1 \, \text{T} = 1 \, \text{N} \cdot \text{A}^{-1} \cdot \text{m}^{-1}$

---

## 四、毕奥-萨伐尔定律

### 4.1 定律内容

**电流元的磁场**：
$$ d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \vec{r}}{r^3} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \hat{r}}{r^2} $$

- $\mu_0 = 4\pi \times 10^{-7} \, \text{T} \cdot \text{m} \cdot \text{A}^{-1}$：真空磁导率
- $d\vec{l}$：电流元矢量，方向沿电流方向
- $\vec{r}$：从电流元指向场点的位矢

**大小形式**：
$$ dB = \frac{\mu_0}{4\pi} \frac{I dl \sin\theta}{r^2} $$

**任意载流导线的磁场**（叠加原理）：
$$ \vec{B} = \int d\vec{B} = \frac{\mu_0}{4\pi} \int \frac{I d\vec{l} \times \vec{r}}{r^3} $$

### 4.2 典型应用

#### 例题 4：无限长载流直导线的磁场
**题目**：求无限长直导线（电流 $I$）在距离 $r_0$ 处产生的磁感强度。

**解**：
1. 建立坐标系：导线沿 $z$ 轴，场点 $P$ 在 $x$ 轴上，坐标 $(r_0, 0, 0)$

2. 取电流元 $I dz$ 在 $(0,0,z)$ 处，到场点的位矢 $\vec{r}$ 与 $z$ 轴夹角为 $\theta$，则：
   $$ r = \frac{r_0}{\sin\theta}, \quad z = -r_0 \cot\theta, \quad dz = \frac{r_0}{\sin^2\theta} d\theta $$

3. 电流元在 $P$ 点产生的 $dB$ 方向垂直纸面向里，大小：
   $$ dB = \frac{\mu_0}{4\pi} \frac{I dz \sin\theta}{r^2} = \frac{\mu_0 I}{4\pi r_0} \sin\theta \, d\theta $$

4. 积分（$\theta$ 从 $0$ 到 $\pi$）：
   $$ B = \int_0^\pi \frac{\mu_0 I}{4\pi r_0} \sin\theta \, d\theta = \frac{\mu_0 I}{4\pi r_0} [-\cos\theta]_0^\pi = \frac{\mu_0 I}{2\pi r_0} $$

> **结论**：无限长直导线的磁场 $B = \frac{\mu_0 I}{2\pi r}$，方向由右手螺旋定则确定。

#### 例题 5：圆形载流线圈轴线上的磁场
**题目**：半径为 $R$、电流为 $I$ 的圆线圈，求轴线上距离圆心 $x$ 处的磁感强度。

**解**：
1. 由对称性，垂直于轴线的磁场分量相互抵消，只需计算轴向分量 $B_x$

2. 取电流元 $I dl$，到场点距离 $r = \sqrt{R^2 + x^2}$，$d\vec{l} \perp \vec{r}$，故：
   $$ dB = \frac{\mu_0}{4\pi} \frac{I dl}{r^2} $$

3. 轴向分量：
   $$ dB_x = dB \cdot \cos\alpha = dB \cdot \frac{R}{r} = \frac{\mu_0 I R}{4\pi r^3} dl $$

4. 积分（$\oint dl = 2\pi R$）：
   $$ B = \int dB_x = \frac{\mu_0 I R}{4\pi r^3} \cdot 2\pi R = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}} $$

**讨论**：
- 圆心处（$x=0$）：$B = \frac{\mu_0 I}{2R}$
- 远场（$x \gg R$）：$B \approx \frac{\mu_0 I R^2}{2x^3} = \frac{\mu_0}{2\pi} \frac{IS}{x^3}$，其中 $S = \pi R^2$ 为线圈面积

#### 例题 6：载流直螺线管轴线上的磁场
**题目**：长为 $l$、半径为 $R$、总匝数 $N$、电流 $I$ 的密绕直螺线管，求轴线上一点 $P$ 的磁感强度。

**解**：
1. 将螺线管视为无数圆电流的叠加，单位长度匝数 $n = N/l$

2. 取厚度 $dx$ 的薄层，含 $n dx$ 匝，等效电流 $dI = I n dx$，由圆电流公式：
   $$ dB = \frac{\mu_0 R^2}{2(R^2 + x^2)^{3/2}} \cdot I n dx $$

3. 变量代换：令 $\cot\beta = x/R$，则 $x = R \cot\beta$，$dx = -R \csc^2\beta \, d\beta$，$R^2 + x^2 = R^2 \csc^2\beta$

4. 代入积分：
   $$ B = \int_{\beta_1}^{\beta_2} \frac{\mu_0 n I R^2}{2(R^2 \csc^2\beta)^{3/2}} \cdot (-R \csc^2\beta) d\beta = \frac{\mu_0 n I}{2} \int_{\beta_1}^{\beta_2} \sin\beta \, d\beta $$
   $$ B = \frac{\mu_0 n I}{2} (\cos\beta_1 - \cos\beta_2) $$

**讨论**：
- 无限长螺线管（$\beta_1 = 0, \beta_2 = \pi$）：$B = \mu_0 n I$（内部均匀磁场）
- 半无限长螺线管端点（$\beta_1 = 0, \beta_2 = \pi/2$）：$B = \frac{1}{2} \mu_0 n I$

### 4.3 磁偶极矩

**定义**：平面载流线圈的磁偶极矩
$$ \vec{m} = I S \hat{e}_n $$
- $S$：线圈面积
- $\hat{e}_n$：法向单位矢量，由右手螺旋定则确定

**远场磁场**（$x \gg R$）：
$$ \vec{B} = \frac{\mu_0}{2\pi} \frac{\vec{m}}{x^3} $$

> **意义**：磁偶极子是描述小电流环磁场的基本模型，与电偶极子具有数学形式的相似性。

### 4.4 运动电荷的磁场

由毕奥-萨伐尔定律 $d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \vec{r}}{r^3}$，结合 $I = n q v S$，$dN = n S dl$，得单个运动电荷的磁场：

$$ \vec{B} = \frac{\mu_0}{4\pi} \frac{q \vec{v} \times \vec{r}}{r^3} $$

**适用条件**：$v \ll c$（非相对论情形）

#### 例题 7：旋转带电圆盘中心的磁场
**题目**：半径为 $R$、电荷面密度 $\sigma$ 的均匀带电薄圆盘，以角速度 $\omega$ 绕中心轴旋转，求盘心处的磁感强度。

**解法一（圆电流叠加）**：
1. 取半径 $r$、宽度 $dr$ 的细圆环，电荷量 $dq = \sigma \cdot 2\pi r dr$

2. 旋转形成等效电流：
   $$ dI = \frac{dq}{T} = \frac{\sigma \cdot 2\pi r dr}{2\pi/\omega} = \sigma \omega r dr $$

3. 圆环在中心产生的磁场：
   $$ dB = \frac{\mu_0 dI}{2r} = \frac{\mu_0 \sigma \omega}{2} dr $$

4. 积分：
   $$ B = \int_0^R \frac{\mu_0 \sigma \omega}{2} dr = \frac{\mu_0 \sigma \omega R}{2} $$

**解法二（运动电荷公式）**：
1. 取面积元 $dS = 2\pi r dr$，电荷 $dq = \sigma dS$，速度 $v = \omega r$

2. 由运动电荷磁场公式（$\vec{v} \perp \vec{r}$）：
   $$ dB = \frac{\mu_0}{4\pi} \frac{dq \cdot v}{r^2} = \frac{\mu_0}{4\pi} \frac{\sigma \cdot 2\pi r dr \cdot \omega r}{r^2} = \frac{\mu_0 \sigma \omega}{2} dr $$

3. 积分结果相同：$B = \frac{\mu_0 \sigma \omega R}{2}$

> **方向**：由右手螺旋定则，$\sigma > 0$ 时 $\vec{B}$ 沿转轴向外。

---

## 五、磁通量与磁场的高斯定理

### 5.1 磁感线与磁通量

**磁感线性质**：
- 切线方向表示 $\vec{B}$ 方向
- 疏密程度表示 $B$ 大小
- 磁感线是无头无尾的闭合曲线（与电场线本质区别）

**磁通量定义**：通过曲面 $S$ 的磁感线总数
$$ \Phi_B = \int_S \vec{B} \cdot d\vec{S} = \int_S B \cos\theta \, dS $$

### 5.2 磁场的高斯定理

**定理内容**：
$$ \oint_S \vec{B} \cdot d\vec{S} = 0 $$

**物理意义**：
- 磁场是无源场，不存在磁单极子
- 穿入闭合曲面的磁通量等于穿出的磁通量
- 磁感线是连续闭合的

#### 例题 8：载流直导线旁矩形面积的磁通量
**题目**：无限长直导线电流 $I$，求通过距离导线 $d_1$ 到 $d_2$、长度 $l$ 的矩形面积的磁通量。

**解**：
1. 直导线磁场：$B = \frac{\mu_0 I}{2\pi x}$，方向垂直纸面向里

2. 取宽 $dx$、长 $l$ 的窄条，磁通量微元：
   $$ d\Phi_B = B \cdot dS = \frac{\mu_0 I}{2\pi x} \cdot l dx $$

3. 积分：
   $$ \Phi_B = \int_{d_1}^{d_2} \frac{\mu_0 I l}{2\pi x} dx = \frac{\mu_0 I l}{2\pi} \ln\frac{d_2}{d_1} $$

---

## 六、总结与学习建议

### 6.1 核心公式速查

| 物理量 | 公式 | 适用条件 |
|--------|------|----------|
| 电流密度 | $\vec{j} = n q \vec{v}_d$ | 金属导体 |
| 欧姆定律（微分） | $\vec{j} = \gamma \vec{E}$ | 线性介质 |
| 电动势 | $\mathcal{E} = \oint \vec{E}_k \cdot d\vec{l}$ | 任意电源 |
| 洛伦兹力 | $\vec{F} = q \vec{v} \times \vec{B}$ | 运动电荷 |
| 毕奥-萨伐尔定律 | $d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \vec{r}}{r^3}$ | 稳恒电流 |
| 无限长直导线 | $B = \frac{\mu_0 I}{2\pi r}$ | 轴对称 |
| 圆线圈轴线 | $B = \frac{\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$ | 轴对称 |
| 无限长螺线管 | $B = \mu_0 n I$ | 内部均匀场 |
| 磁场高斯定理 | $\oint \vec{B} \cdot d\vec{S} = 0$ | 普遍成立 |

### 6.2 解题技巧

1. **对称性分析**：优先判断磁场方向与空间对称性，简化矢量积分
2. **微元选取**：毕奥-萨伐尔定律应用中，合理选取电流元 $I d\vec{l}$ 是关键
3. **变量代换**：角度代换（如 $\theta$、$\beta$）常用于简化积分
4. **叠加原理**：复杂电流分布可分解为基本模型（直导线、圆环等）的叠加
5. **单位检查**：磁场计算中注意 $\mu_0$ 的数量级（$10^{-7}$ 量级）

### 6.3 常见误区提醒

- ❌ 混淆 $\vec{B}$ 与 $\vec{H}$：真空中 $\vec{B} = \mu_0 \vec{H}$，介质中需考虑磁化
- ❌ 忽略矢量性：$d\vec{B}$ 方向由叉积 $d\vec{l} \times \vec{r}$ 确定，不可直接标量叠加
- ❌ 误用公式：圆线圈轴线公式不适用于偏心点，需重新积分
- ❌ 高斯定理误用：$\oint \vec{B} \cdot d\vec{S} = 0$ 不能直接求 $B$，需结合安培环路定理

> **课后建议**：重点掌握毕奥-萨伐尔定律的积分技巧，熟练推导无限长直导线、圆线圈、螺线管的磁场公式，并理解磁场高斯定理的物理内涵。

```
