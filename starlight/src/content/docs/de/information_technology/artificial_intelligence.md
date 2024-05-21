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

#### Variablen

In Python können verschiedene Datentypen für die Speicherung von Informationen verwendet werden.

```python
## Booleans repräsentieren Wahrheitswerte, die entweder True (wahr) oder False (falsch) sind.
im_cool = True  ## oder False

## Strings sind Zeichenketten, die Text repräsentieren.
name = "trueberryless"

## Integers sind ganze Zahlen ohne Dezimalstellen.
age = 38

## Floats sind Zahlen mit Dezimalstellen.
book_price = 15.80

## Listen sind geordnete Sammlungen von Elementen.
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(numbers[2])  ## Gibt das dritte Element der Liste aus, in diesem Fall 3.

## Dictionaries sind Sammlungen von Schlüssel-Wert-Paaren.
person = {
    "name": name,  ## Der Schlüssel "name" hat den Wert "trueberryless".
    "age": age  ## Der Schlüssel "age" hat den Wert 38.
}
person["favourite_numbers"] = numbers
print(person["name"])  ## Gibt den Wert des Schlüssels "name" im Dictionary aus.
```

#### Ablaufsteuerung

Die Ablaufsteuerung ermöglicht die Kontrolle über den Programmfluss.

```python
## Die if-Anweisung ermöglicht die Ausführung von Code basierend auf einer Bedingung.
if False:
    print("Never gonna give you up")

## Die elif-Anweisung ermöglicht das Überprüfen weiterer Bedingungen.
if 1 > 2:
    print("1 is greater than 2")
elif 2 > 1:
    print("1 is not greater than 2")
else:
    print("1 is equal to 2")

## Die for-Schleife wird verwendet, um über eine Sequenz von Elementen zu iterieren.
for i in range(1, 100):
    print(i)

## Die for-Schleife kann auch über Elemente einer Liste iterieren.
for number in numbers:
    print(number)

## Die for-Schleife kann auch über Schlüssel-Wert-Paare eines Dictionaries iterieren.
for key, value in person.items():
    print("My %s is %s" % (key, value))  ## Gibt formatierten Text aus.

## Die while-Schleife wird wiederholt, solange eine Bedingung wahr ist.
while age < 66:
    print("You are still young")
    age += 1
```

#### Klassen

Klassen ermöglichen die Definition von benutzerdefinierten Datentypen (Eigenschaften realer Objekte) und Methoden (Verhalten realer Objekte).

```python
## Eine grundlegende Klasse "Vehicle" mit einem Konstruktor und Getter/Setter-Methoden.
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

## Die Klasse "Car" erbt von "Vehicle" und ruft den Konstruktor der Elternklasse auf.
class Car(Vehicle):
    def __init__(self, number_of_wheels, maximum_velocity):
        super().__init__(number_of_wheels, maximum_velocity)

## Die Klasse "SpaceShip" erbt ebenfalls von "Vehicle" und hat keine eigenen Änderungen.
class SpaceShip(Vehicle):
    pass

## Ein Objekt der Klasse "Car" wird erstellt.
tesla_model_s = Car(4, 300)
```

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

-   **Skalar** : Ein einzelner Wert, zum Beispiel eine Zahl $a=3$ (0 Dimensionen).
-   **Vektor** : Eine eindimensionale Sammlung von Werten, zum Beispiel $\mathbf{v} = [1, 2, 3]$.
-   **Matrix** : Eine zweidimensionale Sammlung von Werten, zum Beispiel
    $\mathbf{M} = \begin{bmatrix}
    1 & 2 \\
    3 & 4
    \end{bmatrix}$.
-   **Tensore** : Eine mehrdimensionale Sammlung von Werten (drei oder mehr Dimensionen).

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
array3 = np.arange(10)
print("Array aus einem Bereich:\n", array3)

# Array mit gleichmäßig verteilten Werten
array4 = np.linspace(0, 1, 5)
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

#### Theorie

Pandas führt zwei grundlegende Datenstrukturen ein: Dataframes und Series. Ein Dataframe kann als eine zweidimensionale Datenstruktur betrachtet werden, die in Form einer Tabelle organisiert ist. Diese Tabelle besteht aus Zeilen und Spalten, wobei jede Spalte einen bestimmten Datentyp repräsentiert. Einzelne Spalten in einem Dataframe werden als Series bezeichnet. Series hingegen kann als eindimensionales Array oder eine Liste betrachtet werden und enthält Daten eines bestimmten Datentyps.

![Series and Dataframe](/images/artificial_intelligence/series-and-dataframe.png)

##### Dataframe

Ein Dataframe ist die Hauptdatenstruktur in Pandas und kann als eine zweidimensionale, tabellenähnliche Datenstruktur betrachtet werden. Es organisiert Daten in Zeilen und Spalten, wobei jede Spalte eine Series darstellt. Dataframes sind äußerst vielseitig und ermöglichen die effiziente Verarbeitung und Analyse von strukturierten Daten. Sie können aus verschiedenen Datentypen bestehen und erleichtern den Zugriff, die Filterung und die Transformation von Daten. Dataframes werden häufig für die Darstellung von Tabellen in CSV-Dateien, Excel-Tabellen oder SQL-Abfragen verwendet. Die Operationen auf Dataframes können sowohl auf Zeilen als auch auf Spalten angewendet werden, was eine umfassende Datenmanipulation ermöglicht.

##### Series

Eine Series ist eine grundlegende Datenstruktur in Pandas und kann als eindimensionales Array oder Liste betrachtet werden. Jede Spalte in einem Dataframe ist eine Series. Series können Daten unterschiedlichen Datentyps enthalten, einschließlich numerischer Werte, Zeichenketten oder Zeitstempel. Sie ermöglichen den Zugriff auf Daten durch einen Index und unterstützen zahlreiche Funktionen zur Datenmanipulation. Durch die Verwendung von Series können bestimmte Datenpunkte in einem Dataframe isoliert und spezifische Operationen auf einzelnen Spalten durchgeführt werden. Dies macht Series zu einem wichtigen Baustein für die Arbeit mit strukturierten Daten in Pandas.

#### Code

##### Dataframe erstellen

Man kann ein Dataframe auf mehrere Arten erstellen:

-   aus einem Dictionary

    ```python
    data = {
        'apples': [3, 2, 0, 1],
        'oranges': [0, 3, 7, 2]
    }
    ```

    ```python
    purchases = pd.DataFrame(data)
    ```

-   aus einer CSV-Datei

    ```csv
    // purchases.csv
    ,apples,oranges
    June,3,0
    Robert,2,3
    Lily,0,7
    David,1,2
    ```

    ```python
    df = pd.read_csv('purchases.csv', index_col=0)
    ```

-   aus einer JSON-Datei

    ```json
    // purchases.json
    {
        "apples": { "June": 3, "Robert": 2, "Lily": 0, "David": 1 },
        "oranges": { "June": 0, "Robert": 3, "Lily": 7, "David": 2 }
    }
    ```

    ```python
    df = pd.read_json('purchases.json')
    ```

-   oder auch einer SQL-Datenbank

    ```bash title="Installing sqlite3"
    pip install pysqlite3
    ```

    ```python
    import sqlite3
    con = sqlite3.connect("database.db")

    df = pd.read_sql_query("SELECT * FROM purchases", con)
    ```

##### Daten in Datei persistieren

Man kann ein Dataframe genauso wieder in eine Datei schreiben, wie es aus einer Datei gelesen wurde.

-   in eine CSV-Datei

    ```python
    df.to_csv('new_purchases.csv')
    ```

-   in eine JSON-Datei

    ```python
    df.to_json('new_purchases.json')
    ```

-   mittels SQL

    ```python
    df.to_sql('new_purchases.sql', con)
    ```

##### Operation mit Dataframes

###### Ausgaben

Ein logisches Verständnis über die Konstellation der Daten zu haben ist besonders wichtig, wenn man mit Pandas arbeitet. Die Ausgabe von Dataframes kann auf verschiedene Arten erfolgen.

```python
df.head(5) ## fünf ersten Zeilen ausgeben
df.tail(3) ## letzten drei Zeilen ausgeben
```

Zeilen und Spalten spezifisch ausgeben, jeweils mit Index und Namen:

```python
df['oranges'] ## Series 'oranges' ausgeben
df[['oranges']] ## 'oranges' als Dataframe ausgeben
df[['apples', 'oranges']] ## Dataframe ausgeben

df.iloc[11] ## Zeile mit Index 11 ausgeben
df.iloc[11:13] ## Zeilen 11 bis 13 ausgeben
df.loc['December'] ## Zeile 'December' ausgeben
df.loc['October':'December'] ## Zeilen von 'October' bis 'December' ausgeben
```

Metadaten der Tabelle herausfinden:

```python
df.shape ## Anzahl der Zeilen und Spalten (Beispiel: (1000, 11))
df.columns ## Spaltennamen
df.info()
```

```txt
// df.info_output
<class 'pandas.core.frame.DataFrame'>
Index: 1000 entries, Guardians of the Galaxy to Nine Lives
Data columns (total 11 columns):
 ##   Column              Non-Null Count  Dtype
---  ------              --------------  -----
 0   Rank                1000 non-null   int64
 1   Genre               1000 non-null   object
 2   Description         1000 non-null   object
 3   Director            1000 non-null   object
 4   Actors              1000 non-null   object
 5   Year                1000 non-null   int64
 6   Runtime (Minutes)   1000 non-null   int64
 7   Rating              1000 non-null   float64
 8   Votes               1000 non-null   int64
 9   Revenue (Millions)  872 non-null    float64
 10  Metascore           936 non-null    float64
dtypes: float64(3), int64(4), object(4)
memory usage: 93.8+ KB
```

Nullwerte herausfinden:

```python
df.isnull() ## Gibt ein Dataframe zurück, wo alle Zellen True sind, falls die Werte null sind
df.isnull().sum() ## Gibt die Anzahl der Nullwerte in jeder Series zurück
df.isnull().sum().sum() ## Gibt die insgesamte Anzahl der Nullwerte zurück
```

Statistiken eines Dataframes herausfinden (Anzahl, Mittelwert, Standardabweichung, Minimum, Maximum, etc.).

```python
df.describe()
df.corr() ## Korrelationen zwischen den Spalten
```

```python
df['apples'].value_counts() ## Gruppierte Werte und Anzahl der Vorkommen
```

###### Datenmanipulationen

Bei den meisten Veränderungen von Daten gibt es einen Parameter namens `inplace`, welcher angibt, ob die Änderungen direkt auf das Dataframe angewendet werden sollen oder ob die Änderungen in einem neuen Dataframe gespeichert werden sollen. Standardmäßig ist `inplace` auf `False` gesetzt, was bedeutet, dass die Änderungen in einem neuen Dataframe gespeichert werden.

Die Methode `append()` wird verwendet, um zwei Dataframes (df und df2) zu verketten. Dies führt zu einem neuen Dataframe df3, das alle Zeilen von df und df2 enthält.

```python
df3 = df.append(df2)
```

Die Methode `rename()` wird verwendet, um bestimmte Spalten im Dataframe df umzubenennen, indem ein Dictionary mit den alten und neuen Spaltennamen bereitgestellt wird.

```python
df.columns = ['Amount of Fruits (Apple)', 'Amount of Fruits (Orange)']
```

```python
df.rename(columns={
    'Amount of Fruits (Apple)': 'apple_amount',
    'Amount of Fruits (Orange)': 'orange_amount'
}, inplace=True)
```

Aufgrund der Aneinanderreihung solcher Methoden können Spaltennamen auch automatisch bearbeitet werden. Die Methode `replace()` wird verwendet, um bestimmte Werte in einer Spalte zu ersetzen.

```python
df.columns = [col.lower().replace("(", "").replace(")", "").replace(" ", "_") for col in df]
```

Mittels Methode `drop()` können spezifische Spalten auch gelöscht werden. Hierbei muss jedoch immer der Verlust der Daten vorher bedacht werden.

```python
df.drop(columns= { "Unnamed: 1", "Unnamed: 2", "Unnamed: 3" }, inplace=True)
```

Der Codeblock zeigt verschiedene Methoden zum Entfernen von Duplikaten aus einem Pandas-Dataframe. Die Funktion `drop_duplicates()` wird verwendet, um Duplikate zu entfernen.

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
    alt="Data Transfer"
    class="light-only"
/>
<img
    src="/images/artificial_intelligence/machine_learning_concept_dm.png"
    alt="Data Transfer"
    class="dark-only"
/>

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

#### Deep Learning

Eine weiter Unterteilung im maschinellen Lernen ist das **Deep Learning** (DL). Die Besonderheit dieser Art von maschinellen Lernen ist die Aneinanderreihung von mehreren Schichten, welche die Daten von vorne nach hinten verarbeiten und Parameter in der `Backwards-Propagation` optimieren. Dadurch kann das Modell sehr komplexe Muster und Beziehungen erkennen. Allgemein kann man sagen, dass alle **neuronalen Netzwerke** (Neural Networks) in die Kategorie „Deep Learning“ fallen.

Das Gegenteil des „Deep Learning“ (tiefen Lernens) ist das „Shallow Learning“ (flaches Lernen), welches alle anderen Algorithmen des maschinellen Lernens umfasst, wie zum Beispiel die `Support Vector Machine` (SVM), den `Random Forest Classifier` (RFC) oder ganz allgemein die verschiedenen mathematischen Methoden der `Regression`.

:::danger[Achtung]
Deep Learning bedeutet allerdings nicht zwangsmäßig, dass das Modell anschließend besser als Algorithmen des flachen Lernens sein muss. Deep Learning klassifiziert nur, dass das Modell aus mehreren Schichten (Layer) besteht.
:::

#### Umsetzung von KI-Projekten

Der Prozess des maschinellen Lernens ist im folgenden Diagramm dargestellt:

<img
    src="/images/artificial_intelligence/machine_learning_process_lm.png"
    alt="Data Transfer"
    class="light-only"
/>
<img
    src="/images/artificial_intelligence/machine_learning_process_dm.png"
    alt="Data Transfer"
    class="dark-only"
/>

Wie man sehen kann, beginnt dieser Prozess mit dem **Aggregieren** der Daten und **Bereinigung** dieser. Auch wenn man es nicht glaubt, machen diese Teilaufgaben **ca. 50-70%** des Arbeitsaufwandes vom gesamten Prozess aus. Hierbei muss besonders auf den Datenschutz der Kunden, die Datenqualität und die Datensicherheit geachtet werden. Die Daten selbst können im Internet gratis oder kostenlos gefunden werden. Saubere Daten sind Gold wert!

Der eigentliche interessante Teil beginnt dann beim Aufbereitung und Trainieren des Modells mit den Daten und dem anschließenden Testen. Hierbei gibt es einige Methoden der deskriptiven Statistik, um die Qualität des Modells zu beurteilen. Sobald der Kunde mit dieser zufrieden ist, kann das Modell in der Produktionsumgebung eingesetzt werden.

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

##### Tensorflow

##### PyTorch

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
