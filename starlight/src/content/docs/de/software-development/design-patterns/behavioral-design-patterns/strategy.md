---
title: Strategy
description: Kapselt austauschbare Algorithmen in eigenen Klassen, die zur Laufzeit gewechselt werden können.
---

## Problem

Wenn eine Klasse mehrere verschiedene Strategien anbieten soll, ein bestimmtes Ergebnis zu erzielen, dann kann diese Klasse schnell groß und unwartbar werden. Dies will man um jeden Preis vermeiden. Stell dir vor, du entwickelst eine Navigationsapp mit den Funktionalitäten „zu Fuß gehen“, „mit dem Auto fahren“ und „Öffis benutzen“. All diese Funktionen in einer Klasse zu implementieren, ist ein Schuss ins eigene Knie.

## Lösung

Erstelle für jede Funktionalität, also für jede Strategie, eine eigene Klasse, die alle dieselbe Schnittstelle implementieren. Nun kann man in der `Context`-Klasse eine Referenz auf diese Schnittstelle speichern und die Methoden einfach aufrufen. In der objektorientierten Programmierung spart man sich somit viele unnötige `if`-Bedingungen, da durch [Polymorphie](/de/software-development/object-oriented-programming/#polymorphie) automatisch die richtige Implementierung aufgerufen wird. Die Laufzeitumgebung erkennt den tatsächlichen Typ des referenzierten Objekts und ruft den Code dieser Klasse auf.

## Code

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
