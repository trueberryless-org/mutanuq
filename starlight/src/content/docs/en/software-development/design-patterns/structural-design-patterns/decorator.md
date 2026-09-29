---
title: Decorator
description: Dynamically adds behavior to objects by wrapping them in objects with the same interface.
---

## Problem

In some software development scenarios, you need to extend the behavior of a class. In object-oriented programming, many programmers instinctively think of inheritance. But inheritance is not always the best way to extend behavior. The problem with inheritance in many programming languages is that you can only inherit from one base class.

Imagine the following scenario: you are building an app with a notification system. Initially, notifications can only be sent by e-mail. One day, a customer wants notifications to also be sent via SMS and directly within the app. You implement these behaviors in two subclasses. However, now you have a problem: notifications can only ever be sent in one way. You cannot send an e-mail notification and an SMS notification at the same time.

## Solution

Use a decorator to extend the behavior. This decorator holds a reference to the class that is to be extended. In addition, the decorator implements the same interfaces as the referenced class. In its methods, additional behavior can now be implemented before or after calling the referenced class.

Since a decorator itself has the same interface again, several decorators can be nested inside each other as desired. In the notification example, you could wrap an `EmailNotifier` in an `SmsDecorator` and that in turn in an `AppDecorator` – and a message is sent through all three channels.

## Code

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

```csharp
IQuackable duck = new QuackCountDecorator(new Duck());

duck.Quack();
duck.Quack();

Console.WriteLine(QuackCountDecorator.Counter); // 2
```

## Decorators in .NET

You encounter this pattern all the time in .NET: a `BufferedStream` or a `GZipStream` wraps another `Stream` and adds buffering or compression to its behavior without the original stream class having to be changed.
