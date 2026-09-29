---
title: Softwaremetriken
description: Qualitätsmerkmale von Softwaresystemen wie Skalierbarkeit, Offenheit, Transparenz, Kopplung und Kohäsion, messbare Kennzahlen und die SOLID-Prinzipien.
sidebar:
  order: 2
---

Ingenieure versuchen, Applikationen stabil, flexibel und wartbar aufzubauen, während der Endnutzer nichts von dem komplexen System mitbekommen soll.

## Skalierbarkeit

Wenn mehr und mehr Anfragen (steigende Last) auf eine Applikation kommen, muss diese skaliert werden. Dabei gibt es eine horizontale (Anzahl an Rechnern) und eine vertikale (Kapazitäten pro Rechner) Skalierung.

### Horizontale Skalierung

Horizontale Skalierung beschreibt das Hinzufügen von weiteren logischen Einheiten, wie zum Beispiel mehrere Rechner, um die steigende Last auszugleichen.

### Vertikale Skalierung

Vertikale Skalierung bedeutet, dass innerhalb einer logischen Einheit stärkere oder einfach mehr Ressourcen hinzugefügt werden. Beispielsweise mehr Arbeitsspeicher, Prozessorkerne oder bessere Grafikkarten.

## Offenheit

Softwaresysteme sollen für neue Funktionalitäten erweiterbar sein. Dabei sollen diese Programme auch wartbar sein, um die Weiterentwicklung des Systems zu erleichtern. Nicht wartbare Programme sind toter Code. Und toter Code ist unbrauchbar.

### Interoperabilität

Jedes System soll mit anderen Systemen kommunizieren können. Hierfür benötigt man klar definierte Schnittstellen, welche sich in der Praxis – im Gegensatz zur Theorie – meist während der Durchführung des Projekts ändern.

### Portabilität

Systeme sollen nicht nur auf einer bestimmten Version eines Betriebssystems laufen können. Es soll nicht auf die Umgebung des Betriebssystems ankommen, ob die Applikation funktioniert oder nicht. Für Entwickler bietet Containervirtualisierung heutzutage eine einfache Möglichkeit, Systeme auf allen Betriebssystemen starten zu können. Für Endnutzer soll die Applikation von allen Endgeräten erreichbar sein. Im Idealfall entwickeln die Ingenieure eine eigene PWA (Progressive Web App) für mobile Endgeräte.

## Transparenz

Der Endbenutzer interessiert sich nicht dafür, wie der Entwickler ein System implementiert hat.

### Zugriffstransparenz

Der Zugriff auf eine Ressource ist immer gleich. Jedoch gibt es Unterschiede in der Art des Zugriffs (welcher Rechner, welches Netzwerk, ...) und der Darstellung der Ressource (Datumsformat in verschiedenen Ländern, Berechtigungen, ...).

### Ortstransparenz

Ein Endbenutzer kann nicht erkennen, wo sich eine Ressource physisch innerhalb des Systems befindet. Um dies zu erreichen, werden Ressourcen mit virtuellen Namen identifiziert (URL). Diese enthalten keine Informationen über den Standort. Dadurch können Ressourcen aus einer Datenbank, einem Dateisystem oder einem anderen Microservice kommen, beliebig verschoben und ausgetauscht werden, ohne dass der Endbenutzer etwas merkt.

### Replikationstransparenz

Der Endbenutzer merkt nicht, dass es mehrere Kopien der Ressource gibt. Diese Kopien sind für die Ausfallsicherheit und eine bessere Leistung notwendig. Alle Kopien müssen denselben Namen haben. Diese Transparenz setzt Ortstransparenz voraus, ansonsten wüsste der Endnutzer, dass mehrere Kopien existieren, wenn mehrere Standorte existieren.

### Nebenläufigkeitstransparenz

Es ist egal, wie viele Benutzer gerade auf die Applikation zugreifen, die Ressource des Endbenutzers muss problemlos funktionieren. Herausforderungen hierbei sind Synchronisierung und Konsistenz der Daten.

## Koppelung

Die Koppelung ist das Maß der Abhängigkeit zwischen Softwareelementen (Klassen). Um ein System flexibel und wartbar zu gestalten, soll die Koppelung möglichst gering bleiben. Dies bedeutet, dass Softwareelemente nur über wenige Schnittstellen untereinander kommunizieren und nicht direkt auf die konkreten Implementierungen zugreifen.

## Kohäsion

Die Kohäsion beschreibt das Maß des inneren Zusammenhalts eines Softwareelements. Jede Klasse soll immer nur eine Aufgabe erfüllen und alle Methoden innerhalb einer Klasse müssen das Verhalten der Klasse widerspiegeln. Das [Single Responsibility Principle](#single-responsibility-principle) beschreibt genau diese Metrik innerhalb der SOLID-Kriterien.

Ziel eines guten Entwurfs ist daher immer: **geringe Kopplung, hohe Kohäsion**.

## Messbare Kennzahlen

Die bisher beschriebenen Qualitätsmerkmale lassen sich teilweise auch in Zahlen ausdrücken. Solche Kennzahlen werden von Werkzeugen wie Visual Studio („Codemetriken berechnen“), SonarQube oder JetBrains Rider automatisch ermittelt.

| Kennzahl                                        | Bedeutung                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Lines of Code (LOC)**                         | Anzahl der Codezeilen. Einfach zu messen, sagt aber wenig über die Qualität aus.                             |
| **Zyklomatische Komplexität** (nach McCabe)     | Anzahl der linear unabhängigen Pfade durch eine Methode (Anzahl der Verzweigungen + 1). Werte über 10 gelten als schwer testbar. |
| **Kopplung zwischen Klassen** (_Class Coupling_) | Anzahl der anderen Klassen, von denen eine Klasse abhängt.                                                  |
| **Vererbungstiefe** (_Depth of Inheritance_)    | Anzahl der Basisklassen bis zur Wurzel der Vererbungshierarchie. Tiefe Hierarchien sind schwer verständlich. |
| **Wartbarkeitsindex** (_Maintainability Index_) | Aus LOC, zyklomatischer Komplexität und Halstead-Volumen berechneter Wert zwischen 0 und 100. Höher ist besser. |
| **Testabdeckung** (_Code Coverage_)             | Anteil des Codes, der von automatisierten Tests ausgeführt wird.                                           |

## SOLID-Kriterien

### Single Responsibility Principle

Das SRP besagt, dass jedes Software-Modul immer nur eine einzige Aufgabe haben soll. Wenn eine Methode beispielsweise eine Textdatei einliest, in eine Datenbank speichert und in der Applikation anzeigt, wird dieses Prinzip verletzt.

Dieses Prinzip definiert die [Kohäsion](#kohäsion).

> "There should never be more than one reason for a class to change" - Robert C. Martin

Ursprünglich bezieht sich das SRP nur auf Klassen, heutzutage gilt es allgemein für Software-Module (Services, Klassen, Methoden, ...).

### Open / Closed Principle

Eine Klasse soll offen für Erweiterungen, aber geschlossen für Veränderungen sein. Dies bedeutet, dass neue Funktionalitäten am besten nicht durch Ändern einer existierenden Klasse, sondern durch Hinzufügen einer neuen Klasse umgesetzt werden. Man will vermeiden, dass aufgrund von Änderungen in einer existierenden Klasse Fehler in restlichen Teilen der Applikation verursacht werden.

Dadurch wird eine geringe [Koppelung](#koppelung) gefördert.

### Liskov Substitution Principle

Bei Vererbung muss eine Instanz der Unterklasse anstatt einer Instanz der Basisklasse verwendet werden können, ohne dass sich das Programm dadurch falsch verhält. Um dieses Prinzip nicht zu verletzen, gibt es spezifische Regeln, welche man beim Erstellen einer Unterklasse beachten muss:

-   Ein Parameter einer Methode der Unterklasse muss gleich oder abstrakter als der Parameter in der Methode der Basisklasse sein. Wenn der Methodenkopf der Basisklasse beispielsweise `walk(Dog d)` definiert, kann der Methodenkopf der Unterklasse zum Beispiel `walk(Dog d)` oder `walk(Animal d)` lauten. Jedoch darf die Unterklasse den Parameter nicht auf einen spezifischeren Typen einschränken, wie zum Beispiel `walk(Bulldog d)`. Denn in diesem Fall könnte keine beliebige `Dog`-Instanz mehr an die Methode `walk()` übergeben werden, obwohl der Aufrufer nur die Basisklasse kennt und davon ausgeht, dass jeder `Dog` erlaubt ist.

-   Bei Rückgabewerten ist es genau andersherum: Der Rückgabewert einer Unterklasse muss gleich oder spezifischer (also erbend vom Rückgabewert der Methode der Basisklasse) als der Rückgabewert der Methode der Basisklasse sein. Wenn die Basisklasse `Dog getInstance()` implementiert, darf die Unterklasse nur `Dog getInstance()` oder `Bulldog getInstance()`, nicht jedoch `Animal getInstance()` implementieren. Denn sonst könnte ein Aufrufer, der mit dem Typ der Basisklasse arbeitet und einen `Dog` erwartet, plötzlich ein anderes Tier (zum Beispiel eine `Cat`) erhalten.

-   Eine Methode der Unterklasse soll keine `Exception` werfen, welche die Basisklasse nicht erwartet.

-   Eine Unterklasse darf die Vorbedingungen einer Methode nicht verschärfen und die Nachbedingungen nicht abschwächen. Das klassische Negativbeispiel ist ein `Square`, das von `Rectangle` erbt: Setzt man die Breite eines Quadrats, ändert sich auch die Höhe – ein Aufrufer, der mit einem `Rectangle` rechnet, erhält dadurch falsche Flächen.

Falls dies alles ein bisschen kompliziert klingt, keine Sorge. In statisch typisierten Programmiersprachen (Java, C#, ...) werden die Regeln zu Parametern und Rückgabewerten größtenteils bereits vom Compiler geprüft. Die Verhaltensregeln (Exceptions, Vor- und Nachbedingungen) muss man jedoch selbst einhalten.

### Interface Segregation Principle

Keine Klasse soll gezwungen werden, von Methoden abzuhängen, die sie gar nicht verwendet. Eine Schnittstelle soll daher nur ein einziges, zusammenhängendes Verhalten definieren (nicht implementieren). Das Gegenteil wäre der Fall, wenn alle Methoden in einem einzigen riesigen Interface definiert sind und implementierende Klassen viele Methoden nur mit einer `NotImplementedException` „erfüllen“ können.

Somit verbessert dieses Prinzip die [Kohäsion](#kohäsion) jeder Schnittstelle.

### Dependency Inversion Principle

Die Umkehrung der Abhängigkeiten besagt:

1. Module höherer Ebenen (zum Beispiel die Geschäftslogik) sollen nicht von Modulen niedrigerer Ebenen (zum Beispiel dem Datenbankzugriff) abhängen. Beide sollen von **Abstraktionen** (Interfaces) abhängen.
2. Abstraktionen sollen nicht von Details abhängen, sondern Details von Abstraktionen.

Eine `OrderService`-Klasse sollte also nicht direkt eine `SqlOrderRepository`-Klasse verwenden, sondern nur ein `IOrderRepository`-Interface kennen. Die konkrete Implementierung kann dann ausgetauscht werden, etwa durch eine In-Memory-Variante für Tests.

```csharp
public class OrderService
{
    private readonly IOrderRepository _repository;

    // Die Abhängigkeit wird von außen übergeben (Constructor Injection)
    public OrderService(IOrderRepository repository)
    {
        _repository = repository;
    }
}
```

#### Dependency Injection

In der Praxis wird dieses Prinzip meist mit **Dependency Injection** umgesetzt: Instanzen werden nicht von den Klassen selbst erzeugt, wenn sie gebraucht werden, sondern von einem Framework (einem sogenannten DI-Container) erstellt und verwaltet. Somit kümmert sich nicht mehr der Programmierer um alle Instanzen, welche für eine gewünschte Funktionalität benötigt werden, sondern das System. Der Entwickler muss nur angeben, welche Instanzen gebraucht werden.

> "Don't call us, we'll call you"

Diese Instanzen haben oft einen Lebenszyklus, welcher vom Entwickler definiert werden kann. Bei .NET (zum Beispiel ASP.NET Core oder Blazor) gibt es `Singleton` (eine Instanz für die gesamte Laufzeit der Applikation), `Scoped` (eine Instanz pro Anfrage bzw. bei Blazor Server pro Verbindung eines Clients) und `Transient` (bei jeder Anforderung eine neue Instanz).

```csharp
builder.Services.AddSingleton<IClock, SystemClock>();
builder.Services.AddScoped<IOrderRepository, SqlOrderRepository>();
builder.Services.AddTransient<IEmailSender, SmtpEmailSender>();
```
