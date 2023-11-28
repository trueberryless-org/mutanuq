---
title: Basic Program
sidebar:
    order: 1
---

A typical C program has a main function that is called at the start of the program. It is important that this function contains an infinite loop, the so-called working loop, otherwise the program would stop running.

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
    // one-time actions

    while (1)
    {
        // working loop - multiple actions
    }
}
```
