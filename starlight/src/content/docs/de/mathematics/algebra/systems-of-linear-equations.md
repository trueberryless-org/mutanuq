---
title: Lineare Gleichungssysteme
description: Lineare Gleichungssysteme mit zwei und mehr Variablen – Lösbarkeit, Einsetzungs-, Gleichsetzungs- und Additionsverfahren, Gauß-Verfahren und Matrizenschreibweise.
sidebar:
  order: 8
---

## Begriff

Ein **lineares Gleichungssystem** (LGS) besteht aus mehreren linearen Gleichungen mit mehreren Variablen, die **gleichzeitig** erfüllt sein müssen. „Linear“ bedeutet, dass die Variablen nur in der ersten Potenz vorkommen und nicht miteinander multipliziert werden.

$$
\begin{aligned}
\text{I:}\quad 2x + 3y &= 12 \\
\text{II:}\quad x - y &= 1
\end{aligned}
$$

Eine Lösung ist ein **Zahlenpaar** $(x \mid y)$, das beide Gleichungen erfüllt – hier $(3 \mid 2)$.

## Lösbarkeit

Jede lineare Gleichung mit zwei Variablen beschreibt eine [Gerade](/de/mathematics/functions/linear-functions/). Die Lösung des Gleichungssystems ist der gemeinsame Punkt der beiden Geraden. Daraus ergeben sich drei Fälle:

| Lage der Geraden     | Anzahl der Lösungen    | erkennbar beim Rechnen an …               |
| -------------------- | ---------------------- | ----------------------------------------- |
| schneiden einander   | genau eine Lösung      | eindeutigem Ergebnis                      |
| parallel             | keine Lösung           | einem Widerspruch, z. B. $0 = 5$          |
| identisch            | unendlich viele Lösungen | einer wahren Aussage, z. B. $0 = 0$     |

## Lösungsverfahren für zwei Variablen

### Einsetzungsverfahren

Eine Gleichung wird nach einer Variablen umgeformt und in die andere eingesetzt.

:::tip[Beispiel]
Aus II folgt $x = 1 + y$. Eingesetzt in I:

$$
2(1 + y) + 3y = 12 \;\Rightarrow\; 2 + 5y = 12 \;\Rightarrow\; y = 2 \;\Rightarrow\; x = 1 + 2 = 3
$$
:::

### Gleichsetzungsverfahren

Beide Gleichungen werden nach derselben Variablen umgeformt und gleichgesetzt.

:::tip[Beispiel]
$$
\text{I: } x = \frac{12 - 3y}{2} \qquad \text{II: } x = 1 + y \qquad\Rightarrow\qquad \frac{12 - 3y}{2} = 1 + y \;\Rightarrow\; 12 - 3y = 2 + 2y \;\Rightarrow\; y = 2
$$
:::

### Additionsverfahren (Eliminationsverfahren)

Die Gleichungen werden so mit Zahlen multipliziert, dass beim Addieren eine Variable wegfällt. Dieses Verfahren lässt sich auf beliebig viele Variablen erweitern.

:::tip[Beispiel]
$$
\begin{aligned}
\text{I:}\quad 2x + 3y &= 12 \\
3 \cdot \text{II:}\quad 3x - 3y &= 3 \\
\hline
\text{I} + 3 \cdot \text{II:}\quad 5x &= 15 \;\Rightarrow\; x = 3
\end{aligned}
$$
:::

## Gauß-Verfahren

Für drei und mehr Variablen bringt man das Gleichungssystem mit dem **Gaußschen Eliminationsverfahren** auf **Stufenform** (Dreiecksform). Dabei sind folgende Umformungen erlaubt:

- zwei Gleichungen vertauschen,
- eine Gleichung mit einer Zahl ungleich $0$ multiplizieren,
- ein Vielfaches einer Gleichung zu einer anderen addieren.

Anschließend werden die Variablen von unten nach oben durch **Rückwärtseinsetzen** berechnet.

:::tip[Beispiel]
$$
\begin{aligned}
\text{I:}\quad x + y + z &= 6 \\
\text{II:}\quad 2x - y + z &= 3 \\
\text{III:}\quad x + 2y - z &= 2
\end{aligned}
$$

Mit $\text{II} - 2 \cdot \text{I}$ und $\text{III} - \text{I}$ wird $x$ aus den unteren Gleichungen eliminiert:

$$
\begin{aligned}
x + y + z &= 6 \\
-3y - z &= -9 \\
y - 2z &= -4
\end{aligned}
$$

Mit $3 \cdot \text{III} + \text{II}$ wird auch $y$ eliminiert:

$$
\begin{aligned}
x + y + z &= 6 \\
-3y - z &= -9 \\
-7z &= -21
\end{aligned}
$$

Rückwärtseinsetzen: $z = 3$, $\;-3y - 3 = -9 \Rightarrow y = 2$, $\;x + 2 + 3 = 6 \Rightarrow x = 1$.

Die Lösung ist $(1 \mid 2 \mid 3)$.
:::

## Matrizenschreibweise

Da sich beim Gauß-Verfahren nur die Koeffizienten ändern, schreibt man das Gleichungssystem kürzer als **Matrix**. Die **Koeffizientenmatrix** $A$ enthält die Koeffizienten, der Vektor $\vec{b}$ die rechten Seiten:

$$
\underbrace{\begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{pmatrix}}_{A} \cdot \underbrace{\begin{pmatrix} x \\ y \\ z \end{pmatrix}}_{\vec{x}} = \underbrace{\begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}}_{\vec{b}}
$$

Für das Gauß-Verfahren schreibt man die **erweiterte Koeffizientenmatrix** $(A \mid \vec{b})$ und formt die Zeilen um:

$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & -1 & 1 & 3 \\ 1 & 2 & -1 & 2 \end{array}\right)
\;\longrightarrow\;
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 0 & -7 & -21 \end{array}\right)
$$

Programme wie GeoGebra oder Taschenrechner lösen Gleichungssysteme in Matrizenform direkt. Für ein System mit $n$ Gleichungen und $n$ Variablen ist die Lösung genau dann eindeutig, wenn die **Determinante** von $A$ ungleich $0$ ist.

### Determinante einer 2×2-Matrix und Cramersche Regel

$$
\det \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = a_{11} a_{22} - a_{12} a_{21}
$$

Mit der **Cramerschen Regel** lässt sich ein System mit zwei Variablen direkt lösen. Man ersetzt die Spalte der gesuchten Variable durch die rechte Seite:

$$
x = \frac{\det A_x}{\det A} \qquad y = \frac{\det A_y}{\det A}
$$

:::tip[Beispiel]
Für $2x + 3y = 12$ und $x - y = 1$:

$$
\det A = \begin{vmatrix} 2 & 3 \\ 1 & -1 \end{vmatrix} = -2 - 3 = -5 \qquad
x = \frac{\begin{vmatrix} 12 & 3 \\ 1 & -1 \end{vmatrix}}{-5} = \frac{-15}{-5} = 3 \qquad
y = \frac{\begin{vmatrix} 2 & 12 \\ 1 & 1 \end{vmatrix}}{-5} = \frac{-10}{-5} = 2
$$
:::

## Anwendungsbeispiel

:::tip[Beispiel: Mischungsaufgabe]
Ein Elektronikhändler verkauft USB-Sticks zu 8 € und SD-Karten zu 12 €. An einem Tag wurden 40 Stück um insgesamt 380 € verkauft. Wie viele USB-Sticks ($u$) und SD-Karten ($s$) waren es?

$$
\begin{aligned}
\text{I:}\quad u + s &= 40 \\
\text{II:}\quad 8u + 12s &= 380
\end{aligned}
$$

Aus I folgt $u = 40 - s$. Eingesetzt: $8(40 - s) + 12s = 380 \Rightarrow 320 + 4s = 380 \Rightarrow s = 15$ und $u = 25$.
:::
