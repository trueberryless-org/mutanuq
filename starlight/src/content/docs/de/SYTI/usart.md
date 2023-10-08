---
title: USART - Daten senden / empfangen
sidebar:
    order: 9
---

In Datenverarbeitungsprogrammen ist es oft, wenn nicht sogar immer, notwendig, Daten zwischen Computern auszutauschen. Um diese Verbindung zwischen unserem ATmega328p Board und unserer Entwicklungsmaschine herzustellen, gibt es das USART (Universal Synchronous/Asynchronous Receiver Transmitter).

## Theorie

Für die Datenübertragung braucht es zwei PINs, ein PIN zum Senden und ein PIN zum Empfangen von Daten. Dafür sind beim ATmega328p die PINs `PD0` und `PD1` reserviert. Wenn Sie das USART also verwenden möchten, achten Sie darauf, diese beiden PINs nicht gleichzeit für andere Zwecke zu verwenden.

## Code

### Daten senden

Um die Ausimplementierung zu erleichern, verwendet man [Pointer](../pointer). Dies ist die Methode für einzelen [ASCII-Zeichen](https://www.torsten-horn.de/techdocs/ascii.htm).

```c
void write_char(char str) {
	while (!(UCSR0A & (1<<UDRE0)));
	UDR0=str;
}
```

Für ganze Zeichenketten gibt es diese einfache Methode:

```c
void write_string(char *arr) {
	while(*arr) {
		while (!(UCSR0A & (1<<UDRE0)));
		UDR0=*arr++;
	}
	while (!(UCSR0A & (1<<UDRE0)));
}
```

### Daten empfangen

Während man ganze Zeichenketten schicken kann, kann man immer nur einzelne Zeichen empfangen.

```c
ISR(USART_RX_vect) {
	uint8_t tmp;
	tmp = UDR0;
}
```

Um ganze Zeichenketten zu empfangen müsste man ein Protokoll definieren / verwenden, damit die Kommunikation zwischen den Computern einheitlich ist. Das Protokoll würde zum Beispiel definieren, welcher Overhead vor / nach den eigentlichen RAW-Daten mitgeschickt werden müsste, damit alle Komponenten exakt wissen, welche Zeichen zu welcher Zeichenkette gehören.
