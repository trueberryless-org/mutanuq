---
title: Elementare Geometrie
description: Winkel, Dreiecke, Ähnlichkeit, der Satz von Pythagoras, Vierecke, Kreis sowie Oberfläche und Volumen elementarer Körper.
sidebar:
  order: 1
---

## Winkel

Winkel werden im **Gradmaß** ($360°$ für eine volle Umdrehung) oder im **Bogenmaß** angegeben. Das Bogenmaß ist die Länge des Kreisbogens am Einheitskreis, eine volle Umdrehung entspricht daher $2\pi$:

$$
\alpha_{\text{Bogenmaß}} = \frac{\pi}{180°} \cdot \alpha_{\text{Gradmaß}} \qquad 180° \mathrel{\hat{=}} \pi \qquad 90° \mathrel{\hat{=}} \frac{\pi}{2}
$$

Nach ihrer Größe unterscheidet man spitze ($< 90°$), rechte ($= 90°$), stumpfe ($> 90°$), gestreckte ($= 180°$) und überstumpfe ($> 180°$) Winkel.

An zwei geschnittenen Geraden sind **Scheitelwinkel** gleich groß und **Nebenwinkel** ergeben zusammen $180°$. Wird ein Paar paralleler Geraden von einer dritten Geraden geschnitten, sind **Stufenwinkel** und **Wechselwinkel** gleich groß.

## Dreiecke

In jedem Dreieck gilt:

- Die **Winkelsumme** beträgt $\alpha + \beta + \gamma = 180°$.
- **Dreiecksungleichung:** Jede Seite ist kürzer als die Summe der beiden anderen.
- Der größten Seite liegt der größte Winkel gegenüber.

Üblicherweise werden die Eckpunkte gegen den Uhrzeigersinn mit $A$, $B$, $C$ bezeichnet, die gegenüberliegenden Seiten mit $a$, $b$, $c$ und die Winkel bei den Eckpunkten mit $\alpha$, $\beta$, $\gamma$.

| Größe            | Formel                                               |
| ---------------- | ---------------------------------------------------- |
| Umfang           | $u = a + b + c$                                      |
| Flächeninhalt    | $A = \dfrac{c \cdot h_c}{2}$ (Seite mal zugehörige Höhe durch 2) |
| mit zwei Seiten und eingeschlossenem Winkel | $A = \dfrac{1}{2}\, a b \sin\gamma$ |
| Heronsche Formel | $A = \sqrt{s(s - a)(s - b)(s - c)}$ mit $s = \dfrac{a + b + c}{2}$ |

### Besondere Dreiecke

- **Gleichschenkeliges Dreieck:** zwei gleich lange Seiten (Schenkel), die beiden Basiswinkel sind gleich groß.
- **Gleichseitiges Dreieck:** alle Seiten gleich lang, alle Winkel $60°$. Höhe $h = \frac{a}{2}\sqrt{3}$, Fläche $A = \frac{a^2}{4}\sqrt{3}$.
- **Rechtwinkeliges Dreieck:** ein Winkel ist $90°$. Die Seiten am rechten Winkel heißen **Katheten**, die gegenüberliegende längste Seite **Hypotenuse**.

### Merkwürdige Punkte

| Punkt            | Schnittpunkt der …          | Besonderheit                                      |
| ---------------- | --------------------------- | ------------------------------------------------- |
| Umkreismittelpunkt | Streckensymmetralen       | gleich weit von allen Eckpunkten entfernt         |
| Inkreismittelpunkt | Winkelsymmetralen         | gleich weit von allen Seiten entfernt             |
| Schwerpunkt      | Schwerlinien (Seitenhalbierenden) | teilt die Schwerlinien im Verhältnis $2 : 1$ |
| Höhenschnittpunkt | Höhen                      |                                                   |

## Ähnlichkeit und Strahlensätze

Zwei Figuren sind **ähnlich**, wenn sie in allen Winkeln übereinstimmen. Dann stehen alle entsprechenden Seiten im selben Verhältnis, dem **Ähnlichkeitsfaktor** $k$. Flächen verändern sich mit $k^2$, Volumen mit $k^3$.

Zwei Dreiecke sind bereits ähnlich, wenn sie in **zwei Winkeln** übereinstimmen.

**Strahlensätze:** Werden zwei von einem Punkt $S$ ausgehende Strahlen von zwei parallelen Geraden geschnitten, gilt:

$$
\frac{\overline{SA}}{\overline{SA'}} = \frac{\overline{SB}}{\overline{SB'}} = \frac{\overline{AB}}{\overline{A'B'}}
$$

:::tip[Beispiel: Höhe eines Baumes]
Ein 1,8 m großer Mensch wirft einen 2,4 m langen Schatten, ein Baum zur selben Zeit einen 16 m langen Schatten. Da die Sonnenstrahlen parallel sind, sind die Dreiecke ähnlich:

$$
\frac{h}{16} = \frac{1{,}8}{2{,}4} \quad\Rightarrow\quad h = 12\ \text{m}
$$
:::

## Satz von Pythagoras

In einem rechtwinkeligen Dreieck mit den Katheten $a$, $b$ und der Hypotenuse $c$ gilt:

$$
a^2 + b^2 = c^2
$$

Umgekehrt ist ein Dreieck mit $a^2 + b^2 = c^2$ rechtwinkelig. Ganzzahlige Lösungen wie $(3, 4, 5)$ oder $(5, 12, 13)$ heißen **pythagoreische Tripel**.

:::tip[Beispiel]
Ein Bildschirm im Format 16 : 9 hat eine Diagonale von 27 Zoll. Mit Breite $16k$ und Höhe $9k$ gilt:

$$
(16k)^2 + (9k)^2 = 27^2 \;\Rightarrow\; 337k^2 = 729 \;\Rightarrow\; k \approx 1{,}471
$$

Der Bildschirm ist also etwa $23{,}5$ Zoll breit und $13{,}2$ Zoll hoch.
:::

**Höhensatz und Kathetensatz:** Teilt die Höhe $h$ die Hypotenuse in die Abschnitte $p$ (unter $a$) und $q$ (unter $b$), gilt $h^2 = p \cdot q$, $a^2 = c \cdot p$ und $b^2 = c \cdot q$.

## Vierecke

| Viereck        | Eigenschaften                                           | Fläche                          | Umfang              |
| -------------- | ------------------------------------------------------- | ------------------------------- | ------------------- |
| Quadrat        | 4 gleiche Seiten, 4 rechte Winkel                        | $a^2$                           | $4a$                |
| Rechteck       | gegenüberliegende Seiten gleich, 4 rechte Winkel         | $a \cdot b$                     | $2a + 2b$           |
| Parallelogramm | gegenüberliegende Seiten parallel und gleich lang        | $a \cdot h_a$                   | $2a + 2b$           |
| Raute (Rhombus) | 4 gleiche Seiten, Diagonalen normal aufeinander        | $\dfrac{e \cdot f}{2}$          | $4a$                |
| Trapez         | ein Paar paralleler Seiten $a$ und $c$                   | $\dfrac{(a + c) \cdot h}{2}$    | $a + b + c + d$     |
| Deltoid        | zwei Paare gleich langer benachbarter Seiten             | $\dfrac{e \cdot f}{2}$          | $2a + 2b$           |

Die Winkelsumme in jedem Viereck beträgt $360°$. Die Diagonale eines Rechtecks ist $d = \sqrt{a^2 + b^2}$, die eines Quadrats $d = a\sqrt{2}$.

## Kreis

| Größe                                  | Formel                                       |
| -------------------------------------- | -------------------------------------------- |
| Umfang                                 | $u = 2 r \pi = d \pi$                        |
| Fläche                                 | $A = r^2 \pi = \dfrac{d^2 \pi}{4}$           |
| Kreisbogen zum Winkel $\alpha$         | $b = \dfrac{r \pi \alpha}{180°} = r \cdot \alpha_{\text{Bogenmaß}}$ |
| Kreissektor                            | $A = \dfrac{r^2 \pi \alpha}{360°} = \dfrac{b \cdot r}{2}$ |
| Kreisring                              | $A = (R^2 - r^2) \pi$                        |

Die Kreiszahl $\pi \approx 3{,}14159$ ist das Verhältnis von Umfang zu Durchmesser jedes Kreises.

**Satz von Thales:** Liegt der Punkt $C$ auf einem Halbkreis über der Strecke $AB$, so ist der Winkel bei $C$ ein rechter Winkel.

## Körper

| Körper          | Volumen                               | Oberfläche                                     |
| --------------- | ------------------------------------- | ---------------------------------------------- |
| Würfel          | $V = a^3$                             | $O = 6a^2$                                     |
| Quader          | $V = a \cdot b \cdot c$               | $O = 2(ab + ac + bc)$                          |
| Prisma          | $V = G \cdot h$                       | $O = 2G + M$                                   |
| Zylinder        | $V = r^2 \pi h$                       | $O = 2 r^2 \pi + 2 r \pi h$                    |
| Pyramide        | $V = \dfrac{G \cdot h}{3}$            | $O = G + M$                                    |
| Kegel           | $V = \dfrac{r^2 \pi h}{3}$            | $O = r^2 \pi + r \pi s$ mit $s = \sqrt{r^2 + h^2}$ |
| Kugel           | $V = \dfrac{4}{3} r^3 \pi$            | $O = 4 r^2 \pi$                                |

Dabei ist $G$ die Grundfläche, $M$ die Mantelfläche und $s$ die Mantellinie. Pyramide und Kegel haben ein Drittel des Volumens des Prismas bzw. Zylinders mit gleicher Grundfläche und Höhe.

:::tip[Beispiel]
Wie viel Liter fasst ein zylindrischer Tank mit Durchmesser 1,2 m und Höhe 2 m?

$$
V = 0{,}6^2 \cdot \pi \cdot 2 \approx 2{,}262\ \text{m}^3 = 2262\ \text{L}
$$
:::

Volumen von Körpern mit gekrümmten Begrenzungsflächen berechnet man allgemein mit der [Integralrechnung](/de/mathematics/analysis/applications-of-integration/#volumen-von-rotationskörpern).
