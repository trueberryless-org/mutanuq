---
title: Probability
description: "Random experiments, Laplace probability, axioms, addition and multiplication rules, conditional probability, independence, Bayes' theorem, tree diagrams and combinatorics."
sidebar:
  order: 1
---

**Probability theory** assigns to random events a number between $0$ and $1$ that states how certain it is that they occur. It lets you estimate, for example, how often a data packet is lost, how reliable a redundant system is or how meaningful a positive test result is.

## Basic terms

| Term | Meaning | Example (rolling a die) |
| ---- | ------- | ----------------------- |
| random experiment | process with several possible outcomes that can be repeated any number of times and whose outcome cannot be predicted | rolling a die once |
| outcome $\omega$ | a single possible result | "4" |
| sample space $\Omega$ | set of all outcomes | $\Omega = \{1, 2, 3, 4, 5, 6\}$ |
| event $E$ | subset of the sample space | "even number": $E = \{2, 4, 6\}$ |
| complementary event $\overline{E}$ | all outcomes not in $E$ | $\overline{E} = \{1, 3, 5\}$ |
| certain event | $\Omega$ itself, always occurs | "score between 1 and 6" |
| impossible event | $\emptyset$, never occurs | "score 7" |

Events are combined with the [set operations](/en/mathematics/algebra/sets-and-number-ranges/#set-operations): $A \cup B$ ("$A$ or $B$"), $A \cap B$ ("$A$ and $B$"). Two events are called **mutually exclusive** (disjoint) if they cannot occur at the same time, i.e. $A \cap B = \emptyset$.

## Concepts of probability

### Laplace probability

If all outcomes of a random experiment are **equally likely** (Laplace experiment, e.g. a fair die, a coin, drawing from well-shuffled cards):

$$
P(E) = \frac{\text{number of favourable outcomes}}{\text{number of possible outcomes}} = \frac{\lvert E \rvert}{\lvert \Omega \rvert}
$$

:::tip[Example]
Rolling two dice gives $6 \cdot 6 = 36$ equally likely outcomes. A total of 10 is obtained with $(4, 6)$, $(5, 5)$ and $(6, 4)$:

$$
P(\text{total } 10) = \frac{3}{36} = \frac{1}{12} \approx 8.3\,\%
$$
:::

### Relative frequency and statistical probability

If a random experiment is repeated very often, the relative frequency of an event settles around a fixed value (**law of large numbers**). This value is used as an estimate of the probability when the outcomes are not equally likely, for example for the failure rate of a hard disk.

### Kolmogorov axioms

Every probability satisfies three basic rules:

1. $P(E) \geq 0$ for every event $E$.
2. $P(\Omega) = 1$.
3. For mutually exclusive events, $P(A \cup B) = P(A) + P(B)$.

All other rules follow from these, in particular $0 \leq P(E) \leq 1$ and $P(\emptyset) = 0$.

## Rules of probability

### Complementary event

$$
P(\overline{E}) = 1 - P(E)
$$

This rule is especially useful for "at least once" questions: the complementary event "not even once" is usually much easier to calculate.

:::tip[Example: Birthday problem]
What is the probability that in a class of 23 people at least two share a birthday (365 equally likely days)? Complementary event: all birthdays are different.

$$
P(\text{all different}) = \frac{365}{365} \cdot \frac{364}{365} \cdot \ldots \cdot \frac{343}{365} \approx 0.493 \qquad P(\text{at least two equal}) \approx 1 - 0.493 = 0.507
$$

With only 23 people it is already more likely than not. The same principle is behind collisions of hash functions.
:::

### Addition rule

For any events:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

The intersection is subtracted because it would otherwise be counted twice. For mutually exclusive events, $P(A \cap B) = 0$.

:::tip[Example]
One card is drawn from 52 playing cards. $A$: "heart" ($13$ cards), $B$: "face card" (jack, queen, king; $12$ cards). $A \cap B$ are the three heart face cards:

$$
P(A \cup B) = \frac{13}{52} + \frac{12}{52} - \frac{3}{52} = \frac{22}{52} \approx 42.3\,\%
$$
:::

### Multiplication rule and conditional probability

The **conditional probability** $P(B \mid A)$ is the probability of $B$ given that $A$ has occurred:

$$
P(B \mid A) = \frac{P(A \cap B)}{P(A)} \qquad\Longleftrightarrow\qquad P(A \cap B) = P(A) \cdot P(B \mid A)
$$

The form on the right is called the **multiplication rule**.

### Independence

Two events are **independent** if the occurrence of one does not change the probability of the other, i.e. $P(B \mid A) = P(B)$. Then

$$
P(A \cap B) = P(A) \cdot P(B)
$$

:::tip[Example: Redundant systems]
A server fails on a given day with probability $0.02$. Two independently operating servers have both failed only if each one fails:

$$
P(\text{both fail}) = 0.02 \cdot 0.02 = 0.0004
$$

Availability rises from $98\,\%$ to $99.96\,\%$. In practice, failures are often not independent (shared power supply, the same software update), and then the real probability of failure is considerably higher.
:::

:::caution
Mutually exclusive and independent are different things. Mutually exclusive events with positive probability are in fact always **dependent**: if $A$ occurs, $B$ is impossible.
:::

## Tree diagrams

Multi-stage random experiments are represented with a **tree diagram**. Each branch is labelled with the (conditional) probability of that step. Two path rules apply:

- **Product rule:** the probability of a path is the product of the probabilities along the path.
- **Sum rule:** the probability of an event is the sum of the probabilities of all paths belonging to that event.

The probabilities of the branches leaving one node add up to $1$.

:::tip[Example: Drawing without replacement]
A box contains 10 chips, 3 of which are defective. Two chips are drawn without replacement. With $D$ = defective and $O$ = OK:

| Path | Probability |
| ---- | ----------- |
| $D, D$ | $\frac{3}{10} \cdot \frac{2}{9} = \frac{6}{90}$ |
| $D, O$ | $\frac{3}{10} \cdot \frac{7}{9} = \frac{21}{90}$ |
| $O, D$ | $\frac{7}{10} \cdot \frac{3}{9} = \frac{21}{90}$ |
| $O, O$ | $\frac{7}{10} \cdot \frac{6}{9} = \frac{42}{90}$ |

$P(\text{exactly one defective chip}) = \frac{21}{90} + \frac{21}{90} = \frac{42}{90} \approx 46.7\,\%$. Because the chips are not replaced, the probabilities change in the second stage.
:::

## Bayes' theorem

Often you know $P(B \mid A)$ but are interested in the reverse probability $P(A \mid B)$. **Bayes' theorem** reverses the condition:

$$
P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)} \qquad\text{with}\qquad P(B) = P(B \mid A) \cdot P(A) + P(B \mid \overline{A}) \cdot P(\overline{A})
$$

The formula for $P(B)$ is the **law of total probability**; in the tree diagram it is the sum of all paths leading to $B$.

:::tip[Example: Medical test]
A disease $K$ occurs in 1 % of the population. A test detects people with the disease with 99 % probability (**sensitivity**); for healthy people it is negative with 95 % probability (**specificity**), so falsely positive with 5 %. How likely is a person with a positive test actually ill?

$$
P(+) = \underbrace{0.99 \cdot 0.01}_{\text{ill, positive}} + \underbrace{0.05 \cdot 0.99}_{\text{healthy, positive}} = 0.0099 + 0.0495 = 0.0594
$$

$$
P(K \mid +) = \frac{0.0099}{0.0594} \approx 0.167 = 16.7\,\%
$$

Despite the apparently very accurate test, only about one in six people who test positive is ill. With 10,000 people: 100 are ill and 99 of them are detected. Of the 9,900 healthy people, however, 495 test falsely positive. The reason is the low **prevalence** (base rate) of the disease.
:::

The same principle applies to spam filters (naive Bayes classifier), intrusion detection systems and quality inspections: for rare events, even a small false alarm rate produces a large number of false hits.

## Combinatorics

For Laplace probabilities you often have to count large numbers of possibilities. Combinatorics provides the formulas. The two key questions are: **Does the order matter?** and **May an element occur more than once (with repetition)?**

### Fundamental counting principle

If a selection consists of $k$ steps with $n_1, n_2, \ldots, n_k$ options, there are $n_1 \cdot n_2 \cdot \ldots \cdot n_k$ possibilities in total. A menu with 3 starters, 4 main courses and 2 desserts gives $3 \cdot 4 \cdot 2 = 24$ combinations.

### Permutations

A **permutation** is an arrangement of all $n$ elements. For $n$ distinct elements there are

$$
n! = n \cdot (n - 1) \cdot \ldots \cdot 2 \cdot 1 \qquad (0! = 1)
$$

possibilities, so $5! = 120$ for 5 people in a row. If some elements are identical ($k_1$, $k_2$, … identical elements), divide by their rearrangements: $\frac{n!}{k_1! \cdot k_2! \cdot \ldots}$. The word "BANANA" has $\frac{6!}{3! \cdot 2! \cdot 1!} = 60$ different arrangements.

### Overview: choosing k out of n elements

| | order matters (variation) | order does not matter (combination) |
| --- | --- | --- |
| **without repetition** | $\dfrac{n!}{(n - k)!}$ | $\dbinom{n}{k} = \dfrac{n!}{k! \cdot (n - k)!}$ |
| **with repetition** | $n^k$ | $\dbinom{n + k - 1}{k}$ |

The **binomial coefficient** $\binom{n}{k}$ (read "n choose k") counts the $k$-element subsets of an $n$-element set. On calculators it is usually called `nCr`.

:::tip[Examples]
- **Variation without repetition:** in a competition with 10 teams there are $\;10 \cdot 9 \cdot 8 = \frac{10!}{7!} = 720$ possibilities for places 1 to 3.
- **Variation with repetition:** a four-digit PIN has $10^4 = 10{,}000$ possibilities. An 8-character password made of lower and upper case letters and digits (62 characters) has $62^8 \approx 2.18 \cdot 10^{14}$ possibilities.
- **Combination without repetition:** the Austrian lottery "6 out of 45" has $\binom{45}{6} = 8{,}145{,}060$ possible tickets. The probability of six correct numbers with one ticket is $\frac{1}{8\,145\,060} \approx 1.23 \cdot 10^{-7}$.
- **Combination with repetition:** three scoops of ice cream from 5 flavours (flavours may repeat, order irrelevant): $\binom{5 + 3 - 1}{3} = \binom{7}{3} = 35$ possibilities.
:::

:::tip[Example: Probability with combinatorics]
From the box of 10 chips, 3 of them defective, 4 chips are drawn without replacement. How likely is it that exactly one of them is defective?

$$
P = \frac{\binom{3}{1} \cdot \binom{7}{3}}{\binom{10}{4}} = \frac{3 \cdot 35}{210} = 0.5
$$

The numerator chooses one of the 3 defective chips and three of the 7 good ones, the denominator counts all ways to draw 4 out of 10. This distribution is called the **hypergeometric distribution**.
:::

## Further reading

- [Probability, mathe online (University of Vienna)](https://www.mathe-online.at/)
- [Joseph K. Blitzstein, Jessica Hwang: Introduction to Probability (freely available)](https://projects.iq.harvard.edu/stat110/home)
