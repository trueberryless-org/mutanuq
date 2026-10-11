---
title: Differentialrechnung
description: Differenzenquotient und Differentialquotient, Ableitungsfunktion, Ableitungsregeln, höhere Ableitungen, Tangenten und Anwendungen in Physik und Technik.
sidebar:
  order: 3
---

Die **Differentialrechnung** untersucht, wie schnell sich eine Größe ändert. Mit ihr berechnet man Geschwindigkeiten aus Weg-Zeit-Funktionen, Steigungen von Kurven, Hoch- und Tiefpunkte und optimale Lösungen technischer Probleme.

## Differenzenquotient

Der **Differenzenquotient** ist die mittlere Änderungsrate einer Funktion im Intervall $[x_0; x_0 + h]$:

$$
\frac{\Delta y}{\Delta x} = \frac{f(x_0 + h) - f(x_0)}{h}
$$

Geometrisch ist er die Steigung der **Sekante** durch die Punkte $(x_0 \mid f(x_0))$ und $(x_0 + h \mid f(x_0 + h))$.

:::tip[Beispiel: Durchschnittsgeschwindigkeit]
Ein Auto legt in der Zeit $t$ (in s) den Weg $s(t) = 2t^2$ (in m) zurück. Zwischen $t = 2$ und $t = 5$ beträgt die Durchschnittsgeschwindigkeit

$$
\frac{s(5) - s(2)}{5 - 2} = \frac{50 - 8}{3} = 14\ \text{m/s}
$$
:::

Neben der mittleren Änderungsrate gibt es die **absolute Änderung** $f(x_0 + h) - f(x_0)$ und die relative Änderung $\frac{f(x_0 + h) - f(x_0)}{f(x_0)}$.

## Differentialquotient

Lässt man das Intervall immer kleiner werden ($h \to 0$), wird aus der Sekante die **Tangente** und aus der mittleren die momentane Änderungsrate. Dieser [Grenzwert](/de/mathematics/analysis/limits-and-continuity/) heißt Differentialquotient oder Ableitung von $f$ an der Stelle $x_0$:

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} = \frac{\mathrm{d}f}{\mathrm{d}x}(x_0)
$$

Existiert dieser Grenzwert, heißt $f$ an der Stelle $x_0$ **differenzierbar**. Die Ableitung ist die Steigung der Tangente an den Graphen im Punkt $(x_0 \mid f(x_0))$.

:::tip[Beispiel: Ableitung von x² mit dem Grenzwert]
$$
f'(x) = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0} (2x + h) = 2x
$$

Für das Auto mit $s(t) = 2t^2$ ist die Momentangeschwindigkeit $v(t) = s'(t) = 4t$. Nach 5 s fährt es $20$ m/s $= 72$ km/h.
:::

:::note
Nicht jede stetige Funktion ist überall differenzierbar. Die Betragsfunktion $\lvert x \rvert$ hat bei $0$ einen **Knick**: Von links ist die Steigung $-1$, von rechts $+1$, es gibt also keine eindeutige Tangente.
:::

## Ableitungsfunktion

Ordnet man jeder Stelle $x$ die Ableitung $f'(x)$ zu, erhält man die **Ableitungsfunktion** $f'$. Den Vorgang nennt man Differenzieren oder Ableiten.

| Funktion $f$        | Ableitung $f'$             |
| ------------------- | -------------------------- |
| $c$ (konstant)      | $0$                        |
| $x^n$               | $n \cdot x^{n-1}$          |
| $\sqrt{x} = x^{\frac{1}{2}}$ | $\dfrac{1}{2\sqrt{x}}$ |
| $\dfrac{1}{x} = x^{-1}$ | $-\dfrac{1}{x^2}$     |
| $e^x$               | $e^x$                      |
| $a^x$               | $a^x \cdot \ln a$          |
| $\ln x$             | $\dfrac{1}{x}$             |
| $\sin x$            | $\cos x$                   |
| $\cos x$            | $-\sin x$                  |
| $\tan x$            | $\dfrac{1}{\cos^2 x}$      |

Die **Potenzregel** $(x^n)' = n x^{n-1}$ gilt für alle reellen Hochzahlen $n$, also auch für Wurzeln und Brüche.

## Ableitungsregeln

| Regel               | Formel                                                         |
| ------------------- | -------------------------------------------------------------- |
| Faktorregel         | $(c \cdot f)' = c \cdot f'$                                    |
| Summenregel         | $(f \pm g)' = f' \pm g'$                                       |
| Produktregel    | $(f \cdot g)' = f' \cdot g + f \cdot g'$                       |
| Quotientenregel | $\left(\dfrac{f}{g}\right)' = \dfrac{f' \cdot g - f \cdot g'}{g^2}$ |
| Kettenregel     | $\big(f(g(x))\big)' = f'(g(x)) \cdot g'(x)$, „äußere mal innere Ableitung“ |

:::tip[Beispiele]
**Summen- und Faktorregel:**

$$
f(x) = 4x^3 - 5x^2 + 7x - 2 \quad\Rightarrow\quad f'(x) = 12x^2 - 10x + 7
$$

**Produktregel:**

$$
f(x) = x^2 \cdot e^x \quad\Rightarrow\quad f'(x) = 2x \cdot e^x + x^2 \cdot e^x = e^x (x^2 + 2x)
$$

**Quotientenregel:**

$$
f(x) = \frac{x}{x^2 + 1} \quad\Rightarrow\quad f'(x) = \frac{1 \cdot (x^2 + 1) - x \cdot 2x}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2}
$$

**Kettenregel:**

$$
f(x) = (3x + 1)^5 \quad\Rightarrow\quad f'(x) = 5(3x + 1)^4 \cdot 3 = 15(3x + 1)^4
$$

$$
f(x) = e^{-2x} \quad\Rightarrow\quad f'(x) = e^{-2x} \cdot (-2) = -2e^{-2x}
$$

$$
f(x) = \sin(\omega t) \quad\Rightarrow\quad f'(t) = \omega \cos(\omega t)
$$
:::

:::caution
Bei der Kettenregel wird die innere Ableitung oft vergessen: $(e^{3x})' = 3e^{3x}$, nicht $e^{3x}$.
:::

## Höhere Ableitungen

Die Ableitung von $f'$ heißt **zweite Ableitung** $f''$, deren Ableitung dritte Ableitung $f'''$ usw.

- $f'$ beschreibt die Steigung von $f$ (steigend/fallend).
- $f''$ beschreibt die Krümmung von $f$: Ist $f'' > 0$, ist der Graph linksgekrümmt (konvex, „Smiley“), ist $f'' < 0$, ist er rechtsgekrümmt (konkav).

In der Physik ist die zweite Ableitung des Weges nach der Zeit die **Beschleunigung**:

$$
s(t) \;\xrightarrow{\ \frac{\mathrm{d}}{\mathrm{d}t}\ }\; v(t) = s'(t) \;\xrightarrow{\ \frac{\mathrm{d}}{\mathrm{d}t}\ }\; a(t) = v'(t) = s''(t)
$$

## Tangente

Die Tangente an den Graphen von $f$ im Punkt $(x_0 \mid f(x_0))$ hat die Steigung $k = f'(x_0)$ und die Gleichung

$$
t(x) = f'(x_0) \cdot (x - x_0) + f(x_0)
$$

:::tip[Beispiel]
$f(x) = x^3 - 2x$ an der Stelle $x_0 = 1$: $\;f(1) = -1$, $\;f'(x) = 3x^2 - 2$, $\;f'(1) = 1$

$$
t(x) = 1 \cdot (x - 1) - 1 = x - 2
$$
:::

In der Nähe von $x_0$ ist die Tangente eine gute Näherung für die Funktion (**Linearisierung**): $f(x_0 + h) \approx f(x_0) + f'(x_0) \cdot h$. So erhält man zum Beispiel $\sqrt{4{,}1} \approx 2 + \frac{1}{4} \cdot 0{,}1 = 2{,}025$ (exakt: $2{,}0248\ldots$).

## Anwendungen

Überall dort, wo eine Größe von einer anderen abhängt, beschreibt die Ableitung die momentane Änderungsrate:

| Funktion                    | Ableitung                         |
| --------------------------- | --------------------------------- |
| Weg $s(t)$                  | Geschwindigkeit $v(t)$            |
| Geschwindigkeit $v(t)$      | Beschleunigung $a(t)$             |
| Ladung $Q(t)$               | Stromstärke $i(t) = \dot{Q}(t)$   |
| Energie $E(t)$              | Leistung $P(t)$                   |
| Kosten $K(x)$               | Grenzkosten $K'(x)$               |
| Füllmenge $V(t)$            | Zu- bzw. Abflussrate              |

In der Elektrotechnik gilt etwa für die Spannung an einer Spule $u_L = L \cdot \frac{\mathrm{d}i}{\mathrm{d}t}$ und für den Strom durch einen Kondensator $i_C = C \cdot \frac{\mathrm{d}u}{\mathrm{d}t}$.

:::tip[Beispiel: Kondensatorstrom]
An einem Kondensator mit $C = 10\ \mu\text{F}$ liegt die Spannung $u(t) = 325 \sin(314\,t)$ V. Der Strom ist

$$
i(t) = C \cdot u'(t) = 10 \cdot 10^{-6} \cdot 325 \cdot 314 \cos(314\,t) \approx 1{,}02 \cos(314\,t)\ \text{A}
$$

Der Strom ist eine Cosinusfunktion: Er eilt der Spannung um $90°$ voraus.
:::

Wie man mit Ableitungen Hoch-, Tief- und Wendepunkte bestimmt und Optimierungsaufgaben löst, zeigt die [Kurvendiskussion](/de/mathematics/analysis/curve-sketching/).
