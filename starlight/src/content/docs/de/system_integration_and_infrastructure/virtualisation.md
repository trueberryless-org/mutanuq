---
title: Virtualisierung
---

Die Virtualisierung ermöglicht die Erstellung von virtuellen Instanzen von Hardware- und Softwarekomponenten. Das Hauptziel besteht darin, physische Ressourcen zu abstrahieren, um flexiblere und effizientere IT-Infrastrukturen zu schaffen. Durch die Schaffung isolierter virtueller Umgebungen können vorhandene Ressourcen besser genutzt und die Skalierbarkeit verbessert werden. Virtualisierung bildet nicht nur die Grundlage für Cloud Computing, sondern findet auch in Rechenzentren, Netzwerken und Endgeräten vielfältige Anwendungen.

## Vorteile

-   das Testen von neuen Betriebssystemen
-   das Testen von neuen Applikationen auf Betriebssystemen
-   Schulung von Umgebungen, welche einfach wieder gelöscht werden können
-   Hardware-Ressourcen besser ausnutzen
-   Snapshots erstellen und wiederherstellen
-   Cloud Hosting Server mieten

## Geschichte

Das Konzept der Virtualisierung wurde das erste Mal innerhalb der 1960er Jahre genutzt, um die Mehrbenutzerfähigkeit umzusetzen. Damals hatten Betriebssysteme noch nicht die Funktionalität von mehreren Benutzern integriert, weshalb der einfachste Weg, dies zu erreichen, weitere Instanzen des Betriebssystems waren. Aufgrund der Weiterentwicklungen - Betriebssysteme waren später sowieso automatisch die mehrbenutzerfähig - wurde das Konzept nicht weiterverwendet.

Um das Jahr 2010 herum wurde das Konzept der Virtualisierung wieder verwendet, weil Entwickler nun Anwendungen und Betriebssysteme testen können wollten. Außerdem kann man Hardware-Ressourcen viel besser ausnutzen, da in einem Unternehmen gewisse Dienste nur zu gewissen Zeiten exzessiv verwendet werden. Beispielsweise melden sich zwischen acht und neun Uhr viele Mitarbeiter am Domain Controller an, am Nachmittag werden sehr viele E-Mails verschickt und Dateien ausgedruckt. Um kostspielige Ressourcen besser nutzen zu können, kann man Server, welche genau diese Aufgaben erfüllen, virtualisieren, damit zu bestimmten Zeiten verschiedene Server flexibel Ressourcen zur Verfügung gestellt bekommen. Virtualisierung hilft dementsprechend enorm bei flexibler Skalierung.

## Begriffe

Bei einem virtualisierten System gibt es immer zwei wesentliche Teilnehmer:

-   **Host**  
    Der Host ist der Computer, auf welchem die virtuellen Betriebssysteme laufen. Auf diesem Host läuft ein [Hypervisor](#hypervisor), welcher die verschiedenen virtuellen Maschinen bzw. Guests verwaltet.

-   **Guest**  
    Das virtuelle Betriebssysteme wird vom [Hypervisor](#hypervisor) verwaltet und läuft somit auf dem Host.

## Hypervisor

Der Hypervisor ist ein `Virtual Machine Monitor`, welcher die Instanzen der virtuellen Betriebssysteme steuert und verwaltet. Dieses Programm hat die Aufgabe, den virtuellen Maschinen `Rechner-Ressourcen` möglichst effizient zuzuweisen. Denn genau wie jeder andere Computer, benötigen auch virtuelle Maschinen CPU-Ressourcen, Arbeitsspeicher, Festplattenspeicher, Netzwerkkarten und vieles mehr. All diese Ressourcen werden dynamisch aufgeteilt. Benötigt beispielsweise ein Domain Controller momentan viel Kapazitäten, da sich gerade viele Benutzer anmelden wollen, kann der Hypervisor dem Domain Controller fast die gesamten Ressourcen zuschreiben, während andere Server währenddessen im Minimalbetrieb laufen.

Je nach Virtualisierungstyp ist der Hypervisor entweder ein einfaches `Anwendungsprogramm`, welches auf einem Betriebssystem installiert ist, oder die `Installation`, welche direkt auf der Hardware aufgesetzt wird.

## Virtualisierungstypen

### Typ 1 Virtualisierung

Bei einer Typ 1 Virtualisierung (auch Bare-Metall Virtualisierung genannt) interagiert der Hypervisor direkt mit der Hardware. Es gibt kein Betriebssystem zwischen Hardware und Hypervisor. Weil ein Hypervisor ohne Betriebssystem nicht installierbar ist, muss man bei einer Installation zuerst ein Betriebssystem installieren, von welchem aus man anschließend den Hypervisor installieren kann, um anschließend die Betriebssysteme installieren zu können 🫠.

![Typ-1-Virtualisierung](../../../../assets/system_integration_and_infrastructure/Typ-1-Virtualisierung.png)

#### Beispiele

-   VMware ESXi (ehemals ESX)
-   Citrix Xen
-   Hyper-V

### Typ 2 Virtualisierung

Bei einer Typ 2 Virtualisierung läuft der Hypervisor als einfaches Anwendungsprogramm auf dem unterliegenden Betriebssystem. Dabei muss dem virtualisierten Betriebssystem vorgetäuscht werden, dass es als einziges Zugriff auf die Hardware hat.

---

Jedoch kann der Hypervisor als Anwendung dem virtuellen Betriebssystem nicht vortäuschen, dass die Hardware-Ressourcen nur ihm gehören, weil er selbst auch vom Betriebssystem verwaltet wird. Eine mögliche Lösung für dieses Problem besteht darin, dass der Hypervisor Techniken wie Hardware-Virtualisierung oder Hardware-Assisted Virtualisation verwendet. Diese Technologien ermöglichen es dem Hypervisor, direkten Zugriff auf bestimmte Hardware-Ressourcen zu erhalten, ohne dass das Host-Betriebssystem jeden Zugriff vermitteln muss. Dies verbessert die Leistung und Effizienz der Virtualisierung.

Die Hardware-Virtualisierung wird oft durch CPU-Funktionen wie Intel VT-x oder AMD-V ermöglicht. Diese Technologien erlauben es dem Hypervisor, virtuelle Maschinen direkt auf die physische Hardware zuzugreifen, wodurch die Verwaltungsschicht des Host-Betriebssystems umgangen wird. Dadurch kann der Hypervisor dem virtualisierten Betriebssystem effektiv vortäuschen, dass es exklusiven Zugriff auf die Hardware hat.

![Typ-2-Virtualisierung](../../../../assets/system_integration_and_infrastructure/Typ-2-Virtualisierung.png)

#### Beispiele

-   VMware Workstation Player
-   VirtualBox

### Paravirtualisierung

Paravirtualisierung ist eine Methode zur Virtualisierung, bei welcher die Gastbetriebssysteme (Guest) speziell für die Virtualisierung angepasst werden. Dies bedeutet, dass die Gastbetriebssysteme die Hardware direkt nicht mehr ansprechen können, sondern stattdessen über eine virtuelle Schnittstelle, die VMI (Virtual Machine Interface), mit der Hardware kommunizieren müssen. Die VMI wird vom Hypervisor bereitgestellt, der die virtuelle Maschine (VM) verwaltet.

#### Virtual Machine Interface

Die VMI ist eine zusätzliche Schicht zwischen den Gastbetriebssystemen und der Hardware. Sie ermöglicht es dem Hypervisor, die Kommunikation zwischen den Gastbetriebssystemen und der Hardware zu steuern.

#### Funktionsbibliothek

Die Funktionsbibliothek ist eine Sammlung von Funktionen, die zusammenarbeiten, um eine bestimmte Aufgabe zu erfüllen. Sie ermöglichen es den Gastbetriebssystemen, die Hardwarefunktionen zu nutzen, ohne dass sie direkt auf die Hardware zugreifen müssen.

Die Funktionsbibliotheken sind in der Regel in zwei Teile unterteilt:

-   **VMI-Treiber**  
    Die VMI-Treiber stellen die Verbindung zwischen den Gastbetriebssystemen und der VMI her. Sie sind für die Übersetzung der Hardwareaufrufe der Gastbetriebssysteme in die entsprechenden Aufrufe der VMI verantwortlich.

-   **VMI-Funktionen**  
    Die VMI-Funktionen stellen die eigentlichen Hardwarefunktionen für die Gastbetriebssysteme bereit. Sie umfassen beispielsweise Funktionen zum Zugriff auf die CPU, den Speicher, die Festplatte und andere Hardwarekomponenten.
    Die Funktionsbibliotheken werden vom Hypervisor bereitgestellt. Der Hypervisor lädt die Funktionsbibliotheken beim Start der Gastbetriebssysteme in den Arbeitsspeicher. Die Gastbetriebssysteme können dann die Funktionsbibliotheken verwenden, um auf die Hardware zuzugreifen.

##### Beispiel

Um eine Datei zu lesen, muss ein Gastbetriebssystem normalerweise direkt auf die Festplatte zugreifen. Bei der Paravirtualisierung muss das Gastbetriebssystem stattdessen die Funktion `read()` der Funktionsbibliothek aufrufen. Die Funktion `read()` sendet dann einen entsprechenden Aufruf an den Hypervisor. Der Hypervisor übersetzt den Aufruf und leitet ihn dann an die Festplatte weiter.

##### Vorteile

-   Sicherheit: Funktionsbibliotheken können helfen, die Sicherheit der Gastbetriebssysteme zu erhöhen. Dies liegt daran, dass die Gastbetriebssysteme nicht direkt auf die Hardware zugreifen können.
-   Leistung: Funktionsbibliotheken können die Leistung der Gastbetriebssysteme verbessern. Dies liegt daran, dass die Funktionsbibliotheken die Hardwarefunktionen effizienter nutzen können als die Gastbetriebssysteme selbst.

##### Nachteile

-   Kompatibilität: Funktionsbibliotheken sind nicht mit allen Gastbetriebssystemen kompatibel.
-   Kosten: Die Entwicklung von Funktionsbibliotheken kann kostspielig sein.

### Containervirtualisierung

Im Gegensatz zu anderen Virtualisierungen hat man bei einer Containervirtualisierung kein eigenes Betriebssystem bei den eigenen Containern. Deswegen benötigt man nicht so viel Platz und es kann schneller starten und auch laufen. Außerdem kann man den Bauplan eines Containers sehr viel einfacher über bekannte Registries, wie zum Beispiel `Docker Hub`, teilen und somit Umgebungen - auch `Environments` - schnell auf neuen Rechnern aufsetzen.

![Containervirtualisierung Aufbau](../../../../assets/system_integration_and_infrastructure/Container_Structure.svg)

Wie man in dem Bild leider nicht sehen kann, hat ein Container keinen eigenen Kern. Die Container nutzen nämlich den Kern des Hosts.

#### Vorteile

-   schneller
-   wenig Speicherplatz
-   leicht teilen und veröffentlichen
-   Anwendung und Abhängigkeiten kapseln (nicht gesamtes Betriebssystem)

#### Verwendung

Um Containervirtualisierung zu verwenden, gibt es verschiedene Anbieter, wie zum Beispiel [Docker](https://www.docker.com/) und [Podman](https://podman.io). Falls Sie Docker verwenden, können Sie dies auf MacOS und Windows mittels [Docker Desktop](https://docs.docker.com/get-docker/) installieren.

#### Images

Ein Image ist ein Bauplan für einen Container. Im Vergleich zur Objektorientierten Programmierung ist ein Image eine Klasse und ein Container eine Instanz der Klasse. Ein Image enthält den Code und die Tools und Ausführungsprogramme, damit im Container alles enthalten ist, was man benötigt.

#### Container

#### Dockerfile

#### Commands

## System / User Mode

Gewisse Prozess können nicht von einer Anwendung, wie zum Beispiel dem Hypervisor, selbst, sondern müssen direkt vom Betriebssystem erledigt werden. Beispielsweise der Zugriff auf die Festplatte. Damit nun jedoch auch Anwendungen auf die Festplatte lesen und schreiben können, gibt es das Konzept des System Modes und des User Modes.

### System Mode

Bei einem PC, auf welchem ein normales Betriebssystem installiert ist, läuft nur das Betriebssystem und die Interrupt Service Routine im System Mode. Prozesse im System Mode können alles machen, da sie vollständigen Zugriff auf die Hardware haben.

### User Mode

Alle anderen Anwendungen laufen im User Mode. Wenn diese nun direkt auf die Hardware zugreifen müssen, wird folgender Ablauf gestartet:

1. Die Anwendung ruft mittels `System calls` die Betriebssystemfunktionalität auf.
2. Der ausgeführte Prozess wird kurzfristig an das Betriebssystem übergeben, sodass dieses die Aufgabe erledigen kann.
3. Anschließend kehrt das Programm wieder in den User Mode zurück.
