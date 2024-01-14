---
title: Python
sidebar:
    order: 0
---

Python ist eine weit verbreitete, benutzerfreundliche Programmiersprache, entwickelt von Guido van Rossum. Mit klarer Syntax und hoher Lesbarkeit ist sie für Anfänger und erfahrene Entwickler gleichermaßen attraktiv. Python wird in Webentwicklung, Datenanalyse, künstlicher Intelligenz und anderen Bereichen eingesetzt. Die Sprache zeichnet sich durch Einfachheit und Flexibilität aus. Ein charakteristisches Merkmal ist, dass Python eine interpretierte Sprache ist, was bedeutet, dass ein Interpreter verwendet wird, um den Code direkt auszuführen, ohne ihn vorher zu kompilieren. Mit einer umfangreichen Standardbibliothek und einer aktiven Entwicklergemeinschaft bietet Python eine robuste Plattform für verschiedene Projekte.

# Grundlegende Syntax

## Variablen

In Python können verschiedene Datentypen für die Speicherung von Informationen verwendet werden.

```python
# Booleans repräsentieren Wahrheitswerte, die entweder True (wahr) oder False (falsch) sind.
im_cool = True  # oder False

# Strings sind Zeichenketten, die Text repräsentieren.
name = "trueberryless"

# Integers sind ganze Zahlen ohne Dezimalstellen.
age = 38

# Floats sind Zahlen mit Dezimalstellen.
book_price = 15.80

# Listen sind geordnete Sammlungen von Elementen.
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(numbers[2])  # Gibt das dritte Element der Liste aus, in diesem Fall 3.

# Dictionaries sind Sammlungen von Schlüssel-Wert-Paaren.
person = {
    "name": name,  # Der Schlüssel "name" hat den Wert "trueberryless".
    "age": age  # Der Schlüssel "age" hat den Wert 38.
}
person["favourite_numbers"] = numbers
print(person["name"])  # Gibt den Wert des Schlüssels "name" im Dictionary aus.
```

## Ablaufsteuerung

Die Ablaufsteuerung ermöglicht die Kontrolle über den Programmfluss.

```python
# Die if-Anweisung ermöglicht die Ausführung von Code basierend auf einer Bedingung.
if False:
    print("Never gonna give you up")

# Die elif-Anweisung ermöglicht das Überprüfen weiterer Bedingungen.
if 1 > 2:
    print("1 is greater than 2")
elif 2 > 1:
    print("1 is not greater than 2")
else:
    print("1 is equal to 2")

# Die for-Schleife wird verwendet, um über eine Sequenz von Elementen zu iterieren.
for i in range(1, 100):
    print(i)

# Die for-Schleife kann auch über Elemente einer Liste iterieren.
for number in numbers:
    print(number)

# Die for-Schleife kann auch über Schlüssel-Wert-Paare eines Dictionaries iterieren.
for key, value in person.items():
    print("My %s is %s" % (key, value))  # Gibt formatierten Text aus.

# Die while-Schleife wird wiederholt, solange eine Bedingung wahr ist.
while age < 66:
    print("You are still young")
    age += 1
```

## Klassen

Klassen ermöglichen die Definition von benutzerdefinierten Datentypen (Eigenschaften realer Objekte) und Methoden (Verhalten realer Objekte).

```python
# Eine grundlegende Klasse "Vehicle" mit einem Konstruktor und Getter/Setter-Methoden.
class Vehicle:
    def __init__(self, number_of_wheels, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.maximum_velocity = maximum_velocity

    @property
    def number_of_wheels(self):
        return self.number_of_wheels

    @number_of_wheels.setter
    def number_of_wheels(self, number):
        self.number_of_wheels = number

# Die Klasse "Car" erbt von "Vehicle" und ruft den Konstruktor der Elternklasse auf.
class Car(Vehicle):
    def __init__(self, number_of_wheels, maximum_velocity):
        super().__init__(number_of_wheels, maximum_velocity)

# Die Klasse "SpaceShip" erbt ebenfalls von "Vehicle" und hat keine eigenen Änderungen.
class SpaceShip(Vehicle):
    pass

# Ein Objekt der Klasse "Car" wird erstellt.
tesla_model_s = Car(4, 300)
```
