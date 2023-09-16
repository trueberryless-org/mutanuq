---
title: Basic Program
sidebar:
    order: 100
---

Ein typisches C-Programm hat eine main-function, welche am Start des Programms aufgerufen wird. Wichtig ist, dass diese Funktion eine Endlosschleife, die sogenannte Arbeitsschleife, enthält, ansonsten würde das Program aufhören zu laufen.

```c
/*
 * Basic_Program.c
 *
 * Created: 06.09.2069 06:09:00
 * Author : trueberryless
 */

#define F_CPU 16000000

#include <avr/io.h>
#include <avr/interrupt.h>

#define __DELAY_BACKWARD_COMPATIBLE__
#include <util/delay.h>

int main(void)
{
	// einmalige Aktionen

	while (1)
	{
		// Arbeitsschleife - mehrmalige Aktionen
	}
}
```
