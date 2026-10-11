---
title: Qualitätswerkzeuge
description: Die sieben Qualitätswerkzeuge mit Fehlersammelliste, Pareto- und Ishikawa-Diagramm, die 5-Why-Methode, die FMEA mit Risikoprioritätszahl sowie Six Sigma.
sidebar:
  order: 2
---

Um Qualitätsprobleme zu erkennen, ihre Ursachen zu finden und Verbesserungen zu überprüfen, gibt es bewährte Werkzeuge. Viele davon sind einfach und können ohne spezielle Software eingesetzt werden.

## Die sieben Qualitätswerkzeuge

Die **Q7** (sieben elementare Qualitätswerkzeuge) stammen aus Japan und werden vor allem zur Analyse von Problemen eingesetzt.

### Fehlersammelliste

In einer **Fehlersammelliste** werden Fehler nach Art und Häufigkeit mit Strichen erfasst. Sie ist oft der erste Schritt, um Daten über ein Problem zu sammeln.

| Fehlerart                     | Mo  | Di  | Mi  | Do  | Fr  | Summe |
| ----------------------------- | --- | --- | --- | --- | --- | ----- |
| Passwort vergessen            | 12  | 9   | 11  | 8   | 10  | 50    |
| Drucker funktioniert nicht    | 4   | 6   | 3   | 5   | 2   | 20    |
| VPN-Verbindung bricht ab      | 3   | 2   | 4   | 3   | 3   | 15    |
| Software fehlt                | 2   | 1   | 2   | 3   | 2   | 10    |
| Sonstiges                     | 1   | 1   | 1   | 1   | 1   | 5     |

### Histogramm

Ein **Histogramm** stellt die Häufigkeitsverteilung von Messwerten als Säulen dar, etwa die Verteilung von Antwortzeiten eines Servers. Es zeigt, ob die Werte um einen Mittelwert streuen, ob es Ausreißer gibt und ob Grenzwerte überschritten werden.

### Paretodiagramm

Das **Paretodiagramm** ordnet Fehlerursachen nach ihrer Häufigkeit absteigend und zeigt zusätzlich den kumulierten Anteil. Es beruht auf dem **Pareto-Prinzip**: Oft verursachen etwa 20 % der Ursachen rund 80 % der Probleme. In der Fehlersammelliste oben machen die beiden häufigsten Fehlerarten zusammen 70 % aller Tickets aus. Ein Self-Service für das Zurücksetzen von Passwörtern hätte also die größte Wirkung.

### Ursache-Wirkungs-Diagramm

Das **Ursache-Wirkungs-Diagramm** (Ishikawa- oder Fischgrätendiagramm) sammelt mögliche Ursachen eines Problems geordnet nach Kategorien. Häufig werden die sechs M verwendet: Mensch, Maschine, Methode, Material, Messung und Mitwelt.

![Ishikawa-Diagramm zur Frage, warum eine Website langsam lädt](/images/project_management/ishikawa_de.svg)

### Korrelationsdiagramm

Das **Korrelationsdiagramm** (Streudiagramm) zeigt, ob zwei Größen zusammenhängen, etwa die Anzahl gleichzeitiger Nutzerinnen und Nutzer und die Antwortzeit. Ein Zusammenhang ist aber noch kein Beweis für eine Ursache.

### Qualitätsregelkarte

In einer **Qualitätsregelkarte** werden Messwerte im Zeitverlauf eingetragen, zusammen mit einer Mittellinie und oberen und unteren Eingriffsgrenzen. Liegt ein Wert außerhalb der Grenzen oder zeigt sich ein auffälliger Trend, muss eingegriffen werden. Monitoring-Dashboards für Server funktionieren nach demselben Prinzip.

### Flussdiagramm

Das **Flussdiagramm** stellt einen Prozess Schritt für Schritt dar. Es hilft, Abläufe zu verstehen, Schwachstellen zu finden und Verbesserungen zu planen. In manchen Darstellungen der Q7 wird stattdessen die Stratifikation genannt, bei der Daten nach Merkmalen wie Standort oder Schicht getrennt ausgewertet werden.

## 5-Why-Methode

Bei der **5-Why-Methode** wird so lange nach dem „Warum“ gefragt, bis die eigentliche Ursache gefunden ist, meist nach etwa fünf Fragen:

1. Warum war der Webshop nicht erreichbar? Weil der Server keinen Speicherplatz mehr hatte.
2. Warum hatte er keinen Speicherplatz mehr? Weil die Logdateien die Festplatte gefüllt haben.
3. Warum haben die Logdateien die Festplatte gefüllt? Weil sie nie gelöscht wurden.
4. Warum wurden sie nie gelöscht? Weil keine Logrotation eingerichtet war.
5. Warum war keine Logrotation eingerichtet? Weil es keine Checkliste für die Einrichtung neuer Server gibt.

Die eigentliche Ursache ist also nicht die volle Festplatte, sondern die fehlende Checkliste.

## FMEA

Die **Fehlermöglichkeits- und Einflussanalyse** (FMEA) untersucht vorbeugend, welche Fehler bei einem Produkt oder Prozess auftreten können. Für jeden möglichen Fehler werden drei Werte von 1 bis 10 vergeben:

- **B** für die Bedeutung (Schwere) der Auswirkung
- **A** für die Auftretenswahrscheinlichkeit
- **E** für die Entdeckungswahrscheinlichkeit, wobei 10 bedeutet, dass der Fehler kaum entdeckt wird

Das Produkt ist die **Risikoprioritätszahl** $RPZ = B \cdot A \cdot E$ mit Werten zwischen 1 und 1000. Fehler mit hoher RPZ werden zuerst behandelt. Neuere Fassungen der FMEA verwenden statt der RPZ eine Aufgabenpriorität, das Grundprinzip bleibt aber gleich.

| mögliche Fehler              | Folge                         | B | A | E | RPZ | Maßnahme                                  |
| ---------------------------- | ----------------------------- | - | - | - | --- | ----------------------------------------- |
| Backup läuft nicht durch     | Datenverlust im Ernstfall     | 9 | 3 | 7 | 189 | automatische Meldung, monatlicher Wiederherstellungstest |
| Zertifikat läuft ab          | Website nicht erreichbar      | 7 | 4 | 5 | 140 | automatische Erneuerung, Überwachung      |
| Tippfehler in der Konfiguration | Dienst startet nicht       | 6 | 5 | 2 | 60  | Konfiguration versionieren, Review        |

## Six Sigma

**Six Sigma** ist eine datengetriebene Methode zur Verbesserung von Prozessen. Das Ziel ist ein Prozess mit höchstens 3,4 Fehlern pro einer Million Möglichkeiten. Verbesserungsprojekte folgen dem **DMAIC**-Zyklus:

- **Define:** Problem und Ziel definieren
- **Measure:** den aktuellen Zustand messen
- **Analyze:** Ursachen analysieren
- **Improve:** Verbesserungen umsetzen
- **Control:** die Verbesserung dauerhaft absichern
