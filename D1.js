/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I diversi tipi di dati in JavaScript sono:
- Dati di tipo numerico, che possono includere numeri reali e naturali;
- Dati di tipo stringa, ovvero porzioni di caratteri alfanumerici (numeri e lettere);
- Booleani, ovvero dati il cui valore può essere solo true(vero) o false (salso);
- null, ovvero dati privi di valore;
- undefined, ovvero dati con valore non definito (accade quando si definisce una variabile sanza inizializzarla). 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Giuseppe";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let result = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Tuccilli";

const myConst = 5;
// myConst = 6; -> questo genera un errore nella console del browser anzichè restituire il valore 6.

console.log(myConst);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

let eq = name1 === name2; //poichè le due stringhe sono diverse, la console del browser restituirà false

console.log("name1 e name2 sono uguali? " + eq);

let eqlow = name1.toLocaleLowerCase() === name2.toLocaleLowerCase(); //usando il metodo toLowerCase le stringhe coincidono.

console.log("name1 e name2 sono uguali se in minuscolo? " + eqlow);
