---
title: Mengen und Zahlenbereiche
description: Mengenbegriff, Mengenoperationen, Intervalle und die Zahlenbereiche von den natürlichen bis zu den reellen Zahlen.
sidebar:
  order: 1
---

## Mengen

Eine **Menge** ist eine Zusammenfassung von unterscheidbaren Objekten, den Elementen der Menge. Mengen werden mit Großbuchstaben bezeichnet, ihre Elemente stehen in geschwungenen Klammern.

- **Aufzählende Schreibweise:** $A = \{1, 2, 3, 4\}$
- **Beschreibende Schreibweise:** $A = \{x \in \mathbb{N} \mid 1 \le x \le 4\}$ (gelesen: „alle natürlichen Zahlen $x$, für die gilt …“)

| Symbol          | Bedeutung                                      | Beispiel                       |
| --------------- | ---------------------------------------------- | ------------------------------ |
| $a \in A$       | $a$ ist Element von $A$                        | $2 \in \{1, 2, 3\}$            |
| $a \notin A$    | $a$ ist kein Element von $A$                   | $5 \notin \{1, 2, 3\}$         |
| $A \subseteq B$ | $A$ ist Teilmenge von $B$                      | $\{1, 2\} \subseteq \{1, 2, 3\}$ |
| $\{\}$ bzw. $\emptyset$ | leere Menge (enthält kein Element)     |                                |
| $\lvert A \rvert$ | Mächtigkeit: Anzahl der Elemente von $A$     | $\lvert \{1, 2, 3\} \rvert = 3$ |

Die Reihenfolge der Elemente spielt keine Rolle, und jedes Element kommt nur einmal vor: $\{1, 2, 3\} = \{3, 1, 2\}$.

## Mengenoperationen

| Operation                   | Schreibweise    | Enthält alle Elemente, die …          |
| --------------------------- | --------------- | ------------------------------------- |
| Durchschnitt (Schnittmenge) | $A \cap B$  | in $A$ und in $B$ liegen          |
| Vereinigung             | $A \cup B$      | in $A$ oder in $B$ liegen         |
| Differenz               | $A \setminus B$ | in $A$, aber nicht in $B$ liegen  |
| Komplement              | $\overline{A}$  | in der Grundmenge, aber nicht in $A$ liegen |

:::tip[Beispiel]
Für $A = \{1, 2, 3, 4\}$ und $B = \{3, 4, 5\}$ gilt:

- $A \cap B = \{3, 4\}$
- $A \cup B = \{1, 2, 3, 4, 5\}$
- $A \setminus B = \{1, 2\}$ und $B \setminus A = \{5\}$
:::

Mengenoperationen lassen sich gut mit **Venn-Diagrammen** veranschaulichen: Jede Menge wird als Kreis dargestellt, überlappende Bereiche zeigen den Durchschnitt. Zwei Mengen mit $A \cap B = \{\}$ heißen disjunkt.

Die Mengenoperationen entsprechen den logischen Verknüpfungen der [Aussagenlogik](/de/mathematics/algebra/logic-and-boolean-algebra/): Der Durchschnitt entspricht dem „und“, die Vereinigung dem „oder“ und das Komplement der Negation.

## Zahlenbereiche

Die Zahlenbereiche bauen aufeinander auf. Jeder Bereich wurde eingeführt, weil im vorherigen eine Rechenoperation nicht immer ausführbar war:

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}
$$

| Zahlenbereich | Name                  | Beschreibung                                                        | Beispiele                        |
| ------------- | --------------------- | ------------------------------------------------------------------- | -------------------------------- |
| $\mathbb{N}$  | natürliche Zahlen     | $\{0, 1, 2, 3, \dots\}$; Addition und Multiplikation sind immer möglich | $0, 7, 42$                    |
| $\mathbb{Z}$  | ganze Zahlen          | $\{\dots, -2, -1, 0, 1, 2, \dots\}$; auch Subtraktion ist immer möglich | $-5, 0, 13$                  |
| $\mathbb{Q}$  | rationale Zahlen      | alle Brüche $\frac{p}{q}$ mit $p, q \in \mathbb{Z}$, $q \ne 0$; auch Division (außer durch 0) | $\frac{3}{4}, -0{,}5, 0{,}\overline{3}$ |
| $\mathbb{R}$  | reelle Zahlen         | rationale und irrationale Zahlen; alle Punkte der Zahlengeraden    | $\sqrt{2}, \pi, e$               |
| $\mathbb{C}$  | [komplexe Zahlen](/de/mathematics/algebra/complex-numbers/) | Erweiterung um die imaginäre Einheit $j$ mit $j^2 = -1$ | $3 + 2j$ |

:::note
Ob die 0 zu den natürlichen Zahlen gehört, ist eine Frage der Definition. In Österreich (und nach der Norm ISO 80000-2) wird sie meist dazugezählt. Die natürlichen Zahlen ohne 0 schreibt man als $\mathbb{N}^*$ oder $\mathbb{N}_{>0}$.
:::

### Rationale und irrationale Zahlen

Jede rationale Zahl lässt sich als **endliche** oder periodische Dezimalzahl schreiben:

- $\frac{3}{8} = 0{,}375$ (endlich)
- $\frac{1}{3} = 0{,}333\ldots = 0{,}\overline{3}$ (periodisch)
- $\frac{5}{6} = 0{,}8\overline{3}$ (gemischt periodisch)

**Irrationale Zahlen** wie $\sqrt{2} = 1{,}41421356\ldots$ oder $\pi = 3{,}14159265\ldots$ haben unendlich viele Nachkommastellen ohne Periode. Sie lassen sich nicht als Bruch zweier ganzer Zahlen darstellen.

:::tip[Beispiel: Periodische Dezimalzahl in Bruch umwandeln]
Gesucht ist der Bruch für $x = 0{,}\overline{27}$. Die Periode hat zwei Stellen, daher multipliziert man mit $100$:

$$
\begin{aligned}
100x &= 27{,}\overline{27} \\
x &= 0{,}\overline{27} \\
\hline
99x &= 27 \quad\Rightarrow\quad x = \frac{27}{99} = \frac{3}{11}
\end{aligned}
$$
:::

### Teilmengen mit Vorzeichen

Häufig benötigt man nur positive oder negative Zahlen eines Bereichs:

- $\mathbb{R}^+$ bzw. $\mathbb{R}_{>0}$: alle positiven reellen Zahlen
- $\mathbb{R}_0^+$ bzw. $\mathbb{R}_{\ge 0}$: alle positiven reellen Zahlen und die 0
- $\mathbb{Z}^-$: alle negativen ganzen Zahlen

## Intervalle

Zusammenhängende Teilmengen der reellen Zahlen schreibt man als **Intervalle**. Eine eckige Klammer, die zur Zahl zeigt, bedeutet, dass die Grenze dazugehört. Zeigt sie von der Zahl weg (oder steht eine runde Klammer), gehört die Grenze nicht dazu.

| Intervall               | Bedeutung              | Bezeichnung      |
| ----------------------- | ---------------------- | ---------------- |
| $[a; b]$                | $a \le x \le b$        | abgeschlossen    |
| $]a; b[$ bzw. $(a; b)$  | $a < x < b$            | offen            |
| $[a; b[$ bzw. $[a; b)$  | $a \le x < b$          | halboffen        |
| $]a; b]$ bzw. $(a; b]$  | $a < x \le b$          | halboffen        |
| $[a; \infty[$           | $x \ge a$              | unbeschränkt     |
| $]-\infty; b[$          | $x < b$                | unbeschränkt     |

Bei $\infty$ steht immer eine offene Klammer, weil „unendlich“ keine Zahl ist, die erreicht werden kann.

:::tip[Beispiel]
Die Lösungsmenge der Ungleichung $-2 < x \le 5$ ist das Intervall $]-2; 5]$. Die Zahl $-2$ gehört nicht dazu, die Zahl $5$ schon.
:::
