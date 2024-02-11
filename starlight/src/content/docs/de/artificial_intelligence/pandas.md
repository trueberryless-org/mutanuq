---
title: Pandas
sidebar:
    order: 1
---

Pandas ist eine leistungsstarke und weit verbreitete Bibliothek für Datenanalyse und -manipulation in der Programmiersprache Python. Entwickelt auf Basis von NumPy bietet Pandas Datenstrukturen, die ideal für die Verarbeitung und Analyse von strukturierten Daten wie Tabellen oder CSV-Dateien geeignet sind. Diese Bibliothek erleichtert das Arbeiten mit großen Datensätzen und ermöglicht es, komplexe Operationen auf Daten schnell und effizient durchzuführen. Pandas wird in den Bereichen Datenwissenschaft, Finanzanalyse, Machine Learning und anderen datenintensiven Anwendungen eingesetzt. In dieser Einführung werden wir einen Blick auf die Schlüsselfunktionen und -konzepte von Pandas werfen, um ein Verständnis für die Vielseitigkeit dieser Bibliothek zu entwickeln.

```bash title="Installing pandas"
pip install pandas
```

```python
import pandas as pd
```

## Theorie

Pandas führt zwei grundlegende Datenstrukturen ein: Dataframes und Series. Ein Dataframe kann als eine zweidimensionale Datenstruktur betrachtet werden, die in Form einer Tabelle organisiert ist. Diese Tabelle besteht aus Zeilen und Spalten, wobei jede Spalte einen bestimmten Datentyp repräsentiert. Einzelne Spalten in einem Dataframe werden als Series bezeichnet. Series hingegen kann als eindimensionales Array oder eine Liste betrachtet werden und enthält Daten eines bestimmten Datentyps.

![Series and Dataframe](/src/assets/artificial_intelligence/series-and-dataframe.png)

### Dataframe

Ein Dataframe ist die Hauptdatenstruktur in Pandas und kann als eine zweidimensionale, tabellenähnliche Datenstruktur betrachtet werden. Es organisiert Daten in Zeilen und Spalten, wobei jede Spalte eine Series darstellt. Dataframes sind äußerst vielseitig und ermöglichen die effiziente Verarbeitung und Analyse von strukturierten Daten. Sie können aus verschiedenen Datentypen bestehen und erleichtern den Zugriff, die Filterung und die Transformation von Daten. Dataframes werden häufig für die Darstellung von Tabellen in CSV-Dateien, Excel-Tabellen oder SQL-Abfragen verwendet. Die Operationen auf Dataframes können sowohl auf Zeilen als auch auf Spalten angewendet werden, was eine umfassende Datenmanipulation ermöglicht.

### Series

Eine Series ist eine grundlegende Datenstruktur in Pandas und kann als eindimensionales Array oder Liste betrachtet werden. Jede Spalte in einem Dataframe ist eine Series. Series können Daten unterschiedlichen Datentyps enthalten, einschließlich numerischer Werte, Zeichenketten oder Zeitstempel. Sie ermöglichen den Zugriff auf Daten durch einen Index und unterstützen zahlreiche Funktionen zur Datenmanipulation. Durch die Verwendung von Series können bestimmte Datenpunkte in einem Dataframe isoliert und spezifische Operationen auf einzelnen Spalten durchgeführt werden. Dies macht Series zu einem wichtigen Baustein für die Arbeit mit strukturierten Daten in Pandas.

## Code

### Dataframe erstellen

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

### Daten in Datei persistieren

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

### Operation mit Dataframes

#### Ausgaben

Ein logisches Verständnis über die Konstellation der Daten zu haben ist besonders wichtig, wenn man mit Pandas arbeitet. Die Ausgabe von Dataframes kann auf verschiedene Arten erfolgen.

```python
df.head(5) # fünf ersten Zeilen ausgeben
df.tail(3) # letzten drei Zeilen ausgeben
```

Zeilen und Spalten spezifisch ausgeben, jeweils mit Index und Namen:

```python
df['oranges'] # Series 'oranges' ausgeben
df[['oranges']] # 'oranges' als Dataframe ausgeben
df[['apples', 'oranges']] # Dataframe ausgeben

df.iloc[11] # Zeile mit Index 11 ausgeben
df.iloc[11:13] # Zeilen 11 bis 13 ausgeben
df.loc['December'] # Zeile 'December' ausgeben
df.loc['October':'December'] # Zeilen von 'October' bis 'December' ausgeben
```

Metadaten der Tabelle herausfinden:

```python
df.shape # Anzahl der Zeilen und Spalten (Beispiel: (1000, 11))
df.columns # Spaltennamen
df.info()
```

```txt
// df.info_output
<class 'pandas.core.frame.DataFrame'>
Index: 1000 entries, Guardians of the Galaxy to Nine Lives
Data columns (total 11 columns):
 #   Column              Non-Null Count  Dtype
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
df.isnull() # Gibt ein Dataframe zurück, wo alle Zellen True sind, falls die Werte null sind
df.isnull().sum() # Gibt die Anzahl der Nullwerte in jeder Series zurück
df.isnull().sum().sum() # Gibt die insgesamte Anzahl der Nullwerte zurück
```

Statistiken eines Dataframes herausfinden (Anzahl, Mittelwert, Standardabweichung, Minimum, Maximum, etc.).

```python
df.describe()
df.corr() # Korrelationen zwischen den Spalten
```

```python
df['apples'].value_counts() # Gruppierte Werte und Anzahl der Vorkommen
```

#### Datenmanipulationen

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

df.drop_duplicates(inplace=True, keep='first') # nur erste Duplikate behalten
df.drop_duplicates(inplace=True, keep='last') # nur letzte Duplikate behalten
df.drop_duplicates(inplace=True, keep='False') # alle Duplikate löschen
```

Die Methode `dropna()` wird verwendet, um Zeilen oder Spalten mit NaN-Werten zu entfernen, während `fillna()` genutzt wird, um fehlende Werte durch einen bestimmten Wert, wie den Mittelwert, zu ersetzen.

```python
df.dropna() # Löscht Zeilen, in denen alle Werte null sind
df.dropna(axis=1) # Löscht Spalten, in denen alle Werte null sind
df['apples'].fillna(df['apples'].mean(), inplace=True) # Füllt fehlende Werte mit dem Mittelwert der Spalte 'apples' aus
```
