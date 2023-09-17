---
title: Timer
sidebar:
    order: 7
    badge:
        text: New
        variant: note
---

Der Timer ist ein sehr nützliches Instrument in der hardwarenahen Programmierung und eignet sich besonders gut für zeitbasierte Vorgänge, wie zum Beispiel:

-   Delay (Programmverzögerung) um bestimmte Anzahl an Sekunden
-   regelmäßig ADC triggern
-   DC-Motor drehzahlgesteuert zu betreiben

## Theorie

Der ATmega 328p hat 3 verschiedene Timer:

-   TC0: 8-bit
-   TC1: 16-bit
-   TC2: 8-bit; async

Jeder Timer verfügt über ein eigenes Zählregister, welches einmal pro Systemtakt hochzählt. Der 16-bit Timer verfügt hierbei über 2 Bytes, weshalb er seltener überläuft.

![Timer Überlauf](../../../assets/SYTI/timer/timer_ueberlauf.png)

:::note
Ersetzen Sie das x immer mit der jeweiligen Nummer des Timers, welchen Sie gerade verwenden (TC0: x = 0; TC1: x = 1; ...).

:::

Dabei hat jeder Timer 3 verschiedene Modi, welche in der Tabelle verglichen werden:

|     | Normal Mode                                                                                                                                                                                                                                                                                                                                          | CTC Mode                                                                                                                                                                                                                                                                                                              | PWM Mode                                                                                                                                                                                                           |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | Im normalen Modus zählt der Timer von `BOTTOM` bis `TOP` und wird bei `TOP` wieder auf `BOTTOM` gesetzt. Es gibt die Möglichkeit den Timer mit einem bestimmten Wert vorzuladen - also quasi den `BOTTOM`-Wert zu erhöhen -, indem man einfach `TCNTx` immer direkt nach dem Überlauf setzt, weshalb man die Zeitspanne bis zum Überlauf verringert. | Bei der Clear Timer on Compare Match setzt man anfangs einmal den `OCRxA`- bzw. den `OCRxB`-Wert. Erreicht der Timer (also `TCNTx`) diesen Wert, wird er gecleart, was bedeutet, dass `TCNTx` wieder auf 0 gesetzt wird. Die Timer unterstützen dabei zwei unabhängige Output Compare Register (`OCRxA` und `OCRxB`). | Mithilfe der Pulse Width Modulation kann man die Spannung auf einem bestimmten PIN variable verändern. Somit lässt sich z.B. ein DC-Motor steuern, welcher sich umso schneller dreht, je mehr Spannung er bekommt. |
| TC0 | `WGM00` == 0 <br/> `WGM01` == 0 <br/> `WGM02` == 0                                                                                                                                                                                                                                                                                                   | `WGM00` == 0 <br/> `WGM01` == 1 <br/> `WGM02` == 0                                                                                                                                                                                                                                                                    | 2 Arten <br/>[Table 14-8](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf#page=86)                                                                |
| TC1 | `WGM10` == 0 <br/> `WGM11` == 0 <br/> `WGM12` == 0 <br/> `WGM13` == 0                                                                                                                                                                                                                                                                                | `WGM10` == 0 <br/> `WGM11` == 0 <br/> `WGM12` == 1 <br/> `WGM13` == 0                                                                                                                                                                                                                                                 | 3 Arten <br/>[Table 15-5](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf#page=109)                                                               |
| TC2 | `WGM00` == 0 <br/> `WGM01` == 0 <br/> `WGM02` == 0                                                                                                                                                                                                                                                                                                   | `WGM00` == 0 <br/> `WGM01` == 1 <br/> `WGM02` == 0                                                                                                                                                                                                                                                                    | 2 Arten <br/>[Table 14-8](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf#page=130)                                                               |

### Normal Mode

#### Berechnung von $\Delta t$

$\Delta t$ ist die Zeitspanne, die es benötigt, bis ein Timer überläuft. Das bedeutet, dass jeder Timer alle $\Delta t$ Sekunden wieder auf den Button Wert zurückgesetzt wird.

Um sich die Zeitspanne $\Delta t$ nun auszurechnen benötigen wir den Systemtakt. Dieser ist beim Atmega 328p **16MHz**. Daraus ergibt sich folgende Berechnung:

$$
T = \frac {1} {f} = \frac {1} {16MHz} = 0.0000625 ms
$$

Das bedeutet bei einem 8-bit Timer:

$$
\Delta t = T * 2^8 = 0.016 ms
$$

und bei einem 16-bit Timer:

$$
\Delta t = T * 2^16 = 4.096 ms
$$

Also gelten Folgende Überlaufzeiten für die Timer beim Atmega328p:

-   TC0: $0.016ms$
-   TC1: $4.096ms$
-   TC2: $0.016ms$

#### naive Intervalle

Um einen bestimmten Programmcode jede Sekunde auszulösen, können wir also nun einen Timer verwenden, welche konstant hochzählt und überläuft. Da die Zeitspanne bis zum Überlauf allerdings kleiner als eine Sekunde ist, müssen wir eine bestimmte Anzahl an Überläufen abwarten, bis ca. eine Sekunde vergeht. Zur Berechnung dieser Anzahl kann man diese Formel verwenden:

$$
\frac {gewünschtes\;Intervall} {\Delta t\;des\;verwendeten\;Timers}
$$

Konkret bedeutet das bei einem 1-Sekunden Intervall bei TC0:

$$
\frac {1000ms} {0.016ms} = 62500\;Überläufe
$$

Zur Übersicht ein paar beliebte Werte für die Anzahl an Überläufen in tabellarischer Form (TC2 hat immer die gleichen Werte wie TC0):

:::note
Alle Werte mit einem Rundunssymbol in der Tabelle sind abgerunden, was bedeutet, dass die tatsächliche Zeitspanne leicht unter der jeweiligen gewünschten Zeitspanne liegt und der Programmcode dadurch etwas öfter als gewünscht ausgeführt wird.
:::

|            | TC0    | TC1   |
| ---------- | ------ | ----- |
| $\frac13$s | ~20833 | ~81   |
| $\frac12$s | 31250  | ~122  |
| 1s         | 62500  | ~244  |
| 2s         | 125000 | ~488  |
| 4s         | 250000 | ~976  |
| 8s         | 500000 | ~1953 |

Man kann in der Tabelle sehr gut erkennen, dass TC1 aufgrund der 16-bit wesentlich weniger Überläufe benötigt, da er seltener überläuft.

Um diese Methode auszuprogrammieren, sehen Sie bitte beim [Code](#zähle-überläufe) nach.

#### Prescaler

| Prescaler | neuer Takt | neue Periodendauer | $\Delta t$ 8-bit / 256 | $\Delta t$ 16-bit / 65536 |
| --------: | ---------: | -----------------: | ---------------------: | ------------------------: |
|         1 |      16MHz |        0.0000625ms |                0.016ms |                   4.096ms |
|         8 |       2MHz |           0.0005ms |               0.1275ms |                   32.76ms |
|        64 |     250kHz |            0.004ms |                 1.02ms |                  262.14ms |
|       256 |    62.5kHz |            0.016ms |                 4.08ms |                  1048.5ms |
|      1024 |  15.625kHz |            0.064ms |                16.32ms |                 4194.24ms |

### CTC - Clear Timer on Compare Match

### PWM - Pulse Width Modulation

## Code

### normaler Modus

#### Konfigurationen

Für den normalen Modus beim Timer können folgende Konfigurationen getroffen werden:

-   `WGMx0`, `WGMx1` und `WGMx2` auf 0 setzen (siehe [Table 14-8](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf#page=86))

    ```c
    // Wave Form Generation Modus auf Normal setzen
    TCCRxA &= ~((1<<WGMx0) | (1<<WGMx1));
    TCCRxB &= ~((1<<WGMx2));
    ```

-   `CSx0`, `CSx1` und `CSx2` einstellen (siehe [Table 14-9](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf#page=87))

    ```c
    // Prescaler einstellen
    TCCRxA &= ~((1<<WGMx0) | (1<<WGMx1));
    TCCRxB &= ~((1<<WGMx2));
    ```

    Nutzen Sie [diese](#prescaler) Tabelle, um herauszufinden, welcher Prescaler Wert in Ihrem Program am meisten Sinn macht.

##### zähle Überläufe

```c
#define F_CPU 16000000

#include <avr/io.h>


int main(void)
{
	// einmalige Aktionen

	while (1)
	{
        if (TCNT0 == 255) {
            cntOverflows++;
            if (cntOverflows == 62500) {
                // 1 Sekunde ist vergangen
            }
        }
	}
}
```

### CTC - Clear Timer on Compare Match

Für den CTC Modus beim Timer müssen folgende Konfigurationen getroffen werden:

-   WGMx0, WGMx1 und WGMx2 auf 0 setzen (siehe [Table 14-8](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf#page=86))

    ```c
    // Wave Form Generation Modus auf Normal setzen
    TCCRxA &= ~((1<<WGMx0) | (1<<WGMx1));
    TCCRxB &= ~((1<<WGMx2));
    ```

### PWM - Puls Width Modulation
