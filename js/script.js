/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
    MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. */

const container = document.querySelector("div.container");

//Scrivi un programma che stampi in console i numeri da 1 a 100.
for (let i = 1; i <= 100; i++) {
    //stampo in console
    //console.log(i);
    /* const element = `<div class="box${i}">${i}</div>`; */
    const div = document.createElement("div");
    div.classList.add("box")
    div.append(i);
    container.append(div);

    //console.log(div);

    //multipli di 3
    if (i % 3==0) {
        //console.log(i);
        div.innerHTML = 'fizz';
        div.classList.add("green");
    } if (i % 5==0) { //multipli di 5
        //console.log(i);
        div.innerHTML = 'buzz';
        div.classList.add("orange");
        
    } if (i % 3 == 0 && i % 5 == 0) { // multipli di 3 e 5
        div.innerHTML = 'fizzbuzz';
        div.classList.add("red");
        //console.log(i);
    }    
}

