---
title: Singleton
description: Stellt sicher, dass es von einer Klasse genau eine Instanz gibt, auf die global zugegriffen werden kann.
---

## Problem

Das Singleton Entwurfsmuster sorgt dafür, dass eine Klasse nur eine einzige Instanz haben kann. Außerdem kann auf diese eine Instanz global – im gesamten Programm – zugegriffen werden.

## Lösung

Zuerst muss der Konstruktor auf privat gestellt werden, damit keine Instanz der Klasse von außen erstellt werden kann. Diesen Prozess des Erstellens wollen nämlich wir als Programmierer steuern können. Deswegen wird außerdem eine statische Erstellungsmethode geschrieben, welche eine privat gespeicherte Instanz der Klasse zurückgibt. Somit wird sichergestellt, dass bei jedem Aufruf der `GetInstance()`-Methode immer die gleiche Instanz zurückgegeben wird.

Wird die Instanz wie im ersten Beispiel direkt in einem statischen Feld erzeugt, ist dies in C# bereits threadsicher, weil die Laufzeitumgebung statische Initialisierungen nur ein einziges Mal ausführt. Soll die Instanz jedoch erst beim ersten Aufruf erzeugt werden (_Lazy Initialization_), muss die `GetInstance()`-Methode bei Multi-Thread-Anwendungen mittels `lock` abgesichert werden. Dabei kann das Double-Checked-Locking-Pattern verwendet werden, damit die Leistung verbessert wird. Denn nur solange noch keine Instanz existiert, wird das `LockObject` gesperrt.

## Code

Einfaches Singleton Entwurfsmuster:

```csharp
public class Singleton
{
    private static readonly Singleton Instance = new();

    private Singleton() { }

    public static Singleton GetInstance() => Instance;
}
```

Threadsicheres Singleton Entwurfsmuster mit Lazy Initialization mittels Double-Checked-Locking-Pattern:

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

In modernem C# lässt sich dasselbe Verhalten auch kürzer mit der Klasse `Lazy<T>` umsetzen, die standardmäßig threadsicher ist:

```csharp
public class Singleton
{
    private static readonly Lazy<Singleton> LazyInstance = new(() => new Singleton());

    private Singleton() { }

    public static Singleton GetInstance() => LazyInstance.Value;
}
```

## Vor- und Nachteile

- ✅ Es existiert garantiert nur eine Instanz, zum Beispiel für eine Konfiguration oder einen Logger.
- ✅ Die Instanz wird bei Lazy Initialization erst erzeugt, wenn sie wirklich gebraucht wird.
- ❌ Ein Singleton ist globaler Zustand und erhöht die [Kopplung](/de/software-development/software-metrics/#koppelung), da viele Klassen direkt darauf zugreifen.
- ❌ Singletons lassen sich in Unit-Tests schwer austauschen. In Anwendungen mit Dependency Injection registriert man Klassen daher meist als `Singleton`-Service, anstatt das Muster selbst zu implementieren.
