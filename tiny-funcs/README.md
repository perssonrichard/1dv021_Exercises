# Futtiga funktioner

- A-nivå
- [GitBook](https://coursepress.gitbook.io/1dv021/ovningsuppgifter/del-1/a-niva/futtiga-funktioner)
- [Lösningsförslag](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/tiny-funcs)


> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbook.io/1dv021/guider/att-komma-igang-med-en-ovningsuppgift) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `src\mf.js` och komplettera de åtta funktionerna enligt specifikationerna. Du behöver inte tänka på att implementera någon form av felhantering.

__OBS!__ Filen innehåller funktioner med kod. Koden i funktionerna, bortsett från eventuella kommentarer, får under inga omständigheter ändras.

## Funktioner

### add

Komplettera funktionen så att den returnerar summan av de lokala variablerna `a` och `b`. Tänk på att de lokala variablernas värden måste vara av typen Number för att de ska kunna summeras.

### concat

Komplettera funktionen så att du med hjälp av konkatenering av givna lokala variabler skapar och retrunerar strängen `'I'm going to learn how to program in 9 weeks.'`.

### round

Komplettera funktionen så att den avrundade summan av de två lokala variablerna returneras. Summan ska vara avrundad till det närmaste heltalet.

### getOddNumbers

Komplettera funktionen så att den returnerar en sträng med kommaseparerade udda till upp till och med angivet maxvärde.

- Är parameterns värde `3`ska strängen `1, 3` returneras.
- Är parameterns värde `10`ska strängen `1, 3, 5, 7, 9` returneras.

### greetings

Komplettera funktion så att olika hälsningsmeddelanden returneras beroende av hur mycket klockan är.

- Om klockan är mellan 8 och 12 ska meddelandet vara `'Good morning!'`.
- Om klockan är mellan 12 och 18 ska meddelandet vara `'Good afternoon!'`.
- Om klockan är mellan 18 och 24 ska meddelandet vara `'Good evening!'`.
- Om klockan är mellan 24 och 8 ska meddelandet vara `'Good night!'`.

(Funktionen innehåller redan kod ,`new Date().getHours()`, som ger dagens aktuella timme.)

### replaceHyphensFor

Komplettera funktionen den returnerar en sträng där alla bindestreck ersatts med mellanslag. Använd en `for`-sats för att lösa problemet.

### replaceHyphensWhile

Komplettera funktionen den returnerar en sträng där alla bindestreck ersatts med mellanslag. Använd en `while`-sats för att lösa problemet.

### getNumberSequence

Komplettera funktionen så att den genom att använda två nästlade `for`-satser returnerar en sträng med sekvenserna `'11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53'`.

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [Number.parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt), [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [%, restoperator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [String.charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [Number.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)