---
title: 质点运动学
pubDate: 2026-03-03T09:46:00.000Z
draft: false
description: 
category: 大物
slugId: 质点运动学
---

# 第一章 质点运动学

## 1-1 质点运动的描述

### 一、参考系 质点
- **参考系**：为描述物体运动而选作标准（认为静止）的物体。
- **质点**：忽略物体的大小和形状变化，将其视为一个有质量的点——理想模型。能否视为质点取决于具体问题。

### 二、位置矢量 运动方程 位移
- **位置矢量** $\vec{r}$  
  $$
  \vec{r} = x\vec{i} + y\vec{j} + z\vec{k}
  $$
  大小：$ r = |\vec{r}| = \sqrt{x^2 + y^2 + z^2} $  
  方向余弦：$\cos\alpha = \frac{x}{r},\ \cos\beta = \frac{y}{r},\ \cos\gamma = \frac{z}{r}$

- **运动方程**  
  $$
  \vec{r}(t) = x(t)\vec{i} + y(t)\vec{j} + z(t)\vec{k}
  $$
  分量式：$\begin{cases} x = x(t) \\ y = y(t) \\ z = z(t) \end{cases}$  
  消去 $t$ 得轨迹方程。

- **位移** $\Delta\vec{r}$（矢量）  
  三维：$\Delta\vec{r} = (x_B-x_A)\vec{i} + (y_B-y_A)\vec{j} + (z_B-z_A)\vec{k}$

- **路程** $\Delta s$（标量）：质点实际路径长度。  
  位移与路程的区别：
  1. 位移唯一，路程不唯一；
  2. 一般情况下 $|\Delta\vec{r}| \neq \Delta s$；
  3. 位移是矢量，路程是标量。

### 三、速度
- **平均速度**  
  $$
  \overline{\vec{v}} = \frac{\Delta\vec{r}}{\Delta t} = \frac{\Delta x}{\Delta t}\vec{i} + \frac{\Delta y}{\Delta t}\vec{j}
  $$

- **瞬时速度**（简称速度）  
  $$
  \vec{v} = \lim_{\Delta t\to 0}\frac{\Delta\vec{r}}{\Delta t} = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\vec{i} + \frac{dy}{dt}\vec{j} + \frac{dz}{dt}\vec{k}
  $$

:::derivation
由平均速度的定义 $\overline{\vec{v}} = \dfrac{\Delta\vec{r}}{\Delta t}$ 出发，令时间间隔 $\Delta t \to 0$，取极限即得瞬时速度。

将位移 $\Delta\vec{r} = \Delta x\,\vec{i} + \Delta y\,\vec{j} + \Delta z\,\vec{k}$ 代入，利用极限的线性性质：
$$
\vec{v} = \lim_{\Delta t\to 0}\left(\frac{\Delta x}{\Delta t}\vec{i} + \frac{\Delta y}{\Delta t}\vec{j} + \frac{\Delta z}{\Delta t}\vec{k}\right) = \frac{dx}{dt}\vec{i} + \frac{dy}{dt}\vec{j} + \frac{dz}{dt}\vec{k}
$$
即速度为位置矢量对时间的一阶导数，方向沿轨迹切线方向。
:::

- **速率**：速度的大小 $v = \left|\frac{d\vec{r}}{dt}\right| = \frac{ds}{dt}$  
  当 $\Delta t\to 0$ 时，$|d\vec{r}| = ds$，故 $\vec{v} = \frac{ds}{dt}\vec{e}_t$，方向沿轨迹切线。

> **注意**：$\left|\frac{d\vec{r}}{dt}\right| \neq \frac{d|\vec{r}|}{dt}$，前者是速度大小，后者是位矢大小的变化率。

### 四、加速度
- **平均加速度**  
  $$
  \vec{a} = \frac{\Delta\vec{v}}{\Delta t}
  $$

- **瞬时加速度**  
  $$
  \vec{a} = \lim_{\Delta t\to 0}\frac{\Delta\vec{v}}{\Delta t} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}
  $$

:::derivation
由平均加速度 $\overline{\vec{a}} = \dfrac{\Delta\vec{v}}{\Delta t}$ 出发，令 $\Delta t \to 0$ 取极限：

$$
\vec{a} = \lim_{\Delta t\to 0}\frac{\Delta\vec{v}}{\Delta t} = \frac{d\vec{v}}{dt}
$$

再将 $\vec{v} = \dfrac{d\vec{r}}{dt}$ 代入，得：
$$
\vec{a} = \frac{d}{dt}\left(\frac{d\vec{r}}{dt}\right) = \frac{d^2\vec{r}}{dt^2}
$$
分量形式为 $a_x = \dfrac{dv_x}{dt} = \dfrac{d^2x}{dt^2}$ 等，即加速度为位置矢量对时间的二阶导数。
:::

  分量：$a_x = \frac{dv_x}{dt},\ a_y = \frac{dv_y}{dt},\ a_z = \frac{dv_z}{dt}$  
  大小：$a = \sqrt{a_x^2 + a_y^2 + a_z^2}$  
  方向：直线运动时 $\vec{a}\parallel\vec{v}$，曲线运动时指向轨迹凹侧。

### 例题

#### 例1
已知运动方程：$x(t)=1.0t+2.0,\ y(t)=0.25t^2+2.0$（单位：m, s）  
(1) 求 $t=3\,\mathrm{s}$ 时的速度；  
(2) 作轨迹图。

**解**  
(1) $v_x = \frac{dx}{dt}=1.0,\ v_y = \frac{dy}{dt}=0.5t$  
$t=3\,\mathrm{s}$ 时 $\vec{v}=1.0\vec{i}+1.5\vec{j}$，大小 $v=\sqrt{1.0^2+1.5^2}\approx1.8\,\mathrm{m/s}$，方向与 $x$ 轴夹角 $\theta=\arctan(1.5/1.0)\approx56.3^\circ$  
(2) 消去 $t$ 得轨迹方程：$y=0.25x^2 - x + 3.0$

#### 例2
如图，刚性杆 $l$ 连接 A、B 两物体在光滑轨道上滑行，A 以恒定速率 $v$ 向左滑。求当 $\alpha=60^\circ$ 时 B 的速度。

**解**  
建立坐标系，A 沿 x 轴，B 沿 y 轴。  
$x^2 + y^2 = l^2$ 两边对时间求导：  
$2x\frac{dx}{dt}+2y\frac{dy}{dt}=0 \Rightarrow \frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$  
已知 $\frac{dx}{dt}=-v$，且 $\frac{x}{y}=\tan\alpha$，故 $\frac{dy}{dt}=v\tan\alpha$  
$\alpha=60^\circ$ 时 $\tan60^\circ = sqrt{3}$，所以 $v_B = v\tan60^\circ \approx 1.73v$，方向沿 y 轴正向。

#### 例3
小球在液体中竖直下落，初速度 $\vec{v}_0 = 10\vec{j}\,\mathrm{m/s}$，加速度 $\vec{a} = -1.0\,\vec{v}\,\vec{j}$。求 (1) 停止所需时间；(2) 停止前经历路程。

**解**  
加速度与速度反向，有 $\frac{dv}{dt} = -1.0\,v$  
分离变量：$\int_{v_0}^{v}\frac{dv}{v} = -\int_0^t dt$ 得 $v = v_0 e^{-t}$  
又 $v = \frac{dy}{dt}$，积分得 $y = v_0(1-e^{-t}) = 10(1-e^{-t})\,\mathrm{m}$  
计算表格显示当 $t=9.2\,\mathrm{s}$ 时 $v\approx0$，$y\approx10\,\mathrm{m}$，即近似停止，路程 $10\,\mathrm{m}$。

#### 例4
抛体从原点以初速 $v_0$、抛射角 $\alpha$ 抛出，忽略空气阻力，求轨迹方程和最大射程。

**解**  
加速度 $\vec{a} = -g\vec{j}$，初始 $v_{0x}=v_0\cos\alpha,\ v_{0y}=v_0\sin\alpha$  
运动方程：$x = v_0\cos\alpha\cdot t,\ y = v_0\sin\alpha\cdot t - \frac{1}{2}gt^2$  
消去 $t$ 得轨迹：$y = x\tan\alpha - \frac{g}{2v_0^2\cos^2\alpha}x^2$  
射程：令 $y=0$ 得 $x=0$（原点）和 $x = \frac{2v_0^2\sin\alpha\cos\alpha}{g}$  
即 $d_0 = \frac{v_0^2\sin2\alpha}{g}$，最大射程当 $\sin2\alpha=1$ 即 $\alpha=45^\circ$，$d_{0\mathrm{max}} = \frac{v_0^2}{g}$（实际因空气阻力小于此值）。

### 质点运动学两类基本问题
1. 已知运动方程 → 求速度、加速度（微分）；
2. 已知加速度及初始条件 → 求速度、运动方程（积分）。

---

## 1-2 圆周运动

### 一、平面极坐标

为了描述平面上点的运动，除了直角坐标 $(x,y)$，还可以使用**极坐标** $(r,\theta)$，其中 $r$ 为点到原点的距离，$\theta$ 为极角（与 $x$ 轴正向夹角）。两者关系为：

$$
\begin{cases}
x = r \cos\theta \\[1ex]
y = r \sin\theta
\end{cases}
$$

### 二、圆周运动的角速度

当质点沿半径为 $r$ 的圆周运动时，其位置可由角坐标 $\theta(t)$ 唯一确定。弧长 $s$ 与角坐标的关系为 $s = r\theta$（$\theta$ 以弧度为单位）。

- **角速度** $\omega$ 定义为角坐标对时间的变化率：
  $$
  \omega = \lim_{\Delta t\to 0}\frac{\Delta\theta}{\Delta t} = \frac{d\theta}{dt}
  $$
  单位：$\mathrm{rad \cdot s^{-1}}$。

- **线速度**大小 $v$ 与角速度的关系：
  $$
  v = \frac{ds}{dt} = \frac{d}{dt}(r\theta) = r\frac{d\theta}{dt} = r\omega
  $$

:::derivation
质点沿半径为 $r$ 的圆周运动时，弧长与角坐标的关系为 $s = r\theta$（$\theta$ 以弧度为单位）。

对时间求导，注意到圆周运动中半径 $r$ 为常量：
$$
v = \frac{ds}{dt} = \frac{d}{dt}(r\theta) = r\frac{d\theta}{dt}
$$
代入角速度定义 $\omega = \dfrac{d\theta}{dt}$，即得：
$$
v = r\omega
$$
此式建立了线量（线速度）与角量（角速度）之间的联系。
:::

  方向沿圆周的切线方向，记切向单位矢量为 $\vec{e}_t$，则速度矢量可写为：
  $$
  \vec{v} = v\,\vec{e}_t = r\omega\,\vec{e}_t
  $$

### 三、圆周运动的切向加速度和法向加速度

质点作圆周运动时，速度大小和方向都可能变化。加速度的一般定义为：
$$
\vec{a} = \frac{d\vec{v}}{dt} = \frac{d}{dt}(v\vec{e}_t) = \frac{dv}{dt}\vec{e}_t + v\frac{d\vec{e}_t}{dt}
$$

#### 1. 切向加速度

第一项 $\displaystyle \frac{dv}{dt}\vec{e}_t$ 是由于速度大小变化引起的加速度，方向沿切线，称为**切向加速度**：
$$
\vec{a}_t = \frac{dv}{dt}\vec{e}_t
$$
引入角加速度 $\alpha = \dfrac{d\omega}{dt}$，则 $dv/dt = r\,d\omega/dt = r\alpha$，所以
$$
\vec{a}_t = r\alpha\,\vec{e}_t
$$

:::derivation
切向加速度定义为 $\vec{a}_t = \dfrac{dv}{dt}\vec{e}_t$，反映速度大小的变化率。

由线速度与角速度关系 $v = r\omega$，对时间求导（圆周运动 $r$ 为常量）：
$$
\frac{dv}{dt} = \frac{d}{dt}(r\omega) = r\frac{d\omega}{dt}
$$
代入角加速度定义 $\alpha = \dfrac{d\omega}{dt}$，得：
$$
\frac{dv}{dt} = r\alpha
$$
故切向加速度为：
$$
\vec{a}_t = r\alpha\,\vec{e}_t
$$
当 $\alpha > 0$ 时切向加速度与速度同向（加速），$\alpha < 0$ 时反向（减速）。
:::

#### 2. 法向加速度

第二项 $v\,\dfrac{d\vec{e}_t}{dt}$ 是由于速度方向变化引起的加速度。需要求出 $\dfrac{d\vec{e}_t}{dt}$。

考虑质点沿圆周运动，切向单位矢量 $\vec{e}_t$ 的方向随位置变化。在 $\Delta t$ 时间内，质点转过 $\Delta\theta$ 角，$\vec{e}_t$ 也转过相同的角度 $\Delta\theta$，其方向变化如右图（想象）。矢量 $\Delta\vec{e}_t$ 的大小近似为 $|\vec{e}_t|\cdot\Delta\theta = \Delta\theta$（因为 $|\vec{e}_t|=1$），方向垂直于 $\vec{e}_t$ 并指向曲线凹侧，即法向方向 $\vec{e}_n$（指向圆心）。因此
$$
\frac{d\vec{e}_t}{dt} = \lim_{\Delta t\to0}\frac{\Delta\vec{e}_t}{\Delta t}
= \lim_{\Delta t\to0}\frac{\Delta\theta}{\Delta t}\,\vec{e}_n = \frac{d\theta}{dt}\,\vec{e}_n = \omega\,\vec{e}_n
$$

:::derivation
在 $\Delta t$ 时间内，质点沿圆周转过角度 $\Delta\theta$，切向单位矢量 $\vec{e}_t$ 也随之转过相同角度 $\Delta\theta$。

由于 $|\vec{e}_t| = 1$，矢量增量 $\Delta\vec{e}_t$ 的大小为：
$$
|\Delta\vec{e}_t| \approx |\vec{e}_t|\cdot\Delta\theta = \Delta\theta
$$
方向垂直于 $\vec{e}_t$，指向圆心，即法向单位矢量 $\vec{e}_n$ 的方向。

取极限 $\Delta t \to 0$：
$$
\frac{d\vec{e}_t}{dt} = \lim_{\Delta t\to 0}\frac{\Delta\vec{e}_t}{\Delta t} = \lim_{\Delta t\to 0}\frac{\Delta\theta}{\Delta t}\,\vec{e}_n = \frac{d\theta}{dt}\,\vec{e}_n
$$
代入角速度 $\omega = \dfrac{d\theta}{dt}$，得 $\dfrac{d\vec{e}_t}{dt} = \omega\,\vec{e}_n$。

此结果表明：切向单位矢量的时间变化率指向法向，是曲线运动产生法向加速度的根源。
:::

于是
$$
v\frac{d\vec{e}_t}{dt} = v\omega\,\vec{e}_n = r\omega^2\,\vec{e}_n = \frac{v^2}{r}\,\vec{e}_n
$$
这一项是由于速度方向变化引起的加速度，方向指向圆心，称为**法向加速度**（向心加速度）：
$$
\vec{a}_n = \frac{v^2}{r}\,\vec{e}_n = r\omega^2\,\vec{e}_n
$$

:::derivation
由 $\dfrac{d\vec{e}_t}{dt} = \omega\,\vec{e}_n$，加速度中因速度方向变化的部分为：
$$
v\frac{d\vec{e}_t}{dt} = v\omega\,\vec{e}_n
$$
利用线速度与角速度关系 $v = r\omega$（即 $\omega = v/r$），代入上式：
$$
v\omega\,\vec{e}_n = v\cdot\frac{v}{r}\,\vec{e}_n = \frac{v^2}{r}\,\vec{e}_n
$$
或用 $\omega$ 表示：
$$
v\omega\,\vec{e}_n = r\omega\cdot\omega\,\vec{e}_n = r\omega^2\,\vec{e}_n
$$
因此法向加速度为 $\vec{a}_n = \dfrac{v^2}{r}\vec{e}_n = r\omega^2\vec{e}_n$，方向恒指向圆心。
:::

#### 3. 总加速度

总加速度为切向加速度与法向加速度的矢量和：
$$
\vec{a} = \vec{a}_t + \vec{a}_n = \frac{dv}{dt}\vec{e}_t + \frac{v^2}{r}\vec{e}_n
$$

:::derivation
由加速度定义 $\vec{a} = \dfrac{d\vec{v}}{dt}$，圆周运动中速度 $\vec{v} = v\,\vec{e}_t$，应用乘积求导法则：
$$
\vec{a} = \frac{d}{dt}(v\,\vec{e}_t) = \frac{dv}{dt}\,\vec{e}_t + v\,\frac{d\vec{e}_t}{dt}
$$
第一项 $\dfrac{dv}{dt}\vec{e}_t$ 为切向加速度 $\vec{a}_t$，反映速度大小的变化；

第二项 $v\,\dfrac{d\vec{e}_t}{dt} = v\omega\,\vec{e}_n = \dfrac{v^2}{r}\vec{e}_n$ 为法向加速度 $\vec{a}_n$，反映速度方向的变化。

由于 $\vec{e}_t \perp \vec{e}_n$，两部分相互正交，故总加速度为两者的矢量和：
$$
\vec{a} = \vec{a}_t + \vec{a}_n = \frac{dv}{dt}\vec{e}_t + \frac{v^2}{r}\vec{e}_n
$$
其大小 $a = \sqrt{a_t^2 + a_n^2}$。
:::

大小：
$$
a = \sqrt{a_t^2 + a_n^2} = \sqrt{\left(\frac{dv}{dt}\right)^2 + \left(\frac{v^2}{r}\right)^2}
$$
方向与切线方向的夹角 $\theta$ 满足 $\tan\theta = \dfrac{a_n}{a_t}$（$a_t \neq 0$）。

### 四、线量与角量的关系

总结如下：
- 弧长与角位移：$ds = r\,d\theta$
- 线速度与角速度：$v = r\omega$
- 切向加速度与角加速度：$a_t = r\alpha$
- 法向加速度与角速度：$a_n = r\omega^2 = v^2/r$

### 五、自然坐标系

以质点当前位置为原点，取切向单位矢量 $\vec{e}_t$（指向运动方向）和法向单位矢量 $\vec{e}_n$（指向曲线凹侧）构成的正交坐标系，称为**自然坐标系**。上述加速度分解就是自然坐标系下的表示。

### 六、匀变速率圆周运动

若角加速度 $\alpha$ 为常量（匀角加速圆周运动），则与匀变速直线运动类比，可得运动学公式。

由 $\alpha = \dfrac{d\omega}{dt} = \text{常量}$ 积分得：
$$
\int_{\omega_0}^{\omega} d\omega = \int_0^t \alpha\,dt \quad\Rightarrow\quad \omega = \omega_0 + \alpha t
$$

:::derivation
匀角加速圆周运动中，角加速度 $\alpha$ 为常量。由角加速度定义 $\alpha = \dfrac{d\omega}{dt}$，分离变量：
$$
d\omega = \alpha\,dt
$$
两边积分，时间从 $0$ 到 $t$，角速度从 $\omega_0$ 到 $\omega$：
$$
\int_{\omega_0}^{\omega} d\omega = \int_0^t \alpha\,dt = \alpha\int_0^t dt = \alpha t
$$
左端积分为 $\omega - \omega_0$，故：
$$
\omega - \omega_0 = \alpha t \quad\Rightarrow\quad \omega = \omega_0 + \alpha t
$$
:::

由 $\omega = \dfrac{d\theta}{dt}$ 积分得：
$$
\int_{\theta_0}^{\theta} d\theta = \int_0^t (\omega_0 + \alpha t)\,dt \quad\Rightarrow\quad \theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2
$$

:::derivation
由角速度定义 $\omega = \dfrac{d\theta}{dt}$，分离变量 $d\theta = \omega\,dt$。

将已得结果 $\omega = \omega_0 + \alpha t$ 代入，两边积分（角坐标从 $\theta_0$ 到 $\theta$，时间从 $0$ 到 $t$）：
$$
\int_{\theta_0}^{\theta} d\theta = \int_0^t (\omega_0 + \alpha t)\,dt
$$
右端逐项积分：
$$
\int_0^t (\omega_0 + \alpha t)\,dt = \omega_0 \int_0^t dt + \alpha\int_0^t t\,dt = \omega_0 t + \frac{1}{2}\alpha t^2
$$
故：
$$
\theta - \theta_0 = \omega_0 t + \frac{1}{2}\alpha t^2 \quad\Rightarrow\quad \theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2
$$
:::

消去 $t$ 得角速度与角位移的关系：
$$
\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)
$$

:::derivation
由前两式：
$$
\omega = \omega_0 + \alpha t \quad\Rightarrow\quad t = \frac{\omega - \omega_0}{\alpha}
$$
$$
\theta - \theta_0 = \omega_0 t + \frac{1}{2}\alpha t^2
$$
将 $t = \dfrac{\omega - \omega_0}{\alpha}$ 代入第二式：
$$
\theta - \theta_0 = \omega_0\cdot\frac{\omega - \omega_0}{\alpha} + \frac{1}{2}\alpha\cdot\left(\frac{\omega - \omega_0}{\alpha}\right)^2
$$
$$
= \frac{\omega_0(\omega - \omega_0)}{\alpha} + \frac{(\omega - \omega_0)^2}{2\alpha}
= \frac{2\omega_0(\omega - \omega_0) + (\omega - \omega_0)^2}{2\alpha}
$$
$$
= \frac{(\omega - \omega_0)(2\omega_0 + \omega - \omega_0)}{2\alpha} = \frac{(\omega - \omega_0)(\omega + \omega_0)}{2\alpha} = \frac{\omega^2 - \omega_0^2}{2\alpha}
$$
故：
$$
\omega^2 - \omega_0^2 = 2\alpha(\theta - \theta_0) \quad\Rightarrow\quad \omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)
$$
:::

线量形式（$s = r\theta,\ v = r\omega,\ a_t = r\alpha$）完全对应：
$$
\begin{cases}
v = v_0 + a_t t \\[1ex]
s = s_0 + v_0 t + \dfrac{1}{2}a_t t^2 \\[1ex]
v^2 = v_0^2 + 2a_t(s - s_0)
\end{cases}
$$

### 例题

**例** 一歼击机在高空点A时的水平速率为 $1940\,\mathrm{km \cdot h^{-1}}$，沿近似圆弧曲线俯冲到点B，其速率为 $2192\,\mathrm{km \cdot h^{-1}}$，经历时间为 $3\,\mathrm{s}$，圆弧的半径约为 $3.5\times10^3\,\mathrm{m}$。设飞机从A到B过程视为匀变速率圆周运动，不计重力加速度的影响，求：(1) 飞机在点B的加速度；(2) 飞机由点A到点B所经历的路程。

**解**  
(1) 首先将速度单位换算为 $\mathrm{m/s}$：
$$
v_A = 1940 \times \frac{1000}{3600} \approx 538.9\,\mathrm{m/s},\qquad 
v_B = 2192 \times \frac{1000}{3600} \approx 608.9\,\mathrm{m/s}
$$
匀变速率圆周运动意味着切向加速度 $a_t$ 为常量。由 $a_t = \dfrac{v_B - v_A}{t}$ 得：
$$
a_t = \frac{608.9 - 538.9}{3} = 23.3\,\mathrm{m/s^2}
$$
在B点，法向加速度为：
$$
a_n = \frac{v_B^2}{r} = \frac{608.9^2}{3.5\times10^3} \approx 106\,\mathrm{m/s^2}
$$
B点总加速度大小为：
$$
a = \sqrt{a_t^2 + a_n^2} = \sqrt{23.3^2 + 106^2} \approx 109\,\mathrm{m/s^2}
$$
设加速度与法向方向的夹角为 $\beta$，则
$$
\tan\beta = \frac{a_t}{a_n} = \frac{23.3}{106} \approx 0.220,\quad \beta = \arctan(0.220) \approx 12.4^\circ
$$
即加速度方向与法向（指向圆心）偏前 $12.4^\circ$。

(2) 路程 $s$ 可用匀变速率直线运动公式计算（因是圆弧，路程即弧长）：
$$
s = v_A t + \frac{1}{2}a_t t^2 = 538.9\times3 + \frac{1}{2}\times23.3\times3^2 \approx 1616.7 + 104.85 = 1721.55\,\mathrm{m}
$$
故路程约为 $1722\,\mathrm{m}$。

---

## 1-3 相对运动

### 一、时间与空间的绝对性
经典力学中，时间测量和空间测量与参考系无关，是绝对的。

### 二、相对运动（伽利略变换）
- **S系**（基本参考系），**S'系**（运动参考系），S'系相对S系以速度 $\vec{u}$ 运动。
- **位移关系**：$\Delta\vec{r} = \Delta\vec{r}' + \vec{u}\Delta t$
- **速度变换**（伽利略速度变换）：
  $$
  \vec{v} = \vec{v}' + \vec{u}
  $$

:::derivation
设 S' 系相对 S 系以速度 $\vec{u}$ 运动，质点在 S 系中的位矢为 $\vec{r}$，在 S' 系中的位矢为 $\vec{r}'$。

由位移关系 $\vec{r} = \vec{r}' + \vec{u}\,t$（设 $t=0$ 时两系原点重合），两边对时间求导：
$$
\frac{d\vec{r}}{dt} = \frac{d\vec{r}'}{dt} + \frac{d(\vec{u}\,t)}{dt}
$$
在经典力学中时间绝对（$t = t'$），且 $\vec{u}$ 为常量时 $\dfrac{d\vec{u}}{dt} = 0$，故：
$$
\vec{v} = \vec{v}' + \vec{u}
$$
其中 $\vec{v} = \dfrac{d\vec{r}}{dt}$ 为绝对速度（S 系观察），$\vec{v}' = \dfrac{d\vec{r}'}{dt}$ 为相对速度（S' 系观察），$\vec{u}$ 为牵连速度。

若 $\vec{u}$ 也随时间变化，再对时间求导可得加速度变换：$\vec{a} = \vec{a}' + \dfrac{d\vec{u}}{dt}$。
:::

  其中 $\vec{v}$ 为绝对速度（S系中观察），$\vec{v}'$ 为相对速度（S'系中观察），$\vec{u}$ 为牵连速度。
- **加速度关系**：若 $\vec{u}$ 为常量，则 $\vec{a} = \vec{a}'$；若 $\vec{u}$ 变化，则 $\vec{a} = \vec{a}' + \frac{d\vec{u}}{dt}$。

> 注意：当物体速度接近光速时，伽利略变换不再成立。

### 例题
**例** 实验者A在平板车上（相对地面以 $10\,\mathrm{m/s}$ 向右）以与车前进方向成 $60^\circ$ 角斜向上发射弹丸。地面上的B观察到弹丸铅直向上运动。求弹丸上升高度。

**解**  
取地面为S系，平板车为S'系，牵连速度 $u=10\,\mathrm{m/s}$（沿x正向）。  
速度变换：$v_x = v_x' + u,\ v_y = v_y'$  
B看到弹丸竖直向上，即 $v_x = 0$，故 $v_x' = -u = -10\,\mathrm{m/s}$。  
在S'系中，弹丸速度方向已知：$\tan60^\circ = \frac{v_y'}{|v_x'|}$，所以 $v_y' = |v_x'|\tan60^\circ = 10\times\sqrt{3} \approx 17.3\,\mathrm{m/s}$。  
因此绝对速度的竖直分量 $v_y = v_y' = 17.3\,\mathrm{m/s}$，上升高度 $h = \frac{v_y^2}{2g} = \frac{17.3^2}{2\times9.8} \approx 15.3\,\mathrm{m}$。
