---
title: 复变函数（一）
pubDate: 2026-04-23T13:01:00.000Z
updatedDate: 2026-04-23T13:03:49.681Z
draft: false
description: 
category: 复变函数
slugId: 复变函数（一）
---

# 复变函数（西安交通大学版）第一章知识点总结

> 说明：本文档已针对 GitHub Markdown 数学渲染进行优化。请确保在 GitHub 的 **Preview (预览)** 标签页中查看。所有公式均采用最稳定的独立块格式，避免兼容性问题。

## 1.1 复数及其代数运算

### 1.1.1 复数的定义与基本性质
复数 $z$ 定义为有序实数对 $(x, y)$，引入虚数单位 $i$（满足 $i^2 = -1$）后写作代数形式：

$$
z = x + iy, \quad x, y \in \mathbb{R}
$$

- 实部：$\operatorname{Re}(z) = x$
- 虚部：$\operatorname{Im}(z) = y$
- 共轭复数：$\bar{z} = x - iy$

**共轭运算基本性质**（由定义直接验证）：

$$
\overline{z_1 \pm z_2} = \bar{z}_1 \pm \bar{z}_2
$$

$$
\overline{z_1 z_2} = \bar{z}_1 \bar{z}_2, \quad \overline{\left(\frac{z_1}{z_2}\right)} = \frac{\bar{z}_1}{\bar{z}_2} \quad (z_2 \neq 0)
$$

$$
z \bar{z} = |z|^2, \quad \operatorname{Re}(z) = \frac{z + \bar{z}}{2}, \quad \operatorname{Im}(z) = \frac{z - \bar{z}}{2i}
$$

### 1.1.2 复数的几何表示与模
复数 $z = x + iy$ 与复平面 $\mathbb{C}$ 上的点 $(x, y)$ 一一对应。
- **模（绝对值）**：$|z| = \sqrt{x^2 + y^2} \ge 0$，几何意义为原点到点 $z$ 的欧氏距离。
- **三角不等式**：
  对任意 $z_1, z_2 \in \mathbb{C}$，有

  $$
  |z_1 + z_2| \le |z_1| + |z_2|, \quad \big||z_1| - |z_2|\big| \le |z_1 - z_2|
  $$

  **逐步推导过程**：

  第一步，利用模与共轭的关系展开平方：

  $$
  |z_1 + z_2|^2 = (z_1 + z_2)\overline{(z_1 + z_2)} = (z_1 + z_2)(\bar{z}_1 + \bar{z}_2)
  $$

  第二步，多项式展开：

  $$
  |z_1 + z_2|^2 = z_1\bar{z}_1 + z_2\bar{z}_2 + z_1\bar{z}_2 + \bar{z}_1 z_2
  $$

  第三步，利用 $z\bar{z} = |z|^2$ 与 $w + \bar{w} = 2\operatorname{Re}(w)$：

  $$
  |z_1 + z_2|^2 = |z_1|^2 + |z_2|^2 + 2\operatorname{Re}(z_1\bar{z}_2)
  $$

  第四步，利用实部性质 $\operatorname{Re}(w) \le |w|$ 进行放缩：

  $$
  |z_1 + z_2|^2 \le |z_1|^2 + |z_2|^2 + 2|z_1\bar{z}_2|
  $$

  第五步，利用模的乘积性质 $|z_1\bar{z}_2| = |z_1||z_2|$ 并配方：

  $$
  |z_1 + z_2|^2 \le |z_1|^2 + |z_2|^2 + 2|z_1||z_2| = (|z_1| + |z_2|)^2
  $$

  第六步，两边开方即得：

  $$
  |z_1 + z_2| \le |z_1| + |z_2|
  $$

  反向不等式由 $|z_1| = |(z_1 - z_2) + z_2| \le |z_1 - z_2| + |z_2|$ 移项直接得到。

### 1.1.3 辐角与指数形式
- **辐角**：满足 $\tan\theta = \frac{y}{x}$ 的角 $\theta$ 称为 $z$ 的辐角，记为 $\arg z$。辐角具有多值性，任意两个值相差 $2k\pi\ (k \in \mathbb{Z})$。
- **主值辐角**：规定 $\operatorname{Arg} z \in (-\pi, \pi]$ 为主值分支。
- **欧拉公式推导**：
  利用实函数的麦克劳林级数展开：

  $$
  e^{i\theta} = \sum_{n=0}^{\infty} \frac{(i\theta)^n}{n!} = \sum_{k=0}^{\infty} \frac{(-1)^k \theta^{2k}}{(2k)!} + i \sum_{k=0}^{\infty} \frac{(-1)^k \theta^{2k+1}}{(2k+1)!}
  $$

  对比 $\cos\theta$ 与 $\sin\theta$ 的级数展开，得：

  $$
  e^{i\theta} = \cos\theta + i\sin\theta
  $$

- **指数形式与三角形式**：

  $$
  z = r(\cos\theta + i\sin\theta) = re^{i\theta}, \quad r = |z|, \ \theta = \arg z
  $$

### 1.1.4 复数的乘除、乘幂与方根
设 $z_1 = r_1 e^{i\theta_1}, z_2 = r_2 e^{i\theta_2}$：
- **乘法**：$z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)}$，模相乘，辐角相加。
- **除法**：$\frac{z_1}{z_2} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)} \ (z_2 \neq 0)$。
- **棣莫弗公式（乘幂）**：

  $$
  z^n = r^n e^{in\theta} = r^n(\cos n\theta + i\sin n\theta), \quad n \in \mathbb{Z}
  $$

- **$n$ 次方根推导**：
  求方程 $w^n = z\ (z \neq 0)$ 的所有解。设 $w = \rho e^{i\phi}$，代入得：

  $$
  \rho^n e^{in\phi} = r e^{i\theta}
  $$

  由复数相等的充要条件（模相等，辐角相差 $2k\pi$）：

  $$
  \rho = \sqrt[n]{r}, \quad n\phi = \theta + 2k\pi \implies \phi_k = \frac{\theta + 2k\pi}{n}
  $$

  解得 $n$ 个不同的根为：

  $$
  w_k = \sqrt[n]{r} \left[ \cos\left(\frac{\theta + 2k\pi}{n}\right) + i\sin\left(\frac{\theta + 2k\pi}{n}\right) \right], \quad k = 0, 1, \dots, n-1
  $$

  几何意义：$n$ 个根均匀分布在以原点为圆心、$\sqrt[n]{r}$ 为半径的圆周上，构成正 $n$ 边形的顶点。

## 1.2 复平面上的点集与区域

### 1.2.1 基本点集概念
- **邻域**：$N(z_0, \delta) = \{z \in \mathbb{C} : |z - z_0| < \delta\}$。去心邻域记为 $\mathring{N}(z_0, \delta) = N(z_0, \delta) \setminus \{z_0\}$。
- **内点**：若存在 $\delta > 0$ 使 $N(z_0, \delta) \subseteq E$，则 $z_0$ 为 $E$ 的内点。
- **边界点**：若 $z_0$ 的任意邻域内既含 $E$ 的点又含不属于 $E$ 的点，则 $z_0$ 为边界点。全体边界点记为 $\partial E$。
- **开集与闭集**：全由内点组成的集合为开集；包含自身所有边界点的集合为闭集。

### 1.2.2 区域与连通性
- **区域（Domain）**：非空连通开集称为区域。
- **连通性判定**：区域内任意两点可用完全落在区域内的有限条直线段（折线）连接。
- **单连通域**：区域内任意简单闭曲线的内部仍完全属于该区域（拓扑上无“洞”）。
- **多连通域**：非单连通的区域，含一个或多个“洞”。

### 1.2.3 扩充复平面
引入无穷远点 $\infty$，定义扩充复平面 $\overline{\mathbb{C}} = \mathbb{C} \cup \{\infty\}$。
- $\infty$ 的邻域：$N(\infty, R) = \{z : |z| > R\} \cup \{\infty\}$。
- 约定运算：对 $a \in \mathbb{C}$，$a \pm \infty = \infty$，$a \cdot \infty = \infty\ (a \neq 0)$，$\frac{a}{\infty} = 0$，$\frac{\infty}{a} = \infty$。未定式 $\infty - \infty, 0 \cdot \infty, \frac{\infty}{\infty}, \frac{0}{0}$ 在复分析中无定义。

## 1.3 复变函数与初等函数

### 1.3.1 复变函数的定义
设 $D \subseteq \mathbb{C}$ 为非空集合，若对每个 $z \in D$，按一定法则有唯一确定的复数 $w$ 与之对应，则称 $w$ 为 $z$ 的复变函数，记作 $w = f(z)$。
令 $z = x + iy, w = u + iv$，则 $f(z)$ 等价于两个二元实函数：

$$
f(z) = u(x, y) + i v(x, y)
$$

几何上，复变函数表示 $z$ 平面到 $w$ 平面的映射。

### 1.3.2 指数函数 $e^z$
定义：

$$
e^z = e^x (\cos y + i \sin y), \quad z = x + iy
$$

**性质**：
1. $e^{z_1 + z_2} = e^{z_1} e^{z_2}$（代入定义利用三角和角公式可证）。
2. 周期性：$e^{z + 2\pi i} = e^z$，基本周期为 $2\pi i$。
3. $|e^z| = e^x$，$\arg(e^z) = y + 2k\pi$。
4. $e^z \neq 0$ 对任意 $z \in \mathbb{C}$ 成立。

### 1.3.3 对数函数 $\operatorname{Ln} z$
定义为指数函数的反函数：若 $e^w = z$，则 $w = \operatorname{Ln} z$。
设 $w = u + iv$，则 $e^u e^{iv} = |z| e^{i\arg z}$。对比模与辐角得：

$$
u = \ln |z|, \quad v = \arg z + 2k\pi \ (k \in \mathbb{Z})
$$

故

$$
\operatorname{Ln} z = \ln |z| + i \arg z = \ln |z| + i(\operatorname{Arg} z + 2k\pi), \quad k \in \mathbb{Z}
$$

- **主值分支**：$\ln z = \ln |z| + i \operatorname{Arg} z$，定义域为 $\mathbb{C} \setminus (-\infty, 0]$。
- **运算性质**：$\operatorname{Ln}(z_1 z_2) = \operatorname{Ln} z_1 + \operatorname{Ln} z_2$ 为集合相等关系，等式两端各取一值时可能相差 $2k\pi i$。

### 1.3.4 三角函数与双曲函数
利用指数函数统一定义：

$$
\sin z = \frac{e^{iz} - e^{-iz}}{2i}, \quad \cos z = \frac{e^{iz} + e^{-iz}}{2}
$$

$$
\sinh z = \frac{e^z - e^{-z}}{2}, \quad \cosh z = \frac{e^z + e^{-z}}{2}
$$

**重要结论**：
- 复三角函数在复平面上无界。例如 $\sin(iy) = i\sinh y$，当 $y \to \infty$ 时 $|\sin(iy)| \to \infty$。
- 周期为 $2\pi$。
- 基本恒等式 $\sin^2 z + \cos^2 z = 1$ 与 $\cosh^2 z - \sinh^2 z = 1$ 依然成立。
- 转换关系：$\sin(iz) = i\sinh z$，$\cos(iz) = \cosh z$。

### 1.3.5 幂函数与反三角函数
- **幂函数**：$z^\alpha = e^{\alpha \operatorname{Ln} z}$。当 $\alpha$ 为整数时为单值；当 $\alpha = p/q$（既约分数）时为 $q$ 值函数；当 $\alpha$ 为无理数或复数时为无穷多值。
- **反正弦函数推导**：
  令 $w = \operatorname{Arcsin} z$，则 $z = \sin w = \frac{e^{iw} - e^{-iw}}{2i}$。
  两边同乘 $2i e^{iw}$ 整理得关于 $e^{iw}$ 的二次方程：

  $$
  e^{2iw} - 2i z e^{iw} - 1 = 0
  $$

  由求根公式得：

  $$
  e^{iw} = iz \pm \sqrt{1 - z^2}
  $$

  取对数得：

  $$
  \operatorname{Arcsin} z = -i \operatorname{Ln}\left(iz + \sqrt{1 - z^2}\right)
  $$

  同理可得：

  $$
  \operatorname{Arccos} z = -i \operatorname{Ln}\left(z + \sqrt{z^2 - 1}\right), \quad \operatorname{Arctan} z = \frac{i}{2} \operatorname{Ln}\left(\frac{i+z}{i-z}\right)
  $$

## 1.4 复变函数的极限与连续性

### 1.4.1 极限的定义
设函数 $f(z)$ 在 $z_0$ 的某去心邻域内有定义。若存在复数 $A$，使得对任意 $\varepsilon > 0$，总存在 $\delta > 0$，当 $0 < |z - z_0| < \delta$ 时，恒有 $|f(z) - A| < \varepsilon$，则称 $f(z)$ 当 $z \to z_0$ 时以 $A$ 为极限，记作：

$$
\lim_{z \to z_0} f(z) = A
$$

几何意义：当 $z$ 充分接近 $z_0$ 时，$f(z)$ 的值落在 $A$ 的任意指定邻域内。极限存在要求 $z$ 沿复平面内任意路径趋于 $z_0$ 时结果一致。

### 1.4.2 极限与实部虚部极限的等价性
**定理**：设 $f(z) = u(x,y) + iv(x,y)$，$A = a + ib$，$z_0 = x_0 + iy_0$。则

$$
\lim_{z \to z_0} f(z) = A \iff \lim_{(x,y) \to (x_0,y_0)} u(x,y) = a \ \text{且} \ \lim_{(x,y) \to (x_0,y_0)} v(x,y) = b
$$

**证明**：
- 必要性 $(\Rightarrow)$：若 $\lim_{z \to z_0} f(z) = A$，由不等式 $|u(x,y) - a| \le |f(z) - A|$ 与 $|v(x,y) - b| \le |f(z) - A|$，根据实数极限的夹逼准则即得实部虚部极限存在且分别为 $a, b$。
- 充分性 $(\Leftarrow)$：若实部虚部极限成立，对任意 $\varepsilon > 0$，存在 $\delta_1, \delta_2 > 0$ 使得当 $0 < \sqrt{(x-x_0)^2 + (y-y_0)^2} < \delta$（取 $\delta = \min(\delta_1, \delta_2)$）时，$|u-a| < \varepsilon/2$，$|v-b| < \varepsilon/2$。则

  $$
  |f(z) - A| = \sqrt{(u-a)^2 + (v-b)^2} \le |u-a| + |v-b| < \varepsilon
  $$

  故 $\lim_{z \to z_0} f(z) = A$。证毕。

该定理将复变函数极限问题转化为二元实函数极限问题，是计算与证明的基础工具。

### 1.4.3 连续性
**定义**：若 $\lim_{z \to z_0} f(z) = f(z_0)$，则称 $f(z)$ 在 $z_0$ 处连续。若在区域 $D$ 内每一点都连续，则称 $f(z)$ 在 $D$ 内连续。

**连续函数的运算性质**：
1. 连续函数的和、差、积、商（分母不为零）仍连续。
2. 连续函数的复合函数连续。
3. 所有初等函数在其定义域内连续。

**重要定理**：
- **有界性与最值定理**：若 $f(z)$ 在有界闭区域（紧集）$\overline{D}$ 上连续，则 $|f(z)|$ 在 $\overline{D}$ 上有界，且必能取到最大值与最小值。
- **一致连续性**：在紧集上连续的复变函数必然一致连续。

## 1.5 本章核心逻辑脉络
1. **代数基础**：复数运算规则 $\to$ 几何表示（模与辐角） $\to$ 指数形式统一乘除乘幂运算。
2. **拓扑基础**：点集分类 $\to$ 区域与连通性 $\to$ 为函数定义域提供严格数学描述。
3. **函数构建**：映射观点 $\to$ 实虚部分离 $\to$ 初等函数由指数函数统一生成并导出多值性。
4. **分析基础**：极限 $\varepsilon$-$\delta$ 定义 $\to$ 实虚部等价定理 $\to$ 连续性及其在紧集上的性质，为第二章解析函数与柯西-黎曼方程奠定分析基础。
