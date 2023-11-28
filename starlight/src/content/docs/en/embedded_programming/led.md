---
title: LED - Light-Emitting Diode
sidebar:
    order: 2
---

An LED is a simple diode that emits light. For it to light up, a voltage of 5V must be applied to the diode. If you do not want it to light up, apply a voltage of 0V.

## Construction

The LED can be connected to any PIN. This PIN must be configured as an output at [code level](#code) so that either 5V or 0V is applied. To prevent a short circuit, a resistor with 3.3K must be inserted before the diode. Then comes the diode. This is polarised, which means it has an anode and a cathode.

:::tip[Anode]
The anode is the **positive** end of a diode: **+**. In hardware terms, it is identified by the **longer** end of the diode.
:::
:::tip[Cathode]  
The cathode is the **negative** end of a diode: **-**. In hardware terms, it is identified by the **shorter** end of the diode.
:::

For the LED to work correctly the anode must be connected to the resistor end and the cathode is connected to ground (GND).

## Code

```c
int main(void)
{
    // LED to port B, pin 0
    // configure port B, pin 0 as output
    DDRB |= (1<<DDB0);

    // Port B, pin 0 voltage: 0V
    PORTB &= ~(1<<PORTB0);

    // Port B, pin 0 voltage: 5V
    PORTB |= (1<<PORTB0);

    while (1)
    {

    }
}
```
