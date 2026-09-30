---
title: Kostenrechnung
description: Kostenbegriffe, Kostenarten, Kostenstellen und Betriebsabrechnungsbogen, Kalkulationsverfahren, Deckungsbeitragsrechnung und Break-Even-Analyse.
sidebar:
  order: 4
---

Die **Kostenrechnung** gehört zum internen Rechnungswesen. Sie beantwortet Fragen wie: Was kostet die Herstellung eines Produkts? Zu welchem Preis müssen wir verkaufen? Lohnt sich ein Zusatzauftrag? Ab welcher Menge machen wir Gewinn? Im Gegensatz zur Buchhaltung ist sie gesetzlich nicht vorgeschrieben.

## Kostenbegriffe

**Kosten** sind der in Geld bewertete Verbrauch von Gütern und Leistungen für die betriebliche Leistungserstellung. Sie unterscheiden sich teilweise vom Aufwand der Buchhaltung:

- **Neutraler Aufwand** ist Aufwand, der keine Kosten darstellt, etwa eine Spende oder ein außergewöhnlicher Schaden.
- **Kalkulatorische Kosten** sind Kosten, denen kein Aufwand gegenübersteht, etwa ein **kalkulatorischer Unternehmerlohn** für die Arbeit des Einzelunternehmers oder **kalkulatorische Zinsen** auf das Eigenkapital.

## Kostenartenrechnung

Die Kostenartenrechnung fragt: **Welche** Kosten sind entstanden?

### Nach der Zurechenbarkeit

- **Einzelkosten** können einem Produkt direkt zugerechnet werden, z. B. Material oder Fertigungslöhne für ein bestimmtes Produkt.
- **Gemeinkosten** betreffen mehrere Produkte und können nicht direkt zugeordnet werden, z. B. Miete, Verwaltungsgehälter, Strom oder Versicherungen.

### Nach dem Verhalten bei Beschäftigungsänderung

- **Fixe Kosten** bleiben bei steigender Produktionsmenge gleich, z. B. Miete, Abschreibung oder Gehälter.
- **Variable Kosten** steigen mit der Menge, z. B. Material, Verpackung oder Provisionen.

$$
K(x) = K_f + k_v \cdot x
$$

Dabei sind $K$ die Gesamtkosten, $K_f$ die Fixkosten, $k_v$ die variablen Kosten pro Stück und $x$ die Menge. Die **Stückkosten** $\frac{K(x)}{x}$ sinken mit steigender Menge, weil sich die Fixkosten auf mehr Stück verteilen (**Fixkostendegression**).

## Kostenstellenrechnung

Die Kostenstellenrechnung fragt: **Wo** sind die Kosten entstanden? **Kostenstellen** sind Bereiche des Unternehmens, in denen Kosten entstehen und verantwortet werden, etwa **Material**, **Fertigung**, **Verwaltung** und **Vertrieb**.

### Betriebsabrechnungsbogen (BAB)

Im **Betriebsabrechnungsbogen** werden die Gemeinkosten mithilfe von **Verteilungsschlüsseln** auf die Kostenstellen verteilt – etwa die Miete nach Quadratmetern oder die Stromkosten nach installierter Leistung. Daraus berechnet man **Zuschlagssätze**, mit denen die Gemeinkosten später auf die Produkte umgelegt werden:

$$
\text{Zuschlagssatz} = \frac{\text{Gemeinkosten der Kostenstelle}}{\text{Zuschlagsbasis (Einzelkosten)}} \cdot 100\,\%
$$

:::tip[Beispiel: Vereinfachter BAB]
| Gemeinkosten        | Summe     | Schlüssel     | Material | Fertigung | Verwaltung & Vertrieb |
| ------------------- | --------- | ------------- | -------- | --------- | --------------------- |
| Miete               | 60.000 €  | m² (1 : 4 : 1) | 10.000  | 40.000    | 10.000                |
| Hilfslöhne          | 90.000 €  | direkt        | 20.000   | 60.000    | 10.000                |
| Abschreibung        | 50.000 €  | Anlagenwert   | 5.000    | 40.000    | 5.000                 |
| sonstige            | 40.000 €  | direkt        | 5.000    | 10.000    | 25.000                |
| **Summe**           | 240.000 € |               | 40.000   | 150.000   | 50.000                |
| **Zuschlagsbasis**  |           |               | Fertigungsmaterial 200.000 € | Fertigungslöhne 150.000 € | Herstellkosten 540.000 € |
| **Zuschlagssatz**   |           |               | **20 %** | **100 %** | **≈ 9,3 %**           |

Die Herstellkosten ergeben sich aus $200\,000 + 40\,000 + 150\,000 + 150\,000 = 540\,000$ €.
:::

## Kostenträgerrechnung und Kalkulation

Die Kostenträgerrechnung fragt: **Wofür** sind die Kosten entstanden? Kostenträger sind die Produkte oder Dienstleistungen. Mit der **Kalkulation** ermittelt man die Kosten pro Stück und den Verkaufspreis.

### Divisionskalkulation

Stellt ein Unternehmen nur **ein** Produkt her (z. B. ein Kraftwerk Strom), werden die Gesamtkosten einfach durch die Menge dividiert:

$$
\text{Stückkosten} = \frac{\text{Gesamtkosten}}{\text{Menge}}
$$

### Zuschlagskalkulation

Bei mehreren Produkten werden die Einzelkosten direkt zugerechnet und die Gemeinkosten mit den Zuschlagssätzen aus dem BAB aufgeschlagen:

:::tip[Beispiel: Kalkulation eines Gehäuses]
| Position                                             | Betrag      |
| ---------------------------------------------------- | ----------- |
| Fertigungsmaterial (Einzelkosten)                    | 40,00 €     |
| + Materialgemeinkosten 20 %                          | 8,00 €      |
| **= Materialkosten**                                 | **48,00 €** |
| Fertigungslöhne (Einzelkosten)                       | 30,00 €     |
| + Fertigungsgemeinkosten 100 %                       | 30,00 €     |
| **= Fertigungskosten**                               | **60,00 €** |
| **Herstellkosten** (Material + Fertigung)            | **108,00 €** |
| + Verwaltungs- und Vertriebsgemeinkosten 9,3 %       | 10,04 €     |
| **= Selbstkosten**                                   | **118,04 €** |
| + Gewinnaufschlag 15 %                               | 17,71 €     |
| **= Nettoverkaufspreis**                             | **135,75 €** |
| + 20 % Umsatzsteuer                                  | 27,15 €     |
| **= Bruttoverkaufspreis**                            | **162,90 €** |
:::

Im Handel verwendet man statt der Gemeinkostenzuschläge oft einen einzigen **Aufschlag** auf den Einstandspreis (Handelsspanne).

## Deckungsbeitragsrechnung

Die Vollkostenrechnung verteilt alle Kosten auf die Produkte. Für kurzfristige Entscheidungen ist das aber oft irreführend, weil Fixkosten ohnehin anfallen. Die **Deckungsbeitragsrechnung** (Teilkostenrechnung) betrachtet deshalb nur die variablen Kosten:

$$
\text{Deckungsbeitrag pro Stück} = \text{Preis} - \text{variable Kosten pro Stück}
$$

$$
\text{Betriebserfolg} = \text{Summe der Deckungsbeiträge} - \text{Fixkosten}
$$

Der Deckungsbeitrag gibt an, wie viel jedes verkaufte Stück zur **Deckung der Fixkosten** und zum Gewinn beiträgt.

### Entscheidungen mit dem Deckungsbeitrag

- Ein **Zusatzauftrag** lohnt sich kurzfristig, wenn der Preis über den variablen Kosten liegt (positiver Deckungsbeitrag), sofern freie Kapazitäten vorhanden sind – auch wenn der Preis unter den Vollkosten liegt.
- Die **Preisuntergrenze** liegt kurzfristig bei den variablen Kosten, langfristig bei den Selbstkosten.
- Bei einem Engpass sollte man jene Produkte bevorzugen, die den höchsten Deckungsbeitrag **pro Engpasseinheit** (z. B. pro Maschinenstunde) erzielen.

## Break-Even-Analyse

Der **Break-Even-Point** (Gewinnschwelle) ist jene Menge, bei der die Erlöse genau die Kosten decken – der Gewinn ist null:

$$
p \cdot x = K_f + k_v \cdot x \quad\Rightarrow\quad x_{\text{BEP}} = \frac{K_f}{p - k_v} = \frac{\text{Fixkosten}}{\text{Deckungsbeitrag pro Stück}}
$$

:::tip[Beispiel]
Ein Start-up verkauft ein IoT-Sensormodul um 80 €. Die variablen Kosten betragen 30 € pro Stück, die Fixkosten 150.000 € pro Jahr.

$$
x_{\text{BEP}} = \frac{150\,000}{80 - 30} = 3\,000\ \text{Stück}
$$

Ab dem 3.001. verkauften Modul macht das Start-up Gewinn. Bei 5.000 Stück beträgt er $5\,000 \cdot 50 - 150\,000 = 100\,000$ €.
:::

Grafisch ist der Break-Even-Point der Schnittpunkt der Erlösgeraden $E(x) = p \cdot x$ mit der Kostengeraden $K(x) = K_f + k_v \cdot x$ (siehe [lineare Funktionen](/de/mathematics/functions/linear-functions/)).
