---
title: Singleton
description: Singleton Pattern
sidebar:
    order: 0
---

### Problemstellung

In einer Softwareanwendung soll es nur eine einzelne Instanz von einer gewissen Klasse geben. 


### Umsetzung

```csharp
public class Logger {
    private static readonly Logger Instance = new Logger();

    // Damit von außerhalb keine Instanzen der Klasse erzeugt 
    // werden können, wird der Konstruktor private gesetzt.
    private Logger() { }

    //Für den globalen Zugriff
    public static Logger GetInstance() => Instance;
    
    public void Log(string message) {
        Console.WriteLine(message);
    }
}
```

### Benutzung

```csharp
var logger = Logger.GetInstance();
logger.Log("Hello World!");
```