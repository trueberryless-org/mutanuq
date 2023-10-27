---
title: Adapter
description: Adapter Pattern
sidebar:
    order: 0
---

### Problemstellung

In ein bestehendes Softwaresystem, sollen die Klassen einer externen Klassenbilothek integriert werden. Die Schnittstellendefinitionen beider Systeme werden in der Regel nicht kompatibel sein.

### Umsetzung

#### Interne Klassen

Als Beispiel werden hier 2 Klassen verwendet, die das selbe Interface implementieren.

```csharp
public interface IQuackBehaviour {
    string Quack();
}

public class RedHeadDuck : IQuackBehaviour {
    public string Quack() {
        return "... quack quack";
    }
}

public class MarbledDuck : IQuackBehaviour {
    public string Quack() {
        return "... qua qua qua";
    }
}
```

#### Externe Klasse

Diese Klasse soll in unser System integriert werden.

```csharp
public interface IHonkBehaviour {
    string Honk();
}

public class Goose : IHonkBehaviour {
    public string Honk() {
        return "... honk honk";
    }
}
```

#### Adapter

Der Adapter fungiert als Vermittler, der Anfragen vom Client erhält und diese in Anfragen umwandelt, die die neuen Klassen verstehen.

Klassen mit inkompatiblen Schnittstellen können damit in fremde Softwaresysteme integriert werden.

```csharp
public class HonkAdapter : IQuackBehaviour {

    private readonly IHonkBehaviour _honkable;

    public HonkAdapter(IHonkBehaviour honkable) {
        this._honkable = honkable;
    }

    public string Quack() {
        return this._honkable.Honk();
    }

}
```

#### Benutzung

```csharp
List<IQuackBehaviour> ducks = new() {
    new RedHeadDuck(),
    new MarbledDuck(),
    new HonkAdapter(new Goose())
};
```