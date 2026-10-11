---
title: Übungen
description: Schritt-für-Schritt-Übungen zum Aufbau einer vollständigen Windows-Domäne mit zwei Domänencontrollern, DNS, DHCP, Dateiserver, Gruppenrichtlinien und Automatisierung.
sidebar:
  order: 9
---

Die folgenden Übungen bauen aufeinander auf und ergeben am Ende eine vollständige kleine Unternehmensumgebung, wie sie in den Laborübungen der HTL typischerweise aufgebaut wird. Du brauchst dafür einen Rechner mit Hyper-V, VirtualBox oder VMware und etwa 16 GB Arbeitsspeicher.

![Übungsnetz mit zwei Domänencontrollern, Dateiserver und Client](/images/deployment/lab_network_de.svg)

:::tip[Vor dem Start]
Lege nach jeder abgeschlossenen Übung einen **Snapshot** (Prüfpunkt) aller VMs an. So kannst du bei einem Fehler zum letzten funktionierenden Stand zurückkehren. Dokumentiere Kennwörter und IP-Adressen in einer eigenen Tabelle.
:::

## Übung 1: Virtuelles Netz vorbereiten

1. Lege in deiner Virtualisierungssoftware ein internes bzw. privates Netz an, etwa einen internen Switch „LAN-Wien“.
2. Erstelle eine VM „GW“ als Router, etwa mit pfSense, OPNsense oder einem Linux-Server, mit einem Adapter ins Internet und einem ins interne Netz (192.168.10.1/24).
3. Erstelle drei VMs mit Windows Server (DC01, DC02, FS01) und eine VM mit Windows 11 (CL01), alle im internen Netz.

**Kontrolle:** Alle VMs starten, GW ist aus dem internen Netz per `ping 192.168.10.1` erreichbar.

## Übung 2: Grundkonfiguration

Führe auf DC01, DC02 und FS01 die [Grundkonfiguration](/de/deployment/windows_server/installation/#grundkonfiguration) durch:

| Server | IP-Adresse    | Gateway      | DNS-Server                |
| ------ | ------------- | ------------ | ------------------------- |
| DC01   | 192.168.10.10 | 192.168.10.1 | 127.0.0.1 (vorerst)       |
| DC02   | 192.168.10.11 | 192.168.10.1 | 192.168.10.10             |
| FS01   | 192.168.10.20 | 192.168.10.1 | 192.168.10.10, 192.168.10.11 |

**Kontrolle:** `Get-NetIPConfiguration` zeigt die richtigen Werte, die Server erreichen sich gegenseitig per Ping. Beachte, dass die Windows-Firewall Pings standardmäßig blockiert, bis die Regel „Datei- und Druckerfreigabe (Echoanforderung - ICMPv4 eingehend)“ aktiviert ist.

## Übung 3: Domäne erstellen

1. Installiere auf DC01 die Rolle AD DS und erstelle die Gesamtstruktur `corp.example.com` (siehe [Active Directory](/de/deployment/windows_server/active_directory/#domäne-einrichten)).
2. Stufe DC02 zum zusätzlichen Domänencontroller herauf.
3. Trage auf beiden DCs zuerst den jeweils anderen DC und dann sich selbst als DNS-Server ein.
4. Richte auf DC01 eine Weiterleitung auf den DNS-Server deines Routers oder einen öffentlichen DNS-Server ein.

**Kontrolle:**

```powershell
Get-ADDomainController -Filter * | Select-Object Name, IPv4Address, IsGlobalCatalog
repadmin /replsummary
Resolve-DnsName -Type SRV _ldap._tcp.dc._msdcs.corp.example.com
Resolve-DnsName www.example.com
```

## Übung 4: Reverse-Lookupzone und DNS-Einträge

1. Lege eine AD-integrierte Reverse-Lookupzone für `192.168.10.0/24` an.
2. Lege für FS01 einen A-Eintrag mit PTR an, falls er nicht automatisch registriert wurde.
3. Lege einen CNAME `daten.corp.example.com` an, der auf FS01 zeigt.

**Kontrolle:** `Resolve-DnsName 192.168.10.20` liefert `fs01.corp.example.com`, `Resolve-DnsName daten.corp.example.com` liefert die Adresse von FS01.

## Übung 5: DHCP mit Failover

1. Installiere die DHCP-Rolle auf DC01 und DC02 und autorisiere beide im AD.
2. Lege auf DC01 den Bereich 192.168.10.100 bis 192.168.10.200 mit den Optionen Router, DNS-Server und DNS-Domänenname an.
3. Schließe 192.168.10.100 bis 192.168.10.109 für Drucker aus.
4. Richte das Failover mit Lastenausgleich zu DC02 ein.

**Kontrolle:** CL01 erhält mit `ipconfig /renew` eine Adresse aus dem Bereich. Fahre DC01 herunter und prüfe, ob CL01 weiterhin eine Adresse bekommt.

## Übung 6: Struktur, Benutzer und Gruppen

1. Lege folgende OU-Struktur an: `Wien` mit den Unter-OUs `Benutzer`, `Computer` und `Gruppen`.
2. Lege mit einem [PowerShell-Skript](/de/deployment/windows_server/powershell/#beispiel-benutzer-aus-einer-csv-datei-anlegen) mindestens zehn Benutzer aus einer CSV-Datei an, verteilt auf die Abteilungen Vertrieb und Technik.
3. Lege die globalen Gruppen `GG_Vertrieb` und `GG_Technik` an und füge die Benutzer passend hinzu.
4. Nimm CL01 in die Domäne auf und verschiebe das Computerkonto in die OU `Computer`.

**Kontrolle:** Du kannst dich mit einem der neuen Benutzer an CL01 anmelden und musst dabei das Kennwort ändern.

## Übung 7: Dateiserver nach AGDLP

1. Nimm FS01 in die Domäne auf und lege auf einem zweiten Datenträger `D:` die Ordner `Vertrieb`, `Technik` und `Alle` an.
2. Lege die domänenlokalen Gruppen `DL_Vertrieb_Ändern`, `DL_Vertrieb_Lesen`, `DL_Technik_Ändern` und `DL_Alle_Ändern` an und nimm die globalen Gruppen passend auf. Die Technik soll im Vertriebsordner nur lesen dürfen.
3. Gib die Ordner frei, setze die NTFS-Berechtigungen und aktiviere die zugriffsbasierte Aufzählung.
4. Richte für jeden Benutzer einen Basisordner `\\fs01\Home$\%username%` mit einem Kontingent von 2 GB ein.

**Kontrolle:** Ein Benutzer aus der Technik kann im Vertriebsordner Dateien öffnen, aber nicht speichern. Den Ordner `Technik` sieht ein Benutzer aus dem Vertrieb gar nicht.

## Übung 8: Gruppenrichtlinien

Erstelle und verknüpfe GPOs, die Folgendes bewirken:

1. Alle Benutzer in `Wien` erhalten das Laufwerk `S:` auf ihren Abteilungsordner (Zielgruppenadressierung nach Gruppe) und `P:` auf `\\fs01\Alle`.
2. Der Bildschirm wird nach 10 Minuten Inaktivität gesperrt.
3. Auf allen Computern in `Wien\Computer` ist der Zugriff auf USB-Speicher gesperrt.
4. Die Domäne verlangt Kennwörter mit mindestens 12 Zeichen, und Konten werden nach 10 Fehlversuchen für 15 Minuten gesperrt.

**Kontrolle:** Nach `gpupdate /force` und einer neuen Anmeldung zeigt `gpresult /r` die GPOs an, und die Laufwerke sind verbunden.

## Übung 9: Automatisierung

Schreibe ein PowerShell-Skript, das

1. alle Benutzer auflistet, die sich seit 30 Tagen nicht angemeldet haben,
2. diese Konten deaktiviert und in eine OU `Deaktiviert` verschiebt,
3. eine CSV-Datei mit den betroffenen Konten und dem Datum erstellt.

Teste das Skript zuerst mit `-WhatIf` und richte es anschließend als wöchentliche geplante Aufgabe ein.

## Übung 10: Ausfall simulieren

1. Fahre DC01 herunter.
2. Prüfe, ob sich Benutzer weiterhin an CL01 anmelden können, ob DNS-Namen aufgelöst werden und ob der Client eine DHCP-Adresse erhält.
3. Finde heraus, welche FSMO-Rollen auf DC01 liegen, und überlege, was passieren würde, wenn DC01 dauerhaft ausfällt. Recherchiere, wie man die Rollen mit `Move-ADDirectoryServerOperationMasterRole` auf DC02 überträgt.

Diese Übung zeigt, warum Dienste wie AD DS, DNS und DHCP immer redundant betrieben werden (siehe [Hochverfügbarkeit](/de/deployment/operations/high_availability/)).
