---
title: Beschreibende Statistik
description: Eindimensionale Datenbeschreibung – Merkmalstypen, absolute und relative Häufigkeiten, Diagramme, Lagemaße, Streuungsmaße und Boxplot.
sidebar:
  order: 4
---

Die **beschreibende Statistik** fasst große Datenmengen übersichtlich zusammen – mit Tabellen, Diagrammen und wenigen aussagekräftigen Kennzahlen. Sie beantwortet Fragen wie „Wie lange dauert eine Anfrage an den Server typischerweise?“ oder „Wie stark schwanken die Messwerte?“.

## Grundbegriffe

- **Grundgesamtheit:** alle Objekte, über die eine Aussage getroffen werden soll, z. B. alle Schülerinnen und Schüler einer Schule.
- **Stichprobe:** die tatsächlich untersuchte Teilmenge.
- **Merkmal:** die untersuchte Eigenschaft, z. B. Körpergröße oder Lieblingsfach. Die möglichen Werte heißen **Ausprägungen**.

| Merkmalstyp                   | Beschreibung                                   | Beispiele                             |
| ----------------------------- | ---------------------------------------------- | ------------------------------------- |
| **nominal** (qualitativ)      | Kategorien ohne Reihenfolge                    | Betriebssystem, Geschlecht, Farbe     |
| **ordinal** (qualitativ)      | Kategorien mit Reihenfolge                     | Schulnoten, Kleidergrößen S/M/L       |
| **metrisch** (quantitativ)    | Zahlenwerte, Abstände sind sinnvoll            | Temperatur, Dateigröße, Antwortzeit   |

Metrische Merkmale können **diskret** (nur einzelne Werte, z. B. Anzahl der Geschwister) oder **stetig** (beliebige Werte in einem Intervall, z. B. Länge) sein.

## Häufigkeiten

Bei $n$ Beobachtungen ist die **absolute Häufigkeit** $H$ die Anzahl, wie oft eine Ausprägung vorkommt. Die **relative Häufigkeit** ist der Anteil an allen Beobachtungen:

$$
h = \frac{H}{n}
$$

Die relativen Häufigkeiten aller Ausprägungen ergeben zusammen $1 = 100\,\%$. Die **kumulierte** (aufsummierte) Häufigkeit gibt an, wie viele Werte kleiner oder gleich einer Ausprägung sind.

:::tip[Beispiel: Noten einer Schularbeit]
| Note | absolute Häufigkeit | relative Häufigkeit | kumulierte relative Häufigkeit |
| ---- | ------------------- | ------------------- | ------------------------------ |
| 1    | 4                   | 16 %                | 16 %                           |
| 2    | 6                   | 24 %                | 40 %                           |
| 3    | 8                   | 32 %                | 72 %                           |
| 4    | 5                   | 20 %                | 92 %                           |
| 5    | 2                   | 8 %                 | 100 %                          |
| **Summe** | **25**         | **100 %**           |                                |
:::

Bei stetigen Merkmalen fasst man die Werte in **Klassen** zusammen, zum Beispiel Antwortzeiten von 0–100 ms, 100–200 ms usw.

## Diagramme

| Diagramm             | geeignet für                                                    |
| -------------------- | --------------------------------------------------------------- |
| Säulen-/Balkendiagramm | Häufigkeiten von Kategorien oder diskreten Werten             |
| Kreisdiagramm        | Anteile an einem Ganzen (wenige Kategorien)                     |
| Histogramm           | klassierte stetige Daten; die **Fläche** der Rechtecke entspricht der Häufigkeit |
| Liniendiagramm       | zeitliche Verläufe                                              |
| Boxplot              | Lage und Streuung auf einen Blick, Vergleich mehrerer Datenreihen |

:::caution
Diagramme können täuschen: Beginnt die $y$-Achse nicht bei $0$, wirken kleine Unterschiede riesig. Prüfen Sie immer die Achsenbeschriftung.
:::

## Lagemaße

Lagemaße beschreiben, wo die Daten „in der Mitte“ liegen.

### Arithmetisches Mittel

$$
\bar{x} = \frac{x_1 + x_2 + \ldots + x_n}{n} = \frac{1}{n} \sum_{i=1}^{n} x_i
$$

Bei einer Häufigkeitstabelle gewichtet man jeden Wert mit seiner Häufigkeit: $\bar{x} = \frac{1}{n}\sum H_i x_i$. Im Notenbeispiel ist $\bar{x} = \frac{1 \cdot 4 + 2 \cdot 6 + 3 \cdot 8 + 4 \cdot 5 + 5 \cdot 2}{25} = \frac{70}{25} = 2{,}8$.

### Median

Der **Median** $\tilde{x}$ ist der Wert in der Mitte der **der Größe nach geordneten** Liste. Mindestens die Hälfte der Werte ist kleiner oder gleich, mindestens die Hälfte größer oder gleich dem Median.

- Bei ungeradem $n$ ist er der mittlere Wert.
- Bei geradem $n$ ist er das arithmetische Mittel der beiden mittleren Werte.

### Modus

Der **Modus** (Modalwert) ist der am häufigsten vorkommende Wert. Er ist das einzige Lagemaß für nominale Merkmale.

:::tip[Beispiel: Ausreißer]
Die Antwortzeiten eines Servers in ms: $\;12,\ 15,\ 14,\ 13,\ 16,\ 15,\ 350$

- Mittelwert: $\bar{x} = \frac{435}{7} \approx 62{,}1$ ms
- Median (geordnet: 12, 13, 14, **15**, 15, 16, 350): $\tilde{x} = 15$ ms
- Modus: $15$ ms

Der einzelne **Ausreißer** 350 ms verzerrt den Mittelwert stark, der Median bleibt davon unberührt. Deshalb gibt man bei schiefen Verteilungen wie Einkommen oder Antwortzeiten oft den Median an.
:::

## Streuungsmaße

Streuungsmaße beschreiben, wie weit die Daten auseinanderliegen. Zwei Datenreihen können denselben Mittelwert, aber eine völlig verschiedene Streuung haben.

### Spannweite und Quartile

- **Spannweite:** $R = x_{\max} - x_{\min}$. Sie hängt nur von den beiden Extremwerten ab und ist daher empfindlich gegen Ausreißer.
- **Quartile:** Das untere Quartil $q_1$ teilt die geordneten Daten so, dass mindestens 25 % der Werte kleiner oder gleich sind, das obere Quartil $q_3$ entsprechend bei 75 %. Der Median ist das mittlere Quartil $q_2$.
- **Quartilsabstand:** $q_3 - q_1$. In diesem Bereich liegen die mittleren 50 % der Daten.

:::note
Für die Berechnung der Quartile gibt es verschiedene Verfahren, die bei kleinen Datenmengen leicht unterschiedliche Ergebnisse liefern. Eine übliche Methode: Man bestimmt den Median der unteren und der oberen Hälfte der geordneten Daten.
:::

### Varianz und Standardabweichung

Die **Varianz** ist die mittlere quadratische Abweichung vom Mittelwert, die **Standardabweichung** ihre Wurzel:

$$
\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2 \qquad \sigma = \sqrt{\sigma^2}
$$

Verwendet man die Daten einer Stichprobe, um die Streuung der Grundgesamtheit zu schätzen, dividiert man durch $n - 1$ statt durch $n$ (**empirische Standardabweichung** $s$). Taschenrechner bieten meist beide Varianten an ($\sigma_n$ bzw. $s_{n-1}$).

Die Standardabweichung hat dieselbe Einheit wie die Daten. Bei annähernd normalverteilten Daten liegen etwa 68 % der Werte im Bereich $\bar{x} \pm \sigma$ und etwa 95 % im Bereich $\bar{x} \pm 2\sigma$.

:::tip[Beispiel]
Messwerte eines Widerstands in $\Omega$: $\;98,\ 101,\ 100,\ 99,\ 102$

$$
\bar{x} = 100 \qquad \sigma^2 = \frac{(-2)^2 + 1^2 + 0^2 + (-1)^2 + 2^2}{5} = \frac{10}{5} = 2 \qquad \sigma = \sqrt{2} \approx 1{,}41\ \Omega
$$
:::

Der **Variationskoeffizient** $\frac{\sigma}{\bar{x}}$ setzt die Streuung ins Verhältnis zum Mittelwert und erlaubt den Vergleich von Datenreihen mit unterschiedlichen Größenordnungen.

## Boxplot

Ein **Boxplot** stellt die **Fünf-Punkte-Zusammenfassung** $x_{\min}$, $q_1$, $\tilde{x}$, $q_3$ und $x_{\max}$ grafisch dar:

- Die **Box** reicht vom unteren zum oberen Quartil und enthält die mittleren 50 % der Daten.
- Ein Strich in der Box markiert den **Median**.
- Die **Antennen** (Whisker) reichen bis zum kleinsten und größten Wert.

Je länger Box und Antennen, desto größer die Streuung. Liegt der Median nicht in der Mitte der Box, ist die Verteilung **schief**. Boxplots eignen sich besonders, um mehrere Datenreihen nebeneinander zu vergleichen.

:::tip[Beispiel]
Geordnete Daten: $\;2,\ 4,\ 5,\ 7,\ 8,\ 9,\ 11,\ 12,\ 15$

- $x_{\min} = 2$, $x_{\max} = 15$
- Median: $\tilde{x} = 8$ (5. von 9 Werten)
- untere Hälfte $2, 4, 5, 7$: $q_1 = 4{,}5$
- obere Hälfte $9, 11, 12, 15$: $q_3 = 11{,}5$
- Quartilsabstand: $11{,}5 - 4{,}5 = 7$
:::

Wie man aus Stichproben auf die Grundgesamtheit schließt, ist Thema der **beurteilenden Statistik** mit Wahrscheinlichkeitsverteilungen, Konfidenzintervallen und Hypothesentests.
