---
title: Funktionen mehrerer Variablen
description: "Funktionen in zwei Variablen als Flächen, Höhenlinien, partielle Ableitungen, totales Differential, lineare Fehlerfortpflanzung, Größtfehler und Extremwerte."
sidebar:
  order: 8
---

In der Technik hängt eine Größe fast immer von mehreren anderen ab: Die Leistung $P = U \cdot I$ von Spannung und Stromstärke, das Volumen eines Zylinders $V = \pi r^2 h$ von Radius und Höhe, die Übertragungszeit von Datenmenge und Bandbreite. Solche Zusammenhänge beschreibt man mit **Funktionen mehrerer Variablen**. Die wichtigste Anwendung an der HTL ist die Abschätzung, wie sich Messfehler der Eingangsgrößen auf das Ergebnis auswirken.

## Darstellung

Eine Funktion in zwei Variablen ordnet jedem Zahlenpaar $(x, y)$ aus der Definitionsmenge genau einen Wert $z = f(x, y)$ zu. Die Punkte $(x \mid y \mid f(x, y))$ bilden eine **Fläche** im Raum.

:::tip[Beispiel]
- $f(x, y) = 2x + 3y - 6$: eine Ebene.
- $f(x, y) = x^2 + y^2$: ein nach oben offenes Rotationsparaboloid („Schüssel“) mit Tiefpunkt im Ursprung.
- $P(U, I) = U \cdot I$: eine Sattelfläche.
:::

Weil räumliche Darstellungen auf Papier schwer abzulesen sind, verwendet man **Höhenlinien** (Niveaulinien): Man verbindet alle Punkte $(x, y)$ mit demselben Funktionswert $f(x, y) = c$. So entstehen Landkarten mit Höhenschichtlinien, Wetterkarten mit Isobaren oder Kennlinienfelder. Die Höhenlinien von $x^2 + y^2$ sind konzentrische Kreise.

Hält man eine Variable fest, erhält man eine gewöhnliche Funktion der anderen Variablen, also einen **Schnitt** durch die Fläche. Kennlinienfelder in Datenblättern (z. B. Transistorkennlinien $I_C(U_{CE})$ für verschiedene Basisströme) sind genau solche Schnitte.

## Partielle Ableitungen

Bei der **partiellen Ableitung** nach $x$ wird $y$ wie eine Konstante behandelt und nur nach $x$ [differenziert](/de/mathematics/analysis/differential-calculus/). Sie gibt die Steigung der Fläche in $x$-Richtung an:

$$
f_x = \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x + h, y) - f(x, y)}{h} \qquad f_y = \frac{\partial f}{\partial y} = \lim_{h \to 0} \frac{f(x, y + h) - f(x, y)}{h}
$$

Das Zeichen $\partial$ („del“, rundes d) kennzeichnet partielle Ableitungen. Alle Ableitungsregeln gelten unverändert.

:::tip[Beispiel]
$f(x, y) = x^2 y + 3 x y^3$

$$
f_x = 2xy + 3y^3 \qquad f_y = x^2 + 9xy^2
$$

Ableitungen zweiter Ordnung:

$$
f_{xx} = 2y \qquad f_{yy} = 18xy \qquad f_{xy} = f_{yx} = 2x + 9y^2
$$
:::

Die gemischten Ableitungen $f_{xy}$ und $f_{yx}$ sind bei den in der Praxis vorkommenden Funktionen gleich (**Satz von Schwarz**), die Reihenfolge des Ableitens spielt also keine Rolle.

:::tip[Beispiel: Ideales Gas]
Für den Druck eines idealen Gases gilt $p(V, T) = \frac{nRT}{V}$.

$$
\frac{\partial p}{\partial T} = \frac{nR}{V} \qquad \frac{\partial p}{\partial V} = -\frac{nRT}{V^2}
$$

Die erste Ableitung beschreibt, wie stark der Druck bei Erwärmung und konstantem Volumen steigt, die zweite, wie stark er bei Ausdehnung und konstanter Temperatur sinkt.
:::

Die partiellen Ableitungen bilden zusammen den **Gradienten** $\operatorname{grad} f = \begin{pmatrix} f_x \\ f_y \end{pmatrix}$. Er zeigt in die Richtung des steilsten Anstiegs und steht normal auf die Höhenlinien. Das Gradientenverfahren, mit dem neuronale Netze trainiert werden, geht schrittweise in Richtung des negativen Gradienten, um eine Fehlerfunktion zu minimieren.

## Totales Differential

Ändern sich $x$ und $y$ gleichzeitig um kleine Beträge $\mathrm{d}x$ und $\mathrm{d}y$, ändert sich $f$ näherungsweise um

$$
\mathrm{d}f = \frac{\partial f}{\partial x}\,\mathrm{d}x + \frac{\partial f}{\partial y}\,\mathrm{d}y
$$

Das ist das **totale Differential**. Geometrisch ersetzt man die Fläche in der Umgebung eines Punktes durch die **Tangentialebene**, so wie man bei einer Funktion einer Variablen die Kurve durch die Tangente ersetzt (Linearisierung). Für mehr Variablen kommen entsprechend weitere Summanden dazu.

## Fehlerfortpflanzung

Messwerte sind nie exakt. Sind die Eingangsgrößen mit absoluten Fehlern $\Delta x$, $\Delta y$ behaftet, schätzt man mit dem totalen Differential den Fehler des Ergebnisses ab.

### Linearer Größtfehler

Im ungünstigsten Fall wirken alle Fehler in dieselbe Richtung. Dann addiert man die Beträge:

$$
\Delta f_{\max} = \left\lvert \frac{\partial f}{\partial x} \right\rvert \Delta x + \left\lvert \frac{\partial f}{\partial y} \right\rvert \Delta y
$$

Der relative Größtfehler ist $\frac{\Delta f_{\max}}{\lvert f \rvert}$. Für Produkte und Quotienten ergibt sich daraus die bekannte Regel, dass sich die [relativen Fehler](/de/mathematics/algebra/calculating-with-quantities/#absoluter-und-relativer-fehler) addieren.

:::tip[Beispiel: Elektrische Leistung]
Gemessen werden $U = (230 \pm 2)\ \text{V}$ und $I = (5{,}0 \pm 0{,}1)\ \text{A}$. Mit $P = U \cdot I$ ist $P = 1150\ \text{W}$ und

$$
\frac{\partial P}{\partial U} = I = 5\ \text{A} \qquad \frac{\partial P}{\partial I} = U = 230\ \text{V}
$$

$$
\Delta P_{\max} = 5 \cdot 2 + 230 \cdot 0{,}1 = 10 + 23 = 33\ \text{W}
$$

Ergebnis: $P = (1150 \pm 33)\ \text{W}$, relativer Fehler $\frac{33}{1150} \approx 2{,}9\,\%$. Das entspricht der Summe der relativen Fehler $\frac{2}{230} + \frac{0{,}1}{5} \approx 0{,}9\,\% + 2\,\%$. Die Strommessung trägt am meisten bei; ein genaueres Amperemeter würde das Ergebnis am stärksten verbessern.
:::

:::tip[Beispiel: Zylindervolumen]
Ein Zylinder hat $r = (2{,}0 \pm 0{,}05)\ \text{cm}$ und $h = (10{,}0 \pm 0{,}1)\ \text{cm}$. Mit $V = \pi r^2 h \approx 125{,}66\ \text{cm}^3$:

$$
\Delta V_{\max} = \lvert 2\pi r h \rvert \cdot \Delta r + \lvert \pi r^2 \rvert \cdot \Delta h = 2\pi \cdot 2 \cdot 10 \cdot 0{,}05 + \pi \cdot 4 \cdot 0{,}1 \approx 6{,}28 + 1{,}26 = 7{,}54\ \text{cm}^3
$$

Der Radius geht quadratisch ein, deshalb wirkt sich sein relativer Fehler doppelt aus: $2 \cdot 2{,}5\,\% + 1\,\% = 6\,\%$.
:::

### Statistischer Fehler nach Gauß

Sind die Messfehler zufällig und voneinander unabhängig, heben sie sich teilweise auf. Realistischer als der Größtfehler ist dann der **mittlere Fehler** nach dem Gaußschen Fehlerfortpflanzungsgesetz:

$$
\Delta f = \sqrt{\left(\frac{\partial f}{\partial x}\,\Delta x\right)^2 + \left(\frac{\partial f}{\partial y}\,\Delta y\right)^2}
$$

Für die elektrische Leistung ergibt sich $\Delta P = \sqrt{10^2 + 23^2} \approx 25\ \text{W}$, also weniger als der Größtfehler von $33\ \text{W}$.

## Extremwerte

An einem Hoch- oder Tiefpunkt einer glatten Fläche ist die Tangentialebene waagrecht. **Notwendige Bedingung** ist deshalb, dass alle partiellen Ableitungen null sind:

$$
f_x(x_0, y_0) = 0 \qquad f_y(x_0, y_0) = 0
$$

Ob tatsächlich ein Extremum vorliegt, entscheidet die **hinreichende Bedingung** mit $D = f_{xx} f_{yy} - f_{xy}^2$ an dieser Stelle:

| Bedingung | Ergebnis |
| --------- | -------- |
| $D > 0$ und $f_{xx} > 0$ | lokales Minimum |
| $D > 0$ und $f_{xx} < 0$ | lokales Maximum |
| $D < 0$ | Sattelpunkt (kein Extremum) |
| $D = 0$ | keine Aussage möglich |

:::tip[Beispiel]
$f(x, y) = x^2 + y^2 - 2x + 4y$

$$
f_x = 2x - 2 = 0 \;\Rightarrow\; x = 1 \qquad f_y = 2y + 4 = 0 \;\Rightarrow\; y = -2
$$

Mit $f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$ ist $D = 4 > 0$ und $f_{xx} > 0$: Bei $(1 \mid -2)$ liegt ein Minimum mit $f(1, -2) = 1 + 4 - 2 - 8 = -5$.
:::

Nach diesem Prinzip werden auch die Formeln der [linearen Regression](/de/mathematics/stochastics/regression-and-correlation/#methode-der-kleinsten-quadrate) hergeleitet: Die Summe der Fehlerquadrate ist eine Funktion der beiden Parameter $k$ und $d$, deren Minimum gesucht wird.

## Weiterführende Quellen

- [Lothar Papula: Mathematik für Ingenieure und Naturwissenschaftler, Band 2 (Springer Vieweg)](https://link.springer.com/book/10.1007/978-3-658-07790-7)
- [Partial derivative, Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Partial_derivative)
