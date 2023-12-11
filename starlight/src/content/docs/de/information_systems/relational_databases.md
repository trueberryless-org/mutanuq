---
title: Relationale Datenbanken
sidebar:
    order: 1
---

Relationale Datenbanken bilden das Rückgrat vieler moderner Informationssysteme und Anwendungen. Ihr Konzept basiert auf der Organisation von Daten in tabellenähnlichen Strukturen, in denen Beziehungen zwischen verschiedenen Datensätzen durch Schlüssel definiert werden. Diese Struktur ermöglicht eine effiziente Verwaltung und Abfrage von Daten. In diesem Kontext spielen Vorteile wie hohe Datenkonsistenz, Flexibilität und einfaches Datenmodell eine zentrale Rolle. Dennoch sind auch Herausforderungen und Nachteile zu berücksichtigen, darunter Skalierbarkeitsprobleme und Einschränkungen bei der Handhabung von komplexen Datenstrukturen.

## Vorteile

-   **Einfaches Datenmodell**  
    Dem relationalen Datenbankmodell liegt ein vergleichsweise einfach umsetzbares Datenmodell zugrunde. Informationen wie Kundendaten, Bestelllisten oder Kontobewegungen, die Unternehmen langfristig speichern wollen, lassen sich mit der Tabellenstruktur, die dem relationalen Datenbankmodell zugrunde liegt, ideal abbilden.

-   **Geringe Datenredundanz**  
    Das relationale Datenbankmodell legt klare Vorschriften zur Vermeidung von Redundanz durch verschiedene [Normalformen](#normalisierung) fest. Bei konsequenter Umsetzung ermöglichen relationale Datenbanksysteme eine nahezu redundanzfreie Datenhaltung. Dies erleichtert insbesondere die Pflege und Wartung von Datenbeständen, da Änderungen lediglich an einer einzigen Stelle vorgenommen werden müssen.

-   **Hohe Datenkonsistenz**  
    Normalisierte relationale Datenbanken ermöglichen eine konsistente Datenhaltung und tragen somit zur Datenkonsistenz bei. Relationale Datenbanksysteme bieten auch Funktionen, um Integritätsbedingungen zu definieren und automatisch zu überprüfen. Transaktionen, die die Datenkonsistenz gefährden könnten, sind ausgeschlossen.

-   **Mengenorientierte Datenverarbeitung**  
    Das relationale Datenbanksystem basiert auf einer mengenorientierten Datenverarbeitung, bei der jede Entität in atomare Werte zerlegt wird. Dies ermöglicht die Verknüpfung verschiedener Entitäten über den Inhalt sowie komplexe Datenbankabfragen wie JOINs.

-   **Einheitliche Abfragesprache**  
    Für Abfragen relationaler Datenbanken hat sich die durch ein Gremium von ISO und IEC standardisierte Datenbanksprache SQL etabliert. Diese Standardisierung ermöglicht es, Anwendungen weitgehend unabhängig vom zugrunde liegenden Datenbank-Managementsystem zu entwickeln und auszuführen. Allerdings variiert der Support von SQL je nach DBMS nach wie vor erheblich.

## Nachteile

-   **Big Data**  
    Bei enormen Datenmengen zeigen sich die Grenzen relationaler Datenbanken, insbesondere in Bezug auf die Effizienz von [JOIN-Operationen](#join-operationen). In solchen Umgebungen, in denen Big Data verarbeitet wird, erweisen sich relationale Datenbanken aufgrund ihrer Performance-Belastung durch JOINs oft als weniger empfehlenswert.

-   **Tabellen nicht passend**  
    Das scheinbar einfache tabellenbasierte Datenmodell und die Verknüpfung von Daten in relationalen Datenbanksystemen können in bestimmten Kontexten als Herausforderung erscheinen. Insbesondere die starre Struktur zweidimensionaler Tabellen stößt an ihre Grenzen, wenn es um die Abbildung komplexer Datentypen wie in Multimedia-Anwendungen und Big-Data-Szenarien geht.

-   **Fehlende Hierarchie in den Datenbankstrukturen**  
    Ein zentrales Defizit relationaler Datenbanken im Vergleich zu Objektdatenbanken liegt in der fehlenden Möglichkeit, hierarchisch strukturierte Klassen in den Datenbankschemata umzusetzen. Die Unmöglichkeit, untergeordnete Entitäten mit den Eigenschaften ihrer übergeordneten Entitäten zu versehen, führt zu einer einheitlichen Hierarchieebene und schließt die Erstellung von Sub-Tupeln aus.

-   **Segmentierung der Daten und komplexe Abfragen**  
    Die fundamentale Praxis der Datensegmentierung durch Normalisierung in relationalen Datenbanksystemen kann zu einer fragmentierten Datenhaltung führen. Das Zusammenführen von thematisch zusammenhängenden Daten gestaltet sich schwieriger, was zu komplexen Abfragen über mehrere Tabellen und damit zu einer potenziellen Beeinträchtigung der Performance auf der Anwendungsebene führen kann.

## Konzepte

### Entitäten

### Relationen

### Schlüssel

### JOIN-Operationen

### ACID-Transaktionen

Transaktionen sind mehrere Operationen, welche so zu einer Einheit verbunden sind, dass entweder alle oder gar kein Schritt ausgeführt wird. Sprich, Transaktionen sind atomar. Dies wird beim ACID-Transaktionsmodell (Akronym) erneuert ersichtlich:

-   **A**tomar  
    Transaktionen sind nicht aufspaltbar.

-   **C**onsistent  
    Relationale Datenbanken haben eine hohe Datenkonsistenz (_Strong Consistency_). Das bedeutet, dass zu jedem Zeitpunkt alle Daten richtig sein müssen. [_Eventual Consistency_](./document_orientated_databases/#base-transaktionen) bedeutet, dass die Datenrichtigkeit irgendwann gegeben sein wird (nicht zwingendermaßen jetzt sofort).

    Bei SQL-Datenbanken wird diese hohe Datenkonsistenz mittels Constraints (`NOT NULL`, `PRIMARY KEY` / `FOREIGN KEY`, `UNIQUE`, `CHECK`, `DEFAULT`) gewährleistet.

-   **I**solated  
    Sobald eine Transaktion Daten bearbeitet, werden diese Daten gesperrt, damit keine anderen Transaktionen die Daten überschreiben können.

-   **D**urable  
    Die Daten werden selbst bei einem Ausfall gespeichert. Somit werden die Ergebnisse im Rahmen einer Transaktion sogar bei Ausfallzeiten fortlaufend geliefert.

#### Isolation verbessern

Die Datensperre bei jeder Transaktion ist ein kritischer Punkt bei Datenbanken, denn man möchte so viele Anfragen wie möglich pro Sekunde entgegen nehmen können. Aus diesem Grund wurden Techniken entwickelt, um die Isolation zu verbessern und somit Transaktionssperren zu verschnellern.

##### mehrere Server

Eine einfache Möglichkeit, mehr Transaktionen entgegennehmen zu können, ist die Aufteilung der Entitäten auf verschiedene Server. Beispielsweise kann man alle Benutzernamen, dessen Anfangsbuchstabe zwischen _A_ und _C_ liegt, auf einem Server und alle _D_ bis _F_ Benutzernamen auf einem weiteren Server speichern.

##### MVCC

**Multiversion Concurrency Control** schlägt vor, bei Daten, welche sich selten ändern, eine zusätzliche Spalte mit einer inkrementierenden Version der Entität zu speichern. Bevor eine Transaktion die aktualisierten Werte in die Datenbank zurückspeichert, muss überprüft werden, ob die Versionsnummern übereinstimmen. Erst wenn dies zutrifft, sind während der Operationen keine anderen Änderungen geschehen und der Datensatz kann mit einer erhöhten Versionsnummer gespeichert werden.

Dieses Verfahren ist schneller als die Sperre (_Lock_) des Datensatzes, da Locks teuer sind, sprich viel Rechenzeit in Anspruch nehmen.

## Normalisierung

Verschiedene Stufen der Normalisierung sorgen für eine geringe Datenredundanz, sodass keine Daten doppelt gespeichert werden müssen. Ab Normalform 3 gelten Datenbanken als gut normalisiert.

### 1. Normalform (1NF)

### 2. Normalform (2NF)

### 3. Normalform (3NF)

### Boyce-Codd-Normalform (BCNF)

### 4. Normalform (4NF)

### 5. Normalform (5NF)

## Realisierungen

### Oracle

### MySQL

### Microsoft SQL Server

### PostgreSQL

### SQLite

### MariaDB
