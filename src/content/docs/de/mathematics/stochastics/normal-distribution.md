---
title: Normalverteilung
description: "Dichte und Verteilungsfunktion der Normalverteilung, Standardisierung, Tabelle der Standardnormalverteilung, Sigma-Regeln, Näherung der Binomialverteilung sowie Gleich- und Exponentialverteilung."
sidebar:
  order: 4
---

Die **Normalverteilung** (Gauß-Verteilung) ist die wichtigste stetige Verteilung. Messwerte, Fertigungsmaße, Rauschen in elektronischen Schaltungen und viele natürliche Größen sind annähernd normalverteilt. Der Grund ist der **zentrale Grenzwertsatz**: Eine Summe vieler kleiner, unabhängiger Zufallseinflüsse ist näherungsweise normalverteilt, egal wie die einzelnen Einflüsse verteilt sind.

## Dichtefunktion

Eine normalverteilte Zufallsvariable $X \sim N(\mu; \sigma^2)$ hat die Dichtefunktion

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} \cdot e^{-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2}
$$

Ihr Graph ist die **Gaußsche Glockenkurve**:

- symmetrisch zum Erwartungswert $\mu$, dort liegt das Maximum,
- Wendepunkte bei $\mu - \sigma$ und $\mu + \sigma$,
- die $x$-Achse ist Asymptote, die Gesamtfläche ist $1$.

Ein größeres $\mu$ verschiebt die Kurve nach rechts. Ein größeres $\sigma$ macht sie breiter und flacher, weil die Fläche gleich bleiben muss.

:::caution
Manche Bücher und Taschenrechner schreiben $N(\mu; \sigma)$ mit der Standardabweichung statt der Varianz. Achte bei Aufgaben und Rechnereingaben darauf, welcher Parameter gemeint ist.
:::

Wahrscheinlichkeiten sind Flächen unter der Glockenkurve. Die Verteilungsfunktion $F(x) = P(X \leq x)$ lässt sich nicht mit elementaren Funktionen angeben; man verwendet Technologie (z. B. GeoGebra `Normal(μ, σ, x)`, Taschenrechner `normalcdf`) oder die Tabelle der Standardnormalverteilung.

## Standardnormalverteilung

Die Normalverteilung mit $\mu = 0$ und $\sigma = 1$ heißt **Standardnormalverteilung**. Ihre Verteilungsfunktion wird mit $\Phi$ bezeichnet. Jede Normalverteilung lässt sich durch **Standardisieren** darauf zurückführen:

$$
z = \frac{x - \mu}{\sigma} \qquad P(X \leq x) = \Phi(z) = \Phi\left(\frac{x - \mu}{\sigma}\right)
$$

Der $z$-Wert gibt an, um wie viele Standardabweichungen $x$ vom Erwartungswert entfernt ist.

### Tabelle (Auszug)

| $z$ | $0$ | $0{,}5$ | $1$ | $1{,}5$ | $1{,}645$ | $1{,}96$ | $2$ | $2{,}576$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\Phi(z)$ | $0{,}5000$ | $0{,}6915$ | $0{,}8413$ | $0{,}9332$ | $0{,}9500$ | $0{,}9750$ | $0{,}9772$ | $0{,}9950$ | $0{,}9987$ |

Tabellen enthalten nur positive $z$-Werte. Wegen der Symmetrie gilt

$$
\Phi(-z) = 1 - \Phi(z)
$$

### Rechenregeln

| gesucht | Berechnung |
| ------- | ---------- |
| $P(X \leq b)$ | $\Phi\left(\frac{b - \mu}{\sigma}\right)$ |
| $P(X \geq a)$ | $1 - \Phi\left(\frac{a - \mu}{\sigma}\right)$ |
| $P(a \leq X \leq b)$ | $\Phi\left(\frac{b - \mu}{\sigma}\right) - \Phi\left(\frac{a - \mu}{\sigma}\right)$ |
| $P(\mu - c \leq X \leq \mu + c)$ | $2\,\Phi\left(\frac{c}{\sigma}\right) - 1$ |

Bei stetigen Verteilungen ist $P(X = a) = 0$, deshalb macht $<$ oder $\leq$ keinen Unterschied.

:::tip[Beispiel: Widerstände]
Der Widerstandswert $X$ einer Serie ist normalverteilt mit $\mu = 100\ \Omega$ und $\sigma = 2\ \Omega$.

Höchstens $103\ \Omega$:

$$
P(X \leq 103) = \Phi\left(\frac{103 - 100}{2}\right) = \Phi(1{,}5) \approx 0{,}9332
$$

Zwischen $97\ \Omega$ und $103\ \Omega$:

$$
P(97 \leq X \leq 103) = \Phi(1{,}5) - \Phi(-1{,}5) = 2 \cdot 0{,}9332 - 1 = 0{,}8664
$$

Mehr als $104\ \Omega$:

$$
P(X > 104) = 1 - \Phi(2) \approx 1 - 0{,}9772 = 0{,}0228
$$
:::

### Umkehraufgaben

Ist die Wahrscheinlichkeit gegeben und der Wert gesucht, liest man $z$ aus der Tabelle ab (bzw. mit der inversen Normalverteilung, GeoGebra `InversNormal`) und rechnet zurück:

$$
x = \mu + z \cdot \sigma
$$

:::tip[Beispiel]
In welchem symmetrischen Bereich um $\mu$ liegen 95 % der Widerstände? Aus $2\,\Phi(z) - 1 = 0{,}95$ folgt $\Phi(z) = 0{,}975$, also $z = 1{,}96$:

$$
100 \pm 1{,}96 \cdot 2 \;\Rightarrow\; [96{,}08\ \Omega;\ 103{,}92\ \Omega]
$$

Welcher Wert wird nur von 10 % der Widerstände überschritten? $\Phi(z) = 0{,}9$ ergibt $z \approx 1{,}2816$ und $x = 100 + 1{,}2816 \cdot 2 \approx 102{,}56\ \Omega$.
:::

## Sigma-Regeln

Unabhängig von $\mu$ und $\sigma$ liegen bei einer Normalverteilung immer dieselben Anteile in den Bereichen um den Erwartungswert:

| Bereich | Wahrscheinlichkeit |
| ------- | ------------------ |
| $\mu \pm 1\sigma$ | $\approx 68{,}3\,\%$ |
| $\mu \pm 2\sigma$ | $\approx 95{,}4\,\%$ |
| $\mu \pm 3\sigma$ | $\approx 99{,}7\,\%$ |
| $\mu \pm 1{,}645\sigma$ | $90\,\%$ |
| $\mu \pm 1{,}96\sigma$ | $95\,\%$ |
| $\mu \pm 2{,}576\sigma$ | $99\,\%$ |

Werte außerhalb von $\mu \pm 3\sigma$ sind sehr selten (etwa 3 von 1000). In der Qualitätssicherung (z. B. Six Sigma) legt man Toleranzgrenzen deshalb so, dass sie viele Standardabweichungen vom Mittelwert entfernt sind.

## Näherung der Binomialverteilung

Für große $n$ ist eine binomialverteilte Zufallsvariable $X \sim B(n; p)$ annähernd normalverteilt mit

$$
\mu = n p \qquad \sigma = \sqrt{n p (1 - p)}
$$

Als Faustregel gilt die Näherung als ausreichend gut, wenn $\sigma^2 = n p (1 - p) > 9$ ist.

### Stetigkeitskorrektur

Die Binomialverteilung ist diskret, die Normalverteilung stetig. Im Stabdiagramm steht jeder Wert $k$ für einen Balken von $k - 0{,}5$ bis $k + 0{,}5$. Deshalb verschiebt man die Grenzen um $0{,}5$ (**Stetigkeitskorrektur**):

$$
P(X \leq k) \approx \Phi\left(\frac{k + 0{,}5 - \mu}{\sigma}\right) \qquad P(a \leq X \leq b) \approx \Phi\left(\frac{b + 0{,}5 - \mu}{\sigma}\right) - \Phi\left(\frac{a - 0{,}5 - \mu}{\sigma}\right)
$$

:::tip[Beispiel]
10 % der Kundinnen und Kunden eines Onlineshops reklamieren. Wie wahrscheinlich sind bei 200 Bestellungen höchstens 25 Reklamationen?

$$
\mu = 200 \cdot 0{,}1 = 20 \qquad \sigma = \sqrt{200 \cdot 0{,}1 \cdot 0{,}9} = \sqrt{18} \approx 4{,}243 \qquad \sigma^2 = 18 > 9
$$

$$
P(X \leq 25) \approx \Phi\left(\frac{25{,}5 - 20}{4{,}243}\right) = \Phi(1{,}296) \approx 0{,}9026
$$

Der exakte Binomialwert ist $0{,}8995$. Ohne Stetigkeitskorrektur erhielte man $\Phi(1{,}179) \approx 0{,}8807$, also eine deutlich schlechtere Näherung.
:::

:::note
Mit moderner Technologie kann man Binomialwahrscheinlichkeiten auch für große $n$ direkt berechnen. Die Näherung ist trotzdem wichtig, weil Konfidenzintervalle und Tests für Anteile in der [beurteilenden Statistik](/de/mathematics/stochastics/inferential-statistics/) darauf beruhen.
:::

## Weitere stetige Verteilungen

### Stetige Gleichverteilung

Ist jeder Wert in einem Intervall $[a; b]$ gleich wahrscheinlich, ist die Dichte dort konstant (Rechteck mit Fläche $1$):

$$
f(x) = \frac{1}{b - a} \quad (a \leq x \leq b) \qquad E(X) = \frac{a + b}{2} \qquad \sigma = \frac{b - a}{\sqrt{12}}
$$

Wahrscheinlichkeiten sind Rechtecksflächen: $P(c \leq X \leq d) = \frac{d - c}{b - a}$ für $a \leq c \leq d \leq b$.

:::tip[Beispiel]
Eine U-Bahn fährt alle 10 Minuten, man kommt zu einem zufälligen Zeitpunkt zur Station. Die Wartezeit ist gleichverteilt auf $[0; 10]$ min. Höchstens 3 Minuten warten: $P(X \leq 3) = \frac{3}{10} = 0{,}3$. Im Mittel wartet man $5$ min, $\sigma = \frac{10}{\sqrt{12}} \approx 2{,}89$ min.
:::

Zufallszahlengeneratoren in Programmiersprachen (`Random.NextDouble()` in C#, `rand::random::<f64>()` in Rust) liefern gleichverteilte Werte auf $[0; 1[$.

### Exponentialverteilung

Die **Exponentialverteilung** beschreibt Wartezeiten bis zum nächsten Ereignis, wenn die Ereignisse mit konstanter Rate $\lambda$ auftreten (also [Poisson-verteilt](/de/mathematics/stochastics/binomial-and-poisson-distribution/#poisson-verteilung) sind), und die Lebensdauer von Bauteilen ohne Alterung:

$$
f(t) = \lambda e^{-\lambda t} \qquad F(t) = P(T \leq t) = 1 - e^{-\lambda t} \qquad (t \geq 0) \qquad E(T) = \sigma = \frac{1}{\lambda}
$$

:::tip[Beispiel: Lebensdauer]
Ein elektronisches Bauteil hat eine mittlere Lebensdauer von 5 Jahren, also $\lambda = 0{,}2$ pro Jahr.

$$
P(T \leq 2) = 1 - e^{-0{,}4} \approx 0{,}330 \qquad P(T > 5) = e^{-1} \approx 0{,}368
$$

Nur etwa 37 % der Bauteile erreichen die mittlere Lebensdauer, weil die Verteilung stark rechtsschief ist.
:::

Die Exponentialverteilung ist **gedächtnislos**: Die Wahrscheinlichkeit, noch mindestens $t$ weitere Jahre zu funktionieren, hängt nicht davon ab, wie lange das Bauteil schon läuft. Das passt zu zufälligen Ausfällen in der mittleren Phase der „Badewannenkurve“, nicht aber zu Verschleiß.

## Weiterführende Quellen

- [NIST/SEMATECH e-Handbook of Statistical Methods: Normal Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm)
- [Formelsammlung für die SRDP Angewandte Mathematik (matura.gv.at)](https://www.matura.gv.at/)
