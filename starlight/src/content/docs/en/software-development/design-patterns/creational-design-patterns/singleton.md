---
title: Singleton
description: Ensures that a class has exactly one instance that can be accessed globally.
---

## Problem

The Singleton design pattern ensures that a class can only have a single instance. In addition, this one instance can be accessed globally, throughout the entire program.

## Solution

First, the constructor has to be made private so that no instance of the class can be created from outside. As programmers, we want to control this creation process ourselves. That is why a static creation method is written as well, which returns a privately stored instance of the class. This ensures that every call of the `GetInstance()` method always returns the same instance.

If the instance is created directly in a static field, as in the first example, this is already thread-safe in C#, because the runtime executes static initialisations only once. However, if the instance should only be created on the first call (_lazy initialisation_), the `GetInstance()` method must be protected with `lock` in multi-threaded applications. The double-checked locking pattern can be used to improve performance, because the `LockObject` is only locked as long as no instance exists yet.

## Code

Simple Singleton design pattern:

```csharp
public class Singleton
{
    private static readonly Singleton Instance = new();

    private Singleton() { }

    public static Singleton GetInstance() => Instance;
}
```

Thread-safe Singleton design pattern with lazy initialisation using the double-checked locking pattern:

```csharp
public class Singleton
{
    private static readonly object LockObject = new object();
    private static volatile Singleton? _instance;

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

In modern C#, the same behavior can be implemented more concisely with the `Lazy<T>` class, which is thread-safe by default:

```csharp
public class Singleton
{
    private static readonly Lazy<Singleton> LazyInstance = new(() => new Singleton());

    private Singleton() { }

    public static Singleton GetInstance() => LazyInstance.Value;
}
```

## Advantages and disadvantages

- ✅ There is guaranteed to be only one instance, for example for a configuration or a logger.
- ✅ With lazy initialisation, the instance is only created when it is really needed.
- ❌ A singleton is global state and increases [coupling](/en/software-development/software-metrics/#coupling), because many classes access it directly.
- ❌ Singletons are hard to replace in unit tests. In applications with dependency injection, classes are therefore usually registered as a `Singleton` service instead of implementing the pattern yourself.
