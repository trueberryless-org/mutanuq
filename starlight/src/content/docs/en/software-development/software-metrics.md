---
title: Software Metrics
description: Quality attributes of software systems such as scalability, openness, transparency, coupling and cohesion, measurable metrics and the SOLID principles.
sidebar:
  order: 2
---

Engineers try to build applications that are stable, flexible and maintainable, while the end user should not notice anything of the complex system behind them.

## Scalability

When more and more requests (increasing load) hit an application, it has to be scaled. There is horizontal scaling (number of machines) and vertical scaling (capacity per machine).

### Horizontal scaling

Horizontal scaling describes adding further logical units, such as additional machines, to handle the increasing load.

### Vertical scaling

Vertical scaling means that stronger or simply more resources are added within one logical unit. For example, more memory, more processor cores or better graphics cards.

## Openness

Software systems should be extensible with new functionality. At the same time, these programs should be maintainable to make the further development of the system easier. Programs that cannot be maintained are dead code. And dead code is useless.

### Interoperability

Every system should be able to communicate with other systems. This requires clearly defined interfaces, which in practice – unlike in theory – usually change while the project is being carried out.

### Portability

Systems should not only run on one particular version of an operating system. Whether the application works or not should not depend on the operating system environment. For developers, container virtualisation nowadays offers an easy way to run systems on all operating systems. For end users, the application should be reachable from all devices. Ideally, the engineers develop a PWA (Progressive Web App) for mobile devices.

## Transparency

End users do not care how the developer implemented a system.

### Access transparency

Accessing a resource always works the same way. However, there are differences in the type of access (which machine, which network, ...) and in the representation of the resource (date format in different countries, permissions, ...).

### Location transparency

End users cannot tell where a resource is physically located within the system. To achieve this, resources are identified by virtual names (URLs). These contain no information about the location. As a result, resources can come from a database, a file system or another microservice and can be moved and exchanged at will without the end user noticing anything.

### Replication transparency

End users do not notice that there are several copies of a resource. These copies are necessary for fault tolerance and better performance. All copies must have the same name. This transparency requires location transparency; otherwise, end users would know that several copies exist if there are several locations.

### Concurrency transparency

No matter how many users are currently accessing the application, the end user's resource must work without problems. The challenges here are synchronisation and consistency of the data.

## Coupling

Coupling is the degree of dependency between software elements (classes). To keep a system flexible and maintainable, coupling should be as low as possible. This means that software elements communicate with each other only through a few interfaces and do not access the concrete implementations directly.

## Cohesion

Cohesion describes the degree of internal unity of a software element. Every class should only fulfil one task, and all methods within a class must reflect the behavior of the class. The [Single Responsibility Principle](#single-responsibility-principle) describes exactly this metric within the SOLID principles.

The goal of a good design is therefore always: **low coupling, high cohesion**.

## Measurable metrics

Some of the quality attributes described so far can also be expressed in numbers. Such metrics are calculated automatically by tools like Visual Studio ("Calculate Code Metrics"), SonarQube or JetBrains Rider.

| Metric                                  | Meaning                                                                                                                          |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Lines of Code (LOC)**                 | Number of lines of code. Easy to measure, but says little about quality.                                                          |
| **Cyclomatic complexity** (McCabe)      | Number of linearly independent paths through a method (number of branches + 1). Values above 10 are considered hard to test.      |
| **Class coupling**                      | Number of other classes a class depends on.                                                                                       |
| **Depth of inheritance**                | Number of base classes up to the root of the inheritance hierarchy. Deep hierarchies are hard to understand.                      |
| **Maintainability index**               | Value between 0 and 100 calculated from LOC, cyclomatic complexity and Halstead volume. Higher is better.                         |
| **Code coverage**                       | Share of the code that is executed by automated tests.                                                                            |

## SOLID principles

### Single Responsibility Principle

The SRP states that every software module should only ever have one single task. If a method, for example, reads a text file, saves it to a database and displays it in the application, this principle is violated.

This principle defines [cohesion](#cohesion).

> "There should never be more than one reason for a class to change" - Robert C. Martin

Originally, the SRP only referred to classes; today it applies to software modules in general (services, classes, methods, ...).

### Open / Closed Principle

A class should be open for extension but closed for modification. This means that new functionality is best implemented not by changing an existing class, but by adding a new class. You want to avoid that changes to an existing class cause errors in other parts of the application.

This promotes low [coupling](#coupling).

### Liskov Substitution Principle

With inheritance, it must be possible to use an instance of the subclass instead of an instance of the base class without the program behaving incorrectly. In order not to violate this principle, there are specific rules to follow when creating a subclass:

-   A parameter of a subclass method must be the same as or more abstract than the parameter of the base class method. If the base class method signature is, for example, `walk(Dog d)`, the subclass method signature can be `walk(Dog d)` or `walk(Animal d)`. However, the subclass must not restrict the parameter to a more specific type, such as `walk(Bulldog d)`. In that case, not every `Dog` instance could be passed to the `walk()` method anymore, even though the caller only knows the base class and assumes that any `Dog` is allowed.

-   For return values, it is exactly the other way round: the return value of a subclass method must be the same as or more specific than (i.e. derived from) the return value of the base class method. If the base class implements `Dog getInstance()`, the subclass may only implement `Dog getInstance()` or `Bulldog getInstance()`, but not `Animal getInstance()`. Otherwise, a caller working with the base class type and expecting a `Dog` could suddenly receive a different animal (for example a `Cat`).

-   A subclass method should not throw an `Exception` that the base class does not expect.

-   A subclass must not strengthen the preconditions of a method or weaken its postconditions. The classic counterexample is a `Square` that inherits from `Rectangle`: setting the width of a square also changes its height – a caller expecting a `Rectangle` therefore gets wrong areas.

If all of this sounds a bit complicated, don't worry. In statically typed programming languages (Java, C#, ...), the rules about parameters and return values are largely checked by the compiler already. However, you have to follow the behavioral rules (exceptions, pre- and postconditions) yourself.

### Interface Segregation Principle

No class should be forced to depend on methods it does not use. An interface should therefore only define (not implement) one single, coherent behavior. The opposite would be the case if all methods were defined in one single huge interface and implementing classes could only "fulfil" many of them with a `NotImplementedException`.

This principle thus improves the [cohesion](#cohesion) of every interface.

### Dependency Inversion Principle

The Dependency Inversion Principle states:

1. High-level modules (for example the business logic) should not depend on low-level modules (for example the database access). Both should depend on **abstractions** (interfaces).
2. Abstractions should not depend on details; details should depend on abstractions.

An `OrderService` class should therefore not use an `SqlOrderRepository` class directly, but only know an `IOrderRepository` interface. The concrete implementation can then be replaced, for example by an in-memory variant for tests.

```csharp
public class OrderService
{
    private readonly IOrderRepository _repository;

    // The dependency is passed in from outside (constructor injection)
    public OrderService(IOrderRepository repository)
    {
        _repository = repository;
    }
}
```

#### Dependency injection

In practice, this principle is usually implemented with **dependency injection**: instances are not created by the classes themselves when they are needed, but are created and managed by a framework (a so-called DI container). The programmer no longer takes care of all the instances required for a desired functionality – the system does. The developer only has to declare which instances are needed.

> "Don't call us, we'll call you"

These instances often have a lifetime that can be defined by the developer. In .NET (for example ASP.NET Core or Blazor), there are `Singleton` (one instance for the entire lifetime of the application), `Scoped` (one instance per request, or per client connection in Blazor Server) and `Transient` (a new instance every time one is requested).

```csharp
builder.Services.AddSingleton<IClock, SystemClock>();
builder.Services.AddScoped<IOrderRepository, SqlOrderRepository>();
builder.Services.AddTransient<IEmailSender, SmtpEmailSender>();
```
