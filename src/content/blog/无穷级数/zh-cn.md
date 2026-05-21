---
title: 无穷级数
pubDate: 2026-05-21T04:54:00.000Z
updatedDate: 2026-05-21T12:35:03.248Z
draft: false
description: 
category: 高数
slugId: 无穷级数
---

# 无穷级数、审敛法、幂级数与函数展开成幂级数 详细讲解

> 本讲义涵盖常数项无穷级数的敛散性、正项级数审敛法（比较、比值、根值、积分）、交错级数与任意项级数（绝对收敛与条件收敛）、幂级数的收敛半径与和函数求法、以及函数的泰勒/麦克劳林展开。每个概念都给出推导过程，每道例题均写出详细步骤，并提供多种解法。

---

## 一、常数项无穷级数

### 1.1 定义与敛散性

给定数列 $\{u_n\}_{n=1}^{\infty}$，表达式

$$
\sum_{n=1}^{\infty} u_n = u_1 + u_2 + \cdots + u_n + \cdots
$$

称为**无穷级数**（简称级数）。其前 $n$ 项的**部分和**为

$$
S_n = u_1 + u_2 + \cdots + u_n = \sum_{k=1}^{n} u_k.
$$

- 若 $\lim\limits_{n\to\infty} S_n = S$ 存在且为有限数，则称级数**收敛**，并称 $S$ 为该级数的**和**，记作 $\sum_{n=1}^{\infty} u_n = S$。
- 若 $\lim\limits_{n\to\infty} S_n$ 不存在或为无穷大，则称级数**发散**。

**余项**：$r_n = S - S_n = \sum_{k=n+1}^{\infty} u_k$，收敛时必有 $\lim_{n\to\infty} r_n = 0$。

### 1.2 收敛的必要条件

若 $\sum u_n$ 收敛，则 $\lim_{n\to\infty} u_n = 0$。  
*推导*：$u_n = S_n - S_{n-1} \to S - S = 0$。

> **注意**：此条件非充分。反例：调和级数 $\sum \frac{1}{n}$ 通项趋于 0，但级数发散。

### 1.3 基本性质

1. **线性性质**：若 $\sum u_n$ 与 $\sum v_n$ 均收敛，则 $\sum (u_n \pm v_n) = \sum u_n \pm \sum v_n$，且 $\sum c u_n = c\sum u_n$。
2. **增减有限项**：去掉或增加有限项不改变敛散性（收敛时和会变）。
3. **加括号**：收敛级数加括号后仍收敛且和不变；若加括号后发散，则原级数发散；加括号收敛原级数未必收敛（如 $1-1+1-1+\cdots$）。

---

## 二、两个最基本的级数

### 2.1 几何级数（等比级数）

$$
\sum_{n=0}^{\infty} aq^n = a + aq + aq^2 + \cdots \quad (a \neq 0).
$$

部分和（$q \neq 1$）：$S_n = a\frac{1-q^n}{1-q}$。  
- $|q| < 1$：$q^n \to 0$，级数收敛，和 $S = \frac{a}{1-q}$。  
- $|q| \ge 1$：发散。

### 2.2 p-级数

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}.
$$

- $p > 1$ 收敛；
- $p \le 1$ 发散。  
（由积分审敛法证明，见 3.4 节。）

---

## 三、正项级数审敛法

若 $u_n \ge 0$，则 $\sum u_n$ 为**正项级数**。部分和数列 $\{S_n\}$ 单调递增，故收敛充要条件为 $\{S_n\}$ 有上界。

### 3.1 比较审敛法

**一般形式**：若存在 $N$，当 $n>N$ 时 $0 \le u_n \le v_n$，  
- $\sum v_n$ 收敛 $\Rightarrow$ $\sum u_n$ 收敛；  
- $\sum u_n$ 发散 $\Rightarrow$ $\sum v_n$ 发散。

**极限形式**：设 $\lim_{n\to\infty} \frac{u_n}{v_n} = l$（$u_n, v_n > 0$）：
- $0 < l < \infty$：同敛散；
- $l = 0$：$\sum v_n$ 收敛 $\Rightarrow$ $\sum u_n$ 收敛；
- $l = \infty$：$\sum v_n$ 发散 $\Rightarrow$ $\sum u_n$ 发散。

**例题 1**：判断 $\sum_{n=1}^{\infty} \frac{1}{n^2+1}$ 的敛散性。

**解法**（极限比较法）：  
当 $n\to\infty$ 时，$\frac{1}{n^2+1} \sim \frac{1}{n^2}$。取 $v_n = \frac{1}{n^2}$，

$$
\lim_{n\to\infty} \frac{u_n}{v_n} = \lim_{n\to\infty} \frac{n^2}{n^2+1} = 1 \in (0,\infty).
$$

$\sum v_n$ 收敛（$p=2>1$），故原级数收敛。

### 3.2 比值审敛法（达朗贝尔判别法）

设 $\lim_{n\to\infty} \frac{u_{n+1}}{u_n} = \rho$。  
- $\rho < 1$：收敛；  
- $\rho > 1$：发散；  
- $\rho = 1$：失效。

**推导思路**：$\rho < 1$ 时，取 $q \in (\rho, 1)$，$n$ 充分大时 $\frac{u_{n+1}}{u_n} < q$，故 $u_{n+k} < q^k u_n$，比较几何级数知收敛。$\rho > 1$ 时通项不趋于 0，发散。

**例题 2**：判别 $\sum_{n=1}^{\infty} \frac{n}{2^n}$。

**解法一（比值法）**：  

$$
\rho = \lim_{n\to\infty} \frac{n+1}{2^{n+1}} \cdot \frac{2^n}{n} = \lim_{n\to\infty} \frac{n+1}{2n} = \frac{1}{2} < 1
$$

收敛。

**解法二（根值法）**：$\lim_{n\to\infty} \sqrt[n]{\frac{n}{2^n}} = \frac{1}{2} \lim_{n\to\infty} \sqrt[n]{n} = \frac{1}{2} < 1$，收敛。

**解法三（幂级数求和）**：构造 $\sum n x^n$，收敛半径 $R=1$，和函数 $S(x)=\frac{x}{(1-x)^2}$。代入 $x=1/2$ 得和 $2$，既证收敛又求和。

### 3.3 根值审敛法（柯西判别法）

设 $\lim_{n\to\infty} \sqrt[n]{u_n} = \rho$。  
- $\rho < 1$：收敛；  
- $\rho > 1$：发散；  
- $\rho = 1$：失效。

**例题 3**：判别 $\sum_{n=1}^{\infty} \left(\frac{n}{2n+1}\right)^n$。

$$
\rho = \lim_{n\to\infty} \frac{n}{2n+1} = \frac{1}{2} < 1 \quad \text{收敛}.
$$

**例题 4**：判别 $\sum_{n=1}^{\infty} \left(1+\frac{1}{n}\right)^{n^2}$。

$$
\rho = \lim_{n\to\infty} \left(1+\frac{1}{n}\right)^n = e > 1 \quad \text{发散}.
$$

### 3.4 积分审敛法

设 $f(x)$ 在 $[1,+\infty)$ 上非负且单调递减，$u_n = f(n)$，则 $\sum u_n$ 与 $\int_1^{+\infty} f(x)\,dx$ 同敛散。

**推导**：由 $f(n+1) \le \int_n^{n+1} f(x) dx \le f(n)$ 求和即得部分和与积分的相互控制。

**p-级数的证明**：取 $f(x)=x^{-p}$。  
- $p=1$：$\int_1^\infty \frac{1}{x} dx = \infty$，发散；  
- $p \neq 1$：$\int_1^\infty x^{-p} dx = \lim_{b\to\infty} \frac{b^{1-p}-1}{1-p}$。  
  - $p>1$ 收敛，$p<1$ 发散。  
故 p-级数 $\sum 1/n^p$ 当 $p>1$ 收敛，$p\le1$ 发散。

---

## 四、交错级数与任意项级数

### 4.1 交错级数——莱布尼茨审敛法

形如 $\sum (-1)^{n-1} u_n$（$u_n>0$）为**交错级数**。  
**定理**：若 $\{u_n\}$ 单调递减且 $\lim u_n = 0$，则级数收敛，且和 $S \le u_1$，余项 $|R_n| \le u_{n+1}$。

**证明思路**：偶数部分和 $S_{2n}$ 单调增且有上界 $u_1$，故收敛；$S_{2n+1}=S_{2n}-u_{2n+1}$ 极限相同。

**例题 5**：交错调和级数 $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}$ 收敛（但非绝对收敛）。

### 4.2 绝对收敛与条件收敛

- **绝对收敛**：$\sum |u_n|$ 收敛。绝对收敛必收敛。
- **条件收敛**：$\sum u_n$ 收敛而 $\sum |u_n|$ 发散。

**判定流程**：
1. 检查 $\lim u_n = 0$（否则发散）。
2. 判断 $\sum |u_n|$ 敛散性（正项审敛法）。
3. 若 $\sum |u_n|$ 收敛，则绝对收敛；若发散，再考虑莱布尼茨或其他。

**例题 6**：$\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^p}$  
- $p>1$：绝对收敛；  
- $0<p\le1$：条件收敛（$p\le0$ 发散）。

---

## 五、幂级数

### 5.1 概念与阿贝尔定理

形如 $\sum_{n=0}^{\infty} a_n (x-x_0)^n$（常取 $x_0=0$）为**幂级数**。  
**阿贝尔定理**：  
- 若在 $x_1 \neq 0$ 收敛，则 $|x|<|x_1|$ 时绝对收敛；  
- 若在 $x_2$ 发散，则 $|x|>|x_2|$ 时发散。

由此存在**收敛半径** $R \ge 0$（可为 $\infty$）：  
$|x|<R$ 绝对收敛，$|x|>R$ 发散。在 $|x|=R$ 需单独判断。

### 5.2 收敛半径的求法

对不缺项的幂级数 $\sum a_n x^n$：
- **比值法**：$\rho = \lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right|$，则 $R = \frac{1}{\rho}$。
- **根值法**：$\rho = \lim_{n\to\infty} \sqrt[n]{|a_n|}$，则 $R = \frac{1}{\rho}$。

（$\rho=0$ 时 $R=\infty$；$\rho=\infty$ 时 $R=0$。）

**注意**：若级数缺项（如只有偶次幂），应直接对通项用比值/根值法，不能仅看系数。

**例题 7**：求下列幂级数的收敛半径与收敛域。

(1) $\sum_{n=1}^{\infty} \frac{x^n}{n}$  
- $R=1$（系数 $a_n=1/n$，比值极限 1）。  
- $x=1$：调和级数发散；$x=-1$：交错调和级数收敛。  
收敛域 $[-1,1)$。

(2) $\sum_{n=1}^{\infty} n^n x^n$  
- $\sqrt[n]{|a_n|} = n \to \infty$，$R=0$，仅在 $x=0$ 收敛。

(3) $\sum_{n=0}^{\infty} \frac{x^n}{n!}$  
- $R=\infty$（比值极限 0），收敛域 $\mathbb{R}$。

(4) $\sum_{n=1}^{\infty} \frac{(2n)!}{(n!)^2} x^{2n}$（缺奇次幂）  
视通项为 $v_n = \frac{(2n)!}{(n!)^2} x^{2n}$，用比值法：

$$
\left|\frac{v_{n+1}}{v_n}\right| = \frac{(2n+2)(2n+1)}{(n+1)^2}|x|^2 \to 4|x|^2.
$$

令 $4|x|^2<1 \Rightarrow |x|<1/2$，$R=1/2$。端点另判。

### 5.3 幂级数的和函数

在 $(-R,R)$ 内，幂级数的和函数 $S(x)$ 连续，且可逐项求导、逐项积分，所得新级数收敛半径仍为 $R$。

**求和策略**：以几何级数 $\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}$（$|x|<1$）为核心，通过求导、积分、乘 $x$、变量代换化为已知形式。

**例题 8**：求 $\sum_{n=1}^{\infty} n x^{n-1}$ 的和函数。

已知 $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$，两边求导：

$$
\frac{1}{(1-x)^2} = \sum_{n=1}^{\infty} n x^{n-1}, \quad |x|<1.
$$

**例题 9**：求 $\sum_{n=1}^{\infty} \frac{x^n}{n}$ 的和函数及收敛域。

收敛域 $[-1,1)$。设 $S(x)=\sum_{n=1}^{\infty} \frac{x^n}{n}$，求导：

$$
S'(x) = \sum_{n=1}^{\infty} x^{n-1} = \frac{1}{1-x}, \quad |x|<1.
$$

积分并利用 $S(0)=0$：

$$
S(x) = \int_0^x \frac{dt}{1-t} = -\ln(1-x).
$$

由连续性，在 $[-1,1)$ 均成立。

---

## 六、函数展开成幂级数

### 6.1 泰勒级数与麦克劳林级数

若 $f(x)$ 在 $x_0$ 处任意阶可导，可构造其泰勒级数：

$$
f(x) \sim \sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x-x_0)^n.
$$

$x_0=0$ 时为麦克劳林级数。等式成立当且仅当余项 $R_n(x) \to 0$。拉格朗日余项：

$$
R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} (x-x_0)^{n+1}.
$$

### 6.2 直接展开法

**例题 10**：展开 $f(x)=e^x$。

$f^{(n)}(0)=1$，级数为 $\sum_{n=0}^{\infty} \frac{x^n}{n!}$。  
余项 $R_n(x) = \frac{e^\xi}{(n+1)!} x^{n+1}$，$|R_n(x)| \le \frac{e^{|x|}|x|^{n+1}}{(n+1)!} \to 0$，故对一切 $x$ 成立。

类似可得：

$$
\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}, \quad
\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}, \quad x \in \mathbb{R}.
$$

### 6.3 间接展开法

利用已知展开式，通过变量代换、求导、积分等得到新展开式。

**务必熟记的基本展开**：

1. $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n,\ |x|<1$.
2. $\frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n,\ |x|<1$.
3. $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!},\ x\in\mathbb{R}$.
4. $\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!},\ x\in\mathbb{R}$.
5. $\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!},\ x\in\mathbb{R}$.
6. $\ln(1+x) = \sum_{n=1}^{\infty} (-1)^{n-1}\frac{x^n}{n},\ -1<x\le 1$.
7. $\arctan x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1},\ |x|\le 1$.
8. $(1+x)^\alpha = 1 + \sum_{n=1}^{\infty} \binom{\alpha}{n} x^n,\ |x|<1$（端点视 $\alpha$ 而定）。
---
 初等函数幂级数展开的相互推导
---

## 一、以几何级数为核心

### 基础公式 

$$
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + \cdots \quad (|x|<1)
$$

### 1. 推导公式 ：\( \frac{1}{1+x} \)

将基础公式中的 x 替换为 \(-x\)：

$$
\frac{1}{1 - (-x)} = \sum_{n=0}^{\infty} (-x)^n
$$

得到：

$$
\frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n
$$

### 2. 推导公式 ：\( \ln(1+x) \)

对公式  在区间 \([0, x]\) 积分：

$$
\int_{0}^{x} \frac{1}{1+t} dt = \int_{0}^{x} \sum_{n=0}^{\infty} (-1)^n t^n dt
$$

积分后得：

$$
\ln(1+x) = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots
$$

### 3. 推导公式 ：\( \frac{1}{1+x^2} \)

将基础公式中的 x 替换为 \(-x^2\)：

$$
\frac{1}{1 - (-x^2)} = \sum_{n=0}^{\infty} (-x^2)^n
$$

得到：

$$
\frac{1}{1+x^2} = \sum_{n=0}^{\infty} (-1)^n x^{2n}
$$

### 4. 推导公式 ：\( \arctan x \)

对公式  在区间 \([0, x]\) 积分：

$$
\int_{0}^{x} \frac{1}{1+t^2} dt = \int_{0}^{x} \sum_{n=0}^{\infty} (-1)^n t^{2n} dt
$$

积分后得：

$$
\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} x^{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots
$$

---

## 二、以指数函数 \( e^x \) 为核心

### 基础公式 

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (-\infty < x < \infty)
$$

### 5. 推导公式  \( \cos x \) 与 ② \( \sin x \)

利用欧拉公式 \( e^{ix} = \cos x + i\sin x \)，将基础公式中的 x 替换为 \( ix \)：

$$
e^{ix} = \sum_{n=0}^{\infty} \frac{(ix)^n}{n!} = \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots\right) + i\left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots\right)
$$

比较实部和虚部得：

$$
\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} x^{2n}, \quad \sin x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1}
$$

### 6. 推导公式  \( a^x \)

利用恒等式 \( a^x = e^{x \ln a} \)，将基础公式中的 x 替换为 \( x \ln a \)：

$$
a^x = \sum_{n=0}^{\infty} \frac{(\ln a)^n}{n!} x^n = 1 + (\ln a)x + \frac{(\ln a)^2}{2!} x^2 + \cdots
$$

---

## 三、以广义二项式定理为核心

### 基础公式 

对于任意实数 \( \alpha \)，有广义二项式展开：

$$
(1+x)^\alpha = \sum_{n=0}^{\infty} \binom{\alpha}{n} x^n
$$

其中 \( \binom{\alpha}{n} = \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!} \)，展开为：

$$
(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!} x^2 + \frac{\alpha(\alpha-1)(\alpha-2)}{3!} x^3 + \cdots
$$

### 7. 特例验证：还原公式 

取 \( \alpha = -1 \)，则 \( \binom{-1}{n} = (-1)^n \)，代入公式  可得：

$$
(1+x)^{-1} = \frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n
$$

---

## 总结：推导关系图

**例题 11**：展开 $f(x)=e^{-x^2}$。

令 $u=-x^2$，代入 $e^u$ 的展开式：

$$
e^{-x^2} = \sum_{n=0}^{\infty} \frac{(-x^2)^n}{n!} = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{n!}.
$$

**例题 12**：将 $f(x)=\frac{1}{x^2+4x+3}$ 展为 $x-1$ 的幂级数。

分解：$x^2+4x+3=(x+1)(x+3)$，部分分式：

$$
\frac{1}{(x+1)(x+3)} = \frac{1}{2}\left(\frac{1}{x+1} - \frac{1}{x+3}\right).
$$

令 $t=x-1$，则 $x=t+1$。
- $\frac{1}{x+1} = \frac{1}{t+2} = \frac{1}{2}\sum_{n=0}^{\infty} \left(-\frac{t}{2}\right)^n,\ |t|<2$.
- $\frac{1}{x+3} = \frac{1}{t+4} = \frac{1}{4}\sum_{n=0}^{\infty} \left(-\frac{t}{4}\right)^n,\ |t|<4$.

代入得：

$$
f(x) = \sum_{n=0}^{\infty} (-1)^n \left( \frac{1}{2^{n+2}} - \frac{1}{2\cdot 4^{n+1}} \right) (x-1)^n,
$$

收敛区间为 $|x-1|<2$，即 $(-1,3)$。端点另判。

**例题 13**：展开 $f(x)=\sin^2 x$。

**解法一（三角降幂）**：

$$
\sin^2 x = \frac{1-\cos 2x}{2}.
$$

$\cos u = \sum_{n=0}^{\infty} (-1)^n \frac{u^{2n}}{(2n)!}$，代入 $u=2x$：

$$
\sin^2 x = \frac{1}{2} - \frac{1}{2} \sum_{n=0}^{\infty} (-1)^n \frac{4^n x^{2n}}{(2n)!}
= \sum_{n=1}^{\infty} (-1)^{n+1} \frac{2^{2n-1} x^{2n}}{(2n)!}.
$$

**解法二（直接法）**：逐次求导找规律，但繁琐得多，间接法明显更优。


![](./assets/未命名笔记(1)_0_1779366759710-p01.png)

