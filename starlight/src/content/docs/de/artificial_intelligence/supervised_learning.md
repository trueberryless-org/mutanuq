---
title: Supervised Learning
sidebar:
    order: 3
---

Supervised Learning ist ein zentraler Bereich in der maschinellen Lernpraxis, der es ermöglicht, Modelle zu trainieren, um Muster und Beziehungen in Daten zu erkennen. Im Gegensatz zum unsupervised Learning, bei dem der Algorithmus versucht, selbständig Muster in den Daten zu identifizieren, erfolgt beim Supervised Learning das Training anhand von gelabelten Daten, die als Eingabe-Output-Paare vorliegen.

In diesem Kontext bezeichnet "gelabelte Daten" eine Menge von Eingabebeispielen, für die die zugehörigen Ausgaben bereits bekannt sind. Das Ziel besteht darin, ein Modell zu erstellen, das in der Lage ist, aus neuen, bisher ungesehenen Eingabebeispielen korrekte Vorhersagen oder Klassifikationen zu treffen.

Es gibt verschiedene Arten von Modellen im Bereich des Supervised Learning, die jeweils für spezifische Aufgaben und Datenstrukturen entwickelt wurden. Dazu gehören lineare Modelle wie die logistische Regression für binäre Klassifikation, Support Vector Machines für marginale Klassifikation, Ensemble-Methoden wie Random Forests zur Kombination mehrerer Modelle, Naive Bayes für probabilistische Klassifikation und neuronale Netzwerke für komplexe Mustererkennung.

Der Trainingsprozess besteht darin, das Modell mit den gelabelten Daten zu füttern und die Gewichtungen oder Parameter des Modells so anzupassen, dass es in der Lage ist, aus den gegebenen Eingaben genaue Vorhersagen zu machen. Das trainierte Modell kann dann auf neuen, nicht gelabelten Daten angewendet werden, um Vorhersagen zu treffen oder Muster zu identifizieren.

Supervised Learning findet in einer Vielzahl von Anwendungen Anwendung, darunter Spracherkennung, Bildklassifikation, medizinische Diagnose, Finanzprognosen und vieles mehr. Die Wahl des geeigneten Modells hängt von der Art der Daten und der spezifischen Aufgabe ab, die gelöst werden soll.

## Vorbereitung

:::note
Bei vielen Modellen wird davon ausgegangen, dass die Daten bereits aufbereitet vorliegen.
:::

### Train Test Split

In der Welt des maschinellen Lernens ist der Train-Test-Split ein entscheidender Schritt, um die Leistung von Modellen objektiv zu bewerten. Diese Methode ist von grundlegender Bedeutung, um sicherzustellen, dass ein Modell nicht nur die Trainingsdaten auswendig gelernt hat, sondern auch in der Lage ist, auf neuen, bisher ungesehenen Daten präzise Vorhersagen zu treffen.

```python

# X und y erstellen
# Kundenbewertungen (X)
X = [
    "Das Produkt ist wirklich großartig, ich bin sehr zufrieden!",
    "Leider entspricht das Produkt nicht meinen Erwartungen.",
    "Tolles Preis-Leistungs-Verhältnis.",
    "Ich bin neutral, es ist okay, aber nichts Besonderes.",
    "Schlechtestes Produkt, das ich je gekauft habe!"
]

# Dazugehörige Kategorien (y)
y = ["positiv", "negativ", "positiv", "neutral", "negativ"]

# DataFrame erstellen
import pandas as pd
df = pd.DataFrame({'Bewertung': X, 'Kategorie': y})

# Daten in X und y aufteilen
X = df['Bewertung']
y = df['Kategorie']

# Daten teilen für lernen und validieren
from sklearn.model_selection import train_test_split
X_train, X_valid, y_train, y_valid = train_test_split(X, y, test_size = .3, random_state = 12)

print("X_train:", X_train.shape) # X_train: (3,)
print("y_train:", y_train.shape) # y_train: (3,)
print("X_valid:", X_valid.shape) # X_valid: (2,)
print("y_valid:", y_valid.shape) # y_valid: (2,)
```

### Vektorisieren

Beim maschinellen Lernens wird die Vektorisierung der Daten als wichtiger Schritt betrachtet. Die Vektorisierung ist ein Prozess, bei dem die Daten in Form von Vektoren umgewandelt werden. In diesem Beispiel werden die Textdaten mittels [BoW](../python/#bag-of-words-bow) vektorisiert.

```python
from sklearn.feature_extraction.text import CountVectorizer
vectorizer = CountVectorizer()

vectorizer.fit(X)
print("Token Count:", len(vectorizer.get_feature_names_out()))
# <Anzahl unterschiedliche Wörter>

X_train_vectorized = vectorizer.transform(X_train)
print("X_train_vectorized:", X_train_vectorized.shape)
# X_train_vectorized: (<Anzahl Trainingsbeispiele>, <Anzahl unterschiedliche Wörter>)

print("Bag of Words\n", X_train_vectorized.toarray())
# [Beispieloutput:]
# Bag of Words
# [[0 0 0 ... 0 0 0]
# [0 0 0 ... 0 0 0]
# [0 0 0 ... 0 0 0]
# ...
# [0 0 0 ... 0 0 0]
# [0 0 0 ... 0 0 0]
# [0 0 0 ... 0 0 0]]
```

## Lineare Modelle

### Logistic Regression

### Support Vector Machines

## Ensemble-Methoden

### Random Forest Classifier

### Gradient Boosting Classifier

## Naive Bayes

Naive-Bayes-Modelle sind eine Klasse von probabilistischen Klassifikationsalgorithmen im Bereich des Supervised Learning. Sie basieren auf dem Bayes'schen Theorem und gehen von der naiven Annahme aus, dass die Merkmale eines Datenpunkts unabhängig voneinander sind, obwohl dies in der Realität oft nicht der Fall ist. Trotz ihrer Simplizität haben Naive-Bayes-Modelle sich als effektiv in vielen Anwendungen, insbesondere in der Textklassifikation, erwiesen. Diese Modelle sind schnell zu trainieren und zu implementieren, und sie bieten gute Leistung, wenn die Unabhängigkeitsannahme in der Praxis zumindest annähernd erfüllt ist.

### MultinomialNB

Multinomial Naive Bayes (MultinomialNB) ist eine Textklassifikationsmethode, die auf dem Naive-Bayes-Algorithmus basiert. Sie eignet sich besonders gut für Aufgaben wie Spam-Erkennung oder Themenzuordnung. Mit Fokus auf Wortzählungen in Texten ist MultinomialNB für seine Einfachheit und Effizienz bekannt.

```python
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

clf = MultinomialNB(alpha=0.2)
clf.fit(X_train, y_train)

predictions = clf.predict(X_valid)
print(accuracy_score(predictions, y_valid)) # [Beispieloutput:] 0.9772727272727273
```

## K-nearest Neighbors (KNN)

## Neuronale Netze

### Tensorflow

### PyTorch
