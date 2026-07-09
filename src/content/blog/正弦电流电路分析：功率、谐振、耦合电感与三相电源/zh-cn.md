---
title: 正弦电流电路分析：功率、谐振、耦合电感与三相电源
pubDate: 2026-06-03T11:35:00.000Z
updatedDate: 2026-06-03T11:36:15.992Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 电路
slugId: 正弦电流电路分析：功率、谐振、耦合电感与三相电源
---

# 正弦电流电路分析：功率、谐振、耦合电感与三相电源

> **导语**：正弦电流电路是交流电路分析的核心。本文从功率分析入手，系统梳理瞬时功率、有功功率、无功功率、视在功率与复功率的概念及计算方法，进而讨论串联与并联谐振的条件和特性，再到耦合电感元件的电压电流关系与等效电感，最后介绍对称三相电源的基本概念。内容涵盖电路分析课程第八章及第九章前半部分，适合期末复习或考研参考。

* * *

## 一、 正弦电流电路中的功率

### 1.1 瞬时功率

对于任意无源一端口电路，设端口电压和电流分别为：

$$ u(t) = \sqrt{2}U\cos(\omega t + \varphi_u), \quad i(t) = \sqrt{2}I\cos(\omega t + \varphi_i) $$

其中 $\varphi = \varphi_u - \varphi_i$ 为电压超前电流的相位差，也是等效阻抗的阻抗角。瞬时功率为电压与电流的瞬时值乘积：

$$ p(t) = u(t)i(t) = UI\cos\varphi + UI\cos(2\omega t - \varphi) $$

:::derivation
**推导**：将电压 $u(t)=\sqrt{2}U\cos(\omega t+\varphi_u)$ 与电流 $i(t)=\sqrt{2}I\cos(\omega t+\varphi_i)$ 直接相乘：

$$ p(t) = 2UI\cos(\omega t+\varphi_u)\cos(\omega t+\varphi_i) $$

利用积化和差公式 $\cos\alpha\cos\beta = \tfrac{1}{2}[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$：

$$ p(t) = UI\cos(\varphi_u-\varphi_i) + UI\cos(2\omega t+\varphi_u+\varphi_i) $$

记 $\varphi=\varphi_u-\varphi_i$，则 $\varphi_u+\varphi_i = 2\omega t + 2\varphi_i + \varphi$。利用 $\cos(2\omega t+2\varphi_i+\varphi) = \cos[2(\omega t+\varphi_i)+\varphi]$，并以 $\omega t+\varphi_i$ 为参考（即令电流初相为零的旋转坐标系），可化简为：

$$ p(t) = UI\cos\varphi + UI\cos(2\omega t - \varphi) $$

其中第一项为恒定分量，第二项为二倍频正弦分量。
:::

该式表明，瞬时功率由两个分量组成：

* **恒定分量** $UI\cos\varphi$
* **二倍电源频率的正弦分量** $UI\cos(2\omega t - \varphi)$

> **注意**：瞬时功率有时正有时负。当 $p > 0$ 时电路吸收功率，当 $p < 0$ 时电路发出功率，说明无源一端口电路内部有储能元件（L、C）与电源进行能量交换。

### 1.2 平均功率（有功功率）

瞬时功率随时间变化，不便测量和比较。**平均功率**（又称**有功功率**）定义为一周期内瞬时功率的平均值：

$$ P = \frac{1}{T}\int_0^T p(t)\,dt = UI\cos\varphi $$

:::derivation
**推导**：将瞬时功率 $p(t)=UI\cos\varphi + UI\cos(2\omega t-\varphi)$ 在一个周期 $T=2\pi/\omega$ 内取平均：

$$ P = \frac{1}{T}\int_0^T \left[UI\cos\varphi + UI\cos(2\omega t-\varphi)\right] dt $$

第一项为常数，积分后仍为 $UI\cos\varphi$；第二项是周期为 $T/2$ 的余弦函数，在其周期的整数倍上积分为零：

$$ \frac{1}{T}\int_0^T UI\cos(2\omega t-\varphi)\,dt = 0 $$

故：

$$ P = UI\cos\varphi $$
:::

有功功率的单位为**瓦特（W）**。式中 $\cos\varphi$ 称为**功率因数**，常用 $\lambda$ 表示，$\varphi$ 称为**功率因数角**。

#### 二端元件的特殊情况

| 元件  | 相位差 $\varphi$ | $\cos\varphi$ | 有功功率 |
| --- | --- | --- | --- |
| 电阻 R | $\varphi = 0$ | 1   | $P = UI = I^2R = U^2/R$ |
| 电感 L | $\varphi = 90^\circ$ | 0   | $P = 0$ |
| 电容 C | $\varphi = -90^\circ$ | 0   | $P = 0$ |

对于无源一端口电路，其等效阻抗 $Z = R + jX$，阻抗模 $|Z| = U/I$，则有：

$$ P = UI\cos\varphi = I^2|Z|\cos\varphi = I^2R $$

:::derivation
**推导**：对于无源一端口，其等效阻抗 $Z = R + jX$，阻抗角 $\varphi$ 满足：

$$ \cos\varphi = \frac{R}{|Z|}, \quad |Z| = \frac{U}{I} $$

将其代入平均功率定义 $P = UI\cos\varphi$：

$$ P = U\cdot I \cdot \frac{R}{|Z|} = (|Z|I)\cdot I\cdot\frac{R}{|Z|} = I^2 R $$

也可由 $U=|Z|I$ 直接代换得 $UI\cos\varphi = I^2|Z|\cos\varphi = I^2 R$。

**物理意义**：由于 $\cos\varphi = R/|Z|$，阻抗角余弦正好是电阻与阻抗模之比，因此有功功率只与电阻有关，电抗 $X$（感抗与容抗）不消耗有功功率。
:::

> **重要结论**：电路吸收的有功功率**全部为等效电阻所消耗**，电感和电容的有功功率恒为零。

#### 例题 1：求受控源和电压源的平均功率

**题目**：电路如图，已知感抗 $X_L = 2\Omega$，容抗 $X_C = 0.5\Omega$，$g_m = 2S$，电压源 $U_s = 50\angle 0^\circ V$。求受控源和电压源的平均功率。

> 电路描述：电压源 $U_s$ 与 $X_L$ 串联，再与电容 $C$ 并联；受控电流源 $g_m U_C$ 与电容 $C$ 并联（$U_C$ 为电容两端电压），电压源串联支路与受控源并联支路构成整体电路。

**解：**

**1. 求受控电流源的平均功率**

设电容电压有效值相量为 $\dot{U}_C$，受控电流源为 $g_m\dot{U}_C$。以下方节点为参考点，列节点电压方程：

$$ \left( \frac{1}{jX_L} + \frac{1}{-jX_C} \right) \dot{U}_C = \frac{\dot{U}_s}{jX_L} - g_m\dot{U}_C $$

代入数据：$X_L = 2$，$X_C = 0.5$，得：

$$ \left( \frac{1}{j2} + \frac{1}{-j0.5} \right) \dot{U}_C = \frac{50}{j2} - 2\dot{U}_C $$

解得 $\dot{U}_C = 10\angle 0^\circ V$，因此 $U_C = 10V$，受控源电流 $I = g_mU_C = 20A$。

受控源端电压与电流为非一致参考方向，$\varphi = 0$（同相位），故：

$$ P = -U_C \cdot I \cdot \cos\varphi = -10 \times 20 \times 1 = -200W $$

即受控电流源**向外发出 200W 功率**。

**2. 求电压源的平均功率**

对左侧回路应用 KVL：

$$ \dot{U}_s = jX_L\dot{I}_L + \dot{U}_C $$

代入数据得 $\dot{I}_L = 28.3\angle{(-98.1^\circ)} A$。电压源 $\dot{U}_s = 50\angle{0^\circ} V$，$\varphi = 0 - (-98.1^\circ) = 98.1^\circ$。

电压源端电压与电流为非一致参考方向：

$$ P = -U_s I_L \cos\varphi = -50 \times 28.3 \times \cos 98.1^\circ = 200W $$

即电压源**吸收 200W 功率**，与受控源发出的功率平衡。

* * *

### 1.3 无功功率

瞬时功率还可表示为：

$$ p(t) = UI\cos\varphi(1 + \cos 2\omega t) + UI\sin\varphi \cdot \sin 2\omega t $$

:::derivation
**推导**：从瞬时功率 $p(t)=UI\cos\varphi + UI\cos(2\omega t - \varphi)$ 出发，对第二项应用余弦差公式 $\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta$：

$$ \cos(2\omega t - \varphi) = \cos 2\omega t\cos\varphi + \sin 2\omega t\sin\varphi $$

代回原式并按 $\cos\varphi$、$\sin\varphi$ 分组：

$$ p(t) = UI\cos\varphi + UI\cos\varphi\cos 2\omega t + UI\sin\varphi\sin 2\omega t $$

$$ = UI\cos\varphi(1+\cos 2\omega t) + UI\sin\varphi\cdot\sin 2\omega t $$

第一项 $UI\cos\varphi(1+\cos 2\omega t) \ge 0$ 恒成立，表示单向流入负载的功率；第二项 $UI\sin\varphi\sin 2\omega t$ 在一个周期内均值为零，表示电源与负载之间往返交换的能量，其幅值即为无功功率 $Q=UI\sin\varphi$。
:::

* 第一项为功率的脉动分量，始终从电源到负载（方向不变）
* 第二项表示在电源与负载间**往返交换**的功率分量，其幅值定义为**无功功率**：

$$ Q = UI\sin\varphi $$

无功功率的单位为**无功伏安**，简称**乏（var）**。

#### 二端元件的无功功率

| 元件  | $\varphi$ | $\sin\varphi$ | 无功功率 |
| --- | --- | --- | --- |
| 电阻 R | 0   | 0   | $Q = 0$ |
| 电感 L | $90^\circ$ | 1   | $Q = UI = X_L I^2 = \omega L I^2$ |
| 电容 C | $-90^\circ$ | -1  | $Q = -UI = -X_C I^2 = -I^2/(\omega C)$ |

对于等效阻抗 $Z = R + jX$：

$$ Q = UI\sin\varphi = I^2|Z|\sin\varphi = I^2X $$

:::derivation
**推导**：对等效阻抗 $Z=R+jX$，阻抗角 $\varphi$ 满足 $\sin\varphi = X/|Z|$，且 $|Z|=U/I$，故：

$$ Q = UI\sin\varphi = (|Z|I)\cdot I \cdot \frac{X}{|Z|} = I^2 X $$

由 $Z = R + jX$，对于纯电感 $X = X_L = \omega L > 0$，$Q = I^2\omega L > 0$；对于纯电容 $X = X_C = -1/(\omega C) < 0$，$Q = -I^2/(\omega C) < 0$；电阻 $X = 0$，$Q = 0$。因此无功功率仅由电抗产生，反映储能元件与电源之间的能量交换规模。
:::

> **重要结论**：无功功率仅为储能元件（L 和 C）所有。感性电路 $Q > 0$（吸收无功），容性电路 $Q < 0$（发出无功）。

* * *

### 1.4 视在功率与功率三角形

**视在功率**定义为端口电压与电流有效值的乘积：

$$ S = UI $$

单位为**伏安（V·A）**。电机、变压器等电气设备的额定容量就是指视在功率。

有功功率 $P$、无功功率 $Q$ 和视在功率 $S$ 之间满足：

$$ S^2 = P^2 + Q^2 $$

:::derivation
**推导**：由 $P = UI\cos\varphi$，$Q = UI\sin\varphi$，$S = UI$，则：

$$ P^2 + Q^2 = (UI)^2\cos^2\varphi + (UI)^2\sin^2\varphi = (UI)^2(\cos^2\varphi + \sin^2\varphi) = (UI)^2 = S^2 $$

故 $S = \sqrt{P^2+Q^2}$。又由于 $P = I^2R$，$Q = I^2X$，则 $S^2 = I^4(R^2+X^2) = I^4|Z|^2 = (I^2|Z|)^2 = (UI)^2$，与阻抗三角形 $|Z|^2 = R^2+X^2$ 相似（仅相差 $I^2$ 倍），故功率三角形与阻抗三角形为相似三角形。
:::

三者构成**功率三角形**，与阻抗三角形是相似三角形：

$$ P = S\cos\varphi, \quad Q = S\sin\varphi, \quad \lambda = \cos\varphi = \frac{P}{S} $$

| 电路性质 | $\varphi$ | $\cos\varphi$ | 特点  |
| --- | --- | --- | --- |
| 纯电阻/谐振 | 0   | 1   | $P = S$ |
| 纯电抗 | $\pm 90^\circ$ | 0   | $P = 0$ |
| 感性  | $0 < \varphi < 90^\circ$ | $0 < \cos\varphi < 1$ | $Q > 0$ |
| 容性  | $-90^\circ < \varphi < 0$ | $0 < \cos\varphi < 1$ | $Q < 0$ |

#### 例题 2：三表法测线圈参数

**题目**：在工频条件下（$f = 50Hz$），电压表、电流表和功率表的读数分别为 $100V$、$5A$ 和 $300W$。求此线圈的功率因数、等效电阻 $R$ 和等效电感 $L$。

> 电路描述：线圈可等效为电阻 $R$ 与电感 $L$ 的串联。电压表测端口电压，电流表测端口电流，功率表测有功功率。

**解：**

已知 $U = 100V$，$I = 5A$，$P = 300W$。

$$ \cos\varphi = \frac{P}{UI} = \frac{300}{100 \times 5} = 0.6 $$

阻抗模 $|Z| = U/I = 100/5 = 20\Omega$。等效电阻：

$$ R = \frac{P}{I^2} = \frac{300}{25} = 12\Omega $$

等效电抗（感抗）：

$$ X_L = \sqrt{|Z|^2 - R^2} = \sqrt{20^2 - 12^2} = 16\Omega $$

因此等效电感：

$$ L = \frac{X_L}{2\pi f} = \frac{16}{2\pi \times 50} \approx 50.9\text{mH} $$

* * *

### 1.5 复功率与功率守恒

为便于用相量计算各类功率，引入**复功率**的概念。设端口电压和电流相量为：

$$ \dot{U} = U\angle{\varphi_u}, \quad \dot{I} = I\angle{\varphi_i} $$

定义电流相量的共轭复数为 $\dot{I}^* = I\angle{(-\varphi_i)}$，则复功率为：

$$ \tilde{S} = \dot{U}\dot{I}^* = UI\angle{(\varphi_u - \varphi_i)} = UI\angle{\varphi} = UI\cos\varphi + jUI\sin\varphi = P + jQ $$

:::derivation
**推导**：设 $\dot{U} = U\angle\varphi_u = U(\cos\varphi_u + j\sin\varphi_u)$，$\dot{I} = I\angle\varphi_i$，则其共轭 $\dot{I}^* = I\angle(-\varphi_i) = I(\cos\varphi_i - j\sin\varphi_i)$。

复功率定义：

$$ \tilde{S} = \dot{U}\dot{I}^* = U\angle\varphi_u \cdot I\angle(-\varphi_i) = UI\angle(\varphi_u - \varphi_i) = UI\angle\varphi $$

其中 $\varphi = \varphi_u - \varphi_i$ 为阻抗角。展开为代数形式：

$$ \tilde{S} = UI(\cos\varphi + j\sin\varphi) = UI\cos\varphi + jUI\sin\varphi = P + jQ $$

实部 $P = UI\cos\varphi$ 即有功功率，虚部 $Q = UI\sin\varphi$ 即无功功率，模 $|\tilde{S}| = UI = S$ 即视在功率，辐角 $\arg\tilde{S} = \varphi$ 即功率因数角。这样用一个复数同时表示了 $P$、$Q$、$S$、$\varphi$ 四个量。
:::

复功率的特性：

* 模等于视在功率 $S$
* 实部为有功功率 $P$，虚部为无功功率 $Q$
* 辅角等于功率因数角 $\varphi$
* 单位与视在功率相同，为 **V·A**

对于等效阻抗 $Z = R + jX$，复功率的另一表达式为：

$$ \tilde{S} = I^2Z = I^2R + jI^2X $$

:::derivation
**推导**：由 $\dot{U} = Z\dot{I}$（一端口端口电压等于阻抗乘电流），代入复功率定义：

$$ \tilde{S} = \dot{U}\dot{I}^* = (Z\dot{I})\dot{I}^* = Z(\dot{I}\dot{I}^*) = Z|\dot{I}|^2 = I^2 Z $$

其中 $\dot{I}\dot{I}^* = |\dot{I}|^2 = I^2$ 为电流有效值平方（实数）。代入 $Z = R + jX$：

$$ \tilde{S} = I^2(R + jX) = I^2R + jI^2X = P + jQ $$

与之前结论一致，说明有功功率 $P = I^2R$ 来自电阻，无功功率 $Q = I^2X$ 来自电抗。
:::

> **定理（功率守恒）**在正弦电流电路中，复功率满足守恒关系：$$ \sum\tilde{S} = 0 $$
> 
> 这意味着：$$ \sum P_{\text{电源}} = \sum P_{\text{电阻}}, \quad \sum Q_{\text{电源}} = \sum Q_{\text{感抗}} + \sum Q_{\text{容抗}} $$
> 
> 但有功功率和无功功率分别守恒，**视在功率不满足守恒**。

* * *

### 1.6 功率因数的提高

电力系统和工业负载多数是**感性负载**，功率因数较低会降低发电设备容量的利用率。提高功率因数的常用方法是在感性负载两端**并联电容**。

> 电路描述：感性负载（RL 串联）与电容 C 并联后接在交流电源上。并联电容后，感性负载的端电压 $U$ 不变，有功功率 $P$ 不变（电容不耗有功），但总电流 $I$ 减小，功率因数提高。

设感性负载原功率因数为 $\cos\varphi$，欲提高到 $\cos\varphi'$，需并联的电容大小为：

$$ C = \frac{P}{\omega U^2}(\tan\varphi - \tan\varphi') $$

:::derivation
**推导**：设原感性负载的有功功率为 $P$，端口电压为 $U$，原功率因数角为 $\varphi$，目标功率因数角为 $\varphi'$。并联电容不改变有功功率 $P$，也不改变负载端电压 $U$。

并联电容前，负载的无功功率为：

$$ Q = P\tan\varphi $$

并联电容后，电容补偿的无功功率为 $Q_C = U^2/X_C = \omega C U^2$（容性无功，取负号），总无功功率变为：

$$ Q' = Q - Q_C = P\tan\varphi' $$

将 $Q = P\tan\varphi$ 代入：

$$ P\tan\varphi - \omega C U^2 = P\tan\varphi' $$

解得所需并联电容：

$$ C = \frac{P(\tan\varphi - \tan\varphi')}{\omega U^2} $$

由于 $\varphi' < \varphi$（功率因数提高），$\tan\varphi - \tan\varphi' > 0$，故 $C > 0$。
:::

> **注意**：
> 
> 1. 工程中通常将功率因数提高到 **0.9 左右**，而非 1.0，以避免出现并联谐振现象。
> 2. 虽然串联电容也可提高功率因数，但串联电容会分去一部分电压，使负载无法在额定电压下工作，因此**不采用串联电容**的方法。

#### 例题 3：并联电容提高功率因数

**题目**：已知一感性负载功率 $P = 2000W$，功率因数 $\cos\varphi = 0.6$，接在 $U = 220V$、$f = 50Hz$ 的电源上。现用并联电容将功率因数提高到 $\cos\varphi' = 0.9$，求并联电容的大小，以及并联电容前后电源提供的电流。

**解：**

并联电容前：$\cos\varphi = 0.6$，$\varphi = \arccos 0.6 \approx 53.13^\circ$并联电容后：$\cos\varphi' = 0.9$，$\varphi' = \arccos 0.9 \approx 25.84^\circ$

$$ C = \frac{P}{\omega U^2}(\tan\varphi - \tan\varphi') = \frac{2000}{2\pi \times 50 \times 220^2}(\tan 53.13^\circ - \tan 25.84^\circ) \approx 94\mu\text{F} $$

并联电容前电流：

$$ I = \frac{P}{U\cos\varphi} = \frac{2000}{220 \times 0.6} \approx 15.15A $$

并联电容后电流：

$$ I' = \frac{P}{U\cos\varphi'} = \frac{2000}{220 \times 0.9} \approx 10.10A $$

可见，并联 $94\mu\text{F}$ 电容后，电源提供的电流从 $15.15A$ 降至 $10.10A$，**降低了约 33%**。

* * *

## 二、 谐振电路

含有电感和电容的正弦电流电路中，当端口电压与电流同相位（电路呈阻性）时，称电路发生**谐振**。

### 2.1 串联谐振

#### 谐振条件

RLC 串联电路的等效阻抗为：

$$ Z = R + j\left(\omega L - \frac{1}{\omega C}\right) = R + jX $$

当电抗 $X = 0$，即 $\omega L = 1/(\omega C)$ 时，电路发生**串联谐振**。谐振角频率和谐振频率为：

$$ \omega_0 = \frac{1}{\sqrt{LC}}, \quad f_0 = \frac{1}{2\pi\sqrt{LC}} $$

:::derivation
**推导**：RLC 串联电路的阻抗为 $Z = R + j\left(\omega L - \dfrac{1}{\omega C}\right)$。谐振条件是电抗为零，即：

$$ \omega L - \frac{1}{\omega C} = 0 \;\Rightarrow\; \omega L = \frac{1}{\omega C} $$

两边乘以 $\omega C$ 得 $\omega^2 LC = 1$，故：

$$ \omega^2 = \frac{1}{LC} \;\Rightarrow\; \omega_0 = \frac{1}{\sqrt{LC}} $$

由 $\omega = 2\pi f$ 得谐振频率：

$$ f_0 = \frac{\omega_0}{2\pi} = \frac{1}{2\pi\sqrt{LC}} $$

可见 $\omega_0$ 和 $f_0$ 仅由 $L$、$C$ 决定，与 $R$ 无关；$R$ 只影响谐振时回路的品质因数和电流幅值。
:::

> **注意**：谐振频率仅由 $L$、$C$ 决定，与 $R$ 无关。

#### 串联谐振的特点

**特点 1**：$\varphi = 0$，$\cos\varphi = 1$，电压与电流同相，电路呈阻性。

**特点 2**：电抗 $X = 0$，阻抗 $Z = R$，阻抗模 $|Z| = R$ **达到最小值**。在电源电压一定时，谐振电流 $I_0 = U/R$ **达到最大值**。

**特点 3**：谐振时感抗等于容抗，定义**特性阻抗** $\rho$ 和**品质因数** $Q$：

$$ \rho = \omega_0 L = \frac{1}{\omega_0 C} = \sqrt{\frac{L}{C}}, \quad Q = \frac{\rho}{R} = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 CR} $$

:::derivation
**推导**：谐振时 $\omega_0 = 1/\sqrt{LC}$，将其代入感抗和容抗：

$$ \omega_0 L = \frac{L}{\sqrt{LC}} = \sqrt{\frac{L}{C}}, \quad \frac{1}{\omega_0 C} = \frac{\sqrt{LC}}{C} = \sqrt{\frac{L}{C}} $$

二者相等，记为特性阻抗 $\rho = \sqrt{L/C}$，仅由 $L$、$C$ 决定。

品质因数定义为特性阻抗与电阻之比：

$$ Q = \frac{\rho}{R} = \frac{\omega_0 L}{R} = \frac{1/\sqrt{LC}}{R/L} \cdot \frac{1/L}{1/L} = \frac{\omega_0 L}{R} $$

也可写作 $Q = \dfrac{1}{\omega_0 CR}$，因为 $\omega_0 L \cdot \omega_0 C = \omega_0^2 LC = 1$，故 $\omega_0 L = 1/(\omega_0 C)$。
:::

谐振时电感电压与电容电压有效值相等：

$$ U_L = U_C = \rho I_0 = QRI_0 = QU $$

:::derivation
**推导**：谐振时 $Z = R$，电流 $I_0 = U/R$。电感和电容上的电压有效值分别为：

$$ U_L = X_L I_0 = \omega_0 L \cdot \frac{U}{R} = \frac{\omega_0 L}{R} \cdot U = QU $$

$$ U_C = X_C I_0 = \frac{1}{\omega_0 C} \cdot \frac{U}{R} = \frac{1}{\omega_0 CR} \cdot U = QU $$

又因 $\rho = \omega_0 L = 1/(\omega_0 C)$，故 $U_L = U_C = \rho I_0 = \rho \cdot U/R = (\rho/R) U = QU$。

可见电感电压和电容电压的有效值相等，且为电源电压的 $Q$ 倍。当 $Q \gg 1$ 时，电感和电容上会出现远高于电源电压的过电压，这是串联谐振（电压谐振）的典型特征。
:::

**特点 4**：LC 串联部分相当于**短路**，外加电压全部加在电阻上。串联谐振也称为**电压谐振**。

**特点 5**：谐振时无功功率 $Q = 0$。电感和电容各自的无功功率均不为零，但两者一正一负互相抵消，使整个电路的无功功率为零。

> **重要结论**：品质因数 $Q$ 值越大，电容或电感上的电压相对于电源电压的倍数就越高。在电力系统中应避免 $Q$ 值过大导致过电压损坏设备；在通信系统中则利用这一特性进行选频。

#### 例题 4：串联谐振参数计算

**题目**：RLC 串联电路中，电源电压 $U = 10V$，角频率 $\omega = 5000\text{rad/s}$。调节电容 $C$ 使电路中的电流达到最大时为 $200mA$，此时电容电压为 $600V$。求 $R$、$L$、$C$ 及品质因数 $Q$。

**解：**

电流最大时发生串联谐振，$R = U/I_0 = 10/0.2 = 50\Omega$。

电容电压：$U_C = QU$，故 $Q = U_C/U = 600/10 = 60$。

由 $Q = 1/(\omega_0 CR)$：

$$ C = \frac{1}{\omega_0 Q R} = \frac{1}{5000 \times 60 \times 50} \approx 0.067\mu\text{F} $$

由 $Q = \omega_0 L/R$：

$$ L = \frac{Q R}{\omega_0} = \frac{60 \times 50}{5000} = 0.6\text{H} $$

* * *

### 2.2 并联谐振

GLC 并联电路的等效导纳为：

$$ Y = G + j\left(\omega C - \frac{1}{\omega L}\right) = G + jB $$

当虚部 $B = 0$，即 $\omega C = 1/(\omega L)$ 时，电路发生**并联谐振**。谐振角频率与串联谐振相同：

$$ \omega_0 = \frac{1}{\sqrt{LC}}, \quad f_0 = \frac{1}{2\pi\sqrt{LC}} $$

#### 并联谐振的特点

**特点 1**：$B = 0$，导纳 $Y = G$，导纳模 $|Y| = G$ **达到最小值**。在电流源电流一定时，谐振电压 $U_0 = I/G$ **达到最大值**。若用电压源激励，则谐振电流最小。

**特点 2**：并联谐振时，LC 并联部分相当于**开路**，外加电流全部流经电导 $G$。并联谐振也称为**电流谐振**。

**特点 3**：品质因数定义为 $Q = \omega_0 C/G$，且电感电流与电容电流有效值相等，均为总电流的 $Q$ 倍：

$$ I_C = I_L = QI $$

:::derivation
**推导**：并联谐振时 $Y = G$，端口电压 $U = I/G$。流过电容和电感的电流有效值为：

$$ I_C = \omega_0 C \cdot U = \omega_0 C \cdot \frac{I}{G} = \frac{\omega_0 C}{G} \cdot I = QI $$

$$ I_L = \frac{U}{\omega_0 L} = \frac{1}{\omega_0 L} \cdot \frac{I}{G} = \frac{1/(\omega_0 L)}{G} \cdot I = QI $$

其中并联谐振的品质因数 $Q = \omega_0 C/G = 1/(\omega_0 L G)$（谐振时 $\omega_0 C = 1/(\omega_0 L)$）。

物理含义：电感电流和电容电流大小相等，但相位相差 $180^\circ$（相互抵消），它们在 LC 内部循环流动而不流经电源，因此 LC 并联部分相当于开路。这就是并联谐振又称电流谐振的原因。
:::

* * *

## 三、 耦合电感元件

### 3.1 基本概念

两个或多个彼此靠近的载流线圈，每个线圈产生的磁通不仅与本线圈交链，还与其他线圈交链。这种载流线圈之间通过磁场相互联系的现象称为**磁耦合**（互感）。

对于两个耦合电感线圈，磁通链分别为：

$$ \psi_1 = L_1 i_1 + M i_2 $$

$$ \psi_2 = M i_1 + L_2 i_2 $$

* $L_1$、$L_2$：自感系数
* $M$：互感系数（$M_{12} = M_{21} = M$）
* 单位均为**亨利（H）**

#### 耦合系数

耦合系数 $k$ 衡量两个线圈耦合的紧密程度：

$$ k = \frac{M}{\sqrt{L_1 L_2}}, \quad 0 \leq k \leq 1 $$

:::derivation
**推导**：设线圈 1 的电流 $i_1$ 产生的磁通为 $\Phi_{11}$，其中与线圈 2 交链的部分为 $\Phi_{21}$（互感磁通）；线圈 2 的电流 $i_2$ 产生的磁通为 $\Phi_{22}$，其中与线圈 1 交链的部分为 $\Phi_{12}$。由定义：

$$ L_1 = \frac{N_1\Phi_{11}}{i_1}, \quad L_2 = \frac{N_2\Phi_{22}}{i_2}, \quad M_{12} = \frac{N_1\Phi_{12}}{i_2}, \quad M_{21} = \frac{N_2\Phi_{21}}{i_1} $$

由互易性 $M_{12} = M_{21} = M$。引入磁链比 $\Phi_{21} \le \Phi_{11}$、$\Phi_{12} \le \Phi_{22}$（互感磁通不超过自感磁通），有：

$$ M^2 = \left(\frac{N_1\Phi_{12}}{i_2}\right)\left(\frac{N_2\Phi_{21}}{i_1}\right) = \left(\frac{N_1\Phi_{11}}{i_1}\right)\left(\frac{N_2\Phi_{22}}{i_2}\right) \cdot \frac{\Phi_{12}\Phi_{21}}{\Phi_{11}\Phi_{22}} = L_1 L_2 \cdot \frac{\Phi_{12}\Phi_{21}}{\Phi_{11}\Phi_{22}} $$

由于 $\Phi_{12}\Phi_{21} \le \Phi_{11}\Phi_{22}$，故 $M^2 \le L_1 L_2$，即 $M \le \sqrt{L_1 L_2}$。定义耦合系数：

$$ k = \frac{M}{\sqrt{L_1 L_2}} = \sqrt{\frac{\Phi_{12}\Phi_{21}}{\Phi_{11}\Phi_{22}}} $$

显然 $0 \le k \le 1$。$k=1$ 表示无漏磁（全耦合），$k=0$ 表示无磁耦合。
:::

* $k \to 1$：**紧耦合**（电力变压器，$k$ 可达 0.98）
* $k$ 较小：**松耦合**
* $k = 0$：无磁耦合（轴线相互垂直）

* * *

### 3.2 电压电流关系与同名端

当两电感的端口电压和电流为一致参考方向时：

$$ u_1 = L_1\frac{di_1}{dt} \pm M\frac{di_2}{dt}, \quad u_2 = \pm M\frac{di_1}{dt} + L_2\frac{di_2}{dt} $$

其中自感电压的正负取决于该线圈自身的 $u$、$i$ 参考方向是否一致。互感电压的正负通过**同名端**来确定。

> **定义（同名端）**分属于两个线圈的一对端子，当电流分别从这两个端子流入各自线圈时，两线圈产生的磁场相互增强，这两个端子称为**同名端**，通常用"●"或"*"标记。

**互感电压方向的判定规则**：若电流从标记端流向非标记端，则该电流产生的互感电压方向也是从标记端指向非标记端（标记端为正），即**互感电压的方向与产生它的电流方向保持同名端一致**。

#### 例题 5：根据同名端写电压电流关系

**题目**：耦合电感线圈如图所示，已知同名端和各线圈上电压电流参考方向。写出两线圈的电压电流关系。

> 电路描述：线圈 1 的 $u_1$ 与 $i_1$ 为非一致参考方向，线圈 2 的 $u_2$ 与 $i_2$ 为一致参考方向。电流 $i_1$ 从标记端流入，$i_2$ 从非标记端流入。

**解：**

**线圈 1**：$u_1$ 与 $i_1$ 为非一致参考方向，自感电压为负：$-L_1 di_1/dt$。$i_2$ 从非标记端流向标记端 → 互感电压从非标记端指向标记端（下正上负），与 $u_1$ 方向相反 → 互感电压为负：$-M di_2/dt$。

$$ u_1 = -L_1\frac{di_1}{dt} - M\frac{di_2}{dt} $$

**线圈 2**：$u_2$ 与 $i_2$ 为一致参考方向，自感电压为负：$L_2 di_2/dt$。$i_1$ 从标记端流向非标记端 → 互感电压从标记端指向非标记端（上正下负），与 $u_2$ 方向相同 → 互感电压为正：$+M di_1/dt$。

$$ u_2 = M\frac{di_1}{dt} + L_2\frac{di_2}{dt} $$

#### 相量形式

在正弦稳态下，耦合电感的电压电流关系可用相量表示：

$$ \dot{U}_1 = j\omega L_1 \dot{I}_1 \pm j\omega M \dot{I}_2, \quad \dot{U}_2 = \pm j\omega M \dot{I}_1 + j\omega L_2 \dot{I}_2 $$

$j\omega L_1$、$j\omega L_2$ 为自阻抗，$j\omega M$ 为互阻抗。

* * *

### 3.3 有互感的两电感线圈串联

#### 顺接（正向串联）

电流从两线圈的同名端流入（或流出）。等效电感：

$$ L_{eq,s} = L_1 + L_2 + 2M $$

:::derivation
**推导**：顺接串联时，电流 $i$ 从两线圈的同名端流入，互感磁通链与自感磁通链方向一致（相互增强）。两线圈的磁通链为：

$$ \psi_1 = L_1 i + Mi, \quad \psi_2 = Mi + L_2 i $$

串联时总磁通链为两线圈磁通链之和：

$$ \psi = \psi_1 + \psi_2 = (L_1 + L_2 + 2M)i $$

由 $L_{eq} = \psi/i$ 得等效电感：

$$ L_{eq,s} = L_1 + L_2 + 2M $$

也可由电压关系验证：$u = u_1 + u_2 = (L_1\dfrac{di}{dt} + M\dfrac{di}{dt}) + (M\dfrac{di}{dt} + L_2\dfrac{di}{dt}) = (L_1+L_2+2M)\dfrac{di}{dt}$。
:::

顺接时互感磁通链与自感磁通链**相互加强**，等效电感大于两自感之和。

#### 反接（反向串联）

电流从两线圈的异名端流入（或流出）。等效电感：

$$ L_{eq,f} = L_1 + L_2 - 2M $$

:::derivation
**推导**：反接串联时，电流 $i$ 从两线圈的异名端流入，互感磁通链与自感磁通链方向相反（相互削弱）。两线圈的磁通链为：

$$ \psi_1 = L_1 i - Mi, \quad \psi_2 = -Mi + L_2 i $$

总磁通链：

$$ \psi = \psi_1 + \psi_2 = (L_1 + L_2 - 2M)i $$

故等效电感：

$$ L_{eq,f} = L_1 + L_2 - 2M $$

由 $L_{eq,s} = L_1+L_2+2M$ 与 $L_{eq,f} = L_1+L_2-2M$ 相减：

$$ L_{eq,s} - L_{eq,f} = 4M \;\Rightarrow\; M = \frac{L_{eq,s} - L_{eq,f}}{4} $$

这是工程上测量互感 $M$ 的常用方法。又因 $L_{eq,f} \ge 0$，故 $M \le (L_1+L_2)/2$。
:::

反接时互感磁通链与自感磁通链**相互削弱**，等效电感小于两自感之和。

> **注意**：反接时 $L_{eq,f} \geq 0$，故 $M \leq (L_1 + L_2)/2$。利用顺接与反接的等效电感可求互感：$$ M = \frac{L_{eq,s} - L_{eq,f}}{4} $$

* * *

### 3.4 有互感的两电感线圈并联

#### 同侧并联（同名端在同侧）

两线圈的同名端连接在一起。等效电感：

$$ L_{eq} = \frac{L_1 L_2 - M^2}{L_1 + L_2 - 2M} $$

:::derivation
**推导**：同侧并联时，两线圈同名端连接在一起，端口电压相同 $u_1 = u_2 = u$。设电流 $i_1, i_2$ 均从同名端流入，电压电流关系为：

$$ u = L_1\frac{di_1}{dt} + M\frac{di_2}{dt}, \quad u = M\frac{di_1}{dt} + L_2\frac{di_2}{dt} $$

用相量形式（$\dot{U} = j\omega L_1 \dot{I}_1 + j\omega M \dot{I}_2$ 等），从两式消去 $\dot{I}_2$：

$$ \dot{I}_2 = \frac{\dot{U} - j\omega L_1 \dot{I}_1}{j\omega M} $$

代入第二式整理得：$M\dot{I}_1 + L_2\dot{I}_2 = \dot{U}/(j\omega)$，最终可解出 $\dot{I}_1$、$\dot{I}_2$ 与 $\dot{U}$ 的关系。总电流 $\dot{I} = \dot{I}_1 + \dot{I}_2$，等效阻抗 $Z_{eq} = \dot{U}/\dot{I}$。

直接对线性方程组求解：

$$ \begin{cases} j\omega L_1 \dot{I}_1 + j\omega M \dot{I}_2 = \dot{U} \\ j\omega M \dot{I}_1 + j\omega L_2 \dot{I}_2 = \dot{U} \end{cases} $$

由克莱姆法则：

$$ \dot{I}_1 = \frac{\dot{U}(L_2 - M)}{j\omega(L_1 L_2 - M^2)}, \quad \dot{I}_2 = \frac{\dot{U}(L_1 - M)}{j\omega(L_1 L_2 - M^2)} $$

总电流：

$$ \dot{I} = \dot{I}_1 + \dot{I}_2 = \frac{\dot{U}(L_1 + L_2 - 2M)}{j\omega(L_1 L_2 - M^2)} $$

故 $Z_{eq} = \dfrac{\dot{U}}{\dot{I}} = j\omega \cdot \dfrac{L_1 L_2 - M^2}{L_1 + L_2 - 2M}$，即：

$$ L_{eq} = \frac{L_1 L_2 - M^2}{L_1 + L_2 - 2M} $$
:::

#### 异侧并联（异名端在同侧）

两线圈的异名端连接在一起。等效电感：

$$ L_{eq} = \frac{L_1 L_2 - M^2}{L_1 + L_2 + 2M} $$

* * *

## 四、 对称三相电源

### 4.1 对称三相电压

对称三相电源由三相发电机产生，输出三个**幅值相等、频率相同、初相依次滞后 $120^\circ$** 的正弦电压。

设 A 相为参考正弦量（初相为 0），则：

$$ u_A = \sqrt{2}U\cos(\omega t), \quad u_B = \sqrt{2}U\cos(\omega t - 120^\circ), \quad u_C = \sqrt{2}U\cos(\omega t - 240^\circ) $$

有效值相量形式（$\dot{U}_A$、$\dot{U}_B$、$\dot{U}_C$ 分别表示 A、B、C 三相电压相量）：

$$ \dot{U}_A = U,\qquad \dot{U}_B = U e^{-j\frac{2\pi}{3}},\qquad \dot{U}_C = U e^{-j\frac{4\pi}{3}} $$

### 4.2 对称三相电压的特点

对称三相电压的**相量之和为零**，**瞬时值之和也为零**：

$$ \dot{U}_A + \dot{U}_B + \dot{U}_C = 0 $$

:::derivation
**推导**：对称三相电压相量为 $\dot{U}_A = U\angle 0^\circ$，$\dot{U}_B = U\angle{-120^\circ}$，$\dot{U}_C = U\angle{-240^\circ} = U\angle{120^\circ}$。

设 $a = e^{j120^\circ} = -\tfrac{1}{2} + j\tfrac{\sqrt{3}}{2}$，则 $a^2 = e^{j240^\circ} = e^{-j120^\circ} = -\tfrac{1}{2} - j\tfrac{\sqrt{3}}{2}$，且 $a^3 = 1$。

按正序表示：$\dot{U}_A = U$，$\dot{U}_B = a^2 U$，$\dot{U}_C = aU$。求和：

$$ \dot{U}_A + \dot{U}_B + \dot{U}_C = U(1 + a + a^2) $$

而：

$$ 1 + a + a^2 = 1 + \left(-\tfrac{1}{2} + j\tfrac{\sqrt{3}}{2}\right) + \left(-\tfrac{1}{2} - j\tfrac{\sqrt{3}}{2}\right) = 1 - 1 + 0 = 0 $$

这是因为 $1, a, a^2$ 是单位圆上等分三点的复数，几何上构成等边三角形，矢量和为零。也可由 $a^3-1 = (a-1)(a^2+a+1) = 0$，而 $a \ne 1$，故 $1+a+a^2=0$。
:::

相量之和为零等价于瞬时值之和为零：

$$ u_A + u_B + u_C = 0 $$

:::derivation
**推导**：对称三相电压瞬时值为：

$$ u_A = \sqrt{2}U\cos\omega t, \quad u_B = \sqrt{2}U\cos(\omega t - 120^\circ), \quad u_C = \sqrt{2}U\cos(\omega t + 120^\circ) $$

利用和差化积公式，先合并 $u_B + u_C$：

$$ \cos(\omega t - 120^\circ) + \cos(\omega t + 120^\circ) = 2\cos\omega t \cos 120^\circ = 2\cos\omega t \cdot \left(-\tfrac{1}{2}\right) = -\cos\omega t $$

故：

$$ u_A + u_B + u_C = \sqrt{2}U[\cos\omega t - \cos\omega t] = 0 $$

这与相量之和为零的结论一致。物理上，对称三相电压在任意时刻瞬时值之和都为零，因此三相三线制系统中无需中性线即可传输功率。
:::

### 4.3 相序

三相电压经过同一量值（如最大值）的先后顺序称为**相序**。

| 相序  | 排列顺序 | 说明  |
| --- | --- | --- |
| **正序（顺序）** | A → B → C | A 超前 B $120^\circ$，B 超前 C $120^\circ$ |
| **负序（逆序）** | C → B → A | C 超前 B $120^\circ$，B 超前 A $120^\circ$ |

> **注意**：若无特殊说明，三相电路均按**正序**处理。对称三相电流也具有与电压相同的性质：相量和及瞬时值和均为零。

* * *

## 五、 总结与注意事项

### 5.1 核心公式速查

| 概念  | 公式  | 说明  |
| --- | --- | --- |
| 有功功率 | $P = UI\cos\varphi = I^2R$ | 电阻消耗，单位 W |
| 无功功率 | $Q = UI\sin\varphi = I^2X$ | 储能元件交换，单位 var |
| 视在功率 | $S = UI$ | 额定容量，单位 V·A |
| 复功率 | $\tilde{S} = P + jQ = \dot{U}\dot{I}^*$ | 满足守恒 |
| 串联谐振频率 | $\omega_0 = 1/\sqrt{LC}$ | $Z = R$，电流最大 |
| 并联谐振频率 | $\omega_0 = 1/\sqrt{LC}$ | $Y = G$，电压最大 |
| 品质因数 | $Q = \rho/R = \omega_0 L/R$ | 串联谐振电压放大倍数 |
| 顺接等效电感 | $L = L_1 + L_2 + 2M$ | 磁通加强 |
| 反接等效电感 | $L = L_1 + L_2 - 2M$ | 磁通削弱 |
| 对称三相电源 | $\dot{U}_A + \dot{U}_B + \dot{U}_C = 0$ | 幅值相等，相位差 $120^\circ$ |

### 5.2 易错点提醒

1. **功率因数角** $\varphi$ 既是电压与电流的相位差，也是阻抗角，同时也是功率因数角，三者是同一角度。
2. **无功功率的正负**：感性 $Q > 0$（吸收），容性 $Q < 0$（发出）。
3. **复功率不是相量**：它不对应任何正弦量，只是一个复数工具。
4. **视在功率不守恒**：复功率、有功功率、无功功率分别守恒，但视在功率不守恒。
5. **串联谐振与并联谐振的区别**：串联谐振是 **LC 短路**（电压谐振），并联谐振是 **LC 开路**（电流谐振）。
6. **耦合电感的同名端决定互感电压的正负**，务必先判断电流方向与同名端的关系再写方程。
7. **最大功率传输与功率因数提高是不同概念**：前者关注负载获最大功率（$R_L = R_{eq}$），后者关注提高电源利用率（并联电容）。

### 5.3 解题要点

* **求功率**：先判断参考方向是否一致，再用 $P = UI\cos\varphi$ 计算。
* **谐振判断**：串联看阻抗模最小（电流最大），并联看导纳模最小（电压最大）。
* **耦合电感**：一定要先标出同名端，再根据电流方向确定互感电压正负。
* **对称三相电路**：牢记相量和为零的特性，可简化大量计算。
