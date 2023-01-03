//! Iteración 1

//? Iteración 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
    let myFaviriteHero = "Hulk";
//? Iteración 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
    let x = 50;
//? Iteración 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
    let h = 5 ;
    let y = 10;
//? Iteración 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
    let z = h + y;


//! Iteración 2

//? Iteración 2.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
    const character = {name: 'Jack Sparrow', age: 10};
    character.age = 25;

//? Iteración 2.2 Declara 3 variables con los nombres y valores siguientes 
	let firstName = 'Jon'; 
	let lastName = 'Snow'; 
	let age = 24; 

//* Muestralos por consola de esta forma: 'Soy Jon Snow, tengo 24 años y me gustan los lobos.'  

    console.log("Soy " + firstName + lastName + ", tengo " + age + " años y me gustan los lobos.");

//? Iteración 2.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.
    const toy1 = {name: 'Buss myYear', price: 19};
    const toy2 = {name: 'Rallo mcKing', price: 29};

    console.log(toy1.price + toy2.price);

//? Iteración 2.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
//? y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
//? basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(car1.finalPrice);
console.log(car2.finalPrice);

//! Iteración 3

//? Iteración 3.1 Multiplica 10 por 5 y muestra el resultado mediante console.log().

    let mult = 10 * 5;
    console.log(mult)

//? Iteración 3.2 Divide 10 por 2 y muestra el resultado en un console.log().

    let div = 10 / 2;
    console.log(div);

//? Iteración 3.3 Muestra mediante un console.log() el resto de dividir 15 por 9.

    console.log(15 % 9);

//? Iteración 3.4 Usa el correcto operador de asignación que resultará en a = 15, 
//? teniendo dos variables b = 10 y c = 5.

let b = 10;
let c =5;
let a = b + c;
console.log ("a es igual a " + a);


//? Iteración 3.5 Usa el correcto operador de asignación que resultará en d = 50,
//? teniendo dos variables b = 10 y c = 5.

    let d = b * c;
    console.log("d es igual a " + d);

//! Iteración 4

//? Iteración 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
    const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
    console.log(avengers[0]);

//? Iteración 4.2 Cambia el primer elemento de avengers a "IRONMAN"

    avengers.splice( 0, 1, "IRONMAN" );
    console.log(avengers);

//? Iteración 4.3 Alert numero de elementos en el array usando la propiedad correcta de Array.

    console.log(avengers.length);

//? Iteración 4.4 Añade 2 elementos al array: "Morty" y "Summer". 
//? Muestra en consola el último personaje del array
    const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
    rickAndMortyCharacters.push("Morty", "Summer");
    console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1]);

//? Iteración 4.5 Elimina el último elemento del array y muestra el primero y el último por consola.

    rickAndMortyCharacters.pop();
    console.log(rickAndMortyCharacters[0] + " y " + rickAndMortyCharacters[rickAndMortyCharacters.length -1]);

//? Iteración 4.6 Elimina el segundo elemento del array y muestra el array por consola.

    rickAndMortyCharacters.splice(1 ,1 );
    console.log(rickAndMortyCharacters);

    

//! Iteración 5 : En base al código siguiente, muestra los mensajes correctos por consola.
    const number1 = 10;
    const number2 = 20;
    const number3 = 2;

    // ejemplo
    if(number1 === 10){
        console.log(number1 );
    }
    let divi;
    if ( divi = number2 / number1 == 2) {
    console.log(divi);
    }
    let distinct1;
    if ( distinct1 = number1 !== number2) {
    console.log(distinct1);
    }
    let distinct2;
    if (distinct2 = number3 != number1) {
    console.log(distinct2);
    }
    let equalMulti1;
    if (equalMulti1 = number3 * 5 == number1) {
    console.log(equalMulti1);
    }
    let equalMult2;
    if ( equalMult2 = equalMulti1 && number1 * 2 === number2) {
    console.log(equalMult2);
    }
    let equalDivi;
    if ( equalDivi = number2 / 2 === number1 || number1 / 5 === number3) {
    console.log(equalDivi);
    }


//! Iteración 6

//? Iteración 6.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
    for (let i = 0; i <= 9; i++) {
    console.log(i)
    
}
//? Iteración 6.2  Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//? cuando el resto del numero dividido entre 2 sea 0.

    for (let j = 0; j <= 9; j++) {
        
        if ( j % 2 === 0) {

            console.log(j);
        }
        
    }

//? Iteración 6.3 Crea un bucle para conseguir dormir contando ovejas. 
//? Este bucle empieza en 0 y termina en 10. 
//? Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
//? y cambia el mensaje en la última vuelta a 'Dormido!'.

    for (let k = 0; k <=10; k++) {
        if (k < 10) {
            console.log( k + " Intentando dormir");
        }

        else  {
            console.log( k + " Dormido!")
        }
        
    }