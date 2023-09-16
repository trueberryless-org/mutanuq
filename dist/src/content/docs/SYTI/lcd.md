---
title: LCD - Liquid Crystal Display
sidemap:
    order: 400
---

Das Liquid Crystal Display besteht aus 16 Zeichen in einer Reihe und 2 Zeilen insgesamt. Es unterstützt die gesamten lateinischen, chinesischen und weiter Zeichensätze plus einige Emojis.

## Theorie

## Aufbau

![Aufbau eines LCDs am ATmega 328p](../../../assets/SYTI/lcd/lcd_composition.png)
![Grid eines LCDs](../../../assets/SYTI/lcd/lcd_grid.png)

## Code

```c
#define F_CPU 16000000

#include <avr/io.h>
#include <avr/interrupt.h>

#define __DELAY_BACKWARD_COMPATIBLE__
#include <util/delay.h>

int main(void)
{
    lcd_init(LCD_DISP_ON);

    lcd_gotoxy(3, 1);

    lcd_command();

	while (1)
	{

	}
}
```
