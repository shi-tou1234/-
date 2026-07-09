---
title: 动态元件与奇异函数详解
pubDate: 2026-04-18T05:47:00.000Z
updatedDate: 2026-04-18T05:48:41.919Z
draft: false
description: 
category: 电路
slugId: 动态元件与奇异函数详解
---

# 电路理论核心笔记：

> 📖 本文基于《动态元件和动态电路导论》第5.1、5.2、5.4节深度整理。系统梳理电容/电感的定义、伏安特性、连续性、储能机制，以及单位阶跃/冲激函数的数学定义、波形合成与在动态电路中的物理应用。适用于电路理论复习、考研笔记与技术博客发布。

---

## 📦 一、 电容元件 (Capacitor)

### 1. 定义与库伏特性
- **物理本质**：储存电场能量的二端理想元件。极板上聚集的电荷量 $q(t)$ 与端电压 $u(t)$ 的关系决定了其特性。
- **线性非时变电容**：$q(t)$ 与 $u(t)$ 呈正比，且比例系数不随时间变化。
  $$ q(t) = C u(t) \quad \text{或} \quad u(t) = \frac{q(t)}{C} $$
- **参数意义**：$C$ 称为电容值，在 $q-u$ 平面上表现为**库伏特性曲线的斜率**。$C>0$ 为常数，与 $q,u$ 无关。
- **单位换算**：法拉(F)过大，工程常用 $\mu\text{F}(10^{-6}\text{F})$、$\text{pF}(10^{-12}\text{F})$。

### 2. 伏安关系 (V-I Characteristics)
电容是**动态元件**，其端口电流与电压的变化率直接相关。
| 形式 | 公式 | 物理意义与推论 |
|---|---|---|
| **微分形式** | $i(t) = C \dfrac{\mathrm{d}u(t)}{\mathrm{d}t}$ | 电流大小取决于电压的**瞬时变化速率**。直流稳态时 $\frac{\mathrm{d}u}{\mathrm{d}t}=0 \Rightarrow i=0$，故电容**隔直通交**，直流下等效为**开路**。 |
| **积分形式** | $u(t) = u(t_0) + \dfrac{1}{C} \displaystyle\int_{t_0}^{t} i(\tau) \mathrm{d}\tau$ | 任意时刻电压由两部分组成：<br>① $u(t_0)$：$t_0$ 时刻已存在的电压（历史状态）<br>② $\frac{1}{C}\int i \mathrm{d}\tau$：$t_0$ 之后电流累积产生的新电压。<br>📌 **记忆性**：电容电压“记住”了过去所有电流的作用。 |

:::derivation
**电容积分形式伏安关系 $u(t) = u(t_0) + \frac{1}{C}\int_{t_0}^{t} i(\tau) \mathrm{d}\tau$ 的推导**：

从电容的微分形式伏安关系出发：

$$i(t) = C \frac{\mathrm{d}u(t)}{\mathrm{d}t}$$

两边同除以 $C$ 得到电压的微分：

$$\frac{\mathrm{d}u(t)}{\mathrm{d}t} = \frac{1}{C} i(t)$$

对上式在区间 $[t_0, t]$ 上积分：

$$\int_{t_0}^{t} \frac{\mathrm{d}u(\tau)}{\mathrm{d}\tau} \mathrm{d}\tau = \frac{1}{C} \int_{t_0}^{t} i(\tau) \mathrm{d}\tau$$

左端由牛顿-莱布尼茨公式得 $u(t) - u(t_0)$，故：

$$u(t) - u(t_0) = \frac{1}{C} \int_{t_0}^{t} i(\tau) \mathrm{d}\tau$$

移项即得：

$$u(t) = u(t_0) + \frac{1}{C} \int_{t_0}^{t} i(\tau) \mathrm{d}\tau$$

该式表明电容电压是电流的**积分函数**，具有**记忆性**：当前电压不仅取决于当前电流，还与历史电流的累积（初始电压 $u(t_0)$）有关。这正是电容作为"动态元件"与电阻（无记忆）的本质区别。
:::

### 3. 核心性质与等效模型
- **电压连续性**：若电容电流 $i(t)$ 在区间内为**有限值**，则电容电压 $u(t)$ 必为连续函数，**不能发生跃变**。即 $u(0^-) = u(0^+)$。电压跃变必然伴随无穷大电流。

:::derivation
**电容电压连续性 $u(0^-) = u(0^+)$ 的推导**：

由电容积分形式伏安关系，取 $t_0 = 0^-$、$t = 0^+$：

$$u(0^+) = u(0^-) + \frac{1}{C} \int_{0^-}^{0^+} i(\tau) \mathrm{d}\tau$$

若电流 $i(t)$ 在 $[0^-, 0^+]$ 区间内为**有限值**，则积分区间长度 $\Delta t = 0^+ - 0^- \to 0$，故：

$$\left| \int_{0^-}^{0^+} i(\tau) \mathrm{d}\tau \right| \leq |i|_{\max} \cdot \Delta t \to 0$$

因此：

$$u(0^+) = u(0^-) + 0 = u(0^-)$$

即电容电压**不能跃变**。反之，若要使 $u(0^+) \neq u(0^-)$（电压发生有限跳变 $\Delta u$），则必须：

$$\int_{0^-}^{0^+} i(\tau) \mathrm{d}\tau = C \cdot \Delta u \neq 0$$

在零宽度区间内积分为非零有限值，要求电流 $i(t)$ 为**无穷大**（即冲激电流）。这就是"电压跃变必然伴随无穷大电流"的数学解释，也是换路定则的理论基础。
:::
- **初始状态等效**：具有初始电压 $u(0)$ 的电容，在 $t \ge 0$ 的电路分析中，可等效为：
  > 🔌 一个值为 $u(0)$ 的理想电压源 **串联** 一个初始电压为零的同值电容。
  > *此等效模型是求解换路后动态电路初始值的关键工具。*

### 4. 功率与储能分析
- **瞬时功率**：$p(t) = u(t)i(t)$（关联参考方向下，$p>0$ 吸收，$p<0$ 释放）
- **储能公式**：
  $$ w_C(t) = \frac{1}{2} C u^2(t) $$

:::derivation
**电容储能公式 $w_C(t) = \frac{1}{2} C u^2(t)$ 的推导**：

电容吸收的瞬时功率为 $p(t) = u(t) \cdot i(t)$。设 $t = -\infty$ 时电容电压为零（初始无储能），从 $-\infty$ 到 $t$ 对功率积分即得电容储存的电场能量：

$$w_C(t) = \int_{-\infty}^{t} p(\tau) \mathrm{d}\tau = \int_{-\infty}^{t} u(\tau) \cdot i(\tau) \mathrm{d}\tau$$

代入电容微分关系 $i(\tau) = C \frac{\mathrm{d}u(\tau)}{\mathrm{d}\tau}$：

$$w_C(t) = \int_{-\infty}^{t} u(\tau) \cdot C \frac{\mathrm{d}u(\tau)}{\mathrm{d}\tau} \mathrm{d}\tau = C \int_{-\infty}^{t} u(\tau) \mathrm{d}u(\tau)$$

作变量替换（令 $x = u(\tau)$，当 $\tau = -\infty$ 时 $x = 0$；当 $\tau = t$ 时 $x = u(t)$）：

$$w_C(t) = C \int_{0}^{u(t)} x \mathrm{d}x = C \left[ \frac{1}{2} x^2 \right]_{0}^{u(t)} = \frac{1}{2} C u^2(t)$$

故：

$$w_C(t) = \frac{1}{2} C u^2(t)$$

该结果说明：
- 储能仅取决于**当前电压**（状态变量），与电流及历史过程无关（无损耗特性）；
- 由于 $C > 0$，恒有 $w_C(t) \geq 0$，故电容为**无源元件**；
- 充电时 $|u|$ 增大、$w_C$ 增加（吸收能量）；放电时 $|u|$ 减小、$w_C$ 减小（释放能量），所释放的能量恰好等于此前吸收的能量，体现电容的**储能吞吐**特性。
:::
- **能量特性**：
  - $w_C(t) \ge 0$，电容本身**不产生能量**，仅从外电路吸收电能转化为电场能储存，或释放回电路。故为**无源元件**。
  - $|u(t)|$ 增大 $\Rightarrow$ 充电（储能增加）；$|u(t)|$ 减小 $\Rightarrow$ 放电（释放储能）。

---

## 🧲 二、 电感元件 (Inductor)

### 1. 定义与韦安特性
- **物理本质**：储存磁场能量的二端理想元件。线圈电流 $i(t)$ 与交链磁通链 $\Psi(t)$ 的关系决定其特性。
- **线性非时变电感**：$\Psi(t)$ 与 $i(t)$ 呈正比，比例系数恒定。
  $$ \Psi(t) = L i(t) \quad \text{或} \quad i(t) = \frac{\Psi(t)}{L} $$
- **参数意义**：$L$ 称为电感值，在 $\Psi-i$ 平面上表现为**韦安特性曲线的斜率**。反映线圈通过电流产生磁通链的能力。
- **单位换算**：亨利(H)，常用 $\text{mH}(10^{-3}\text{H})$、$\mu\text{H}(10^{-6}\text{H})$。

### 2. 伏安关系 (V-I Characteristics)
| 形式 | 公式 | 物理意义与推论 |
|---|---|---|
| **微分形式** | $u(t) = L \dfrac{\mathrm{d}i(t)}{\mathrm{d}t}$ | 电压大小取决于电流的**瞬时变化速率**。直流稳态时 $\frac{\mathrm{d}i}{\mathrm{d}t}=0 \Rightarrow u=0$，故电感**通直阻交**，直流下等效为**短路**。 |
| **积分形式** | $i(t) = i(t_0) + \dfrac{1}{L} \displaystyle\int_{t_0}^{t} u(\tau) \mathrm{d}\tau$ | 任意时刻电流由历史电流 $i(t_0)$ 与后续电压积分共同决定。同样具有**记忆性**。 |

:::derivation
**电感积分形式伏安关系 $i(t) = i(t_0) + \frac{1}{L}\int_{t_0}^{t} u(\tau) \mathrm{d}\tau$ 的推导**：

从电感的微分形式伏安关系出发：

$$u(t) = L \frac{\mathrm{d}i(t)}{\mathrm{d}t}$$

两边同除以 $L$：

$$\frac{\mathrm{d}i(t)}{\mathrm{d}t} = \frac{1}{L} u(t)$$

在区间 $[t_0, t]$ 上积分：

$$\int_{t_0}^{t} \frac{\mathrm{d}i(\tau)}{\mathrm{d}\tau} \mathrm{d}\tau = \frac{1}{L} \int_{t_0}^{t} u(\tau) \mathrm{d}\tau$$

左端由牛顿-莱布尼茨公式得 $i(t) - i(t_0)$，故：

$$i(t) - i(t_0) = \frac{1}{L} \int_{t_0}^{t} u(\tau) \mathrm{d}\tau$$

移项即得：

$$i(t) = i(t_0) + \frac{1}{L} \int_{t_0}^{t} u(\tau) \mathrm{d}\tau$$

该式与电容积分形式完全**对偶**（$u \leftrightarrow i$，$C \leftrightarrow L$），表明电感电流是电压的积分函数，具有**记忆性**：当前电流取决于历史电流 $i(t_0)$ 与后续电压的累积。
:::

### 3. 核心性质与等效模型
- **电流连续性**：若电感电压 $u(t)$ 为**有限值**，则电感电流 $i(t)$ 必连续，**不能发生跃变**。即 $i(0^-) = i(0^+)$。电流跃变必然伴随无穷大电压。

:::derivation
**电感电流连续性 $i(0^-) = i(0^+)$ 的推导**：

由电感积分形式伏安关系，取 $t_0 = 0^-$、$t = 0^+$：

$$i(0^+) = i(0^-) + \frac{1}{L} \int_{0^-}^{0^+} u(\tau) \mathrm{d}\tau$$

若电压 $u(t)$ 在 $[0^-, 0^+]$ 区间内为**有限值**，则积分区间长度 $\Delta t \to 0$，故：

$$\left| \int_{0^-}^{0^+} u(\tau) \mathrm{d}\tau \right| \leq |u|_{\max} \cdot \Delta t \to 0$$

因此：

$$i(0^+) = i(0^-) + 0 = i(0^-)$$

即电感电流**不能跃变**。反之，若要使 $i(0^+) \neq i(0^-)$（电流发生有限跳变 $\Delta i$），则必须：

$$\int_{0^-}^{0^+} u(\tau) \mathrm{d}\tau = L \cdot \Delta i \neq 0$$

在零宽度区间内积分为非零有限值，要求电压 $u(t)$ 为**无穷大**（即冲激电压）。这就是"电流跃变必然伴随无穷大电压"的数学解释。

该结论与电容电压连续性完全**对偶**：电容保证电压连续（有限电流下），电感保证电流连续（有限电压下），二者共同构成**换路定则**：

$$u_C(0^+) = u_C(0^-), \quad i_L(0^+) = i_L(0^-)$$
:::
- **初始状态等效**：具有初始电流 $i(0)$ 的电感，在 $t \ge 0$ 的电路分析中，可等效为：
  > 🔌 一个值为 $i(0)$ 的理想电流源 **并联** 一个初始电流为零的同值电感。

### 4. 功率与储能分析
- **瞬时功率**：$p(t) = u(t)i(t)$
- **储能公式**：
  $$ w_L(t) = \frac{1}{2} L i^2(t) $$

:::derivation
**电感储能公式 $w_L(t) = \frac{1}{2} L i^2(t)$ 的推导**：

电感吸收的瞬时功率为 $p(t) = u(t) \cdot i(t)$。设 $t = -\infty$ 时电感电流为零（初始无储能），从 $-\infty$ 到 $t$ 对功率积分即得电感储存的磁场能量：

$$w_L(t) = \int_{-\infty}^{t} p(\tau) \mathrm{d}\tau = \int_{-\infty}^{t} u(\tau) \cdot i(\tau) \mathrm{d}\tau$$

代入电感微分关系 $u(\tau) = L \frac{\mathrm{d}i(\tau)}{\mathrm{d}\tau}$：

$$w_L(t) = \int_{-\infty}^{t} L \frac{\mathrm{d}i(\tau)}{\mathrm{d}\tau} \cdot i(\tau) \mathrm{d}\tau = L \int_{-\infty}^{t} i(\tau) \mathrm{d}i(\tau)$$

作变量替换（令 $x = i(\tau)$，当 $\tau = -\infty$ 时 $x = 0$；当 $\tau = t$ 时 $x = i(t)$）：

$$w_L(t) = L \int_{0}^{i(t)} x \mathrm{d}x = L \left[ \frac{1}{2} x^2 \right]_{0}^{i(t)} = \frac{1}{2} L i^2(t)$$

故：

$$w_L(t) = \frac{1}{2} L i^2(t)$$

该结果与电容储能公式 $w_C = \frac{1}{2} C u^2$ 完全**对偶**（$u \leftrightarrow i$，$C \leftrightarrow L$）。由于 $L > 0$，恒有 $w_L(t) \geq 0$，故电感为**无源元件**；电流绝对值增大时吸收磁场能，减小时释放磁场能，且释放量恰好等于此前吸收量，体现电感的**储能吞吐**特性（不耗能）。
:::
- **能量特性**：$w_L(t) \ge 0$，为**无源、动态、记忆、储能元件**。电流绝对值增大时吸收磁场能，减小时释放磁场能。电感本身不发出能量，仅进行能量吞吐。

---

## 📈 三、 奇异函数：阶跃与冲激

> 💡 **奇异函数定义**：函数本身存在不连续点，或其导数/积分存在不连续点的函数。在暂态电路分析中用于描述开关动作与理想脉冲。

### 1. 单位阶跃函数 $\varepsilon(t)$
- **数学定义**（海维赛德提出）：
  $$ \varepsilon(t) = \begin{cases} 0, & t < 0 \\ 1, & t > 0 \end{cases} $$
  *注：$t=0$ 处无定义，左极限为0，右极限为1，发生瞬时跃变。*
- **时移特性**：
  - 延迟阶跃：$\varepsilon(t-t_0) \quad (t_0>0)$，波形向右平移 $t_0$
  - 提前阶跃：$\varepsilon(t+t_0) \quad (t_0>0)$，波形向左平移 $t_0$
- **波形合成应用**：
  - **矩形脉冲**：$G(t) = \varepsilon(t) - \varepsilon(t-t_0)$，幅值1，宽度 $t_0$
  - **任意区间脉冲**：$k[\varepsilon(t-t_1) - \varepsilon(t-t_2)]$，幅值 $k$，宽度 $t_2-t_1$
  - **锯齿/分段波形**：$u(t)=Bt[\varepsilon(t)-\varepsilon(t-t_0)]$

:::derivation
**矩形脉冲 $G(t) = \varepsilon(t) - \varepsilon(t-t_0)$ 的合成推导**：

利用单位阶跃函数 $\varepsilon(t)$ 在 $t>0$ 时为 1、$t<0$ 时为 0 的特性，构造两个延迟不同的阶跃之差：

- $\varepsilon(t)$：在 $t=0$ 处由 0 跃变到 1（"开启"信号）；
- $\varepsilon(t-t_0)$：在 $t=t_0$ 处由 0 跃变到 1（"关闭"信号）。

二者相减：

$$G(t) = \varepsilon(t) - \varepsilon(t-t_0)$$

分段讨论：

$$G(t) = \begin{cases} 0 - 0 = 0, & t < 0 \\ 1 - 0 = 1, & 0 < t < t_0 \\ 1 - 1 = 0, & t > t_0 \end{cases}$$

故 $G(t)$ 为幅值 1、宽度 $t_0$ 的**矩形脉冲**。推广至一般形式 $k[\varepsilon(t-t_1) - \varepsilon(t-t_2)]$（$t_2 > t_1$）：

$$k[\varepsilon(t-t_1) - \varepsilon(t-t_2)] = \begin{cases} 0, & t < t_1 \\ k, & t_1 < t < t_2 \\ 0, & t > t_2 \end{cases}$$

即幅值 $k$、宽度 $t_2 - t_1$ 的任意区间脉冲。该方法可将任意**分段常数信号**分解为若干阶跃函数的线性组合，是动态电路分段激励分析的标准工具。
:::

- **电路意义**：完美模拟开关的突然闭合/断开。
  - 阶跃电压源：$U_0 \varepsilon(t)$
  - 阶跃电流源：$I_0 \varepsilon(t)$

### 2. 单位冲激函数 $\delta(t)$
- **数学定义**（狄拉克提出）：
  $$ \delta(t) = \begin{cases} 0, & t \neq 0 \\ \infty, & t = 0 \end{cases}, \quad \int_{-\infty}^{\infty} \delta(t) \mathrm{d}t = 1 $$
- **物理图像**：宽度 $\Delta \to 0$，高度 $1/\Delta \to \infty$，但**包围面积恒为1**的理想脉冲。波形用带箭头的竖线表示，旁标强度（面积）。
- **时移与强度缩放**：
  - 延迟冲激：$\delta(t-t_0)$，发生在 $t=t_0$
  - 强度为 $A$ 的冲激：$A\delta(t)$，面积为 $A$
  - 一般形式：$K\delta(t-t_0)$，强度/面积为 $K$

### 3. 阶跃与冲激的数学关系
$$ \varepsilon(t) = \int_{-\infty}^{t} \delta(\tau) \mathrm{d}\tau \quad \Longleftrightarrow \quad \delta(t) = \frac{\mathrm{d}\varepsilon(t)}{\mathrm{d}t} $$
*阶跃是冲激的积分，冲激是阶跃的导数。*

:::derivation
**阶跃与冲激关系 $\delta(t) = \frac{\mathrm{d}\varepsilon(t)}{\mathrm{d}t}$ 的推导**：

**方向一（冲激积分 → 阶跃）**：由冲激函数的**抽样性质**（筛选性质），对任意在 $t=0$ 处连续的函数 $f(t)$，有：

$$\int_{-\infty}^{\infty} f(\tau) \delta(\tau) \mathrm{d}\tau = f(0)$$

取 $f(\tau) = 1$（常数函数），得：

$$\int_{-\infty}^{t} \delta(\tau) \mathrm{d}\tau = \begin{cases} 0, & t < 0 \\ 1, & t > 0 \end{cases} = \varepsilon(t)$$

（当 $t < 0$ 时积分区间不含 $t=0$，结果为 0；当 $t > 0$ 时积分区间含 $t=0$，由抽样性质结果为 1。）

**方向二（阶跃求导 → 冲激）**：对 $\varepsilon(t)$ 求导。$\varepsilon(t)$ 在 $t \neq 0$ 处恒为常数（$t<0$ 时为 0，$t>0$ 时为 1），导数为 0；在 $t=0$ 处发生跃变（由 0 跃到 1），导数为无穷大。

构造窄脉冲逼近：设 $p_\Delta(t)$ 为宽度 $\Delta$、高度 $1/\Delta$（面积恒为 1）的矩形脉冲，则 $\varepsilon(t)$ 可看作 $\Delta \to 0$ 时 $p_\Delta(t)$ 积分的极限。由极限交换：

$$\frac{\mathrm{d}\varepsilon(t)}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t} \lim_{\Delta \to 0} \int_{-\infty}^{t} p_\Delta(\tau) \mathrm{d}\tau = \lim_{\Delta \to 0} p_\Delta(t) = \delta(t)$$

当 $\Delta \to 0$ 时，$p_\Delta(t)$ 宽度趋于零、高度趋于无穷、面积恒为 1，恰好满足冲激函数的定义。

故 $\varepsilon(t) = \int_{-\infty}^{t} \delta(\tau) \mathrm{d}\tau \;\Longleftrightarrow\; \delta(t) = \frac{\mathrm{d}\varepsilon(t)}{\mathrm{d}t}$，二者互为微积分逆运算关系。
:::

### 4. 在动态电路中的典型应用
当电路发生强制换路导致状态变量跃变时，冲激函数自然出现：
- **电容受阶跃电压激励**：$u_C(t) = U_S \varepsilon(t)$
  $$ i_C(t) = C \frac{\mathrm{d}u_C}{\mathrm{d}t} = C U_S \delta(t) $$

:::derivation
**冲激电流 $i_C(t) = C U_S \delta(t)$ 的推导**：

已知电容受阶跃电压激励 $u_C(t) = U_S \varepsilon(t)$，代入电容微分形式伏安关系 $i_C(t) = C \frac{\mathrm{d}u_C}{\mathrm{d}t}$：

$$i_C(t) = C \frac{\mathrm{d}}{\mathrm{d}t}\left[ U_S \varepsilon(t) \right]$$

由于 $U_S$ 为常数，可提取到求导符号外：

$$i_C(t) = C U_S \frac{\mathrm{d}\varepsilon(t)}{\mathrm{d}t}$$

利用阶跃与冲激的关系 $\frac{\mathrm{d}\varepsilon(t)}{\mathrm{d}t} = \delta(t)$，代入得：

$$i_C(t) = C U_S \delta(t)$$

**物理意义**：阶跃电压在 $t=0$ 瞬间使电容电压由 0 跃变到 $U_S$。由于电容电压发生了**跃变**（违反连续性），根据前述"电压跃变必然伴随无穷大电流"的结论，端口电流必为**冲激函数**——仅在 $t=0$ 瞬间为无穷大，其余时刻为零。冲激强度 $C U_S$ 由电容值 $C$ 和跳变幅度 $U_S$ 共同决定。
:::

  **物理结论**：电容电压发生阶跃跳变时，端口会产生**冲激电流**。该冲激电流在 $t=0$ 瞬间输送的电荷量为：
  $$ \Delta q = \int_{0^-}^{0^+} i_C(t) \mathrm{d}t = C U_S $$

:::derivation
**冲激电流输送电荷 $\Delta q = C U_S$ 的推导**：

将上一步求得的冲激电流 $i_C(t) = C U_S \delta(t)$ 代入电荷量积分定义：

$$\Delta q = \int_{0^-}^{0^+} i_C(t) \mathrm{d}t = \int_{0^-}^{0^+} C U_S \delta(t) \mathrm{d}t$$

提取常数 $C U_S$：

$$\Delta q = C U_S \int_{0^-}^{0^+} \delta(t) \mathrm{d}t$$

由冲激函数的归一性（积分区间包含 $t=0$ 时积分值为 1）：

$$\int_{0^-}^{0^+} \delta(t) \mathrm{d}t = 1$$

故：

$$\Delta q = C U_S \cdot 1 = C U_S$$

**物理验证**：由电容定义 $q = C u$，电压由 0 跃变到 $U_S$ 时，电荷变化量应为 $\Delta q = C \cdot \Delta u_C = C(U_S - 0) = C U_S$，与积分结果一致 ✓。

该结论说明：**冲激电流虽持续时间为零，但输送的电荷量为有限值 $C U_S$**，从而使电容电压发生有限跳变。这正是电容电压"跃变必然伴随冲激电流"的定量体现，也解释了为什么理想冲激能瞬间改变电容储能状态。
:::

  这说明：**有限的冲激电流可使电容电压发生有限跳变，极板电荷瞬时改变。**

---

## 📊 四、 电容与电感对偶性速查表

| 对比维度 | 电容元件 (C) | 电感元件 (L) | 对偶关系 |
|---|---|---|---|
| **储能形式** | 电场能 $w_C=\frac{1}{2}Cu^2$ | 磁场能 $w_L=\frac{1}{2}Li^2$ | $u \leftrightarrow i,\; C \leftrightarrow L$ |
| **约束变量** | 电压 $u(t)$ 连续（有限电流下） | 电流 $i(t)$ 连续（有限电压下） | 状态变量连续性 |
| **直流稳态** | 开路 ($i=0$) | 短路 ($u=0$) | 隔直 vs 通直 |
| **微分约束** | $i = C \dfrac{\mathrm{d}u}{\mathrm{d}t}$ | $u = L \dfrac{\mathrm{d}i}{\mathrm{d}t}$ | 互换 $u,i$ 与 $C,L$ |
| **积分约束** | $u(t)=u(t_0)+\frac{1}{C}\int i\mathrm{d}\tau$ | $i(t)=i(t_0)+\frac{1}{L}\int u\mathrm{d}\tau$ | 积分与微分对偶 |
| **初始等效** | 电压源 $u(0)$ **串联** 零初态电容 | 电流源 $i(0)$ **并联** 零初态电感 | 串并联对偶 |

:::derivation
**电容与电感对偶关系的推导**：

电容与电感在电路理论中构成**对偶对**，其根源在于电场与磁场的物理对称性。对偶变换规则为：

$$u \leftrightarrow i, \quad C \leftrightarrow L, \quad \text{串联} \leftrightarrow \text{并联}, \quad \text{开路} \leftrightarrow \text{短路}, \quad \text{电压源} \leftrightarrow \text{电流源}$$

**对偶性验证**（逐项推导）：

1. **定义对偶**：电容 $q = Cu$（电荷-电压），电感 $\Psi = Li$（磁链-电流）。将 $q \leftrightarrow \Psi$、$u \leftrightarrow i$、$C \leftrightarrow L$ 互换即得。

2. **伏安关系对偶**：电容微分形式 $i = C\frac{\mathrm{d}u}{\mathrm{d}t}$，作对偶替换 $i \to u$、$u \to i$、$C \to L$，得 $u = L\frac{\mathrm{d}i}{\mathrm{d}t}$，恰为电感微分形式 ✓。积分形式同理。

3. **连续性对偶**：电容电压连续（有限电流下），对偶替换得电感电流连续（有限电压下）✓。

4. **储能对偶**：$w_C = \frac{1}{2}Cu^2 \xrightarrow{对偶} w_L = \frac{1}{2}Li^2$ ✓。

5. **直流稳态对偶**：电容直流下 $\frac{\mathrm{d}u}{\mathrm{d}t}=0 \Rightarrow i=0$（开路），对偶得电感直流下 $\frac{\mathrm{d}i}{\mathrm{d}t}=0 \Rightarrow u=0$（短路）✓。

6. **初始等效对偶**：电容初始电压 $u(0)$ 等效为**电压源串联**零初态电容；作对偶替换（电压源→电流源，串联→并联）得电感初始电流 $i(0)$ 等效为**电流源并联**零初态电感 ✓。

**对偶原理的意义**：凡是已证明的电容电路定理、公式、分析方法，经对偶替换后即为电感电路的相应结论，无需重复推导。这是电路理论中**简化分析、统一框架**的核心原理之一。
:::

---

## 💡 五、 学习与应用建议
1. **换路分析核心**：求解动态电路 $t=0^+$ 初始值时，优先利用 **电容电压连续** 与 **电感电流连续** 性质（换路定则），再结合初始等效模型列写方程。
2. **奇异函数使用**：阶跃函数用于构建分段激励；冲激函数用于分析状态变量强制跃变时的瞬态过程（如开关动作极快、电容电压突变等场景）。
3. **公式记忆技巧**：电容看“电压”，电感看“电流”。微分关系中，谁求导谁就是激励，系数是自身参数；积分关系中，下限必须带初始状态，体现“记忆性”。


