---
title: Dokumentenorientierte Datenbanken
sidebar:
    order: 2
---

## Vorteile

## Nachteile

## Konzepte

### Collections

### BASE-Transaktionen

Transaktionen sind mehrere Operationen, welche so zu einer Einheit verbunden sind, dass entweder alle oder gar kein Schritt ausgeführt wird. Sprich, Transaktionen sind atomar. Das Akronym BASE steht für folgende Eigenschaften bei dokumentenorientierte Datenbanken:

-   **B**asically **A**vailable  
    Die Daten sind jederzeit zugänglich und erreichbar.

-   **S**oft State  
    Es ist erlaubt, dass es Zustände im System geben kann, in welchem Daten falsch sind.

-   **E**ventual Consistency  
    Es wird garantiert, dass die Daten zu irgendeinem Zeitpunkt in der Zukunft richtig sein werden. Dies muss jedoch nicht jetzt sein. Das Gegenteil wäre _Strong Consistency_, wie es bei [relationalen Datenbanken](../relational_databases/) der Fall ist.

## Realisierungen

### MongoDB

### CouchDB
