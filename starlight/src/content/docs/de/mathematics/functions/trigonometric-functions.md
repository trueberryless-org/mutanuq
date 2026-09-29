---
title: Winkelfunktionen
description: Sinus-, Cosinus- und Tangensfunktion im Bogenmaß, Amplitude, Periode, Frequenz und Phasenverschiebung der allgemeinen Sinusfunktion sowie goniometrische Gleichungen.
sidebar:
  order: 6
---

## Sinus- und Cosinusfunktion

Am [Einheitskreis](/de/mathematics/geometry/trigonometry/#einheitskreis) sind $\sin x$ und $\cos x$ für beliebige Winkel definiert. Trägt man sie als Funktionen des Winkels $x$ **im Bogenmaß** auf, erhält man die Sinus- und die Cosinuskurve.

| Eigenschaft       | $f(x) = \sin x$                          | $f(x) = \cos x$                         |
| ----------------- | ---------------------------------------- | --------------------------------------- |
| Definitionsmenge  | $\mathbb{R}$                             | $\mathbb{R}$                            |
| Wertemenge        | $[-1; 1]$                                | $[-1; 1]$                               |
| Periode           | $2\pi$                                   | $2\pi$                                  |
| Nullstellen       | $0, \pm\pi, \pm 2\pi, \ldots$ ($k\pi$)   | $\pm\frac{\pi}{2}, \pm\frac{3\pi}{2}, \ldots$ |
| Maxima            | bei $\frac{\pi}{2} + 2k\pi$              | bei $2k\pi$                             |
| Symmetrie         | ungerade: $\sin(-x) = -\sin x$           | gerade: $\cos(-x) = \cos x$             |

Die Cosinuskurve ist die um $\frac{\pi}{2}$ nach links verschobene Sinuskurve: $\cos x = \sin\left(x + \frac{\pi}{2}\right)$.

### Tangensfunktion

$$
\tan x = \frac{\sin x}{\cos x}
$$

Die Tangensfunktion hat die Periode $\pi$ und ist an den Nullstellen des Cosinus ($x = \frac{\pi}{2} + k\pi$) nicht definiert. Dort hat sie **Polstellen** mit senkrechten Asymptoten. Ihre Wertemenge ist $\mathbb{R}$.

## Die allgemeine Sinusfunktion

Schwingungen und Wechselgrößen werden mit der **allgemeinen Sinusfunktion** beschrieben:

$$
f(t) = A \cdot \sin(\omega t + \varphi) + d
$$

| Parameter | Name                              | Wirkung auf den Graphen                             |
| --------- | --------------------------------- | --------------------------------------------------- |
| $A$       | **Amplitude**                     | Streckung in $y$-Richtung, maximale Auslenkung      |
| $\omega$  | **Kreisfrequenz**                 | Streckung/Stauchung in $t$-Richtung                 |
| $\varphi$ | **Nullphasenwinkel**              | Verschiebung in $t$-Richtung um $-\frac{\varphi}{\omega}$ |
| $d$       | Gleichanteil (Offset)             | Verschiebung in $y$-Richtung                        |

Zwischen Kreisfrequenz, **Frequenz** $f$ und **Periodendauer** $T$ gilt:

$$
\omega = 2\pi f = \frac{2\pi}{T} \qquad f = \frac{1}{T}
$$

:::tip[Beispiel: Netzspannung]
Die Netzspannung in Österreich hat einen Effektivwert von 230 V und eine Frequenz von 50 Hz. Der Scheitelwert (die Amplitude) ist $\hat{u} = 230\ \text{V} \cdot \sqrt{2} \approx 325\ \text{V}$:

$$
u(t) = 325\ \text{V} \cdot \sin(2\pi \cdot 50\ \text{Hz} \cdot t) = 325\ \text{V} \cdot \sin(314{,}16\ \text{s}^{-1} \cdot t)
$$

Die Periodendauer beträgt $T = \frac{1}{50\ \text{Hz}} = 20\ \text{ms}$.
:::

:::tip[Beispiel: Parameter ablesen]
Eine Schwingung hat ihr Maximum $5$ bei $t = 1$ und ihr Minimum $-1$ bei $t = 3$.

- Gleichanteil: $d = \frac{5 + (-1)}{2} = 2$
- Amplitude: $A = \frac{5 - (-1)}{2} = 3$
- Von Maximum zu Minimum vergeht eine halbe Periode, also $T = 4$ und $\omega = \frac{2\pi}{4} = \frac{\pi}{2}$.
- Das Maximum der Sinusfunktion liegt dort, wo $\omega t + \varphi = \frac{\pi}{2}$: $\frac{\pi}{2} \cdot 1 + \varphi = \frac{\pi}{2} \Rightarrow \varphi = 0$.

$$
f(t) = 3 \sin\left(\frac{\pi}{2}t\right) + 2
$$
:::

### Phasenverschiebung

Zwei Schwingungen gleicher Frequenz sind **phasenverschoben**, wenn ihre Nullphasenwinkel verschieden sind. In einem Wechselstromkreis mit Spule eilt der Strom der Spannung nach, mit Kondensator eilt er vor. Die Rechnung mit solchen Zeigern erfolgt am einfachsten mit [komplexen Zahlen](/de/mathematics/algebra/complex-numbers/#anwendung-wechselstromtechnik).

Die Überlagerung zweier Sinusschwingungen gleicher Frequenz ergibt wieder eine Sinusschwingung derselben Frequenz. Überlagert man Schwingungen verschiedener Frequenz, entstehen kompliziertere periodische Signale – umgekehrt lässt sich jedes periodische Signal als Summe von Sinusschwingungen darstellen (**Fourier-Analyse**).

## Wichtige Formeln

$$
\sin^2 x + \cos^2 x = 1
$$

**Additionstheoreme:**

$$
\begin{aligned}
\sin(\alpha \pm \beta) &= \sin\alpha \cos\beta \pm \cos\alpha \sin\beta \\
\cos(\alpha \pm \beta) &= \cos\alpha \cos\beta \mp \sin\alpha \sin\beta
\end{aligned}
$$

**Doppelter Winkel:**

$$
\sin(2x) = 2 \sin x \cos x \qquad \cos(2x) = \cos^2 x - \sin^2 x = 1 - 2\sin^2 x
$$

## Goniometrische Gleichungen

Gleichungen, in denen die Unbekannte im Argument einer Winkelfunktion steht, haben wegen der Periodizität meist **unendlich viele Lösungen**. Man bestimmt zuerst die Lösungen in einer Periode und addiert dann Vielfache der Periode.

:::tip[Beispiel]
$$
2 \sin x = 1 \quad\Rightarrow\quad \sin x = \frac{1}{2}
$$

Der Taschenrechner liefert $x_1 = \arcsin\frac{1}{2} = \frac{\pi}{6}$. Wegen $\sin(\pi - x) = \sin x$ ist auch $x_2 = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$ eine Lösung.

Alle Lösungen: $x = \frac{\pi}{6} + 2k\pi$ oder $x = \frac{5\pi}{6} + 2k\pi$ mit $k \in \mathbb{Z}$.
:::

:::tip[Beispiel: Wann erreicht die Netzspannung 200 V?]
$$
325 \sin(314{,}16\,t) = 200 \;\Rightarrow\; 314{,}16\,t = \arcsin\frac{200}{325} \approx 0{,}6633 \;\Rightarrow\; t \approx 2{,}11\ \text{ms}
$$

In jeder Periode wird der Wert ein zweites Mal beim Absinken erreicht: $314{,}16\,t = \pi - 0{,}6633$, also $t \approx 7{,}89\ \text{ms}$.
:::
