---
title: Adapter
description: Übersetzt eine Schnittstelle in eine andere, damit inkompatible Klassen zusammenarbeiten können.
---

## Problem

In Softwareentwicklungsszenarien kommt es häufig vor, dass verschiedene Systeme oder Komponenten unterschiedliche Methoden und Strukturen verwenden, was die direkte Zusammenarbeit erschwert. Ein Beispiel für diese Inkompatibilität zwischen zwei bestehenden Schnittstellen oder Klassen ist wie folgt: Du hast ein Interface `IQuackable`, welches den Methodenkopf `Quack` vorgibt. Ein zweites Interface `IHonkable` gibt die Methode `Honk` an. Nun willst du eine Liste mit `IQuackables` erstellen und dort soll ein Objekt enthalten sein, welches nur `IHonkable` implementiert.

## Lösung

Du kannst hierfür einen Adapter erstellen. Dieser Adapter ist eine eigene spezielle Klasse, welche ein Interface so konvertiert, dass es von einem anderen Objekt verstanden werden kann. In unserem Beispiel implementiert dieser Adapter `IQuackable` und speichert eine Referenz auf ein `IHonkable`-Objekt. In der Methode `Quack` wird die `Honk`-Methode von unserem `IHonkable`-Objekt aufgerufen.

Ein Adapter funktioniert also wie ein Reisestecker: Weder die Steckdose noch das Gerät werden verändert, der Adapter dazwischen sorgt dafür, dass beide zusammenpassen.

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
    new HonkAdapter(new Goose()), // Goose implementiert nur IHonkable
];

foreach (var quackable in quackables)
{
    Console.WriteLine(quackable.Quack());
}
```

## Typische Einsatzgebiete

- Einbinden von Fremdbibliotheken oder Legacy-Code, deren Schnittstellen man nicht ändern kann oder will.
- Anbinden unterschiedlicher externer Dienste (zum Beispiel mehrerer Zahlungsanbieter) über eine gemeinsame, eigene Schnittstelle.
