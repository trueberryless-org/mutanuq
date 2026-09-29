---
title: Object-Oriented Programming
description: Classes, objects, encapsulation, abstraction, inheritance, polymorphism and interfaces explained with C# examples.
sidebar:
  order: 1
---

Object-oriented programming (OOP) is a programming paradigm in which data and the behavior that operates on this data are combined into **objects**. Instead of viewing a program as a long sequence of instructions, you model it as an interplay of objects that communicate with each other – similar to things in the real world.

## Classes and objects

A **class** is the blueprint for objects. It defines which data (fields and properties) and which behavior (methods) an object has. An **object** is a concrete instance of a class that is created at runtime using `new`.

```csharp
public class Car
{
    public string Brand { get; }
    public int Speed { get; private set; }

    public Car(string brand)
    {
        Brand = brand;
    }

    public void Accelerate(int delta) => Speed += delta;
}

var car = new Car("Škoda"); // object (instance) of the Car class
car.Accelerate(50);
```

The **constructor** is called when an object is created and ensures that the object is in a valid state from the very beginning.

## The four pillars of OOP

### Encapsulation

Encapsulation means that the internal state of an object is protected from direct access from outside. Access happens exclusively through defined methods or properties. In C#, this is controlled with **access modifiers**:

| Modifier             | Visibility                                                      |
| -------------------- | --------------------------------------------------------------- |
| `public`             | Visible everywhere                                              |
| `private`            | Only within the class itself (default for class members)        |
| `protected`          | Within the class itself and in derived classes                  |
| `internal`           | Within the same assembly (default for classes)                  |
| `protected internal` | Within the same assembly or in derived classes                  |
| `private protected`  | In derived classes, but only within the same assembly           |

In the example above, `Speed` can be read from outside but only changed through `Accelerate`. This way, the class itself can make sure that its state stays valid.

### Abstraction

Abstraction means exposing only the properties that are essential for using an object and hiding implementation details. Whoever calls the `Accelerate` method does not need to know how the speed is calculated internally. Abstract classes and interfaces are the most important tools for this.

### Inheritance

With inheritance, a derived class (subclass) takes over the fields and methods of a base class (superclass) and can extend or override them. Inheritance describes an **"is a" relationship**: an `ElectricCar` _is a_ `Car`.

Base classes are data types that combine **similar** behavior.

```csharp
public abstract class Animal
{
    public string Name { get; }

    protected Animal(string name) => Name = name;

    public abstract string MakeSound();

    public virtual string Describe() => $"{Name} says {MakeSound()}";
}

public class Dog : Animal
{
    public Dog(string name) : base(name) { }

    public override string MakeSound() => "Woof";
}
```

- An **abstract class** (`abstract`) cannot be instantiated and may contain abstract methods without an implementation.
- With `virtual`, the base class allows a method to be overridden; with `override`, it is overridden in the subclass.
- With `base`, you access the constructor or methods of the base class.
- C# and Java only support **single inheritance** of classes: a class can inherit from exactly one base class.

### Polymorphism

Polymorphism ("many forms") means that an object can be addressed through the type of its base class or an interface, but shows the behavior of its actual type at runtime. This is called **dynamic binding**.

```csharp
// Cat is implemented like Dog and returns "Meow"
List<Animal> animals = [new Dog("Buddy"), new Cat("Kitty")];

foreach (var animal in animals)
{
    Console.WriteLine(animal.Describe()); // calls the matching MakeSound() implementation
}
```

Besides this runtime polymorphism, there is also **static polymorphism** through _overloading_: several methods share the same name but differ in their parameters. In this case, the compiler already decides which method is called.

## Interfaces

Interfaces are data types that combine **different** behavior. An interface defines a contract – that is, which methods and properties a class must provide – without (usually) prescribing an implementation. Interfaces describe a **"can do" relationship**: a `Dog` _can_ be fed, but so can a `Plant`, even though both have nothing else in common.

```csharp
public interface IFeedable
{
    void Feed(string food);
}

public class Dog : Animal, IFeedable
{
    public Dog(string name) : base(name) { }

    public override string MakeSound() => "Woof";

    public void Feed(string food) => Console.WriteLine($"{Name} eats {food}.");
}
```

Unlike base classes, a class can implement **any number of interfaces**. By convention, interface names in C# start with an `I`.

### Abstract class or interface?

| Abstract class                                       | Interface                                                 |
| ---------------------------------------------------- | --------------------------------------------------------- |
| "is a" relationship                                  | "can do" relationship                                     |
| Can contain fields, constructors and implementation  | Contains no state (no instance fields)                    |
| Only one base class per class                        | Any number of interfaces per class                        |
| Well suited for shared code of related classes       | Well suited for shared capabilities of unrelated classes  |

## Composition over inheritance

Inheritance couples a subclass very tightly to its base class. It is often more flexible to **compose** an object from other objects ("has a" relationship). This principle is called _composition over inheritance_ and forms the basis of many [design patterns](/en/software-development/design-patterns/), for example the [Strategy](/en/software-development/design-patterns/behavioral-design-patterns/strategy/) or the [Decorator](/en/software-development/design-patterns/structural-design-patterns/decorator/) pattern.
