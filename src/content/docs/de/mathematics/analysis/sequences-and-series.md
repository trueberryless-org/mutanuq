---
title: Folgen und Reihen
description: Explizite und rekursive Darstellung von Folgen, arithmetische und geometrische Folgen und Reihen, Summenformeln, unendliche geometrische Reihen und Zinseszinsrechnung.
sidebar:
  order: 1
---

## Folgen

Eine **Folge** ist eine geordnete Liste von Zahlen $\langle a_1, a_2, a_3, \ldots \rangle$. Mathematisch ist sie eine Funktion, die jeder natürlichen Zahl $n$ (dem Index) ein Glied $a_n$ zuordnet.

Eine Folge kann auf zwei Arten angegeben werden:

- explizit durch eine Formel für das $n$-te Glied: $a_n = 2n + 1$ ergibt $3, 5, 7, 9, \ldots$
- rekursiv durch den Anfangswert und eine Vorschrift, wie ein Glied aus dem vorherigen berechnet wird: $a_1 = 3$, $a_{n+1} = a_n + 2$

Rekursive Darstellungen entsprechen Schleifen in Programmen und eignen sich gut für Tabellenkalkulationen. Mit der expliziten Darstellung kann man ein beliebiges Glied direkt berechnen.

:::tip[Beispiel: Fibonacci-Folge]
$a_1 = 1$, $a_2 = 1$, $a_{n+2} = a_{n+1} + a_n$ ergibt $1, 1, 2, 3, 5, 8, 13, 21, \ldots$

Jedes Glied ist die Summe der beiden vorherigen.
:::

Eine Folge heißt **monoton steigend**, wenn $a_{n+1} \ge a_n$ für alle $n$ gilt, und beschränkt, wenn alle Glieder zwischen zwei festen Schranken liegen.

## Arithmetische Folgen

Bei einer **arithmetischen Folge** ist die Differenz zweier aufeinanderfolgender Glieder konstant:

$$
a_{n+1} - a_n = d \qquad a_n = a_1 + (n - 1) \cdot d
$$

Jedes Glied ist das arithmetische Mittel seiner Nachbarn. Arithmetische Folgen beschreiben **lineares Wachstum**.

:::tip[Beispiel]
Ein Sparschwein enthält 20 €, jede Woche kommen 5 € dazu: $a_n = 20 + (n - 1) \cdot 5$. In der 30. Woche sind es $a_{30} = 20 + 29 \cdot 5 = 165$ €.
:::

### Arithmetische Reihe

Die Summe der ersten $n$ Glieder einer Folge heißt **Reihe** (Partialsumme) $s_n$. Für arithmetische Folgen gilt:

$$
s_n = \frac{n}{2} \cdot (a_1 + a_n)
$$

:::note[Der kleine Gauß]
Der Legende nach sollte der junge Carl Friedrich Gauß die Zahlen von 1 bis 100 addieren. Er erkannte, dass $1 + 100 = 2 + 99 = \ldots = 101$ und es 50 solche Paare gibt: $s_{100} = 50 \cdot 101 = 5050$.
:::

## Geometrische Folgen

Bei einer **geometrischen Folge** ist der Quotient zweier aufeinanderfolgender Glieder konstant:

$$
\frac{a_{n+1}}{a_n} = q \qquad a_n = a_1 \cdot q^{n-1}
$$

Geometrische Folgen beschreiben **exponentielles Wachstum** ($q > 1$) oder exponentielle Abnahme ($0 < q < 1$). Ist $q < 0$, wechseln die Vorzeichen ab (alternierende Folge).

:::tip[Beispiel]
Ein Ball springt nach jedem Aufprall auf 80 % seiner vorherigen Höhe. Aus 2 m Höhe fallen gelassen, erreicht er nach dem 5. Aufprall noch $2 \cdot 0{,}8^5 \approx 0{,}66$ m.
:::

### Geometrische Reihe

$$
s_n = a_1 \cdot \frac{q^n - 1}{q - 1} \qquad (q \ne 1)
$$

:::tip[Beispiel: Schachbrett]
Legt man auf das erste Feld eines Schachbretts ein Reiskorn, auf das zweite zwei, auf das dritte vier usw., liegen insgesamt

$$
s_{64} = 1 \cdot \frac{2^{64} - 1}{2 - 1} = 2^{64} - 1 \approx 1{,}8 \cdot 10^{19}
$$

Reiskörner auf dem Brett, weit mehr als die gesamte Welternte. Übrigens ist $2^{64} - 1$ auch die größte Zahl, die sich in einer 64-Bit-Variable ohne Vorzeichen speichern lässt.
:::

## Grenzwert einer Folge

Nähern sich die Glieder einer Folge für $n \to \infty$ beliebig nahe einer Zahl $a$ an, heißt $a$ **Grenzwert** (Limes) der Folge, und die Folge heißt konvergent:

$$
\lim_{n \to \infty} a_n = a
$$

Andernfalls heißt die Folge **divergent**. Eine Folge mit dem Grenzwert $0$ heißt Nullfolge.

:::tip[Beispiele]
- $a_n = \frac{1}{n}$: $\;1, \frac{1}{2}, \frac{1}{3}, \ldots \to 0$ (Nullfolge)
- $a_n = \frac{2n + 1}{n} = 2 + \frac{1}{n} \to 2$
- $a_n = 0{,}5^n \to 0$, aber $a_n = 2^n$ ist divergent.
- $a_n = (-1)^n$ springt zwischen $-1$ und $1$ und ist divergent.
- $a_n = \left(1 + \frac{1}{n}\right)^n \to e \approx 2{,}71828$
:::

Für geometrische Folgen gilt: $q^n \to 0$ genau dann, wenn $\lvert q \rvert < 1$. Mehr zu Grenzwerten findest du bei [Grenzwert und Stetigkeit](/de/mathematics/analysis/limits-and-continuity/).

### Unendliche geometrische Reihe

Ist $\lvert q \rvert < 1$, konvergiert auch die geometrische Reihe, weil $q^n \to 0$:

$$
s = \lim_{n \to \infty} s_n = \frac{a_1}{1 - q}
$$

:::tip[Beispiel]
Der springende Ball aus 2 m Höhe legt insgesamt folgenden Weg zurück: 2 m nach unten, dann jeweils auf und ab.

$$
s = 2 + 2 \cdot \frac{1{,}6}{1 - 0{,}8} = 2 + 2 \cdot 8 = 18\ \text{m}
$$

Auch periodische Dezimalzahlen sind unendliche geometrische Reihen: $0{,}\overline{3} = 0{,}3 + 0{,}03 + \ldots = \frac{0{,}3}{1 - 0{,}1} = \frac{1}{3}$.
:::

## Zinseszinsrechnung

Werden Zinsen am Ende jeder Periode dem Kapital zugeschlagen und im nächsten Jahr mitverzinst, wächst das Kapital geometrisch. Mit dem Anfangskapital $K_0$ und dem Zinssatz $i = \frac{p}{100}$ gilt nach $n$ Jahren:

$$
K_n = K_0 \cdot (1 + i)^n
$$

Der Faktor $q = 1 + i$ heißt **Aufzinsungsfaktor**. Umgekehrt ist der Barwert eines Betrags $K_n$, der in $n$ Jahren fällig ist, $K_0 = \frac{K_n}{(1 + i)^n}$ (Abzinsen).

:::tip[Beispiel]
5000 € werden 8 Jahre lang mit 3 % p. a. verzinst:

$$
K_8 = 5000 \cdot 1{,}03^8 \approx 6333{,}85\ \text{€}
$$

Wie lange dauert es, bis sich das Kapital verdoppelt?

$$
1{,}03^n = 2 \;\Rightarrow\; n = \frac{\ln 2}{\ln 1{,}03} \approx 23{,}4\ \text{Jahre}
$$
:::

:::note
In Österreich wird von Zinserträgen **Kapitalertragsteuer** (KESt) von derzeit 25 % einbehalten. Der effektive Zinssatz ist also niedriger als der vereinbarte.
:::

### Unterjährige Verzinsung

Wird $m$-mal pro Jahr verzinst (z. B. monatlich, $m = 12$), verwendet man den **konformen** (äquivalenten) Zinssatz $i_m$, bei dem nach einem Jahr dasselbe Kapital entsteht wie beim Jahreszinssatz $i$:

$$
(1 + i_m)^m = 1 + i \qquad\Rightarrow\qquad i_m = \sqrt[m]{1 + i} - 1
$$

### Rentenrechnung

Werden regelmäßig gleich hohe Beträge $R$ eingezahlt (**Rente**), ist der Endwert nach $n$ Einzahlungen am Ende jeder Periode eine geometrische Reihe:

$$
E = R \cdot \frac{q^n - 1}{q - 1}
$$

:::tip[Beispiel]
Jemand zahlt 10 Jahre lang am Ende jedes Jahres 1200 € auf ein Sparkonto mit 2,5 % ein:

$$
E = 1200 \cdot \frac{1{,}025^{10} - 1}{0{,}025} \approx 13\,444{,}06\ \text{€}
$$

Eingezahlt wurden 12 000 €, der Rest sind Zinsen.
:::
