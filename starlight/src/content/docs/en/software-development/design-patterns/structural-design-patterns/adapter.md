---
title: Adapter
description: Translates one interface into another so that incompatible classes can work together.
---

## Problem

In software development, it often happens that different systems or components use different methods and structures, which makes direct collaboration difficult. An example of such an incompatibility between two existing interfaces or classes: you have an interface `IQuackable` that defines the method signature `Quack`. A second interface `IHonkable` defines the method `Honk`. Now you want to create a list of `IQuackable`s that should contain an object which only implements `IHonkable`.

## Solution

You can create an adapter for this. This adapter is a separate, special class that converts an interface so that it can be understood by another object. In our example, the adapter implements `IQuackable` and stores a reference to an `IHonkable` object. In the `Quack` method, the `Honk` method of our `IHonkable` object is called.

An adapter therefore works like a travel plug adapter: neither the socket nor the device is changed – the adapter in between makes sure that both fit together.

## Code

```csharp
public interface IQuackable
{
    string Quack();
}

public interface IHonkable
{
    string Honk();
}
```

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

```csharp
List<IQuackable> quackables =
[
    new Duck(),
    new HonkAdapter(new Goose()), // Goose only implements IHonkable
];

foreach (var quackable in quackables)
{
    Console.WriteLine(quackable.Quack());
}
```

## Typical use cases

- Integrating third-party libraries or legacy code whose interfaces you cannot or do not want to change.
- Connecting different external services (for example several payment providers) through a shared interface of your own.
