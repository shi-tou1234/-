---
title: 电磁感应与电磁场
pubDate: 2026-06-15T15:16:00.000Z
updatedDate: 2026-06-15T15:17:26.377Z
draft: false
description: 
category: 学习笔记
categories:
  - 学习笔记
  - 大物
slugId: 电磁感应与电磁场
---

# 电磁感应与电磁场

> **导语**：本章是电磁学的核心章节之一，从法拉第电磁感应定律出发，系统介绍了电磁感应的基本现象、动生电动势与感生电动势的本质、自感和互感现象以及 RL 电路的暂态过程，最后延伸到磁场的能量和麦克斯韦电磁场方程组。本章内容连接了电磁学与电磁波理论，是后续学习电路分析、通信原理等课程的基础。

* * *

## 一、 电磁感应定律

### 1.1 电磁感应现象

**1. 法拉第的发现**

英国物理学家和化学家法拉第（Michael Faraday，1791—1867）是电磁理论的创始人之一。他创造性地提出了"场"的思想，最早引入磁场这一名称。1831 年，法拉第发现了**电磁感应现象**：当穿过闭合回路所围面积的磁通量发生变化时，回路中会产生感应电动势。

**2. 法拉第电磁感应定律**

当穿过闭合回路所围面积的磁通量发生变化时，回路中产生的感应电动势正比于磁通量对时间变化率的负值：

$$ \mathcal{E}_i = -\frac{d\Phi}{dt} $$

:::derivation
**推导过程：**

法拉第通过大量实验总结出：回路中感应电动势的大小与穿过回路的磁通量变化率成正比。

设 $t$ 时刻穿过回路的磁通量为 $\Phi(t)$，$t + dt$ 时刻为 $\Phi(t + dt)$，则 $dt$ 时间内磁通量变化：
$$ d\Phi = \Phi(t + dt) - \Phi(t) $$

实验表明感应电动势正比于 $\frac{d\Phi}{dt}$。由楞次定律，感应电流的方向总是反抗磁通量的变化，故取负号：
$$ \mathcal{E}_i = -\frac{d\Phi}{dt} $$

负号的物理意义：当磁通量增加（$d\Phi > 0$）时，$\mathcal{E}_i < 0$，感应电流的磁场反抗增加；当磁通量减少（$d\Phi < 0$）时，$\mathcal{E}_i > 0$，感应电流的磁场补偿减少。
:::

若闭合回路由 $N$ 匝密绕线圈组成，总磁通链数为 $N\Phi$，则：

$$ \mathcal{E}_i = -\frac{d(N\Phi)}{dt} = -N\frac{d\Phi}{dt} $$

:::derivation
**推导过程：**

对于 $N$ 匝密绕线圈，每匝线圈穿过的磁通量均为 $\Phi$（密绕条件下各匝磁通相同）。

总磁通链数（全磁通）为各匝磁通量之和：
$$ \Psi = N\Phi $$

将法拉第电磁感应定律推广到多匝线圈，感应电动势等于磁通链数的变化率：
$$ \mathcal{E}_i = -\frac{d\Psi}{dt} = -\frac{d(N\Phi)}{dt} $$

当 $N$ 为常数时：
$$ \mathcal{E}_i = -N\frac{d\Phi}{dt} $$

即 $N$ 匝线圈的感应电动势是单匝的 $N$ 倍。
:::

若闭合回路的电阻为 $R$，则感应电流为：

$$ I_i = \frac{\mathcal{E}_i}{R} = -\frac{1}{R}\frac{d\Phi}{dt} $$

### 1.2 楞次定律

**1. 定律内容**

闭合的导线回路中所出现的感应电流，总是使它自己所激发的磁场反抗任何引发电磁感应的原因（反抗相对运动、磁场变化或线圈变形等）。

**2. 判断感应电流方向的步骤**

1. 确定原磁场的方向
2. 判断磁通量的变化趋势（增加或减少）
3. 根据楞次定律，感应电流的磁场方向应**反抗**磁通量的变化（增加时反向，减少时同向）
4. 根据感应电流的磁场方向，用右手螺旋定则确定感应电流的方向

**3. 能量守恒的体现**

楞次定律是能量守恒定律的一种表现。维持滑杆运动必须外加一力，此过程为外力克服安培力做功，转化为焦耳热。

> **定理（完整的电磁感应定律）**法拉第电磁感应定律给出感应电动势的**大小**，楞次定律给出感应电动势的**方向**，二者结合构成完整的电磁感应定律：$$ \mathcal{E}_i = -\frac{d\Phi}{dt} $$式中的负号正是楞次定律的数学表达。

* * *

## 二、 动生电动势和感生电动势

引起磁通量变化的原因分为两类：

* **磁场不变，导体在磁场中运动** → 动生电动势
* **导体不动，磁场随时间变化** → 感生电动势

### 2.1 动生电动势

**1. 定义与本质**

在稳恒磁场中，由于导体的运动（切割磁感线）而产生的感应电动势称为**动生电动势**。其本质是**洛伦兹力**——导体内的自由电子随导体运动时受到洛伦兹力 $\boldsymbol{F}_m = -e(\boldsymbol{v} \times \boldsymbol{B})$ 的作用，从而产生定向移动。

动生电动势的一般公式为：

$$ \mathcal{E}_{ab} = \int_a^b (\boldsymbol{v} \times \boldsymbol{B}) \cdot d\boldsymbol{l} $$

:::derivation
**推导过程：**

导体在磁场中以速度 $\boldsymbol{v}$ 运动时，导体内的自由电荷 $q$ 随导体一起运动，受洛伦兹力：
$$ \boldsymbol{F}_m = q(\boldsymbol{v} \times \boldsymbol{B}) $$

该洛伦兹力即为非静电力，对应的非静电场强为：
$$ \boldsymbol{E}_k = \frac{\boldsymbol{F}_m}{q} = \boldsymbol{v} \times \boldsymbol{B} $$

由电动势的定义 $\mathcal{E} = \int \boldsymbol{E}_k \cdot d\boldsymbol{l}$，对导体从端点 $a$ 到端点 $b$ 积分：
$$ \mathcal{E}_{ab} = \int_a^b (\boldsymbol{v} \times \boldsymbol{B}) \cdot d\boldsymbol{l} $$

动生电动势的本质是洛伦兹力对电荷做功，将机械能转化为电能。
:::

对于长度为 $l$ 的直导线在均匀磁场中以速度 $v$ 垂直于磁场和导线方向运动时：

$$ \mathcal{E} = Blv $$

:::derivation
**推导过程：**

长度为 $l$ 的直导线在均匀磁场 $\boldsymbol{B}$ 中以速度 $\boldsymbol{v}$ 运动，且 $\boldsymbol{v} \perp \boldsymbol{B}$，$\boldsymbol{v} \perp \boldsymbol{l}$，$\boldsymbol{B} \perp \boldsymbol{l}$。

由动生电动势公式：
$$ \mathcal{E} = \int_0^l (\boldsymbol{v} \times \boldsymbol{B}) \cdot d\boldsymbol{l} $$

由于 $\boldsymbol{v} \times \boldsymbol{B}$ 的方向沿导线方向（即 $d\boldsymbol{l}$ 方向），大小为 $vB$，且各量均为常量：
$$ \mathcal{E} = vB \int_0^l dl = vBl = Blv $$
:::

> **注意**：动生电动势对应的是"切割磁感线"的过程，其方向可用**右手定则**判断——伸开右手，拇指与四指垂直，让磁感线穿入手心，拇指指向导体运动方向，四指指向感应电动势方向（从低电势指向高电势）。

#### 例题 1：法拉第圆盘发电机

**解：**

法拉第圆盘发电机是历史上第一台发电机。其结构为一铜质圆盘在均匀磁场中绕中心轴旋转，圆盘可视为无数根从中心到边缘的辐条。当圆盘转动时，每根辐条切割磁感线产生动生电动势。计算结果为圆盘边缘的电势高于中心转轴的电势，在中心与边缘之间接上外电路即可获得持续的感应电流。

该装置实现了**机械能→电能**的转化，是交流发电机的雏形。以上分析的结构由特斯拉发明。

### 2.2 感生电动势

**1. 定义**

由于磁场随时间变化而在导体回路中产生的感应电动势，称为**感生电动势**。

**2. 感生电场（有旋电场）**

麦克斯韦提出：变化的磁场在其周围空间会激发一种电场，称为**感生电场**（亦称有旋电场）。感生电场与静电场的对比如下：

| 性质  | 静电场 | 感生电场 |
| --- | --- | --- |
| 激发源 | 电荷  | 变化磁场 |
| 电场线 | 起于正电荷止于负电荷（不闭合） | 闭合曲线 |
| 环流  | $\oint \boldsymbol{E} \cdot d\boldsymbol{l} = 0$ | $\oint \boldsymbol{E}_{\text{感}} \cdot d\boldsymbol{l} = -\dfrac{d\Phi}{dt}$ |
| 有源/有旋 | 有源无旋场 | 无源有旋场 |

闭合回路中的感生电动势为：

$$ \mathcal{E}_i = \oint_L \boldsymbol{E}_{\text{感}} \cdot d\boldsymbol{l} = -\frac{d\Phi}{dt} = -\int_S \frac{\partial \boldsymbol{B}}{\partial t} \cdot d\boldsymbol{S} $$

:::derivation
**推导过程：**

麦克斯韦提出：变化的磁场在空间激发一种电场，称为感生电场（有旋电场）$\boldsymbol{E}_{\text{感}}$。

**步骤 1**：感生电场对闭合回路中的电荷做功，产生感生电动势：
$$ \mathcal{E}_i = \oint_L \boldsymbol{E}_{\text{感}} \cdot d\boldsymbol{l} $$

**步骤 2**：由法拉第电磁感应定律，感应电动势等于磁通量变化率的负值：
$$ \mathcal{E}_i = -\frac{d\Phi}{dt} $$

**步骤 3**：将磁通量 $\Phi = \int_S \boldsymbol{B} \cdot d\boldsymbol{S}$ 代入（$S$ 是以 $L$ 为边界的曲面）：
$$ \mathcal{E}_i = -\frac{d}{dt}\int_S \boldsymbol{B} \cdot d\boldsymbol{S} $$

当回路 $L$ 不动时，面积 $S$ 不随时间变化，求导与积分可交换：
$$ \mathcal{E}_i = -\int_S \frac{\partial \boldsymbol{B}}{\partial t} \cdot d\boldsymbol{S} $$

因此：
$$ \oint_L \boldsymbol{E}_{\text{感}} \cdot d\boldsymbol{l} = -\int_S \frac{\partial \boldsymbol{B}}{\partial t} \cdot d\boldsymbol{S} $$

这表明变化的磁场是感生电场的涡旋源，感生电场是无源有旋场。
:::

### 2.3 电子感应加速器

电子感应加速器是利用感生电场加速电子的装置。电子在半径为 $R$ 的圆形轨道上运动，由洛伦兹力和牛顿第二定律：

$$ evB_R = m\frac{v^2}{R} \quad \Rightarrow \quad mv = eRB_R $$

:::derivation
**推导过程：**

电子在半径为 $R$ 的圆形轨道上运动，轨道处的磁感应强度为 $B_R$。

电子受洛伦兹力提供圆周运动的向心力。由牛顿第二定律：
$$ evB_R = m\frac{v^2}{R} $$

两边消去 $v$：
$$ mv = eRB_R $$

此即电子在磁场中做圆周运动的轨道条件，表明电子动量与轨道处磁感应强度成正比。

**轨道条件**：为保证电子在加速过程中轨道半径不变，需满足 $B_R = \bar{B}/2$（$\bar{B}$ 为轨道内平均磁感应强度），由此可控制磁场分布实现稳定加速。
:::

其中 $B_R$ 为电子轨道所在处的磁感应强度。加速过程中需满足轨道条件，即轨道处的磁场 $B_R$ 与轨道内平均磁场 $\overline{B}$ 之间满足 $B_R = \overline{B}/2$ 的关系。

* * *

## 三、 自感和互感

### 3.1 自感现象

**1. 自感定义**

由于回路自身电流的变化而在回路中产生感应电动势的现象，称为**自感现象**，所产生的电动势称为**自感电动势**。

若线圈有 $N$ 匝，磁通链数 $\Psi = N\Phi$，则**自感系数**（简称自感）定义为：

$$ L = \frac{\Psi}{I} = \frac{N\Phi}{I} $$

:::derivation
**推导过程：**

当线圈通有电流 $I$ 时，电流产生的磁场穿过线圈自身的磁通量为 $\Phi$，$N$ 匝线圈的总磁通链数为：
$$ \Psi = N\Phi $$

对于线性磁介质，磁通链数 $\Psi$ 与电流 $I$ 成正比：
$$ \Psi \propto I $$

定义比例系数 $L$ 为自感系数（简称自感）：
$$ L = \frac{\Psi}{I} = \frac{N\Phi}{I} $$

$L$ 仅取决于线圈的几何形状、大小、匝数及周围介质的磁导率，与电流 $I$ 无关（铁磁质除外）。
:::

自感 $L$ 的单位为亨利（H），$1\,\text{H} = 1\,\text{Wb/A}$。

**2. 自感电动势**

由法拉第定律得自感电动势为：

$$ \mathcal{E}_L = -\frac{d\Psi}{dt} = -L\frac{dI}{dt} $$

:::derivation
**推导过程：**

由法拉第电磁感应定律，线圈中磁通链数变化产生的感应电动势为：
$$ \mathcal{E}_L = -\frac{d\Psi}{dt} $$

由自感定义 $\Psi = LI$，对线性介质 $L$ 为常数，故：
$$ \frac{d\Psi}{dt} = \frac{d(LI)}{dt} = L\frac{dI}{dt} $$

代入得自感电动势：
$$ \mathcal{E}_L = -L\frac{dI}{dt} $$

负号表示：电流增大时（$dI/dt > 0$），$\mathcal{E}_L$ 与 $I$ 反向，阻碍增大；电流减小时（$dI/dt < 0$），$\mathcal{E}_L$ 与 $I$ 同向，阻碍减小。此即"自感现象反抗电流变化"的数学表达。
:::

式中负号表示自感电动势总是**反抗**回路中电流的变化——电流增大时 $\mathcal{E}_L$ 与 $I$ 反向，电流减小时 $\mathcal{E}_L$ 与 $I$ 同向。

**3. 自感的应用**

自感现象有广泛应用：扼流圈（稳流）、LC 谐振电路（选频）、滤波电路（电源滤波中的电感元件）及感应圈（产生高压脉冲）等。

> **注意**：自感 $L$ 只取决于线圈的形状、大小、匝数以及周围介质的磁导率，与电流 $I$ 无关。但对于铁磁质介质，$\mu$ 非线性，$L$ 会随 $I$ 变化。

#### 例题 2：长直螺线管的自感

**解：**

设长直螺线管长度为 $l$，截面积为 $S$，单位长度匝数为 $n$，总匝数 $N = nl$，管内充满磁导率为 $\mu$ 的磁介质。

螺线管内的磁感应强度为 $B = \mu nI$，穿过每匝线圈的磁通量 $\Phi = BS = \mu nIS$，则磁通链数为：

$$ \Psi = N\Phi = nl \cdot \mu nIS = \mu n^2 lS I $$

因此自感为：

$$ L = \frac{\Psi}{I} = \mu n^2 lS = \mu n^2 V $$

:::derivation
**推导过程：**

设长直螺线管长度 $l$，截面积 $S$，单位长度匝数 $n$，总匝数 $N = nl$，管内充满磁导率 $\mu$ 的介质。

**步骤 1**：由安培环路定理，螺线管内部磁场均匀：
$$ B = \mu n I $$

**步骤 2**：穿过每匝线圈的磁通量：
$$ \Phi = BS = \mu n I S $$

**步骤 3**：总磁通链数：
$$ \Psi = N\Phi = nl \cdot \mu n I S = \mu n^2 l S I $$

**步骤 4**：由自感定义：
$$ L = \frac{\Psi}{I} = \mu n^2 lS = \mu n^2 V $$

其中 $V = lS$ 为螺线管体积。可见 $L$ 仅由 $n$、$V$、$\mu$ 决定，与电流无关。
:::

其中 $V = lS$ 为螺线管的体积。可见 $L$ 仅由几何尺寸和介质磁导率决定。

### 3.2 互感现象

**1. 互感定义**

由于一个回路中的电流变化而在邻近另一个回路中产生感应电动势的现象，称为**互感现象**。

设有线圈 1 和 2，线圈 1 中的电流 $I_1$ 产生的磁场穿过线圈 2 的磁通链为 $\Psi_{21}$，定义互感系数：

$$ M = \frac{\Psi_{21}}{I_1} = \frac{\Psi_{12}}{I_2} $$

:::derivation
**推导过程：**

设线圈 1 通有电流 $I_1$，其磁场穿过线圈 2 的磁通链为 $\Psi_{21}$。对于线性介质，$\Psi_{21} \propto I_1$，定义互感系数：
$$ M_{21} = \frac{\Psi_{21}}{I_1} $$

同理，线圈 2 通有电流 $I_2$ 时，穿过线圈 1 的磁通链为 $\Psi_{12}$，定义：
$$ M_{12} = \frac{\Psi_{12}}{I_2} $$

由能量守恒可以证明 $M_{12} = M_{21}$（互易关系），因此统一记为 $M$：
$$ M = \frac{\Psi_{21}}{I_1} = \frac{\Psi_{12}}{I_2} $$

$M$ 仅取决于两线圈的形状、大小、相对位置及介质磁导率。
:::

可以证明 $M_{12} = M_{21} = M$，$M$ 称为**互感系数**（简称互感），单位也是亨利（H）。

**2. 互感电动势**

$$ \mathcal{E}_{21} = -\frac{d\Psi_{21}}{dt} = -M\frac{dI_1}{dt} $$

:::derivation
**推导过程：**

由法拉第电磁感应定律，线圈 1 中电流 $I_1$ 变化时，在线圈 2 中产生的感应电动势为：
$$ \mathcal{E}_{21} = -\frac{d\Psi_{21}}{dt} $$

由互感定义 $\Psi_{21} = MI_1$，对线性介质 $M$ 为常数，故：
$$ \frac{d\Psi_{21}}{dt} = M\frac{dI_1}{dt} $$

代入得互感电动势：
$$ \mathcal{E}_{21} = -M\frac{dI_1}{dt} $$

负号表示互感电动势的方向反抗线圈 1 中电流的变化。
:::

同理，线圈 2 中的电流 $I_2$ 变化在线圈 1 中产生的互感电动势为：

$$ \mathcal{E}_{12} = -\frac{d\Psi_{12}}{dt} = -M\frac{dI_2}{dt} $$

互感 $M$ 取决于两个线圈的形状、大小、**相对位置**以及周围介质的磁导率。变压器正是利用互感原理工作的。

> **注意**：互感的计算一般比自感更复杂，因为需要计算一个线圈的磁场穿过另一个线圈的磁通量，这涉及两线圈的空间位置关系。

* * *

## 四、 RL 电路

### 4.1 电流增长过程（充电）

RL 电路由电阻 $R$ 和电感 $L$ 串联组成。将开关与电源接通时，由于自感阻碍电流变化，电流不能立刻达到稳定值，而是逐渐增长。

按照回路电压定律，电源电动势等于电阻上的电压降加上电感上的自感电动势：

$$ \mathcal{E} - L\frac{dI}{dt} = IR $$

整理得一阶线性微分方程：

$$ L\frac{dI}{dt} + IR = \mathcal{E} $$

设初始条件 $t=0$ 时 $I=0$，求解得：

$$ I(t) = \frac{\mathcal{E}}{R}\left(1 - e^{-\frac{R}{L}t}\right) = I_0\left(1 - e^{-\frac{t}{\tau}}\right) $$

:::derivation
**推导过程：**

RL 电路接通电源后，由回路电压定律（KVL）：
$$ \mathcal{E} - L\frac{dI}{dt} = IR $$

整理为一阶线性常微分方程：
$$ L\frac{dI}{dt} + IR = \mathcal{E} $$

分离变量：
$$ \frac{dI}{\frac{\mathcal{E}}{R} - I} = \frac{R}{L}dt $$

两边积分（初始条件 $t=0$ 时 $I=0$）：
$$ \int_0^I \frac{dI}{\frac{\mathcal{E}}{R} - I} = \int_0^t \frac{R}{L}dt $$

$$ -\ln\left(\frac{\frac{\mathcal{E}}{R} - I}{\frac{\mathcal{E}}{R}}\right) = \frac{R}{L}t $$

解出 $I$：
$$ I = \frac{\mathcal{E}}{R}\left(1 - e^{-\frac{R}{L}t}\right) = I_0\left(1 - e^{-\frac{t}{\tau}}\right) $$

其中 $I_0 = \mathcal{E}/R$ 为稳态电流，$\tau = L/R$ 为时间常数。
:::

其中 $I_0 = \mathcal{E}/R$ 为稳态电流，$\tau = L/R$ 称为**时间常数**（弛豫时间），单位为秒（s）。

### 4.2 电流衰减过程（放电）

当电路中的电流已达稳定值 $I_0 = \mathcal{E}/R$ 后，将开关从电源端断开并短路，按照欧姆定律（此时仅由自感电动势维持电流）：

$$ -L\frac{dI}{dt} = IR $$

初始条件 $t=0$ 时 $I = I_0$，求解得：

$$ I(t) = I_0 e^{-\frac{R}{L}t} = I_0 e^{-\frac{t}{\tau}} $$

:::derivation
**推导过程：**

RL 电路短路后（移除电源），仅由自感电动势维持电流。由回路电压定律：
$$ -L\frac{dI}{dt} = IR $$

整理为：
$$ L\frac{dI}{dt} + IR = 0 $$

分离变量：
$$ \frac{dI}{I} = -\frac{R}{L}dt $$

两边积分（初始条件 $t=0$ 时 $I=I_0$）：
$$ \int_{I_0}^I \frac{dI}{I} = -\frac{R}{L}\int_0^t dt $$

$$ \ln\frac{I}{I_0} = -\frac{R}{L}t $$

解得：
$$ I(t) = I_0 e^{-\frac{R}{L}t} = I_0 e^{-\frac{t}{\tau}} $$

电流按指数规律衰减，时间常数 $\tau = L/R$ 越大，衰减越慢。
:::

> **要点**：
> 
> * $\tau = L/R$ 越大，电流变化越慢（电感阻碍电流变化的作用越强）
> * 当 $t = \tau$ 时，充电电流达到稳态值的 $1 - e^{-1} \approx 63.2\%$，放电电流衰减至初始值的 $e^{-1} \approx 36.8\%$
> * 理论上需无限长时间达到稳态，工程上通常取 $t = 5\tau$ 认为已达稳态

* * *

## 五、 磁场的能量 磁场能量密度

### 5.1 自感线圈的磁能

在 RL 电路的电流增长过程中，电源提供的能量一部分转化为电阻的焦耳热，另一部分储存在线圈的磁场中。

当电流从 $0$ 增长到 $I$ 时，电源克服自感电动势所做的功全部转化为磁场能量：

$$ W_m = \int_0^I L I\,dI = \frac{1}{2}LI^2 $$

:::derivation
**推导过程：**

在 RL 电路电流增长过程中，电源克服自感电动势做功。瞬时功率为：
$$ P = |\mathcal{E}_L| \cdot I = L\frac{dI}{dt} \cdot I = LI\frac{dI}{dt} $$

在 $dt$ 时间内做的功：
$$ dW = P \, dt = LI \, dI $$

将电流从 $0$ 增长到 $I$，对 $dI$ 积分：
$$ W_m = \int_0^I LI \, dI = L \left[\frac{1}{2}I^2\right]_0^I = \frac{1}{2}LI^2 $$

这部分功全部转化为储存在线圈磁场中的能量。

**对称性**：此式与电容储能 $W_e = \frac{1}{2}CU^2$ 形式对称，体现了电与磁的对称性。
:::

> **注意**：此式与电容储能 $W_e = \dfrac{1}{2}CU^2$ 形式上完美对称，体现了电与磁的对称性。

### 5.2 磁场能量密度

以长直螺线管为例，$L = \mu n^2 V$，$B = \mu nI$，代入上式：

$$ W_m = \frac{1}{2}LI^2 = \frac{1}{2}(\mu n^2 V)\left(\frac{B}{\mu n}\right)^2 = \frac{B^2}{2\mu}V $$

由此得到**磁场能量密度**（单位体积内的磁场能量）为：

$$ w_m = \frac{dW_m}{dV} = \frac{B^2}{2\mu} = \frac{1}{2}\mu H^2 = \frac{1}{2}BH $$

:::derivation
**推导过程：**

以长直螺线管为例推导磁场能量密度。

**步骤 1**：螺线管自感 $L = \mu n^2 V$，内部磁场 $B = \mu n I$，故 $I = \frac{B}{\mu n}$。

**步骤 2**：代入磁能公式：
$$ W_m = \frac{1}{2}LI^2 = \frac{1}{2}(\mu n^2 V)\left(\frac{B}{\mu n}\right)^2 = \frac{1}{2}\mu n^2 V \cdot \frac{B^2}{\mu^2 n^2} = \frac{B^2}{2\mu}V $$

**步骤 3**：磁场能量密度为单位体积内的磁场能量：
$$ w_m = \frac{W_m}{V} = \frac{B^2}{2\mu} $$

**步骤 4**：利用本构关系 $B = \mu H$，可化为：
$$ w_m = \frac{B^2}{2\mu} = \frac{(\mu H)^2}{2\mu} = \frac{1}{2}\mu H^2 = \frac{1}{2}BH $$

此结果虽由螺线管特例导出，但适用于任意磁场。
:::

对于一般非均匀磁场，通过对全空间积分可得总磁场能量：

$$ W_m = \int_V w_m\,dV = \int_V \frac{B^2}{2\mu}\,dV $$

#### 例题 3：螺绕环的磁场能量

**解：**

设一由 $N$ 匝线圈绕成的螺绕环，通有电流 $I$，内部充有均匀磁介质（磁导率为 $\mu$）。

由安培环路定理，沿半径 $r$ 处的同心圆环积分：

$$ \oint \boldsymbol{H} \cdot d\boldsymbol{l} = NI \quad \Rightarrow \quad H \cdot 2\pi r = NI $$

解得 $H = \dfrac{NI}{2\pi r}$，$B = \mu H = \dfrac{\mu NI}{2\pi r}$。

取体积元 $dV = 2\pi r \cdot S\,dr$（$S$ 为螺绕环截面积），磁场总能量为：

$$ W_m = \int \frac{B^2}{2\mu}\,dV = \int_{R_1}^{R_2} \frac{1}{2\mu}\left(\frac{\mu NI}{2\pi r}\right)^2 \cdot 2\pi rS\,dr = \frac{\mu N^2 I^2 S}{4\pi}\int_{R_1}^{R_2}\frac{dr}{r} $$

$$ W_m = \frac{\mu N^2 I^2 S}{4\pi}\ln\frac{R_2}{R_1} $$

其中 $R_1$、$R_2$ 分别为螺绕环的内、外半径。

* * *

## 六、 位移电流 麦克斯韦电磁场方程组的积分形式

### 6.1 位移电流的提出

**1. 安培环路定理的矛盾**

在稳恒磁场中，安培环路定理为：

$$ \oint_L \boldsymbol{H} \cdot d\boldsymbol{l} = I_{\text{传}} = \int_S \boldsymbol{J} \cdot d\boldsymbol{S} $$

但对于非稳恒电路（如电容器充放电过程），以同一回路 $L$ 为边界的不同曲面 $S$ 穿过的电流不同，安培环路定理出现了矛盾。

**2. 位移电流假设**

麦克斯韦提出了"位移电流"假设：电场中某一点**位移电流密度** $\boldsymbol{J}_d$ 等于该点电位移矢量对时间的变化率：

$$ \boldsymbol{J}_d = \frac{\partial \boldsymbol{D}}{\partial t} $$

:::derivation
**推导过程：**

麦克斯韦注意到，在电容器充放电过程中，传导电流 $I_{\text{传}}$ 在电容器极板间中断，导致安培环路定理 $\oint \boldsymbol{H} \cdot d\boldsymbol{l} = I_{\text{传}}$ 对不同曲面给出矛盾结果。

**关键洞察**：电容器极板间虽无传导电流，但极板上电荷 $q$ 随时间变化，导致极板间电位移 $\boldsymbol{D}$ 随时间变化。由高斯定理 $\oint \boldsymbol{D} \cdot d\boldsymbol{S} = q$，对时间求导：
$$ \frac{d}{dt}\oint \boldsymbol{D} \cdot d\boldsymbol{S} = \frac{dq}{dt} = I_{\text{传}} $$

即：
$$ \oint \frac{\partial \boldsymbol{D}}{\partial t} \cdot d\boldsymbol{S} = I_{\text{传}} $$

这表明 $\frac{\partial \boldsymbol{D}}{\partial t}$ 与传导电流 $I_{\text{传}}$ 在产生磁场方面等效。麦克斯韦定义**位移电流密度**：
$$ \boldsymbol{J}_d = \frac{\partial \boldsymbol{D}}{\partial t} $$

位移电流的本质是**变化的电场**，并非电荷的定向移动。
:::

通过电场中某一截面的**位移电流** $I_d$ 等于通过该截面电位移通量对时间的变化率：

$$ I_d = \frac{d\Phi_D}{dt} = \int_S \frac{\partial \boldsymbol{D}}{\partial t} \cdot d\boldsymbol{S} $$

> **注意**：位移电流的本质是**变化的电场**，并非真正的电荷定向移动。它和传导电流一样能**激发磁场**，但**不产生**焦耳热。

### 6.2 全电流安培环路定理

引入位移电流后，安培环路定理推广为**全电流定理**：

$$ \oint_L \boldsymbol{H} \cdot d\boldsymbol{l} = I_{\text{传}} + I_d = \int_S \left(\boldsymbol{J} + \frac{\partial \boldsymbol{D}}{\partial t}\right) \cdot d\boldsymbol{S} $$

### 6.3 麦克斯韦电磁场方程组的积分形式

1865 年，麦克斯韦在总结前人工作的基础上，提出了"有旋电场"和"位移电流"两个假设，建立了完整的电磁场理论，并预言了以光速传播的电磁波的存在。1888 年赫兹的实验证实了这一预言。

麦克斯韦方程组的积分形式包含以下四个方程：

**1. 电场的高斯定理**

$$ \oint_S \boldsymbol{D} \cdot d\boldsymbol{S} = \sum q = \int_V \rho\,dV $$

电场中的电位移矢量 $\boldsymbol{D}$ 通过任意闭合曲面的通量等于该曲面内自由电荷的代数和——电场是有源场。

**2. 磁场的高斯定理**

$$ \oint_S \boldsymbol{B} \cdot d\boldsymbol{S} = 0 $$

磁场中的磁感应强度 $\boldsymbol{B}$ 通过任意闭合曲面的通量恒为零，即磁单极子不存在——磁场是无源场（有旋场）。

**3. 法拉第电磁感应定律**

$$ \oint_L \boldsymbol{E} \cdot d\boldsymbol{l} = -\frac{d\Phi}{dt} = -\int_S \frac{\partial \boldsymbol{B}}{\partial t} \cdot d\boldsymbol{S} $$

变化的磁场会激发感生电场（有旋电场）。

**4. 全电流安培环路定理**

$$ \oint_L \boldsymbol{H} \cdot d\boldsymbol{l} = I_{\text{传}} + \int_S \frac{\partial \boldsymbol{D}}{\partial t} \cdot d\boldsymbol{S} = \int_S \left(\boldsymbol{J} + \frac{\partial \boldsymbol{D}}{\partial t}\right) \cdot d\boldsymbol{S} $$

传导电流和变化的电场（位移电流）都能激发磁场。

### 6.4 麦克斯韦方程组的意义

麦克斯韦方程组是经典电磁理论的基石，其主要意义在于：

1. **统一电场与磁场**：变化的电场激发磁场，变化的磁场激发电场，电与磁不可分割
2. **预言电磁波**：由方程组可导出波动方程，真空中电磁波速 $c = \dfrac{1}{\sqrt{\varepsilon_0\mu_0}}$，恰好等于光速，揭示光也是一种电磁波
3. **奠定现代技术基础**：为无线电技术和现代电子通信技术的发展开辟了广阔前景

* * *

## 七、 总结与注意事项

### 7.1 核心公式速查

| 概念  | 公式  | 说明  |
| --- | --- | --- |
| 法拉第电磁感应定律 | $\mathcal{E}_i = -\dfrac{d\Phi}{dt}$ | 感应电动势等于磁通量变化率的负值 |
| 动生电动势 | $\mathcal{E}_{ab} = \displaystyle\int (\boldsymbol{v} \times \boldsymbol{B}) \cdot d\boldsymbol{l}$ | 导体在磁场中运动产生，本质为洛伦兹力 |
| 感生电动势 | $\mathcal{E}_i = -\displaystyle\int_S \dfrac{\partial \boldsymbol{B}}{\partial t} \cdot d\boldsymbol{S}$ | 变化磁场激发有旋电场产生 |
| 自感电动势 | $\mathcal{E}_L = -L\dfrac{dI}{dt}$ | 自感阻碍电流变化 |
| 自感系数 | $L = \dfrac{\Psi}{I}$ | 由线圈几何和介质决定，与 $I$ 无关 |
| 互感电动势 | $\mathcal{E}_{21} = -M\dfrac{dI_1}{dt}$ | 互感现象，$M = M_{12} = M_{21}$ |
| RL 电路电流增长 | $I(t) = I_0(1 - e^{-t/\tau})$ | $\tau = L/R$，$t=5\tau$ 视作稳态 |
| RL 电路电流衰减 | $I(t) = I_0 e^{-t/\tau}$ | $\tau = L/R$ |
| 自感线圈磁能 | $W_m = \dfrac{1}{2}LI^2$ | 与电容储能 $W_e = \dfrac{1}{2}CU^2$ 对称 |
| 磁场能量密度 | $w_m = \dfrac{B^2}{2\mu} = \dfrac{1}{2}BH$ | 单位体积磁场能量 |
| 位移电流密度 | $\boldsymbol{J}_d = \dfrac{\partial \boldsymbol{D}}{\partial t}$ | 变化电场激发磁场 |
| 全电流安培环路定理 | $\oint \boldsymbol{H} \cdot d\boldsymbol{l} = I_{\text{传}} + \displaystyle\int \dfrac{\partial \boldsymbol{D}}{\partial t} \cdot d\boldsymbol{S}$ | 推广的安培环路定理 |

### 7.2 易错点提醒

1. **法拉第定律中负号不可省略**：负号是楞次定律的数学体现，决定了感应电动势的方向，与公式本身同样重要。
  
2. **动生与感生电动势的区分**：动生电动势的非静电力是洛伦兹力（运动导体切磁感线），感生电动势的非静电力是有旋电场的电场力（变化磁场激发），两者来源本质不同。
  
3. **有旋电场与静电场的混淆**：静电场线起止于电荷（有源无旋），有旋电场线闭合（无源有旋），二者性质截然不同。
  
4. **自感系数的决定性因素**：自感 $L$ 由线圈几何尺寸和介质磁导率决定，与电流 $I$ 无关。但铁磁质中 $\mu$ 非线性，$L$ 会随电流变化。
  
5. **位移电流的理解**：位移电流的本质是变化电场能激发磁场，不是真正的电荷流动，不产生焦耳热。
  
6. **RL 电路时间常数**：$\tau = L/R$ 越大，电流变化越慢。工程上取 $t = 5\tau$ 认为达到稳态。
  

### 7.3 解题要点

* **电磁感应题**：先判断磁通量变化原因（运动或磁场变化），对应选择动生或感生电动势公式，最后用楞次定律确定方向
* **自感/互感计算题**：遵循"先求 $B \to$ 求 $\Phi \to$ 求 $\Psi \to$ 求 $L$ 或 $M$"的标准步骤
* **RL 电路题**：熟练掌握 $I(t)$ 的指数增长/衰减规律，关键算对 $\tau = L/R$
* **磁场能量题**：先用安培环路定理求 $H$，再由 $B = \mu H$ 求 $B$，最后对 $w_m = B^2/(2\mu)$ 在全空间积分
* **麦克斯韦方程组题**：理解四个方程各自的物理意义——电场有源（电荷）、磁场无源（无磁单极）、变化磁场生电场、变化电场生磁场
