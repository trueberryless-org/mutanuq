---
title: Design Patterns
tableOfContents:
    minHeadingLevel: 2
    maxHeadingLevel: 3
---

In der Softwareentwicklung kommt es oft vor, dass ähnliche Problemstellungen gelöst werden müssen. Um bereits durchdachte Lösungen für diese Probleme effizienter umsetzen und entwickeln zu können, gibt es **Design Patterns**.

:::note[Hinweis]
Alle Design Patterns und Kategorien werden hier mit dem englisch Originalnamen genannt, um eine sprachliche Konsistenz zu schaffen.
:::

## Creational Design Patterns

Creational Design Patterns beschäftigen sich mit Problemstellungen beim Erstellen von Objekten.

### Singleton

#### Problem

Das Singleton Design Patterns sorgt dafür, dass eine Klasse nur eine einzige Instanz haben kann. Außerdem kann auf diese eine Instanz global - im gesamten Programm - zugegriffen werden.

#### Lösung

Zuerst muss der Konstruktor auf privat gestellt werden, damit keine Instanz der Klasse erstellt werden kann. Diesen Prozess des Erstellens wollen nämlich wir als Programmierer steuern können. Deswegen wird außerdem eine statische Erstellungsmethode geschrieben, welche eine privat gespeicherte Instanz der Klasse zurück gibt. Somit wird sichergestellt, dass bei jedem Aufruf der `GetInstance()`-Methode immer die gleiche Instanz zurückgegeben wird.

Um dieses Verhalten auch bei Multi-Thread-Anwendungen zu garantieren, kann die `GetInstance()`-Methode mittels ThreadLock erweitert werden. Dabei kann das Double-Checked-Locking-Pattern verwendet werden, damit die Leistung verbessert wird. Denn nur der erste Aufruf der Methode, sperrt das `LockObject`.

#### Code

Einfaches Singleton Design Pattern:

```csharp
public class Singleton
{
    private static readonly Singleton Instance = new();

    private Singleton() { }

    public static Singleton GetInstance() => Instance;
}
```

Threadsicheres Singleton Design Pattern mittels Double-Checked-Locking-Pattern:

```csharp
public class Singleton
{
    private static readonly object LockObject = new object();
    private static readonly Singleton Instance = new();

    private Singleton() { }

    public static Singleton GetInstance()
    {
        if (_instance == null)
        {
            lock (LockObject)
            {
                if (_instance == null)
                {
                    _instance = new Singleton();
                }
            }
        }
        return _instance;
    }
}
```

## Structural Design Patterns

Structural Design Patterns beschäftigen sich mit dem Aufbau von Klassen in großen Strukturen, damit diese Strukturen flexible und effizient gleichzeitig effizient bleiben.

### Adapter

#### Problem

In Softwareentwicklungsszenarien kommt es häufig vor, dass verschiedene Systeme oder Komponenten unterschiedliche Methoden und Strukturen verwenden, was die direkte Zusammenarbeit erschwert. Ein Beispiel für diese Inkompatibilität zwischen zwei bestehenden Schnittstellen oder Klassen ist wie folgt: Sie haben ein Interface `IQuackable`, welches den Methodenkopf `Quack` vorgibt. Ein zweites Interface `IHonkable` gibt die Methode `Honk` an. Nun wollen Sie eine Liste mit IQuackables erstellen und dort soll ein Objekt enthalten sein, welches nur von `IHonkable` erbt.

#### Lösung

Sie können hierfür einen Adapter erstellen. Dieser Adapter ist eine eigene spezielle Klasse, welche ein Interface so konvertiert, dass es von einem anderen Objekt verstanden werden kann. In unserem Beispiel erbt dieser Adapter von `IQuackable` und hat eine Property `IHonkable`. In der Methode `Quack` wird die `Honk`-Methode von unserem `IHonkable`-Objekt aufgerufen.

#### Code

```csharp
public class HonkAdapter : IQuackable
{
    private readonly IHonkable _honkable;

    public HonkAdapter(IHonkable honkable)
    {
        _honkable = honkable;
    }

    public string Quack() => _honkable.Honk();
}
```

### Decorator

#### Problem

In einigen Softwareentwicklungsszenarien müssen Sie das Verhalten einer Klasse erweitern. In der Objekt-orientierten Programmierung denken viele Programmierer instinktiv an Vererbung. Doch Vererbung ist nicht immer die beste Möglichkeit, Verhalten zu erweitern. Das Problem der Vererbung ist nämlich in vielen Programmiersprachen, dass nur von einer Basisklasse geerbt werden kann.

Stelle Sie sich folgendes Szenario vor: Sie bauen eine App mit einem Benachrichtigungssystem. Diese Benachrichtigungen sind anfangs nur mittels E-Mail möglich. Eines Tages will ein Kunde von Ihnen, dass Benachrichtigungen auch via SMS und direkt in der App gesendet werden können sollen. Sie programmieren diese Verhalten in zwei Subklassen aus. Allerdings haben Sie nun ein Problem: Benachrichtigungen können immer nur auf einen Weg gesendet werden. Sie können keine E-Mail-Benachrichtigung und SMS-Benachrichtigung auf einmal senden.

#### Lösung

Verwenden Sie für die Erweiterung des Verhaltens einen Decorator. Dieser Decorator enthält eine Referenz auf die Klasse, welche erweitert werden soll. Außerdem erbt der Decorator von den gleichen Interfaces wie die Referenzklasse. In den Methoden kann nun zusätzliches Verhalten vor oder nach dem Aufruf der Referenzklasse implementiert werden.

#### Code

```csharp
public class QuackCountDecorator : IQuackable
{
    private readonly IQuackable _quackable;

    public static int Counter = 0;

    public QuackCountDecorator(IQuackable quackable)
    {
        _quackable = quackable;
    }

    public string Quack()
    {
        Counter++;
        return _quackable.Quack();
    }
}
```

## Behavioral Design Patterns

Behavioral Design Patterns beschäftigen sich mit Algorithmen und Zuweisung von Verantwortlichkeiten zwischen Objekten.

### Command

Das Command Design Pattern ist auch als Action und Transaction Pattern bekannt.

#### Problem

Oft wollen Sie Programme entwickeln, welche Operationen rückgängig machen können oder Operationen verzögern. Doch ein Programm mit `STRG` + `z` Funktionalität ist nicht einfach zu implementieren.

#### Lösung

Das Command Pattern schlägt vor, eine Anfrage nicht als Methode sondern als eigenen Komponenten aus zu implementieren. Dadurch kann man die Anfrage nicht nur als Parameter in Methoden übergeben, sondern eben auch rückgängig machen.

#### Code

```csharp
public class Robot
{
    public int X { get; set; }
    public int Y { get; set; }

    public void MoveUp() => Y++;
    public void MoveDown() => Y--;
    public void MoveRight() => X++;
    public void MoveLeft() => X--;
}
```

```csharp
public class MoveDownCommand
{
    public MoveDownCommand(Robot robot) : base(robot) { }

    public override void Do() => Robot.MoveDown();

    public override void Undo() => Robot.MoveUp();
}
```

### Strategy

#### Problem

Wenn eine Klasse mehrere verschiedene Strategien anbieten soll, ein bestimmtes Ergebnis zu erzielen, dann kann diese Klasse schnell groß und unwartbar werden. Dies will man um jeden Preis vermeiden. Stelle Sie sich vor, Sie entwickeln eine Navigationsapp mit den Funktionalitäten „zu Fuß gehen“, „mit dem Auto fahren“ und „Öffis benutzen“. All diese Funktionen in einer Klasse zu implementieren ist ein Schuss ins eigene Knie.

#### Lösung

Erstellen Sie für jede Funktionalität - für jede Strategie - eine eigene Klasse, alle erben von der gleichen Schnittstelle. Nun kann man in der `Context`-Klasse eine Referenz auf diese Schnittstelle speichern und die Methoden einfach aufrufen. In der Objekt-orientierten Programmierung spart man sich somit viele unnötige `If`-Bedingungen, da das Framework automatisch die richtige Implementierung aufruft. Das Framework erkennt den Typen der Referenz und ruft den Code von dieser Klasse auf.

#### Code

```csharp
public interface IStrategy
{
    object DoSomething(object data);
}
```

```csharp
class ConcreteStrategyA : IStrategy
{
    public object DoSomething(object data)
    {
        var list = data as List<string>;
        list.Sort();

        return list;
    }
}
```

```csharp
class ConcreteStrategyB : IStrategy
{
    public object DoSomething(object data)
    {
        var list = data as List<string>;
        list.Sort();
        list.Reverse();

        return list;
    }
}
```

```csharp
class Context
{
    private IStrategy _strategy;

    public Context()
    { }

    public Context(IStrategy strategy)
    {
        this._strategy = strategy;
    }

    // Die ausgewählte Strategie kann somit auch zur Runtime geändert werden
    public void SetStrategy(IStrategy strategy)
    {
        this._strategy = strategy;
    }

    public void DoSomeBusinessLogic()
    {
        Console.WriteLine("Context: Sorting data using the strategy (not sure how it'll do it)");
        var result = this._strategy.DoSomething(new List<string> { "a", "b", "c", "d", "e" });

        string resultStr = string.Empty;
        foreach (var element in result as List<string>)
        {
            resultStr += element + ",";
        }

        Console.WriteLine(resultStr);
    }
}
```

```csharp
class Program
{
    static void Main(string[] args)
    {
        var context = new Context();

        Console.WriteLine("Client: Strategy is set to normal sorting.");
        context.SetStrategy(new ConcreteStrategyA());
        context.DoSomeBusinessLogic();

        Console.WriteLine();

        Console.WriteLine("Client: Strategy is set to reverse sorting.");
        context.SetStrategy(new ConcreteStrategyB());
        context.DoSomeBusinessLogic();
    }
}
```
