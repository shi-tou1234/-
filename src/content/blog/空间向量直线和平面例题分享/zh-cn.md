---
title: 空间向量直线和平面例题分享
pubDate: 2026-03-14T11:37:00.000Z
draft: false
description: 
category: 高数
slugId: 空间向量直线和平面例题分享
---

# 高数空间向量：直线与平面 经典例题全解析

本文覆盖**平面方程、直线方程、位置关系、夹角、投影、距离、综合应用**全考点，例题从基础到进阶，每道题附详细解题步骤、核心知识点与易错提示，适配高数期末考、考研数一/数二复习需求。

---

## 一、平面方程相关例题

### 题型 1：点法式求平面方程（基础）

**例题 1** 求过点$M(1,1,1)$，且法向量为$\boldsymbol{n}=(2,2,3)$的平面方程，并化为一般式。

**详细解析**

1. 核心知识点：平面的点法式方程，核心是**平面上任意一点与定点的向量都与法向量垂直**，即点积为 0。
2. 代入点法式公式：已知定点$(x_0,y_0,z_0)=(1,1,1)$，法向量$(A,B,C)=(2,2,3)$，代入得：
   $$2(x-1)+2(y-1)+3(z-1)=0$$
3. 展开化为一般式：
   $$2x-2+2y-2+3z-3=0 \implies \boldsymbol{2x+2y+3z-7=0}$$

---

### 题型 2：三点式求平面方程（高频考点）

**例题 2** 求过三点$A(1,1,-1)$，$B(-2,-2,2)$，$C(1,-1,2)$的平面方程。

**详细解析**

1. 核心思路：三点确定一个平面，先求平面内两个不共线向量，通过**叉乘得到平面法向量**（叉乘结果垂直于两个原向量，天然符合法向量定义），再用点法式求解。
2. 步骤 1：求平面内两个向量
   $$\overrightarrow{AB}=(-2-1,-2-1,2-(-1))=(-3,-3,3)$$
   $$\overrightarrow{AC}=(1-1,-1-1,2-(-1))=(0,-2,3)$$
3. 步骤 2：叉乘求法向量$\boldsymbol{n}=\overrightarrow{AB}\times\overrightarrow{AC}$
   $$\boldsymbol{n}=\begin{vmatrix} \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\ -3 & -3 & 3 \\ 0 & -2 & 3 \end{vmatrix} =\boldsymbol{i}(-9+6)-\boldsymbol{j}(-9-0)+\boldsymbol{k}(6-0)=(-3,9,6)$$

   :::derivation
   **三点式求法向量公式推导**（$\boldsymbol{n}=\overrightarrow{AB}\times\overrightarrow{AC}$）：

   设平面过三点 $A$、$B$、$C$（不共线），求平面法向量 $\boldsymbol{n}$。

   1. 三点确定两条平面内向量：$\overrightarrow{AB}=B-A$，$\overrightarrow{AC}=C-A$，二者不共线（因为三点不共线）。

   2. 法向量 $\boldsymbol{n}$ 垂直于平面内所有向量，故需同时满足：
      - $\boldsymbol{n}\cdot\overrightarrow{AB}=0$
      - $\boldsymbol{n}\cdot\overrightarrow{AC}=0$

   3. 由叉乘的几何性质，$\overrightarrow{AB}\times\overrightarrow{AC}$ 的结果同时垂直于 $\overrightarrow{AB}$ 和 $\overrightarrow{AC}$，恰好满足法向量的要求。

   故：

   $$\boldsymbol{n}=\overrightarrow{AB}\times\overrightarrow{AC}$$

   法向量乘以任意非零常数方向不变（仅改变长度），故 $\boldsymbol{n}$ 与 $k\boldsymbol{n}$（$k\neq 0$）表示同一法向量方向。
   :::

   法向量可简化为$\boldsymbol{n}=(-1,3,2)$（乘以非零常数不改变法向量方向）。
4. 步骤 3：代入点法式（选点$A(1,1,-1)$）
   $$-1(x-1)+3(y-1)+2(z+1)=0$$
5. 展开化简：
   $$-x+1+3y-3+2z+2=0 \implies \boldsymbol{x-3y-2z=0}$$
6. 验证：三点代入方程均成立，结果正确。

---

### 题型 3：平行/垂直条件求平面方程

**例题 3** 求过点$M(2,0,-3)$，且与平面$\pi_0:2x-y+3z-1=0$平行的平面方程。

**详细解析**

1. 核心知识点：两平面平行的充要条件是**法向量互相平行（成非零常数倍）**。
2. 步骤 1：确定所求平面的法向量
   已知平面$\pi_0$的法向量$\boldsymbol{n_0}=(2,-1,3)$，所求平面与$\pi_0$平行，故法向量$\boldsymbol{n}=\boldsymbol{n_0}=(2,-1,3)$。
3. 步骤 2：代入点法式（定点$M(2,0,-3)$）
   $$2(x-2)-1(y-0)+3(z+3)=0$$
4. 展开化简：
   $$2x-4-y+3z+9=0 \implies \boldsymbol{2x-y+3z+5=0}$$
5. 易错提示：若定点在原平面上，所求平面与原平面重合，需注意题目是否要求“不重合”。

---

**例题 4** 求过点$M(1,0,1)$，且同时垂直于平面$\pi_1:x+y-z=0$和$\pi_2:2x+y+z+1=0$的平面方程。

**详细解析**

1. 核心思路：所求平面同时垂直于两个已知平面，说明其法向量同时垂直于两个已知平面的法向量，因此**法向量为两个已知法向量的叉乘**。
2. 步骤 1：提取两个已知平面的法向量
   $$\boldsymbol{n_1}=(1,1,-1),\quad \boldsymbol{n_2}=(2,1,1)$$
3. 步骤 2：叉乘求所求平面的法向量$\boldsymbol{n}$
   $$\boldsymbol{n}=\boldsymbol{n_1}\times\boldsymbol{n_2}=\begin{vmatrix} \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\ 1 & 1 & -1 \\ 2 & 1 & 1 \end{vmatrix} =\boldsymbol{i}(1+1)-\boldsymbol{j}(1+2)+\boldsymbol{k}(1-2)=(2,-3,-1)$$
4. 步骤 3：代入点法式（定点$M(1,0,1)$）
   $$2(x-1)-3(y-0)-1(z-1)=0$$
5. 展开化简：
   $$2x-2-3y-z+1=0 \implies \boldsymbol{2x-3y-z-1=0}$$

---

### 题型 4：两平面的夹角与位置关系判定

**例题 5** 求两平面$\pi_1:x-y+2z-6=0$和$\pi_2:2x+y+z-5=0$的夹角，并判定位置关系。

**详细解析**

1. 核心知识点：两平面的夹角定义为其法向量夹角的锐角/直角（范围$[0,\frac{\pi}{2}]$），用点积公式计算；位置关系由法向量判定：平行→法向量成比例，垂直→法向量点积为 0，相交→不平行。
2. 步骤 1：提取法向量
   $$\boldsymbol{n_1}=(1,-1,2),\quad \boldsymbol{n_2}=(2,1,1)$$
3. 步骤 2：判定位置关系
   法向量不成比例（$\frac{1}{2}\neq\frac{-1}{1}$），故两平面相交；
   点积$\boldsymbol{n_1}\cdot\boldsymbol{n_2}=1\times2+(-1)\times1+2\times1=3\neq0$，故不垂直。
4. 步骤 3：计算夹角
   $$\cos\theta=\frac{|\boldsymbol{n_1}\cdot\boldsymbol{n_2}|}{|\boldsymbol{n_1}||\boldsymbol{n_2}|}=\frac{|3|}{\sqrt{1+1+4}\times\sqrt{4+1+1}}=\frac{3}{6}=\frac{1}{2}$$

   :::derivation
   **两平面夹角公式推导**：

   设两平面 $\pi_1$、$\pi_2$ 的法向量分别为 $\boldsymbol{n_1}$、$\boldsymbol{n_2}$，两平面的夹角 $\theta$ 定义为其法向量夹角的锐角或直角（范围 $[0,\frac{\pi}{2}]$）。

   由向量点积公式知：$\boldsymbol{n_1}\cdot\boldsymbol{n_2}=|\boldsymbol{n_1}||\boldsymbol{n_2}|\cos\varphi$，其中 $\varphi$ 为两法向量的夹角。

   解得：$\cos\varphi=\dfrac{\boldsymbol{n_1}\cdot\boldsymbol{n_2}}{|\boldsymbol{n_1}||\boldsymbol{n_2}|}$。

   由于两平面夹角取锐角（$[0,\frac{\pi}{2}]$），而法向量夹角可能为钝角（法向量方向可反向），故对分子取绝对值：

   $$\cos\theta=\frac{|\boldsymbol{n_1}\cdot\boldsymbol{n_2}|}{|\boldsymbol{n_1}||\boldsymbol{n_2}|}$$

   这就是两平面夹角公式。当 $\cos\theta=0$ 时两平面垂直，当 $\cos\theta=1$ 时两平面平行。
   :::

   因此$\boldsymbol{\theta=\frac{\pi}{3}}$（60°）。
5. 易错提示：夹角公式必须加绝对值，确保结果为锐角/直角。

---

## 二、空间直线方程相关例题

### 题型 1：对称式/参数式求直线方程（基础）

**例题 6** 求过点$M(1,2,3)$，且方向向量为$\boldsymbol{s}=(2,-1,1)$的直线的对称式方程、参数方程。

**详细解析**

1. 核心知识点：直线的对称式（点向式）核心是**直线上任意一点与定点的向量与方向向量平行（坐标成比例）**。
2. 对称式方程：代入定点$(1,2,3)$和方向向量$(2,-1,1)$，得：
   $$\boldsymbol{\frac{x-1}{2}=\frac{y-2}{-1}=\frac{z-3}{1}}$$
3. 参数方程：令对称式的比值为参数$t$（$t\in\mathbb{R}$），拆分得：
   $$\boldsymbol{\begin{cases} x=1+2t \\ y=2-t \\ z=3+t \end{cases}} \quad t\in\mathbb{R}$$

   :::derivation
   **直线对称式与参数式的互化推导**：

   直线过点 $M_0(x_0,y_0,z_0)$，方向向量 $\boldsymbol{s}=(m,n,p)$。

   **对称式方程**：直线上任一点 $M(x,y,z)$，向量 $\overrightarrow{M_0M}=(x-x_0,\,y-y_0,\,z-z_0)$ 与 $\boldsymbol{s}$ 平行，即坐标成比例：

   $$\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p}$$

   **参数方程**：令上述比值为参数 $t\in\mathbb{R}$，即 $\dfrac{x-x_0}{m}=t$，解出各坐标：

   $$\begin{cases} x=x_0+mt \\ y=y_0+nt \\ z=z_0+pt \end{cases} \quad t\in\mathbb{R}$$

   参数 $t$ 的几何意义：$t=0$ 对应定点 $M_0$，$t$ 的绝对值正比于点到 $M_0$ 的距离（$|MM_0|=|t|\cdot|\boldsymbol{s}|$）。
   :::

---

### 题型 2：两点式求直线方程

**例题 7** 求过两点$A(1,0,-2)$和$B(3,1,0)$的直线方程。

**详细解析**

1. 核心思路：两点确定一条直线，方向向量为两点的坐标差，再用对称式求解。
2. 步骤 1：求方向向量
   $$\boldsymbol{s}=\overrightarrow{AB}=(3-1,1-0,0-(-2))=(2,1,2)$$
3. 步骤 2：代入对称式（选点$A(1,0,-2)$）
   $$\boldsymbol{\frac{x-1}{2}=\frac{y}{1}=\frac{z+2}{2}}$$
4. 补充：选点$B$也可得到等价方程$\frac{x-3}{2}=\frac{y-1}{1}=\frac{z}{2}$，二者为同一直线。

---

### 题型 3：直线一般式（交面式）化为对称式/参数式（高频考点）

**例题 8** 将直线的一般式方程$L:\begin{cases}2x-3y+z-5=0 \\ 3x+y-2z-4=0\end{cases}$化为对称式方程和参数方程。

**详细解析**

1. 核心思路：直线是两个平面的交线，需找到**直线上一个定点**和**直线的方向向量**，再转化为对称式。
2. 步骤 1：找直线上的一个定点
   令$z=0$，简化方程组为：
   $$\begin{cases}2x-3y=5 \\ 3x+y=4\end{cases}$$
   第二个方程乘 3 加第一个方程，得$11x=17 \implies x=\frac{17}{11}$，代入得$y=-\frac{7}{11}$。
   因此得到直线上的定点$M(\frac{17}{11}, -\frac{7}{11}, 0)$。
   （注：也可令$x=0$或$y=0$，只要能解出另外两个坐标即可）
3. 步骤 2：求直线的方向向量$\boldsymbol{s}$
   直线是两个平面的交线，因此直线的方向向量同时垂直于两个平面的法向量，即$\boldsymbol{s}=\boldsymbol{n_1}\times\boldsymbol{n_2}$。
   两个平面的法向量：$\boldsymbol{n_1}=(2,-3,1)$，$\boldsymbol{n_2}=(3,1,-2)$。
   $$\boldsymbol{s}=\boldsymbol{n_1}\times\boldsymbol{n_2}=\begin{vmatrix} \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\ 2 & -3 & 1 \\ 3 & 1 & -2 \end{vmatrix} =\boldsymbol{i}(6-1)-\boldsymbol{j}(-4-3)+\boldsymbol{k}(2+9)=(5,7,11)$$

   :::derivation
   **交面式直线方向向量公式推导**（$\boldsymbol{s}=\boldsymbol{n_1}\times\boldsymbol{n_2}$）：

   直线 $L$ 是两个平面 $\pi_1$ 和 $\pi_2$ 的交线，直线既在 $\pi_1$ 内又在 $\pi_2$ 内。

   设 $\pi_1$ 的法向量为 $\boldsymbol{n_1}$，$\pi_2$ 的法向量为 $\boldsymbol{n_2}$。由于直线 $L$ 在 $\pi_1$ 内，故 $L$ 的方向向量 $\boldsymbol{s}$ 垂直于 $\boldsymbol{n_1}$；同理，$L$ 在 $\pi_2$ 内，故 $\boldsymbol{s}$ 也垂直于 $\boldsymbol{n_2}$。

   因此 $\boldsymbol{s}$ 同时垂直于 $\boldsymbol{n_1}$ 和 $\boldsymbol{n_2}$。由向量叉乘的几何性质，$\boldsymbol{n_1}\times\boldsymbol{n_2}$ 的结果向量同时垂直于 $\boldsymbol{n_1}$ 和 $\boldsymbol{n_2}$（右手定则确定方向），恰好满足 $\boldsymbol{s}$ 的要求。

   故直线的方向向量为：

   $$\boldsymbol{s}=\boldsymbol{n_1}\times\boldsymbol{n_2}$$

   这就是交面式（一般式）直线求方向向量的核心公式。
   :::

4. 步骤 3：写对称式方程
   代入定点和方向向量，得：
   $$\boldsymbol{\frac{x-\frac{17}{11}}{5}=\frac{y+\frac{7}{11}}{7}=\frac{z}{11}}$$
   （可通分整理为$\frac{11x-17}{55}=\frac{11y+7}{77}=\frac{z}{11}$，不影响正确性）
5. 步骤 4：写参数方程
   令对称式比值为$t$，得：
   $$\boldsymbol{\begin{cases} x=\frac{17}{11}+5t \\ y=-\frac{7}{11}+7t \\ z=11t \end{cases}} \quad t\in\mathbb{R}$$

---

### 题型 4：两直线的位置关系与夹角

**例题 9** 判定两直线$L_1:\frac{x-1}{2}=\frac{y-2}{1}=\frac{z-3}{-1}$，$L_2:\frac{x-1}{1}=\frac{y-1}{-1}=\frac{z+1}{2}$的位置关系，并求夹角。

**详细解析**

1. 核心知识点：
   - 平行：方向向量成非零常数倍；
   - 垂直：方向向量点积为 0；
   - 共面：两直线上定点构成的向量与两个方向向量的混合积为 0；
   - 异面：不平行且混合积不为 0。
2. 步骤 1：提取核心参数
   $L_1$方向向量$\boldsymbol{s_1}=(2,1,-1)$，定点$M_1(1,2,3)$；
   $L_2$方向向量$\boldsymbol{s_2}=(1,-1,2)$，定点$M_2(1,1,-1)$；
   向量$\overrightarrow{M_1M_2}=(0,-1,-4)$。
3. 步骤 2：判定位置关系
   - 平行判定：$\frac{2}{1}\neq\frac{1}{-1}$，方向向量不成比例，故不平行；
   - 共面判定：计算混合积$(\boldsymbol{s_1}\times\boldsymbol{s_2})\cdot\overrightarrow{M_1M_2}$
     先算叉乘：$\boldsymbol{s_1}\times\boldsymbol{s_2}=\begin{vmatrix}\boldsymbol{i}&\boldsymbol{j}&\boldsymbol{k}\\2&1&-1\\1&-1&2\end{vmatrix}=(1,-5,-3)$
     再算点积：$(1,-5,-3)\cdot(0,-1,-4)=0+5+12=17\neq0$
     混合积不为 0，故两直线**异面**。
4. 步骤 3：计算夹角
   $$\cos\theta=\frac{|\boldsymbol{s_1}\cdot\boldsymbol{s_2}|}{|\boldsymbol{s_1}||\boldsymbol{s_2}|}=\frac{|2\times1+1\times(-1)+(-1)\times2|}{\sqrt{6}\times\sqrt{6}}=\frac{|-1|}{6}=\frac{1}{6}$$

   :::derivation
   **两直线夹角公式推导**：

   设两直线 $L_1$、$L_2$ 的方向向量分别为 $\boldsymbol{s_1}$、$\boldsymbol{s_2}$，两直线的夹角 $\theta$ 定义为方向向量夹角的锐角或直角（范围 $[0,\frac{\pi}{2}]$）。

   由向量点积公式：$\boldsymbol{s_1}\cdot\boldsymbol{s_2}=|\boldsymbol{s_1}||\boldsymbol{s_2}|\cos\varphi$，其中 $\varphi$ 为两方向向量的夹角。

   解得：$\cos\varphi=\dfrac{\boldsymbol{s_1}\cdot\boldsymbol{s_2}}{|\boldsymbol{s_1}||\boldsymbol{s_2}|}$。

   由于方向向量可取正反两个方向（如 $\boldsymbol{s}$ 和 $-\boldsymbol{s}$ 表示同一直线），夹角 $\varphi$ 可能为钝角。为保证夹角取锐角，对分子取绝对值：

   $$\cos\theta=\frac{|\boldsymbol{s_1}\cdot\boldsymbol{s_2}|}{|\boldsymbol{s_1}||\boldsymbol{s_2}|}$$

   当 $\cos\theta=0$ 时两直线垂直，当 $\cos\theta=1$ 时两直线平行或重合。
   :::

   因此夹角$\boldsymbol{\theta=\arccos\frac{1}{6}}$。

---

## 三、直线与平面综合例题（高频重难点）

### 题型 1：直线与平面的位置关系与夹角

**例题 10** 判定直线$L:\frac{x-1}{2}=\frac{y+2}{-1}=\frac{z-3}{1}$与平面$\pi:x+2y+z-4=0$的位置关系，若相交求交点与夹角。

**详细解析**

1. 核心知识点：
   - 直线在平面内：方向向量与法向量点积为 0，且直线上有一点在平面内；
   - 平行不相交：方向向量与法向量点积为 0，且直线上点不在平面内；
   - 垂直：方向向量与法向量成非零常数倍；
   - 相交：方向向量与法向量点积不为 0。
   直线与平面夹角$\theta\in[0,\frac{\pi}{2}]$，公式为$\sin\theta=\frac{|\boldsymbol{s}\cdot\boldsymbol{n}|}{|\boldsymbol{s}||\boldsymbol{n}|}$（与法向量夹角互余，故用 sin）。
2. 步骤 1：提取核心参数
   直线方向向量$\boldsymbol{s}=(2,-1,1)$，平面法向量$\boldsymbol{n}=(1,2,1)$。
3. 步骤 2：判定位置关系
   点积$\boldsymbol{s}\cdot\boldsymbol{n}=2\times1+(-1)\times2+1\times1=1\neq0$，故直线与平面**相交**。
4. 步骤 3：求交点
   写出直线的参数方程：$x=1+2t,\ y=-2-t,\ z=3+t$，代入平面方程：
   $$(1+2t)+2(-2-t)+(3+t)-4=0$$
   化简得：$-4+t=0 \implies t=4$。
   代入参数方程，得交点坐标：$\boldsymbol{(9,-6,7)}$。
5. 步骤 4：求直线与平面的夹角
   $$\sin\theta=\frac{|\boldsymbol{s}\cdot\boldsymbol{n}|}{|\boldsymbol{s}||\boldsymbol{n}|}=\frac{|1|}{\sqrt{4+1+1}\times\sqrt{1+4+1}}=\frac{1}{6}$$

   :::derivation
   **直线与平面夹角公式推导**（为何用 $\sin$ 而非 $\cos$）：

   直线 $L$ 与平面 $\pi$ 的夹角 $\theta$ 定义为直线与其在平面内投影直线的夹角（范围 $[0,\frac{\pi}{2}]$）。

   设直线方向向量为 $\boldsymbol{s}$，平面法向量为 $\boldsymbol{n}$，记 $\boldsymbol{s}$ 与 $\boldsymbol{n}$ 的夹角为 $\varphi$。

   **关键几何关系**：直线在平面内的投影方向与法向量垂直，故夹角 $\theta$ 与 $\varphi$ 互余，即：

   $$\theta + \varphi = \frac{\pi}{2}$$

   因此 $\sin\theta = \cos\varphi$。由点积公式 $\cos\varphi = \dfrac{|\boldsymbol{s}\cdot\boldsymbol{n}|}{|\boldsymbol{s}||\boldsymbol{n}|}$（取绝对值保证锐角），得：

   $$\sin\theta = \frac{|\boldsymbol{s}\cdot\boldsymbol{n}|}{|\boldsymbol{s}||\boldsymbol{n}|}$$

   - 当 $\sin\theta=0$（即 $\boldsymbol{s}\cdot\boldsymbol{n}=0$）：$\boldsymbol{s}\perp\boldsymbol{n}$，直线在平面内或平行于平面；
   - 当 $\sin\theta=1$（即 $\boldsymbol{s}\parallel\boldsymbol{n}$）：直线垂直于平面。
   :::

   因此夹角$\boldsymbol{\theta=\arcsin\frac{1}{6}}$。
6. 易错提示：直线与平面夹角公式是$\sin\theta$，不是$\cos\theta$，极易混淆！

---

### 题型 2：点在平面/直线上的投影（高频考点）

**例题 11** 求点$M(1,2,1)$在平面$\pi:x+2y+2z-10=0$上的投影点。

**详细解析**

1. 核心思路：点在平面上的投影，是过该点作平面的垂线，垂线与平面的交点即为投影点；垂线的方向向量就是平面的法向量。
2. 步骤 1：写垂线的参数方程
   平面法向量$\boldsymbol{n}=(1,2,2)$，过点$M(1,2,1)$的垂线参数方程为：
   $$x=1+t,\ y=2+2t,\ z=1+2t \quad t\in\mathbb{R}$$
3. 步骤 2：求垂线与平面的交点
   将参数方程代入平面方程：
   $$(1+t)+2(2+2t)+2(1+2t)-10=0$$
   化简得：$-3+9t=0 \implies t=\frac{1}{3}$。
4. 步骤 3：求投影点坐标
   代入$t=\frac{1}{3}$，得投影点：$\boldsymbol{(\frac{4}{3},\frac{8}{3},\frac{5}{3})}$。

---

**例题 12** 求点$M(2,1,3)$在直线$L:\frac{x+1}{3}=\frac{y-1}{2}=\frac{z}{-1}$上的投影点。

**详细解析**

1. 核心思路：点在直线上的投影，是过该点作直线的垂直平面，平面与直线的交点即为投影点；垂直平面的法向量就是直线的方向向量。
2. 步骤 1：写垂直平面的方程
   直线方向向量$\boldsymbol{s}=(3,2,-1)$，即垂直平面的法向量，平面过点$M(2,1,3)$，代入点法式：
   $$3(x-2)+2(y-1)-1(z-3)=0$$
   化简得：$3x+2y-z-5=0$。
3. 步骤 2：求直线与平面的交点
   写出直线的参数方程：$x=-1+3t,\ y=1+2t,\ z=-t$，代入垂直平面方程：
   $$3(-1+3t)+2(1+2t)-(-t)-5=0$$
   化简得：$-6+14t=0 \implies t=\frac{3}{7}$。
4. 步骤 3：求投影点坐标
   代入$t=\frac{3}{7}$，得投影点：$\boldsymbol{(\frac{2}{7},\frac{13}{7},-\frac{3}{7})}$。

---

### 题型 3：直线在平面上的投影直线（重难点）

**例题 13** 求直线$L:\begin{cases}x+y-z-1=0 \\ x-y+z+1=0\end{cases}$在平面$\pi:x+y+z=0$上的投影直线方程。

**详细解析**

这里提供两种通用解法，优先掌握**平面束法**（更快捷）。

#### 方法一：平面束法（推荐）

1. 核心思路：投影直线是“过直线$L$且与平面$\pi$垂直的平面”与$\pi$的交线；先通过平面束找到这个垂直平面，再联立得到交线。
2. 步骤 1：写过直线$L$的平面束方程
   直线$L$是两个平面的交线，过$L$的所有平面（除第二个平面）可表示为：
   $$(x+y-z-1)+\lambda(x-y+z+1)=0 \quad \lambda\in\mathbb{R}$$

   :::derivation
   **平面束方程推导**：

   设直线 $L$ 为两平面 $\pi_1: F_1(x,y,z)=0$ 与 $\pi_2: F_2(x,y,z)=0$ 的交线，即 $L$ 上的点同时满足 $F_1=0$ 和 $F_2=0$。

   构造方程：$\lambda_1 F_1(x,y,z) + \lambda_2 F_2(x,y,z) = 0$，其中 $\lambda_1$、$\lambda_2$ 不全为零。

   **验证过交线**：对 $L$ 上任一点，$F_1=0$ 且 $F_2=0$，故 $\lambda_1\cdot0+\lambda_2\cdot0=0$ 恒成立，该方程确实过交线 $L$。

   **验证是平面**：$F_1$、$F_2$ 均为一次式，其线性组合仍为一次式，故表示平面。

   当 $\lambda_1\neq 0$ 时，两边除以 $\lambda_1$，令 $\lambda=\lambda_2/\lambda_1$，得单参数平面束方程：

   $$F_1(x,y,z) + \lambda F_2(x,y,z) = 0$$

   **注意**：该方程包含了过 $L$ 的所有平面，**唯独不含** $\pi_2$ 本身（对应 $\lambda_1=0$ 的情形），故使用时需单独验证 $\pi_2$ 是否满足条件。
   :::

   整理得：$(1+\lambda)x+(1-\lambda)y+(\lambda-1)z+(\lambda-1)=0$，法向量$\boldsymbol{n_1}=(1+\lambda,1-\lambda,\lambda-1)$。
3. 步骤 2：求垂直平面的$\lambda$值
   平面束中的平面需与$\pi$垂直，故法向量点积为 0。$\pi$的法向量$\boldsymbol{n}=(1,1,1)$，因此：
   $$(1+\lambda)\times1+(1-\lambda)\times1+(\lambda-1)\times1=0$$
   化简得：$1+\lambda=0 \implies \lambda=-1$。
4. 步骤 3：得到垂直平面方程
   代入$\lambda=-1$，得：$2y-2z-2=0$，化简为$\boldsymbol{y-z-1=0}$。
5. 步骤 4：联立得到投影直线方程
   投影直线是垂直平面与$\pi$的交线，即：
   $$\boldsymbol{\begin{cases}y-z-1=0 \\ x+y+z=0\end{cases}}$$

#### 方法二：投影点法

1. 核心思路：找到直线$L$上两个点，分别求其在平面$\pi$上的投影点，两个投影点确定的直线即为投影直线。
2. 步骤 1：求直线$L$的参数方程
   找$L$上定点：令$z=0$，解得$x=0,y=1$，即$M_1(0,1,0)$；
   求方向向量：$\boldsymbol{s}=\boldsymbol{n_1}\times\boldsymbol{n_2}=\begin{vmatrix}\boldsymbol{i}&\boldsymbol{j}&\boldsymbol{k}\\1&1&-1\\1&-1&1\end{vmatrix}=(0,-2,-2)$，简化为$(0,1,1)$；
   因此$L$的参数方程：$x=0,\ y=1+t,\ z=t$。
3. 步骤 2：求两个点的投影点
   - 点$M_1(0,1,0)$的投影：过$M_1$作$\pi$的垂线$x=t,y=1+t,z=t$，代入$\pi$得$t=-\frac{1}{3}$，投影点$M_1'(-\frac{1}{3},\frac{2}{3},-\frac{1}{3})$；
   - 取$t=1$，得$L$上点$M_2(0,2,1)$，同理求得投影点$M_2'(-1,1,0)$。
4. 步骤 3：写投影直线方程
   过$M_1',M_2'$的直线方向向量$\boldsymbol{s'}=(-\frac{2}{3},\frac{1}{3},\frac{1}{3})$，简化为$(-2,1,1)$，对称式为：
   $$\frac{x+\frac{1}{3}}{-2}=\frac{y-\frac{2}{3}}{1}=\frac{z+\frac{1}{3}}{1}$$
   化为一般式与方法一结果完全一致。

---

### 题型 4：距离问题（高频考点）

**例题 14** 求点$M(2,1,3)$到直线$L:\frac{x+1}{3}=\frac{y-1}{2}=\frac{z}{-1}$的距离。

**详细解析**

推荐使用**叉乘公式法**，无需计算投影点，更快捷。

1. 核心公式：点到直线距离$d=\frac{|\overrightarrow{M_0M}\times\boldsymbol{s}|}{|\boldsymbol{s}|}$，几何意义是“以$\overrightarrow{M_0M}$和$\boldsymbol{s}$为邻边的平行四边形的高”。
2. 步骤 1：提取核心参数
   直线$L$上定点$M_0(-1,1,0)$，方向向量$\boldsymbol{s}=(3,2,-1)$；
   向量$\overrightarrow{M_0M}=(2-(-1),1-1,3-0)=(3,0,3)$。
3. 步骤 2：计算叉乘$\overrightarrow{M_0M}\times\boldsymbol{s}$
   $$\overrightarrow{M_0M}\times\boldsymbol{s}=\begin{vmatrix} \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\ 3 & 0 & 3 \\ 3 & 2 & -1 \end{vmatrix}=(-6,12,6)$$
4. 步骤 3：计算模长与距离
   $|\overrightarrow{M_0M}\times\boldsymbol{s}|=\sqrt{(-6)^2+12^2+6^2}=6\sqrt{6}$；
   $|\boldsymbol{s}|=\sqrt{3^2+2^2+(-1)^2}=\sqrt{14}$；
   因此距离：
   $$d=\frac{6\sqrt{6}}{\sqrt{14}}=\boldsymbol{\frac{6\sqrt{21}}{7}}$$

   :::derivation
   **点到直线距离的叉乘公式推导**（$d=\dfrac{|\overrightarrow{M_0M}\times\boldsymbol{s}|}{|\boldsymbol{s}|}$）：

   设直线 $L$ 过点 $M_0$，方向向量为 $\boldsymbol{s}$，求点 $M$ 到 $L$ 的距离 $d$。

   **几何思路**：过 $M_0$ 和 $M$ 构造向量 $\overrightarrow{M_0M}$，它与方向向量 $\boldsymbol{s}$ 张成一个平行四边形，点 $M$ 到直线 $L$ 的距离 $d$ 恰好是该平行四边形的高（以 $\boldsymbol{s}$ 为底边）。

   **推导步骤**：

   1. 平行四边形面积 $S$：以 $\overrightarrow{M_0M}$ 和 $\boldsymbol{s}$ 为邻边的平行四边形面积为 $|\overrightarrow{M_0M}\times\boldsymbol{s}|$（叉乘模长的几何意义）。

   2. 面积的另一种表达：$S = \text{底} \times \text{高} = |\boldsymbol{s}|\cdot d$。

   3. 两式联立：$|\overrightarrow{M_0M}\times\boldsymbol{s}| = |\boldsymbol{s}|\cdot d$。

   解得：

   $$d=\frac{|\overrightarrow{M_0M}\times\boldsymbol{s}|}{|\boldsymbol{s}|}$$

   该公式的优势在于无需计算投影点，直接用叉乘一步到位。
   :::

---

**例题 15** 求两异面直线$L_1:\frac{x-1}{1}=\frac{y-2}{0}=\frac{z-3}{-1}$，$L_2:\frac{x}{2}=\frac{y+1}{1}=\frac{z}{1}$的距离。

**详细解析**

1. 核心公式：两异面直线距离$d=\frac{|\overrightarrow{M_1M_2}\cdot(\boldsymbol{s_1}\times\boldsymbol{s_2})|}{|\boldsymbol{s_1}\times\boldsymbol{s_2}|}$，几何意义是$\overrightarrow{M_1M_2}$在公垂线方向上的投影的绝对值。
2. 步骤 1：提取核心参数
   $L_1$定点$M_1(1,2,3)$，方向向量$\boldsymbol{s_1}=(1,0,-1)$；
   $L_2$定点$M_2(0,-1,0)$，方向向量$\boldsymbol{s_2}=(2,1,1)$；
   向量$\overrightarrow{M_1M_2}=(-1,-3,-3)$。
3. 步骤 2：计算公垂线方向向量$\boldsymbol{s_1}\times\boldsymbol{s_2}$
   $$\boldsymbol{s_1}\times\boldsymbol{s_2}=\begin{vmatrix} \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\ 1 & 0 & -1 \\ 2 & 1 & 1 \end{vmatrix}=(1,-3,1)$$
   模长$|\boldsymbol{s_1}\times\boldsymbol{s_2}|=\sqrt{1+9+1}=\sqrt{11}$。
4. 步骤 3：计算混合积与距离
   混合积$\overrightarrow{M_1M_2}\cdot(\boldsymbol{s_1}\times\boldsymbol{s_2})=(-1)\times1+(-3)\times(-3)+(-3)\times1=5$；
   因此距离：
   $$d=\frac{|5|}{\sqrt{11}}=\boldsymbol{\frac{5\sqrt{11}}{11}}$$

   :::derivation
   **两异面直线距离公式推导**（$d=\dfrac{|\overrightarrow{M_1M_2}\cdot(\boldsymbol{s_1}\times\boldsymbol{s_2})|}{|\boldsymbol{s_1}\times\boldsymbol{s_2}|}$）：

   设两异面直线 $L_1$（过 $M_1$，方向向量 $\boldsymbol{s_1}$）和 $L_2$（过 $M_2$，方向向量 $\boldsymbol{s_2}$），求公垂线段的长度 $d$。

   **推导步骤**：

   1. **公垂线方向**：公垂线同时垂直于 $L_1$ 和 $L_2$，故其方向向量为 $\boldsymbol{s_1}\times\boldsymbol{s_2}$（同时垂直于两个方向向量）。

   2. **投影法求距离**：在两直线上各取一点 $M_1$、$M_2$，构造向量 $\overrightarrow{M_1M_2}$。两异面直线的距离等于 $\overrightarrow{M_1M_2}$ 在公垂线方向上的**投影长度**（垂直分量）。

   3. **投影公式**：向量 $\overrightarrow{M_1M_2}$ 在单位向量 $\dfrac{\boldsymbol{s_1}\times\boldsymbol{s_2}}{|\boldsymbol{s_1}\times\boldsymbol{s_2}|}$ 方向上的投影为：

   $$\text{投影} = \overrightarrow{M_1M_2}\cdot\frac{\boldsymbol{s_1}\times\boldsymbol{s_2}}{|\boldsymbol{s_1}\times\boldsymbol{s_2}|}$$

   4. 取绝对值（距离非负），得：

   $$d=\frac{|\overrightarrow{M_1M_2}\cdot(\boldsymbol{s_1}\times\boldsymbol{s_2})|}{|\boldsymbol{s_1}\times\boldsymbol{s_2}|}$$

   其中分子 $\overrightarrow{M_1M_2}\cdot(\boldsymbol{s_1}\times\boldsymbol{s_2})$ 为**混合积**，几何意义是以三个向量为邻边的平行六面体的体积；分母为底面平行四边形面积，二者之商即为高（距离）。
   :::

---

### 题型 5：综合提高题（考研高频）

**例题 16** 求过直线$L:\begin{cases}x+5y+z=0 \\ x-z+4=0\end{cases}$，且与平面$\pi:x-4y-8z+12=0$成$45^\circ$角的平面方程。

**详细解析**

1. 核心思路：用平面束方程设出过直线$L$的所有平面，再通过夹角公式求解参数，注意验证平面束遗漏的平面。
2. 步骤 1：设平面束方程
   过直线$L$的平面束方程为：
   $$(x+5y+z)+\lambda(x-z+4)=0$$
   整理得：$(1+\lambda)x+5y+(1-\lambda)z+4\lambda=0$，法向量$\boldsymbol{n_1}=(1+\lambda,5,1-\lambda)$。
3. 步骤 2：通过夹角公式列方程
   已知平面$\pi$的法向量$\boldsymbol{n}=(1,-4,-8)$，两平面夹角为$45^\circ$，故：
   $$\cos45^\circ=\frac{|\boldsymbol{n_1}\cdot\boldsymbol{n}|}{|\boldsymbol{n_1}||\boldsymbol{n}|}$$
   计算得：$\boldsymbol{n_1}\cdot\boldsymbol{n}=9\lambda-27$，$|\boldsymbol{n}|=9$，$|\boldsymbol{n_1}|=\sqrt{2\lambda^2+27}$，$\cos45^\circ=\frac{\sqrt{2}}{2}$，代入得：
   $$\frac{\sqrt{2}}{2}=\frac{|9\lambda-27|}{9\sqrt{2\lambda^2+27}}$$
4. 步骤 3：解方程求$\lambda$
   化简平方后得：$2\lambda^2+27=2(\lambda^2-6\lambda+9)$，解得$\lambda=-\frac{3}{4}$。
5. 步骤 4：验证平面束遗漏的平面
   上述平面束不包含平面$x-z+4=0$，单独验证：
   其法向量$\boldsymbol{n_2}=(1,0,-1)$，$\cos\theta=\frac{|1\times1+0\times(-4)+(-1)\times(-8)|}{\sqrt{2}\times9}=\frac{9}{9\sqrt{2}}=\frac{\sqrt{2}}{2}$，满足$45^\circ$夹角，故也是解。
6. 步骤 5：写出最终平面方程
   代入$\lambda=-\frac{3}{4}$，得$x+20y+7z-12=0$；
   因此最终解为：$\boldsymbol{x+20y+7z-12=0}$ 和 $\boldsymbol{x-z+4=0}$。
7. 易错提示：单参数平面束会遗漏一个平面，必须单独验证，否则会漏解！

---

**例题 17** 求两异面直线$L_1:\frac{x-1}{1}=\frac{y-1}{2}=\frac{z-1}{3}$，$L_2:\frac{x}{1}=\frac{y+2}{1}=\frac{z-3}{2}$的公垂线方程。

**详细解析**

1. 核心思路：公垂线的方向向量为两直线方向向量的叉乘；公垂线是“过$L_1$且平行于公垂线方向的平面”与“过$L_2$且平行于公垂线方向的平面”的交线。
2. 步骤 1：求公垂线的方向向量$\boldsymbol{s}$
   $L_1$方向向量$\boldsymbol{s_1}=(1,2,3)$，$L_2$方向向量$\boldsymbol{s_2}=(1,1,2)$，故：
   $$\boldsymbol{s}=\boldsymbol{s_1}\times\boldsymbol{s_2}=\begin{vmatrix} \boldsymbol{i} & \boldsymbol{j} & \boldsymbol{k} \\ 1 & 2 & 3 \\ 1 & 1 & 2 \end{vmatrix}=(1,1,-1)$$

   :::derivation
   **公垂线方向向量公式推导**（$\boldsymbol{s}=\boldsymbol{s_1}\times\boldsymbol{s_2}$）：

   两异面直线 $L_1$、$L_2$ 的公垂线是同时与两直线垂直相交的直线。

   设 $L_1$ 的方向向量为 $\boldsymbol{s_1}$，$L_2$ 的方向向量为 $\boldsymbol{s_2}$。公垂线需同时垂直于 $L_1$ 和 $L_2$，即其方向向量 $\boldsymbol{s}$ 需同时满足：

   - $\boldsymbol{s}\cdot\boldsymbol{s_1}=0$（垂直于 $L_1$）
   - $\boldsymbol{s}\cdot\boldsymbol{s_2}=0$（垂直于 $L_2$）

   由叉乘的定义，$\boldsymbol{s_1}\times\boldsymbol{s_2}$ 的结果同时垂直于 $\boldsymbol{s_1}$ 和 $\boldsymbol{s_2}$，恰好满足要求。

   故公垂线的方向向量为：

   $$\boldsymbol{s}=\boldsymbol{s_1}\times\boldsymbol{s_2}$$

   有了公垂线方向后，公垂线可看作"过 $L_1$ 且平行于 $\boldsymbol{s}$ 的平面"与"过 $L_2$ 且平行于 $\boldsymbol{s}$ 的平面"的交线。
   :::
3. 步骤 2：求过$L_1$且平行于$\boldsymbol{s}$的平面$\pi_1$
   $\pi_1$的法向量$\boldsymbol{n_1}=\boldsymbol{s_1}\times\boldsymbol{s}=\begin{vmatrix}\boldsymbol{i}&\boldsymbol{j}&\boldsymbol{k}\\1&2&3\\1&1&-1\end{vmatrix}=(-5,4,-1)$；
   $\pi_1$过$L_1$上定点$M_1(1,1,1)$，代入点法式得：
   $$-5(x-1)+4(y-1)-1(z-1)=0 \implies 5x-4y+z-2=0$$
4. 步骤 3：求过$L_2$且平行于$\boldsymbol{s}$的平面$\pi_2$
   $\pi_2$的法向量$\boldsymbol{n_2}=\boldsymbol{s_2}\times\boldsymbol{s}=\begin{vmatrix}\boldsymbol{i}&\boldsymbol{j}&\boldsymbol{k}\\1&1&2\\1&1&-1\end{vmatrix}=(-3,3,0)$，简化为$(1,-1,0)$；
   $\pi_2$过$L_2$上定点$M_2(0,-2,3)$，代入点法式得：
   $$1\cdot(x-0)-1\cdot(y+2)+0\cdot(z-3)=0 \implies x-y-2=0$$
5. 步骤 4：写出公垂线方程
   公垂线是$\pi_1$与$\pi_2$的交线，即：
   $$\boldsymbol{\begin{cases}5x-4y+z-2=0 \\ x-y-2=0\end{cases}}$$
