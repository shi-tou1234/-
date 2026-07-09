---
title: 正弦电流电路导论
pubDate: 2026-05-13T11:45:00.000Z
updatedDate: 2026-05-13T11:46:31.315Z
draft: false
description: 
category: 电路
slugId: 正弦电流电路导论
---

# 第七章 正弦电流电路导论

## 7.1 正弦电压和正弦电流的基本概念

### 一、正弦量的三要素

电流 $i$ 的表达式为：

$$
i(t) = I_m \sin(\omega t + \psi)
$$

:::derivation
**推导过程**：

正弦电流是按正弦规律随时间变化的周期函数，其一般表达式由三角函数的定义出发。

设正弦电流的瞬时值为 $i(t)$，根据周期函数的性质，最简单的周期性变化可用正弦函数描述：

$$ i(t) = I_m \sin(\omega t + \psi) $$

其中各参数的物理意义如下：

- **振幅 $I_m$**：由函数最大值决定，令 $\sin(\omega t + \psi) = 1$，得 $i_{\max} = I_m$，反映正弦电流的变化范围 $[-I_m, I_m]$。
- **角频率 $\omega$**：相位 $(\omega t + \psi)$ 对时间 $t$ 的导数 $\frac{d}{dt}(\omega t + \psi) = \omega$，反映相位变化的快慢。由周期 $T$ 内相位变化 $2\pi$ 得 $\omega T = 2\pi$，即 $\omega = \frac{2\pi}{T} = 2\pi f$。
- **初相角 $\psi$**：令 $t = 0$，得 $i(0) = I_m \sin\psi$，故 $\psi$ 决定了初始时刻的电流值。

这三个参数唯一确定了正弦电流的变化规律，缺一不可，因此称为**正弦量的三要素**。
:::

同一个正弦电流也可用余弦函数表示为 $i(t) = I_m \cos(\omega t + \theta)$，其中 $\theta = \psi - 90^\circ$。

**三要素：**

1. **振幅（幅值）** $I_m$：正弦电流的最大值，表示正弦电流变化的范围，单位为安培（A）

2. **角频率** $\omega$：反映正弦电流变化的快慢，单位是弧度/秒（rad/s）
   - 周期：$T$（秒）
   - 频率：$f = \frac{1}{T}$（赫兹，Hz）
   - 角频率：$\omega = \frac{2\pi}{T} = 2\pi f$
   - 我国工频：$f = 50\,\text{Hz}$，$\omega = 314\,\text{rad/s}$

3. **初相角** $\psi$：$t=0$ 时的相位角，单位为弧度或度
   - 为使表达式唯一，常取 $|\psi| \leq \pi$
   - 相位角：$(\omega t + \psi)$ 反映了正弦电流变化的过程

---

### 二、同频率正弦量的相位关系

设两个同频率正弦量：

$$
u(t) = U_m \cos(\omega t + \psi_u)
$$

$$
i(t) = I_m \cos(\omega t + \psi_i)
$$

**相位差定义：**

$$
\varphi = (\omega t + \psi_u) - (\omega t + \psi_i) = \psi_u - \psi_i
$$

:::derivation
**推导过程**：

设两个同频率的正弦量：

$$ u(t) = U_m \cos(\omega t + \psi_u), \quad i(t) = I_m \cos(\omega t + \psi_i) $$

相位差的定义为两正弦量相位角之差：

$$ \varphi = (\omega t + \psi_u) - (\omega t + \psi_i) $$

展开并消去含 $t$ 的项：

$$ \varphi = \omega t + \psi_u - \omega t - \psi_i = \psi_u - \psi_i $$

由于两个正弦量角频率 $\omega$ 相同，含时间 $t$ 的项 $\omega t$ 相互抵消，相位差 $\varphi$ 仅由初相角 $\psi_u$ 和 $\psi_i$ 决定，与时间无关，为常数。

这说明同频率正弦量之间的相位关系是固定的，不随时间变化，这是相量法能够用复数（不含时间因子）表示正弦量之间关系的基础。
:::

**重要结论：** 同频率正弦量的相位差等于它们的初相角之差，为常数。

**相位关系分类：**

| 相位差范围 | 相位关系 | 含义 |
|-----------|---------|------|
| $0^\circ < \psi_u - \psi_i < 180^\circ$ | 电压 $u$ **超前** 电流 $i$ | 电压比电流先达到正最大值 |
| $-180^\circ < \psi_u - \psi_i < 0^\circ$ | 电压 $u$ **滞后** 电流 $i$ | 电压比电流后达到正最大值 |
| $\psi_u - \psi_i = 0^\circ$ | **同相** | 同时达到最大值和零值 |
| $\psi_u - \psi_i = \pm 180^\circ$ | **反相** | 一个为正最大时另一个为负最大 |
| $\psi_u - \psi_i = \pm 90^\circ$ | **正交** | 相位差为直角 |

**注意：**
1. 计算相位差时，必须将两个正弦量化为同名函数（同为正弦或同为余弦）
2. 若 $|\psi_u - \psi_i| > 180^\circ$，需加减 $360^\circ$ 换算至 $[-180^\circ, +180^\circ]$ 范围

**三角函数转换公式：**
- $\sin(\theta) = \cos(\theta - 90^\circ)$
- $\cos(\theta) = \sin(\theta + 90^\circ)$

---

### 三、正弦量的有效值

**定义：**

正弦电流的有效值：

$$
I = \frac{I_m}{\sqrt{2}}
$$

:::derivation
**推导过程**：

有效值的定义基于热效应等效：让正弦电流 $i(t) = I_m \sin(\omega t + \psi)$ 和直流电流 $I$ 分别通过同一电阻 $R$，若在一个周期 $T$ 内两者产生的热量相等，则该直流电流 $I$ 即为正弦电流的有效值。

正弦电流在一个周期内的平均功率：

$$ P_{ac} = \frac{1}{T}\int_0^T i^2(t)\,dt = \frac{1}{T}\int_0^T I_m^2 \sin^2(\omega t + \psi)\,dt $$

利用半角公式 $\sin^2\theta = \frac{1 - \cos 2\theta}{2}$：

$$ P_{ac} = \frac{I_m^2}{T}\int_0^T \frac{1 - \cos(2\omega t + 2\psi)}{2}\,dt = \frac{I_m^2}{2T}\left[\int_0^T 1\,dt - \int_0^T \cos(2\omega t + 2\psi)\,dt\right] $$

由于 $\int_0^T \cos(2\omega t + 2\psi)\,dt = 0$（一个完整周期内余弦积分为零），故：

$$ P_{ac} = \frac{I_m^2}{2T} \cdot T = \frac{I_m^2}{2} $$

直流电流 $I$ 通过同一电阻的功率为 $P_{dc} = I^2 R$，对应平均功率 $I^2$。令两者相等：

$$ I^2 = \frac{I_m^2}{2} \quad \Rightarrow \quad I = \frac{I_m}{\sqrt{2}} $$

同理可得正弦电压的有效值 $U = \frac{U_m}{\sqrt{2}}$。
:::

正弦电压的有效值：

$$
U = \frac{U_m}{\sqrt{2}}
$$

**有效值表达式：**

$$
i(t) = \sqrt{2}I \sin(\omega t + \psi_i)
$$

$$
u(t) = \sqrt{2}U \sin(\omega t + \psi_u)
$$

**工程应用：**
- 电气设备铭牌上的额定电压、电流均为有效值
- 交流电压表、电流表测量值为有效值
- 220V 交流电指有效值为 220V，最大值为 $220\sqrt{2} \approx 311.13\,\text{V}$

---

## 7.2 正弦稳态响应

### 一阶 RL 电路全响应求解

**电路方程：**

由 KVL 定律：

$$
L\frac{di(t)}{dt} + Ri(t) = U_{sm}\sin(\omega t)
$$

**全响应分解：**

$$
i(t) = i_t(t) + i_f(t)
$$

其中：
- $i_t(t)$：暂态分量（齐次方程通解）
- $i_f(t)$：稳态分量（非齐次方程特解）

---

#### 1. 暂态分量求解

齐次方程：

$$
L\frac{di_t(t)}{dt} + Ri_t(t) = 0
$$

特征方程：

$$
Ls + R = 0 \quad \Rightarrow \quad s = -\frac{R}{L} = -\frac{1}{\tau}
$$

其中时间常数 $\tau = \frac{L}{R}$。

通解形式：

$$
i_t(t) = Ae^{-\frac{R}{L}t} = Ae^{-\frac{t}{\tau}}
$$

$A$ 为待定积分常数，由初始条件 $i(0_+)$ 确定。

---

#### 2. 稳态分量求解

设特解形式：

$$
i_f(t) = I_m \sin(\omega t + \psi)
$$

代入原微分方程：

$$
\omega L I_m \cos(\omega t + \psi) + R I_m \sin(\omega t + \psi) = U_{sm} \sin(\omega t)
$$

利用三角函数合成公式 $A\cos\theta + B\sin\theta = C\sin(\theta + \phi)$，其中 $C = \sqrt{A^2 + B^2}$，$\phi = \arctan\frac{A}{B}$：

$$
I_m \sqrt{(\omega L)^2 + R^2} \sin\left(\omega t + \psi + \arctan\frac{\omega L}{R}\right) = U_{sm} \sin(\omega t)
$$

对比两端：

**振幅相等：**

$$
I_m \sqrt{R^2 + (\omega L)^2} = U_{sm} \quad \Rightarrow \quad I_m = \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}}
$$

**相位相等：**

$$
\psi + \arctan\frac{\omega L}{R} = 0 \quad \Rightarrow \quad \psi = -\arctan\frac{\omega L}{R}
$$

**特解表达式：**

$$
i_f(t) = \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \sin\left(\omega t - \arctan\frac{\omega L}{R}\right)
$$

---

#### 3. 全响应表达式

$$
i(t) = Ae^{-\frac{t}{\tau}} + \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \sin\left(\omega t - \arctan\frac{\omega L}{R}\right)
$$

令 $t = 0_+$：

$$
i(0_+) = A + \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \sin\left(-\arctan\frac{\omega L}{R}\right)
$$

解得：

$$
A = i(0_+) + \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \sin\left(\arctan\frac{\omega L}{R}\right)
$$

**最终全响应：**

$$
\boxed{
i(t) = \left[i(0_+) + \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \sin\left(\arctan\frac{\omega L}{R}\right)\right] e^{-\frac{t}{\tau}} + \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \sin\left(\omega t - \arctan\frac{\omega L}{R}\right)
}
$$

**正弦稳态响应**（$t \to \infty$）：

$$
i_{ss}(t) = \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \sin\left(\omega t - \arctan\frac{\omega L}{R}\right)
$$

---

## 7.3 正弦量的相量表示法

### 一、复数及其运算

**四种表示形式：**

1. **代数形式**：$A = a + jb$
   - 实部：$a = \text{Re}[A]$
   - 虚部：$b = \text{Im}[A]$

2. **三角形式**：$A = |A|(\cos\theta + j\sin\theta)$
   - 模：$|A| = \sqrt{a^2 + b^2}$
   - 辐角：$\theta = \arctan\frac{b}{a}$

3. **指数形式**：$A = |A|e^{j\theta}$（欧拉公式：$e^{j\theta} = \cos\theta + j\sin\theta$）

4. **极坐标形式**：$A = |A| \angle \theta$

---

**复数运算：**

设 $A_1 = a_1 + jb_1 = |A_1| \angle \theta_1$，$A_2 = a_2 + jb_2 = |A_2| \angle \theta_2$

**加减运算**（代数形式）：

$$
A_1 \pm A_2 = (a_1 \pm a_2) + j(b_1 \pm b_2)
$$

**乘除运算**（极坐标形式）：

$$
A_1 \cdot A_2 = |A_1||A_2| \angle (\theta_1 + \theta_2)
$$

:::derivation
**推导过程**：

设两复数的指数形式为 $A_1 = |A_1|e^{j\theta_1}$，$A_2 = |A_2|e^{j\theta_2}$。

**乘法**：利用指数运算法则 $e^{j\alpha} \cdot e^{j\beta} = e^{j(\alpha + \beta)}$：

$$ A_1 \cdot A_2 = |A_1|e^{j\theta_1} \cdot |A_2|e^{j\theta_2} = |A_1||A_2| e^{j(\theta_1 + \theta_2)} $$

转为极坐标形式：

$$ A_1 \cdot A_2 = |A_1||A_2| \angle (\theta_1 + \theta_2) $$

即**复数相乘，模相乘，辐角相加**。

**除法**：利用 $e^{j\alpha} / e^{j\beta} = e^{j(\alpha - \beta)}$：

$$ \frac{A_1}{A_2} = \frac{|A_1|e^{j\theta_1}}{|A_2|e^{j\theta_2}} = \frac{|A_1|}{|A_2|} e^{j(\theta_1 - \theta_2)} = \frac{|A_1|}{|A_2|} \angle (\theta_1 - \theta_2) $$

即**复数相除，模相除，辐角相减**。

此运算法则是相量法中阻抗、导纳运算的数学基础，使得交流电路的计算可类比直流电路的代数运算。
:::

$$
\frac{A_1}{A_2} = \frac{|A_1|}{|A_2|} \angle (\theta_1 - \theta_2)
$$

**旋转因子：**
- $e^{j\psi} = 1 \angle \psi$（模为 1）
- $j = e^{j\pi/2} = 1 \angle 90^\circ$（逆时针旋转 $90^\circ$）
- $-j = e^{-j\pi/2} = 1 \angle -90^\circ$（顺时针旋转 $90^\circ$）

---

### 二、正弦量的相量表示

**振幅相量：**

正弦电压 $u(t) = U_m \sin(\omega t + \psi)$ 对应的振幅相量：

$$
\dot{U}_m = U_m e^{j\psi} = U_m \angle \psi
$$

:::derivation
**推导过程**：

由欧拉公式 $e^{j\theta} = \cos\theta + j\sin\theta$，构造复指数函数：

$$ U_m e^{j(\omega t + \psi)} = U_m \cos(\omega t + \psi) + j U_m \sin(\omega t + \psi) $$

观察发现，正弦电压 $u(t) = U_m \sin(\omega t + \psi)$ 恰好是该复指数函数的虚部：

$$ u(t) = \text{Im}\left[U_m e^{j(\omega t + \psi)}\right] $$

将含时间因子 $e^{j\omega t}$ 的部分分离出来：

$$ u(t) = \text{Im}\left[(U_m e^{j\psi}) \cdot e^{j\omega t}\right] = \text{Im}\left[\dot{U}_m \cdot e^{j\omega t}\right] $$

其中 $\dot{U}_m = U_m e^{j\psi}$ 仅包含振幅 $U_m$ 和初相 $\psi$ 两个信息，与时间 $t$ 无关，是一个复常数，定义为正弦电压的**振幅相量**。

极坐标形式下 $\dot{U}_m = U_m \angle \psi$，其模等于正弦量的振幅，辐角等于初相。这样，正弦量与复数之间建立了一一对应关系，使微积分运算转化为复数代数运算。
:::

推导：

$$
U_m e^{j(\omega t + \psi)} = U_m \cos(\omega t + \psi) + j U_m \sin(\omega t + \psi)
$$

$$
u(t) = \text{Im}\left[U_m e^{j(\omega t + \psi)}\right] = \text{Im}\left[\dot{U}_m e^{j\omega t}\right]
$$

**有效值相量：**

$$
\dot{U} = U e^{j\psi} = U \angle \psi
$$

:::derivation
**推导过程**：

由正弦量的有效值 $U = \frac{U_m}{\sqrt{2}}$，振幅相量 $\dot{U}_m = U_m e^{j\psi}$，将振幅替换为有效值：

$$ \dot{U}_m = U_m e^{j\psi} = \sqrt{2} U \cdot e^{j\psi} = \sqrt{2} \dot{U} $$

其中 $\dot{U} = U e^{j\psi}$ 定义为**有效值相量**，其模等于正弦量的有效值，辐角等于初相。

由 $\dot{U}_m = \sqrt{2} \dot{U}$ 得：

$$ \dot{U} = \frac{\dot{U}_m}{\sqrt{2}} $$

由于工程中电压表、电流表测量值均为有效值，电气设备铭牌额定值也为有效值，因此工程上约定无特殊声明时"相量"指有效值相量，便于直接与测量值对应。
:::

其中 $U = \frac{U_m}{\sqrt{2}}$。

**关系：**

$$
\dot{U}_m = \sqrt{2} \dot{U}
$$

**约定：** 无特殊声明时，"相量"指有效值相量。

---

### 三、相量运算性质

**1. 线性性质：**

若 $f_1(t) \leftrightarrow \dot{F}_1$，$f_2(t) \leftrightarrow \dot{F}_2$，则：

$$
k_1 f_1(t) + k_2 f_2(t) \leftrightarrow k_1 \dot{F}_1 + k_2 \dot{F}_2
$$

**2. 微分性质：**

$$
\frac{df(t)}{dt} \leftrightarrow j\omega \dot{F}
$$

:::derivation
**推导过程**：

设正弦量 $f(t) = \sqrt{2} F \sin(\omega t + \psi_F)$，其对应的有效值相量为 $\dot{F} = F e^{j\psi_F} = F \angle \psi_F$。

利用相量与正弦量的关系 $f(t) = \text{Im}[\sqrt{2} \dot{F} e^{j\omega t}]$，对 $f(t)$ 求导：

$$ \frac{df(t)}{dt} = \frac{d}{dt}\text{Im}\left[\sqrt{2} \dot{F} e^{j\omega t}\right] $$

由于求导与取虚部可交换顺序（均为线性运算）：

$$ \frac{df(t)}{dt} = \text{Im}\left[\sqrt{2} \dot{F} \cdot \frac{d}{dt}e^{j\omega t}\right] = \text{Im}\left[\sqrt{2} \dot{F} \cdot j\omega e^{j\omega t}\right] = \text{Im}\left[\sqrt{2} (j\omega \dot{F}) e^{j\omega t}\right] $$

对比相量与正弦量的关系式，可见 $\frac{df(t)}{dt}$ 对应的相量为 $j\omega \dot{F}$，即：

$$ \frac{df(t)}{dt} \leftrightarrow j\omega \dot{F} $$

推广到 $n$ 阶导数，每求导一次相当于乘以 $j\omega$，故 $\frac{d^n f(t)}{dt^n} \leftrightarrow (j\omega)^n \dot{F}$。

此性质将时域中的微分运算转化为相量域中的乘法运算，是相量法求解微分方程的核心。
:::

$$
\frac{d^n f(t)}{dt^n} \leftrightarrow (j\omega)^n \dot{F}
$$

**3. 积分性质：**

$$
\int f(t) dt \leftrightarrow \frac{1}{j\omega} \dot{F}
$$

:::derivation
**推导过程**：

设正弦量 $f(t) = \text{Im}[\sqrt{2} \dot{F} e^{j\omega t}]$，对 $f(t)$ 积分：

$$ \int f(t)\,dt = \int \text{Im}\left[\sqrt{2} \dot{F} e^{j\omega t}\right] dt $$

积分与取虚部可交换顺序（均为线性运算）：

$$ \int f(t)\,dt = \text{Im}\left[\sqrt{2} \dot{F} \int e^{j\omega t}\,dt\right] = \text{Im}\left[\sqrt{2} \dot{F} \cdot \frac{1}{j\omega} e^{j\omega t}\right] = \text{Im}\left[\sqrt{2} \left(\frac{1}{j\omega} \dot{F}\right) e^{j\omega t}\right] $$

对比相量与正弦量的关系式，可见 $\int f(t)\,dt$ 对应的相量为 $\frac{1}{j\omega} \dot{F}$，即：

$$ \int f(t)\,dt \leftrightarrow \frac{1}{j\omega} \dot{F} = -\frac{j}{\omega} \dot{F} $$

（这里利用了 $\frac{1}{j} = -j$）。

积分性质与微分性质互为逆运算：微分对应乘以 $j\omega$，积分对应除以 $j\omega$（即乘以 $\frac{1}{j\omega}$）。这使得电容、电感元件的微积分 VCR 方程在相量域中均化为代数方程，极大简化了正弦稳态分析。
:::

---

### 四、相量法求解示例

**例：一阶 RL 电路**

微分方程：

$$
L\frac{di_f(t)}{dt} + Ri_f(t) = U_{sm} \sin(\omega t)
$$

设 $i_f(t) = I_m \sin(\omega t + \psi)$，对应振幅相量 $\dot{I}_m = I_m \angle \psi$。

相量方程：

$$
j\omega L \dot{I}_m + R \dot{I}_m = U_{sm} \angle 0^\circ
$$

$$
(R + j\omega L) \dot{I}_m = U_{sm} \angle 0^\circ
$$

求解：

$$
\dot{I}_m = \frac{U_{sm} \angle 0^\circ}{R + j\omega L}
$$

$$
R + j\omega L = \sqrt{R^2 + (\omega L)^2} \angle \arctan\frac{\omega L}{R}
$$

$$
\dot{I}_m = \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \angle \left(-\arctan\frac{\omega L}{R}\right)
$$

还原时域：

$$
i_f(t) = \frac{U_{sm}}{\sqrt{R^2 + (\omega L)^2}} \sin\left(\omega t - \arctan\frac{\omega L}{R}\right)
$$

---

## 7.4 基尔霍夫定律的相量形式

### 一、KCL 的相量形式

**时域形式：**

$$
\sum i_{\text{流入}}(t) = \sum i_{\text{流出}}(t) \quad \text{或} \quad \sum i_k(t) = 0
$$

**相量形式：**

$$
\boxed{\sum \dot{I}_{\text{流入}} = \sum \dot{I}_{\text{流出}} \quad \text{或} \quad \sum \dot{I}_k = 0}
$$

:::derivation
**推导过程**：

KCL 的时域形式为 $\sum i_k(t) = 0$，即任一节点上所有支路电流瞬时值的代数和为零。

设各支路电流为同频率正弦量 $i_k(t) = \sqrt{2} I_k \sin(\omega t + \psi_k)$，对应的相量为 $\dot{I}_k = I_k \angle \psi_k$。由相量与正弦量的关系：

$$ i_k(t) = \text{Im}\left[\sqrt{2} \dot{I}_k e^{j\omega t}\right] $$

代入 KCL 方程：

$$ \sum_k i_k(t) = \sum_k \text{Im}\left[\sqrt{2} \dot{I}_k e^{j\omega t}\right] = \text{Im}\left[\sqrt{2} \left(\sum_k \dot{I}_k\right) e^{j\omega t}\right] = 0 $$

由于 $\sqrt{2} e^{j\omega t}$ 不恒为零，要使虚部恒为零，必须满足：

$$ \sum_k \dot{I}_k = 0 $$

即各支路电流的相量代数和为零。这表明 KCL 在相量域中同样成立，形式与时域完全相同，只是将瞬时值替换为相量。条件是所有支路电流必须同频率，否则不能提取公因子 $e^{j\omega t}$。
:::

**条件：** 所有支路电流为同频率正弦量。

---

### 二、KVL 的相量形式

**时域形式：**

$$
\sum u_k(t) = 0
$$

**相量形式：**

$$
\boxed{\sum \dot{U}_k = 0}
$$

:::derivation
**推导过程**：

KVL 的时域形式为 $\sum u_k(t) = 0$，即沿任一回路各支路电压瞬时值的代数和为零。

设各支路电压为同频率正弦量 $u_k(t) = \sqrt{2} U_k \sin(\omega t + \psi_k)$，对应相量为 $\dot{U}_k = U_k \angle \psi_k$。由相量与正弦量的关系：

$$ u_k(t) = \text{Im}\left[\sqrt{2} \dot{U}_k e^{j\omega t}\right] $$

代入 KVL 方程：

$$ \sum_k u_k(t) = \sum_k \text{Im}\left[\sqrt{2} \dot{U}_k e^{j\omega t}\right] = \text{Im}\left[\sqrt{2} \left(\sum_k \dot{U}_k\right) e^{j\omega t}\right] = 0 $$

由于 $\sqrt{2} e^{j\omega t}$ 不恒为零，要使虚部对任意时间 $t$ 恒为零，必须满足：

$$ \sum_k \dot{U}_k = 0 $$

即沿任一回路各支路电压的相量代数和为零。KVL 在相量域中同样成立，形式与时域完全一致。这一结论是相量法分析交流电路的理论基础，使得节点法、回路法等方法均可直接推广到相量域。
:::

**例：** 已知 $\dot{U}_1 = (3+j4)\,\text{V}$，$\dot{U}_2 = (9+j4)\,\text{V}$，$\dot{U}_3 = (5+j3)\,\text{V}$

求 $\dot{U}_4$：

$$
\dot{U}_1 + \dot{U}_2 - \dot{U}_3 + \dot{U}_4 = 0
$$

$$
\dot{U}_4 = -\dot{U}_1 - \dot{U}_2 + \dot{U}_3 = -(3+j4) - (9+j4) + (5+j3) = (-7-j5)\,\text{V}
$$

---

## 7.5 电路元件方程的相量形式

### 一、电阻元件

**时域 VCR：**

$$
u_R(t) = R \cdot i_R(t)
$$

**相量形式：**

$$
\boxed{\dot{U}_R = R \dot{I}_R}
$$

:::derivation
**推导过程**：

电阻元件的时域 VCR 为 $u_R(t) = R \cdot i_R(t)$。

设电压和电流为同频率正弦量：

$$ u_R(t) = \sqrt{2} U_R \sin(\omega t + \psi_u), \quad i_R(t) = \sqrt{2} I_R \sin(\omega t + \psi_i) $$

对应相量 $\dot{U}_R = U_R \angle \psi_u$，$\dot{I}_R = I_R \angle \psi_i$。

代入时域 VCR：

$$ \sqrt{2} U_R \sin(\omega t + \psi_u) = R \cdot \sqrt{2} I_R \sin(\omega t + \psi_i) $$

两边约去 $\sqrt{2}$，比较得：

- **振幅关系**：$U_R = R \cdot I_R$
- **相位关系**：$\psi_u = \psi_i$（电压与电流同相）

将上述关系用相量表示：

$$ \dot{U}_R = U_R \angle \psi_u = (R \cdot I_R) \angle \psi_i = R \cdot (I_R \angle \psi_i) = R \dot{I}_R $$

即 $\dot{U}_R = R \dot{I}_R$。电阻元件在相量域中的 VCR 与时域形式完全相同，电压电流同相位，阻抗为实数 $R$。
:::

**特性：**
- 模：$U_R = R I_R$（欧姆定律）
- 相位：$\psi_u = \psi_i$（同相）

---

### 二、电容元件

**时域 VCR：**

$$
i_C(t) = C \frac{du_C(t)}{dt}
$$

**相量形式：**

$$
\dot{I}_C = j\omega C \dot{U}_C
$$

$$
\boxed{\dot{U}_C = \frac{1}{j\omega C} \dot{I}_C = -j\frac{1}{\omega C} \dot{I}_C}
$$

:::derivation
**推导过程**：

电容元件的时域 VCR 为 $i_C(t) = C \frac{du_C(t)}{dt}$。

设电容电压为正弦量 $u_C(t) = \sqrt{2} U_C \sin(\omega t + \psi_u)$，对应相量 $\dot{U}_C = U_C \angle \psi_u$。

由相量微分性质 $\frac{df(t)}{dt} \leftrightarrow j\omega \dot{F}$，$\frac{du_C(t)}{dt}$ 对应的相量为 $j\omega \dot{U}_C$。

代入时域 VCR 的相量形式：

$$ \dot{I}_C = C \cdot (j\omega \dot{U}_C) = j\omega C \dot{U}_C $$

解出 $\dot{U}_C$：

$$ \dot{U}_C = \frac{1}{j\omega C} \dot{I}_C $$

由于 $\frac{1}{j} = -j$，故：

$$ \dot{U}_C = -j\frac{1}{\omega C} \dot{I}_C $$

**物理意义分析**：系数 $\frac{1}{j\omega C} = \frac{1}{\omega C} \angle -90^\circ$。

- 模：$U_C = \frac{1}{\omega C} I_C = X_C I_C$，其中容抗 $X_C = \frac{1}{\omega C}$ 与频率成反比（频率越高容抗越小）。
- 辐角：$\psi_u - \psi_i = -90^\circ$，即电压滞后电流 $90^\circ$，这是因为电容电流取决于电压的变化率而非电压本身。
:::

**特性：**
- 模：$U_C = \frac{1}{\omega C} I_C = X_C I_C$
- 容抗：$X_C = \frac{1}{\omega C}$（单位：$\Omega$）
- 相位：$\psi_u - \psi_i = -90^\circ$（电压滞后电流 $90^\circ$）

---

### 三、电感元件

**时域 VCR：**

$$
u_L(t) = L \frac{di_L(t)}{dt}
$$

**相量形式：**

$$
\boxed{\dot{U}_L = j\omega L \dot{I}_L}
$$

:::derivation
**推导过程**：

电感元件的时域 VCR 为 $u_L(t) = L \frac{di_L(t)}{dt}$。

设电感电流为正弦量 $i_L(t) = \sqrt{2} I_L \sin(\omega t + \psi_i)$，对应相量 $\dot{I}_L = I_L \angle \psi_i$。

由相量微分性质 $\frac{df(t)}{dt} \leftrightarrow j\omega \dot{F}$，$\frac{di_L(t)}{dt}$ 对应的相量为 $j\omega \dot{I}_L$。

代入时域 VCR 的相量形式：

$$ \dot{U}_L = L \cdot (j\omega \dot{I}_L) = j\omega L \dot{I}_L $$

**物理意义分析**：系数 $j\omega L = \omega L \angle 90^\circ$。

- 模：$U_L = \omega L I_L = X_L I_L$，其中感抗 $X_L = \omega L$ 与频率成正比（频率越高感抗越大，即"通低频阻高频"）。
- 辐角：$\psi_u - \psi_i = +90^\circ$，即电压超前电流 $90^\circ$，这是因为电感电压取决于电流的变化率，电流变化最快时（过零点）电压达到最大。

电感与电容的相量 VCR 形式对称：电感对应乘以 $j\omega L$（超前 $90^\circ$），电容对应乘以 $\frac{1}{j\omega C} = -j\frac{1}{\omega C}$（滞后 $90^\circ$），两者相位差符号相反。
:::

**特性：**
- 模：$U_L = \omega L I_L = X_L I_L$
- 感抗：$X_L = \omega L$（单位：$\Omega$）
- 相位：$\psi_u - \psi_i = +90^\circ$（电压超前电流 $90^\circ$）

---

### 四、受控源的相量形式

| 类型 | 时域关系 | 相量关系 |
|------|---------|---------|
| VCVS | $u_2 = \mu u_1$ | $\dot{U}_2 = \mu \dot{U}_1$ |
| VCCS | $i_2 = g_m u_1$ | $\dot{I}_2 = g_m \dot{U}_1$ |
| CCCS | $i_2 = \alpha i_1$ | $\dot{I}_2 = \alpha \dot{I}_1$ |
| CCVS | $u_2 = r_m i_1$ | $\dot{U}_2 = r_m \dot{I}_1$ |

---

### 五、综合应用示例

**已知：** RLC 串联电路，$R = 10\,\Omega$，$L = 63.7\,\text{mH}$，$C = 318\,\mu\text{F}$

电流 $i(t) = 10\sqrt{2} \sin(314t + 45^\circ)\,\text{A}$，$\omega = 314\,\text{rad/s}$

**求：** 总电压 $u(t)$

**解：**

1. **电流相量：**
   $$
   \dot{I} = 10 \angle 45^\circ\,\text{A}
   $$

2. **计算电抗：**
   $$
   X_L = \omega L = 314 \times 63.7 \times 10^{-3} = 20\,\Omega
   $$
   $$
   X_C = \frac{1}{\omega C} = \frac{1}{314 \times 318 \times 10^{-6}} = 10\,\Omega
   $$

3. **各元件电压相量：**
   - 电阻：$\dot{U}_R = R\dot{I} = 10 \times 10 \angle 45^\circ = 100 \angle 45^\circ\,\text{V}$
   - 电感：$\dot{U}_L = jX_L \dot{I} = 20 \angle 90^\circ \times 10 \angle 45^\circ = 200 \angle 135^\circ\,\text{V}$
   - 电容：$\dot{U}_C = -jX_C \dot{I} = 10 \angle -90^\circ \times 10 \angle 45^\circ = 100 \angle -45^\circ\,\text{V}$

4. **总电压相量（KVL）：**
   $$
   \dot{U} = \dot{U}_R + \dot{U}_L + \dot{U}_C
   $$

   化为代数形式：
   - $\dot{U}_R = 100(\cos 45^\circ + j\sin 45^\circ) = 70.7 + j70.7$
   - $\dot{U}_L = 200(\cos 135^\circ + j\sin 135^\circ) = -141.4 + j141.4$
   - $\dot{U}_C = 100(\cos(-45^\circ) + j\sin(-45^\circ)) = 70.7 - j70.7$

   求和：
   $$
   \dot{U} = (70.7 - 141.4 + 70.7) + j(70.7 + 141.4 - 70.7) = 0 + j141.4 = 141.4 \angle 90^\circ\,\text{V}
   $$

5. **还原时域：**
   $$
   u(t) = 141.4\sqrt{2} \sin(314t + 90^\circ) = 200 \sin(314t + 90^\circ)\,\text{V}
   $$

---

## 附录：核心公式速查

### 正弦量基本关系

$$
i(t) = I_m \sin(\omega t + \psi) = \sqrt{2}I \sin(\omega t + \psi)
$$

$$
I = \frac{I_m}{\sqrt{2}}, \quad U = \frac{U_m}{\sqrt{2}}
$$

$$
\omega = 2\pi f = \frac{2\pi}{T}
$$

### 相量运算

$$
\frac{df}{dt} \leftrightarrow j\omega \dot{F}, \quad \int f dt \leftrightarrow \frac{1}{j\omega} \dot{F}
$$

### 元件相量关系

| 元件 | 相量关系 | 阻抗 | 相位差 |
|------|---------|------|--------|
| 电阻 | $\dot{U} = R\dot{I}$ | $R$ | $0^\circ$ |
| 电感 | $\dot{U} = j\omega L\dot{I}$ | $j\omega L$ | $+90^\circ$ |
| 电容 | $\dot{U} = \frac{1}{j\omega C}\dot{I}$ | $\frac{1}{j\omega C}$ | $-90^\circ$ |

### 阻抗与导纳

$$
Z = \frac{\dot{U}}{\dot{I}} = R + jX = |Z| \angle \theta_Z
$$

:::derivation
**推导过程**：

对于任意一个不含独立源的单口网络（仅含 R、L、C 和受控源），在正弦稳态下，端口电压 $\dot{U}$ 与端口电流 $\dot{I}$ 之比定义为阻抗 $Z$：

$$ Z = \frac{\dot{U}}{\dot{I}} $$

阻抗是复数，可表示为代数形式和极坐标形式。

**代数形式 $Z = R + jX$**：

以 RLC 串联电路为例，由 KVL 相量形式：

$$ \dot{U} = \dot{U}_R + \dot{U}_L + \dot{U}_C = R\dot{I} + j\omega L\dot{I} + \frac{1}{j\omega C}\dot{I} = \left(R + j\omega L + \frac{1}{j\omega C}\right)\dot{I} $$

故阻抗为：

$$ Z = \frac{\dot{U}}{\dot{I}} = R + j\omega L + \frac{1}{j\omega C} = R + j\left(\omega L - \frac{1}{\omega C}\right) = R + jX $$

其中 $R$ 为电阻（实部），$X = X_L - X_C = \omega L - \frac{1}{\omega C}$ 为电抗（虚部）。

**极坐标形式 $Z = |Z| \angle \theta_Z$**：

由复数代数形式与极坐标形式的转换：

$$ |Z| = \sqrt{R^2 + X^2}, \quad \theta_Z = \arctan\frac{X}{R} $$

- 阻抗模 $|Z|$ 决定了电压与电流有效值之比 $U/I = |Z|$；
- 阻抗角 $\theta_Z$ 决定了电压超前电流的相位角 $\psi_u - \psi_i = \theta_Z$。

当 $X > 0$（感性）时 $\theta_Z > 0$，电压超前电流；当 $X < 0$（容性）时 $\theta_Z < 0$，电压滞后电流；当 $X = 0$ 时电路呈纯阻性，电压电流同相。阻抗统一了 R、L、C 三种元件的 VCR，是相量法分析交流电路的核心概念。
:::

$$
Y = \frac{1}{Z} = G + jB = |Y| \angle \theta_Y
$$

$$
Y = \frac{1}{Z}, \quad |Y| = \frac{1}{|Z|}, \quad \theta_Y = -\theta_Z
$$
