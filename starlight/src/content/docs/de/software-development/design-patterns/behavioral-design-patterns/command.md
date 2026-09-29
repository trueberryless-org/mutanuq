---
title: Command
description: Kapselt eine Anfrage als eigenes Objekt, damit sie gespeichert, verzögert ausgeführt und rückgängig gemacht werden kann.
---

Das Command Entwurfsmuster ist auch als Action und Transaction Pattern bekannt.

## Problem

Oft wollen Sie Programme entwickeln, welche Operationen rückgängig machen können oder Operationen verzögern. Doch ein Programm mit `STRG` + `z` Funktionalität ist nicht einfach zu implementieren.

## Lösung

Das Command Pattern schlägt vor, eine Anfrage nicht als Methode, sondern als eigenes Objekt zu implementieren. Dadurch kann man die Anfrage nicht nur als Parameter an Methoden übergeben, in einer Warteschlange speichern oder protokollieren, sondern eben auch rückgängig machen.

An dem Muster sind folgende Rollen beteiligt:

- **Command:** Eine gemeinsame Basisklasse oder Schnittstelle mit den Methoden `Do()` (bzw. `Execute()`) und `Undo()`.
- **Konkrete Commands:** Implementieren eine bestimmte Aktion und wissen, wie sie diese wieder rückgängig machen.
- **Receiver:** Das Objekt, das die eigentliche Arbeit erledigt (im Beispiel der `Robot`).
- **Invoker:** Führt Commands aus und merkt sich die ausgeführten Commands, zum Beispiel auf einem Stack, um sie später rückgängig machen zu können.

## Code

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
public abstract class Command
{
    protected Robot Robot { get; }

    protected Command(Robot robot)
    {
        Robot = robot;
    }

    public abstract void Do();

    public abstract void Undo();
}
```

```csharp
public class MoveDownCommand : Command
{
    public MoveDownCommand(Robot robot) : base(robot) { }

    public override void Do() => Robot.MoveDown();

    public override void Undo() => Robot.MoveUp();
}
```

Der Invoker speichert alle ausgeführten Commands auf einem Stack. Beim Rückgängigmachen wird das zuletzt ausgeführte Command vom Stack genommen und dessen `Undo()`-Methode aufgerufen:

```csharp
public class CommandInvoker
{
    private readonly Stack<Command> _history = new();

    public void Execute(Command command)
    {
        command.Do();
        _history.Push(command);
    }

    public void Undo()
    {
        if (_history.TryPop(out var command))
        {
            command.Undo();
        }
    }
}
```

```csharp
var robot = new Robot();
var invoker = new CommandInvoker();

invoker.Execute(new MoveDownCommand(robot)); // Y = -1
invoker.Execute(new MoveDownCommand(robot)); // Y = -2
invoker.Undo();                              // Y = -1
```
