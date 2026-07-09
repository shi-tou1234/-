---
title: 组合逻辑电路
pubDate: 2026-05-16T08:48:00.000Z
updatedDate: 2026-05-16T08:49:16.360Z
draft: false
description: 
category: 数电
slugId: 组合逻辑电路
---


# 第四章 组合逻辑电路：原理、分析与设计

本文系统梳理数字电路中组合逻辑电路的核心概念、分析方法、设计步骤，以及常用中规模集成电路（MSI）的工作原理与典型应用。内容涵盖全加器、编/译码器、数据选择器、数值比较器、显示译码器的逻辑推导，并深入探讨竞争-冒险现象的成因与消除方法。

---

## 一、组合逻辑电路的基本概念与特点

### 1.1 定义
数字逻辑电路按功能特点分为两大类：
- **组合逻辑电路**：电路在任意时刻的输出状态**仅取决于该时刻的输入状态**，与电路原来的状态无关。
- **时序逻辑电路**：输出不仅取决于当前输入，还与电路的历史状态（存储单元）有关。

### 1.2 结构特点
- 仅包含逻辑门电路，**不含存储元件**（如触发器）。
- 信号流向为单向：从输入端到输出端，**无反馈回路**。
- 逻辑关系可用一组布尔函数表示：

$$
\begin{aligned}
Y_1 &= f_1(A_1, A_2, \dots, A_n) \\
Y_2 &= f_2(A_1, A_2, \dots, A_n) \\
&\ \ \vdots \\
Y_m &= f_m(A_1, A_2, \dots, A_n)
\end{aligned}
$$

或写成向量函数形式：$\mathbf{Y} = \mathbf{F}(\mathbf{A})$。

---

## 二、组合逻辑电路的分析方法

### 2.1 分析步骤
1. **写出逻辑表达式**：从输入端开始，逐级向输出端推导，列出每个中间节点及最终输出的布尔表达式。
2. **列写真值表**：将所有输入变量的组合代入表达式，计算对应的输出值。
3. **确定逻辑功能**：根据真值表或化简后的表达式，用文字描述电路功能。
4. **电路评价与优化**：评估所用门电路数量、延迟等，判断是否可简化。

### 2.2 分析实例
**例题**：分析某组合电路，输入为 $A, B, C$，输出为 $F$。推导得逻辑表达式为 $F = B\overline{C} + \overline{B}C$。

**真值表**：

| $B$ | $C$ | $F$ |
|:---:|:---:|:---:|
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 0   |

**结论**：当输入相同时 $F=0$，输入不同时 $F=1$，该电路实现**二输入异或门**功能 $F = B \oplus C$。

---

## 三、组合逻辑电路的设计方法

### 3.1 设计步骤
1. **逻辑抽象**：分析因果关系，确定输入/输出变量，定义逻辑状态（0/1的含义）。
2. **列写真值表**：根据题意列出所有输入组合下的输出要求。
3. **逻辑化简**：利用代数法或卡诺图求出最简与-或式。
4. **变换门级结构**：根据可用器件（如仅与非门）进行等价变换。
5. **绘制逻辑电路图**。

### 3.2 设计实例：交通信号灯故障检测
**要求**：红(R)、黄(A)、绿(G)三灯，正常时仅一盏亮。多盏亮或全灭均为故障，输出故障信号 $Z=1$。

1. **真值表**：

| $R$ | $A$ | $G$ | $Z$ | 说明 |
|:---:|:---:|:---:|:---:|:-----|
| 0   | 0   | 0   | 1   | 全灭 |
| 0   | 0   | 1   | 0   | 正常 |
| 0   | 1   | 0   | 0   | 正常 |
| 0   | 1   | 1   | 1   | 双亮 |
| 1   | 0   | 0   | 0   | 正常 |
| 1   | 0   | 1   | 1   | 双亮 |
| 1   | 1   | 0   | 1   | 双亮 |
| 1   | 1   | 1   | 1   | 全亮 |

2. **卡诺图化简**：
   $$Z = \overline{R}\overline{A}\overline{G} + RA + RG + AG$$
   该式已为最简与-或式。若要求用与非门实现，两次取反得：
   $$Z = \overline{\overline{\overline{R}\overline{A}\overline{G}} \cdot \overline{RA} \cdot \overline{RG} \cdot \overline{AG}}$$

:::derivation
**与-或式转换为与非-与非式的推导**：

对最简与-或式 $Z = \overline{R}\overline{A}\overline{G} + RA + RG + AG$ 施加**两次取反**（德·摩根律）：

$$Z = \overline{\overline{Z}} = \overline{\overline{\overline{R}\overline{A}\overline{G} + RA + RG + AG}}$$

对内层取反应用德·摩根律 $\overline{X + Y} = \overline{X} \cdot \overline{Y}$：

$$Z = \overline{\overline{\overline{R}\overline{A}\overline{G}} \cdot \overline{RA} \cdot \overline{RG} \cdot \overline{AG}}$$

该式全部由与非门（NAND）构成，每一项 $\overline{R}\overline{A}\overline{G}$、$RA$ 等先用与非门实现（取反），再通过一个总的与非门合并输出。这是"仅用与非门实现任意组合逻辑"的标准方法。
:::

---

## 四、常用中规模集成电路（MSI）及其应用

### 4.1 全加器（Full Adder）
**功能**：完成两个一位二进制数 $A, B$ 及低位进位 $C_i$ 的相加，输出本位和 $S$ 与进位 $C_o$。

**真值表与推导**：
| $A$ | $B$ | $C_i$ | $S$ | $C_o$ |
|:---:|:---:|:-----:|:---:|:-----:|
| 0   | 0   | 0     | 0   | 0     |
| 0   | 0   | 1     | 1   | 0     |
| 0   | 1   | 0     | 1   | 0     |
| 0   | 1   | 1     | 0   | 1     |
| 1   | 0   | 0     | 1   | 0     |
| 1   | 0   | 1     | 0   | 1     |
| 1   | 1   | 0     | 0   | 1     |
| 1   | 1   | 1     | 1   | 1     |

**逻辑表达式推导**：
- 和输出 $S$ 的最小项为 $\sum m(1,2,4,7)$，利用异或性质合并：
  $$S = A \oplus B \oplus C_i$$

:::derivation
**全加器和输出 $S$ 的推导**：

$S$ 的最小项为 $\sum m(1,2,4,7)$，即输入组合 $001, 010, 100, 111$ 时 $S=1$（输入中含 1 的个数为奇数）：

$$S = \overline{A}\,\overline{B}C_i + \overline{A}B\overline{C_i} + A\overline{B}\,\overline{C_i} + ABC_i$$

按 $A$ 分组提取公因式：

$$S = \overline{A}(\overline{B}C_i + B\overline{C_i}) + A(\overline{B}\,\overline{C_i} + BC_i)$$

注意到 $\overline{B}C_i + B\overline{C_i} = B \oplus C_i$，而 $\overline{B}\,\overline{C_i} + BC_i = B \odot C_i = \overline{B \oplus C_i}$，代入得：

$$S = \overline{A}(B \oplus C_i) + A\,\overline{(B \oplus C_i)}$$

令 $X = B \oplus C_i$，上式变为 $\overline{A}X + A\overline{X} = A \oplus X$，故：

$$S = A \oplus (B \oplus C_i) = A \oplus B \oplus C_i$$

该结果表明：全加器的本位和等于三个输入的异或，即输入中 1 的个数为奇数时输出 1。
:::

- 进位输出 $C_o$ 的最小项为 $\sum m(3,5,6,7)$，利用卡诺图或代数法化简：
  $$C_o = AB + AC_i + BC_i = AB + (A + B)C_i = AB + (A \oplus B)C_i$$

:::derivation
**进位输出 $C_o$ 的推导**：

$C_o$ 的最小项为 $\sum m(3,5,6,7)$，即 $011, 101, 110, 111$（至少有两个输入为 1）：

$$C_o = \overline{A}BC_i + A\overline{B}C_i + AB\overline{C_i} + ABC_i$$

按是否含 $AB$ 分组：

$$C_o = (\overline{A}B + A\overline{B})C_i + AB(\overline{C_i} + C_i)$$

其中 $\overline{A}B + A\overline{B} = A \oplus B$，$\overline{C_i} + C_i = 1$，故：

$$C_o = (A \oplus B)C_i + AB \cdot 1 = AB + (A \oplus B)C_i$$

物理意义：进位由两部分构成——$A,B$ 均为 1 时**必产生进位**（本位进位 $AB$）；$A,B$ 中恰有一个为 1 时，**取决于低位进位** $C_i$（传递进位 $(A\oplus B)C_i$）。
:::

**应用扩展**：
- **串行进位加法器**：结构简单，但高位需等待低位进位，延迟大（$N$ 位需 $N$ 级门延迟）。
- **超前进位加法器（如74283）**：通过并行生成进位链，所有进位同时产生，仅1级门延迟，速度快。
- **8421BCD码加法修正**：四位二进制相加逢16进1，BCD逢10进1，相差6。当和 $>9$ 或产生进位时，需加 `0110` 修正。
  修正控制信号 $F$ 的卡诺图化简：
  $$F = C_o + AB + AC = C_o + A(B + C)$$

:::derivation
**8421BCD 码加法修正信号 $F$ 的推导**：

四位二进制加法逢 16 进 1，而 BCD 码逢 10 进 1，二者相差 6。因此当四位和 $>9$（即 10~15）或已产生进位 $C_o=1$（即 $\geq 16$）时，需加 `0110`（即 6）修正。

设四位和为 $A_3A_2A_1A_0$（本节简记 $A=A_3, B=A_2, C=A_1$），需修正的条件为：

- $C_o = 1$（和 $\geq 16$，必修正）；
- 或 $10 \leq$ 和 $\leq 15$：此时 $A_3 = 1$（和 $\geq 8$）且 $A_2 = 1$ 或 $A_1 = 1$（使和 $\geq 10$）。

第二个条件可写作 $A_3A_2 + A_3A_1 = A_3(A_2 + A_1)$，因此：

$$F = C_o + A_3(A_2 + A_1) = C_o + A(B + C)$$

经卡诺图化简可得相同结果，且已为最简与-或式。
:::

### 4.2 编码器（Encoder）
将特定输入信号转换为二进制代码。分为普通编码器（互斥输入）和**优先编码器**。

**74LS148（8线-3线优先编码器）**：
- 输入 $I_0 \sim I_7$（低电平有效，$I_7$ 优先级最高）。
- 输出 $\overline{Y_2}\overline{Y_1}\overline{Y_0}$（反码输出）。
- 控制端：$\overline{ST}$（选通，低有效）、$\overline{Y_{EX}}$（扩展，有编码时输出0）、$\overline{Y_S}$（选通输出，无编码且 $\overline{ST}=0$ 时输出0）。
- **级联扩展**：用两片74LS148可扩展为16线-4线编码器。高位片的 $\overline{Y_S}$ 接低位片的 $\overline{ST}$，第四位输出由 $\overline{Y_{EX}}$ 提供，低三位通过两级与门合并。

### 4.3 译码器（Decoder）
编码的逆过程，将二进制地址码转换为对应的输出电平。本质是**最小项发生器**。

**3线-8线译码器（74HC138）**：
- 输入 $A_2A_1A_0$，输出 $\overline{Y_0} \sim \overline{Y_7}$（低有效）。
- 使能端：$ST_A$（高有效），$\overline{ST_B}, \overline{ST_C}$（低有效）。正常译码条件：$ST_A=1, \overline{ST_B}+\overline{ST_C}=0$。
- 输出表达式：$\overline{Y_i} = \overline{m_i} \cdot (ST_A \overline{\overline{ST_B}+\overline{ST_C}})$

**应用**：
1. **实现组合逻辑函数**：$n$ 变量译码器输出全部 $2^n$ 个最小项。将目标函数写成最小项之和 $F=\sum m_i$，利用与非门连接对应输出端即可：$F = \overline{\overline{m_a}\cdot\overline{m_b}\cdots}$。
2. **数据分配器**：将使能端作为数据输入 $D$，地址端选通，数据被分配到指定输出通道。例如 $D$ 接 $\overline{ST_B}$，当 $A_2A_1A_0=010$ 时，$\overline{Y_2}=D$，其余为高。

### 4.4 数据选择器（Multiplexer, MUX）
多路开关，在地址码控制下从 $N$ 路输入选1路输出。

**8选1 MUX（74151）**：
- 逻辑表达式：$Y = \sum_{i=0}^{7} m_i \cdot D_i$ （$\overline{ST}=0$ 时）
- **实现 $N$ 变量函数**：直接将 $N$ 个变量接地址端，数据端 $D_i$ 按函数真值表填 0/1。
- **实现 $M>N$ 变量函数**（降维法）：
  例：用8选1实现4变量 $F(A,B,C,D)=\sum m(1,5,6,7,9,11,12,13,14)$。
  1. 将 $A,B,C$ 接地址端，$D$ 作记图变量填入降维卡诺图。
  2. 比较MUX卡诺图得：
     $D_0=D_2=D_4=D_5=D$, $D_1=0$, $D_3=D_7=1$, $D_6=\overline{D}$
  3. 外部仅需少量门电路生成 $\overline{D}$ 即可实现。

### 4.5 数值比较器（Magnitude Comparator）
比较两数大小，输出 $F_{A>B}, F_{A=B}, F_{A<B}$。

**比较原则**：从高位到低位逐位比较。高位不等即出结果；高位相等则看低位。
**4位比较器（74LS85）**：含级联输入端 $I_{A>B}, I_{A=B}, I_{A<B}$。
- 逻辑表达式（以 $F_{A>B}$ 为例）：
  $$F_{A>B} = A_3\overline{B_3} + (A_3 \odot B_3)A_2\overline{B_2} + (A_3 \odot B_3)(A_2 \odot B_2)A_1\overline{B_1} + (A_3 \odot B_3)(A_2 \odot B_2)(A_1 \odot B_1)A_0\overline{B_0} + (A_3 \odot B_3)(A_2 \odot B_2)(A_1 \odot B_1)(A_0 \odot B_0)I_{A>B}$$

:::derivation
**四位数值比较器 $F_{A>B}$ 表达式的推导**：

比较原则为"从高位到低位逐位比较，高位不等即出结果，高位相等则看低位"。逐位分析：

- 第 3 位（最高位）不等即出结果：$A_3 > B_3 \Leftrightarrow A_3\overline{B_3}$；
- 第 3 位相等（$A_3 \odot B_3 = 1$）时，看第 2 位：$A_2 > B_2 \Leftrightarrow A_2\overline{B_2}$；
- 第 3、2 位均相等时，看第 1 位：$(A_3 \odot B_3)(A_2 \odot B_2)A_1\overline{B_1}$；
- 第 3、2、1 位均相等时，看第 0 位：$(A_3 \odot B_3)(A_2 \odot B_2)(A_1 \odot B_1)A_0\overline{B_0}$；
- 四位全相等时，由级联输入 $I_{A>B}$ 决定：$(A_3 \odot B_3)(A_2 \odot B_2)(A_1 \odot B_1)(A_0 \odot B_0)I_{A>B}$。

以上五种情况为"或"关系（任一满足即可），全部相加即得 $F_{A>B}$ 的表达式。其中 $A_i \odot B_i = \overline{A_i \oplus B_i}$ 表示同或（两输入相等时为 1），作为高位相等的"使能"条件逐级传递至低位。
:::

  其中 $A_i \odot B_i = \overline{A_i \oplus B_i}$ 表示同或。
- 扩展：两片级联实现8位比较。低位片的输出接高位片的级联输入。最低位片的级联输入固定为 $I_{A=B}=1$，其余为0。

### 4.6 数字显示译码器（以7448为例）
**功能**：驱动共阴极LED数码管，输出高电平有效。
**控制端**：
- $\overline{LT}$：灯测试，低电平时七段全亮。
- $\overline{BI}/RBO$：消隐输入/灭零输出。
- $\overline{RBI}$：灭零输入，低电平时灭掉无意义的0。
**灭零控制逻辑**：$RBO = \overline{A_3 A_2 A_1 A_0 \cdot \overline{RBI} \cdot \overline{LT}}$。多位显示时，高位 $RBI$ 接地，$RBO$ 级联至低位 $RBI$ 实现连续灭零。

---

## 五、竞争与冒险现象（Race & Hazards）

### 5.1 概念与成因
实际门电路存在传输延迟 $t_{pd}$。当输入信号变化时，若同一变量经不同路径到达输出端的时间不同，会导致输出端出现瞬时错误脉冲（毛刺），称为**冒险**。
- **静态冒险**：稳态值应不变，但瞬态出现毛刺（分0型冒险 $X\cdot\overline{X}$ 和1型冒险 $X+\overline{X}$）。
- **动态冒险**：稳态值应跳变，但边沿出现多次跳变（通常由静态冒险引发）。
- **功能冒险**：两个或以上输入变量同时变化，因路径不同产生毛刺，无法通过修改逻辑结构消除，需限制输入变化方式。

### 5.2 判断方法
1. **代数法**：令其他变量取特定值，若表达式化简为 $F = A + \overline{A}$（产生0冒险）或 $F = A \cdot \overline{A}$（产生1冒险），则存在冒险。
2. **卡诺图法**：若两个合并圈**相切但不相交**，相切处对应的输入变化可能引发冒险。

### 5.3 消除方法
1. **增加冗余项（一致律）**：
   例：$F = AB + \overline{A}C$。当 $B=C=1$ 时，$F = A + \overline{A}$，产生0冒险。
   加入冗余项 $BC$：$F = AB + \overline{A}C + BC$。当 $B=C=1$ 时，$F = A + \overline{A} + 1 = 1$，冒险消除。
2. **输出端滤波**：并联小电容（RC低通），滤除高频毛刺。适用于波形边沿要求不高的场合。
3. **选通脉冲法**：在组合电路输出端加与门，仅在输入稳定、冒险消失后的时间窗口内引入选通脉冲 $ST$，使输出 $Y = F \cdot ST$。避开毛刺区间，抗干扰能力强。

---

## 六、本章重点与总结

### 6.1 核心要点
1. **组合逻辑特点**：无记忆、无反馈、输出仅取决于当前输入。
2. **分析设计流程**：逻辑抽象 $\rightarrow$ 真值表 $\rightarrow$ 化简 $\rightarrow$ 门级实现。
3. **MSI器件应用**：
   - 全加器：掌握 $S$ 与 $C_o$ 推导，理解串行进位与超前进位差异。
   - 译码器：最小项发生器，配合与非门实现任意逻辑函数。
   - 数据选择器：多路开关，掌握N变量实现与降维法扩展。
   - 编码器/比较器：理解优先权机制与级联扩展方法。
4. **竞争冒险**：理解物理成因（门延迟），掌握代数/卡诺图预判，熟练运用冗余项、滤波、选通三种消除手段。

### 6.2 设计注意事项
- **最简与最佳**：最简逻辑式不一定性能最佳（如可能引发冒险），需结合实际时序要求权衡。
- **原变量输入限制**：若无互补输入，需考虑反相器级数优化，通常采用三级门结构（输入级-中间级-输出级）。
- **级联扩展**：注意使能端极性、优先级分配及信号同步，避免总线冲突。

---

## 附录：常用布尔代数定律

1. **基本运算**：
   $$A + 0 = A, \quad A \cdot 1 = A$$
   $$A + 1 = 1, \quad A \cdot 0 = 0$$
   $$A + A = A, \quad A \cdot A = A$$
   $$A + \overline{A} = 1, \quad A \cdot \overline{A} = 0$$

2. **交换律与结合律**：
   $$A + B = B + A, \quad A \cdot B = B \cdot A$$
   $$A + (B + C) = (A + B) + C, \quad A \cdot (B \cdot C) = (A \cdot B) \cdot C$$

3. **分配律**：
   $$A \cdot (B + C) = A \cdot B + A \cdot C$$
   $$A + B \cdot C = (A + B) \cdot (A + C)$$

:::derivation
**加对乘的分配律 $A + BC = (A+B)(A+C)$ 的推导**：

从右边展开：

$$(A + B)(A + C) = A \cdot A + A \cdot C + B \cdot A + B \cdot C$$

利用重叠律 $A \cdot A = A$：

$$= A + AC + AB + BC$$

提取公因式 $A$：

$$= A(1 + C + B) + BC$$

由 0-1 律 $1 + C + B = 1$：

$$= A \cdot 1 + BC = A + BC$$

故 $A + BC = (A + B)(A + C)$。该公式是布尔代数中加法对乘法分配律的体现，与普通代数中只有乘法对加法的分配律不同，是布尔代数特有的性质。
:::

4. **吸收律与包含律（一致律）**：
   $$A + A \cdot B = A, \quad A \cdot (A + B) = A$$

:::derivation
**吸收律 $A + AB = A$ 及 $A(A+B) = A$ 的推导**：

(1) $A + AB = A(1 + B) = A \cdot 1 = A$（利用 0-1 律 $1+B=1$）

(2) $A(A + B) = A \cdot A + A \cdot B = A + AB = A$（先分配律，再重叠律，再由(1)得）

物理意义：在或-与表达式中，若某项已被另一更宽的项覆盖，则该项被"吸收"。利用吸收律可删除冗余项，简化逻辑式。
:::
   $$AB + \overline{A}C + BC = AB + \overline{A}C$$

:::derivation
**一致律（包含律）$AB + \overline{A}C + BC = AB + \overline{A}C$ 的推导**：

利用互补律 $A + \overline{A} = 1$，将 $BC$ 乘以 $(A + \overline{A})$：

$$AB + \overline{A}C + BC = AB + \overline{A}C + (A + \overline{A})BC$$

$$= AB + \overline{A}C + ABC + \overline{A}BC$$

重新分组：

$$= AB(1 + C) + \overline{A}C(1 + B)$$

由 0-1 律 $1 + C = 1$，$1 + B = 1$：

$$= AB + \overline{A}C$$

故 $AB + \overline{A}C + BC = AB + \overline{A}C$。$BC$ 称为**冗余项**——它不改变稳态逻辑值，但在消除竞争-冒险时被刻意保留，以保证 $B=C=1$ 时输出恒为 1。
:::

   $$(A + B)(\overline{A} + C)(B + C) = (A + B)(\overline{A} + C)$$

:::derivation
**一致律或形式 $(A+B)(\overline{A}+C)(B+C) = (A+B)(\overline{A}+C)$ 的推导**：

**方法一（对偶法）**：对与形式的一致律 $AB + \overline{A}C + BC = AB + \overline{A}C$ 取对偶（将 $+$ 与 $\cdot$ 互换），即得：

$$(A+B)(\overline{A}+C)(B+C) = (A+B)(\overline{A}+C)$$

**方法二（直接展开）**：先化简 $(A+B)(\overline{A}+C)$：

$$(A+B)(\overline{A}+C) = A\overline{A} + AC + B\overline{A} + BC = AC + \overline{A}B + BC$$

再乘以 $(B+C)$ 并利用吸收律化简，最终可得相同结果。对偶法表明：与形式和或形式的一致律互为对偶命题，二者等价。
:::

5. **常用逻辑函数**：
   $$A \oplus B = \overline{A}B + A\overline{B} = \overline{A \odot B}$$
   $$A \odot B = AB + \overline{A}\overline{B} = \overline{A \oplus B}$$

:::derivation
**异或与同或互非关系的推导**：

由定义：

$$A \oplus B = \overline{A}B + A\overline{B}, \quad A \odot B = \overline{A}\,\overline{B} + AB$$

对 $A \oplus B$ 取反（德·摩根律）：

$$\overline{A \oplus B} = \overline{\overline{A}B + A\overline{B}} = \overline{\overline{A}B} \cdot \overline{A\overline{B}} = (A + \overline{B})(\overline{A} + B)$$

展开：

$$= A\overline{A} + AB + \overline{B}\,\overline{A} + \overline{B}B = 0 + AB + \overline{A}\,\overline{B} + 0 = AB + \overline{A}\,\overline{B} = A \odot B$$

故 $A \oplus B = \overline{A \odot B}$，$A \odot B = \overline{A \oplus B}$。异或与同或互为反函数：异或要求输入**不同**时为 1，同或要求输入**相同**时为 1。
:::
   $$\text{全加器：} S = A \oplus B \oplus C_i, \quad C_o = AB + (A \oplus B)C_i$$

---


