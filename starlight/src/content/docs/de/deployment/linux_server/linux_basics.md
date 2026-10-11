---
title: Linux-Grundlagen
description: Distributionen, Verzeichnisstruktur nach FHS, wichtige Befehle der Shell, Dateirechte mit chmod und chown, Umleitungen und Pipes sowie Texteditoren.
sidebar:
  order: 1
---

Linux ist ein freies, quelloffenes Betriebssystem, das auf dem 1991 von Linus Torvalds entwickelten Kernel beruht. Zusammen mit Werkzeugen, einem Paketmanager und vorkonfigurierten Programmen wird der Kernel als **Distribution** ausgeliefert.

## Distributionen

| Distribution           | Merkmale                                                                   |
| ---------------------- | -------------------------------------------------------------------------- |
| Debian                 | sehr stabil, gemeinschaftlich entwickelt, Basis vieler anderer Distributionen |
| Ubuntu Server          | auf Debian basierend, von Canonical, Versionen mit Langzeitsupport (LTS) alle zwei Jahre |
| Red Hat Enterprise Linux (RHEL) | kommerziell mit Support, in großen Unternehmen verbreitet       |
| Rocky Linux, AlmaLinux | freie, zu RHEL kompatible Distributionen                                   |
| SUSE Linux Enterprise  | kommerziell, vor allem im deutschsprachigen Raum verbreitet                |
| Alpine Linux           | sehr klein, beliebt als Basis für Container-Images                         |

Server werden fast immer ohne grafische Oberfläche installiert und über SSH verwaltet.

## Verzeichnisstruktur

Linux kennt keine Laufwerksbuchstaben. Alle Datenträger werden in einen einzigen Verzeichnisbaum eingehängt, der bei `/` (Root) beginnt. Der Aufbau ist im **Filesystem Hierarchy Standard** (FHS) festgelegt:

| Verzeichnis | Inhalt                                                          |
| ----------- | --------------------------------------------------------------- |
| `/bin`, `/usr/bin` | Programme für alle Benutzer                              |
| `/sbin`, `/usr/sbin` | Programme für die Systemverwaltung                     |
| `/etc`      | Konfigurationsdateien                                           |
| `/home`     | Heimatverzeichnisse der Benutzer                                |
| `/root`     | Heimatverzeichnis des Administrators `root`                     |
| `/var`      | veränderliche Daten wie Logdateien (`/var/log`) und Webseiten (`/var/www`) |
| `/tmp`      | temporäre Dateien                                               |
| `/dev`      | Gerätedateien, etwa `/dev/sda` für die erste Festplatte         |
| `/proc`, `/sys` | virtuelle Dateisysteme mit Informationen über Prozesse und Hardware |
| `/mnt`, `/media` | Einhängepunkte für weitere Datenträger                     |
| `/opt`      | zusätzliche Software                                            |

Unter Linux gilt der Grundsatz „Alles ist eine Datei“: Auch Geräte, Prozessinformationen und viele Systemeinstellungen erscheinen als Dateien.

## Wichtige Befehle

| Befehl                  | Bedeutung                                           |
| ----------------------- | --------------------------------------------------- |
| `pwd`                   | aktuelles Verzeichnis anzeigen                      |
| `ls -la`                | Inhalt mit Details und versteckten Dateien anzeigen |
| `cd /etc`               | Verzeichnis wechseln                                |
| `mkdir -p a/b/c`        | Verzeichnisse anlegen                               |
| `cp -r quelle ziel`     | kopieren, `-r` für Verzeichnisse                    |
| `mv alt neu`            | verschieben oder umbenennen                         |
| `rm -r ordner`          | löschen, ohne Papierkorb                            |
| `cat`, `less`           | Datei anzeigen, `less` seitenweise                  |
| `head -n 20`, `tail -f` | Anfang bzw. Ende einer Datei, `-f` verfolgt neue Zeilen |
| `grep -i fehler datei`  | Zeilen mit einem Suchbegriff finden                 |
| `find / -name "*.conf"` | Dateien suchen                                      |
| `df -h`, `du -sh *`     | freien Speicher bzw. Größe von Verzeichnissen anzeigen |
| `top`, `htop`           | laufende Prozesse und Auslastung                    |
| `ps aux`, `kill PID`    | Prozesse anzeigen bzw. beenden                      |
| `man befehl`            | Handbuchseite zu einem Befehl                       |

## Umleitungen und Pipes

```bash
ls -l > liste.txt           # Ausgabe in eine Datei schreiben (überschreiben)
echo "Test" >> liste.txt    # an eine Datei anhängen
befehl 2> fehler.txt        # Fehlermeldungen umleiten
cat /var/log/syslog | grep -i error | tail -n 20   # Pipes verbinden Befehle
```

Anders als in PowerShell werden zwischen Befehlen Textzeilen übergeben, keine Objekte. Werkzeuge wie `grep`, `cut`, `sort`, `uniq` und `awk` verarbeiten diesen Text weiter.

## Benutzer und root

Der Benutzer **root** hat uneingeschränkte Rechte. Man arbeitet aber nicht dauerhaft als root, sondern führt einzelne Befehle mit `sudo` aus. Welche Benutzer `sudo` verwenden dürfen, ist in `/etc/sudoers` bzw. über die Gruppe `sudo` (Debian, Ubuntu) oder `wheel` (Red Hat) geregelt.

## Dateirechte

Jede Datei hat einen **Besitzer**, eine **Gruppe** und Rechte für drei Klassen: Besitzer (u), Gruppe (g) und alle anderen (o). Für jede Klasse gibt es drei Rechte:

| Recht | Datei                  | Verzeichnis                          | Zahlenwert |
| ----- | ---------------------- | ------------------------------------ | ---------- |
| r     | lesen                  | Inhalt auflisten                     | 4          |
| w     | schreiben              | Dateien anlegen und löschen          | 2          |
| x     | ausführen              | betreten                             | 1          |

Die Ausgabe von `ls -l` zeigt die Rechte als Zeichenkette:

```
-rwxr-x--- 1 anna technik 2048 Nov  3 10:15 backup.sh
```

Das erste Zeichen gibt den Typ an (`-` Datei, `d` Verzeichnis, `l` symbolischer Link). Danach folgen je drei Zeichen für Besitzer, Gruppe und andere. Hier darf `anna` alles, die Gruppe `technik` lesen und ausführen, alle anderen gar nichts. Als Zahl ausgedrückt ist das 750 (4+2+1, 4+1, 0).

```bash
chmod 750 backup.sh          # Rechte als Zahl setzen
chmod u+x,o-r skript.sh      # Rechte symbolisch ändern
chown anna:technik bericht.txt   # Besitzer und Gruppe ändern
chmod -R g+w /srv/projekt    # rekursiv für ein ganzes Verzeichnis
```

## Texteditoren

Konfigurationsdateien werden direkt auf dem Server bearbeitet. Einsteigerfreundlich ist **nano**: Die wichtigsten Tastenkombinationen stehen am unteren Rand, `Strg+O` speichert und `Strg+X` beendet. Auf fast jedem System verfügbar ist **vi** bzw. **vim**. Dort wechselt man mit `i` in den Einfügemodus, mit `Esc` zurück und speichert und beendet mit `:wq`.
