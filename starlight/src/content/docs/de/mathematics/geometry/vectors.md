---
title: Vektoren
description: "Vektoren in der Ebene und im Raum: Darstellung, Ortsvektor, Betrag, Rechenoperationen, Skalarprodukt, Winkel, Orthogonalität und vektorielles Produkt."
sidebar:
  order: 3
---

## Was ist ein Vektor?

Ein **Vektor** beschreibt eine Verschiebung mit einer bestimmten Länge und Richtung. Er wird als Pfeil dargestellt. Alle Pfeile mit gleicher Länge und Richtung stellen denselben Vektor dar, egal wo sie beginnen. In der Physik werden Größen wie Kraft, Geschwindigkeit oder elektrische Feldstärke durch Vektoren beschrieben, im Gegensatz zu Skalaren wie Masse oder Temperatur, die nur einen Zahlenwert haben.

In einem Koordinatensystem wird ein Vektor durch seine **Komponenten** angegeben:

$$
\vec{a} = \begin{pmatrix} a_x \\ a_y \end{pmatrix} \in \mathbb{R}^2 \qquad
\vec{a} = \begin{pmatrix} a_x \\ a_y \\ a_z \end{pmatrix} \in \mathbb{R}^3
$$

### Vektor zwischen zwei Punkten und Ortsvektor

Der Vektor von $A$ nach $B$ ergibt sich nach der Regel **„Spitze minus Schaft“**:

$$
\overrightarrow{AB} = B - A = \begin{pmatrix} b_x - a_x \\ b_y - a_y \end{pmatrix}
$$

Der **Ortsvektor** eines Punktes $P$ ist der Vektor vom Ursprung $O$ zu $P$. Er hat dieselben Komponenten wie die Koordinaten des Punktes.

:::tip[Beispiel]
$A = (1 \mid 2)$, $B = (4 \mid 6)$: $\quad \overrightarrow{AB} = \begin{pmatrix} 4 - 1 \\ 6 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$
:::

## Betrag

Der **Betrag** (die Länge) eines Vektors folgt aus dem Satz von Pythagoras:

$$
\lvert \vec{a} \rvert = \sqrt{a_x^2 + a_y^2} \qquad \lvert \vec{a} \rvert = \sqrt{a_x^2 + a_y^2 + a_z^2}
$$

Der Abstand zweier Punkte $A$ und $B$ ist $\lvert \overrightarrow{AB} \rvert$. Im Beispiel oben ist $\lvert \overrightarrow{AB} \rvert = \sqrt{9 + 16} = 5$.

Ein Vektor mit der Länge $1$ heißt **Einheitsvektor**. Man erhält den Einheitsvektor in Richtung von $\vec{a}$, indem man $\vec{a}$ durch seinen Betrag dividiert:

$$
\vec{a}_0 = \frac{1}{\lvert \vec{a} \rvert} \cdot \vec{a}
$$

## Rechenoperationen

### Addition und Subtraktion

Vektoren werden **komponentenweise** addiert und subtrahiert. Geometrisch hängt man bei der Addition die Pfeile aneinander (Spitze an Schaft). Das Ergebnis heißt Resultierende.

$$
\begin{pmatrix} 1 \\ 3 \end{pmatrix} + \begin{pmatrix} 4 \\ -1 \end{pmatrix} = \begin{pmatrix} 5 \\ 2 \end{pmatrix}
$$

### Multiplikation mit einem Skalar

Multipliziert man einen Vektor mit einer Zahl $k$, wird jede Komponente mit $k$ multipliziert. Der Vektor wird um den Faktor $\lvert k \rvert$ gestreckt oder gestaucht; ist $k < 0$, kehrt sich seine Richtung um.

$$
3 \cdot \begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \end{pmatrix}
$$

Zwei Vektoren heißen **parallel** (kollinear), wenn einer ein Vielfaches des anderen ist: $\vec{b} = k \cdot \vec{a}$.

### Mittelpunkt einer Strecke

$$
M_{AB} = \frac{1}{2}(A + B)
$$

:::tip[Beispiel: Kräfte]
Auf einen Punkt wirken die Kräfte $\vec{F}_1 = \begin{pmatrix} 30 \\ 40 \end{pmatrix}\ \text{N}$ und $\vec{F}_2 = \begin{pmatrix} 50 \\ -10 \end{pmatrix}\ \text{N}$. Die resultierende Kraft ist

$$
\vec{F} = \vec{F}_1 + \vec{F}_2 = \begin{pmatrix} 80 \\ 30 \end{pmatrix}\ \text{N} \qquad \lvert \vec{F} \rvert = \sqrt{80^2 + 30^2} \approx 85{,}4\ \text{N}
$$
:::

## Skalarprodukt

Das **Skalarprodukt** zweier Vektoren ist eine Zahl (ein Skalar):

$$
\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y \;(+\; a_z b_z)
$$

Es hängt mit dem Winkel $\varphi$ zwischen den Vektoren zusammen:

$$
\vec{a} \cdot \vec{b} = \lvert \vec{a} \rvert \cdot \lvert \vec{b} \rvert \cdot \cos\varphi
\qquad\Rightarrow\qquad
\cos\varphi = \frac{\vec{a} \cdot \vec{b}}{\lvert \vec{a} \rvert \cdot \lvert \vec{b} \rvert}
$$

### Orthogonalität

Zwei Vektoren stehen genau dann **normal** (orthogonal, im rechten Winkel) aufeinander, wenn ihr Skalarprodukt $0$ ist:

$$
\vec{a} \perp \vec{b} \quad\Longleftrightarrow\quad \vec{a} \cdot \vec{b} = 0
$$

In der Ebene erhält man einen Normalvektor, indem man die Komponenten vertauscht und bei einer das Vorzeichen ändert: Zu $\begin{pmatrix} a_x \\ a_y \end{pmatrix}$ ist $\begin{pmatrix} -a_y \\ a_x \end{pmatrix}$ normal („kippen“).

:::tip[Beispiel]
Welchen Winkel schließen $\vec{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ und $\vec{b} = \begin{pmatrix} 5 \\ -2 \end{pmatrix}$ ein?

$$
\cos\varphi = \frac{3 \cdot 5 + 4 \cdot (-2)}{5 \cdot \sqrt{29}} = \frac{7}{5\sqrt{29}} \approx 0{,}260 \quad\Rightarrow\quad \varphi \approx 74{,}9°
$$
:::

:::note[Anwendung: Arbeit]
In der Physik ist die Arbeit, die eine Kraft $\vec{F}$ entlang eines Weges $\vec{s}$ verrichtet, das Skalarprodukt $W = \vec{F} \cdot \vec{s}$. Nur der Anteil der Kraft in Wegrichtung verrichtet Arbeit.
:::

## Vektorielles Produkt

Das **vektorielle Produkt** (Kreuzprodukt) ist nur im $\mathbb{R}^3$ definiert. Sein Ergebnis ist ein Vektor:

$$
\vec{a} \times \vec{b} = \begin{pmatrix} a_y b_z - a_z b_y \\ a_z b_x - a_x b_z \\ a_x b_y - a_y b_x \end{pmatrix}
$$

Eigenschaften:

- $\vec{a} \times \vec{b}$ steht normal auf $\vec{a}$ und auf $\vec{b}$.
- Sein Betrag ist der Flächeninhalt des Parallelogramms, das von $\vec{a}$ und $\vec{b}$ aufgespannt wird: $\lvert \vec{a} \times \vec{b} \rvert = \lvert \vec{a} \rvert \lvert \vec{b} \rvert \sin\varphi$. Das Dreieck hat die halbe Fläche.
- $\vec{a}$, $\vec{b}$ und $\vec{a} \times \vec{b}$ bilden ein Rechtssystem (Rechte-Hand-Regel).
- Es ist nicht kommutativ: $\vec{b} \times \vec{a} = -(\vec{a} \times \vec{b})$.
- Sind $\vec{a}$ und $\vec{b}$ parallel, ist $\vec{a} \times \vec{b} = \vec{0}$.

:::tip[Merkhilfe]
Man schreibt beide Vektoren zweimal untereinander, streicht die erste und die letzte Zeile und rechnet „über Kreuz“:

$$
\begin{array}{ccccc}
a_x & & b_x \\
a_y & \times & b_y & \rightarrow & a_y b_z - a_z b_y \\
a_z & \times & b_z & \rightarrow & a_z b_x - a_x b_z \\
a_x & \times & b_x & \rightarrow & a_x b_y - a_y b_x \\
a_y & & b_y
\end{array}
$$
:::

:::tip[Beispiel: Dreiecksfläche]
$A = (1 \mid 0 \mid 0)$, $B = (0 \mid 2 \mid 0)$, $C = (0 \mid 0 \mid 3)$:

$$
\overrightarrow{AB} \times \overrightarrow{AC} = \begin{pmatrix} -1 \\ 2 \\ 0 \end{pmatrix} \times \begin{pmatrix} -1 \\ 0 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 \cdot 3 - 0 \cdot 0 \\ 0 \cdot (-1) - (-1) \cdot 3 \\ (-1) \cdot 0 - 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}
$$

$$
A_\triangle = \frac{1}{2} \sqrt{36 + 9 + 4} = \frac{7}{2} = 3{,}5
$$
:::

:::note[Anwendung: Drehmoment und Lorentzkraft]
Das Drehmoment ist $\vec{M} = \vec{r} \times \vec{F}$, die Kraft auf eine bewegte Ladung im Magnetfeld $\vec{F} = q \cdot (\vec{v} \times \vec{B})$.
:::

Mit Vektoren lassen sich auch [Geraden und Ebenen](/de/mathematics/geometry/lines-and-planes/) beschreiben.
