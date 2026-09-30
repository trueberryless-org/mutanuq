---
title: Aussagenlogik und Boolesche Algebra
description: Aussagen und ihre Verknüpfungen, Wahrheitstabellen, Rechengesetze der Booleschen Algebra, Schaltfunktionen und Normalformen.
sidebar:
  order: 3
---

## Aussagen

Eine **Aussage** ist ein Satz, der entweder wahr (w, 1) oder falsch (f, 0) ist, nie beides und nie keines von beiden.

- „Wien ist die Hauptstadt von Österreich.“ ist eine wahre Aussage.
- „$7$ ist eine gerade Zahl.“ ist eine falsche Aussage.
- „Wie spät ist es?“ oder „$x > 3$“ sind keine Aussagen: Die Frage hat keinen Wahrheitswert, und bei $x > 3$ hängt er vom Wert von $x$ ab. Solche Sätze mit Variablen nennt man Aussageformen.

## Verknüpfungen von Aussagen

Aussagen lassen sich mit **Junktoren** zu neuen Aussagen verknüpfen. Ihr Wahrheitswert hängt nur von den Wahrheitswerten der Teilaussagen ab und wird in einer Wahrheitstabelle festgehalten.

| Verknüpfung   | Logik               | Boolesche Algebra     | Programmierung | gelesen                  |
| ------------- | ------------------- | --------------------- | -------------- | ------------------------ |
| Negation      | $\neg a$            | $\overline{a}$        | `!a`           | nicht $a$                |
| Konjunktion   | $a \land b$         | $a \cdot b$           | `a && b`       | $a$ und $b$              |
| Disjunktion   | $a \lor b$          | $a + b$               | `a \|\| b`     | $a$ oder $b$             |
| Antivalenz    | $a \oplus b$        | $a \oplus b$          | `a ^ b`        | entweder $a$ oder $b$    |
| Implikation   | $a \Rightarrow b$   | $\overline{a} + b$    |                | wenn $a$, dann $b$       |
| Äquivalenz    | $a \Leftrightarrow b$ | $\overline{a \oplus b}$ | `a == b`   | $a$ genau dann, wenn $b$ |

| $a$ | $b$ | $\neg a$ | $a \land b$ | $a \lor b$ | $a \oplus b$ | $a \Rightarrow b$ | $a \Leftrightarrow b$ |
| --- | --- | -------- | ----------- | ---------- | ------------ | ----------------- | --------------------- |
| 0   | 0   | 1        | 0           | 0          | 0            | 1                 | 1                     |
| 0   | 1   | 1        | 0           | 1          | 1            | 1                 | 0                     |
| 1   | 0   | 0        | 0           | 1          | 1            | 0                 | 0                     |
| 1   | 1   | 0        | 1           | 1          | 0            | 1                 | 1                     |

:::note
Das logische „oder“ ist **einschließend**: $a \lor b$ ist auch dann wahr, wenn beide Aussagen wahr sind. Das umgangssprachliche „entweder … oder“ entspricht der Antivalenz (XOR).

Die Implikation $a \Rightarrow b$ ist nur dann falsch, wenn aus einer wahren Voraussetzung eine falsche Folgerung gezogen wird. Aus einer falschen Voraussetzung folgt „alles“: Der Satz „Wenn es regnet, ist die Straße nass“ wird nicht dadurch falsch, dass die Straße an einem trockenen Tag nass ist.
:::

### Tautologien und Widersprüche

Eine zusammengesetzte Aussage, die für alle Belegungen wahr ist, heißt **Tautologie**, zum Beispiel $a \lor \neg a$. Eine Aussage, die immer falsch ist, heißt Widerspruch (Kontradiktion), zum Beispiel $a \land \neg a$. Ob eine Aussage eine Tautologie ist, prüft man mit einer Wahrheitstabelle.

:::tip[Beispiel: Kontraposition]
Zeige, dass $(a \Rightarrow b) \Leftrightarrow (\neg b \Rightarrow \neg a)$ eine Tautologie ist.

| $a$ | $b$ | $a \Rightarrow b$ | $\neg b$ | $\neg a$ | $\neg b \Rightarrow \neg a$ | gesamt |
| --- | --- | ----------------- | -------- | -------- | --------------------------- | ------ |
| 0   | 0   | 1                 | 1        | 1        | 1                           | 1      |
| 0   | 1   | 1                 | 0        | 1        | 1                           | 1      |
| 1   | 0   | 0                 | 1        | 0        | 0                           | 1      |
| 1   | 1   | 1                 | 0        | 0        | 1                           | 1      |

Die letzte Spalte enthält nur Einsen. Die Aussage „Wenn es regnet, ist die Straße nass“ ist also gleichwertig mit „Wenn die Straße nicht nass ist, regnet es nicht“.
:::

## Boolesche Algebra

Die **Boolesche Algebra** (nach George Boole, 1815–1864) rechnet mit den Werten $0$ und $1$ und den Operationen UND ($\cdot$), ODER ($+$) und NICHT ($\overline{\phantom{a}}$). Wie beim Rechnen mit Zahlen bindet $\cdot$ stärker als $+$, und der Malpunkt darf weggelassen werden: $ab + c$ bedeutet $(a \cdot b) + c$.

### Rechengesetze

| Gesetz                    | UND                                         | ODER                                       |
| ------------------------- | ------------------------------------------- | ------------------------------------------ |
| Kommutativgesetz          | $a \cdot b = b \cdot a$                     | $a + b = b + a$                            |
| Assoziativgesetz          | $(ab)c = a(bc)$                             | $(a + b) + c = a + (b + c)$                |
| Distributivgesetz         | $a(b + c) = ab + ac$                        | $a + bc = (a + b)(a + c)$                  |
| Neutrales Element         | $a \cdot 1 = a$                             | $a + 0 = a$                                |
| Dominanz                  | $a \cdot 0 = 0$                             | $a + 1 = 1$                                |
| Idempotenz                | $a \cdot a = a$                             | $a + a = a$                                |
| Komplement                | $a \cdot \overline{a} = 0$                  | $a + \overline{a} = 1$                     |
| Absorption                | $a(a + b) = a$                              | $a + ab = a$                               |
| De Morgan             | $\overline{a \cdot b} = \overline{a} + \overline{b}$ | $\overline{a + b} = \overline{a} \cdot \overline{b}$ |
| Doppelte Negation         | $\overline{\overline{a}} = a$               |                                            |

Die Gesetze treten paarweise auf (**Dualitätsprinzip**): Vertauscht man $\cdot$ und $+$ sowie $0$ und $1$, erhält man wieder ein gültiges Gesetz. Das zweite Distributivgesetz $a + bc = (a + b)(a + c)$ gilt anders als beim Rechnen mit Zahlen in der Booleschen Algebra ebenfalls.

:::tip[Beispiel: Vereinfachen]
$$
\begin{aligned}
\overline{a}b + ab + a\overline{b} &= (\overline{a} + a)b + a\overline{b} && \text{Distributivgesetz} \\
&= b + a\overline{b} && \text{Komplement} \\
&= (b + a)(b + \overline{b}) && \text{2. Distributivgesetz} \\
&= a + b && \text{Komplement}
\end{aligned}
$$
:::

## Schaltfunktionen

Eine **Schaltfunktion** ordnet jeder Kombination von Eingangswerten $0$ oder $1$ einen Ausgangswert $0$ oder $1$ zu. Bei $n$ Eingängen hat ihre Wahrheitstabelle $2^n$ Zeilen. In der Digitaltechnik werden Schaltfunktionen mit Logikgattern (AND, OR, NOT, NAND, NOR, XOR) als Schaltung aufgebaut.

:::note[NAND und NOR]
Mit NAND-Gattern ($\overline{a \cdot b}$) allein lässt sich jede Schaltfunktion aufbauen, ebenso mit NOR-Gattern allein. Zum Beispiel ist $\overline{a} = \overline{a \cdot a}$. Deshalb sind NAND-Gatter die Grundbausteine vieler integrierter Schaltungen.
:::

### Normalformen

Aus einer Wahrheitstabelle kann man die Schaltfunktion direkt ablesen:

- **Disjunktive Normalform (DNF):** Für jede Zeile mit Ergebnis $1$ bildet man einen Minterm, eine UND-Verknüpfung aller Variablen, in der jede Variable, die in dieser Zeile $0$ ist, negiert wird. Die Minterme werden mit ODER verknüpft.
- **Konjunktive Normalform (KNF):** Für jede Zeile mit Ergebnis $0$ bildet man einen Maxterm, eine ODER-Verknüpfung, in der jede Variable, die in dieser Zeile $1$ ist, negiert wird. Die Maxterme werden mit UND verknüpft.

:::tip[Beispiel: Mehrheitsschaltung]
Eine Alarmanlage mit drei Sensoren $a$, $b$ und $c$ soll auslösen ($y = 1$), wenn mindestens zwei Sensoren anschlagen.

| $a$ | $b$ | $c$ | $y$ | Minterm                   |
| --- | --- | --- | --- | ------------------------- |
| 0   | 0   | 0   | 0   |                           |
| 0   | 0   | 1   | 0   |                           |
| 0   | 1   | 0   | 0   |                           |
| 0   | 1   | 1   | 1   | $\overline{a}bc$          |
| 1   | 0   | 0   | 0   |                           |
| 1   | 0   | 1   | 1   | $a\overline{b}c$          |
| 1   | 1   | 0   | 1   | $ab\overline{c}$          |
| 1   | 1   | 1   | 1   | $abc$                     |

DNF: $y = \overline{a}bc + a\overline{b}c + ab\overline{c} + abc$

Vereinfacht (der Term $abc$ darf wegen der Idempotenz mehrfach verwendet werden):

$$
y = (\overline{a} + a)bc + a(\overline{b} + b)c + ab(\overline{c} + c) = bc + ac + ab
$$
:::

### KV-Diagramm

Für bis zu vier Variablen lassen sich Schaltfunktionen grafisch mit einem **Karnaugh-Veitch-Diagramm** vereinfachen. Die Zeilen der Wahrheitstabelle werden so in ein Rechteck eingetragen, dass sich benachbarte Felder (auch über den Rand hinweg) in genau einer Variable unterscheiden. Benachbarte Einsen werden zu möglichst großen Blöcken mit $1$, $2$, $4$ oder $8$ Feldern zusammengefasst. In jedem Block fällt die Variable weg, die sich innerhalb des Blocks ändert.
