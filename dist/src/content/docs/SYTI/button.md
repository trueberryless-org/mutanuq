---
title: Taste
sidebar:
    order: 300
---

## Theorie

## Aufbau

## Code

### ohne Interrupts

#### Pull-Up Beschaltung

#### Pull-Down Beschaltung

#### interner Pull-Up Widerstand

```c
#include <avr/io.h>
#include <util/delay.h>

void checkButton(void);

int main(void)
{
    // Taste an Port B, Pin 0
    //  Port B, Pin 0 als Eingang konfigurieren
	DDRB &= ~(1<<DDB0);

    //  Port B, Pin 0 Spannung: 5V (internen Pull-Up Widerstand aktivieren)
	PORTB |= (1<<PORTB0);
	
	while (1)
	{
		checkButton();
	}
}

void checkButton(void) {
    // Überprüfen, ob die Taste gedrückt wird.
	if (!(PINC & (1<<PINC0)))
	{
		// Taste wurde 1x gedrückt
	}

    // Prellen vermeiden
	_delay_ms(70);
}
```

### mit Interrupts

#### direkt externe Interrupts

#### gruppenbasierte externe Interrupts