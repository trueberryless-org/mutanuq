---
title: Linux-Administration
description: Benutzer und Gruppen verwalten, Software mit apt installieren, Dienste mit systemd steuern, Logs mit journalctl lesen, Netzwerk konfigurieren, SSH mit Schlüsseln absichern und eine Firewall mit ufw einrichten.
sidebar:
  order: 2
---

Diese Seite zeigt die typischen Aufgaben bei der Verwaltung eines Linux-Servers am Beispiel von Debian und Ubuntu. Auf anderen Distributionen heißen manche Werkzeuge anders, etwa `dnf` statt `apt` bei Red Hat.

## Benutzer und Gruppen

```bash
sudo adduser anna                 # Benutzer interaktiv mit Heimatverzeichnis anlegen
sudo useradd -m -s /bin/bash max  # nicht interaktiv
sudo passwd max                   # Kennwort setzen
sudo groupadd technik             # Gruppe anlegen
sudo usermod -aG technik,sudo anna   # Benutzer zu Gruppen hinzufügen (-a: anhängen!)
id anna                           # Benutzer-ID und Gruppen anzeigen
sudo deluser --remove-home max    # Benutzer samt Heimatverzeichnis löschen
```

Benutzer sind in `/etc/passwd` gespeichert, die verschlüsselten Kennwörter in `/etc/shadow` und die Gruppen in `/etc/group`.

## Software installieren

Software wird über einen **Paketmanager** aus den Paketquellen der Distribution installiert. Er löst Abhängigkeiten automatisch auf und hält alle Programme aktuell.

```bash
sudo apt update                  # Paketlisten aktualisieren
sudo apt upgrade                 # alle installierten Pakete aktualisieren
sudo apt install nginx           # Paket installieren
sudo apt remove nginx            # Paket entfernen
apt search samba                 # Pakete suchen
```

Mit dem Paket `unattended-upgrades` werden Sicherheitsupdates automatisch installiert.

## Dienste mit systemd

Dienste (_Daemons_) werden auf fast allen aktuellen Distributionen mit **systemd** verwaltet:

```bash
sudo systemctl status nginx      # Status und letzte Logzeilen anzeigen
sudo systemctl start nginx       # starten
sudo systemctl stop nginx        # beenden
sudo systemctl restart nginx     # neu starten
sudo systemctl reload nginx      # Konfiguration neu laden, ohne Verbindungen zu trennen
sudo systemctl enable nginx      # beim Systemstart automatisch starten
systemctl --failed               # fehlgeschlagene Dienste anzeigen
```

## Logs

systemd sammelt die Protokolle aller Dienste im **Journal**:

```bash
journalctl -u nginx              # Logs eines Dienstes
journalctl -u nginx --since "1 hour ago"
journalctl -f                    # neue Einträge live verfolgen
journalctl -p err -b             # nur Fehler seit dem letzten Start
```

Viele Programme schreiben zusätzlich eigene Logdateien nach `/var/log`, etwa `/var/log/nginx/error.log`. Damit sie nicht die Festplatte füllen, werden sie von **logrotate** regelmäßig komprimiert und gelöscht.

## Netzwerk

```bash
ip a                     # Adressen aller Schnittstellen
ip r                     # Routingtabelle
ss -tulpn                # offene Ports und die zugehörigen Programme
ping -c 4 192.168.10.1
dig fs01.corp.example.com   # DNS-Abfrage
hostnamectl set-hostname web01
```

Ubuntu Server konfiguriert das Netzwerk mit **Netplan**. Eine statische Adresse wird in einer YAML-Datei unter `/etc/netplan/` festgelegt:

```yaml
network:
  version: 2
  ethernets:
    eth0:
      addresses: [192.168.10.30/24]
      routes:
        - to: default
          via: 192.168.10.1
      nameservers:
        addresses: [192.168.10.10, 192.168.10.11]
        search: [corp.example.com]
```

Mit `sudo netplan try` wird die Konfiguration getestet und automatisch zurückgesetzt, wenn die Verbindung verloren geht. `sudo netplan apply` übernimmt sie dauerhaft. Debian verwendet stattdessen die Datei `/etc/network/interfaces`.

## SSH

Linux-Server werden über **SSH** (Secure Shell, TCP-Port 22) verwaltet. Die Verbindung ist verschlüsselt.

```bash
ssh anna@192.168.10.30
```

Sicherer und bequemer als Kennwörter sind **SSH-Schlüssel**. Dabei wird ein Schlüsselpaar erzeugt: Der private Schlüssel bleibt auf dem eigenen Rechner, der öffentliche wird auf dem Server hinterlegt.

```bash
ssh-keygen -t ed25519                # Schlüsselpaar erzeugen (auf dem eigenen Rechner)
ssh-copy-id anna@192.168.10.30       # öffentlichen Schlüssel auf den Server kopieren
```

Danach wird die Kennwortanmeldung in `/etc/ssh/sshd_config` deaktiviert:

```
PasswordAuthentication no
PermitRootLogin no
```

und der Dienst mit `sudo systemctl reload ssh` neu geladen. Teste die Anmeldung mit Schlüssel in einer zweiten Sitzung, bevor du die erste schließt, damit du dich nicht aussperrst.

Auch Windows 10 und 11 enthalten einen SSH-Client, sodass `ssh` direkt in PowerShell funktioniert.

## Firewall mit ufw

Ubuntu bringt mit **ufw** (_Uncomplicated Firewall_) eine einfache Oberfläche für die Linux-Firewall mit:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw allow 80,443/tcp
sudo ufw allow from 192.168.10.0/24 to any port 3306 proto tcp
sudo ufw enable
sudo ufw status verbose
```

Erlaube SSH immer, bevor du die Firewall aktivierst. Mehr zu Firewalls findest du unter [Firewalls und VPN](/de/deployment/operations/firewalls/).

## Geplante Aufgaben mit cron

Wiederkehrende Aufgaben werden mit **cron** geplant. `crontab -e` öffnet die Liste des aktuellen Benutzers. Jede Zeile enthält Minute, Stunde, Tag, Monat, Wochentag und den Befehl:

```
# Jeden Tag um 2:30 Uhr die Datenbank sichern
30 2 * * * /usr/local/bin/db-backup.sh
# Jeden Montag um 6 Uhr einen Bericht erstellen
0 6 * * 1 /usr/local/bin/bericht.sh
```

Alternativ können mit systemd-Timern Aufgaben geplant werden, die sich wie Dienste verwalten und überwachen lassen.
