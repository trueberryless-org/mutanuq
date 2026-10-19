---
title: Beurteilende Statistik
description: "Stichprobe und Grundgesamtheit, Schätzen von Parametern, Konfidenzintervalle für Mittelwert und Anteil, Hypothesentests, Fehler 1. und 2. Art, Signifikanzniveau, p-Wert und Binomialtest."
sidebar:
  order: 5
---

Die **beurteilende Statistik** (schließende Statistik, Inferenzstatistik) schließt von einer Stichprobe auf die Grundgesamtheit. Weil eine Stichprobe nie alle Informationen enthält, sind diese Schlüsse unsicher; die Wahrscheinlichkeitsrechnung macht diese Unsicherheit messbar. Typische Fragen: Wie lange hält ein Akku im Mittel? Wie groß ist der Anteil fehlerhafter Teile in einer Lieferung? Ist ein neuer Algorithmus wirklich schneller oder war das Zufall?

## Stichprobe und Grundgesamtheit

Die **Grundgesamtheit** ist die Menge aller Objekte, über die eine Aussage getroffen werden soll, die **Stichprobe** die tatsächlich untersuchte Teilmenge mit Umfang $n$. Damit Schlüsse zulässig sind, muss die Stichprobe **zufällig** gezogen werden (jedes Element hat dieselbe Chance) und darf nicht verzerrt sein. Eine Online-Umfrage auf einer Gaming-Website ist zum Beispiel keine Zufallsstichprobe aller Jugendlichen.

| Kennzahl | Grundgesamtheit (Parameter, meist unbekannt) | Stichprobe (Schätzwert) |
| -------- | -------------------------------------------- | ----------------------- |
| Mittelwert | $\mu$ | $\bar{x}$ |
| Standardabweichung | $\sigma$ | $s$ (mit $n - 1$ im Nenner) |
| Anteil | $p$ | $\hat{p} = \frac{k}{n}$ ($k$ Treffer) |

## Punktschätzung

Eine **Punktschätzung** gibt für einen unbekannten Parameter einen einzelnen Schätzwert an:

$$
\hat{\mu} = \bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i \qquad \hat{\sigma} = s = \sqrt{\frac{1}{n - 1} \sum_{i=1}^{n} (x_i - \bar{x})^2} \qquad \hat{p} = \frac{k}{n}
$$

Der Nenner $n - 1$ bei $s$ sorgt dafür, dass die Varianz im Mittel nicht unterschätzt wird (**erwartungstreue** Schätzung). Ein einzelner Schätzwert sagt aber nichts darüber, wie genau er ist. Dafür gibt es Konfidenzintervalle.

Wichtig für die Genauigkeit: Der Stichprobenmittelwert $\bar{X}$ streut weniger als die Einzelwerte. Seine Standardabweichung (der **Standardfehler**) ist

$$
\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}
$$

Für die doppelte Genauigkeit braucht man also die vierfache Stichprobe.

## Konfidenzintervalle

Ein **Konfidenzintervall** (Vertrauensbereich) zum Konfidenzniveau $\gamma$ (z. B. 95 %) ist ein Intervall, das mit einem Verfahren berechnet wird, das in $\gamma$ aller Stichproben den wahren Parameter einschließt. Das Niveau $\gamma = 1 - \alpha$ legt den Faktor $z$ fest:

| Konfidenzniveau $\gamma$ | 90 % | 95 % | 99 % |
| ------------------------ | ---- | ---- | ---- |
| $z$ mit $\Phi(z) = 1 - \frac{\alpha}{2}$ | $1{,}645$ | $1{,}960$ | $2{,}576$ |

Ein höheres Konfidenzniveau ergibt ein **breiteres** Intervall: Mehr Sicherheit kostet Genauigkeit.

### Mittelwert bei bekannter Standardabweichung

$$
\left[\bar{x} - z \cdot \frac{\sigma}{\sqrt{n}};\ \bar{x} + z \cdot \frac{\sigma}{\sqrt{n}}\right]
$$

:::tip[Beispiel]
Von einer Widerstandsserie mit bekannter Standardabweichung $\sigma = 2\ \Omega$ werden $n = 25$ Stück gemessen, der Mittelwert ist $\bar{x} = 100{,}4\ \Omega$. 95-%-Konfidenzintervall:

$$
100{,}4 \pm 1{,}96 \cdot \frac{2}{\sqrt{25}} = 100{,}4 \pm 0{,}784 \;\Rightarrow\; [99{,}616\ \Omega;\ 101{,}184\ \Omega]
$$
:::

**Notwendiger Stichprobenumfang:** Soll die halbe Intervallbreite höchstens $E$ betragen, braucht man

$$
n \geq \left(\frac{z \cdot \sigma}{E}\right)^2
$$

Für $E = 0{,}5\ \Omega$ im Beispiel: $n \geq \left(\frac{1{,}96 \cdot 2}{0{,}5}\right)^2 \approx 61{,}5$, also mindestens 62 Messungen.

### Mittelwert bei unbekannter Standardabweichung

Meist ist $\sigma$ unbekannt und wird durch $s$ geschätzt. Dann verwendet man statt $z$ das Quantil der **t-Verteilung** (Student-Verteilung) mit $f = n - 1$ Freiheitsgraden. Sie ist breiter als die Normalverteilung, weil die Schätzung von $\sigma$ zusätzliche Unsicherheit bringt; für große $n$ nähert sie sich der Normalverteilung.

$$
\left[\bar{x} - t_{f;\,1-\frac{\alpha}{2}} \cdot \frac{s}{\sqrt{n}};\ \bar{x} + t_{f;\,1-\frac{\alpha}{2}} \cdot \frac{s}{\sqrt{n}}\right]
$$

:::tip[Beispiel]
Die Akkulaufzeit von $n = 10$ Geräten ergibt $\bar{x} = 50{,}3\ \text{h}$ und $s = 1{,}2\ \text{h}$. Mit $t_{9;\,0{,}975} \approx 2{,}262$:

$$
50{,}3 \pm 2{,}262 \cdot \frac{1{,}2}{\sqrt{10}} = 50{,}3 \pm 0{,}858 \;\Rightarrow\; [49{,}44\ \text{h};\ 51{,}16\ \text{h}]
$$
:::

### Anteil

Für einen unbekannten Anteil $p$ verwendet man die [Normalverteilungsnäherung](/de/mathematics/stochastics/normal-distribution/#näherung-der-binomialverteilung) mit dem geschätzten Anteil $\hat{p}$ (Voraussetzung etwa $n \hat{p} (1 - \hat{p}) > 9$):

$$
\left[\hat{p} - z \cdot \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}};\ \hat{p} + z \cdot \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}}\right]
$$

:::tip[Beispiel: Umfrage]
Von 400 zufällig befragten Studierenden verwenden 120 Linux als Hauptbetriebssystem, $\hat{p} = 0{,}3$. 95-%-Konfidenzintervall:

$$
0{,}3 \pm 1{,}96 \cdot \sqrt{\frac{0{,}3 \cdot 0{,}7}{400}} = 0{,}3 \pm 0{,}045 \;\Rightarrow\; [0{,}255;\ 0{,}345]
$$

Der Anteil in der Grundgesamtheit liegt mit 95 % Sicherheit zwischen etwa 25,5 % und 34,5 %. Bei Wahlumfragen mit $n = 1000$ beträgt die Schwankungsbreite deshalb rund $\pm 3$ Prozentpunkte.
:::

:::caution
Ein 95-%-Konfidenzintervall bedeutet **nicht**, dass der wahre Wert mit 95 % Wahrscheinlichkeit in genau diesem berechneten Intervall liegt; der wahre Wert ist fest, das Intervall zufällig. Korrekt: Von vielen so berechneten Intervallen enthalten etwa 95 % den wahren Wert.
:::

## Hypothesentests

Ein **Hypothesentest** prüft anhand einer Stichprobe, ob eine Behauptung über die Grundgesamtheit verworfen werden muss.

### Ablauf

1. **Nullhypothese** $H_0$ aufstellen: die Annahme, die widerlegt werden soll, meist „kein Unterschied“ oder „Behauptung stimmt“, z. B. $H_0\colon p = 0{,}05$.
2. **Alternativhypothese** $H_1$ festlegen, die man nachweisen will. Daraus folgt die Art des Tests:
   - **rechtsseitig:** $H_1\colon p > p_0$ (z. B. „mehr Ausschuss als behauptet“)
   - **linksseitig:** $H_1\colon p < p_0$
   - **zweiseitig:** $H_1\colon p \neq p_0$ (Abweichung in beide Richtungen)
3. **Signifikanzniveau** $\alpha$ wählen, meist 5 % oder 1 %, und zwar **vor** der Datenerhebung.
4. **Ablehnungsbereich** (kritischen Bereich) bestimmen oder den **p-Wert** berechnen.
5. **Entscheiden:** Liegt das Ergebnis im Ablehnungsbereich bzw. ist $p \leq \alpha$, wird $H_0$ verworfen. Das Ergebnis heißt dann **signifikant**.

### Fehler 1. und 2. Art

Weil die Entscheidung auf einer Stichprobe beruht, kann sie falsch sein:

| | $H_0$ ist wahr | $H_0$ ist falsch |
| --- | --- | --- |
| $H_0$ wird verworfen | **Fehler 1. Art** (Wahrscheinlichkeit höchstens $\alpha$) | richtige Entscheidung |
| $H_0$ wird nicht verworfen | richtige Entscheidung | **Fehler 2. Art** (Wahrscheinlichkeit $\beta$) |

Das Signifikanzniveau $\alpha$ begrenzt den Fehler 1. Art. Wird $\alpha$ kleiner gewählt, wird der Fehler 2. Art größer. Beide gleichzeitig verringern kann man nur mit einer größeren Stichprobe. Die Wahrscheinlichkeit $1 - \beta$, eine falsche Nullhypothese tatsächlich zu verwerfen, heißt **Güte** (Teststärke, Power).

:::note
„$H_0$ wird nicht verworfen“ ist **kein Beweis** dafür, dass $H_0$ stimmt. Die Daten reichen nur nicht aus, um sie zu widerlegen. Deshalb formuliert man die Behauptung, die man belegen will, als $H_1$.
:::

### p-Wert

Der **p-Wert** ist die Wahrscheinlichkeit, unter der Annahme, dass $H_0$ stimmt, ein Ergebnis zu erhalten, das mindestens so extrem ist wie das beobachtete (in Richtung von $H_1$). Ein kleiner p-Wert bedeutet: Das Ergebnis wäre unter $H_0$ sehr ungewöhnlich. Entscheidungsregel: **$p \leq \alpha \Rightarrow H_0$ verwerfen.** Bei zweiseitigen Tests verdoppelt man die einseitige Wahrscheinlichkeit.

### Binomialtest

:::tip[Beispiel: Rechtsseitiger Binomialtest]
Ein Lieferant garantiert höchstens 5 % fehlerhafte Platinen. In einer Stichprobe von $n = 100$ Platinen sind 9 fehlerhaft. Ist das bei $\alpha = 5\,\%$ ein signifikanter Hinweis auf eine höhere Fehlerquote?

- $H_0\colon p = 0{,}05$ (Garantie stimmt), $\;H_1\colon p > 0{,}05$ (rechtsseitig)
- Unter $H_0$ ist die Anzahl fehlerhafter Platinen $X \sim B(100; 0{,}05)$ mit $\mu = 5$.

**p-Wert:**

$$
P(X \geq 9) = 1 - P(X \leq 8) \approx 0{,}0631 > 0{,}05
$$

$H_0$ wird **nicht verworfen**. 9 Fehler sind zwar mehr als erwartet, aber unter $H_0$ in gut 6 % der Fälle noch durch Zufall erklärbar.

**Ablehnungsbereich:** Gesucht ist das kleinste $k$ mit $P(X \geq k) \leq 0{,}05$:

| $k$ | $8$ | $9$ | $10$ | $11$ |
| --- | --- | --- | ---- | ---- |
| $P(X \geq k)$ | $0{,}1280$ | $0{,}0631$ | $0{,}0282$ | $0{,}0115$ |

Der Ablehnungsbereich ist $\{10, 11, \ldots, 100\}$. Die tatsächliche Wahrscheinlichkeit für einen Fehler 1. Art ist $0{,}0282$; sie liegt wegen der diskreten Verteilung unter $\alpha$.

**Fehler 2. Art:** Angenommen, die wahre Fehlerquote ist $p = 0{,}10$. Dann wird $H_0$ fälschlich beibehalten, wenn $X \leq 9$:

$$
\beta = P(X \leq 9 \mid p = 0{,}10) \approx 0{,}451
$$

Selbst eine doppelt so hohe Fehlerquote bleibt mit 100 Platinen also in 45 % der Fälle unentdeckt. Eine größere Stichprobe würde $\beta$ verringern.
:::

:::tip[Beispiel: Zweiseitiger Test]
Eine Münze zeigt bei 100 Würfen 60-mal Kopf. Ist sie bei $\alpha = 5\,\%$ unfair? $H_0\colon p = 0{,}5$, $H_1\colon p \neq 0{,}5$, $X \sim B(100; 0{,}5)$.

$$
P(X \geq 60) \approx 0{,}0284 \qquad p\text{-Wert} = 2 \cdot 0{,}0284 = 0{,}0569 > 0{,}05
$$

$H_0$ wird nicht verworfen. Ein einseitiger Test ($H_1\colon p > 0{,}5$) hätte bei gleichem Ergebnis verworfen. Die Art des Tests muss deshalb vor dem Blick auf die Daten feststehen.
:::

### Test für einen Mittelwert

Bei bekannter Standardabweichung vergleicht man die standardisierte Abweichung des Stichprobenmittels mit den $z$-Werten (**z-Test**); bei unbekanntem $\sigma$ verwendet man $s$ und die t-Verteilung (**t-Test**):

$$
z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}
$$

:::tip[Beispiel]
Eine Abfüllanlage soll im Mittel $\mu_0 = 500\ \text{g}$ abfüllen, $\sigma = 4\ \text{g}$. Eine Stichprobe von 16 Packungen ergibt $\bar{x} = 498\ \text{g}$. Zweiseitig bei $\alpha = 5\,\%$:

$$
z = \frac{498 - 500}{4 / \sqrt{16}} = -2 \qquad \lvert z \rvert = 2 > 1{,}96
$$

$H_0$ wird verworfen, die Anlage ist neu einzustellen. Der p-Wert ist $2 \cdot \Phi(-2) \approx 0{,}0455$.
:::

## Weiterführende Quellen

- [NIST/SEMATECH e-Handbook of Statistical Methods: Hypothesis Testing](https://www.itl.nist.gov/div898/handbook/prc/section1/prc13.htm)
- [Ronald L. Wasserstein, Nicole A. Lazar: The ASA Statement on p-Values (The American Statistician, 2016)](https://doi.org/10.1080/00031305.2016.1154108)
