---
title: 阻抗、导纳及其串并联与RLC电路分析
pubDate: 2026-05-22T08:34:00.000Z
updatedDate: 2026-05-22T08:35:06.206Z
draft: false
description: 
category: 电路
slugId: 阻抗、导纳及其串并联与rlc电路分析
---

# 电路原理：阻抗、导纳及其串并联与RLC电路分析

在正弦稳态交流电路的分析中，相量法是核心工具。通过引入**阻抗（Impedance）**和**导纳（Admittance）**的概念，我们可以将直流电路中的欧姆定律和基尔霍夫定律直接推广到交流频域分析中。本文将详细梳理阻抗与导纳的基本概念、等效变换、串并联规则以及RLC串并联电路的相量图分析法。

---

## 一、 阻抗与导纳的基本概念

### 1. 无源二端元件的阻抗与导纳
对于任意一个无源二端元件，其端口电压相量 $\dot{U}$ 与电流相量 $\dot{I}$ 的比值定义为**阻抗** $Z$；反之，电流相量与电压相量的比值定义为**导纳** $Y$。

$$
Z = \frac{\dot{U}}{\dot{I}}
$$

$$
Y = \frac{\dot{I}}{\dot{U}}
$$

（单位分别为欧姆 $\Omega$ 和西门子 $\mathrm{S}$）

同一个元件的阻抗与导纳互为倒数，即：

$$
Y = \frac{1}{Z}
$$

对于理想的电阻(R)、电感(L)、电容(C)元件，其阻抗和导纳的表达式如下：

*   **电阻 R**：

$$
Z_R = R, \quad Y_R = G = \frac{1}{R}
$$

*   **电感 L**：

$$
Z_L = \mathrm{j}\omega L = \mathrm{j}X_L, \quad Y_L = \frac{1}{\mathrm{j}\omega L} = -\mathrm{j}\frac{1}{\omega L} = -\mathrm{j}B_L
$$

:::derivation
**推导过程：**

电感的时域伏安关系为 $u_L = L\dfrac{\mathrm{d}i_L}{\mathrm{d}t}$。

设正弦电流 $i_L = \sqrt{2}I\cos(\omega t + \psi_i)$，对其求导：

$$u_L = L\frac{\mathrm{d}}{\mathrm{d}t}\left[\sqrt{2}I\cos(\omega t + \psi_i)\right] = -\sqrt{2}\omega L I\sin(\omega t + \psi_i)$$

利用 $\sin\theta = \cos(\theta - 90^\circ)$，即 $-\sin\theta = \cos(\theta + 90^\circ)$：

$$u_L = \sqrt{2}\omega L I\cos\left(\omega t + \psi_i + 90^\circ\right)$$

写成相量形式：$\dot{I}_L = I\angle\psi_i$，$\dot{U}_L = \omega L I\angle(\psi_i + 90^\circ)$。

因此阻抗为：

$$Z_L = \frac{\dot{U}_L}{\dot{I}_L} = \frac{\omega L I\angle(\psi_i + 90^\circ)}{I\angle\psi_i} = \omega L\angle 90^\circ = \mathrm{j}\omega L$$

**物理意义**：电感电压超前电流 $90^\circ$，感抗 $X_L = \omega L$ 随频率线性增大（直流时 $X_L=0$，相当于短路）。
:::

*   **电容 C**：

$$
Z_C = \frac{1}{\mathrm{j}\omega C} = -\mathrm{j}\frac{1}{\omega C} = -\mathrm{j}X_C, \quad Y_C = \mathrm{j}\omega C = \mathrm{j}B_C
$$

:::derivation
**推导过程：**

电容的时域伏安关系为 $i_C = C\dfrac{\mathrm{d}u_C}{\mathrm{d}t}$。

设正弦电压 $u_C = \sqrt{2}U\cos(\omega t + \psi_u)$，对其求导：

$$i_C = C\frac{\mathrm{d}}{\mathrm{d}t}\left[\sqrt{2}U\cos(\omega t + \psi_u)\right] = -\sqrt{2}\omega C U\sin(\omega t + \psi_u)$$

利用 $-\sin\theta = \cos(\theta + 90^\circ)$：

$$i_C = \sqrt{2}\omega C U\cos\left(\omega t + \psi_u + 90^\circ\right)$$

写成相量形式：$\dot{U}_C = U\angle\psi_u$，$\dot{I}_C = \omega C U\angle(\psi_u + 90^\circ)$。

因此阻抗为：

$$Z_C = \frac{\dot{U}_C}{\dot{I}_C} = \frac{U\angle\psi_u}{\omega C U\angle(\psi_u + 90^\circ)} = \frac{1}{\omega C}\angle(-90^\circ) = \frac{1}{\mathrm{j}\omega C} = -\mathrm{j}\frac{1}{\omega C}$$

**物理意义**：电容电流超前电压 $90^\circ$，容抗 $X_C = \dfrac{1}{\omega C}$ 随频率增大而减小（直流时 $X_C\to\infty$，相当于开路）。
:::

*(注：$X_L$ 为感抗，$X_C$ 为容抗，$B_L$ 为感纳，$B_C$ 为容纳，单位均为 $\Omega$ 或 $\mathrm{S}$)*

### 2. 无源一端口电路的等效阻抗与导纳
对于由线性元件组成的任意无源一端口网络，其端口等效阻抗和等效导纳的定义与二端元件相同：

$$
Z = \frac{\dot{U}}{\dot{I}} = \frac{U \angle \psi_u}{I \angle \psi_i} = \frac{U}{I} \angle (\psi_u - \psi_i) = |Z| \angle \varphi
$$

$$
Y = \frac{\dot{I}}{\dot{U}} = \frac{I}{U} \angle (\psi_i - \psi_u) = |Y| \angle \varphi'
$$

这被称为**欧姆定律的相量形式**：

$$
\dot{U} = Z\dot{I} \quad \text{或} \quad \dot{I} = Y\dot{U}
$$

:::derivation
**推导过程：**

对于电阻 $R$，时域欧姆定律为 $u = Ri$。当 $u$、$i$ 为同频正弦量时，设 $i = \sqrt{2}I\cos(\omega t + \psi_i)$，则：

$$u = R\sqrt{2}I\cos(\omega t + \psi_i) = \sqrt{2}(RI)\cos(\omega t + \psi_i)$$

对应相量：$\dot{U} = RI\angle\psi_i$，$\dot{I} = I\angle\psi_i$，故 $\dot{U} = R\dot{I}$。

推广到一般无源二端网络，定义阻抗 $Z = \dfrac{\dot{U}}{\dot{I}}$，则：

$$\dot{U} = Z\dot{I}$$

同理，由导纳 $Y = \dfrac{1}{Z} = \dfrac{\dot{I}}{\dot{U}}$，得：

$$\dot{I} = Y\dot{U}$$

**核心意义**：相量形式的欧姆定律在形式上与直流电路的 $U = RI$ 完全一致，只是将实数 $R$ 推广为复数 $Z$（或 $Y$），将直流电压电流推广为相量。这使得直流电路的所有分析方法均可直接移植到正弦稳态分析中。
:::

### 3. 阻抗与导纳的代数形式及电路性质判断

#### (1) 阻抗的代数形式与阻抗三角形
阻抗可以表示为代数形式：

$$
Z = R + \mathrm{j}X
$$

其中，实部 $R$ 为**等效电阻**，虚部 $X$ 为**等效电抗**。它们与阻抗模 $|Z|$ 和阻抗角 $\varphi$ 的关系为：

$$
|Z| = \sqrt{R^2 + X^2}, \quad \varphi = \arctan\left(\frac{X}{R}\right)
$$

:::derivation
**推导过程（阻抗三角形）：**

阻抗的代数形式为 $Z = R + \mathrm{j}X$，其模为：

$$|Z| = \sqrt{R^2 + X^2}$$

阻抗角（即电压与电流的相位差）为：

$$\varphi = \psi_u - \psi_i = \arctan\left(\frac{X}{R}\right)$$

**几何图解**：在复平面上，$R$ 为实部（水平分量），$X$ 为虚部（垂直分量），$|Z|$ 为斜边，构成一个直角三角形——称为**阻抗三角形**。

- 实部 $R$ 对应电阻分量，表示耗能部分；
- 虚部 $X$ 对应电抗分量，表示储能（交换）部分；
- 斜边 $|Z|$ 表示阻抗模，即电压有效值与电流有效值之比 $|Z| = U/I$。

阻抗角 $\varphi$ 的正负由 $X$ 的正负决定：$X > 0$ 时 $\varphi > 0$（感性），$X < 0$ 时 $\varphi < 0$（容性）。
:::

$$
R = |Z|\cos\varphi, \quad X = |Z|\sin\varphi
$$

:::derivation
**推导过程：**

由阻抗三角形（直角三角形），已知斜边 $|Z|$ 和阻抗角 $\varphi$，求两直角边 $R$ 和 $X$。

根据三角函数定义：

$$R = |Z|\cos\varphi, \quad X = |Z|\sin\varphi$$

由此可将阻抗的代数形式与极坐标形式互推：

$$Z = R + \mathrm{j}X = |Z|\cos\varphi + \mathrm{j}|Z|\sin\varphi = |Z|(\cos\varphi + \mathrm{j}\sin\varphi) = |Z|\,e^{\mathrm{j}\varphi} = |Z|\angle\varphi$$

这正是欧拉公式 $e^{\mathrm{j}\varphi} = \cos\varphi + \mathrm{j}\sin\varphi$ 的直接应用。
:::

根据电抗 $X$ 的正负，可以判断电路的性质：
*   **$X > 0$ ($\varphi > 0$)**：电压超前电流，电路呈**感性**。
*   **$X < 0$ ($\varphi < 0$)**：电压滞后电流，电路呈**容性**。
*   **$X = 0$ ($\varphi = 0$)**：电压与电流同相，电路呈**阻性**（可能发生谐振）。

#### (2) 导纳的代数形式与导纳三角形
导纳的代数形式为：

$$
Y = G + \mathrm{j}B
$$

其中，实部 $G$ 为**等效电导**，虚部 $B$ 为**等效电纳**。

$$
|Y| = \sqrt{G^2 + B^2}, \quad \varphi' = \arctan\left(\frac{B}{G}\right)
$$

根据电纳 $B$ 的正负判断电路性质：
*   **$B > 0$ ($\varphi' > 0$)**：电流超前电压，电路呈**容性**。
*   **$B < 0$ ($\varphi' < 0$)**：电流滞后电压，电路呈**感性**。
*   **$B = 0$ ($\varphi' = 0$)**：电流与电压同相，电路呈**阻性**。

### 4. 阻抗与导纳的等效互换
在实际电路分析中，经常需要将串联模型（阻抗 $Z=R+\mathrm{j}X$）与并联模型（导纳 $Y=G+\mathrm{j}B$）进行等效互换。
由 $Y = \frac{1}{Z}$ 可得：

$$
G + \mathrm{j}B = \frac{1}{R + \mathrm{j}X} = \frac{R - \mathrm{j}X}{R^2 + X^2} = \frac{R}{R^2 + X^2} + \mathrm{j}\frac{-X}{R^2 + X^2}
$$

由此得出**串联转并联**的等效条件：

$$
G = \frac{R}{R^2 + X^2}, \quad B = \frac{-X}{R^2 + X^2}
$$

:::derivation
**推导过程：**

已知串联模型阻抗 $Z = R + \mathrm{j}X$，求其等效并联模型导纳 $Y = G + \mathrm{j}B$。

由 $Y = \dfrac{1}{Z}$，对分母有理化：

$$Y = \frac{1}{R + \mathrm{j}X} = \frac{1}{R + \mathrm{j}X} \cdot \frac{R - \mathrm{j}X}{R - \mathrm{j}X} = \frac{R - \mathrm{j}X}{R^2 + X^2}$$

分开实部和虚部：

$$Y = \frac{R}{R^2 + X^2} + \mathrm{j}\frac{-X}{R^2 + X^2}$$

与 $Y = G + \mathrm{j}B$ 比较系数，得：

$$G = \frac{R}{R^2 + X^2}, \quad B = \frac{-X}{R^2 + X^2}$$

**关键点**：有理化的关键是分子分母同乘共轭复数 $R - \mathrm{j}X$，使分母变为实数 $R^2 + X^2 = |Z|^2$。注意一般情况下 $G \neq \dfrac{1}{R}$，仅当 $X = 0$（纯电阻）时两者相等。
:::

同理，由 $Z = \frac{1}{Y}$ 可得**并联转串联**的等效条件：

$$
R = \frac{G}{G^2 + B^2}, \quad X = \frac{-B}{G^2 + B^2}
$$

:::derivation
**推导过程：**

已知并联模型导纳 $Y = G + \mathrm{j}B$，求其等效串联模型阻抗 $Z = R + \mathrm{j}X$。

由 $Z = \dfrac{1}{Y}$，对分母有理化：

$$Z = \frac{1}{G + \mathrm{j}B} = \frac{1}{G + \mathrm{j}B} \cdot \frac{G - \mathrm{j}B}{G - \mathrm{j}B} = \frac{G - \mathrm{j}B}{G^2 + B^2}$$

分开实部和虚部：

$$Z = \frac{G}{G^2 + B^2} + \mathrm{j}\frac{-B}{G^2 + B^2}$$

与 $Z = R + \mathrm{j}X$ 比较系数，得：

$$R = \frac{G}{G^2 + B^2}, \quad X = \frac{-B}{G^2 + B^2}$$

**对称性**：此公式与串联转并联公式形式完全对称，只需将 $(R, X)$ 与 $(G, B)$ 对调即可。这是因为 $Z$ 与 $Y$ 互为倒数，有理化过程完全类似。
:::

*(注意：一般情况下 $G \neq \frac{1}{R}$，除非 $X=0$；$B \neq \frac{-1}{X}$，除非 $R=0$。)*

---

## 二、 阻抗与导纳的串联和并联

### 1. 串并联基本规则

*   **阻抗串联**：类似于电阻串联，等效阻抗为各阻抗之和。

$$
Z_{\mathrm{eq}} = Z_1 + Z_2 + \dots + Z_n
$$

**分压公式**：第 $k$ 个阻抗分得的电压为：

$$
\dot{U}_k = \frac{Z_k}{Z_{\mathrm{eq}}} \dot{U}
$$

:::derivation
**推导过程：**

$n$ 个阻抗串联，流过同一电流 $\dot{I}$。由欧姆定律的相量形式：

$$\dot{U}_k = Z_k \dot{I}$$

总电压为各阻抗电压之和：

$$\dot{U} = \sum_{i=1}^{n} Z_i \dot{I} = Z_{\mathrm{eq}} \dot{I}$$

因此 $\dot{I} = \dfrac{\dot{U}}{Z_{\mathrm{eq}}}$，代入第一式：

$$\dot{U}_k = Z_k \cdot \frac{\dot{U}}{Z_{\mathrm{eq}}} = \frac{Z_k}{Z_{\mathrm{eq}}} \dot{U}$$

**结论**：第 $k$ 个阻抗分得的电压与其阻抗成正比，这是直流分压公式在相量域的直接推广。
:::

*   **阻抗并联**：两个阻抗并联时，等效阻抗为：

$$
Z_{\mathrm{eq}} = \frac{Z_1 Z_2}{Z_1 + Z_2}
$$

:::derivation
**推导过程：**

两个阻抗并联，端口电压相同 $\dot{U}$。由 KCL：

$$\dot{I} = \dot{I}_1 + \dot{I}_2 = \frac{\dot{U}}{Z_1} + \frac{\dot{U}}{Z_2} = \left(\frac{1}{Z_1} + \frac{1}{Z_2}\right)\dot{U}$$

等效阻抗满足 $\dot{I} = \dfrac{\dot{U}}{Z_{\mathrm{eq}}}$，因此：

$$\frac{1}{Z_{\mathrm{eq}}} = \frac{1}{Z_1} + \frac{1}{Z_2} = \frac{Z_1 + Z_2}{Z_1 Z_2}$$

取倒数得：

$$Z_{\mathrm{eq}} = \frac{Z_1 Z_2}{Z_1 + Z_2}$$

**推广**：$n$ 个阻抗并联时，$\dfrac{1}{Z_{\mathrm{eq}}} = \displaystyle\sum_{i=1}^{n}\dfrac{1}{Z_i}$，即等效导纳等于各导纳之和。
:::

**分流公式**：

$$
\dot{I}_1 = \frac{Z_2}{Z_1 + Z_2} \dot{I}, \quad \dot{I}_2 = \frac{Z_1}{Z_1 + Z_2} \dot{I}
$$

:::derivation
**推导过程：**

两个阻抗并联，端口电压相同：$\dot{U} = Z_1 \dot{I}_1 = Z_2 \dot{I}_2$。

由 KCL：$\dot{I} = \dot{I}_1 + \dot{I}_2$，而 $\dot{I}_2 = \dfrac{Z_1}{Z_2}\dot{I}_1$，代入得：

$$\dot{I} = \dot{I}_1 + \frac{Z_1}{Z_2}\dot{I}_1 = \frac{Z_1 + Z_2}{Z_2}\dot{I}_1$$

因此：

$$\dot{I}_1 = \frac{Z_2}{Z_1 + Z_2} \dot{I}$$

同理可得：

$$\dot{I}_2 = \frac{Z_1}{Z_1 + Z_2} \dot{I}$$

**结论**：并联分流时，某支路分得的电流与**另一支路**的阻抗成正比（即"谁阻抗大，对方分得的电流就大"），这与直觉一致——阻抗小的支路对电流的"吸引力"更大。
:::

*   **导纳并联**：类似于电导并联，等效导纳为各导纳之和。

$$
Y_{\mathrm{eq}} = Y_1 + Y_2 + \dots + Y_n
$$

### 2. 典型例题解析

#### 例1：导纳的串并联计算
已知三个导纳分别为 $Y_1 = (8+\mathrm{j}6)\,\mathrm{S}$， $Y_2 = (3-\mathrm{j}4)\,\mathrm{S}$， $Y_3 = (9+\mathrm{j}18)\,\mathrm{S}$。求它们的并联等效导纳和串联等效导纳。

**解：**

1. **并联等效导纳**：

$$
Y_p = Y_1 + Y_2 + Y_3 = (8+3+9) + \mathrm{j}(6-4+18) = 20 + \mathrm{j}20 \,\mathrm{S}
$$

化为极坐标形式：

$$
Y_p = 20\sqrt{2} \angle 45^\circ \,\mathrm{S}
$$

2. **串联等效导纳**：
先求串联等效阻抗 $Z_s = Z_1 + Z_2 + Z_3 = \frac{1}{Y_1} + \frac{1}{Y_2} + \frac{1}{Y_3}$。

$$
Z_1 = \frac{1}{8+\mathrm{j}6} = \frac{8-\mathrm{j}6}{100} = 0.08 - \mathrm{j}0.06 \,\Omega
$$

$$
Z_2 = \frac{1}{3-\mathrm{j}4} = \frac{3+\mathrm{j}4}{25} = 0.12 + \mathrm{j}0.16 \,\Omega
$$

$$
Z_3 = \frac{1}{9+\mathrm{j}18} = \frac{9-\mathrm{j}18}{9^2+18^2} = \frac{9-\mathrm{j}18}{405} \approx 0.022 - \mathrm{j}0.044 \,\Omega
$$

$$
Z_s = (0.08+0.12+0.022) + \mathrm{j}(-0.06+0.16-0.044) = 0.222 + \mathrm{j}0.056 \,\Omega
$$

串联等效导纳：

$$
Y_s = \frac{1}{Z_s} = \frac{1}{0.222 + \mathrm{j}0.056} \approx 4.13 - \mathrm{j}1.04 \,\mathrm{S}
$$

#### 例2：RC并联电路的相位差
在正弦交流电路中，电阻 $R$ 与电容 $C$ 并联，求端口电压 $\dot{U}$ 超前端口电流 $\dot{I}$ 的角度 $\varphi$。

**解：**

并联电路求导纳更为简便：

$$
Y = \frac{1}{R} + \mathrm{j}\omega C = G + \mathrm{j}B
$$

导纳角 $\varphi_Y = \arctan\left(\frac{\omega C}{1/R}\right) = \arctan(\omega CR)$。
由于阻抗角 $\varphi_Z = -\varphi_Y$，且阻抗角即为电压超前电流的角度，故：

$$
\varphi = -\arctan(\omega CR)
$$

:::derivation
**推导过程：**

RC并联电路中，电阻支路电流 $\dot{I}_R = \dfrac{\dot{U}}{R}$ 与电压同相，电容支路电流 $\dot{I}_C = \mathrm{j}\omega C\dot{U}$ 超前电压 $90^\circ$。

总电流：

$$\dot{I} = \dot{I}_R + \dot{I}_C = \left(\frac{1}{R} + \mathrm{j}\omega C\right)\dot{U}$$

导纳为 $Y = \dfrac{1}{R} + \mathrm{j}\omega C = G + \mathrm{j}B$，导纳角（即电流超前电压的角度）：

$$\varphi' = \arctan\left(\frac{B}{G}\right) = \arctan\left(\frac{\omega C}{1/R}\right) = \arctan(\omega CR)$$

由于阻抗角 $\varphi = -\varphi'$（阻抗与导纳互为倒数，辐角相反），且阻抗角即为电压超前电流的角度：

$$\varphi = -\arctan(\omega CR)$$

**物理意义**：负号表示电压滞后于电流，电路呈容性。当 $\omega CR \to 0$（低频或 $C$ 很小）时 $\varphi \to 0$，电路接近纯阻性；当 $\omega CR \to \infty$（高频）时 $\varphi \to -90^\circ$，电路接近纯容性。
:::

*(负号表示电压实际上滞后于电流，电路呈容性)*

---

## 三、 RLC串联电路分析

### 1. 等效阻抗与相量图
在RLC串联电路中，根据KVL定律：

$$
\dot{U} = \dot{U}_R + \dot{U}_L + \dot{U}_C = R\dot{I} + \mathrm{j}X_L\dot{I} - \mathrm{j}X_C\dot{I} = [R + \mathrm{j}(X_L - X_C)]\dot{I}
$$

:::derivation
**推导过程：**

RLC串联电路中，流过三个元件的电流 $\dot{I}$ 相同。由 KVL：

$$\dot{U} = \dot{U}_R + \dot{U}_L + \dot{U}_C$$

分别代入各元件的伏安关系：
- 电阻：$\dot{U}_R = R\dot{I}$（与电流同相）
- 电感：$\dot{U}_L = \mathrm{j}X_L\dot{I}$（超前电流 $90^\circ$）
- 电容：$\dot{U}_C = -\mathrm{j}X_C\dot{I}$（滞后电流 $90^\circ$）

代入 KVL 方程：

$$\dot{U} = R\dot{I} + \mathrm{j}X_L\dot{I} - \mathrm{j}X_C\dot{I} = [R + \mathrm{j}(X_L - X_C)]\dot{I}$$

因此等效阻抗为 $Z = R + \mathrm{j}(X_L - X_C)$。

**关键点**：电感电压和电容电压相位恰好相差 $180^\circ$（反向），因此等效电抗 $X = X_L - X_C$ 是两者之差而非之和。当 $X_L = X_C$ 时 $X = 0$，电路呈阻性，即发生**串联谐振**。
:::

因此，等效阻抗为：

$$
Z = R + \mathrm{j}(X_L - X_C) = R + \mathrm{j}X
$$

*   当 $X_L > X_C$ 时，$X > 0$，电路呈**感性**。
*   当 $X_L < X_C$ 时，$X < 0$，电路呈**容性**。
*   当 $X_L = X_C$ 时，$X = 0$，电路呈**阻性**（串联谐振）。

**电压三角形与有效值关系：**
由于各元件电压存在相位差，**总电压有效值不等于各元件电压有效值的代数和**。以电流 $\dot{I}$ 为参考相量（设初相为0），作相量图可得电压直角三角形，由勾股定理得：

$$
U = \sqrt{U_R^2 + (U_L - U_C)^2}
$$

:::derivation
**推导过程（电压三角形）：**

以电流 $\dot{I}$ 为参考相量（设初相为 $0^\circ$），则各元件电压相量为：
- $\dot{U}_R = RI\angle 0^\circ$（与 $\dot{I}$ 同相，沿实轴正方向）
- $\dot{U}_L = X_L I\angle 90^\circ$（超前 $\dot{I}$ $90^\circ$，沿虚轴正方向）
- $\dot{U}_C = X_C I\angle(-90^\circ)$（滞后 $\dot{I}$ $90^\circ$，沿虚轴负方向）

总电压相量：

$$\dot{U} = \dot{U}_R + \dot{U}_L + \dot{U}_C = U_R + \mathrm{j}(U_L - U_C)$$

由于 $\dot{U}_L$ 和 $\dot{U}_C$ 方向相反（均在虚轴上但方向相反），合成后虚部分量为 $(U_L - U_C)$。

求电压有效值（即相量的模）：

$$U = |\dot{U}| = \sqrt{U_R^2 + (U_L - U_C)^2}$$

**图解说明**：$U_R$（水平）、$(U_L - U_C)$（垂直）和 $U$（斜边）构成直角三角形，称为**电压三角形**。电压超前电流的相位角 $\varphi = \arctan\dfrac{U_L - U_C}{U_R}$。
:::

### 2. 典型例题解析

#### 例3：RLC串联电压表读数
已知RLC串联电路中，测得电阻、电感、电容的电压有效值分别为 $U_R=2\,\mathrm{V}$，$U_L=3\,\mathrm{V}$，$U_C=4\,\mathrm{V}$。求总电压有效值 $U$。

**解：**

根据有效值关系公式：

$$
U = \sqrt{U_R^2 + (U_L - U_C)^2} = \sqrt{2^2 + (3 - 4)^2} = \sqrt{4 + (-1)^2} = \sqrt{5} \approx 2.236 \,\mathrm{V}
$$

*(注意：切忌直接将 $2+3+4=9\,\mathrm{V}$，必须考虑相位正交关系。)*

#### 例4：复杂串联电路的相量图法求解
已知电路中 $R=30\,\Omega$ 与 $X_{L1}=40\,\Omega$ 串联（记为AB段），再与未知电感 $X_{L2}$ 串联（记为BC段）。已知 $U_{AB}=50\,\mathrm{V}$，总电压 $U_{AC}=78\,\mathrm{V}$，求 $U_{BC}$。

**解：**

1. **分析AB段**：$Z_{AB} = 30 + \mathrm{j}40 \,\Omega$，模 $|Z_{AB}| = \sqrt{30^2+40^2} = 50 \,\Omega$。
电路电流有效值：

$$
I = \frac{U_{AB}}{|Z_{AB}|} = \frac{50}{50} = 1 \,\mathrm{A}
$$

2. **分析AC段**：总阻抗 $Z_{AC} = R + \mathrm{j}(X_{L1} + X_{L2}) = 30 + \mathrm{j}(40 + X_{L2})$。
总电压有效值：

$$
U_{AC} = I \cdot |Z_{AC}| = 1 \times \sqrt{30^2 + (40 + X_{L2})^2} = 78 \,\mathrm{V}
$$

3. **求解未知量**：

$$
30^2 + (40 + X_{L2})^2 = 78^2
$$

$$
900 + (40 + X_{L2})^2 = 6084
$$

$$
(40 + X_{L2})^2 = 5184
$$

$$
40 + X_{L2} = 72 \implies X_{L2} = 32 \,\Omega
$$

4. **计算目标电压**：

$$
U_{BC} = I \cdot X_{L2} = 1 \times 32 = 32 \,\mathrm{V}
$$

---

## 四、 RLC并联电路分析

### 1. 等效导纳与相量图
在RLC并联电路中，各元件两端电压相同，根据KCL定律：

$$
\dot{I} = \dot{I}_R + \dot{I}_L + \dot{I}_C = \frac{\dot{U}}{R} + \frac{\dot{U}}{\mathrm{j}X_L} + \frac{\dot{U}}{-\mathrm{j}X_C} = \left[ \frac{1}{R} + \mathrm{j}\left(\omega C - \frac{1}{\omega L}\right) \right] \dot{U}
$$

:::derivation
**推导过程：**

RLC并联电路中，三个元件两端电压相同 $\dot{U}$。由 KCL：

$$\dot{I} = \dot{I}_R + \dot{I}_L + \dot{I}_C$$

分别代入各元件的相量伏安关系：
- 电阻支路：$\dot{I}_R = \dfrac{\dot{U}}{R} = G\dot{U}$（与电压同相）
- 电感支路：$\dot{I}_L = \dfrac{\dot{U}}{\mathrm{j}X_L} = \dfrac{\dot{U}}{\mathrm{j}\omega L} = -\mathrm{j}\dfrac{1}{\omega L}\dot{U} = -\mathrm{j}B_L\dot{U}$（滞后电压 $90^\circ$）
- 电容支路：$\dot{I}_C = \dfrac{\dot{U}}{-\mathrm{j}X_C} = \mathrm{j}\omega C\dot{U} = \mathrm{j}B_C\dot{U}$（超前电压 $90^\circ$）

代入 KCL 方程：

$$\dot{I} = G\dot{U} - \mathrm{j}B_L\dot{U} + \mathrm{j}B_C\dot{U} = [G + \mathrm{j}(B_C - B_L)]\dot{U}$$

因此等效导纳为 $Y = G + \mathrm{j}(B_C - B_L)$。

**关键点**：电感电流滞后电压 $90^\circ$（沿负虚轴），电容电流超前电压 $90^\circ$（沿正虚轴），两者方向相反。当 $B_C = B_L$（即 $\omega C = \dfrac{1}{\omega L}$）时，电路呈阻性，发生**并联谐振**。
:::

因此，等效导纳为：

$$
Y = G + \mathrm{j}(B_C - B_L) = G + \mathrm{j}B
$$

*   当 $B_C > B_L$ 时，$B > 0$，电路呈**容性**。
*   当 $B_C < B_L$ 时，$B < 0$，电路呈**感性**。

**电流三角形与有效值关系：**
以电压 $\dot{U}$ 为参考相量，作相量图可得电流直角三角形。总电流有效值与各支路电流有效值的关系为：

$$
I = \sqrt{I_R^2 + (I_C - I_L)^2}
$$

:::derivation
**推导过程（电流三角形）：**

以电压 $\dot{U}$ 为参考相量（设初相为 $0^\circ$），则各支路电流相量为：
- $\dot{I}_R = \dfrac{U}{R}\angle 0^\circ$（与 $\dot{U}$ 同相，沿实轴正方向）
- $\dot{I}_L = \dfrac{U}{X_L}\angle(-90^\circ)$（滞后 $\dot{U}$ $90^\circ$，沿虚轴负方向）
- $\dot{I}_C = \omega C U\angle 90^\circ$（超前 $\dot{U}$ $90^\circ$，沿虚轴正方向）

总电流相量：

$$\dot{I} = \dot{I}_R + \dot{I}_L + \dot{I}_C = I_R + \mathrm{j}(I_C - I_L)$$

由于 $\dot{I}_L$ 和 $\dot{I}_C$ 方向相反（均在虚轴上但反向），合成后虚部分量为 $(I_C - I_L)$。

求电流有效值（即相量的模）：

$$I = |\dot{I}| = \sqrt{I_R^2 + (I_C - I_L)^2}$$

**图解说明**：$I_R$（水平）、$(I_C - I_L)$（垂直）和 $I$（斜边）构成直角三角形，称为**电流三角形**。这是电压三角形的对偶形式。导纳角 $\varphi' = \arctan\dfrac{I_C - I_L}{I_R}$，电流超前电压的相位角即为 $\varphi'$。
:::

*(同样，总电流有效值不等于各支路电流有效值的直接代数和。)*

---

## 总结

1. **频域分析核心**：引入复数阻抗 $Z$ 和导纳 $Y$ 后，直流电路中的所有网络定理（如KVL、KCL、分压分流、戴维南定理等）均可直接以相量形式应用于正弦交流电路。
2. **相位与有效值**：交流电路的叠加必须遵循**相量加法**（平行四边形法则或复数运算），有效值的叠加必须借助**相量图构成的几何三角形（勾股定理）** 进行计算，切忌直接进行标量代数相加。
3. **电路性质判定**：无论是串联看阻抗虚部 $X$，还是并联看导纳虚部 $B$，其本质都是判断端口电压与电流的相位差（阻抗角 $\varphi$），从而确定电路对外呈现感性、容性还是阻性。
