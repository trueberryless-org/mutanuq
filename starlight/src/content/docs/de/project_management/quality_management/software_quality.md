---
title: Softwarequalität
description: Qualitätsmerkmale von Software nach ISO/IEC 25010, Maßnahmen zur Qualitätssicherung wie Reviews, statische Analyse und Tests sowie Teststufen und Definition of Done.
sidebar:
  order: 3
---

Software hat besondere Eigenschaften: Sie nutzt sich nicht ab, aber sie enthält Fehler, die oft erst unter bestimmten Bedingungen sichtbar werden. Qualitätsmanagement in IT-Projekten muss daher früh ansetzen und die gesamte Entwicklung begleiten.

## Qualitätsmerkmale nach ISO/IEC 25010

Die Norm ISO/IEC 25010 beschreibt, welche Merkmale die Qualität eines Softwareprodukts ausmachen. In der aktuellen Fassung von 2023 sind das:

| Merkmal                   | Frage                                                                    |
| ------------------------- | ------------------------------------------------------------------------ |
| funktionale Eignung       | Erfüllt die Software die geforderten Funktionen vollständig und korrekt? |
| Leistungseffizienz        | Wie schnell ist sie, und wie viele Ressourcen braucht sie?               |
| Kompatibilität            | Arbeitet sie mit anderen Systemen zusammen?                              |
| Interaktionsfähigkeit     | Ist sie leicht erlernbar, bedienbar und barrierefrei?                    |
| Zuverlässigkeit           | Läuft sie stabil, und erholt sie sich von Fehlern?                       |
| Sicherheit (Security)     | Schützt sie Daten vor unberechtigtem Zugriff?                            |
| Wartbarkeit               | Lässt sie sich leicht verstehen, ändern und testen?                      |
| Flexibilität              | Lässt sie sich an neue Umgebungen anpassen und installieren?             |
| Betriebssicherheit (Safety) | Vermeidet sie Gefahren für Menschen und Umwelt?                        |

In der älteren Fassung von 2011 hießen Interaktionsfähigkeit und Flexibilität noch Benutzbarkeit und Übertragbarkeit, und das Merkmal Betriebssicherheit fehlte.

Nicht alle Merkmale sind in jedem Projekt gleich wichtig. Für eine Banking-App ist Sicherheit entscheidend, für ein internes Werkzeug vielleicht vor allem die Wartbarkeit. Die wichtigsten Merkmale sollten deshalb schon in den Anforderungen festgelegt und messbar formuliert werden, etwa „95 % aller Seitenaufrufe werden in unter einer Sekunde beantwortet“.

## Maßnahmen zur Qualitätssicherung

### Konstruktive Maßnahmen

Konstruktive Maßnahmen verhindern Fehler von vornherein:

- klare Anforderungen und Akzeptanzkriterien
- Programmierrichtlinien und einheitliche Formatierung
- bewährte Architekturen und [Entwurfsmuster](/de/software-development/design-patterns/)
- Schulungen und Pair Programming

### Analytische Maßnahmen

Analytische Maßnahmen finden Fehler, die trotzdem entstanden sind:

- **Reviews:** Andere Personen lesen Code oder Dokumente und suchen nach Fehlern. In vielen Teams muss jede Änderung per Pull Request von mindestens einer weiteren Person freigegeben werden.
- **Statische Analyse:** Werkzeuge wie Linter oder SonarQube untersuchen den Code, ohne ihn auszuführen, und finden typische Fehler, Sicherheitslücken und schlechte Strukturen (siehe [Softwaremetriken](/de/software-development/software-metrics/)).
- **Dynamische Tests:** Die Software wird ausgeführt und ihr Verhalten mit dem erwarteten Verhalten verglichen.

## Teststufen

| Teststufe          | Was wird getestet?                                        | Wer testet?                  |
| ------------------ | --------------------------------------------------------- | ---------------------------- |
| Unit-Test          | einzelne Funktionen oder Klassen, isoliert                | Entwicklerinnen und Entwickler, automatisiert |
| Integrationstest   | Zusammenspiel mehrerer Komponenten, etwa API und Datenbank | Entwicklungsteam, automatisiert |
| Systemtest         | das gesamte System gegen die Anforderungen                | Testteam                     |
| Abnahmetest        | Erfüllt das System die Anforderungen des Auftraggebers?   | Auftraggeber, Nutzerinnen und Nutzer |

Daneben gibt es Testarten, die quer zu den Stufen liegen, etwa Lasttests, Sicherheitstests (Penetrationstests), Usability-Tests und Regressionstests. Regressionstests prüfen, ob nach einer Änderung noch alles funktioniert, was vorher funktioniert hat. Sie werden deshalb möglichst automatisiert.

## Continuous Integration

Bei **Continuous Integration** (CI) wird jede Änderung am Code automatisch gebaut und getestet, etwa mit GitHub Actions, GitLab CI oder Azure Pipelines. Schlägt ein Test fehl, wird die Änderung nicht übernommen. So fallen Fehler auf, kurz nachdem sie entstanden sind, und die Kosten für ihre Behebung bleiben gering.

## Definition of Done

Die **Definition of Done** legt fest, wann eine Aufgabe wirklich fertig ist. Ein Beispiel:

- Der Code ist geschrieben und von einer weiteren Person reviewt.
- Alle Unit-Tests laufen erfolgreich, die Testabdeckung sinkt nicht.
- Die Akzeptanzkriterien sind erfüllt und getestet.
- Die Dokumentation ist aktualisiert.
- Die Änderung ist auf der Testumgebung installiert.

Eine gemeinsame Definition of Done verhindert, dass „fertig“ für jede Person etwas anderes bedeutet.
