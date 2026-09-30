---
title: Dateidienste
description: Freigaben über SMB, Freigabe- und NTFS-Berechtigungen, effektive Berechtigungen, zugriffsbasierte Aufzählung, Basisordner, DFS-Namespaces und -Replikation, Kontingente und Schattenkopien.
sidebar:
  order: 7
---

Ein **Dateiserver** stellt Ordner im Netzwerk bereit, auf die Benutzer gemeinsam zugreifen. Dabei muss genau geregelt sein, wer welche Dateien lesen, ändern oder löschen darf. Windows verwendet dafür zwei Arten von Berechtigungen, die zusammenwirken.

## Freigaben

Eine **Freigabe** macht einen Ordner über das Netzwerk erreichbar. Windows verwendet dafür das Protokoll **SMB** (Server Message Block) über TCP-Port 445. Der Zugriff erfolgt über einen UNC-Pfad der Form `\\Server\Freigabe`, etwa `\\fs01\Vertrieb`.

Eine Freigabe, deren Name mit `$` endet, etwa `Daten$`, ist **versteckt**: Sie wird beim Durchsuchen des Servers nicht angezeigt, ist aber für berechtigte Personen erreichbar. Windows legt automatisch administrative Freigaben wie `C$` und `ADMIN$` an.

## Berechtigungen

### Freigabeberechtigungen

Freigabeberechtigungen gelten nur beim Zugriff über das Netzwerk und kennen drei Stufen: **Lesen**, **Ändern** und **Vollzugriff**.

### NTFS-Berechtigungen

NTFS-Berechtigungen gelten für jeden Zugriff, lokal und über das Netzwerk, und sind viel feiner einstellbar:

| Berechtigung          | erlaubt                                                          |
| --------------------- | ---------------------------------------------------------------- |
| Vollzugriff           | alles, auch Berechtigungen ändern und Besitz übernehmen          |
| Ändern                | Lesen, Schreiben, Ausführen und Löschen                          |
| Lesen, Ausführen      | Inhalte anzeigen und Programme starten                           |
| Ordnerinhalt anzeigen | Dateien in einem Ordner auflisten                                |
| Lesen                 | Dateien öffnen und Attribute lesen                               |
| Schreiben             | neue Dateien anlegen und bestehende ändern, aber nicht löschen   |

NTFS-Berechtigungen werden standardmäßig von übergeordneten Ordnern **vererbt**. Die Vererbung kann an einem Ordner unterbrochen werden, um dort eigene Berechtigungen festzulegen.

### Effektive Berechtigungen

- Berechtigungen aus mehreren Gruppen addieren sich. Ist ein Benutzer in einer Gruppe mit „Lesen“ und in einer mit „Ändern“, darf er ändern.
- Ein ausdrückliches **Verweigern** hat Vorrang vor einem Zulassen. Verweigern sollte daher sparsam eingesetzt werden.
- Beim Zugriff über das Netzwerk gilt die **restriktivere** der beiden Berechtigungen, Freigabe oder NTFS.

In der Praxis wird die Freigabeberechtigung daher meist großzügig gesetzt, etwa „Vollzugriff“ für authentifizierte Benutzer, und die eigentliche Steuerung erfolgt nur über NTFS. So muss man nur an einer Stelle nachsehen.

Berechtigungen werden nach dem [AGDLP-Prinzip](/de/deployment/windows_server/active_directory/#agdlp-prinzip) über domänenlokale Gruppen vergeben, nie direkt an einzelne Benutzer.

## Freigabe einrichten mit PowerShell

```powershell
# Ordner anlegen
New-Item -Path "D:\Freigaben\Vertrieb" -ItemType Directory

# Freigabe erstellen, Steuerung über NTFS
New-SmbShare -Name "Vertrieb" -Path "D:\Freigaben\Vertrieb" `
    -FullAccess "CORP\Domänen-Benutzer" -FolderEnumerationMode AccessBased

# NTFS: Vererbung entfernen, Berechtigungen setzen
icacls "D:\Freigaben\Vertrieb" /inheritance:r
icacls "D:\Freigaben\Vertrieb" /grant "CORP\Domänen-Admins:(OI)(CI)F"
icacls "D:\Freigaben\Vertrieb" /grant "SYSTEM:(OI)(CI)F"
icacls "D:\Freigaben\Vertrieb" /grant "CORP\DL_Vertrieb_Ändern:(OI)(CI)M"
icacls "D:\Freigaben\Vertrieb" /grant "CORP\DL_Vertrieb_Lesen:(OI)(CI)RX"

# Kontrolle
Get-SmbShareAccess -Name "Vertrieb"
icacls "D:\Freigaben\Vertrieb"
```

`(OI)(CI)` bedeutet, dass die Berechtigung an Dateien (_Object Inherit_) und Unterordner (_Container Inherit_) vererbt wird. `F`, `M` und `RX` stehen für Vollzugriff, Ändern und Lesen mit Ausführen. Die Namen vordefinierter Gruppen wie „Domänen-Benutzer“ hängen von der Sprache des Systems ab. Auf einem englischen Server heißen sie „Domain Users“ und „Domain Admins“.

## Zugriffsbasierte Aufzählung

Mit der **zugriffsbasierten Aufzählung** (_Access-Based Enumeration_) sehen Benutzer nur die Ordner und Dateien, auf die sie auch zugreifen dürfen. Das macht Freigaben übersichtlicher und verrät nicht, welche Projekte es in anderen Abteilungen gibt. Im Beispiel oben wird sie mit `-FolderEnumerationMode AccessBased` aktiviert.

## Basisordner

Jeder Benutzer kann einen persönlichen **Basisordner** (_Home Folder_) auf dem Dateiserver erhalten, der beim Anmelden automatisch als Laufwerk verbunden wird. Er wird im Benutzerkonto eingetragen, etwa als `\\fs01\Home$\%username%` mit dem Laufwerksbuchstaben `H:`. Windows legt den Ordner an und gibt dem Benutzer darauf automatisch Vollzugriff.

Mit der **Ordnerumleitung** per Gruppenrichtlinie lassen sich außerdem Ordner wie „Dokumente“ oder „Desktop“ auf den Server umleiten. So werden die Daten zentral gesichert, und Benutzer finden sie auf jedem PC.

## DFS

Das **Distributed File System** (DFS) besteht aus zwei Teilen:

- **DFS-Namespaces** fassen Freigaben von mehreren Servern unter einem einheitlichen Pfad zusammen, etwa `\\corp.example.com\Daten\Vertrieb`. Benutzer müssen nicht wissen, auf welchem Server die Daten tatsächlich liegen. Wird ein Server ersetzt, ändert sich nur das Ziel im Namespace, nicht der Pfad für die Benutzer.
- **DFS-Replikation** hält Ordner auf mehreren Servern synchron, etwa zwischen den Standorten Wien und Graz. Übertragen werden nur die geänderten Teile von Dateien.

```powershell
Install-WindowsFeature -Name FS-DFS-Namespace, FS-DFS-Replication -IncludeManagementTools

New-SmbShare -Name "Daten" -Path "D:\DFSRoots\Daten" -FullAccess "CORP\Domänen-Benutzer"
New-DfsnRoot -Path "\\corp.example.com\Daten" -TargetPath "\\fs01\Daten" -Type DomainV2
New-DfsnFolder -Path "\\corp.example.com\Daten\Vertrieb" -TargetPath "\\fs01\Vertrieb"
```

## Ressourcen-Manager für Dateiserver

Der **Ressourcen-Manager für Dateiserver** (FSRM) bietet zusätzliche Funktionen:

- **Kontingente** (_Quotas_) begrenzen den Speicherplatz pro Ordner, etwa 5 GB pro Basisordner. Harte Kontingente verhindern weiteres Speichern, weiche Kontingente senden nur eine Warnung.
- **Dateiprüfungen** (_File Screens_) verhindern das Speichern bestimmter Dateitypen, etwa von Videos oder ausführbaren Dateien.
- **Speicherberichte** zeigen etwa große, doppelte oder lange nicht verwendete Dateien.

```powershell
Install-WindowsFeature -Name FS-Resource-Manager -IncludeManagementTools
New-FsrmQuota -Path "D:\Home\anna.huber" -Size 5GB
```

## Schattenkopien

**Schattenkopien** (_Volume Shadow Copies_) erstellen zu festgelegten Zeiten Momentaufnahmen eines Volumes. Benutzer können über „Vorgängerversionen“ im Explorer selbst ältere Versionen von Dateien wiederherstellen, etwa nach einem versehentlichen Überschreiben. Schattenkopien liegen auf demselben Datenträger und ersetzen daher **keine** [Datensicherung](/de/deployment/security-strategies/).
