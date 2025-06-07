// Realiza una aplicación en java que lea una cadena de caracteres y devuelva el alfabeto de símbolos utilizados en la cadena en orden ascendente.

// Ejemplo:
// Cadena de caracteres: 10110110101
// Alfabeto: {0, 1}

// Ejemplo:
// Cadena de caracteres: 19TE0123*
// Alfabeto: {0,1,2,3,9,T,E,*}


// Solicita al usuario que ingrese un valor


const chainText = document.getElementById("chainHtml") as HTMLInputElement
const printButton = document.getElementById("btnChainHtml") as HTMLButtonElement
const printValue = document.getElementById("outputAlphabet") as HTMLOutputElement
const chainToVerify = document.getElementById("textComprobationHtml") as HTMLInputElement
const printButtonVerify = document.getElementById("btnComprobationHtml") as HTMLButtonElement
const printValueVerify = document.getElementById("outputComprobation") as HTMLOutputElement







function counter(chain : string, character: string): number {  //Creo un metodo para contar un caracter en un String
    let count: number = 0;

    for (let i: number = 0; i < chain.length; i++) {           //Creo un for para recorrer todo el String que contare cuantas veces tiene el caracter
        if (chain.charAt(i) === character) {                   //Genero un if, cada vez que el caracter es igual a un caracter que obtengo con charAt

            count++;                                           //Sumo mi contador cada que el if es true

        }
    }

    return count;                                              
}


function alphabet(chain: string): string {                     //Creo un metodo para sacar el alfabeto de un String
  
    let res: string = "";                                      //Creo el String que retornare

    for (let i: number = 0; i < chain.length; i++) {
        if (counter(chain, chain.toLowerCase().charAt(i)) < 2  //Este comprueba si el caracter no se repite dos veces en la cadena 
         || counter(res, chain.toLowerCase().charAt(i)) == 0) {// y si es que se repite solo lo coloca en el nuevo string si es que no esta

            res += chain.toLowerCase().charAt(i);
        }
    }
    return res;
}


function order(chain: string): string[] {                      //Creo un metodo para ordenar los caracteres segun su orden en unicode//ascci
    let pepe: string[] = [];                                   //Hago un arreglo para faciliar las cosas

    for (let i: number = 0; i < chain.length; i++) {           //Esto for me ayuda a meter todo el alfabeto que le doy a un array
        pepe.push(chain.charAt(i));                            
    }


    pepe.sort();                                               //Uso el metodo sort que viene de vanilla en Ts, el cual ordena un array por su orden en unicode
    return pepe;

}

function alphabetFormated(chain: string): string {             //Este metodo practicamente solo da formato pero llama a los demas ya realizados
    let alpha: string = "";
    for (let i: number = 0; i < order(alphabet(chain)).length; i++) { //Aca suelto del array que me da order todos los datos a un String
        if (order(alphabet(chain)).length - 1 === i) {
            alpha += order(alphabet(chain))[i];

        } else {
            alpha += order(alphabet(chain))[i] + ",";                //Este for es porque si es el ultimo del array no llevamo coma para un buen formato

        }
    }


    return "{ " + alpha + " }";                                      //Aca retornamos el String con los corchetes para el formato requerido

}


const text: string = "TE";
console.log("El texto el cual se obtendra su alfabeto es:" + text)

console.log(alphabetFormated(text));;



// Realiza una aplicación en java que lea una cadena de caracteres y un alfabeto y determine lógicamente la validez de la cadena respecto al alfabeto proporcionado.

// Ejemplo:
// Alfabeto: 0, 1
// Cadena de caracteres: 10110110101
// Resutado: Correcto!!



function alphabetVerification(chain: string, alphabet: string): string {  //Metodo para comprabar si un String pertenece a un alfabeto ya dadio

             
    for (let i: number = 0; i < chain.length; i++) {                      //Se crea un for para recorrer toda la cadena a comprobar
        if (counter(alphabet, chain.toLocaleLowerCase().charAt(i)) <= 0) {                    //Uso el contador de manera que si da 0, signfica que hay un valor que no esta en alfabeto
                                                                          // y por ende el String no pertenece al alfabeto
            return "Incorrecto!!!!";
        }


    }

    return "Correcto!!!!!"; 

}


const textComprobation: string = "TE";

console.log("Se comprobara si el texto: " + textComprobation + " \npertenece al mismo alfabeto...");
console.log(alphabetVerification(textComprobation, alphabet(text)));



function printAlphabet(): void {
    const txt = alphabetFormated(chainText.value);
    printValue.textContent = txt;
    console.log(txt)
}

function printverifiedAlphabet(): void {
    const txt = alphabetVerification(chainToVerify.value,alphabetFormated(chainText.value));
    printValueVerify.textContent = txt;
}

printButton.addEventListener("click", printAlphabet);
printButtonVerify.addEventListener("click",printverifiedAlphabet);
