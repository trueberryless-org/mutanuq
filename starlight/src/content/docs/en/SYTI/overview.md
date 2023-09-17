---
title: General
sidebar:
    order: 0
---

## Terminology

### Evaluation Kit/Board

An evaluation board is a system that you build around a component or system, or sometimes they come prefabricated. You need this board/kit to make the part work. For example, for an evaluation board for a CPU, you would need RAM, an SD card, etc....

### Hardware programming

Hardware-related programming primarily enables the programmer to access several `lower` (closer to the hardware) elements of the hardware. A distinction is made between `higher` programming languages (significantly removed in abstraction and complexity from the level of machine languages), such as C, Javascript, etc., and "deep" languages, such as Assembler. The latter programming language already allows access to CPU registers, which many other higher programming languages do not support.

Unfortunately, however, some complex programmes can only be implemented with difficulty or not at all using programming languages that are close to the hardware. For this reason, Dennis Richie and Ken Thompson developed the programming language C, with the help of which they then developed Unix...

### Assembler and "C

As already mentioned in the paragraph above, assembler and C are rather hardware-related programming languages. However, the important difference is that C is a high-level language and assembler is not. On the other hand, you can really program kernels with assembler. What you can't do with assembler, however, is develop complex programmes, because this doesn't correspond to the "comfort" of a programmer (much too complicated, so to speak...).

As this [article](https://www.mikrocontroller.net/articles/ASM_vs_C "ASM vs C") explains in detail, every programming language has its right to exist. However, not everything can be achieved with every programming language, as this quote should make clear (L3-11):

> For time- and processor-optimised assembler programs, many more adaptations have to be made than for high-level languages. With typical applications for AVR, 8051 or PIC, this is usually still relatively problem-free, since the code size and structural diversity are limited. [...] With an ARM7, with its 3-stage pipeline, this becomes more difficult [...]. The designer of the compiler [...] can do this better, firstly because he knows the architecture very well and secondly because he is not concerned with anything other than code generation.

### Compiler

The compiler converts the programme code that we have developed (for example: .c, .h, ... - files) into a .hex file that the microcontroller can interpret and work with. The process that this compiler performs is then logically called `compiling`.

### Platform dependency

As this [article](https://www.mikrocontroller.net/articles/Plattformunabh%C3%A4ngige_Programmierung_in_C "Platform-independent programming in C") describes in great detail, the programme code always remains platform-dependent by definition. However, by cleverly using different data types, one can bring about a certain platform independence. This does not mean, however, that you can compile an application for an AVR-µC unchanged for a PC, since the PC does not have the same peripherals (timers, I/O ports, data buses, ...), among other things.

For this reason, one should always divide platform-dependent and platform-independent programming and write them separately. If you program the platform-dependent part in isolation, you only have to rewrite this part so that you can compile the code for other devices.

### AVR

AVR is a family of 8-bit microcontrollers that are widely used because they are simple in design but also easy to program. We also use an AVR chip (an ATmega) and use the Atmel IDE, as the AVR family also comes from Atmel.

### Port

In electronics, a port is a digital I/O port with which a bit state is simply represented. The state is then either 1-5V or 0V. They are mainly used for reading in and out digital signals, but also sometimes for A/D or D/A converters.
