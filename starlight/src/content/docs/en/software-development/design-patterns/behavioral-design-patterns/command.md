---
title: Command
description: Encapsulates a request as its own object so that it can be stored, executed later and undone.
---

The Command design pattern is also known as the Action or Transaction pattern.

## Problem

You often want to develop programs that can undo operations or delay them. But a program with `Ctrl` + `Z` functionality is not easy to implement.

## Solution

The Command pattern suggests implementing a request not as a method, but as a separate object. This way, the request can not only be passed as a parameter to methods, stored in a queue or logged, but also undone.

The pattern involves the following roles:

- **Command:** A common base class or interface with the methods `Do()` (or `Execute()`) and `Undo()`.
- **Concrete commands:** Implement a specific action and know how to undo it.
- **Receiver:** The object that does the actual work (the `Robot` in the example).
- **Invoker:** Executes commands and remembers the executed commands, for example on a stack, so that they can be undone later.

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

The invoker stores all executed commands on a stack. When undoing, the most recently executed command is taken from the stack and its `Undo()` method is called:

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
