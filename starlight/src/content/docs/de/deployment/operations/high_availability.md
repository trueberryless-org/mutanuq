---
title: Hochverfügbarkeit
description: Verfügbarkeit berechnen, Single Points of Failure vermeiden, RTO und RPO, Failover-Cluster, Lastverteilung, unterbrechungsfreie Stromversorgung und georedundante Rechenzentren.
sidebar:
  order: 2
---

Fällt der Mailserver, das ERP-System oder der Webshop aus, steht in vielen Unternehmen die Arbeit still. **Hochverfügbarkeit** bedeutet, Systeme so aufzubauen, dass sie trotz Ausfällen einzelner Komponenten weiterlaufen oder in kürzester Zeit wieder verfügbar sind.

## Verfügbarkeit

Die **Verfügbarkeit** ist der Anteil der Zeit, in der ein System wie vorgesehen funktioniert:

$$
\text{Verfügbarkeit} = \frac{\text{Gesamtzeit} - \text{Ausfallzeit}}{\text{Gesamtzeit}}
$$

Schon kleine Unterschiede in Prozent bedeuten große Unterschiede bei der erlaubten Ausfallzeit:

| Verfügbarkeit | Ausfallzeit pro Jahr | Ausfallzeit pro Monat |
| ------------- | -------------------- | --------------------- |
| 99 %          | 3,65 Tage            | etwa 7,3 Stunden      |
| 99,9 %        | 8,76 Stunden         | etwa 44 Minuten       |
| 99,99 %       | 52,6 Minuten         | etwa 4,4 Minuten      |
| 99,999 %      | 5,26 Minuten         | etwa 26 Sekunden      |

Diese Werte werden in **Service Level Agreements** (SLAs) mit Dienstleistern vereinbart. Man spricht von „drei Neunen“ bei 99,9 % oder „fünf Neunen“ bei 99,999 %.

### Serien- und Parallelschaltung

Hängt ein Dienst von mehreren Komponenten ab, die **alle** funktionieren müssen, multiplizieren sich ihre Verfügbarkeiten. Ein Webshop mit Webserver (99,9 %), Datenbank (99,9 %) und Internetanbindung (99,5 %) ist nur zu $0{,}999 \cdot 0{,}999 \cdot 0{,}995 \approx 99{,}3\,\%$ verfügbar.

Sind dagegen zwei gleichwertige Komponenten parallel vorhanden und reicht eine davon aus, fällt der Dienst nur aus, wenn **beide** ausfallen. Bei zwei Servern mit je 99 % Verfügbarkeit ergibt sich $1 - 0{,}01 \cdot 0{,}01 = 99{,}99\,\%$.

## Single Point of Failure

Ein **Single Point of Failure** (SPOF) ist eine Komponente, deren Ausfall das gesamte System lahmlegt. Um Hochverfügbarkeit zu erreichen, muss jeder SPOF gefunden und beseitigt werden:

| Komponente           | Maßnahme                                                     |
| -------------------- | ------------------------------------------------------------ |
| Festplatte           | RAID                                                         |
| Netzteil             | redundante Netzteile an getrennten Stromkreisen              |
| Stromversorgung      | USV und Notstromaggregat                                     |
| Netzwerkkarte, Switch | mehrere Anschlüsse an verschiedenen Switches               |
| Server               | Cluster oder mehrere Server mit Lastverteilung               |
| Domänencontroller, DNS, DHCP | mindestens zwei Server                               |
| Internetanbindung    | zwei Leitungen von verschiedenen Providern                   |
| Rechenzentrum        | zweites Rechenzentrum an einem anderen Ort                   |
| Person               | Dokumentation und Vertretungsregelung                        |

## RTO und RPO

Für jeden Dienst wird festgelegt, wie schnell er nach einem Ausfall wieder laufen muss und wie viele Daten verloren gehen dürfen:

- Die **Recovery Time Objective** (RTO) ist die maximal tolerierbare Ausfallzeit, etwa 4 Stunden für das ERP-System.
- Die **Recovery Point Objective** (RPO) ist der maximal tolerierbare Datenverlust, gemessen als Zeitraum. Eine RPO von 24 Stunden erlaubt tägliche Sicherungen, eine RPO von wenigen Minuten erfordert laufende Replikation.

Je kleiner RTO und RPO, desto teurer die Lösung.

## Failover-Cluster

Ein **Failover-Cluster** besteht aus mehreren Servern (Knoten), die gemeinsam einen Dienst bereitstellen. Fällt ein Knoten aus, übernimmt automatisch ein anderer. Für die Clients sieht der Cluster wie ein einzelner Server mit gleichbleibendem Namen und gleichbleibender IP-Adresse aus.

Unter Windows Server stellt das Feature **Failoverclustering** diese Funktion bereit. Typische Anwendungen sind hochverfügbare virtuelle Maschinen mit Hyper-V, Dateiserver und SQL Server. Wichtige Begriffe:

- **Gemeinsamer Speicher:** Alle Knoten greifen auf denselben Speicher zu, etwa ein SAN oder Storage Spaces Direct, damit der übernehmende Knoten die Daten sofort hat.
- **Heartbeat:** Die Knoten prüfen laufend, ob die anderen noch erreichbar sind.
- **Quorum:** Damit bei einer Netzwerkstörung nicht zwei Hälften des Clusters gleichzeitig weiterarbeiten (_Split Brain_), darf nur der Teil weiterlaufen, der die Mehrheit der Stimmen hat. Bei einer geraden Anzahl von Knoten entscheidet ein zusätzlicher **Zeuge**, etwa eine Dateifreigabe oder ein Cloud-Speicher.

Man unterscheidet **Aktiv-Passiv-Cluster**, bei denen ein Knoten arbeitet und der andere bereitsteht, und **Aktiv-Aktiv-Cluster**, bei denen alle Knoten gleichzeitig arbeiten.

## Lastverteilung

Bei der **Lastverteilung** (_Load Balancing_) verteilt ein Load Balancer die Anfragen auf mehrere gleichwertige Server, etwa nach dem Round-Robin-Verfahren oder an den am wenigsten ausgelasteten Server. Fällt ein Server aus, erkennt der Load Balancer das über Zustandsprüfungen (_Health Checks_) und schickt keine Anfragen mehr dorthin. Load Balancing eignet sich besonders für Webserver und Anwendungen, die keinen Zustand auf dem Server speichern. Bekannte Lösungen sind HAProxy, nginx, F5 und die Load Balancer der Cloud-Anbieter.

## Unterbrechungsfreie Stromversorgung

Eine **USV** (_Uninterruptible Power Supply_, UPS) überbrückt Stromausfälle mit Akkus und schützt vor Spannungsschwankungen:

| Typ                          | Funktionsweise                                                               |
| ---------------------------- | ---------------------------------------------------------------------------- |
| Offline (VFD)                | Die Last hängt direkt am Netz, bei Ausfall wird in wenigen Millisekunden auf Akku umgeschaltet. |
| Line-Interactive (VI)        | wie Offline, gleicht aber zusätzlich Spannungsschwankungen aus               |
| Online bzw. Doppelwandler (VFI) | Die Last wird ständig über den Wechselrichter aus dem Akkukreis versorgt, keine Umschaltzeit, bester Schutz |

Die Akkulaufzeit reicht meist nur für wenige Minuten. In dieser Zeit übernimmt ein Notstromaggregat, oder die Server werden über eine Software der USV geordnet heruntergefahren.

## Georedundanz

Gegen Katastrophen wie Brand, Hochwasser oder großflächige Stromausfälle hilft nur ein zweiter Standort. Daten werden dorthin repliziert, und im Katastrophenfall wird der Betrieb nach einem vorbereiteten **Notfallplan** (_Disaster Recovery Plan_) am zweiten Standort fortgesetzt. Der Notfallplan muss regelmäßig geübt werden.
