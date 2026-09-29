---
title: Decorator
description: Erweitert Objekte dynamisch um zusätzliches Verhalten, indem sie in Objekte mit derselben Schnittstelle eingehüllt werden.
---

## Problem

In einigen Softwareentwicklungsszenarien müssen Sie das Verhalten einer Klasse erweitern. In der objektorientierten Programmierung denken viele Programmierer instinktiv an Vererbung. Doch Vererbung ist nicht immer die beste Möglichkeit, Verhalten zu erweitern. Das Problem der Vererbung ist nämlich in vielen Programmiersprachen, dass nur von einer Basisklasse geerbt werden kann.

Stellen Sie sich folgendes Szenario vor: Sie bauen eine App mit einem Benachrichtigungssystem. Diese Benachrichtigungen sind anfangs nur mittels E-Mail möglich. Eines Tages will ein Kunde von Ihnen, dass Benachrichtigungen auch via SMS und direkt in der App gesendet werden können sollen. Sie programmieren diese Verhalten in zwei Subklassen aus. Allerdings haben Sie nun ein Problem: Benachrichtigungen können immer nur auf einem Weg gesendet werden. Sie können keine E-Mail-Benachrichtigung und SMS-Benachrichtigung auf einmal senden.

## Lösung

Verwenden Sie für die Erweiterung des Verhaltens einen Decorator. Dieser Decorator enthält eine Referenz auf die Klasse, welche erweitert werden soll. Außerdem implementiert der Decorator dieselben Interfaces wie die Referenzklasse. In den Methoden kann nun zusätzliches Verhalten vor oder nach dem Aufruf der Referenzklasse implementiert werden.

Da ein Decorator selbst wieder dieselbe Schnittstelle besitzt, können mehrere Decorators beliebig ineinander verschachtelt werden. Im Benachrichtigungsbeispiel hüllt man etwa einen `EmailNotifier` in einen `SmsDecorator` und diesen wiederum in einen `AppDecorator` – schon wird eine Nachricht über alle drei Kanäle versendet.

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

Das Muster begegnet Ihnen in .NET ständig: Ein `BufferedStream` oder ein `GZipStream` hüllt einen anderen `Stream` ein und ergänzt dessen Verhalten um Pufferung bzw. Komprimierung, ohne dass die ursprüngliche Stream-Klasse verändert werden muss.
