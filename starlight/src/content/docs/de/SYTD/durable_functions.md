---
title: Durable Functions
sidebar:
    order: 3
---

Bei komplexerer Geschäftslogik müssen oft Funktionen miteinander interagieren. Diese Funktionalität ist bei herkömmlichen Azure Functions nicht gegeben. Aus diesem Grund und ein paar anderen, gibt es Durable Functions. Sie erlauben uns, während der Ausführung einer Function auf User-Input zu warten, komplexe Logik, welche das Ausführungslimit der Azure Functions überschreiten würde, durchzuführen und Monitoring-Systeme aufzusetzen.

## Orchestrator

Der Orchestrator ist die organisatorische Funktion einer Durable Function. Sie ist der Kernpunkt, die langfristige Ausführungen erst ermöglicht. Der Orchestrator kann andere Functions - sogenannte Activities - aufrufen und auf Externe Events warten.

```csharp
[FunctionName("HelloCities")]
public static async Task<List<string>> Run(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
	var outputs = new List<string>();

	outputs.Add(await context
		.CallActivityAsync<string>("SayHello", "Tokyo"));
	outputs.Add(await context
		.CallActivityAsync<string>("SayHello", "Seattle"));
	outputs.Add(await context
		.CallActivityAsync<string>("SayHello", "London"));

	return outputs;
}
```

Hierbei müssen die Eingangsparameter und Returnwerte aufeinander abgestimmt sein. Im unteren Beispiel muss `"Tokyo"` vom Typ `string` sein, damit in der [Activity](#activity) der Name vom Context ausgelesen werden kann. Ebenso muss der Returnwert der Activity vom Typ `string` sein, damit der Orchestrator beim Aufruf von `await context.CallActivityAsync<string>()` das Ergebnis in einen String speichern kann.

### Flow

Orchestrators haben einen ganz besonderen Ausführungsprozess. Bei jedem Aufruf einer Activity bzw. jedem Warten auf eine externes Event wird der aktuelle Stand des Orchestrators in einen Table Storage Account gespeichert und der Orchestrator heruntergefahren. Somit weiß dieser nicht mehr, an welcher Stelle / Zeile im Code er stehengeblieben ist und muss nach der Fertigstellung der Activity bzw. dem Auftreten eines externen Events wieder von vorne anfangen!

Sobald er wieder zum Aufruf der vorherigen Activity kommt (diese wurde nun bereits durchgeführt, da sie beim vorherigen Durchlauf aufgerufen wurde), schaut der Orchestrator in dem Table Storage Account nach, ob der Returnwert der Activity bereits gespeichert sind. Wenn ja, wird die Activity nicht noch einmal aufgerufen, sondern das Ergebnis aus der Tabelle ausgelesen und der Orchestrator setzt mit der Durchführung des weiteren Programmablaufs fort.

Dieses anfangs äußerst ungewöhnliche Verhalten eines Programms führt dazu, dass keine "einfachen" Variablen im Orchestrator deklariert und initialisiert werden dürfen, da der Orchestrator innerhalb eines Triggers mehrmals diese Programmzeile durchführt. Folgendes Programm würde aus diesem Grund die Zeit nicht richtig mitstoppen:

:::danger
Programm funktioniert so nicht!
:::

```csharp
[FunctionName("HelloCities")]
public static async Task<List<string>> Run(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    ILogger log)
{
    // Orchestrator führt diese Zeile mehrmals aus
    var startTime = DateTime.UtcNow;

    // irgendeine Activity
	await context.CallActivityAsync("LogInfo", "London");

    var ellapsedTimeMs = (DateTime.UtcNow - startTime).TotalMilliseconds;
    log.LogInformation($"Orchestrator hat {ellapsedTimeMs}ms mit der Durchführung gebraucht.");
}
```

Stattdessen müsste man in solchen Fällen eine eigene Activty schreiben, welche die momentane UTC Zeit returnt. Sobald die Funktionalität nämlich in einer eigenen Activity ausgelagert ist, wird das Ergebnis in einem Table Storage Account persistiert und nicht erneurt durchgeführt. Da die momentane Zeit häufig in Orchestratoren verwendet wird, gibt es für den obrigen Orchestrator einen Spezialfall:

```csharp
[FunctionName("HelloCities")]
public static async Task<List<string>> Run(
    [OrchestrationTrigger] IDurableOrchestrationContext context,
    ILogger log)
{
    var startTime = context.CurrentUtcDateTime;

    // irgendeine Activity
	await context.CallActivityAsync("LogInfo", "London");

    var ellapsedTimeMs = (DateTime.UtcNow - startTime).TotalMilliseconds;
    log.LogInformation($"Orchestrator hat {ellapsedTimeMs}ms mit der Durchführung gebraucht.");
}
```

## Activity

Eine Activity ist eine normale Azure Function, welche vom Orchestrator ein oder mehrere Male aufgerufen werden kann. Für die Activity gelten die gleichen Regeln wie für eine [Azure Function](/de/sytd/azure_functions/).

```csharp
[FunctionName("SayHello")]
public static string SayHello(
	[ActivityTrigger] IDurableActivityContext helloContext)
{
	string name = helloContext.GetInput<string>();
	return $"Hello {name}!";
}
```
