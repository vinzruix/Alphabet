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







function counter(chain: string, character: string): number {
    let count: number = 0;

    for (let i: number = 0; i < chain.length; i++) {
        if (chain.charAt(i) === character) {

            count++;

        }
    }

    return count;
}


function alphabet(chain: string): string {
  
    let res: string = "";

    for (let i: number = 0; i < chain.length; i++) {
        if (counter(chain, chain.toLowerCase().charAt(i)) < 2 || counter(res, chain.toLowerCase().charAt(i)) == 0) {

            res += chain.toLowerCase().charAt(i);
        }
    }
    return res;
}


function order(chain: string): string[] {
    let pepe: string[] = [];

    for (let i: number = 0; i < chain.length; i++) {
        pepe.push(chain.charAt(i));
    }


    pepe.sort();
    return pepe;

}

function alphabetFormated(chain: string): string {
    let alpha: string = "";
    for (let i: number = 0; i < order(alphabet(chain)).length; i++) {
        if (order(alphabet(chain)).length - 1 === i) {
            alpha += order(alphabet(chain))[i];

        } else {
            alpha += order(alphabet(chain))[i] + ",";

        }
    }


    return "{ " + alpha + " }";

}






// Realiza una aplicación en java que lea una cadena de caracteres y un alfabeto y determine lógicamente la validez de la cadena respecto al alfabeto proporcionado.

// Ejemplo:
// Alfabeto: 0, 1
// Cadena de caracteres: 10110110101
// Resutado: Correcto!!



function alphabetVerification(chain: string, alphabet: string): string {



    for (let i: number = 0; i < chain.length; i++) {
        if (counter(alphabet, chain.charAt(i)) <= 0) {
            return "Incorrecto!!!!";
        }


    }

    return "Correcto!!!!!"; 

}


const text: string = "23TE0288";

console.log(alphabetFormated(text));
console.log(alphabetVerification("z", alphabet(text)))

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