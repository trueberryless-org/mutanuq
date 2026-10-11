---
title: Gruppenrichtlinien
description: Aufbau von Gruppenrichtlinienobjekten, Computer- und Benutzerkonfiguration, Verknüpfung und Verarbeitungsreihenfolge LSDOU, Vererbung, Filterung, typische Beispiele und Fehlersuche.
sidebar:
  order: 4
---

Mit **Gruppenrichtlinien** (_Group Policies_) werden Einstellungen zentral auf alle Computer und Benutzer einer Domäne verteilt: Kennwortregeln, Netzlaufwerke, Desktophintergrund, Softwareinstallation, Firewall-Einstellungen und tausende weitere. Statt hunderte PCs einzeln zu konfigurieren, wird eine Einstellung einmal festgelegt und automatisch angewendet.

## Gruppenrichtlinienobjekte

Einstellungen werden in **Gruppenrichtlinienobjekten** (GPOs) gespeichert. Ein GPO wirkt erst, wenn es mit einem Standort, der Domäne oder einer Organisationseinheit **verknüpft** ist. Dasselbe GPO kann mit mehreren Stellen verknüpft sein.

Jedes GPO hat zwei Bereiche:

- Die **Computerkonfiguration** gilt für Computerkonten und wird beim Start des Computers angewendet, etwa Firewall-Regeln, Kennwortrichtlinien oder Softwareinstallation.
- Die **Benutzerkonfiguration** gilt für Benutzerkonten und wird bei der Anmeldung angewendet, etwa Netzlaufwerke, Desktophintergrund oder Startmenü.

Ein GPO wirkt nur auf Objekte, die sich in der verknüpften OU befinden. Eine Computerrichtlinie, die mit einer OU voller Benutzer verknüpft ist, hat also keine Wirkung.

Beide Bereiche sind weiter unterteilt:

- **Richtlinien** (_Policies_) werden erzwungen. Benutzer können sie nicht ändern, und sie werden entfernt, sobald das GPO nicht mehr gilt.
- **Einstellungen** (_Preferences_) setzen Standardwerte, die Benutzer teilweise ändern können, etwa Laufwerkszuordnungen, Verknüpfungen oder Registrierungswerte. Mit der **Zielgruppenadressierung** lassen sich Einstellungen nur für bestimmte Gruppen oder Computer anwenden.

Die Vorlagen für die Einstellungen der administrativen Vorlagen liegen als ADMX-Dateien vor. Für eine einheitliche Verwaltung werden sie im **zentralen Speicher** abgelegt: `\\corp.example.com\SYSVOL\corp.example.com\Policies\PolicyDefinitions`.

## Verarbeitungsreihenfolge

Gruppenrichtlinien werden in der Reihenfolge **LSDOU** angewendet:

![Verarbeitungsreihenfolge der Gruppenrichtlinien: Lokal, Standort, Domäne, OU](/images/deployment/gpo_processing_de.svg)

1. L: lokale Richtlinie des Computers
2. S: Standort (_Site_)
3. D: Domäne
4. OU: Organisationseinheiten, von der obersten bis zur untersten

Später angewendete Einstellungen überschreiben frühere. Widersprechen sich zwei Einstellungen, gewinnt also die Richtlinie, die näher am Objekt verknüpft ist. Sind mehrere GPOs mit derselben OU verknüpft, entscheidet die **Verknüpfungsreihenfolge**: Das GPO mit der Nummer 1 wird zuletzt angewendet und hat daher Vorrang.

### Vererbung steuern

- **Vererbung deaktivieren** (_Block Inheritance_): An einer OU werden GPOs von übergeordneten Ebenen nicht angewendet.
- **Erzwungen** (_Enforced_): Ein GPO wird trotz blockierter Vererbung angewendet und kann von untergeordneten GPOs nicht überschrieben werden. So kann die IT etwa Sicherheitseinstellungen für die gesamte Domäne durchsetzen.

### Filterung

- **Sicherheitsfilterung:** Ein GPO wirkt standardmäßig auf alle authentifizierten Benutzer. Es kann auf bestimmte Gruppen eingeschränkt werden. Der Computer muss das GPO aber weiterhin lesen dürfen.
- **WMI-Filter:** Ein GPO wird nur angewendet, wenn eine Bedingung erfüllt ist, etwa nur auf Laptops oder nur auf Windows 11.

## Kennwort- und Kontorichtlinien

Kennwort- und Kontosperrungsrichtlinien für Domänenkonten werden in der **Default Domain Policy** festgelegt, die mit der Domäne verknüpft ist:

- minimale Kennwortlänge
- Kennwortchronik und maximales Kennwortalter
- Komplexitätsanforderungen
- Kontosperrung nach mehreren Fehlversuchen

Sollen für bestimmte Gruppen, etwa Administratoren, strengere Regeln gelten, werden **differenzierte Kennwortrichtlinien** (_Fine-Grained Password Policies_) verwendet.

## Beispiele

| Ziel                                        | Pfad im GPO                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Netzlaufwerk `S:` für den Vertrieb          | Benutzerkonfiguration › Einstellungen › Windows-Einstellungen › Laufwerkzuordnungen        |
| Desktophintergrund festlegen                | Benutzerkonfiguration › Richtlinien › Administrative Vorlagen › Desktop › Desktop          |
| Systemsteuerung sperren                     | Benutzerkonfiguration › Richtlinien › Administrative Vorlagen › Systemsteuerung            |
| USB-Speicher sperren                        | Computerkonfiguration › Richtlinien › Administrative Vorlagen › System › Wechselmedienzugriff |
| Software per MSI verteilen                  | Computerkonfiguration › Richtlinien › Softwareeinstellungen › Softwareinstallation         |
| Firewall-Regeln                             | Computerkonfiguration › Richtlinien › Windows-Einstellungen › Sicherheitseinstellungen › Windows Defender Firewall mit erweiterter Sicherheit |
| Anmeldeskript                               | Benutzerkonfiguration › Richtlinien › Windows-Einstellungen › Skripts                      |

## Verwaltung mit PowerShell

Grafisch werden GPOs mit der „Gruppenrichtlinienverwaltung“ (`gpmc.msc`) erstellt und bearbeitet. Viele Schritte gehen auch mit PowerShell:

```powershell
# GPO erstellen und mit einer OU verknüpfen
New-GPO -Name "Benutzer Wien - Laufwerke" | 
    New-GPLink -Target "OU=Benutzer,OU=Wien,DC=corp,DC=example,DC=com"

# Einen Registrierungswert per GPO setzen
Set-GPRegistryValue -Name "Benutzer Wien - Laufwerke" `
    -Key "HKCU\Software\Policies\Microsoft\Windows\Control Panel\Desktop" `
    -ValueName "ScreenSaveTimeOut" -Type String -Value "600"

# Verknüpfung erzwingen, Vererbung blockieren
Set-GPLink -Name "Sicherheit Basis" -Target "DC=corp,DC=example,DC=com" -Enforced Yes
Set-GPInheritance -Target "OU=Labor,DC=corp,DC=example,DC=com" -IsBlocked Yes

# Alle GPOs sichern
Backup-GPO -All -Path "D:\GPO-Backup"
```

## Fehlersuche

Clients aktualisieren Gruppenrichtlinien automatisch etwa alle 90 Minuten mit einer zufälligen Verzögerung von bis zu 30 Minuten, Domänencontroller alle 5 Minuten. Bei der Fehlersuche helfen:

```powershell
gpupdate /force         # Richtlinien sofort neu anwenden
gpresult /r             # angewendete GPOs für Computer und Benutzer anzeigen
gpresult /h bericht.html   # ausführlichen HTML-Bericht erstellen
```

In der Gruppenrichtlinienverwaltung zeigt außerdem der **Gruppenrichtlinienergebnis-Assistent**, welche Einstellungen bei einem bestimmten Benutzer auf einem bestimmten Computer tatsächlich wirken, und die **Gruppenrichtlinienmodellierung** simuliert, was bei einer Änderung passieren würde.

Typische Fehlerursachen:

- Das GPO ist mit der falschen OU verknüpft, oder das Objekt liegt in einer anderen OU.
- Eine Benutzereinstellung wurde in einer OU verknüpft, die nur Computer enthält, oder umgekehrt.
- Ein anderes GPO mit höherer Priorität überschreibt die Einstellung.
- Die Sicherheitsfilterung schließt das Objekt aus.
- Der Client erreicht keinen Domänencontroller oder hat einen falschen DNS-Server eingetragen.
- Manche Einstellungen, etwa Softwareinstallation und Laufwerkszuordnungen, benötigen einen Neustart oder eine neue Anmeldung.
