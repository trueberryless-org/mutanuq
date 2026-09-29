---
title: Strategy
description: Encapsulates interchangeable algorithms in separate classes that can be swapped at runtime.
---

## Problem

If a class is supposed to offer several different strategies to achieve a certain result, this class can quickly become large and unmaintainable. You want to avoid this at all costs. Imagine you are developing a navigation app with the features "walking", "driving a car" and "using public transport". Implementing all these features in one class means shooting yourself in the foot.

## Solution

Create a separate class for each feature – for each strategy – all of which implement the same interface. Now the `Context` class can store a reference to this interface and simply call its methods. In object-oriented programming, this saves you many unnecessary `if` statements, because [polymorphism](/en/software-development/object-oriented-programming/#polymorphism) automatically calls the right implementation. The runtime recognises the actual type of the referenced object and calls the code of that class.

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

    // The selected strategy can therefore also be changed at runtime
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
