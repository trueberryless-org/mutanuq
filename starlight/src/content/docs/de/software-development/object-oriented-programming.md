---
title: Objektorientierte Programmierung
description: Klassen, Objekte, Kapselung, Abstraktion, Vererbung, Polymorphie und Interfaces anhand von C#-Beispielen.
sidebar:
  order: 1
---

Die objektorientierte Programmierung (OOP) ist ein Programmierparadigma, bei dem Daten und das Verhalten, das auf diesen Daten arbeitet, in **Objekten** zusammengefasst werden. Anstatt ein Programm als lange Abfolge von Anweisungen zu betrachten, modelliert man es als Zusammenspiel von Objekten, die miteinander kommunizieren, ähnlich wie Dinge in der realen Welt.

## Klassen und Objekte

Eine **Klasse** ist der Bauplan für Objekte. Sie legt fest, welche Daten (Felder und Properties) und welches Verhalten (Methoden) ein Objekt besitzt. Ein **Objekt** ist eine konkrete Instanz einer Klasse, die zur Laufzeit mit `new` erzeugt wird.

```csharp
public class Car
{
    public string Brand { get; }
    public int Speed { get; private set; }

    public Car(string brand)
    {
        Brand = brand;
    }

    public void Accelerate(int delta) => Speed += delta;
}

var car = new Car("Škoda"); // Objekt (Instanz) der Klasse Car
car.Accelerate(50);
```

Der **Konstruktor** wird beim Erzeugen eines Objekts aufgerufen und sorgt dafür, dass sich das Objekt von Anfang an in einem gültigen Zustand befindet.

## Die vier Säulen der OOP

### Kapselung

Kapselung (engl. _Encapsulation_) bedeutet, dass der innere Zustand eines Objekts vor direktem Zugriff von außen geschützt wird. Der Zugriff erfolgt ausschließlich über definierte Methoden oder Properties. In C# steuert man dies mit **Zugriffsmodifizierern**:

| Modifizierer         | Sichtbarkeit                                                        |
| -------------------- | ------------------------------------------------------------------- |
| `public`             | Überall sichtbar                                                    |
| `private`            | Nur innerhalb der eigenen Klasse (Standard für Klassenmember)       |
| `protected`          | Innerhalb der eigenen Klasse und in abgeleiteten Klassen            |
| `internal`           | Innerhalb derselben Assembly (Standard für Klassen)                 |
| `protected internal` | Innerhalb derselben Assembly oder in abgeleiteten Klassen           |
| `private protected`  | In abgeleiteten Klassen, aber nur innerhalb derselben Assembly      |

Im obigen Beispiel kann `Speed` von außen nur gelesen, aber nur über `Accelerate` verändert werden. So kann die Klasse selbst sicherstellen, dass ihr Zustand gültig bleibt.

### Abstraktion

Abstraktion bedeutet, nur die für die Verwendung wesentlichen Eigenschaften nach außen zu zeigen und Implementierungsdetails zu verbergen. Wer die Methode `Accelerate` aufruft, muss nicht wissen, wie die Geschwindigkeit intern berechnet wird. Abstrakte Klassen und Interfaces sind die wichtigsten Werkzeuge dafür.

### Vererbung

Bei der Vererbung übernimmt eine abgeleitete Klasse (Unterklasse) die Felder und Methoden einer Basisklasse (Oberklasse) und kann diese erweitern oder überschreiben. Vererbung beschreibt eine **„ist ein“-Beziehung**: Ein `ElectricCar` _ist ein_ `Car`.

Basisklassen sind Datentypen, welche **ähnliches** Verhalten zusammenfügen.

```csharp
public abstract class Animal
{
    public string Name { get; }

    protected Animal(string name) => Name = name;

    public abstract string MakeSound();

    public virtual string Describe() => $"{Name} sagt {MakeSound()}";
}

public class Dog : Animal
{
    public Dog(string name) : base(name) { }

    public override string MakeSound() => "Wuff";
}
```

- Eine **abstrakte Klasse** (`abstract`) kann nicht instanziiert werden und darf abstrakte Methoden ohne Implementierung enthalten.
- Mit `virtual` erlaubt die Basisklasse das Überschreiben einer Methode, mit `override` wird sie in der Unterklasse überschrieben.
- Mit `base` greift man auf den Konstruktor oder die Methoden der Basisklasse zu.
- C# und Java unterstützen nur **Einfachvererbung** von Klassen: Eine Klasse kann nur von genau einer Basisklasse erben.

### Polymorphie

Polymorphie (Vielgestaltigkeit) bedeutet, dass ein Objekt über den Typ seiner Basisklasse oder eines Interfaces angesprochen werden kann, zur Laufzeit aber das Verhalten seines tatsächlichen Typs zeigt. Man spricht von **dynamischer Bindung**.

```csharp
// Cat ist analog zu Dog implementiert und liefert "Miau"
List<Animal> animals = [new Dog("Bello"), new Cat("Minka")];

foreach (var animal in animals)
{
    Console.WriteLine(animal.Describe()); // ruft jeweils die passende MakeSound()-Implementierung auf
}
```

Neben dieser Laufzeitpolymorphie gibt es auch die **statische Polymorphie** durch _Überladen_ (engl. _Overloading_): Mehrere Methoden tragen denselben Namen, unterscheiden sich aber in ihren Parametern. Welche Methode aufgerufen wird, entscheidet hier bereits der Compiler.

## Interfaces

Schnittstellen sind Datentypen, welche **unterschiedliches** Verhalten zusammenfügen. Ein Interface definiert einen Vertrag, also welche Methoden und Properties eine Klasse anbieten muss, ohne (im Normalfall) eine Implementierung vorzugeben. Interfaces beschreiben eine **„kann“-Beziehung**: Ein `Dog` _kann_ gefüttert werden, ein `Plant` aber auch, obwohl beide sonst nichts gemeinsam haben.

```csharp
public interface IFeedable
{
    void Feed(string food);
}

public class Dog : Animal, IFeedable
{
    public Dog(string name) : base(name) { }

    public override string MakeSound() => "Wuff";

    public void Feed(string food) => Console.WriteLine($"{Name} frisst {food}.");
}
```

Im Gegensatz zu Klassen kann eine Klasse **beliebig viele Interfaces** implementieren. In C# beginnen Interface-Namen laut Konvention mit einem `I`.

### Abstrakte Klasse oder Interface?

| Abstrakte Klasse                                   | Interface                                          |
| -------------------------------------------------- | -------------------------------------------------- |
| „ist ein“-Beziehung                                | „kann“-Beziehung                                   |
| Kann Felder, Konstruktoren und Implementierung enthalten | Enthält keinen Zustand (keine Instanzfelder)  |
| Nur eine Basisklasse pro Klasse                    | Beliebig viele Interfaces pro Klasse               |
| Gut geeignet für gemeinsamen Code verwandter Klassen | Gut geeignet für gemeinsame Fähigkeiten unabhängiger Klassen |

## Komposition statt Vererbung

Vererbung koppelt Unter- und Basisklasse sehr stark aneinander. Oft ist es flexibler, ein Objekt aus anderen Objekten **zusammenzusetzen** („hat ein“-Beziehung). Dieses Prinzip heißt _Composition over Inheritance_ und bildet die Grundlage vieler [Entwurfsmuster](/de/software-development/design-patterns/), zum Beispiel des [Strategy](/de/software-development/design-patterns/behavioral-design-patterns/strategy/)- oder des [Decorator](/de/software-development/design-patterns/structural-design-patterns/decorator/)-Musters.
