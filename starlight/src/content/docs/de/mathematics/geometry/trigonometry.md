---
title: Trigonometrie
description: Sinus, Cosinus und Tangens im rechtwinkeligen Dreieck, Einheitskreis, Sinussatz, Cosinussatz und Flächenformel für allgemeine Dreiecke.
sidebar:
  order: 2
---

Die **Trigonometrie** (Dreiecksmessung) stellt Beziehungen zwischen den Seiten und Winkeln eines Dreiecks her. Mit ihr lassen sich unzugängliche Längen berechnen, etwa die Höhe eines Turms, die Steigung einer Straße oder die Kräfte in einem Fachwerk.

## Rechtwinkeliges Dreieck

Bezogen auf einen spitzen Winkel $\alpha$ eines rechtwinkeligen Dreiecks unterscheidet man die **Gegenkathete** (liegt dem Winkel gegenüber), die **Ankathete** (liegt am Winkel an) und die **Hypotenuse** (liegt dem rechten Winkel gegenüber).

$$
\sin\alpha = \frac{\text{Gegenkathete}}{\text{Hypotenuse}} \qquad
\cos\alpha = \frac{\text{Ankathete}}{\text{Hypotenuse}} \qquad
\tan\alpha = \frac{\text{Gegenkathete}}{\text{Ankathete}}
$$

Diese Verhältnisse hängen nur vom Winkel ab, nicht von der Größe des Dreiecks, weil alle rechtwinkeligen Dreiecke mit demselben Winkel $\alpha$ [ähnlich](/de/mathematics/geometry/elementary-geometry/#ähnlichkeit-und-strahlensätze) sind.

Ist ein Seitenverhältnis bekannt, erhält man den Winkel mit den Umkehrfunktionen $\arcsin$, $\arccos$ und $\arctan$ (am Taschenrechner $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$).

:::caution
Achten Sie darauf, dass der Taschenrechner im richtigen Winkelmodus ist: **DEG** für Gradmaß, **RAD** für Bogenmaß.
:::

### Wichtige Zusammenhänge

$$
\tan\alpha = \frac{\sin\alpha}{\cos\alpha} \qquad \sin^2\alpha + \cos^2\alpha = 1 \qquad \sin\alpha = \cos(90° - \alpha)
$$

Die zweite Formel ist der Satz von Pythagoras am Einheitskreis.

### Besondere Werte

| $\alpha$      | $0°$ | $30°$                | $45°$                  | $60°$                  | $90°$       |
| ------------- | ---- | -------------------- | ---------------------- | ---------------------- | ----------- |
| $\sin\alpha$  | $0$  | $\frac{1}{2}$        | $\frac{\sqrt{2}}{2}$   | $\frac{\sqrt{3}}{2}$   | $1$         |
| $\cos\alpha$  | $1$  | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$   | $\frac{1}{2}$          | $0$         |
| $\tan\alpha$  | $0$  | $\frac{\sqrt{3}}{3}$ | $1$                    | $\sqrt{3}$             | nicht definiert |

:::tip[Beispiel: Steigung]
Ein Straßenschild zeigt 12 % Steigung. Das bedeutet, dass die Straße auf 100 m waagrechter Strecke um 12 m ansteigt. Der Steigungswinkel ist

$$
\tan\alpha = 0{,}12 \quad\Rightarrow\quad \alpha = \arctan 0{,}12 \approx 6{,}84°
$$
:::

:::tip[Beispiel: Höhe eines Turms]
Von einem Punkt, der 50 m vom Fuß eines Turms entfernt ist, sieht man die Turmspitze unter einem **Höhenwinkel** von $38°$. Die Augenhöhe beträgt 1,6 m.

$$
h = 50 \cdot \tan 38° + 1{,}6 \approx 39{,}06 + 1{,}6 \approx 40{,}7\ \text{m}
$$
:::

## Einheitskreis

Um Sinus und Cosinus auch für Winkel über $90°$ zu definieren, betrachtet man einen Kreis mit Radius $1$ um den Ursprung. Der Punkt $P$ auf dem Kreis, dessen Radius mit der positiven $x$-Achse den Winkel $\alpha$ einschließt, hat die Koordinaten

$$
P = (\cos\alpha \mid \sin\alpha)
$$

Daraus ergeben sich die Vorzeichen in den vier Quadranten:

| Quadrant | Winkel         | $\sin$ | $\cos$ | $\tan$ |
| -------- | -------------- | ------ | ------ | ------ |
| I        | $0°$ – $90°$   | $+$    | $+$    | $+$    |
| II       | $90°$ – $180°$ | $+$    | $-$    | $-$    |
| III      | $180°$ – $270°$| $-$    | $-$    | $+$    |
| IV       | $270°$ – $360°$| $-$    | $+$    | $-$    |

Außerdem gilt $\sin(180° - \alpha) = \sin\alpha$ und $\cos(-\alpha) = \cos\alpha$. Deshalb hat eine Gleichung wie $\sin\alpha = 0{,}5$ zwischen $0°$ und $360°$ zwei Lösungen: $30°$ und $150°$.

Der Verlauf von Sinus und Cosinus als Funktion des Winkels wird bei den [Winkelfunktionen](/de/mathematics/functions/trigonometric-functions/) behandelt.

## Allgemeines Dreieck

In einem beliebigen Dreieck können Sinus und Cosinus nicht direkt als Seitenverhältnisse verwendet werden. Stattdessen gelten der Sinussatz und der Cosinussatz.

### Sinussatz

$$
\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma} = 2r
$$

Dabei ist $r$ der Umkreisradius. Der Sinussatz wird verwendet, wenn **eine Seite und der gegenüberliegende Winkel** bekannt sind, also bei den Fällen:

- zwei Winkel und eine Seite (**WSW**, **SWW**),
- zwei Seiten und der Gegenwinkel einer davon (**SSW**).

:::caution[Mehrdeutiger Fall]
Beim Fall SSW kann es zwei Lösungen geben, weil $\sin\beta = \sin(180° - \beta)$ gilt. Liegt der gegebene Winkel der **größeren** der beiden Seiten gegenüber, ist die Lösung eindeutig.
:::

### Cosinussatz

$$
\begin{aligned}
a^2 &= b^2 + c^2 - 2bc \cos\alpha \\
b^2 &= a^2 + c^2 - 2ac \cos\beta \\
c^2 &= a^2 + b^2 - 2ab \cos\gamma
\end{aligned}
$$

Der Cosinussatz ist eine Verallgemeinerung des Satzes von Pythagoras: Für $\gamma = 90°$ ist $\cos\gamma = 0$ und es bleibt $c^2 = a^2 + b^2$. Er wird verwendet bei

- zwei Seiten und dem eingeschlossenen Winkel (**SWS**),
- drei Seiten (**SSS**).

### Flächenformel

$$
A = \frac{1}{2}\, a b \sin\gamma = \frac{1}{2}\, b c \sin\alpha = \frac{1}{2}\, a c \sin\beta
$$

:::tip[Beispiel: Vermessung]
Die Entfernung zwischen zwei Punkten $A$ und $B$ auf beiden Seiten eines Sees soll bestimmt werden. Von einem Punkt $C$ aus misst man $\overline{CA} = b = 420\ \text{m}$, $\overline{CB} = a = 350\ \text{m}$ und den Winkel $\gamma = 72°$.

Cosinussatz (Fall SWS):

$$
c^2 = 350^2 + 420^2 - 2 \cdot 350 \cdot 420 \cdot \cos 72° \approx 298\,900 - 90\,852 = 208\,048 \quad\Rightarrow\quad c \approx 456\ \text{m}
$$

Mit dem Sinussatz folgt der Winkel bei $A$:

$$
\sin\alpha = \frac{a \sin\gamma}{c} = \frac{350 \cdot \sin 72°}{456} \approx 0{,}730 \quad\Rightarrow\quad \alpha \approx 46{,}9°
$$

Da $a$ nicht die größte Seite ist, ist $\alpha$ spitz und die Lösung eindeutig. Es folgt $\beta = 180° - 72° - 46{,}9° = 61{,}1°$.
:::

### Welcher Satz wann?

| Gegeben                                     | Fall | Vorgehen                                         |
| ------------------------------------------- | ---- | ------------------------------------------------ |
| drei Seiten                                 | SSS  | Cosinussatz für einen Winkel, dann Sinussatz     |
| zwei Seiten und eingeschlossener Winkel     | SWS  | Cosinussatz für die dritte Seite, dann Sinussatz |
| zwei Seiten und ein Gegenwinkel             | SSW  | Sinussatz (Mehrdeutigkeit prüfen)                |
| eine Seite und zwei Winkel                  | WSW  | dritten Winkel über die Winkelsumme, dann Sinussatz |

:::tip[Tipp]
Berechnen Sie Winkel nach Möglichkeit mit dem Cosinussatz, weil $\arccos$ im Bereich $0°$ bis $180°$ eindeutig ist. Beim Sinussatz muss man prüfen, ob der Winkel spitz oder stumpf ist.
:::
