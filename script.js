/*

PROBLEM:

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

STEPS: 

1. Creo un contatore che va da 1 fino a 100 - EDIT: for(let i = 1; i <= 100; i++ ) { }
2. SE il numero è un multiplo di 3 devo stampare "Fizz" - EDIT: if (i % 3 === 0) {console.log ("Fizz")}
    - per sapere se è multiplo devo indicare che il resto (modulo - %) del numero deve essere uguale a 0
3. ALTRIMENTI SE il numero è un multiplo di 5 devo stampare "Buzz"
    - per sapere se è multiplo devo indicare che il resto (modulo - %) del numero deve essere uguale a 0
4. ALTRIMENTI SE il numero è multiplo sia di 3 che di 5 devo stampare "FizzBuzz"
    - per sapere se è multiplo di entrambi devo usare l'operatore logico AND (&&) così da indicare che entrambi i casi 
    devono verificarsi per stampare "FizzBuzz" in console (deve verificarsi resto 0 a multiplo di 3 e anche a multiplo di 5)
5. ALTRIMENTI se non si verifica nessuna delle precedenti condizioni stampo direttamente il numero in console
*/

// CODES:
    
for(let i = 1; i <= 100; i++ ) {
    if (i % 3 === 0) {
        console.log ("Fizz")
    }
}