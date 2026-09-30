---
title: Active Directory
description: Verzeichnisdienste und LDAP, Gesamtstruktur, Domänen und Organisationseinheiten, Domänencontroller, FSMO-Rollen, Standorte, Gruppen nach dem AGDLP-Prinzip und die Einrichtung einer Domäne mit PowerShell.
sidebar:
  order: 3
---

Ein **Verzeichnisdienst** speichert Informationen über Benutzer, Computer, Gruppen und andere Ressourcen in einem Netzwerk an zentraler Stelle. Statt auf jedem PC eigene Benutzerkonten anzulegen, melden sich alle mit demselben Konto an jedem Gerät der Domäne an. **Active Directory Domain Services** (AD DS) ist der Verzeichnisdienst von Microsoft und in fast allen Unternehmen im Einsatz.

## Grundlagen

Active Directory beruht auf mehreren offenen Standards:

- **LDAP** (Lightweight Directory Access Protocol, Port 389 bzw. 636 mit TLS) zum Lesen und Schreiben von Verzeichnisdaten
- **Kerberos** (Port 88) für die Authentifizierung mit Tickets, sodass das Kennwort nicht über das Netz übertragen wird
- **DNS** zum Auffinden der Domänencontroller (siehe [DNS](/de/deployment/windows_server/dns/))

Jedes Objekt im Verzeichnis hat einen eindeutigen Namen, den **Distinguished Name** (DN). Er beschreibt den Pfad vom Objekt bis zur Domäne:

```
CN=Anna Huber,OU=Benutzer,OU=Wien,DC=corp,DC=example,DC=com
```

`CN` steht für Common Name, `OU` für Organizational Unit und `DC` für Domain Component.

## Logischer Aufbau

![Aufbau von Active Directory mit Gesamtstruktur, Domänen und Organisationseinheiten](/images/deployment/ad_structure_de.svg)

- Die **Gesamtstruktur** (_Forest_) ist die oberste Einheit und die eigentliche Sicherheitsgrenze. Alle Domänen darin teilen dasselbe Schema und denselben globalen Katalog.
- Eine **Struktur** (_Tree_) ist eine Gruppe von Domänen mit zusammenhängendem Namensraum, etwa `corp.example.com` und `wien.corp.example.com`.
- Eine **Domäne** ist eine Verwaltungseinheit mit eigener Datenbank, eigenen Richtlinien und eigenen Administratoren. Zwischen den Domänen einer Gesamtstruktur bestehen automatisch transitive **Vertrauensstellungen**.
- **Organisationseinheiten** (OUs) sind Container innerhalb einer Domäne, mit denen Objekte strukturiert werden, etwa nach Standorten oder Abteilungen. An OUs können Gruppenrichtlinien verknüpft und Verwaltungsrechte delegiert werden.

Die meisten Unternehmen kommen mit einer einzigen Domäne in einer Gesamtstruktur aus.

:::tip[Domänenname]
Verwende als Namen der AD-Domäne eine Subdomäne einer Domain, die dir gehört, etwa `corp.example.com` oder `ad.firma.at`. Endungen wie `.local` sollten nicht mehr verwendet werden, weil sie mit anderen Protokollen wie mDNS kollidieren und keine öffentlichen Zertifikate dafür ausgestellt werden.
:::

## Physischer Aufbau

- Ein **Domänencontroller** (DC) ist ein Server, auf dem AD DS läuft und der eine Kopie der Verzeichnisdatenbank (`NTDS.dit`) speichert. Jede Domäne sollte mindestens zwei DCs haben, damit die Anmeldung auch beim Ausfall eines Servers funktioniert.
- Die DCs **replizieren** Änderungen untereinander. Jeder DC kann Änderungen annehmen (Multimaster-Replikation).
- Ein **globaler Katalog** ist ein DC, der zusätzlich eine Teilkopie aller Objekte der gesamten Gesamtstruktur enthält, um Suchen zu beschleunigen.
- **Standorte** (_Sites_) bilden die physische Netzwerkstruktur ab, etwa die Niederlassungen Wien und Graz. Clients melden sich bevorzugt an einem DC an ihrem Standort an, und die Replikation zwischen Standorten kann zeitlich gesteuert werden.
- Ein **schreibgeschützter Domänencontroller** (RODC) enthält eine nur lesbare Kopie und eignet sich für Außenstellen mit geringer physischer Sicherheit.

### FSMO-Rollen

Einige Aufgaben dürfen nur von einem einzigen DC erledigt werden. Diese **Betriebsmasterrollen** (FSMO-Rollen) sind:

| Rolle                    | Anzahl                | Aufgabe                                                   |
| ------------------------ | --------------------- | --------------------------------------------------------- |
| Schemamaster             | 1 pro Gesamtstruktur  | Änderungen am Schema, etwa bei der Installation von Exchange |
| Domänennamenmaster       | 1 pro Gesamtstruktur  | Hinzufügen und Entfernen von Domänen                      |
| RID-Master               | 1 pro Domäne          | vergibt Blöcke von IDs für neue Objekte an die DCs        |
| PDC-Emulator             | 1 pro Domäne          | Zeitquelle der Domäne, Kennwortänderungen, Kontosperrungen |
| Infrastrukturmaster      | 1 pro Domäne          | aktualisiert Verweise auf Objekte anderer Domänen         |

```powershell
# Welcher DC hat welche Rolle?
Get-ADForest | Select-Object SchemaMaster, DomainNamingMaster
Get-ADDomain | Select-Object PDCEmulator, RIDMaster, InfrastructureMaster
```

## Objekte

Die wichtigsten Objekte im Verzeichnis sind:

- **Benutzer** mit Anmeldename (`sAMAccountName`), Benutzerprinzipalname (`anna.huber@corp.example.com`), Kennwort und Attributen wie Abteilung oder Telefonnummer
- **Computer**, die der Domäne beigetreten sind
- **Gruppen**, um Berechtigungen nicht einzelnen Benutzern, sondern ganzen Gruppen zu geben
- **Organisationseinheiten** zur Strukturierung

Jedes Sicherheitsobjekt hat eine eindeutige **SID** (Security Identifier). Berechtigungen werden intern über die SID vergeben, nicht über den Namen. Wird ein Benutzer gelöscht und neu angelegt, hat er deshalb eine neue SID und verliert alle alten Berechtigungen.

## Gruppen

Gruppen haben einen **Typ** und einen **Bereich**:

- **Sicherheitsgruppen** werden für Berechtigungen verwendet, **Verteilergruppen** nur für E-Mail-Verteiler.
- Der Bereich legt fest, wer Mitglied sein kann und wo die Gruppe verwendet werden kann:

| Bereich         | Mitglieder                                        | kann berechtigt werden für                  |
| --------------- | ------------------------------------------------- | ------------------------------------------- |
| domänenlokal    | Benutzer und Gruppen aus allen Domänen der Gesamtstruktur und vertrauten Domänen | Ressourcen in der eigenen Domäne |
| global          | Benutzer und globale Gruppen der eigenen Domäne   | Ressourcen in allen Domänen                 |
| universal       | Benutzer und Gruppen aus allen Domänen der Gesamtstruktur | Ressourcen in allen Domänen         |

### AGDLP-Prinzip

Für Berechtigungen hat sich das **AGDLP-Prinzip** bewährt:

- **A**ccounts (Benutzerkonten) kommen in
- **G**lobale Gruppen, die nach Funktion oder Abteilung gebildet werden (etwa `GG_Vertrieb`). Diese kommen in
- **D**omänen**l**okale Gruppen, die für eine Ressource und Berechtigung stehen (etwa `DL_Vertrieb_Lesen`). Diese erhalten die
- **P**ermissions (Berechtigungen) auf die Ressource.

Kommt eine neue Mitarbeiterin in den Vertrieb, muss sie nur in die Gruppe `GG_Vertrieb` aufgenommen werden und hat sofort alle nötigen Rechte. Werden die Rechte auf einen Ordner geändert, betrifft das nur die Zuordnung der domänenlokalen Gruppe. Eine einheitliche **Namenskonvention** wie `GG_` und `DL_` macht den Zweck jeder Gruppe erkennbar.

## Domäne einrichten

### Erster Domänencontroller

Der erste DC erstellt eine neue Gesamtstruktur. Voraussetzung ist eine statische IP-Adresse und ein sinnvoller Computername.

```powershell
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools

Install-ADDSForest -DomainName "corp.example.com" -DomainNetbiosName "CORP" `
    -InstallDns -SafeModeAdministratorPassword (Read-Host "DSRM-Kennwort" -AsSecureString)
```

Das **DSRM-Kennwort** (Directory Services Restore Mode) wird für die Wiederherstellung des Verzeichnisses benötigt und muss sicher aufbewahrt werden. Der Server startet nach der Installation automatisch neu und ist dann Domänencontroller und DNS-Server.

### Zweiter Domänencontroller

Auf dem zweiten Server wird zuerst der erste DC als DNS-Server eingetragen, dann:

```powershell
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools

Install-ADDSDomainController -DomainName "corp.example.com" -InstallDns `
    -Credential (Get-Credential "CORP\Administrator") `
    -SafeModeAdministratorPassword (Read-Host "DSRM-Kennwort" -AsSecureString)
```

Danach sollten beide DCs sich gegenseitig als ersten DNS-Server und sich selbst als zweiten eintragen. Den Status der Replikation zeigt `repadmin /replsummary`.

### Computer in die Domäne aufnehmen

Auf dem Client muss ein DC als DNS-Server eingetragen sein, sonst findet er die Domäne nicht.

```powershell
Add-Computer -DomainName "corp.example.com" -Credential "CORP\Administrator" -Restart
```

## Objekte verwalten

```powershell
# Organisationseinheiten anlegen
New-ADOrganizationalUnit -Name "Wien" -Path "DC=corp,DC=example,DC=com"
New-ADOrganizationalUnit -Name "Benutzer" -Path "OU=Wien,DC=corp,DC=example,DC=com"

# Gruppe anlegen und Mitglieder hinzufügen
New-ADGroup -Name "GG_Vertrieb" -GroupScope Global -GroupCategory Security `
    -Path "OU=Gruppen,OU=Wien,DC=corp,DC=example,DC=com"
Add-ADGroupMember -Identity "GG_Vertrieb" -Members "anna.huber", "max.mayer"

# Benutzer suchen und ändern
Get-ADUser -Filter "Department -eq 'Vertrieb'" -Properties Department
Set-ADUser -Identity "anna.huber" -Title "Teamleiterin"

# Konto entsperren und Kennwort zurücksetzen
Unlock-ADAccount -Identity "max.mayer"
Set-ADAccountPassword -Identity "max.mayer" -Reset -NewPassword (Read-Host -AsSecureString)

# Konten finden, die seit 90 Tagen nicht verwendet wurden
Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 -UsersOnly
```

Grafisch werden Objekte mit „Active Directory-Benutzer und -Computer“ (`dsa.msc`) oder dem „Active Directory-Verwaltungscenter“ verwaltet. Das Verwaltungscenter zeigt im unteren Bereich die PowerShell-Befehle an, die es im Hintergrund ausführt. So kannst du auch beim Klicken PowerShell lernen.

## Delegierung

Nicht jede Person, die Kennwörter zurücksetzen muss, soll Domänenadministrator sein. Mit der **Delegierung** erhält etwa der Support das Recht, in der OU `Wien` Kennwörter zurückzusetzen, aber keine weiteren Rechte. Das entspricht dem **Prinzip der minimalen Rechte** (_Least Privilege_). Die Mitgliedschaft in der Gruppe „Domänen-Admins“ sollte auf wenige Konten beschränkt sein, die nur für Verwaltungsaufgaben verwendet werden.
