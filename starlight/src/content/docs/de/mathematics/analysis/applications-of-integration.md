---
title: Anwendungen der Integralrechnung
description: Flächen unter und zwischen Kurven, Volumen von Rotationskörpern, linearer und quadratischer Mittelwert, Effektivwert sowie Weg, Arbeit und Ladung.
sidebar:
  order: 6
---

## Fläche zwischen Graph und x-Achse

Das [bestimmte Integral](/de/mathematics/analysis/integral-calculus/#bestimmtes-integral) liefert einen **orientierten** Flächeninhalt: Flächen unterhalb der $x$-Achse zählen negativ. Um den tatsächlichen Flächeninhalt zu berechnen, geht man so vor:

1. Nullstellen von $f$ im Intervall bestimmen.
2. Das Integral an den Nullstellen in Teilintegrale zerlegen.
3. Die **Beträge** der Teilintegrale addieren.

:::tip[Beispiel]
Wie groß ist die Fläche zwischen $f(x) = x^2 - 4$ und der $x$-Achse im Intervall $[0; 3]$?

Nullstelle im Intervall: $x = 2$.

$$
\int_0^2 (x^2 - 4)\,\mathrm{d}x = \left[\frac{x^3}{3} - 4x\right]_0^2 = \frac{8}{3} - 8 = -\frac{16}{3}
$$

$$
\int_2^3 (x^2 - 4)\,\mathrm{d}x = \left(9 - 12\right) - \left(\frac{8}{3} - 8\right) = -3 + \frac{16}{3} = \frac{7}{3}
$$

$$
A = \frac{16}{3} + \frac{7}{3} = \frac{23}{3} \approx 7{,}67
$$

Das Integral über das ganze Intervall wäre $-\frac{16}{3} + \frac{7}{3} = -3$ – die Flächen würden sich teilweise aufheben.
:::

## Fläche zwischen zwei Kurven

Die Fläche zwischen den Graphen von $f$ und $g$ ist das Integral der **Differenz** „obere minus untere Funktion“:

$$
A = \int_a^b \big(f(x) - g(x)\big)\,\mathrm{d}x \qquad \text{wenn } f(x) \ge g(x) \text{ auf } [a; b]
$$

Die Integrationsgrenzen sind oft die **Schnittstellen** der beiden Graphen ($f(x) = g(x)$). Schneiden sich die Graphen innerhalb des Intervalls, muss man wie oben in Teilflächen zerlegen. Wo die Graphen liegen, spielt keine Rolle – auch Flächen unterhalb der $x$-Achse werden so richtig berechnet.

:::tip[Beispiel]
Fläche zwischen $f(x) = x + 2$ und $g(x) = x^2$:

Schnittstellen: $x^2 = x + 2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow x_1 = -1$, $x_2 = 2$. Dazwischen liegt $f$ oberhalb von $g$ (z. B. $f(0) = 2 > g(0) = 0$).

$$
A = \int_{-1}^{2} \left(x + 2 - x^2\right)\mathrm{d}x = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2} = \left(2 + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right) = \frac{10}{3} + \frac{7}{6} = 4{,}5
$$
:::

## Volumen von Rotationskörpern

Rotiert der Graph von $f$ im Intervall $[a; b]$ um die **$x$-Achse**, entsteht ein **Rotationskörper**. Man denkt ihn sich aus dünnen Kreisscheiben mit Radius $f(x)$ und Dicke $\mathrm{d}x$ zusammengesetzt:

$$
V_x = \pi \int_a^b \big(f(x)\big)^2\,\mathrm{d}x
$$

Bei Rotation um die **$y$-Achse** löst man die Funktion nach $x$ auf und integriert nach $y$:

$$
V_y = \pi \int_c^d x^2\,\mathrm{d}y
$$

:::tip[Beispiel: Kegel]
Ein Kegel mit Radius $r$ und Höhe $h$ entsteht, wenn die Gerade $f(x) = \frac{r}{h}x$ im Intervall $[0; h]$ um die $x$-Achse rotiert:

$$
V = \pi \int_0^h \frac{r^2}{h^2}x^2\,\mathrm{d}x = \pi \frac{r^2}{h^2} \cdot \frac{h^3}{3} = \frac{r^2 \pi h}{3}
$$

Das ist die bekannte [Volumsformel](/de/mathematics/geometry/elementary-geometry/#körper) des Kegels.
:::

:::tip[Beispiel: Parabolspiegel]
Ein Scheinwerferspiegel entsteht durch Rotation von $y = \frac{x^2}{8}$ (in cm) um die $y$-Achse bis zur Höhe $y = 2$ cm. Mit $x^2 = 8y$:

$$
V = \pi \int_0^2 8y\,\mathrm{d}y = \pi \Big[4y^2\Big]_0^2 = 16\pi \approx 50{,}3\ \text{cm}^3
$$
:::

## Mittelwerte

### Linearer Mittelwert

Der **lineare Mittelwert** (arithmetischer Mittelwert) einer Funktion im Intervall $[a; b]$ ist die Höhe eines Rechtecks mit derselben Fläche:

$$
\bar{f} = \frac{1}{b - a} \int_a^b f(x)\,\mathrm{d}x
$$

In der Elektrotechnik heißt der lineare Mittelwert eines periodischen Signals über eine Periode **Gleichwert**. Für eine reine Sinusspannung ist er $0$.

:::tip[Beispiel: Gleichrichtwert]
Der Mittelwert einer gleichgerichteten Sinusspannung $\lvert \hat{u} \sin(\omega t) \rvert$ über eine halbe Periode ($\omega t$ von $0$ bis $\pi$) ist

$$
\bar{u} = \frac{1}{\pi} \int_0^{\pi} \hat{u} \sin x\,\mathrm{d}x = \frac{\hat{u}}{\pi} \Big[-\cos x\Big]_0^{\pi} = \frac{2\hat{u}}{\pi} \approx 0{,}637\,\hat{u}
$$
:::

### Quadratischer Mittelwert und Effektivwert

Der **quadratische Mittelwert** ist

$$
f_{\text{eff}} = \sqrt{\frac{1}{b - a} \int_a^b \big(f(x)\big)^2\,\mathrm{d}x}
$$

In der Elektrotechnik heißt er **Effektivwert** (engl. _RMS, root mean square_). Er ist jene Gleichspannung, die in einem Widerstand dieselbe Leistung umsetzt wie die Wechselspannung.

:::tip[Beispiel: Effektivwert einer Sinusspannung]
$$
U_{\text{eff}} = \sqrt{\frac{1}{2\pi} \int_0^{2\pi} \hat{u}^2 \sin^2 x\,\mathrm{d}x} = \sqrt{\frac{\hat{u}^2}{2\pi} \cdot \pi} = \frac{\hat{u}}{\sqrt{2}}
$$

Dabei wurde $\int_0^{2\pi} \sin^2 x\,\mathrm{d}x = \pi$ verwendet, was aus $\sin^2 x = \frac{1 - \cos(2x)}{2}$ folgt. Deshalb hat die Netzspannung mit $230$ V Effektivwert einen Scheitelwert von $230 \cdot \sqrt{2} \approx 325$ V.
:::

## Weitere Anwendungen

### Weg, Geschwindigkeit, Beschleunigung

$$
v(t) = v_0 + \int_0^t a(\tau)\,\mathrm{d}\tau \qquad s(t) = s_0 + \int_0^t v(\tau)\,\mathrm{d}\tau
$$

:::tip[Beispiel: Bremsvorgang]
Ein Zug bremst von $v_0 = 30$ m/s mit konstanter Verzögerung $a = -1{,}5\ \text{m/s}^2$. Er steht nach $v(t) = 30 - 1{,}5t = 0 \Rightarrow t = 20$ s. Der Bremsweg ist

$$
s = \int_0^{20} (30 - 1{,}5t)\,\mathrm{d}t = \Big[30t - 0{,}75t^2\Big]_0^{20} = 600 - 300 = 300\ \text{m}
$$
:::

### Arbeit

Ist eine Kraft entlang des Weges nicht konstant, ist die Arbeit das Integral der Kraft über den Weg:

$$
W = \int_{s_1}^{s_2} F(s)\,\mathrm{d}s
$$

:::tip[Beispiel: Feder]
Eine Feder mit der Federkonstante $D = 200$ N/m wird um $10$ cm gedehnt. Nach dem Hookeschen Gesetz ist $F(s) = D \cdot s$:

$$
W = \int_0^{0{,}1} 200s\,\mathrm{d}s = \Big[100s^2\Big]_0^{0{,}1} = 1\ \text{J}
$$
:::

### Ladung und Energie

Die in einem Zeitraum geflossene Ladung ist $Q = \int_{t_1}^{t_2} i(t)\,\mathrm{d}t$, die umgesetzte Energie $W = \int_{t_1}^{t_2} P(t)\,\mathrm{d}t$. Deshalb misst ein Stromzähler die Energie in Kilowattstunden – Leistung mal Zeit.
