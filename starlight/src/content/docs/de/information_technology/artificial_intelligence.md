---
title: Künstliche Intelligenz
sidebar:
    order: 5
---

Künstliche Intelligenz (KI) bezeichnet die Fähigkeit von Maschinen, menschliche Intelligenz nachzuahmen, indem sie Aufgaben wie Lernen, Problemlösen und Entscheidungsfindung durchführen. Die Entwicklung der KI hat in der Vergangenheit drei bedeutende Hype-Phasen erlebt: in den 1960er, 1980er und 2010er Jahren.

## Geschichte & Entwicklung

In den 1960er Jahren erlebte die KI ihre erste Blütezeit, angetrieben durch frühe Fortschritte in der symbolischen KI und die Entwicklung der ersten neuronalen Netzwerke. Der zweite Hype in den 1980er Jahren wurde durch die Einführung von Expertensystemen und verbesserten Algorithmen beflügelt. Der jüngste und bislang bedeutendste Hype begann in den 2010er Jahren, als Fortschritte in der Hardware, wie leistungsfähigere und erschwinglichere GPUs, die Demokratisierung der KI ermöglichten. Gleichzeitig führte die Verfügbarkeit großer Datenmengen (Big Data) dazu, dass maschinelles Lernen und insbesondere Deep Learning enorme Fortschritte machten.

In den letzten Jahren hat die Entwicklung von KI einen weiteren Schub erhalten. Modelle wie ChatGPT, das öffentlich zugänglich gemacht wurde, demonstrieren die Leistungsfähigkeit moderner Sprachmodelle, die in der Lage sind, menschenähnliche Texte zu generieren und komplexe Anfragen zu beantworten. Heutzutage wird KI in vielen Bereichen inkludiert, darunter Gesundheitswesen, Finanzwesen, Bildung, Automobilindustrie und Kundenservice. Diese Anwendungen revolutionieren die Art und Weise, wie wir leben und arbeiten, und machen KI zu einem integralen Bestandteil unseres Alltags.

## Anwendungsbereiche

Künstliche Intelligenz (KI) hat in den letzten Jahren eine Vielzahl von Anwendungsbereichen gefunden, die unser tägliches Leben und verschiedene Industrien revolutionieren. Von der Medizin bis zum Verkehr bietet KI Lösungen, die Effizienz und Genauigkeit erhöhen. Hier sind einige der wichtigsten Anwendungsbereiche von KI:

-   **Medizin**: Erkennung von Krankheiten und Unterstützung bei Diagnosen.
-   **Finanzen**: Analyse von Finanzmärkten und Betrugserkennung.
-   **Generierung** von Medien: Erstellen von Texten, Bildern und Videos.
-   **Gesichtserkennung**: Sicherheitsanwendungen wie Überwachung und Zugangskontrolle.
-   **Verkehr**: Autonomes Fahren und Verkehrssteuerung.
-   **Chatbots**: Kundenservice und automatisierte Kommunikation.

## Python & Data Science Module

Python ist eine weit verbreitete, benutzerfreundliche Programmiersprache, entwickelt von Guido van Rossum. Mit klarer Syntax und hoher Lesbarkeit ist sie für Anfänger und erfahrene Entwickler gleichermaßen attraktiv. Python wird in Webentwicklung, Datenanalyse, künstlicher Intelligenz und anderen Bereichen eingesetzt. Die Sprache zeichnet sich durch Einfachheit und Flexibilität aus. Ein charakteristisches Merkmal ist, dass Python eine interpretierte Sprache ist, was bedeutet, dass ein Interpreter verwendet wird, um den Code direkt auszuführen, ohne ihn vorher zu kompilieren. Mit einer umfangreichen Standardbibliothek und einer aktiven Entwicklergemeinschaft bietet Python eine robuste Plattform für verschiedene Projekte.

### Python

Python ist eine interpretierte, hochgradige und dynamische Programmiersprache, die von Guido van Rossum in den späten 1980er Jahren entwickelt wurde. Sie ist bekannt für ihre klare und lesbare Syntax, die das Schreiben und Verstehen von Code erleichtert.

#### Installation und Setup

Um Python zu installieren, besuche die [offizielle Python-Website](https://www.python.org/) und lade die neueste Version herunter. Python enthält auch `pip`, ein Paketverwaltungssystem, das die Installation von Bibliotheken und Abhängigkeiten erleichtert.

```bash
# Installation überprüfen
python --version
pip --version
```

#### Grundlegende Syntax und Datentypen

##### Kommentare

```python
# Dies ist ein einzeiliger Kommentar
"""
Dies ist ein
mehrzeiliger Kommentar
"""
```

##### Datentypen

Python unterstützt mehrere eingebaute Datentypen:

```python
# Zahlen
integer = 10
float_num = 10.5

# Strings
single_quote_str = 'Hallo'
double_quote_str = "Welt"

# Listen
my_list = [1, 2, 3, 'a', 'b']

# Tupel
my_tuple = (1, 2, 3, 'a', 'b')

# Wörterbücher
my_dict = {'key1': 'value1', 'key2': 'value2'}

# Mengen
my_set = {1, 2, 3, 4, 5}
```

#### Variablen und Operatoren

##### Variablen

Variablen sind Speicherorte für Daten. In Python erfolgt die Zuweisung einfach durch das `=` Zeichen.

```python
x = 10
name = "John"
```

##### Operatoren

Python unterstützt verschiedene Operatoren:

```python
# Arithmetische Operatoren
addition = 5 + 3
subtraction = 5 - 3
multiplication = 5 * 3
exponentiation = 5 ** 3
division = 5 / 3
square_root = 5 ** 0.5
modulus = 5 % 3

# Vergleichsoperatoren
equal = (5 == 3)
not_equal = (5 != 3)
greater_than = (5 > 3)
greater_than_equal = (5 >= 3)
less_than = (5 < 3)
less_than_equal = (5 <= 3)

# Logische Operatoren
and_operator = (5 > 3 and 5 < 10)
or_operator = (5 > 3 or 5 > 10)
not_operator = not(5 > 3)
```

#### Kontrollstrukturen

##### Bedingte Anweisungen

```python
if x > 0:
    print("x ist positiv")
elif x == 0:
    print("x ist null")
else:
    print("x ist negativ")
```

##### Schleifen

```python
# For-Schleife
for i in range(5):
    print(i)

# List Comprehension (Kurzschreibweise For-Schleife)
[print(i) for i in range(5)]

# While-Schleife
count = 0
while count < 5:
    print(count)
    count += 1
```

#### Funktionen und Module

##### Funktionen

Funktionen werden mit dem Schlüsselwort `def` definiert.

```python
def greet(name):
    return f"Hallo, {name}"

print(greet("Alice"))
```

##### Module

Ein Modul ist eine Datei, die Python-Code enthält. Sie können Module importieren, um Funktionen und Klassen zu verwenden.

```python
# Import eines Moduls
import math
print(math.sqrt(16))

# Import bestimmter Funktionen aus einem Modul
from math import sqrt
print(sqrt(16))
```

#### Objektorientierte Programmierung (OOP)

OOP ist ein Paradigma, das auf der Verwendung von "Objekten" basiert – Datenstrukturen, die sowohl Daten als auch Funktionen enthalten, die auf diese Daten arbeiten. In Python kann OOP durch die Definition von Klassen und das Erstellen von Instanzen dieser Klassen (Objekten) realisiert werden.

##### Klassen und Objekte

Eine Klasse ist eine Blaupause für Objekte. Sie definiert eine Menge von Attributen und Methoden, die die Objekte dieser Klasse haben.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hallo, mein Name ist {self.name} und ich bin {self.age} Jahre alt."

# Objektinstanziierung
person1 = Person("Alice", 30)
print(person1.greet())
```

##### Vererbung

Vererbung ist ein Prinzip, bei dem eine Klasse (die Kindklasse oder Unterklasse) Eigenschaften und Methoden von einer anderen Klasse (der Elternklasse oder Oberklasse) erbt. Dies fördert die Wiederverwendbarkeit und Modularität des Codes.

```python
class Employee(Person):
    def __init__(self, name, age, employee_id):
        self.name = name
        self.age = age
        self.employee_id = employee_id

    def work(self):
        return f"{self.name} arbeitet mit der ID {self.employee_id}."

# Objektinstanziierung
employee1 = Employee("Bob", 25, "E123")
print(employee1.greet())  # Methode der Elternklasse
print(employee1.work())   # Methode der Kindklasse
```

##### Die `super()`-Funktion

Die `super()`-Funktion wird verwendet, um auf Methoden und Eigenschaften der Elternklasse zuzugreifen. Sie ist besonders nützlich, wenn Sie die Implementierung der Elternklasse erweitern möchten.

```python
class Manager(Employee):
    def __init__(self, name, age, employee_id, department):
        super().__init__(name, age, employee_id)
        self.department = department

    def work(self):
        parent_work = super().work()
        return f"{parent_work} Sie leitet die Abteilung {self.department}."

# Objektinstanziierung
manager1 = Manager("Carol", 40, "M456", "IT")
print(manager1.greet())   # Methode der Elternklasse (Person)
print(manager1.work())    # Überschriebene Methode der Kindklasse (Manager)
```

##### Method Overriding (Methodenüberschreibung)

Kindklassen können Methoden der Elternklasse überschreiben, um spezielles Verhalten zu implementieren.

```python
class Animal:
    def speak(self):
        return "Ein Tier macht ein Geräusch"

class Dog(Animal):
    def speak(self):
        return "Wuff!"

class Cat(Animal):
    def speak(self):
        return "Miau!"

# Objektinstanziierung
animal = Animal()
dog = Dog()
cat = Cat()
print(animal.speak())  # Ausgabe: Ein Tier macht ein Geräusch
print(dog.speak())     # Ausgabe: Wuff!
print(cat.speak())     # Ausgabe: Miau!
```

##### Mehrfachvererbung

Python unterstützt Mehrfachvererbung, bei der eine Klasse von mehreren Elternklassen erben kann. Dies kann jedoch zu Komplexität und Mehrdeutigkeiten führen, die durch den Method Resolution Order (MRO) Algorithmus gelöst werden.

```python
class A:
    def greet(self):
        return "Hallo von A"

class B:
    def greet(self):
        return "Hallo von B"

class C(A, B):
    pass

# Objektinstanziierung
c = C()
print(c.greet())  # Ausgabe: Hallo von A (nach MRO)

# Reihenfolge der Auflösung anzeigen
print(C.__mro__)  # Ausgabe: (<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>)
```

##### Abstrakte Klassen und Methoden

Abstrakte Klassen dienen als Blaupausen für andere Klassen und können nicht instanziiert werden. Sie enthalten eine oder mehrere abstrakte Methoden, die in den Unterklassen implementiert werden müssen.

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Wuff!"

class Cat(Animal):
    def speak(self):
        return "Miau!"

# Objektinstanziierung
dog = Dog()
cat = Cat()
print(dog.speak())  # Ausgabe: Wuff!
print(cat.speak())  # Ausgabe: Miau!
```

##### Properties (Eigenschaften)

Properties ermöglichen den Zugriff auf Methoden als wären sie Attribute. Dies erlaubt die Kapselung von internen Zuständen und die Definition von getter und setter Methoden.

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Der Radius muss positiv sein.")
        self._radius = value

    @property
    def area(self):
        return 3.1416 * (self._radius ** 2)

# Objektinstanziierung
circle = Circle(5)
print(circle.radius)  # Ausgabe: 5
print(circle.area)    # Ausgabe: 78.54
circle.radius = 10
print(circle.area)    # Ausgabe: 314.16
```

##### Klassenmethoden und statische Methoden

Klassenmethoden (`@classmethod`) haben Zugriff auf die Klasse selbst und nicht auf die Instanz. Statische Methoden (`@staticmethod`) haben keinen Zugriff auf die Instanz oder die Klasse.

```python
class MyClass:
    class_variable = 0

    def __init__(self, instance_variable):
        self.instance_variable = instance_variable

    @classmethod
    def increment_class_variable(cls):
        cls.class_variable += 1

    @staticmethod
    def static_method():
        return "Dies ist eine statische Methode."

# Klassenmethoden aufrufen
MyClass.increment_class_variable()
print(MyClass.class_variable)  # Ausgabe: 1

# Statische Methoden aufrufen
print(MyClass.static_method())  # Ausgabe: Dies ist eine statische Methode.
```

#### Fehler- und Ausnahmebehandlung

Fehler können mit `try`, `except` und `finally` gehandhabt werden.

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Division durch Null ist nicht erlaubt.")
finally:
    print("Dieser Block wird immer ausgeführt.")
```

#### Ein- und Ausgabe

##### Eingabe

```python
name = input("Gib deinen Namen ein: ")
print(f"Hallo, {name}")
```

##### Ausgabe

```python
print("Hallo, Welt!")
```

#### Bibliotheken und Frameworks

Python verfügt über eine Vielzahl von Bibliotheken und Frameworks, darunter:

-   **NumPy** und **Pandas** für Datenanalyse
-   **Matplotlib** und **Seaborn** für Datenvisualisierung
-   **TensorFlow** und **PyTorch** für maschinelles Lernen
-   **Flask** und **Django** für Webentwicklung

#### Best Practices

-   **Lesbarkeit** : Schreibe klaren und verständlichen Code.
-   **Dokumentation** : Kommentiere deinen Code und verwende Docstrings.
-   **Modularität** : Teile deinen Code in wiederverwendbare Module und Funktionen auf.
-   **Fehlerbehandlung** : Implementiere robuste Fehler- und Ausnahmebehandlung.

### NumPy

NumPy ist eine grundlegende Bibliothek für numerische Berechnungen in Python. Sie bietet Unterstützung für große, mehrdimensionale Arrays und Matrizen sowie eine Sammlung von mathematischen Funktionen, um diese effizient zu bearbeiten. Viele andere Module in der Python-Community basieren auf NumPy.

#### Installation

Um NumPy zu installieren, kann man pip verwenden:

```bash
pip install numpy
```

#### Theorie

##### Mathematische Strukturen

In der Mathematik gibt es -- genau wie in Numpy -- mehrere Strukturen mit verschiedenen Dimensionen:

-   **Skalar**: Ein einzelner Wert, zum Beispiel eine Zahl $a=3$ (0 Dimensionen).
-   **Vektor**: Eine eindimensionale Sammlung von Werten, zum Beispiel $\mathbf{v} = [1, 2, 3]$.
-   **Matrix**: Eine zweidimensionale Sammlung von Werten, zum Beispiel
    $\mathbf{M} = \begin{bmatrix}
    1 & 2 \\
    3 & 4
    \end{bmatrix}$.
-   **Tensore**: Eine mehrdimensionale Sammlung von Werten (drei oder mehr Dimensionen).

#### Erstellen von Arrays

NumPy-Arrays können auf verschiedene Weisen erstellt werden:

```python
import numpy as np

# Array aus einer Liste
array1 = np.array([1, 2, 3])
print("Array aus einer Liste:\n", array1)

# Zweidimensionales Array (Matrix)
array2 = np.array([[1, 2], [3, 4]])
print("Zweidimensionales Array:\n", array2)

# Array aus einem Bereich
array3 = np.arange(10) # np.arange([start,] stop[, step,])
print("Array aus einem Bereich:\n", array3)

# Array mit gleichmäßig verteilten Werten
array4 = np.linspace(0, 1, 5) # np.linspace(start,stop,num=50)
print("Array mit gleichmäßig verteilten Werten:\n", array4)

# Zufalls-Array
array5 = np.random.rand(3, 3)
print("Zufalls-Array:\n", array5)
```

```
//output.txt
Array aus einer Liste:
 [1 2 3]
Zweidimensionales Array:
 [[1 2]
 [3 4]]
Array aus einem Bereich:
 [0 1 2 3 4 5 6 7 8 9]
Array mit gleichmäßig verteilten Werten:
 [0.   0.25 0.5  0.75 1.  ]
Zufalls-Array:
 [[0.3599989  0.00788199 0.28990732]
 [0.52026756 0.65163794 0.53505392]
 [0.75076473 0.36474315 0.30692188]]
```

#### Grundlegende Operationen

##### Addition und Subtraktion

```python
import numpy as np

# Arrays erstellen
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Addition
c = a + b
print("Addition:", c)

# Subtraktion
d = a - b
print("Subtraktion:", d)
```

```
//output.txt
Addition: [5 7 9]
Subtraktion: [-3 -3 -3]
```

##### Multiplikation und Division

```python
import numpy as np

# Arrays erstellen
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Multiplikation
e = a * b
print("Multiplikation:", e)

# Division
f = a / b
print("Division:", f)
```

```
//output.txt
Multiplikation: [ 4 10 18]
Division: [0.25 0.4  0.5 ]
```

##### Zusammenfassen von Arrays

Die `concatenate` Funktion in NumPy verbindet zwei oder mehr Arrays entlang einer angegebenen Achse. Dies ist nützlich zum Zusammenführen von Daten. Die Syntax lautet `numpy.concatenate((a1, a2, ...), axis=0)`, wobei `axis` die Achse ist, entlang der verbunden wird (Standard ist 0, d.h. zeilenweise).

```python
import numpy as np

# Zwei 2D-Arrays erstellen
array1 = np.array([[1, 2], [3, 4]])
array2 = np.array([[5, 6], [7, 8]])

# Arrays vertikal (zeilenweise) verbinden
result1 = np.concatenate((array1, array2), axis=0)
print("Vertikal verbunden:\n", result1)

# Arrays horizontal (spaltenweise) verbinden
result2 = np.concatenate((array1, array2), axis=1)
print("Horizontal verbunden:\n", result2)
```

```
//output.txt
Vertikal verbunden:
 [[1 2]
 [3 4]
 [5 6]
 [7 8]]
Horizontal verbunden:
 [[1 2 5 6]
 [3 4 7 8]]
```

In diesem Beispiel werden `array1` und `array2` zuerst vertikal und dann horizontal verbunden.

##### Matrixmultiplikation

```python
import numpy as np

# Matrizen erstellen
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrixmultiplikation
C = np.dot(A, B)
print("Matrixmultiplikation:\n", C)
```

```
//output.txt
Matrixmultiplikation:
 [[19 22]
 [43 50]]
```

#### Funktionen und Methoden

##### Aggregationsfunktionen

NumPy bietet eine Vielzahl von Funktionen zur Berechnung von Aggregaten:

```python
import numpy as np

# Array erstellen
a = np.array([1, 2, 3, 4, 5])

# Summe
sum_a = np.sum(a)
print("Summe:", sum_a)

# Mittelwert
mean_a = np.mean(a)
print("Mittelwert:", mean_a)

# Standardabweichung
std_a = np.std(a)
print("Standardabweichung:", std_a)

# Minimum und Maximum
min_a = np.min(a)
max_a = np.max(a)
print("Minimum:", min_a)
print("Maximum:", max_a)
```

```
//output.txt
Summe: 15
Mittelwert: 3.0
Standardabweichung: 1.4142135623730951
Minimum: 1
Maximum: 5
```

##### Reshape und Transponieren

```python
import numpy as np

# Array erstellen
a = np.array([[1, 2, 3], [4, 5, 6]])
print("Array:\n", a)

# Reshape
b = a.reshape((3, 2))
# a.reshape((3, -1))
print("Reshaped Array:\n", b)

# Transponieren
c = a.T
print("Transponiertes Array:\n", c)
```

```
//output.txt
Array:
 [[1 2 3]
 [4 5 6]]
Reshaped Array:
 [[1 2]
 [3 4]
 [5 6]]
Transponiertes Array:
 [[1 4]
 [2 5]
 [3 6]]
```

##### Broadcasting

Broadcasting ermöglicht das Durchführen von Operationen auf Arrays unterschiedlicher Formen:

```python
import numpy as np

# Arrays erstellen
a = np.array([1, 2, 3])
b = np.array([[1], [2], [3]])

# Broadcasting
c = a + b
print("Broadcasting Ergebnis:\n", c)
```

```
//output.txt
Broadcasting Ergebnis:
 [[2 3 4]
 [3 4 5]
 [4 5 6]]
```

#### Weitere Funktionen

##### Erzeugen von speziellen Arrays

```python
import numpy as np

# Null-Array
zero_array = np.zeros((2, 3))
print("Null-Array:\n", zero_array)

# Einsen-Array
ones_array = np.ones((2, 3))
print("Einsen-Array:\n", ones_array)

# Identitätsmatrix
identity_matrix = np.eye(3)
print("Identitätsmatrix:\n", identity_matrix)
```

```
//output.txt
Null-Array:
 [[0. 0. 0.]
 [0. 0. 0.]]
Einsen-Array:
 [[1. 1. 1.]
 [1. 1. 1.]]
Identitätsmatrix:
 [[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]
```

##### Slicing und Indexierung

```python
import numpy as np

# Array erstellen
a = np.array([1, 2, 3, 4, 5])

# Slicing
slice_a = a[1:4]
print("Slicing:", slice_a)

# Boolean Indexing
bool_idx = (a > 3)
print("Boolean Indexing:", a[bool_idx])
```

```
//output.txt
Slicing: [2 3 4]
Boolean Indexing: [4 5]
```

##### Lineare Algebra

```python
import numpy as np

# Matrix erstellen
A = np.array([[1, 2], [3, 4]])
print("Array:\n", A)

# Inverse der Matrix
A_inv = np.linalg.inv(A)
print("Inverse der Matrix:\n", A_inv)

# Determinante der Matrix
det_A = np.linalg.det(A)
print("Determinante der Matrix:", det_A)

# Eigenwerte und Eigenvektoren
eigvals, eigvecs = np.linalg.eig(A)
print("Eigenwerte:", eigvals)
print("Eigenvektoren:\n", eigvecs)
```

```
//output.txt
Array:
 [[1 2]
 [3 4]]
Inverse der Matrix:
 [[-2.   1. ]
 [ 1.5 -0.5]]
Determinante der Matrix: -2.0000000000000004
Eigenwerte: [-0.37228132  5.37228132]
Eigenvektoren:
 [[-0.82456484 -0.41597356]
 [ 0.56576746 -0.90937671]]
```

NumPy ist eine äußerst mächtige Bibliothek, die in vielen wissenschaftlichen und technischen Anwendungen verwendet wird. Die oben genannten Beispiele decken einige der grundlegendsten Funktionen ab, aber NumPy bietet noch viele weitere fortgeschrittene Features, die das Arbeiten mit numerischen Daten in Python effizient und bequem machen.

### Pandas

Pandas ist eine leistungsstarke und weit verbreitete Bibliothek für Datenanalyse und -manipulation in der Programmiersprache Python. Entwickelt auf Basis von NumPy bietet Pandas Datenstrukturen, die ideal für die Verarbeitung und Analyse von strukturierten Daten wie Tabellen oder CSV-Dateien geeignet sind. Diese Bibliothek erleichtert das Arbeiten mit großen Datensätzen und ermöglicht es, komplexe Operationen auf Daten schnell und effizient durchzuführen. Pandas wird in den Bereichen Datenwissenschaft, Finanzanalyse, Machine Learning und anderen datenintensiven Anwendungen eingesetzt. In dieser Einführung werden wir einen Blick auf die Schlüsselfunktionen und -konzepte von Pandas werfen, um ein Verständnis für die Vielseitigkeit dieser Bibliothek zu entwickeln.

```bash title="Installing pandas"
pip install pandas
```

```python
import pandas as pd
```

<!--




###### Datenmanipulationen

Bei den meisten Veränderungen von Daten gibt es einen Parameter namens `inplace`, welcher angibt, ob die Änderungen direkt auf das DataFrame angewendet werden sollen oder ob die Änderungen in einem neuen DataFrame gespeichert werden sollen. Standardmäßig ist `inplace` auf `False` gesetzt, was bedeutet, dass die Änderungen in einem neuen DataFrame gespeichert werden.

Die Methode `append()` wird verwendet, um zwei DataFrames (df und df2) zu verketten. Dies führt zu einem neuen DataFrame df3, das alle Zeilen von df und df2 enthält.

```python
df3 = df.append(df2)
```

Aufgrund der Aneinanderreihung solcher Methoden können Spaltennamen auch automatisch bearbeitet werden. Die Methode `replace()` wird verwendet, um bestimmte Werte in einer Spalte zu ersetzen.

```python
df.columns = [col.lower().replace("(", "").replace(")", "").replace(" ", "_") for col in df]
```

Mittels Methode `drop()` können spezifische Spalten auch gelöscht werden. Hierbei muss jedoch immer der Verlust der Daten vorher bedacht werden.

```python
df.drop(columns= { "Unnamed: 1", "Unnamed: 2", "Unnamed: 3" }, inplace=True)
```

Der Codeblock zeigt verschiedene Methoden zum Entfernen von Duplikaten aus einem Pandas-DataFrame. Die Funktion `drop_duplicates()` wird verwendet, um Duplikate zu entfernen.

```python
df = df.drop_duplicates()
df.drop_duplicates(inplace=True)

df.drop_duplicates(inplace=True, keep='first') ## nur erste Duplikate behalten
df.drop_duplicates(inplace=True, keep='last') ## nur letzte Duplikate behalten
df.drop_duplicates(inplace=True, keep='False') ## alle Duplikate löschen
```

Die Methode `dropna()` wird verwendet, um Zeilen oder Spalten mit NaN-Werten zu entfernen, während `fillna()` genutzt wird, um fehlende Werte durch einen bestimmten Wert, wie den Mittelwert, zu ersetzen.

```python
df.dropna() ## Löscht Zeilen, in denen alle Werte null sind
df.dropna(axis=1) ## Löscht Spalten, in denen alle Werte null sind
df['apples'].fillna(df['apples'].mean(), inplace=True) ## Füllt fehlende Werte mit dem Mittelwert der Spalte 'apples' aus
``` -->

#### Series und DataFrame

Pandas führt zwei grundlegende Datenstrukturen ein: `DataFrames` und `Series`. Ein DataFrame kann als eine zweidimensionale Datenstruktur betrachtet werden, die in Form einer Tabelle organisiert ist. Diese Tabelle besteht aus Zeilen und Spalten, wobei jede Spalte einen bestimmten Datentyp repräsentiert. Einzelne Spalten in einem DataFrame werden als Series bezeichnet. Series hingegen kann als eindimensionales Array oder eine Liste betrachtet werden und enthält Daten eines bestimmten Datentyps.

##### Series

Eine `Series` ist eine grundlegende eindimensionale, beschriftete Datenstruktur, vergleichbar mit einer Liste oder einem Array, jedoch mit einem Index, der jedem Element zugeordnet ist. In Pandas ist die Series eine essentielle Datenstruktur und bildet die Grundlage für DataFrames. Sie kann als eindimensionales Array oder Liste betrachtet werden und enthält Daten unterschiedlicher Datentypen wie numerische Werte, Zeichenketten oder Zeitstempel. Die Series ermöglicht den Zugriff auf Daten durch einen Index und unterstützt eine Vielzahl von Funktionen zur Datenmanipulation. Sie erlaubt es, spezifische Datenpunkte in einem DataFrame zu isolieren und gezielte Operationen auf einzelnen Spalten durchzuführen, was sie zu einem unverzichtbaren Werkzeug für die Arbeit mit strukturierten Daten in Pandas macht.

Eine Series kann in Python so erstellt werden:

```python
import pandas as pd

s = pd.Series([1, 3, 5, 7, 9], index=['a', 'b', 'c', 'd', 'e'])
```

Diese Series ist dann eine Spalte, welche so aussieht (die Buchstaben sind in diesem Fall die Indizes, sprich keine aussagekräftigen Daten, sondern nur Werkzeuge der Series):

```
//output.txt
a    1
b    3
c    5
d    7
e    9
dtype: int64
```

###### Zugriff auf Daten

Um nun auf eine Zelle mithilfe des Indexes zuzugreifen, kann man die Syntax mit den eckigen Klammern (`[]`) oder die Methode `loc()` verwenden.

```python
print(s['a'])  # Zugriff auf Element mit Index 'a'
print(s.loc['a'])  # Zugriff auf Element mit Index 'a'
```

Man kann Zellen auch ohne den vergebenen Index selektieren (`iloc()`-Methode).

```python
print(s.iloc[0])  # Zugriff auf Element an erster Stelle (0)
```

##### DataFrame

Ein `DataFrame` ist eine zweidimensionale, tabellarische Datenstruktur mit beschrifteten Achsen (Zeilen und Spalten), die die Hauptdatenstruktur in Pandas darstellt. Diese Struktur organisiert Daten in Zeilen und Spalten, wobei jede Spalte eine Series darstellt. DataFrames sind äußerst vielseitig und ermöglichen die effiziente Verarbeitung sowie Analyse von strukturierten Daten unterschiedlicher Datentypen. Sie erleichtern den Zugriff, die Filterung und Transformation von Daten, und werden häufig zur Darstellung von Tabellen in verschiedenen Formaten wie CSV-Dateien, Excel-Tabellen oder SQL-Abfragen verwendet. Operationen auf DataFrames können sowohl auf Zeilen als auch auf Spalten angewendet werden, was eine umfassende Datenmanipulation ermöglicht.

###### Erstellen eines DataFrames

Ein DataFrame kann ähnlich wie eine Series erstellt werden. Dabei kann man eine Vielzahl an verschiedenen Objekttypen übergeben.

-   **Dictionary**  
    In diesem Fall hat der Input für das DataFrame den Typen `Dictionary`, dessen Schlüssel ein String und dessen Wert eine Liste ist.

    ```python
    data = {
        'A': [1, 2, 3, 4],
        'B': [5, 6, 7, 8],
        'C': [9, 10, 11, 12]
    }
    df = pd.DataFrame(data, index=["I","II","III","IV"])
    ```

-   **Liste**  
    In diesem Fall hat der Input für das DataFrame den Typen einer Liste, in welcher sich mehrere Dictionaries befinden.

    ```python
    data = [{'A': 1, 'B': 5, 'C': 9},
            {'A': 2, 'B': 6, 'C': 10},
            {'A': 3, 'B': 7, 'C': 11},
            {'A': 4, 'B': 8, 'C': 12}]
    df = pd.DataFrame(data, index=["I","II","III","IV"])
    ```

-   **Tuple**  
    In diesem Fall hat der Input für das DataFrame den Typen einer Liste, mit mehreren Tuples darin. Man beachte, dass die Spaltennamen beim instantiieren des DataFrames angegeben werden müssen, da `data` selbst keine Informationen darüber enthält.

    ```python
    data = [(1, 5, 9),
            (2, 6, 10),
            (3, 7, 11),
            (4, 8, 12)]
    df = pd.DataFrame(data, columns=['A', 'B', 'C'], index=["I","II","III","IV"])
    ```

-   **NumPy**  
    Man kann ein DataFrame auch mithilfe von einem Numpy-`Array` erstellen.

    ```python
    import numpy as np
    data = np.array([[1, 5, 9],
                    [2, 6, 10],
                    [3, 7, 11],
                    [4, 8, 12]])
    df = pd.DataFrame(data, columns=['A', 'B', 'C'], index=["I","II","III","IV"])
    ```

-   **CSV**  
    Man kann ein DataFrame auch mithilfe einer CSV-Datei erstellen. Dies kommt in der Praxis sehr häufig vor, da CSV-Dateien häufig als Eingabe für Analyseprogramme verwendet werden. Hierbei kann man auch angeben, dass eine Bestimmte Spalte Informationen bezüglich der Indizes enthält.

    ```csv
    //file.csv
    ,A,B,C
    I,1,5,9
    II,2,6,10
    III,3,7,11
    IV,4,8,12
    ```

    ```python
    df = pd.read_csv('file.csv', index_col=0)  # Beispiel für das Lesen aus einer CSV-Datei
    ```

-   **JSON**  
    Natürlich kann das Datenformat auch JSON sein:

    ```json
    //file.json
    {
        "A": { "I": 1, "II": 2, "III": 3, "IV": 4 },
        "B": { "I": 5, "II": 6, "III": 7, "IV": 8 },
        "C": { "I": 9, "II": 10, "III": 11, "IV": 12 }
    }
    ```

    ```python
    df = pd.read_json('file.json')  # Beispiel für das Lesen aus einer JSON-Datei
    ```

-   **SQL-Datenbank**  
    Man kann auch direkt aus einer SQL-Datenbank lesen. In diesem Fall muss man zunächst eine Verbindung mit der Datenbank herstellen.

    ```bash title="Installing sqlite3"
    pip install pysqlite3
    ```

    ```python
    import sqlite3
    con = sqlite3.connect("database.db")

    df = pd.read_sql_query("SELECT * FROM examples", con)
    ```

In allen Fällen sieht das DataFrame in diesem Beispiel zum Schluss so aus:

```
//output.txt
     A   B   C
I    1   5   9
II   2   6  10
III  3   7  11
IV   4   8  12
```

###### Speichern eines DataFrames

Um ein DataFrame persistieren zu können, kann man die Daten in eine Datei oder Datenbank speichern. Dabei werden die Formate `CSV` und `JSON` am häufigsten verwendet, weswegen die Integration mit Pandas einfacher denn je ist.

-   **CSV**

    ```python
    df.to_csv('example.csv')
    ```

-   **JSON**

    ```python
    df.to_json('example.json')
    ```

-   **SQL**
    ```python
    df.to_sql('example.sql', con)
    ```

###### Zugriff auf Daten

Bei einem DataFrame ist der Zugriff auf die Daten nun ein wenig anders, da ein DataFrame quasi eine Liste von Series ist.

-   Zugriff auf bestimmte **Spalten**  
    Um auf eine Spalte zuzugreifen, können diese Möglichkeiten verwendet werden:

    ```python
    print(df.A) # Property A
    print(df['A']) # Spalte A
    print(df.loc[:, 'A']) # Spalte A; alle Zeilen
    print(df.iloc[:, 0]) # Spalte Index 0; alle Zeilen
    ```

    Um auf mehrere Spalten zuzugreifen, können diese Möglichkeiten verwendet werden:

    ```python
    print(df[['A', 'B']]) # Spalten A & B
    print(df.loc[:, ['A', 'B']]) # Spalten A & B; alle Zeilen
    print(df.iloc[:, [0, 1]]) # Spalten Indizes 0 & 1; alle Zeilen
    print(df.iloc[:, 0:2]) # Spalten Indizes 0 bis 1; alle Zeilen
    print(df.iloc[:, :2]) # Spalten Indizes bis 1; alle Zeilen
    print(df.iloc[:, :-1]) # Spalten Indizes bis vorletzte Spalte; alle Zeilen
    ```

-   Zugriff auf bestimmte **Zeilen**  
    Um auf eine Zeile zuzugreifen, können diese Möglichkeiten verwendet werden:

    ```python
    print(df.loc["I"]) # Zeile I
    print(df.iloc[0]) # Zeile Index 0
    ```

    Um auf mehrere Zeilen zuzugreifen, können diese Möglichkeiten verwendet werden:

    ```python
    print(df.loc[["I", "II"]]) # Zeilen I & II
    print(df.iloc[[0, 1]]) # Zeilen Indizes 0 & 1
    print(df.iloc[0:2]) # Zeilen Indizes 0 bis 1
    print(df.iloc[:2]) # Zeilen Indizes bis 1
    print(df.iloc[:-2]) # Zeilen Indizes bis vorvorletzte Zeile
    ```

-   Zugriff auf bestimmte **Zellen**  
    Um auf eine Zelle zuzugreifen, können diese Möglichkeiten verwendet werden:

    ```python
    print(df.loc["I", 'A']) # Zeile I; Spalte A
    print(df.iloc[0, 0]) # Zeile Index 0; Spalte Index 0
    ```

    Um auf mehrere Zellen zuzugreifen, können diese Möglichkeiten verwendet werden (bei `iloc()` sind die Angaben jeweils `inklusiv:exklusiv`):

    ```python
    print(df.loc[["I","II","III"], ['A','B']]) # Zeilen I, II & III; Spalten A & B
    print(df.loc["I":"III", 'A':'B']) # Zeilen I bis III; Spalten A bis B
    print(df.iloc[0:3, 0:2]) # Zeilen Indizes 0 bis 2; Spalten Indizes 0 bis 1
    print(df.iloc[:3, :2]) # Zeilen Indizes bis 2; Spalten Indizes bis 1
    print(df.iloc[:-1, :-1]) # Zeilen Indizes bis vorletzte Zeile; Spalten Indizes bis vorletzte Spalte
    ```

-   Zugriff mittels **Bedingungen**  
    Die Daten eines DataFrames können mithilfe von Bedingungen auch gefiltert werden:

    ```python
    # Alle Zeilen, dessen Wert in Spalte 'A' größer 2 ist
    print(df[df['A'] > 2])

    """
         A  B   C
    III  3  7  11
    IV   4  8  12
    """
    ```

    ```python
    # Alle Series 'A', dessen Wert größer 2 ist
    print(df.loc[df['A'] > 2, 'A'])

    """
    III    3
    IV     4
    """
    ```

    Diese Bedingungen funktieren nur, weil die Bedingung eine Series selbst ist und somit die Berechnung pro Zeile durchgeführt werden.

    ```python
    df['A'] > 2

    """
    I      False
    II     False
    III     True
    IV      True
    Name: A, dtype: bool
    """
    ```

#### Operationen und Methoden

Pandas bietet eine Vielzahl von Methoden und Operationen zur Datenanalyse und -manipulation. Alle Methoden, welche die Daten des DataFrames verändern, verfügen über zwei Möglichkeiten, die Änderungen zu speichern:

-   **Überschreiben**  
    Einerseits kann man die alten Daten einfach überschreiben, indem man das DataFrame auf die neuen Daten setzt:

    ```python
    df = df.dropna()
    ```

    Im Hintergrund wird der Parameter `inplace` der Methode auf `False` gesetzt und die neuen Daten werden einfach returniert.

    ```python
    df.dropna(inplace=False) # dieser Aufruf gibt das DataFrame zurück
    ```

-   **Inplace**  
    Die elegantere Variante ist jedoch die Verwendung der `inplace`-Option, welche die Änderungen direkt in dem DataFrame speichert:

    ```python
    df.dropna(inplace=True)
    ```

    Wichtig zu beachten ist, dass beim positiven Setzen des `inplace`-Parameters kein DataFrame mehr zurückgegeben wird. Stattdessen returniert dieser Aufruf nun `None`.

##### `head()`

Mit der Methode `head` kann man die ersten n Zeilen eines DataFrames anzeigen.

```python
df.head(3) # Standardmäßig ersten 5 Zeilen

"""
     A  B   C
I    1  5   9
II   2  6  10
III  3  7  11
"""
```

##### `tail()`

Mit der Methode `tail` kann man die letzten n Zeilen eines DataFrames anzeigen.

```python
df.tail(3) # Standardmäßig letzten 5 Zeilen

"""
     A  B   C
II   2  6  10
III  3  7  11
IV   4  8  12
"""
```

##### `shape`

Mit der Eigenschaft `shape` kann man die Dimensionen des DataFrames anzeigen.

```python
df.shape

"""
(4, 3)
"""
```

Dabei ist die Reihenfolge der Anzahl an Dimensionen gleich der aufsteigenden Achsenzahl. In unserem Beispiel bedeutet das, wir haben vier Zeilen und drei Spalten, weil Achse 0 die Zeilen sind und Achse 1 die Spalten.

Die erste Zahl ist in den meisten Fällen der künstlichen Intelligenz die Anzahl an Beispielen. In unserem Fall gibt uns die zweite Zahl Auskunft über die Anzahl an Features (Eigenschaften) jedes Beispiels. Beim [`Supervised Learning`](#supervised-learning) ist die letzte Spalte meistens die Antwort des Beispiels, weshalb es auch nur zwei Features sein könnten.

##### `columns`

Mit der Eigenschaft `columns` kann man sich die Namen der Spalten ansehen.

```python
df.columns

"""
Index(['A', 'B', 'C'], dtype='object')
"""
```

##### `info()`

Mit der Methode `info` kann man sich allgemeine Informationen über ein DataFrame oder eine Series ausgeben lassen.

```python
df.info()

"""
<class 'pandas.core.frame.DataFrame'>
Index: 4 entries, I to IV
Data columns (total 3 columns):
 #   Column  Non-Null Count  Dtype
---  ------  --------------  -----
 0   A       4 non-null      int64
 1   B       4 non-null      int64
 2   C       4 non-null      int64
dtypes: int64(3)
memory usage: 128.0+ bytes
None
"""
```

```python
df['A'].info()

"""
<class 'pandas.core.series.Series'>
Index: 4 entries, I to IV
Series name: A
Non-Null Count  Dtype
--------------  -----
4 non-null      int64
dtypes: int64(1)
memory usage: 64.0+ bytes
None
"""
```

##### `describe()`

Mit der Methode `describe` kann man sich Informationen der deskriptiven Statistik über ein DataFrame oder eine Series ausgeben lassen.

```python
df.describe()

"""
              A         B          C
count  4.000000  4.000000   4.000000
mean   2.500000  6.500000  10.500000
std    1.290994  1.290994   1.290994
min    1.000000  5.000000   9.000000
25%    1.750000  5.750000   9.750000
50%    2.500000  6.500000  10.500000
75%    3.250000  7.250000  11.250000
max    4.000000  8.000000  12.000000
"""
```

```python
df['A'].describe()

"""
count    4.000000
mean     2.500000
std      1.290994
min      1.000000
25%      1.750000
50%      2.500000
75%      3.250000
max      4.000000
Name: A, dtype: float64
"""
```

##### `corr()`

Die Methode `corr` errechnet die Korrelationen zwischen den Spalten.

```python
"""
      A   B  C
I     2   3  4
II    4   9  3
III   8  27  2
IV   16  81  1
"""

df.corr()

"""
          A         B         C
A  1.000000  0.991934 -0.959166
B  0.991934  1.000000 -0.916515
C -0.959166 -0.916515  1.000000
"""
```

##### `isnull()`

Die Methode `isnull` gibt ein DataFrame mit boolischen Werte zurück, welche Auskunft über die fehlenden Werte eines DataFrames geben. Mithilfe der [`sum`-Methode](#aggregationsfunktionen) kann man dadurch wichtige Informationen des DataFrames extrahieren.

```python ins="‎NaN"
"""
       A  B     C
I    ‎NaN  5   9.0
II   2.0  6  10.0
III  3.0  7  11.0
IV   4.0  8   ‎NaN
"""
```

```python
df.isnull()

"""
         A      B      C
I     True  False  False
II   False  False  False
III  False  False  False
IV   False  False   True
"""
```

```python
df.isnull().sum()

"""
A    1
B    0
C    1
dtype: int64
"""
```

```python
df.isnull().sum(axis=1)

"""
I      1
II     0
III    0
IV     1
dtype: int64
"""
```

```python
df.isnull().sum().sum()

"""
2
"""
```

##### `dropna()`

Die Methode `dropna` entfernt Zeilen (oder Spalten) mit fehlenden Werten (`NaN` -- Not a Number) aus dem DataFrame.

`dropna` zählt zu den manipulativen Methoden, weswegen der Paramter `inplace` zur Verfügung steht.

```python ins="‎NaN"
"""
       A  B     C
I    ‎NaN  5   9.0
II   2.0  6  10.0
III  3.0  7  11.0
IV   4.0  8   ‎NaN
"""
```

```python
df.dropna() # automatically axis 0

"""
       A  B     C
II   2.0  6  10.0
III  3.0  7  11.0
"""
```

```python
df.dropna(axis=1)

"""
     B
I    5
II   6
III  7
IV   8
"""
```

##### `fillna()`

Die Methode `fillna` ersetzt Zellen mit fehlenden Werten (`NaN` -- Not a Number).

`fillna` zählt zu den manipulativen Methoden, weswegen der Paramter `inplace` zur Verfügung steht.

```python ins="‎NaN"
"""
       A  B     C
I    ‎NaN  5   9.0
II   2.0  6  10.0
III  3.0  7  11.0
IV   4.0  8   ‎NaN
"""

df.fillna(0)

"""
       A  B     C
I    0.0  5   9.0
II   2.0  6  10.0
III  3.0  7  11.0
IV   4.0  8   0.0
"""
```

##### `unique()`

Die Methode `unique` gibt die eindeutigen Werte in einer Spalte zurück.

```python ins="‎1"
"""
     A  B   C
I    1  5   9
II   2  6  10
III  ‎1  7  11
IV   4  8  12
"""

df['A'].unique()

"""
[1 2 4]
"""
```

##### `nunique()`

Die Methode `nunique` gibt die Anzahl der eindeutigen Werte insgesamt zurück.

```python ins="‎1"
"""
     A  B   C
I    1  5   9
II   2  6  10
III  ‎1  7  11
IV   4  8  12
"""

df['A'].nunique()

"""
3
"""
```

##### `value_counts()`

Die Methode `value_counts` gibt die Anzahl der eindeutigen Werte pro Spalte zurück.

```python ins="‎1"
"""
     A  B   C
I    1  5   9
II   2  6  10
III  ‎1  7  11
IV   4  8  12
"""

df['A'].value_counts()

"""
A
1    2
2    1
4    1
Name: count, dtype: int64
"""
```

##### `apply()`

Die Methode `apply` wendet eine Funktion entlang einer Achse des DataFrame an. Sie kann auf Zeilen oder Spalten angewendet werden.

Standardmäßig werden Operationen auf eine Spalte angewandt (`axis=0`).

```python
# Durchschnitt pro Spalte
df.apply(lambda x: x.mean())

"""
A     2.5
B     6.5
C    10.5
dtype: float64
"""
```

Dies kann man jedoch einfach ändern:

```python "axis=1"
# Durchschnitt pro Zeile
df.apply(lambda x: x.mean(), axis=1)

"""
I      5.0
II     6.0
III    7.0
IV     8.0
dtype: float64
"""
```

##### `map()`

Die Methode `map` wendet eine Funktion auf jedes Element einer Series an. Die Methode ist demnach ähnlich wie `apply` pro Spalte mit dem Unterschied, dass `map` nicht auf das gesamte DataFrame (alle Spalten auf einmal) angewandt werden kann.

```python
# Funktion zur Quadratbildung auf jedes Element anwenden
df['A'].map(lambda x: x ** 2)

"""
I       1
II      4
III     9
IV     16
Name: A, dtype: int64
"""
```

##### `applymap()`

Die Methode `applymap` wendet eine Funktion auf jedes Element (jede Zelle) eines DataFrame an.

```python
# Funktion zur Quadratbildung auf jedes Element des gesamten DataFrame anwenden
df.applymap(lambda x: x ** 2)

"""
      A   B    C
I     1  25   81
II    4  36  100
III   9  49  121
IV   16  64  144
"""
```

##### `groupby()`

Die Methode `groupby` gruppiert das DataFrame nach den Werten einer oder mehrerer Spalten und ermöglicht Aggregationen wie bei SQL-Abfragen.

```python ins="‎1" ins="‎3"
"""
     A  B   C
I    1  5   9
II   ‎1  6  10
III  3  7  11
IV   ‎3  8  12
"""

df.groupby('A').sum() # Summe der Gruppen 1 und 3 berechnen

"""
    B   C
A
1  11  19
3  15  23
"""
```

##### `rename()`

Mithilfe der manipulativen Methode `rename` kann man jegliche Eigenschaften eines DataFrames umbenennen. Meistens will man die Spaltennamen oder Indexes umbenennen.

`rename` zählt zu den manipulativen Methoden, weswegen der Paramter `inplace` zur Verfügung steht.

```python
df.rename(columns={'A':'X', 'B':'Y', 'C':'Z'})

"""
     X  Y   Z
I    1  5   9
II   2  6  10
III  3  7  11
IV   4  8  12
"""
```

```python
df.rename(index=str.lower)

"""
     A  B   C
i    1  5   9
ii   2  6  10
iii  3  7  11
iv   4  8  12
"""
```

##### `replace()`

Mithilfe der manipulativen Methode `replace` kann man beliebige alphanumerische Werte mit statischen oder dynamischen Werten ersetzen. Allerdings können diese Werte nur in den Daten, also nicht in den Spaltennamen und Indizes, vorkommen. Deswegen ist das `replace` quasi das `rename` für die Werte.

`replace` zählt zu den manipulativen Methoden, weswegen der Paramter `inplace` zur Verfügung steht.

```python
df.replace(1, 2)

"""
     A  B   C
I    2  5   9
II   2  6  10
III  3  7  11
IV   4  8  12
"""
```

#### Anwendungsbeispiele

##### Bereinigen von Nullwerten

Im Bereich der künstlichen Intelligenz sind Nullwerte oft unerwünscht, weshalb man diese meistens mit Werte ersetzen möchte, welche das Trainieren des Modells nicht behindern. Eine einfache Möglichkeit, Nullwerte nicht ganz so störend zu machen, ist das spaltenweise Ersetzen der Nullwerte durch den Durchschnitt der Werte in der Spalte.

```python
for col in df.columns:
    df[col].fillna(df[col].mean(), inplace=True)
```

Meistens ist es auch noch sinnvoll, die Nullwerte nicht einfach mit dem Median aller Datensätze zu ersetzen, sondern nur mit dem Median der Datensätze, die beim Supervised Learning auch die gleichen Antworten haben. Somit sind die fehlenden Daten am wenigsten störend für das Trainieren.

```python del="‎NaN" ins="‎18.0" ins="‎30.5"
"""
      A     B     C  Outcome
I    31  34.0  32.0        0
II   17   ‎NaN  10.0        1
III  13   ‎NaN  11.0        1
IV   14  18.0  12.0        1
V    29  26.0  29.0        0
VI   31  35.0   ‎NaN        0
"""

# Replace all NaN with median + watch out for Outcome value
sensible_col = ['A', 'B', 'C']
masks = [ df['Outcome'] == 0, df['Outcome'] == 1 ]

for mask in masks:
    df.loc[mask, sensible_col] = df.loc[mask, sensible_col].replace(np.nan, df[df[mask] != np.nan].mean())

"""
      A     B     C  Outcome
I    31  34.0  32.0        0
II   17  ‎18.0  10.0        1
III  13  ‎18.0  11.0        1
IV   14  18.0  12.0        1
V    29  26.0  29.0        0
VI   31  35.0  ‎30.5        0
"""
```

##### Standardisierung der Spaltennamen

In Python gilt meistens `snake_case`. Das bedeutet, dass alles klein geschrieben und Wörter mit Unterstrichen (`_`) getrennt werden. Da viele Datensätze oft nicht diesen Konventionen folgen, ist es sinnvoll, die Spaltennamen zu standardisieren.

In diesem Beispiel werden alle Spaltennamen automatisch in Kleinbuchstaben konvertiert, Klammern entfernt und Leerzeichen durch Unterstriche ersetzt.

```python
df.columns = [col.lower().replace("(", "").replace(")", "").replace(" ", "_") for col in df]
```

### Matplotlib

Matplotlib ist eine umfassende Bibliothek zum Erstellen statischer, animierter und interaktiver Visualisierungen in Python. Es ist besonders nützlich für wissenschaftliche und datenbezogene Visualisierungen.

#### Installation

Um Matplotlib zu installieren, kann man pip verwenden:

```bash
pip install matplotlib
```

#### Grundlegendes Beispiel

Hier ist ein einfaches Beispiel, das zeigt, wie man mit Matplotlib ein Liniendiagramm erstellt:

```python
import matplotlib.pyplot as plt

# Daten
x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

# Liniendiagramm erstellen
plt.plot(x, y)
plt.xlabel('x-Achse')
plt.ylabel('y-Achse')
plt.title('Einfaches Liniendiagramm')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/plot.png" alt="Liniendiagramm" style="max-width: 500px;">

#### Histogramm

Ein Histogramm ist nützlich, um die Verteilung einer Datenmenge darzustellen. Hier ist ein Beispiel:

```python
import matplotlib.pyplot as plt
import numpy as np

# Zufallsdaten generieren
data = np.random.randn(1000)

# Histogramm erstellen
plt.hist(data, bins=30, edgecolor='black')
plt.xlabel('Werte')
plt.ylabel('Häufigkeit')
plt.title('Histogramm der Zufallsdaten')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/hist.png" alt="Histogramm" style="max-width: 500px;">

#### Punktwolkendiagramm (Scatter Plot)

Ein Punktwolkendiagramm zeigt die Beziehung zwischen zwei Variablen. Im ersten Beispiel sieht man, dass wenig Korrelation besteht, während im zweiten Beispiel ein starker Zusammenhang zwischen den beiden Arrays besteht.

```python
import matplotlib.pyplot as plt
import numpy as np

# Zufallsdaten generieren
x = np.random.rand(50)
y = np.random.rand(50)

# Scatter Plot erstellen
plt.scatter(x, y, c='blue', alpha=0.5)
plt.xlabel('x-Werte')
plt.ylabel('y-Werte')
plt.title('Punktwolkendiagramm')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/scatter.png" alt="Punktwolkendiagramm" style="max-width: 500px;">

```python
import matplotlib.pyplot as plt
import numpy as np

# Funktion für linearen Zusammenhang
def linear_function(x):
    return 0.5 * x + 3  # Beispiel einer linearen Funktion: y = 0.5x + 3

# x-Werte generieren
x = np.linspace(0, 100, 30)  # 30 äquidistante Werte von 0 bis 100
y = linear_function(x) + np.random.normal(0, 5, 30)  # Zufällige Abweichung mit Normalverteilung (Mittelwert 0, Standardabweichung 5)

# Scatter Plot erstellen
plt.scatter(x, y, c='blue', alpha=0.5)
plt.xlabel('x-Werte')
plt.ylabel('y-Werte')
plt.title('Punktwolkendiagramm')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/scatter_2.png" alt="Punktwolkendiagramm" style="max-width: 500px;">

#### Balkendiagramm

Ein Balkendiagramm zeigt die Werte für verschiedene Kategorien.

```python
import matplotlib.pyplot as plt

# Daten
categories = ['A', 'B', 'C', 'D']
values = [3, 7, 8, 5]

# Balkendiagramm erstellen
plt.bar(categories, values, color='green')
plt.xlabel('Kategorien')
plt.ylabel('Werte')
plt.title('Balkendiagramm')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/bar.png" alt="Balkendiagramm" style="max-width: 500px;">

#### Boxplot

Ein Boxplot zeigt die Verteilung einer Datenmenge und hebt Ausreißer hervor.

```python
import matplotlib.pyplot as plt
import numpy as np

# Zufallsdaten generieren
data = [np.random.randn(100) for _ in range(4)]

# Boxplot erstellen
plt.boxplot(data, patch_artist=True)
plt.xlabel('Gruppe')
plt.ylabel('Werte')
plt.title('Boxplot')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/box.png" alt="Boxplot" style="max-width: 500px;">

### Seaborn

Seaborn ist eine auf Matplotlib basierende Bibliothek, die speziell für statistische Visualisierungen entwickelt wurde. Sie bietet eine einfachere API und schönere Standardstile.

#### Installation

Um Seaborn zu installieren, kann man pip verwenden:

```bash
pip install seaborn
```

#### Grundlegendes Beispiel

Hier ist ein einfaches Beispiel, das zeigt, wie man mit Seaborn ein Histogramm erstellt:

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Daten
data = np.random.randn(1000)

# Histogramm erstellen
sns.histplot(data, bins=30, kde=True)
plt.xlabel('Werte')
plt.ylabel('Häufigkeit')
plt.title('Seaborn Histogramm mit KDE')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/histplot.png" alt="Histogramm und Liniendiagramm" style="max-width: 500px;">

#### Paarplot (Pair Plot)

Ein Paarplot ist nützlich, um die Beziehungen zwischen mehreren Variablen in einem Datensatz darzustellen.

```python
import seaborn as sns
import pandas as pd

# Beispieldatensatz laden
df = sns.load_dataset('iris')

# Paarplot erstellen
sns.pairplot(df, hue='species')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/pairplot.png" alt="Paarplot" style="max-width: 700px;">

#### Heatmap

Eine Heatmap ist nützlich, um Korrelationen zwischen verschiedenen Variablen zu visualisieren.

```python
import seaborn as sns
import numpy as np

# Zufallsdaten generieren
data = np.random.rand(10, 12)

# Heatmap erstellen
sns.heatmap(data, annot=True, fmt=".1f")
plt.xlabel('Spalten')
plt.ylabel('Zeilen')
plt.title('Heatmap')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/heatmap.png" alt="Heatmap" style="max-width: 500px;">

#### Violinplot

Ein Violinplot kombiniert Aspekte von Boxplots und Dichteplots.

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Beispieldatensatz laden
df = sns.load_dataset('iris')

# Violinplot erstellen
sns.violinplot(x='species', y='sepal_length', data=df)
plt.xlabel('Spezies')
plt.ylabel('Sepal Länge')
plt.title('Violinplot der Sepal Länge nach Spezies')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/violinplot.png" alt="Violinplot" style="max-width: 500px;">

#### Relplot (für KI-Anwendungen)

Ein Relplot (relationship plot) ist nützlich, um die Beziehung zwischen verschiedenen Variablen zu visualisieren, insbesondere in großen Datensätzen, die in KI-Anwendungen häufig vorkommen.

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Beispieldatensatz laden
df = sns.load_dataset('tips')

# Relplot erstellen
sns.relplot(x='total_bill', y='tip', hue='time', size='size', data=df)
plt.xlabel('Rechnungsbetrag')
plt.ylabel('Trinkgeld')
plt.title('Relplot der Rechnungsbeträge und Trinkgelder')
plt.show()
```

<img src="/images/artificial_intelligence/diagrams/relplot.png" alt="Relplot" style="max-width: 500px;">

## Machine Learning

Maschinelles Lernen ist ein Bereich der Informatik, der es ermöglicht, Modelle zu trainieren, um Muster und Beziehungen in Daten zu erkennen. Der große Unterschied zum herkömmlichen Programmieren besteht darin, dass beim maschinellen Lernen anhand von unglaublich vielen Datensätzen (mit zugehörigen richtigen Antworten) **Regeln** erlernt werden, die dann auf neue Daten angewendet werden können, während ein Algorithmus anhand von festgelegten Regeln die **Antworten** findet. Folgendes Bild veranschaulicht dieses Konzept:

<img
    src="/images/artificial_intelligence/machine_learning_concept_lm.png"
    alt="ML Konzept"
    class="light-only"
/>
<img
    src="/images/artificial_intelligence/machine_learning_concept_dm.png"
    alt="ML Konzept"
    class="dark-only"
/>

#### Umsetzung von KI-Projekten

Der Prozess des maschinellen Lernens ist im folgenden Diagramm dargestellt:

<img
    src="/images/artificial_intelligence/machine_learning_process_lm.png"
    alt="Prozess des maschinellen Lernens"
    class="light-only"
/>
<img
    src="/images/artificial_intelligence/machine_learning_process_dm.png"
    alt="Prozess des maschinellen Lernens"
    class="dark-only"
/>

Wie man sehen kann, beginnt dieser Prozess mit dem **Aggregieren** der Daten und **Bereinigung** dieser. Auch wenn man es nicht glaubt, machen diese Teilaufgaben **ca. 50-70%** des Arbeitsaufwandes vom gesamten Prozess aus. Hierbei muss besonders auf den Datenschutz der Kunden, die Datenqualität und die Datensicherheit geachtet werden. Die Daten selbst können im Internet gratis oder kostenlos gefunden werden. Saubere Daten sind Gold wert!

Der eigentliche interessante Teil beginnt dann beim Aufbereitung und Trainieren des Modells mit den Daten und dem anschließenden Testen. Hierbei gibt es einige Methoden der deskriptiven Statistik, um die Qualität des Modells zu beurteilen. Sobald der Kunde mit dieser zufrieden ist, kann das Modell in der Produktionsumgebung eingesetzt werden.

#### Einordnung in die Kategorien

Maschinelles Lernen unterteilt sich hierbei in die drei großen Kategorien `Supervised Learning`, `Unsupervised Learning`, `Reinforcement Learning`.

-   **Supervised Learning**  
    Das überwachte Lernen kategorisiert alle Aufgaben des Maschinellen Lernens, bei welchem das Trainieren mithilfe von Daten und zugehörigen richtigen bzw. gewollten Antworten stattfindet. Das Modell wird demnach auf eine Art „Soll-Zustand“ hintrainiert. Um die Datensätze möglichst effizient zu nutzen, werden meistens 70% der Ursprungsdaten für den Prozess des Trainierens verwendet und die restlichen 30% für das Testen der Genauigkeit des Modells.

    Beispiele für das überwachte Lernen sind die Klassifizierung von Bildern, Texten, Sprache, Emotionen, die Erkennung von Spam-E-Mails, Empfehlungssysteme in Online-Shops oder gewissen Formen von Vorhersagen in bestimmten Bereichen.

    Die größten Herausforderungen dieser Sparte sind das `Overfitting` und `Underfitting`. Aufgrund des Daseins der korrekten Antworten kann es geschehen, dass das Modell zu sehr and die Trainingsdaten trainiert wird und somit keine allgemein gültigen Regeln erstellen kann (`Overfitting`). Oder die Beschaffenheit der Daten, die falsch ausgewählte Architektur (Neuronales Netz) oder Algorithmus lässt keine allgemeinen Regeln erkennen (`Underfitting`).

    Nichtsdestotrotz ist das überwachte Lernen das weit verbreitetste und am häufigsten genutzte Verfahren, da es sich als sehr effektiv erwiesen hat.

-   **Unsupervised Learning**  
    Beim unüberwachten Lernen versucht der Algorithmus im Trainingsprozess die Daten in Gruppen zu clustern, um gemeinsame oder unterschiedliche Eigenschaften festzustellen. Dabei sind als Datengrundlage keine Antworten vorhanden und das Modell muss selbständig die Muster in den Daten erkennen.

    Diese Sparte ist vor allem in Bereichen des Clustern vorzufinden. Beispielsweise kann man unbeaufsichtigtes Lernen in Echtzeit nutzen, um Muster in Kundenmerkmalen (Marketingabteilung), Anomalien (Betrugserkennung), Empfehlungssystemen oder selten auf der Bildverarbeitung zu identifizieren.

    Diese Art des maschinellen Lernens wird nicht so häufig verwendet, da die Interpretierbarkeit der Ergebnisse, die Skalierbarkeit und Komplexität oft zu großen Problemen führt. Erstaunlicherweise basiert unser Gehirn jedoch am ehesten auf dieser Methodik, da in unseren frühen Lebensjahren ausschließlich Rohdaten eingespeist werden (Hören, Sehen, Schmecken, ...).

-   **Reinforcement Learning**  
    Das verstärkende Lernen ist ein iterativer Prozess, bei welchem das Modell mithilfe des Belohnungssystems trainiert wird. Das Ziel des Modells ist die Maximierung der Belohnung, welches mit dem Ziel der Programmierer (Maximierung der Genauigkeit) stark korreliert. Außerdem werden schlechte Belohnungen bzw. Bestrafungen vom Modell vermieden, was bedeutet, dass die Bewerter des Modells bereits in der Trainingsphase die Robustheit und Fairness des Modells sicherstellen kann. Somit kann diese künstliche Intelligenz schwer manipuliert werden, schädliche Informationen preiszugeben, und hat keine Vorurteile.

    Hierbei muss man bei der Implementierung des Learnprozesses jedoch aufpassen, nicht versehentlich das Belohnungssystem zu negieren. Dies ist nämlich wirklich einmal auch OpenAI passiert, weswegen [GPT-2 das unanständigste Modell](https://openai.com/index/fine-tuning-gpt-2/) in der Geschichte wurde ([YouTube](https://www.youtube.com/watch?v=qV_rOlHjvvs)).

### Deep Learning

Eine weiter Unterteilung im maschinellen Lernen ist das **Deep Learning** (DL). Die Besonderheit dieser Art von maschinellen Lernen ist die Aneinanderreihung von mehreren Schichten, welche die Daten von vorne nach hinten verarbeiten und Parameter in der `Backwards-Propagation` optimieren. Dadurch kann das Modell sehr komplexe Muster und Beziehungen erkennen. Allgemein kann man sagen, dass alle Neuronalen Netzwerke (Neural Networks) in die Kategorie „Deep Learning“ fallen.

Neben **Neuronalen Netzwerken** sind auch **Transformatoren** ein wichtiges Konzept im Deep Learning Bereich, da auch diese aus vielen `Layers` bestehen. Jede Architektur hat besondere Stärken in bestimmten Einsatzgebieten -- Transformatoren vor allem im generativen Sektor (Text-, Bild-, Videoerstellung).

Das Gegenteil des „Deep Learning“ (tiefen Lernens) ist das „Shallow Learning“ (flaches Lernen), welches alle anderen Algorithmen des maschinellen Lernens umfasst, wie zum Beispiel die `Support Vector Machine` (SVM), den `Random Forest Classifier` (RFC) oder ganz allgemein die verschiedenen mathematischen Methoden der `Regression`.

:::danger[Achtung]
Deep Learning bedeutet allerdings nicht zwangsmäßig, dass das Modell anschließend besser als Algorithmen des flachen Lernens sein muss. Deep Learning klassifiziert nur, dass das Modell aus mehreren Schichten (Layer) besteht.
:::

### Supervised Learning

Supervised Learning ist ein zentraler Bereich in der maschinellen Lernpraxis, der es ermöglicht, Modelle zu trainieren, um Muster und Beziehungen in Daten zu erkennen. Im Gegensatz zum unsupervised Learning, bei dem der Algorithmus versucht, selbständig Muster in den Daten zu identifizieren, erfolgt beim Supervised Learning das Training anhand von gelabelten Daten, die als Eingabe-Output-Paare vorliegen.

In diesem Kontext bezeichnet „gelabelte Daten“ eine Menge von Eingabebeispielen, für die die zugehörigen Ausgaben bereits bekannt sind. Das Ziel besteht darin, ein Modell zu erstellen, das in der Lage ist, aus neuen, bisher ungesehenen Eingabebeispielen korrekte Vorhersagen oder Klassifikationen zu treffen.

Es gibt verschiedene Arten von Modellen im Bereich des Supervised Learning, die jeweils für spezifische Aufgaben und Datenstrukturen entwickelt wurden. Dazu gehören lineare Modelle wie die logistische Regression für binäre Klassifikation, Support Vector Machines für marginale Klassifikation, Ensemble-Methoden wie Random Forests zur Kombination mehrerer Modelle, Naive Bayes für probabilistische Klassifikation und neuronale Netzwerke für komplexe Mustererkennung.

Der Trainingsprozess besteht darin, das Modell mit den gelabelten Daten zu füttern und die Gewichtungen oder Parameter des Modells so anzupassen, dass es in der Lage ist, aus den gegebenen Eingaben genaue Vorhersagen zu machen. Das trainierte Modell kann dann auf neuen, nicht gelabelten Daten angewendet werden, um Vorhersagen zu treffen oder Muster zu identifizieren.

Supervised Learning findet in einer Vielzahl von Anwendungen Anwendung, darunter Spracherkennung, Bildklassifikation, medizinische Diagnose, Finanzprognosen und vieles mehr. Die Wahl des geeigneten Modells hängt von der Art der Daten und der spezifischen Aufgabe ab, die gelöst werden soll.

#### Vorbereitung

:::note
Bei vielen Modellen wird davon ausgegangen, dass die Daten bereits aufbereitet vorliegen.
:::

##### Train Test Split

In der Welt des maschinellen Lernens ist der Train-Test-Split ein entscheidender Schritt, um die Leistung von Modellen objektiv zu bewerten. Diese Methode ist von grundlegender Bedeutung, um sicherzustellen, dass ein Modell nicht nur die Trainingsdaten auswendig gelernt hat, sondern auch in der Lage ist, auf neuen, bisher ungesehenen Daten präzise Vorhersagen zu treffen.

```python

## X und y erstellen
## Kundenbewertungen (X)
X = [
    "Das Produkt ist wirklich großartig, ich bin sehr zufrieden!",
    "Leider entspricht das Produkt nicht meinen Erwartungen.",
    "Tolles Preis-Leistungs-Verhältnis.",
    "Ich bin neutral, es ist okay, aber nichts Besonderes.",
    "Schlechtestes Produkt, das ich je gekauft habe!"
]

## Dazugehörige Kategorien (y)
y = ["positiv", "negativ", "positiv", "neutral", "negativ"]

## DataFrame erstellen
import pandas as pd
df = pd.DataFrame({'Bewertung': X, 'Kategorie': y})

## Daten in X und y aufteilen
X = df['Bewertung']
y = df['Kategorie']

## Daten teilen für lernen und validieren
from sklearn.model_selection import train_test_split
X_train, X_valid, y_train, y_valid = train_test_split(X, y, test_size = .3, random_state = 12)

print("X_train:", X_train.shape) ## X_train: (3,)
print("y_train:", y_train.shape) ## y_train: (3,)
print("X_valid:", X_valid.shape) ## X_valid: (2,)
print("y_valid:", y_valid.shape) ## y_valid: (2,)
```

##### Vektorisieren

Beim maschinellen Lernens wird die Vektorisierung der Daten als wichtiger Schritt betrachtet. Die Vektorisierung ist ein Prozess, bei dem die Daten in Form von Vektoren umgewandelt werden. In diesem Beispiel werden die Textdaten mittels [BoW](#bag-of-words-bow) vektorisiert.

```python
from sklearn.feature_extraction.text import CountVectorizer
vectorizer = CountVectorizer()

vectorizer.fit(X)
print("Token Count:", len(vectorizer.get_feature_names_out()))
## <Anzahl unterschiedliche Wörter>

X_train_vectorized = vectorizer.transform(X_train)
print("X_train_vectorized:", X_train_vectorized.shape)
## X_train_vectorized: (<Anzahl Trainingsbeispiele>, <Anzahl unterschiedliche Wörter>)

print("Bag of Words\n", X_train_vectorized.toarray())
## [Beispieloutput:]
## Bag of Words
## [[0 0 0 ... 0 0 0]
## [0 0 0 ... 0 0 0]
## [0 0 0 ... 0 0 0]
## ...
## [0 0 0 ... 0 0 0]
## [0 0 0 ... 0 0 0]
## [0 0 0 ... 0 0 0]]
```

#### Lineare Modelle

##### Logistic Regression

##### Support Vector Machines

#### Ensemble-Methoden

##### Random Forest Classifier

Der Random Forest Classifier (RFC) ist ein leistungsfähiger und vielseitiger Algorithmus für Klassifikationsaufgaben. Er kombiniert die Vorhersagen vieler Entscheidungsbäume, um die Genauigkeit und Robustheit zu erhöhen. Die wichtigsten Vorteile des RFC sind:

1. **Robustheit gegen Überanpassung**: Da jeder Baum auf einer zufälligen Teilmenge der Daten trainiert wird, verringert sich die Wahrscheinlichkeit, dass der Algorithmus zu stark auf Trainingsdaten angepasst wird.
2. **Stabilität und Genauigkeit**: Durch die Aggregation der Vorhersagen vieler Bäume liefert der RFC konsistentere und genauere Vorhersagen.
3. **Geringere Varianz**: Der RFC reduziert die Varianz, die bei einzelnen Entscheidungsbäumen auftreten kann, indem er die Ergebnisse vieler Bäume kombiniert.
4. **Automatische Merkmalsauswahl**: Während des Trainings wird für jeden Split nur eine zufällige Untermenge der Merkmale betrachtet, was die Bedeutung irrelevanter Merkmale verringert.

###### Entscheidungsbaum

Ein Entscheidungsbaum ist die grundlegende Komponente eines Random Forest. Er besteht aus Knoten, die Bedingungen auf Merkmale der Daten prüfen, und Blättern, die die Vorhersagen enthalten. Der Baum wird rekursiv aufgebaut, indem an jedem Knoten der beste Split gewählt wird, der die Daten am besten trennt. Dieser Prozess wird so lange fortgesetzt, bis bestimmte Kriterien erfüllt sind (z.B. maximale Tiefe des Baumes oder minimale Anzahl von Datenpunkten in einem Blatt).

In der folgenden Abbildung sieht man ein Beispiel eines Entscheidungsbaums, welcher feststellen soll, ob eine Frucht `essbar` oder `nicht essbar` ist. Dieser Baum verfügt über einen Wurzelknoten, zwei innere Knoten und vier Blattknoten.

<img
    src="/images/artificial_intelligence/rfc_tree_lm.png"
    alt="Entscheidungsbaum"
    class="light-only"
/>
<img
    src="/images/artificial_intelligence/rfc_tree_dm.png"
    alt="Entscheidungsbaum"
    class="dark-only"
/>

###### Ensemble-Lernen

Der Random Forest ist ein Ensemble-Lernverfahren, das viele Entscheidungsbäume kombiniert. Jeder Baum wird auf einer zufälligen Teilmenge der Trainingsdaten (mit Zurücklegen) und einer zufälligen Teilmenge der Merkmale trainiert. Die Vorhersagen der einzelnen Bäume werden dann aggregiert, um die endgültige Vorhersage zu machen. Bei Klassifikationsproblemen erfolgt dies in der Regel durch Mehrheitsabstimmung.

Im folgenden Bild sieht man anhand eines Beispiels, wie die Genauigkeit des gesamten Waldes aufgrund des unterschiedlichen Aufbaus der Bäume insgesamt steigt, da sich Fehler gegenseitig automatisch aufheben. Dieses Phänomen nennt sich `Weisheit der Crowd`.

<img
    src="/images/artificial_intelligence/rfc_ensemble_lm.png"
    alt="Entscheidungsbaum"
    class="light-only"
/>
<img
    src="/images/artificial_intelligence/rfc_ensemble_dm.png"
    alt="Entscheidungsbaum"
    class="dark-only"
/>

###### Codebeispiel mit Datenaufbereitung und Anwendung des RFC

Hier ist ein vollständiges Beispiel, das zeigt, wie man den `RandomForestClassifier` in Python mit `scikit-learn` verwendet. Das Beispiel umfasst Datenaufbereitung, Modelltraining und Vorhersage.

```python
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Daten laden
iris = load_iris()
X, y = iris.data, iris.target

# Daten in Trainings- und Testsets aufteilen
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Random Forest Classifier erstellen
clf = RandomForestClassifier(n_estimators=100, random_state=42)

# Modell trainieren
clf.fit(X_train, y_train)

# Vorhersagen auf dem Testset machen
y_pred = clf.predict(X_test)

# Genauigkeit berechnen
accuracy = accuracy_score(y_test, y_pred)
print(f'Genauigkeit: {accuracy * 100:.2f}%')

# Beispiel-Vorhersage für neue Daten
new_data = np.array([[5.1, 3.5, 1.4, 0.2]])
prediction = clf.predict(new_data)
print(f'Vorhersage für neue Daten: {iris.target_names[prediction][0]}')
```

```
//output.txt
Genauigkeit: 100.00%
Vorhersage für neue Daten: setosa
```

###### Erklärung des Codes

1. **Daten laden**: Das Iris-Datenset wird mit `load_iris()` geladen.
2. **Datenaufteilung**: Die Daten werden mit `train_test_split()` in Trainings- und Testsets aufgeteilt.
3. **Modellerstellung**: Ein `RandomForestClassifier` wird mit 100 Entscheidungsbäumen (`n_estimators=100`) erstellt.
4. **Training**: Der Klassifikator wird mit den Trainingsdaten trainiert.
5. **Vorhersage**: Vorhersagen für das Testset werden gemacht.
6. **Bewertung**: Die Genauigkeit des Modells auf dem Testset wird berechnet.
7. **Beispiel-Vorhersage**: Eine Vorhersage für neue, unbekannte Daten wird durchgeführt.

Dieses Beispiel zeigt die typischen Schritte zur Verwendung eines Random Forest Classifiers mit `scikit-learn`. Durch die Kombination vieler Entscheidungsbäume bietet der RFC robuste und genaue Vorhersagen und ist eine ausgezeichnete Wahl für viele Klassifikationsprobleme.

##### Gradient Boosting Classifier

#### Naive Bayes

Naive-Bayes-Modelle sind eine Klasse von probabilistischen Klassifikationsalgorithmen im Bereich des Supervised Learning. Sie basieren auf dem Bayes'schen Theorem und gehen von der naiven Annahme aus, dass die Merkmale eines Datenpunkts unabhängig voneinander sind, obwohl dies in der Realität oft nicht der Fall ist. Trotz ihrer Einfachheit haben Naive-Bayes-Modelle sich als effektiv in vielen Anwendungen, insbesondere in der Textklassifikation, erwiesen. Diese Modelle sind schnell zu trainieren und zu implementieren, und sie bieten gute Leistung, wenn die Unabhängigkeitsannahme in der Praxis zumindest annähernd erfüllt ist.

##### MultinomialNB

Multinomial Naive Bayes (MultinomialNB) ist eine Textklassifikationsmethode, die auf dem Naive-Bayes-Algorithmus basiert. Sie eignet sich besonders gut für Aufgaben wie Spam-Erkennung oder Themenzuordnung. Mit Fokus auf Wortzählungen in Texten ist MultinomialNB für seine Einfachheit und Effizienz bekannt.

```python
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

clf = MultinomialNB(alpha=0.2)
clf.fit(X_train, y_train)

predictions = clf.predict(X_valid)
print(accuracy_score(predictions, y_valid)) ## [Beispieloutput:] 0.9772727272727273
```

#### K-nearest Neighbors (KNN)

#### Neuronale Netze

Neuronale Netzwerke sind eine Klasse von Modellen im Bereich des maschinellen Lernens, die auf der Struktur und Funktion des menschlichen Gehirns basieren. Sie bestehen aus miteinander verbundenen Knoten (Neuronen), die in Schichten organisiert sind. Diese Netzwerke lernen durch Anpassung der Verbindungen zwischen den Neuronen (Gewichte), um Aufgaben wie Klassifikation, Regression und Mustererkennung durchzuführen.

##### Neuronale Netzwerke (NN)

Neuronale Netzwerke bestehen aus einer Reihe von Schichten:

-   **Eingabeschicht:** Die erste Schicht, die die Eingabedaten empfängt.
-   **Versteckte Schichten:** Eine oder mehrere Schichten, die die Eingabedaten transformieren und komplexe Merkmale extrahieren.
-   **Ausgabeschicht:** Die letzte Schicht, die das Ergebnis der Verarbeitung liefert.

Jedes Neuron berechnet eine gewichtete Summe seiner Eingaben, wendet eine Aktivierungsfunktion an und gibt das Ergebnis an die nächste Schicht weiter. Häufig verwendete Aktivierungsfunktionen sind die Sigmoid-Funktion, die Tanh-Funktion und die ReLU-Funktion (Rectified Linear Unit).

Neuronale Netzwerke lernen durch einen Prozess namens Backpropagation, der in Kombination mit einem Optimierungsalgorithmus wie dem Gradientenabstieg verwendet wird. Backpropagation berechnet den Gradienten des Fehlers bezüglich der Gewichte und Biases und aktualisiert diese, um den Fehler zu minimieren.

```python
import torch
import torch.nn as nn
import torch.optim as optim

class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return x

model = SimpleNN()
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(model.parameters(), lr=0.01)
```

##### Convolutional Neural Networks (CNN)

Convolutional Neural Networks sind eine spezielle Art von neuronalen Netzwerken, die besonders gut für die Verarbeitung von Bildern und anderen grid-basierten Daten geeignet sind. Sie bestehen aus:

-   **Convolutional Layers:** Diese Schichten verwenden Filter (oder Kernel), die über das Eingabebild gleiten und lokale Merkmale extrahieren.
-   **Pooling Layers:** Diese Schichten reduzieren die Dimensionalität der Daten, indem sie lokale Bereiche zusammenfassen, z.B. durch Max-Pooling oder Average-Pooling.
-   **Fully Connected Layers:** Diese Schichten sind ähnlich wie in herkömmlichen neuronalen Netzwerken und verbinden alle Neuronen miteinander.

CNNs werden häufig in der Bild- und Videoverarbeitung, Mustererkennung und der Verarbeitung von mehrdimensionalen Daten eingesetzt.

```python
import tensorflow as tf
from tensorflow.keras import layers, models

model = models.Sequential()
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.Flatten())
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dense(10, activation='softmax'))

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
```

##### Recurrent Neural Networks (RNN)

Recurrent Neural Networks sind eine Klasse von neuronalen Netzwerken, die speziell für die Verarbeitung von sequenziellen Daten entwickelt wurden. Sie haben interne Speicherzustände, die Informationen über frühere Eingaben speichern. Diese Netzwerke sind besonders gut für Aufgaben wie Zeitreihenanalyse, Sprachverarbeitung und andere sequentielle Daten geeignet.

Varianten von RNNs sind:

-   **Long Short-Term Memory (LSTM):** Eine spezielle RNN-Architektur, die entwickelt wurde, um das Problem des verschwindenden Gradienten zu lösen und langfristige Abhängigkeiten besser zu modellieren.
-   **Gated Recurrent Unit (GRU):** Eine vereinfachte Version von LSTM, die ähnliche Leistungsmerkmale aufweist.

```python
import torch
import torch.nn as nn

class SimpleRNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(SimpleRNN, self).__init__()
        self.rnn = nn.RNN(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        out, _ = self.rnn(x)
        out = self.fc(out[:, -1, :])
        return out

model = SimpleRNN(input_size=10, hidden_size=20, output_size=1)
criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)
```

##### Transformer-Netzwerke

Transformer sind eine neuere Architektur, die insbesondere in der Verarbeitung natürlicher Sprache (NLP) verwendet wird. Sie basieren auf einem Mechanismus namens Selbstaufmerksamkeit, der es ermöglicht, Abhängigkeiten über große Entfernungen in der Sequenz zu modellieren. Im Gegensatz zu RNNs verarbeiten Transformer alle Eingaben gleichzeitig und nutzen Mechanismen, die die Bedeutung jeder Position in der Eingabesequenz gewichten.

Die bekannteste Anwendung von Transformern ist das Modell BERT (Bidirectional Encoder Representations from Transformers), das Spitzenleistungen in einer Vielzahl von NLP-Aufgaben erzielt hat.

```python
import torch
import torch.nn as nn
from torch.nn import Transformer

model = Transformer(nhead=8, num_encoder_layers=3)
src = torch.rand((10, 32, 512))  # (sequence_length, batch_size, feature_size)
tgt = torch.rand((20, 32, 512))
out = model(src, tgt)
```

##### TensorFlow

TensorFlow ist ein Open-Source-Framework für maschinelles Lernen, das von Google entwickelt wurde. Es bietet eine umfangreiche Bibliothek für die Erstellung und das Training von neuronalen Netzwerken und ist besonders bekannt für seine Flexibilität und Skalierbarkeit.

Hauptmerkmale von TensorFlow sind:

-   **Tensors:** Grundlegende Datenstrukturen, die n-dimensionalen Arrays ähneln.
-   **Graphen:** Modelle werden als gerichtete Graphen dargestellt, wobei Knoten Operationen und Kanten Datenströme darstellen.
-   **Keras API:** Eine hochstufige API, die das Erstellen und Trainieren von Modellen vereinfacht.

TensorFlow bietet Unterstützung für verteiltes Training, ermöglicht den Einsatz auf verschiedenen Plattformen (CPUs, GPUs, TPUs) und hat eine große Community sowie umfangreiche Dokumentation.

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
```

##### PyTorch

PyTorch ist ein Open-Source-Framework für maschinelles Lernen, das von Facebook entwickelt wurde. Es ist besonders beliebt wegen seiner Einfachheit und Flexibilität sowie seiner dynamischen Computational Graphen.

Hauptmerkmale von PyTorch sind:

-   **Tensors:** Ähnlich wie in TensorFlow, aber mit einer einfacheren Syntax.
-   **Autograd:** Automatische Differenzierung zur Berechnung von Gradienten.
-   **TorchScript:** Ermöglicht die Konvertierung von PyTorch-Modellen in eine Form, die in einer Produktionsumgebung ausgeführt werden kann.

PyTorch ist besonders bei Forschern und Entwicklern beliebt, da es intuitive und pythonische APIs bietet, die das Experimentieren und Debuggen erleichtern.

```python
import torch
import torch.nn as nn
import torch.optim as optim

class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return x

model = SimpleNN()
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(model.parameters(), lr=0.01)
```

### Natural Language Processing

Natürliche Sprachverarbeitung (Natural Language Processing, NLP) ist ein interdisziplinäres Forschungsfeld, das sich mit der Wechselwirkung zwischen Computern und menschlicher Sprache befasst. Das Hauptziel von NLP ist es, Computern die Fähigkeit zu verleihen, menschliche Sprache in all ihren Nuancen zu verstehen, zu interpretieren und darauf zu reagieren. Dies beinhaltet nicht nur die Erkennung von Wörtern und Grammatik, sondern auch die Analyse von Bedeutung, Kontext und sogar Emotionen, die in der menschlichen Sprache enthalten sein können.

NLP nutzt Methoden aus verschiedenen Bereichen wie Linguistik, Informatik und künstliche Intelligenz, um Modelle und Algorithmen zu entwickeln, die es Computern ermöglichen, natürliche Sprache effektiv zu verarbeiten. Zu den grundlegenden Aufgaben von NLP gehören die Textklassifikation, Named Entity Recognition (NER), maschinelles Übersetzen, Textgenerierung und Sentimentanalyse.

#### Text Processing

Im ersten Schritt der Natural Language Processing muss der Text so bearbeitet werden, dass Merkmale (Wörter, Features) des Textes von der Maschine besser verarbeitet werden können.

1. **Reinigung**
   Der erste Schritt in der Textverarbeitungspipeline beinhaltet die Reinigung des Texts, um unnötige Zeichen, Symbole oder Formatierungen zu entfernen. Dies erleichtert die folgenden Verarbeitungsschritte und verbessert die Konsistenz der Daten.

2. **Normalisierung**
   Normalisierung beinhaltet die Umwandlung von Text in eine einheitliche Form, z.B. die Umwandlung von Groß- und Kleinschreibung oder die Entfernung von Akzenten. Dies stellt sicher, dass der Text konsistent und vergleichbar ist.

3. **Tokenisierung**
   Tokenisierung teilt den Text in einzelne Wörter oder Token auf. Jedes Token repräsentiert eine bedeutungsvolle Einheit, was die spätere Analyse erleichtert.

4. **Stoppwörter entfernen**
   Stoppwörter wie "und", "oder" oder "das" tragen oft wenig zur Bedeutung bei und werden entfernt, um den Fokus auf relevantere Inhalte zu legen.

5. **Part of Speech Tagging (POS)**
   In diesem Schritt werden den einzelnen Wörtern grammatische Kategorien zugeordnet, wie Substantive, Verben oder Adjektive. Dies hilft bei der Analyse der syntaktischen Struktur.

6. **Named Entity Recognition (NER)**
   Benannte Entitäten wie Personen, Orte oder Organisationen werden identifiziert und markiert, um wichtige Informationen im Text zu extrahieren.

7. **Stemming und Lemmatisierung**
   Der letzte Schritt ist das Stemming (fortgeschrittener: Lemmatisierung (mit Wörterbuch)), bei dem Wörter auf ihren Stamm zurückgeführt werden. Dies hilft, Varianten eines Wortes zu vereinheitlichen und die Analyse zu erleichtern.

##### Normalisierung

Als Normalisierung bezeichnet man die Konvertierung von Text in Kleinbuchstaben. Dies ist in den meisten Fällen der Textverarbeitung sinnvoll, muss jedoch nicht unbedingt geschehen. Außerdem kann auch die Entfernung der Satzzeichen unter der Normalisierung erfolgen.

```python
## Konvertierung in Kleinbuchstaben
df = pd.DataFrame({'tweets': [col.lower() for col in ['I am a dog', 'I am a cat', 'I am a fish']]}).

## Entfernung der Satzzeichen
import re
df.tweets = [re.sub("[^a-z0-9 .]", '', col) for col in df.tweets]
```

##### Tokenisierung

Als Tokenisierung bezeichnet man die Aufteilung eines Textes in einzelne Wörter. Diese Wörter werden als Tokens bezeichnet.

```python
import spacy
nlp = spacy.load("de_core_news_sm") ## en_core_web_sm
doc = nlp("Steve Jobs, CEO von Apple, erwägt den Kauf eines österreichischen Startups um 6 Mio. Euro.")

for token in doc:
    print(f"{token.text:{20}}", f"{token.pos_:{10}}", f"{token.ent_type_:{10}}", f"{str(token.is_stop):{10}}", f"{token.lemma_:{20}}")
```

```python
// token.output
Text                 POS        ENT_TYPE   IS_STOP    Lemma
--------------------------------------------------------------------------
Steve                PROPN      PER        False      Steve
Jobs                 PROPN      PER        False      Jobs
,                    PUNCT                 False      --
CEO                  PROPN                 False      CEO
von                  ADP                   True       von
Apple                PROPN      ORG        False      Apple
,                    PUNCT                 False      --
erwägt               VERB                  False      erwägen
den                  DET                   True       der
Kauf                 NOUN                  False      Kauf
eines                DET                   True       ein
österreichischen     ADJ        MISC       False      österreichisch
Startups             NOUN                  False      Startup
um                   ADP                   True       um
6                    NUM                   False      6
Mio.                 NOUN                  False      Mio.
Euro                 NOUN                  False      Euro
.                    PUNCT                 False      --
```

##### Stoppwörter entfernen

Vieler Wörter jeder Sprache haben eine geringen Einfluss auf die Aussagekraft eines Textes. Diese Wörter werden als Stoppwörter bezeichnet. Im Normalfall können KI-Modelle besser trainiert werden, wenn die Stoppwörter aus dem Text entfernt werden.

```python
import spacy
nlp = spacy.load("en_core_web_sm") ## de_core_news_sm

class NLP:
    def __init__(self, text):
        self.text = text

    def remove_stopwords(self):
        doc = nlp(self.text)
        self.text = " ".join([token for token in doc if not token.is_stop])
        return self.text

text = "How to develop a chatbot using Python"
text = NLP(text).remove_stopwords()
print(text) ## develop chatbot Python
```

##### Parts of Speech Tagging

Part-of-Speech-Tagging ist eine NLP-Technik, die jedem Wort in einem Text grammatikalische Kategorien zuweist, wie Nomen, Verben oder Adjektive. Diese Markierungen helfen bei der Analyse der Satzstruktur und unterstützen Aufgaben wie Textanalyse und Sentimentanalyse.

```python
import spacy
nlp = spacy.load("de_core_news_sm") ## en_core_web_sm
doc = nlp("Ich habe immer Hunger.")

for token in doc:
    print(f"{token.text:{20}}", f"{token.pos_:{10}}")
```

```python
// pos.output
Text                 POS
--------------------------------
Ich                  PRON
habe                 AUX
immer                ADV
Hunger               NOUN
.                    PUNCT
```

##### Named Entity Recognition

NER identifiziert und klassifiziert spezifische Entitäten wie Personen, Orte und Organisationen in einem Text. Diese Informationsextraktion ist entscheidend für Anwendungen wie Entitätenverknüpfung und Wissensgraphenaufbau.

```python
import spacy
nlp = spacy.load("de_core_news_sm") ## en_core_web_sm
doc = nlp("Marie Curie besuchte das Louvre-Museum in Paris.")

for token in doc:
    print(f"{token.text:{20}}", f"{token.ent_type_:{10}}")
```

```python
// ner.output
Text                 ENT_TYPE
--------------------------------
Marie                PER
Curie                PER
besuchte
das
Louvre-Museum        LOC
in
Paris                LOC
.
```

##### Stemming & Lemmatisierung

Stemming und Lemmatisierung sind Techniken zur Textnormalisierung in der NLP. Sie reduzieren Wörter auf ihre Basisformen (Stammwörter), was die Effizienz von Such- und Klassifikationsalgorithmen verbessert. Lemmatisierung hat hierbei den Vorteil gegenüber Stemming, ein Wörterbuch zu verwenden, das die Wortformen auf ihre Stammebene normalisiert.

```python
import spacy
nlp = spacy.load("de_core_news_sm") ## en_core_web_sm
doc = nlp("Michael Jordan erwägt den Kauf eines Autos.")

for token in doc:
    print(f"{token.text:{20}}", f"{token.lemma_:{20}}")
```

```python
// lemma.output
Text                 Lemma
------------------------------------------
Michael              Michael
Jordan               Jordan
erwägt               erwägen
den                  der
Kauf                 Kauf
eines                ein
Autos                Auto
.                    --
```

#### Feature Engineering

Machine Learning Algorithmen können mit Text nicht viel anfangen. Diese bevorzugen numerische Eingaben. Besteht nun die Notwendigkeit, Text zu verarbeiten, ist dessen Umwandlung in eine numerische Darstellungsform unumgänglich. Dieser Vorgang ist Teil des sogenannten `Feature Engineerings`. Unter Feature Engineering bei Texten versteht man den Prozess der Auswahl, Erstellung und Transformation von Merkmalen (Features).

Methoden zur Umwandlung von Text in numerische Darstellungen sind beispielsweise `One-Hot Encoding`, `N-Gramme` und `TF-IDF` (Term Frequency-Inverse Document Frequency). N-Gramme werden oft in leichtgewichtigen Shallow-Learning-Modellen wie Random Forest und logistischer Regression verwendet. TF-IDF hingegen finden eher Anwendung in Deep Learning Modellen.

##### One-Hot Encoding

One-Hot Encoding ist eine Methode, bei der jedes Wort in einem Text in eine binäre Vektorform umgewandelt wird. Jedes Wort wird durch eine Spalte repräsentiert, und wenn das Wort im Text vorkommt, wird die entsprechende Spalte auf 1 gesetzt, sonst auf 0.

```python
import spacy
from sklearn.feature_extraction.text import CountVectorizer
nlp = spacy.load('en_core_web_sm') ## de_core_news_sm

text="Jim loves NLP. He will learn NLP in two monts. NLP is Jim's future."

def get_spacy_tokens(text):
    doc = nlp(text)
    return [token.text for token in doc]
text_tokens = get_spacy_tokens(text)
vectorizer = CountVectorizer(tokenizer=get_spacy_tokens, lowercase=False, token_pattern=None)

vectorizer.fit(text_tokens)
print("Vocabulary:\n", vectorizer.vocabulary_)

vector = vectorizer.transform(text_tokens)
print("Encoded Document is:\n", vector.toarray())
```

```python
// one-hot.output
Vocabulary:
 {'Jim': 3, 'loves': 9, 'NLP': 4, '.': 1, 'He': 2, 'will': 12, 'learn': 8, 'in': 6, 'two': 11, 'monts': 10, 'is': 7, "'s": 0, 'future': 5}
Encoded Document is:
 [[0 0 0 1 0 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 1 0 0 0]
 [0 0 0 0 1 0 0 0 0 0 0 0 0]
 [0 1 0 0 0 0 0 0 0 0 0 0 0]
 [0 0 1 0 0 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0 0 0 1]
 [0 0 0 0 0 0 0 0 1 0 0 0 0]
 [0 0 0 0 1 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 1 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0 0 1 0]
 [0 0 0 0 0 0 0 0 0 0 1 0 0]
 [0 1 0 0 0 0 0 0 0 0 0 0 0]
 [0 0 0 0 1 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 1 0 0 0 0 0]
 [0 0 0 1 0 0 0 0 0 0 0 0 0]
 [1 0 0 0 0 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 1 0 0 0 0 0 0 0]
 [0 1 0 0 0 0 0 0 0 0 0 0 0]]
```

###### mit Pandas

Mittels der verwirrend benannten Methode `get_dummies()` kann man One-Hot Encoding auch mit Pandas durchführen.

```txt
// products.csv
produkt_id,kategorie
1,Elektronik
2,Kleidung
3,Bücher
4,Elektronik
5,Elektronik
6,Bücher
7,Kleidung
8,Bücher
9,Elektronik
10,Kleidung
11,Bücher
12,Elektronik
13,Bücher
14,Elektronik
15,Kleidung
16,Kleidung
```

```python
import pandas as pd
df = pd.read_csv('products.csv')
df = pd.get_dummies(df, columns=["kategorie"], dtype=int)
df.columns = map(str.lower, df.columns)
print(df)
```

```python
// one-hot_pandas.output
    produkt_id  kategorie_bücher  kategorie_elektronik  kategorie_kleidung
0            1                 0                     1                   0
1            2                 0                     0                   1
2            3                 1                     0                   0
3            4                 0                     1                   0
4            5                 0                     1                   0
5            6                 1                     0                   0
6            7                 0                     0                   1
7            8                 1                     0                   0
8            9                 0                     1                   0
9           10                 0                     0                   1
10          11                 1                     0                   0
11          12                 0                     1                   0
12          13                 1                     0                   0
13          14                 0                     1                   0
14          15                 0                     0                   1
15          16                 0                     0                   1
```

##### Bag-of-words (BOW)

Die `Bag of Words` (BoW) ist eine häufig verwendete Methode in der Textverarbeitung und maschinellen Sprachverarbeitung. Ihr Ansatz ist darauf ausgerichtet, einen Text auf eine Menge von Wörtern zu reduzieren und die Häufigkeit jedes Worts im Text zu zählen, ohne dabei die Reihenfolge der Wörter zu berücksichtigen.

###### CountVectorizer

Mithilfe des `CountVectorizer` kann man ein Vokabular erstellen und die Wörter in einem Text in numerische Vektoren umwandeln.

```python
from sklearn.feature_extraction.text import CountVectorizer
```

```python
corpus = ["In a charming village, Max, Lisa, and Tim enjoyed life's joys with their pets: Rocky, the lively dog; Whiskers, Lisa's elegant cat; and Charlie, Tim's colorful parrot. Daily, they gathered at the village square, exploring the nearby forest, discovering vibrant birds, wildflowers, and a babbling stream.",
          "Grateful for adventures, Max, Lisa, and Tim, with Rocky, Whiskers, and Charlie, remained inseparable. Even on rainy days, the trio met indoors. Max brought tea, Lisa had cookies, and Tim shared apples. These gatherings were filled with laughter and camaraderie.",
          "In a quaint village, Max, Lisa, and Tim enjoyed life's joys with their pets: Rocky, the lively dog; Whiskers, Lisa's elegant cat; and Charlie, Tim's colorful parrot."]

```

Standardmäßig kann der `CountVectorizer` so verwendet werden:

```python
vectorizer = CountVectorizer()
vectorizer.fit(corpus)
print(vectorizer.get_feature_names_out())
## ['adventures' 'and' 'apples' 'at' 'babbling' 'birds' 'brought' 'camaraderie' 'cat' 'charlie' 'charming' 'colorful' 'cookies' 'daily' 'days' 'discovering' 'dog' 'elegant' 'enjoyed' 'even' 'exploring' 'filled' 'for' 'forest' 'gathered' 'gatherings' 'grateful' 'had' 'in' 'indoors' 'inseparable' 'joys' 'laughter' 'life' 'lisa' 'lively' 'max' 'met' 'nearby' 'on' 'parrot' 'pets' 'quaint' 'rainy' 'remained' 'rocky' 'shared' 'square' 'stream' 'tea' 'the' 'their' 'these' 'they' 'tim' 'trio' 'vibrant' 'village' 'were' 'whiskers' 'wildflowers' 'with']
```

Dabei werden einbuchstabige Wörter wie `a`, `I` oder Zahlen ignoriert, was mittels `token_pattern` geändert werden kann.

```python
vectorizer = CountVectorizer(token_pattern=u'(?u)\\b\\w+\\b')
vectorizer.fit(corpus)
print(vectorizer.get_feature_names_out())
## ['a' 'adventures' 'and' 'apples' 'at' 'babbling' 'birds' 'brought' 'camaraderie' 'cat' 'charlie' 'charming' 'colorful' 'cookies' 'daily' 'days' 'discovering' 'dog' 'elegant' 'enjoyed' 'even' 'exploring' 'filled' 'for' 'forest' 'gathered' 'gatherings' 'grateful' 'had' 'in' 'indoors' 'inseparable' 'joys' 'laughter' 'life' 'lisa' 'lively' 'max' 'met' 'nearby' 'on' 'parrot' 'pets' 'quaint' 'rainy' 'remained' 'rocky' 's' 'shared' 'square' 'stream' 'tea' 'the' 'their' 'these' 'they' 'tim' 'trio' 'vibrant' 'village' 'were' 'whiskers' 'wildflowers' 'with']
```

Wenn gewisse Wörter gefiltert werden sollen, kann man dies mit `stop_words` tun.

```python
vectorizer = CountVectorizer(token_pattern=u'(?u)\\b\\w+\\b',
                             stop_words=['a','and','at','for','had','in','on','the','s','were','with'])
vectorizer.fit(corpus)
print(vectorizer.get_feature_names_out())
## ['adventures' 'apples' 'babbling' 'birds' 'brought' 'camaraderie' 'cat' 'charlie' 'charming' 'colorful' 'cookies' 'daily' 'days' 'discovering' 'dog' 'elegant' 'enjoyed' 'even' 'exploring' 'filled' 'forest' 'gathered' 'gatherings' 'grateful' 'indoors' 'inseparable' 'joys' 'laughter' 'life' 'lisa' 'lively' 'max' 'met' 'nearby' 'parrot' 'pets' 'quaint' 'rainy' 'remained' 'rocky' 'shared' 'square' 'stream' 'tea' 'their' 'these' 'they' 'tim' 'trio' 'vibrant' 'village' 'whiskers' 'wildflowers']
```

Jedes Vokabel enthält hier nur ein Wort, was bedeutet, dass beispielsweise `max lisa tim` nicht gefunden werden kann. Will man dieses Verhalten beeinflussen, kann man mittels `ngram_range` die minimale und maximale Wortanzahl festlegen.

```python
vectorizer = CountVectorizer(token_pattern=u'(?u)\\b\\w+\\b',
                             stop_words=['a','and','at','for','had','in','on','the','s','were','with'],
                             ngram_range=(1,3))
vectorizer.fit(corpus)
print(vectorizer.get_feature_names_out())
## ['adventures' 'adventures max' 'adventures max lisa' 'apples' 'apples these' 'apples these gatherings' 'babbling' 'babbling stream' 'birds' 'birds wildflowers' 'birds wildflowers babbling' 'brought' 'brought tea' 'brought tea lisa' 'camaraderie' 'cat' 'cat charlie' 'cat charlie tim' 'charlie' 'charlie remained' 'charlie remained inseparable' 'charlie tim' 'charlie tim colorful' 'charming' 'charming village' 'charming village max' 'colorful' 'colorful parrot' 'colorful parrot daily' 'cookies' 'cookies tim' 'cookies tim shared' 'daily' 'daily they' 'daily they gathered' 'days' 'days trio' 'days trio met' 'discovering' 'discovering vibrant' 'discovering vibrant birds' 'dog' 'dog whiskers' 'dog whiskers lisa' 'elegant' 'elegant cat' 'elegant cat charlie' 'enjoyed' 'enjoyed life' 'enjoyed life joys' 'even' 'even rainy' 'even rainy days' 'exploring' 'exploring nearby' 'exploring nearby forest' 'filled' 'filled laughter' 'filled laughter camaraderie' 'forest' 'forest discovering' 'forest discovering vibrant' 'gathered' 'gathered village' 'gathered village square' 'gatherings' 'gatherings filled' 'gatherings filled laughter' 'grateful' 'grateful adventures' 'grateful adventures max' 'indoors' 'indoors max' 'indoors max brought' 'inseparable' 'inseparable even' 'inseparable even rainy' 'joys' 'joys their' 'joys their pets' 'laughter' 'laughter camaraderie' 'life' 'life joys' 'life joys their' 'lisa' 'lisa cookies' 'lisa cookies tim' 'lisa elegant' 'lisa elegant cat' 'lisa tim' 'lisa tim enjoyed' 'lisa tim rocky' 'lively' 'lively dog' 'lively dog whiskers' 'max' 'max brought' 'max brought tea' 'max lisa' 'max lisa tim' 'met' 'met indoors' 'met indoors max' 'nearby' 'nearby forest' 'nearby forest discovering' 'parrot' 'parrot daily' 'parrot daily they' 'pets' 'pets rocky' 'pets rocky lively' 'quaint' 'quaint village' 'quaint village max' 'rainy' 'rainy days' 'rainy days trio' 'remained' 'remained inseparable' 'remained inseparable even' 'rocky' 'rocky lively' 'rocky lively dog' 'rocky whiskers' 'rocky whiskers charlie' 'shared' 'shared apples' 'shared apples these' 'square' 'square exploring' 'square exploring nearby' 'stream' 'tea' 'tea lisa' 'tea lisa cookies' 'their' 'their pets' 'their pets rocky' 'these' 'these gatherings' 'these gatherings filled' 'they' 'they gathered' 'they gathered village' 'tim' 'tim colorful' 'tim colorful parrot' 'tim enjoyed' 'tim enjoyed life' 'tim rocky' 'tim rocky whiskers' 'tim shared' 'tim shared apples' 'trio' 'trio met' 'trio met indoors' 'vibrant' 'vibrant birds' 'vibrant birds wildflowers' 'village' 'village max' 'village max lisa' 'village square' 'village square exploring' 'whiskers' 'whiskers charlie' 'whiskers charlie remained' 'whiskers lisa' 'whiskers lisa elegant' 'wildflowers' 'wildflowers babbling' 'wildflowers babbling stream']
```

Will man das Vokabular auf bestimmte Vokabeln begrenzen, kann man dies mit `vocabulary` tun.

```python
vectorizer = CountVectorizer(token_pattern=u'(?u)\\b\\w+\\b',
                             stop_words=['a','and','at','for','had','in','on','the','s','were','with'],
                             ngram_range=(1,4),
                             vocabulary=['max lisa tim'])
vectorizer.fit(corpus)
print(vectorizer.get_feature_names_out())
## ['max lisa tim']
```

Sobald man mit den Features zufrieden ist, kann man sich das Vokabular anzeigen lassen. Dieses ist ein Dictionary, welches jedes Wort einer Zahl zuweist, damit beim Machine Learning Prozess besser damit gearbeitet werden kann. Computer verstehen Nummern besser als Wörter.

```python
print(vectorizer.vocabulary_)
## {'charming': 8, 'village': 50, 'max': 31, 'lisa': 29, 'tim': 47, 'enjoyed': 16, 'life': 28, 'joys': 26, 'their': 44, 'pets': 35, 'rocky': 39, 'lively': 30, 'dog': 14, 'whiskers': 51, 'elegant': 15, 'cat': 6, 'charlie': 7, 'colorful': 9, 'parrot': 34, 'daily': 11, 'they': 46, 'gathered': 21, 'square': 41, 'exploring': 18, 'nearby': 33, 'forest': 20, 'discovering': 13, 'vibrant': 49, 'birds': 3, 'wildflowers': 52, 'babbling': 2, 'stream': 42, 'grateful': 23, 'adventures': 0, 'remained': 38, 'inseparable': 25, 'even': 17, 'rainy': 37, 'days': 12, 'trio': 48, 'met': 32, 'indoors': 24, 'brought': 4, 'tea': 43, 'cookies': 10, 'shared': 40, 'apples': 1, 'these': 45, 'gatherings': 22, 'filled': 19, 'laughter': 27, 'camaraderie': 5, 'quaint': 36}
```

Nun kann man die Features mittels `.transform()` in einem Nummern-Matrix umwandeln. Diese sagt aus, welche Vokabeln in den drei Sätzen von `corpus` vorkommen. Beispielsweise kommt im ersten Satz das Wort `charming` vor, weswegen bei Index 8 die Zahl 1 steht (grün markiert). Kommt ein Wort öfter vor, steht die entsprechende Anzahl an der Stelle. Hierbei ist das Wort `lisa` (Index 29) rot markiert, da Lisa im dritten String zweimal vorkommt.

```python ins="‎1" del="‎2"
vector = vectorizer.transform(corpus)
print(vector.shape) ## (3, 53)
print(vector.toarray())
## [
## [0 0 1 1 0 0 1 1 ‎1 1 0 1 0 1 1 1 1 0 1 0 1 1 0 0 0 0 1 0 1 2 1 1 0 1 1 1 0 0 0 1 0 1 1 0 1 0 1 2 0 1 2 1 1]
## [1 1 0 0 1 1 0 1 0 0 1 0 1 0 0 0 0 1 0 1 0 0 1 1 1 1 0 1 0 2 0 2 1 0 0 0 0 1 1 1 1 0 0 1 0 1 0 2 1 0 0 1 0]
## [0 0 0 0 0 0 1 1 0 1 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0 1 0 1 ‎2 1 1 0 0 1 1 1 0 0 1 0 0 0 0 1 0 0 2 0 0 1 1 0]
## ]
```

:::tip[Aha]
Falls Sie sich fragen, woher die Zahl `53` bei der Shape kommt: Es gibt 53 unterschiedliche Wörter in den Sätzen von `corpus`. Zumindest hat der CountVectorizer die Sätze so tokenisiert. Der Vectorizer verfügt somit über ein Vokabular von 53 Wörtern.
:::

:::note
Man kann mithilfe der Methode `fit_transform()` die einzelnen Schritte einfach zusammenfassen und gleichzeitig ein Vokabular erlernen und den Text in eine `Bag-of-Words`-Darstellung bringen.

```python
vectorizer.fit_transform(["Ich bin cool!"])
vectorizer.get_feature_names_out()
## array(['bin', 'cool', 'ich'], dtype=object)
```

:::

Mit dem `CountVectorizer` kann man auch die Features in einem Pandas DataFrame anzeigen lassen.

```python
import pandas as pd
pd.DataFrame(vector.toarray(), columns=vectorizer.get_feature_names_out())
```

![CountVectorizer Pandas - Output](/images/artificial_intelligence/count_vectorizer_pandas_output.png)

###### LabelEncoder

Ein `LabelEncoder` nummeriert die verschiedenen Wörter in einem Vokabular. Diese Wörter werden dann in einem Array zusammengefasst.

```python
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
labels = le.fit_transform(['Muffin', 'Donat', 'Donat', 'Donat', 'Muffin', 'Muffin', 'Donat', 'Muffin', 'Donat', 'Muffin'])
print(labels) ## [1 0 0 0 1 1 0 1 0 1]
```

#### Modeling
