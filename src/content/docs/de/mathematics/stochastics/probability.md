---
title: Wahrscheinlichkeitsrechnung
description: "Zufallsexperimente, Laplace-Wahrscheinlichkeit, Axiome, Additions- und Multiplikationssatz, bedingte Wahrscheinlichkeit, Unabhängigkeit, Satz von Bayes, Baumdiagramme und Kombinatorik."
sidebar:
  order: 1
---

Die **Wahrscheinlichkeitsrechnung** ordnet zufälligen Ereignissen eine Zahl zwischen $0$ und $1$ zu, die angibt, wie sicher ihr Eintreten ist. Damit lässt sich zum Beispiel abschätzen, wie oft ein Datenpaket verloren geht, wie zuverlässig ein redundantes System ist oder wie aussagekräftig ein positiver Testbefund ist.

## Grundbegriffe

| Begriff | Bedeutung | Beispiel (Würfeln) |
| ------- | --------- | ------------------ |
| Zufallsexperiment | Vorgang mit mehreren möglichen Ausgängen, der beliebig oft wiederholt werden kann und dessen Ausgang nicht vorhersagbar ist | einmal würfeln |
| Ergebnis $\omega$ | ein einzelner möglicher Ausgang | „4“ |
| Ergebnisraum $\Omega$ | Menge aller Ergebnisse | $\Omega = \{1, 2, 3, 4, 5, 6\}$ |
| Ereignis $E$ | Teilmenge des Ergebnisraums | „gerade Zahl“: $E = \{2, 4, 6\}$ |
| Gegenereignis $\overline{E}$ | alle Ergebnisse, die nicht in $E$ liegen | $\overline{E} = \{1, 3, 5\}$ |
| sicheres Ereignis | $\Omega$ selbst, tritt immer ein | „Augenzahl zwischen 1 und 6“ |
| unmögliches Ereignis | $\emptyset$, tritt nie ein | „Augenzahl 7“ |

Ereignisse werden mit den [Mengenoperationen](/de/mathematics/algebra/sets-and-number-ranges/#mengenoperationen) verknüpft: $A \cup B$ („$A$ oder $B$“), $A \cap B$ („$A$ und $B$“). Zwei Ereignisse heißen **unvereinbar** (disjunkt), wenn sie nicht gleichzeitig eintreten können, also $A \cap B = \emptyset$.

## Wahrscheinlichkeitsbegriffe

### Laplace-Wahrscheinlichkeit

Sind alle Ergebnisse eines Zufallsexperiments **gleich wahrscheinlich** (Laplace-Experiment, z. B. fairer Würfel, Münze, Ziehen aus gut gemischten Karten), gilt:

$$
P(E) = \frac{\text{Anzahl der günstigen Ergebnisse}}{\text{Anzahl der möglichen Ergebnisse}} = \frac{\lvert E \rvert}{\lvert \Omega \rvert}
$$

:::tip[Beispiel]
Beim Würfeln mit zwei Würfeln gibt es $6 \cdot 6 = 36$ gleich wahrscheinliche Ergebnisse. Augensumme 10 erhält man mit $(4, 6)$, $(5, 5)$ und $(6, 4)$:

$$
P(\text{Summe } 10) = \frac{3}{36} = \frac{1}{12} \approx 8{,}3\,\%
$$
:::

### Relative Häufigkeit und statistische Wahrscheinlichkeit

Wiederholt man ein Zufallsexperiment sehr oft, stabilisiert sich die relative Häufigkeit eines Ereignisses um einen festen Wert (**Gesetz der großen Zahlen**). Diesen Wert verwendet man als Schätzung der Wahrscheinlichkeit, wenn die Ergebnisse nicht gleich wahrscheinlich sind, zum Beispiel für die Ausfallrate einer Festplatte.

### Axiome von Kolmogorow

Jede Wahrscheinlichkeit erfüllt drei Grundregeln:

1. $P(E) \geq 0$ für jedes Ereignis $E$.
2. $P(\Omega) = 1$.
3. Für unvereinbare Ereignisse gilt $P(A \cup B) = P(A) + P(B)$.

Daraus folgen alle weiteren Rechenregeln, insbesondere $0 \leq P(E) \leq 1$ und $P(\emptyset) = 0$.

## Rechenregeln

### Gegenereignis

$$
P(\overline{E}) = 1 - P(E)
$$

Die Regel ist besonders nützlich bei Fragen nach „mindestens einmal“: Das Gegenereignis „kein einziges Mal“ ist meist viel leichter zu berechnen.

:::tip[Beispiel: Geburtstagsproblem]
Wie groß ist die Wahrscheinlichkeit, dass in einer Klasse mit 23 Personen mindestens zwei am selben Tag Geburtstag haben (365 gleich wahrscheinliche Tage)? Gegenereignis: alle Geburtstage verschieden.

$$
P(\text{alle verschieden}) = \frac{365}{365} \cdot \frac{364}{365} \cdot \ldots \cdot \frac{343}{365} \approx 0{,}493 \qquad P(\text{mindestens zwei gleich}) \approx 1 - 0{,}493 = 0{,}507
$$

Schon bei 23 Personen ist es also wahrscheinlicher als nicht. Dasselbe Prinzip steckt hinter Kollisionen bei Hashfunktionen.
:::

### Additionssatz

Für beliebige Ereignisse gilt

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

Der Durchschnitt wird abgezogen, weil er sonst doppelt gezählt würde. Für unvereinbare Ereignisse ist $P(A \cap B) = 0$.

:::tip[Beispiel]
Eine Karte wird aus 52 Spielkarten gezogen. $A$: „Herz“ ($13$ Karten), $B$: „Bild“ (Bube, Dame, König; $12$ Karten). $A \cap B$ sind die drei Herz-Bilder:

$$
P(A \cup B) = \frac{13}{52} + \frac{12}{52} - \frac{3}{52} = \frac{22}{52} \approx 42{,}3\,\%
$$
:::

### Multiplikationssatz und bedingte Wahrscheinlichkeit

Die **bedingte Wahrscheinlichkeit** $P(B \mid A)$ ist die Wahrscheinlichkeit von $B$, wenn bekannt ist, dass $A$ eingetreten ist:

$$
P(B \mid A) = \frac{P(A \cap B)}{P(A)} \qquad\Longleftrightarrow\qquad P(A \cap B) = P(A) \cdot P(B \mid A)
$$

Die rechte Form heißt **Multiplikationssatz**.

### Unabhängigkeit

Zwei Ereignisse sind **unabhängig**, wenn das Eintreten des einen die Wahrscheinlichkeit des anderen nicht verändert, also $P(B \mid A) = P(B)$. Dann gilt

$$
P(A \cap B) = P(A) \cdot P(B)
$$

:::tip[Beispiel: Redundante Systeme]
Ein Server fällt an einem Tag mit Wahrscheinlichkeit $0{,}02$ aus. Zwei unabhängig arbeitende Server sind nur dann beide ausgefallen, wenn jeder einzelne ausfällt:

$$
P(\text{beide fallen aus}) = 0{,}02 \cdot 0{,}02 = 0{,}0004
$$

Die Verfügbarkeit steigt von $98\,\%$ auf $99{,}96\,\%$. In der Praxis sind Ausfälle oft nicht unabhängig (gemeinsame Stromversorgung, gleiches Softwareupdate), dann ist die echte Ausfallwahrscheinlichkeit deutlich höher.
:::

:::caution
Unvereinbar und unabhängig sind verschiedene Dinge. Unvereinbare Ereignisse mit positiver Wahrscheinlichkeit sind sogar immer **abhängig**: Tritt $A$ ein, ist $B$ unmöglich.
:::

## Baumdiagramme

Mehrstufige Zufallsexperimente stellt man mit einem **Baumdiagramm** dar. An jedem Ast steht die (bedingte) Wahrscheinlichkeit des jeweiligen Schritts. Es gelten zwei Pfadregeln:

- **Produktregel:** Die Wahrscheinlichkeit eines Pfades ist das Produkt der Wahrscheinlichkeiten entlang des Pfades.
- **Summenregel:** Die Wahrscheinlichkeit eines Ereignisses ist die Summe der Wahrscheinlichkeiten aller Pfade, die zu diesem Ereignis gehören.

Die Wahrscheinlichkeiten der Äste, die von einem Knoten ausgehen, ergeben zusammen $1$.

:::tip[Beispiel: Ziehen ohne Zurücklegen]
In einer Kiste liegen 10 Chips, davon 3 defekt. Es werden zwei Chips ohne Zurücklegen gezogen. Mit $D$ = defekt und $O$ = in Ordnung:

| Pfad | Wahrscheinlichkeit |
| ---- | ------------------ |
| $D, D$ | $\frac{3}{10} \cdot \frac{2}{9} = \frac{6}{90}$ |
| $D, O$ | $\frac{3}{10} \cdot \frac{7}{9} = \frac{21}{90}$ |
| $O, D$ | $\frac{7}{10} \cdot \frac{3}{9} = \frac{21}{90}$ |
| $O, O$ | $\frac{7}{10} \cdot \frac{6}{9} = \frac{42}{90}$ |

$P(\text{genau ein defekter Chip}) = \frac{21}{90} + \frac{21}{90} = \frac{42}{90} \approx 46{,}7\,\%$. Weil nicht zurückgelegt wird, ändern sich die Wahrscheinlichkeiten in der zweiten Stufe.
:::

## Satz von Bayes

Häufig kennt man $P(B \mid A)$, interessiert sich aber für die umgekehrte Wahrscheinlichkeit $P(A \mid B)$. Der **Satz von Bayes** dreht die Bedingung um:

$$
P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)} \qquad\text{mit}\qquad P(B) = P(B \mid A) \cdot P(A) + P(B \mid \overline{A}) \cdot P(\overline{A})
$$

Die Formel für $P(B)$ heißt **Satz von der totalen Wahrscheinlichkeit**; im Baumdiagramm ist sie die Summe aller Pfade, die zu $B$ führen.

:::tip[Beispiel: Medizinischer Test]
Eine Krankheit $K$ tritt bei 1 % der Bevölkerung auf. Ein Test erkennt Erkrankte mit 99 % Wahrscheinlichkeit (**Sensitivität**), bei Gesunden fällt er mit 95 % Wahrscheinlichkeit negativ aus (**Spezifität**), also mit 5 % fälschlich positiv. Wie wahrscheinlich ist eine Person mit positivem Test wirklich krank?

$$
P(+) = \underbrace{0{,}99 \cdot 0{,}01}_{\text{krank, positiv}} + \underbrace{0{,}05 \cdot 0{,}99}_{\text{gesund, positiv}} = 0{,}0099 + 0{,}0495 = 0{,}0594
$$

$$
P(K \mid +) = \frac{0{,}0099}{0{,}0594} \approx 0{,}167 = 16{,}7\,\%
$$

Trotz des scheinbar sehr genauen Tests ist nur etwa jede sechste positiv getestete Person krank. Anschaulich mit 10 000 Personen: 100 sind krank, davon werden 99 erkannt. Von den 9900 Gesunden werden aber 495 falsch positiv getestet. Der Grund ist die niedrige **Prävalenz** (Grundrate) der Krankheit.
:::

Dasselbe Prinzip gilt für Spamfilter (naiver Bayes-Klassifikator), Intrusion-Detection-Systeme und Qualitätsprüfungen: Bei seltenen Ereignissen erzeugt schon eine kleine Fehlalarmrate sehr viele falsche Treffer.

## Kombinatorik

Für Laplace-Wahrscheinlichkeiten muss man oft große Anzahlen von Möglichkeiten zählen. Die Kombinatorik liefert dafür Formeln. Die zwei entscheidenden Fragen sind: **Kommt es auf die Reihenfolge an?** und **Darf ein Element mehrfach vorkommen (mit Wiederholung)?**

### Fundamentalprinzip des Zählens

Besteht eine Auswahl aus $k$ Schritten mit $n_1, n_2, \ldots, n_k$ Möglichkeiten, gibt es insgesamt $n_1 \cdot n_2 \cdot \ldots \cdot n_k$ Möglichkeiten. Ein Menü mit 3 Vorspeisen, 4 Hauptspeisen und 2 Desserts ergibt $3 \cdot 4 \cdot 2 = 24$ Kombinationen.

### Permutationen

Eine **Permutation** ist eine Anordnung aller $n$ Elemente. Für $n$ verschiedene Elemente gibt es

$$
n! = n \cdot (n - 1) \cdot \ldots \cdot 2 \cdot 1 \qquad (0! = 1)
$$

Möglichkeiten, für 5 Personen in einer Reihe also $5! = 120$. Sind einige Elemente gleich ($k_1$, $k_2$, … gleiche Elemente), dividiert man durch deren Vertauschungen: $\frac{n!}{k_1! \cdot k_2! \cdot \ldots}$. Das Wort „ANANAS“ hat $\frac{6!}{3! \cdot 2! \cdot 1!} = 60$ verschiedene Anordnungen.

### Übersicht: k aus n Elementen auswählen

| | mit Beachtung der Reihenfolge (Variation) | ohne Beachtung der Reihenfolge (Kombination) |
| --- | --- | --- |
| **ohne Wiederholung** | $\dfrac{n!}{(n - k)!}$ | $\dbinom{n}{k} = \dfrac{n!}{k! \cdot (n - k)!}$ |
| **mit Wiederholung** | $n^k$ | $\dbinom{n + k - 1}{k}$ |

Der **Binomialkoeffizient** $\binom{n}{k}$ (sprich „n über k“) zählt die $k$-elementigen Teilmengen einer $n$-elementigen Menge. Am Taschenrechner heißt er meist `nCr`.

:::tip[Beispiele]
- **Variation ohne Wiederholung:** Bei einem Wettbewerb mit 10 Teams gibt es für die Plätze 1 bis 3 $\;10 \cdot 9 \cdot 8 = \frac{10!}{7!} = 720$ Möglichkeiten.
- **Variation mit Wiederholung:** Ein vierstelliger PIN-Code hat $10^4 = 10\,000$ Möglichkeiten. Ein 8-stelliges Passwort aus Klein- und Großbuchstaben und Ziffern (62 Zeichen) hat $62^8 \approx 2{,}18 \cdot 10^{14}$ Möglichkeiten.
- **Kombination ohne Wiederholung:** Beim österreichischen Lotto „6 aus 45“ gibt es $\binom{45}{6} = 8\,145\,060$ Tipps. Die Wahrscheinlichkeit für einen Sechser mit einem Tipp ist $\frac{1}{8\,145\,060} \approx 1{,}23 \cdot 10^{-7}$.
- **Kombination mit Wiederholung:** Drei Kugeln Eis aus 5 Sorten (Sorten dürfen sich wiederholen, Reihenfolge egal): $\binom{5 + 3 - 1}{3} = \binom{7}{3} = 35$ Möglichkeiten.
:::

:::tip[Beispiel: Wahrscheinlichkeit mit Kombinatorik]
Aus der Kiste mit 10 Chips, davon 3 defekt, werden 4 Chips ohne Zurücklegen gezogen. Wie wahrscheinlich ist genau ein defekter dabei?

$$
P = \frac{\binom{3}{1} \cdot \binom{7}{3}}{\binom{10}{4}} = \frac{3 \cdot 35}{210} = 0{,}5
$$

Im Zähler wählt man einen der 3 defekten und drei der 7 guten Chips aus, im Nenner alle Möglichkeiten, 4 aus 10 zu ziehen. Diese Verteilung heißt **hypergeometrische Verteilung**.
:::

## Weiterführende Quellen

- [Wahrscheinlichkeitsrechnung, mathe online (Universität Wien)](https://www.mathe-online.at/)
- [Joseph K. Blitzstein, Jessica Hwang: Introduction to Probability (frei verfügbar)](https://projects.iq.harvard.edu/stat110/home)
