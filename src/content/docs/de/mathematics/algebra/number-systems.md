---
title: Zahlensysteme
description: Stellenwertsysteme mit Dezimal-, Dual-, Oktal- und Hexadezimalzahlen, Umrechnungen, Rechnen im Dualsystem sowie Festkomma- und Gleitkommadarstellung.
sidebar:
  order: 2
---

## Stellenwertsysteme

In einem **Stellenwertsystem** hängt der Wert einer Ziffer von ihrer Position in der Zahl ab. Jede Stelle hat den Wert einer Potenz der Basis $b$. Eine Zahl mit den Ziffern $z_n \dots z_1 z_0$ hat den Wert

$$
z_n \cdot b^n + \dots + z_1 \cdot b^1 + z_0 \cdot b^0
$$

Für die Basis $b$ braucht man genau $b$ verschiedene Ziffern: $0$ bis $b - 1$. Um Verwechslungen zu vermeiden, schreibt man die Basis als Index dazu, zum Beispiel $1011_2$ oder $\text{FF}_{16}$.

| System          | Basis | Ziffern                   | Verwendung                                   |
| --------------- | ----- | ------------------------- | -------------------------------------------- |
| Dezimalsystem   | 10    | 0–9                       | Alltag                                       |
| Dualsystem (Binärsystem) | 2 | 0, 1               | interne Darstellung in Computern             |
| Oktalsystem     | 8     | 0–7                       | Dateirechte unter Unix (`chmod 755`)         |
| Hexadezimalsystem | 16  | 0–9, A (10) bis F (15)    | Speicheradressen, Farben (`#FF8800`), Register |

:::tip[Beispiel]
$$
2025_{10} = 2 \cdot 10^3 + 0 \cdot 10^2 + 2 \cdot 10^1 + 5 \cdot 10^0
$$
:::

## Umrechnung in das Dezimalsystem

Man multipliziert jede Ziffer mit ihrem Stellenwert und addiert die Ergebnisse.

:::tip[Beispiele]
$$
\begin{aligned}
1011\,0101_2 &= 1 \cdot 2^7 + 0 \cdot 2^6 + 1 \cdot 2^5 + 1 \cdot 2^4 + 0 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 \\
&= 128 + 32 + 16 + 4 + 1 = 181_{10} \\[1em]
\text{2F}_{16} &= 2 \cdot 16^1 + 15 \cdot 16^0 = 32 + 15 = 47_{10} \\[1em]
755_8 &= 7 \cdot 64 + 5 \cdot 8 + 5 = 493_{10}
\end{aligned}
$$
:::

## Umrechnung aus dem Dezimalsystem

Für ganze Zahlen verwendet man das **Divisionsrestverfahren**: Man dividiert die Zahl so lange ganzzahlig durch die Zielbasis, bis der Quotient 0 ist. Die Reste ergeben, von unten nach oben gelesen, die Ziffern der gesuchten Zahl.

:::tip[Beispiel: 181 ins Dualsystem]
| Division    | Quotient | Rest |
| ----------- | -------- | ---- |
| $181 : 2$   | 90       | 1    |
| $90 : 2$    | 45       | 0    |
| $45 : 2$    | 22       | 1    |
| $22 : 2$    | 11       | 0    |
| $11 : 2$    | 5        | 1    |
| $5 : 2$     | 2        | 1    |
| $2 : 2$     | 1        | 0    |
| $1 : 2$     | 0        | 1    |

Von unten nach oben gelesen: $181_{10} = 1011\,0101_2$.
:::

Bei **Nachkommastellen** multipliziert man den Nachkommaanteil wiederholt mit der Basis. Die Vorkommastellen der Ergebnisse bilden, von oben nach unten gelesen, die Nachkommastellen.

:::tip[Beispiel: 0,625 ins Dualsystem]
$$
\begin{aligned}
0{,}625 \cdot 2 &= 1{,}25 \quad\rightarrow 1 \\
0{,}25 \cdot 2 &= 0{,}5 \quad\;\;\rightarrow 0 \\
0{,}5 \cdot 2 &= 1{,}0 \quad\;\;\rightarrow 1
\end{aligned}
$$

Also ist $0{,}625_{10} = 0{,}101_2$.
:::

:::caution
Viele Dezimalbrüche lassen sich im Dualsystem nicht exakt darstellen. So ist $0{,}1_{10} = 0{,}0\overline{0011}_2$ periodisch. Deshalb liefert `0.1 + 0.2` in den meisten Programmiersprachen nicht exakt `0.3`, sondern `0.30000000000000004`.
:::

## Umrechnung zwischen Dual-, Oktal- und Hexadezimalsystem

Weil $8 = 2^3$ und $16 = 2^4$ gilt, entspricht jede Oktalziffer genau **drei** und jede Hexadezimalziffer genau vier Dualziffern. Man teilt die Dualzahl deshalb von rechts beginnend in Dreier- bzw. Vierergruppen (ein Nibble) und übersetzt jede Gruppe einzeln.

| Dual | Hex | Dual | Hex |
| ---- | --- | ---- | --- |
| 0000 | 0   | 1000 | 8   |
| 0001 | 1   | 1001 | 9   |
| 0010 | 2   | 1010 | A   |
| 0011 | 3   | 1011 | B   |
| 0100 | 4   | 1100 | C   |
| 0101 | 5   | 1101 | D   |
| 0110 | 6   | 1110 | E   |
| 0111 | 7   | 1111 | F   |

:::tip[Beispiel]
$$
\underbrace{1011}_{\text{B}}\;\underbrace{0101}_{5}{}_2 = \text{B5}_{16}
\qquad
\underbrace{010}_{2}\;\underbrace{110}_{6}\;\underbrace{101}_{5}{}_2 = 265_8
$$

Beide Ergebnisse entsprechen $181_{10}$.
:::

## Rechnen im Dualsystem

### Addition

Addiert wird wie im Dezimalsystem stellenweise von rechts nach links. Dabei gilt $1_2 + 1_2 = 10_2$, es entsteht also ein **Übertrag**.

$$
\begin{array}{r}
  0110\,1011 \\
+ 0011\,0110 \\
\hline
  1010\,0001
\end{array}
\qquad (107 + 54 = 161)
$$

### Negative Zahlen im Zweierkomplement

Computer speichern ganze Zahlen mit einer festen Anzahl an Bits. Negative Zahlen werden meist im **Zweierkomplement** dargestellt. So bildet man die Darstellung von $-x$:

1. $x$ als Dualzahl mit der vorgegebenen Bitanzahl schreiben.
2. Alle Bits invertieren (Einerkomplement).
3. $1$ addieren.

:::tip[Beispiel: −54 mit 8 Bit]
$$
54 = 0011\,0110_2 \;\xrightarrow{\text{invertieren}}\; 1100\,1001_2 \;\xrightarrow{+1}\; 1100\,1010_2 = -54
$$

Das höchstwertige Bit ist bei negativen Zahlen immer $1$. Mit 8 Bit lassen sich die Zahlen von $-128$ bis $+127$ darstellen.
:::

Der Vorteil: Eine Subtraktion kann als Addition des Zweierkomplements ausgeführt werden. $107 - 54$ wird zu $0110\,1011_2 + 1100\,1010_2 = 1\,0011\,0101_2$. Der Übertrag über das achte Bit hinaus wird verworfen, übrig bleibt $0011\,0101_2 = 53$.

### Wertebereiche

| Datentyp (C#) | Bits | vorzeichenlos        | mit Vorzeichen (Zweierkomplement)  |
| ------------- | ---- | -------------------- | ---------------------------------- |
| `byte`/`sbyte` | 8   | $0$ bis $255$        | $-128$ bis $127$                   |
| `ushort`/`short` | 16 | $0$ bis $65\,535$   | $-32\,768$ bis $32\,767$           |
| `uint`/`int`  | 32   | $0$ bis $2^{32} - 1$ | $-2^{31}$ bis $2^{31} - 1$         |

Allgemein: Mit $n$ Bits lassen sich $2^n$ verschiedene Werte darstellen.

## Festkomma- und Gleitkommadarstellung

### Festkommadarstellung

Bei der **Festkommadarstellung** ist festgelegt, wie viele Bits für die Vor- und wie viele für die Nachkommastellen verwendet werden. Sie ist einfach und schnell, hat aber einen kleinen Wertebereich. Man findet sie etwa bei Mikrocontrollern ohne Gleitkommaeinheit oder bei Geldbeträgen, die intern in Cent gespeichert werden.

### Gleitkommadarstellung

Für sehr große und sehr kleine Zahlen verwendet man die **Gleitkommadarstellung** (engl. _floating point_), die der wissenschaftlichen Schreibweise $6{,}022 \cdot 10^{23}$ entspricht:

$$
x = (-1)^V \cdot M \cdot 2^E
$$

- $V$: Vorzeichenbit ($0$ = positiv, $1$ = negativ)
- $M$: Mantisse, die signifikanten Ziffern
- $E$: Exponent

Nach der Norm **IEEE 754** besteht eine Zahl mit einfacher Genauigkeit (`float`) aus 32 Bit: 1 Vorzeichenbit, 8 Bit Exponent und 23 Bit Mantisse. Eine Zahl mit doppelter Genauigkeit (`double`) hat 64 Bit: 1 Vorzeichenbit, 11 Bit Exponent und 52 Bit Mantisse. Die Mantisse wird normalisiert, sodass vor dem Komma immer eine $1$ steht, die nicht gespeichert werden muss. Der Exponent wird mit einem Bias (bei `float` $127$) gespeichert, damit keine negativen Exponenten codiert werden müssen.

:::tip[Beispiel: 13,25 als float]
1. In eine Dualzahl umwandeln: $13{,}25_{10} = 1101{,}01_2$
2. Normalisieren: $1101{,}01_2 = 1{,}10101_2 \cdot 2^3$
3. Vorzeichen: $V = 0$
4. Exponent mit Bias: $3 + 127 = 130 = 1000\,0010_2$
5. Mantisse ohne führende $1$: $1010\,1000\,0000\ldots$

Ergebnis: `0 10000010 10101000000000000000000`
:::

Gleitkommazahlen haben nur eine begrenzte Anzahl an signifikanten Stellen (`float` etwa 7, `double` etwa 15–16 Dezimalstellen). Deshalb entstehen Rundungsfehler, und man sollte Gleitkommazahlen im Programmcode nie mit `==` vergleichen, sondern prüfen, ob ihr Abstand kleiner als eine Toleranz ist.
