---
title: LCD - Liquid Crystal Display
sidebar:
    order: 5
---

The Liquid Crystal Display consists of 16 characters in a row and 2 lines in total. It supports the entire latin, chinese and further character sets plus some emoji.

To use the display, we recommend [lcd.h](#appendix-a---lcdh) and [lcd.c](#appendix-b---lcdc).

## Structure

![Grid of an LCD on the ATmega 328p](../../../../assets/SYTI/lcd/lcd_composition.png)
![Grid of an LCD](../../../../assets/SYTI/lcd/lcd_grid.png)

## Code

The LCD has some possibilities to change, delete and add characters.

### Write characters

You can write single characters to the display with `lcd_putc('s')` or a whole string:

```c
lcd_puts('trueberryless');
```

### Clear display

To clear all characters on the display:

```c
lcd_clrscr();
```

### Move characters

If you want to move all characters one to the left, you can do this:

```c
lcd_command(LCD_MOVE_DISP_LEFT);
```

This is very useful when you want to scroll text across the display.

### Example Project

```c
#define F_CPU 16000000

#include <avr/io.h>
#include <stdio.h>
#include <stdlib.h>
#include <avr/io.h>
#include <avr/interrupt.h>

#define __DELAY_BACKWARD_COMPATIBLE__
#include <util/delay.h>

#include "lcd.h"
#include "dht.h"


int main(void)
{
    char buffer[16];

    int8_t temperature = 0;
    int8_t humidity = 0;

    lcd_init(LCD_DISP_ON);

    while(1) {
	    if (dht_gettemperaturehumidity(&temperature, &humidity) != -1) {
			sprintf(buffer, "T: %u C, H: %u", temperature, humidity);
			lcd_puts(buffer);
			lcd_puts("%");
		}
        else {
			lcd_puts("Error");
	    }
	    _delay_ms(2000);
		lcd_clrscr();
    }
}
```

## Downloads

<a href="/embedded_programming/lcd/lcd.c">lcd.c</a>
<a href="/embedded_programming/lcd/lcd.h">lcd.h</a>
