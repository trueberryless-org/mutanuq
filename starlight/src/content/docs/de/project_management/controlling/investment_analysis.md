---
title: Investitionsrechnung
description: Wirtschaftlichkeit von Projekten mit statischen Verfahren wie Kostenvergleich, Rentabilität und Amortisation sowie dynamischen Verfahren wie der Kapitalwertmethode beurteilen.
sidebar:
  order: 6
---

Viele Projekte sind Investitionen: Heute wird Geld ausgegeben, damit später Einsparungen oder zusätzliche Erlöse entstehen. Die **Investitionsrechnung** hilft zu entscheiden, ob sich ein Projekt lohnt und welche von mehreren Varianten die wirtschaftlichste ist.

## Beispiel

Ein Unternehmen überlegt, einen Prozess mit einer neuen Software zu automatisieren:

- Anschaffung und Einführung: 30.000 €
- Nutzungsdauer: 4 Jahre, kein Restwert
- jährliche Einsparung an Personalkosten abzüglich Lizenzkosten (Rückfluss): 10.000 €

Die jährliche Abschreibung beträgt 30.000 € / 4 = 7.500 €.

## Statische Verfahren

Statische Verfahren rechnen mit Durchschnittswerten und berücksichtigen nicht, **wann** Zahlungen anfallen. Sie sind einfach, aber ungenau.

### Kostenvergleichsrechnung

Die Kosten mehrerer Varianten werden pro Jahr verglichen, einschließlich Abschreibung und Zinsen auf das gebundene Kapital. Gewählt wird die günstigste Variante. Die Methode eignet sich, wenn alle Varianten denselben Nutzen bringen, etwa beim Vergleich eines eigenen Servers mit einem Cloud-Angebot.

| jährliche Kosten           | eigener Server | Cloud    |
| -------------------------- | -------------- | -------- |
| Abschreibung               | 2.000 €        | 0 €      |
| Strom und Kühlung          | 600 €          | 0 €      |
| Wartung und Administration | 1.500 €        | 500 €    |
| Miete bzw. Nutzungsgebühr  | 0 €            | 3.800 €  |
| Summe                      | 4.100 €        | 4.300 €  |

In diesem Beispiel ist der eigene Server etwas günstiger. Nicht berücksichtigt sind Faktoren wie Ausfallsicherheit oder Skalierbarkeit, die sich mit einer [Nutzwertanalyse](/de/project_management/basics/creativity_techniques/#ideen-bewerten) bewerten lassen.

### Gewinnvergleichs- und Rentabilitätsrechnung

Der durchschnittliche Gewinn pro Jahr ist der Rückfluss abzüglich der Abschreibung: 10.000 € − 7.500 € = 2.500 €.

Die **Rentabilität** (Return on Investment) setzt diesen Gewinn ins Verhältnis zum durchschnittlich gebundenen Kapital. Bei linearer Abschreibung ist das die Hälfte der Anschaffungskosten:

$$
\text{Rentabilität} = \frac{\text{durchschnittlicher Gewinn}}{\text{durchschnittlich gebundenes Kapital}} = \frac{2.500}{15.000} \approx 16{,}7\,\%
$$

Die Investition lohnt sich, wenn die Rentabilität über dem Zinssatz liegt, den man mit dem Geld anderweitig erzielen könnte.

### Amortisationsrechnung

Die **Amortisationszeit** gibt an, nach wie vielen Jahren das eingesetzte Kapital durch die Rückflüsse wieder hereingekommen ist:

$$
\text{Amortisationszeit} = \frac{\text{Anschaffungskosten}}{\text{jährlicher Rückfluss}} = \frac{30.000}{10.000} = 3 \text{ Jahre}
$$

Je kürzer die Amortisationszeit, desto geringer das Risiko. Viele Unternehmen legen eine maximale Amortisationszeit fest, bei IT-Projekten oft zwei bis drei Jahre, weil sich Technik schnell ändert.

## Dynamische Verfahren

Dynamische Verfahren berücksichtigen, dass Geld, das man heute hat, mehr wert ist als derselbe Betrag in einigen Jahren, weil man es in der Zwischenzeit verzinst anlegen könnte.

### Kapitalwertmethode

Bei der **Kapitalwertmethode** werden alle künftigen Rückflüsse auf den heutigen Zeitpunkt abgezinst. Ein Betrag $R_t$, der im Jahr $t$ anfällt, ist heute bei einem Zinssatz $i$ nur noch $R_t \cdot (1+i)^{-t}$ wert. Der Kapitalwert $C_0$ ist die Summe aller abgezinsten Rückflüsse abzüglich der Anschaffungskosten $I_0$:

$$
C_0 = -I_0 + \sum_{t=1}^{n} \frac{R_t}{(1+i)^t}
$$

Für das Beispiel mit einem Kalkulationszinssatz von 5 %:

| Jahr $t$ | Rückfluss | Abzinsungsfaktor $1{,}05^{-t}$ | Barwert     |
| -------- | --------- | ------------------------------ | ----------- |
| 0        | −30.000 € | 1,000000                       | −30.000,00 € |
| 1        | 10.000 €  | 0,952381                       | 9.523,81 €  |
| 2        | 10.000 €  | 0,907029                       | 9.070,29 €  |
| 3        | 10.000 €  | 0,863838                       | 8.638,38 €  |
| 4        | 10.000 €  | 0,822702                       | 8.227,02 €  |
| Summe    |           |                                | 5.459,50 €  |

Der Kapitalwert ist positiv, die Investition ist also vorteilhaft: Sie bringt nicht nur die 5 % Verzinsung, sondern zusätzlich einen heutigen Wert von rund 5.460 €. Bei einem negativen Kapitalwert wäre es besser, das Geld zum Kalkulationszinssatz anzulegen.

### Interner Zinssatz

Der **interne Zinssatz** ist jener Zinssatz, bei dem der Kapitalwert genau 0 ist. Er gibt die tatsächliche Verzinsung der Investition an und wird meist mit einem Tabellenkalkulationsprogramm berechnet, etwa mit der Funktion `IKV` in Excel. Für das Beispiel liegt er bei etwa 12,6 %.

## Grenzen der Investitionsrechnung

Viele Nutzen von IT-Projekten lassen sich schwer in Geld ausdrücken: höhere Sicherheit, zufriedenere Kundinnen und Kunden, bessere Datenqualität oder die Erfüllung gesetzlicher Vorgaben. Solche qualitativen Faktoren werden ergänzend mit einer Nutzwertanalyse bewertet. Außerdem hängen alle Ergebnisse von Schätzungen ab, die sich als falsch herausstellen können.
