---
title: Geraden und Ebenen
description: Parameterdarstellung und Normalvektordarstellung von Geraden in der Ebene und im Raum, Ebenen im Raum, Lagebeziehungen, Schnittpunkte und Abstände.
sidebar:
  order: 4
---

## Geraden in Parameterdarstellung

Eine Gerade ist durch einen **Punkt** $P$ und einen **Richtungsvektor** $\vec{v}$ festgelegt. Jeden Punkt $X$ der Geraden erreicht man, indem man von $P$ aus ein Vielfaches von $\vec{v}$ geht:

$$
g\colon X = P + t \cdot \vec{v} \qquad t \in \mathbb{R}
$$

Die Zahl $t$ heißt **Parameter**. Diese Darstellung funktioniert in der Ebene ($\mathbb{R}^2$) und im Raum ($\mathbb{R}^3$). Sind zwei Punkte $A$ und $B$ gegeben, wählt man $\vec{v} = \overrightarrow{AB}$.

:::tip[Beispiel]
Die Gerade durch $A = (1 \mid 2 \mid 0)$ und $B = (3 \mid 1 \mid 4)$:

$$
g\colon X = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} + t \cdot \begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}
$$

Für $t = 0$ erhält man $A$, für $t = 1$ den Punkt $B$, für $t = 0{,}5$ den Mittelpunkt der Strecke $AB$.
:::

**Punktprobe:** Um zu prüfen, ob ein Punkt $Q$ auf der Geraden liegt, setzt man $Q$ für $X$ ein. Liegt $Q$ auf $g$, ergibt sich in allen Koordinatengleichungen derselbe Wert für $t$.

In der Physik beschreibt die Parameterdarstellung eine gleichförmige Bewegung: $P$ ist der Startpunkt, $\vec{v}$ die Geschwindigkeit und $t$ die Zeit.

## Geraden in der Ebene: Normalvektordarstellung

In $\mathbb{R}^2$ lässt sich eine Gerade auch mit einem **Normalvektor** $\vec{n}$ beschreiben, der normal auf die Gerade steht. Für jeden Punkt $X$ der Geraden steht $\overrightarrow{PX}$ normal auf $\vec{n}$:

$$
\vec{n} \cdot X = \vec{n} \cdot P \qquad\Longleftrightarrow\qquad a x + b y = c \quad\text{mit } \vec{n} = \begin{pmatrix} a \\ b \end{pmatrix}
$$

:::tip[Beispiel]
Gerade durch $P = (2 \mid 1)$ mit Richtungsvektor $\vec{v} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$. Durch „Kippen“ erhält man $\vec{n} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$:

$$
-x + 3y = -2 + 3 = 1
$$

Umgeformt nach $y$ ergibt sich die bekannte Form $y = \frac{1}{3}x + \frac{1}{3}$ einer [linearen Funktion](/de/mathematics/functions/linear-functions/).
:::

## Lagebeziehungen zweier Geraden

| Lage im $\mathbb{R}^2$    | Lage im $\mathbb{R}^3$    | Richtungsvektoren parallel? | gemeinsame Punkte |
| ------------------------- | ------------------------- | --------------------------- | ----------------- |
| identisch                 | identisch                 | ja                          | alle              |
| parallel                  | parallel                  | ja                          | keine             |
| schneidend                | schneidend                | nein                        | genau einer       |
| –                         | **windschief**            | nein                        | keine             |

Windschiefe Geraden gibt es nur im Raum: Sie sind weder parallel, noch schneiden sie einander – wie zwei Straßen auf verschiedenen Ebenen einer Kreuzung.

Um den Schnittpunkt zu bestimmen, setzt man die beiden Geraden gleich (mit **verschiedenen** Parametern $s$ und $t$) und löst das [Gleichungssystem](/de/mathematics/algebra/systems-of-linear-equations/).

:::tip[Beispiel]
$$
g\colon X = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + s \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} \qquad
h\colon X = \begin{pmatrix} 0 \\ 3 \\ 1 \end{pmatrix} + t \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}
$$

Gleichsetzen ergibt für die drei Koordinaten:

$$
\begin{aligned}
1 + s &= t \\
s &= 3 - t \\
2 &= 1 + t
\end{aligned}
$$

Aus der dritten Gleichung folgt $t = 1$, aus der zweiten $s = 2$. Probe in der ersten: $1 + 2 = 3 \ne 1$. Die Gleichungen widersprechen einander, und die Richtungsvektoren sind nicht parallel – die Geraden sind **windschief**.
:::

## Ebenen im Raum

Eine Ebene im $\mathbb{R}^3$ ist durch einen Punkt und zwei nicht parallele Richtungsvektoren festgelegt (**Parameterdarstellung**):

$$
\varepsilon\colon X = P + s \cdot \vec{u} + t \cdot \vec{v}
$$

Häufiger verwendet man die **Normalvektordarstellung**. Den Normalvektor erhält man mit dem [vektoriellen Produkt](/de/mathematics/geometry/vectors/#vektorielles-produkt) $\vec{n} = \vec{u} \times \vec{v}$:

$$
\vec{n} \cdot X = \vec{n} \cdot P \qquad\Longleftrightarrow\qquad a x + b y + c z = d
$$

:::caution
Im $\mathbb{R}^3$ beschreibt eine Gleichung $ax + by + cz = d$ eine **Ebene**, keine Gerade. Eine Gerade im Raum kann nur in Parameterform (oder als Schnitt zweier Ebenen) angegeben werden.
:::

:::tip[Beispiel]
Die Ebene durch $A = (1 \mid 0 \mid 0)$, $B = (0 \mid 2 \mid 0)$ und $C = (0 \mid 0 \mid 3)$ hat den Normalvektor $\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}$. Mit $A$ eingesetzt:

$$
6x + 3y + 2z = 6
$$

Probe mit $B$: $6 \cdot 0 + 3 \cdot 2 + 2 \cdot 0 = 6$ ✓
:::

### Gerade und Ebene

Eine Gerade kann in einer Ebene liegen, zu ihr parallel sein oder sie in genau einem Punkt schneiden. Den **Schnittpunkt** findet man, indem man die Koordinaten der Geraden in die Ebenengleichung einsetzt und nach $t$ auflöst.

Ist der Richtungsvektor der Geraden normal auf den Normalvektor der Ebene ($\vec{v} \cdot \vec{n} = 0$), ist die Gerade parallel zur Ebene oder liegt in ihr.

## Abstände

**Abstand Punkt – Ebene (bzw. Punkt – Gerade in $\mathbb{R}^2$):** Mit der **Hesseschen Normalform** gilt für die Ebene $ax + by + cz = d$ und den Punkt $Q = (q_x \mid q_y \mid q_z)$:

$$
d(Q, \varepsilon) = \frac{\lvert a q_x + b q_y + c q_z - d \rvert}{\sqrt{a^2 + b^2 + c^2}}
$$

In der Ebene fällt der $z$-Anteil weg.

:::tip[Beispiel]
Abstand des Ursprungs von der Ebene $6x + 3y + 2z = 6$:

$$
d = \frac{\lvert 0 - 6 \rvert}{\sqrt{36 + 9 + 4}} = \frac{6}{7} \approx 0{,}857
$$
:::

**Abstand Punkt – Gerade im Raum:** Mit dem vektoriellen Produkt gilt für $g\colon X = P + t\vec{v}$

$$
d(Q, g) = \frac{\lvert \overrightarrow{PQ} \times \vec{v} \rvert}{\lvert \vec{v} \rvert}
$$

Das entspricht der Höhe des Parallelogramms, das von $\overrightarrow{PQ}$ und $\vec{v}$ aufgespannt wird.
