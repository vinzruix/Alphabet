"use strict";
const chainText = document.getElementById("chainHtml");
const printButton = document.getElementById("btnChainHtml");
const printValue = document.getElementById("outputAlphabet");
const chainToVerify = document.getElementById("textComprobationHtml");
const printButtonVerify = document.getElementById("btnComprobationHtml");
const printValueVerify = document.getElementById("outputComprobation");
function counter(chain, character) {
    let count = 0;
    for (let i = 0; i < chain.length; i++) {
        if (chain.charAt(i) === character) {
            count++;
        }
    }
    return count;
}
function alphabet(chain) {
    let res = "";
    for (let i = 0; i < chain.length; i++) {
        if (counter(chain, chain.toLowerCase().charAt(i)) < 2
            || counter(res, chain.toLowerCase().charAt(i)) == 0) {
            res += chain.toLowerCase().charAt(i);
        }
    }
    return res;
}
function order(chain) {
    let pepe = [];
    for (let i = 0; i < chain.length; i++) {
        pepe.push(chain.charAt(i));
    }
    pepe.sort();
    return pepe;
}
function alphabetFormated(chain) {
    let alpha = "";
    for (let i = 0; i < order(alphabet(chain)).length; i++) {
        if (order(alphabet(chain)).length - 1 === i) {
            alpha += order(alphabet(chain))[i];
        }
        else {
            alpha += order(alphabet(chain))[i] + ",";
        }
    }
    return "{ " + alpha + " }";
}
const text = "TE";
console.log("El texto el cual se obtendra su alfabeto es:" + text);
console.log(alphabetFormated(text));
;
function alphabetVerification(chain, alphabet) {
    for (let i = 0; i < chain.length; i++) {
        if (counter(alphabet, chain.toLocaleLowerCase().charAt(i)) <= 0) {
            return "Incorrecto!!!!";
        }
    }
    return "Correcto!!!!!";
}
const textComprobation = "TE";
console.log("Se comprobara si el texto: " + textComprobation + " \npertenece al mismo alfabeto...");
console.log(alphabetVerification(textComprobation, alphabet(text)));
function printAlphabet() {
    const txt = alphabetFormated(chainText.value);
    printValue.textContent = txt;
    console.log(txt);
}
function printverifiedAlphabet() {
    const txt = alphabetVerification(chainToVerify.value, alphabetFormated(chainText.value));
    printValueVerify.textContent = txt;
}
printButton.addEventListener("click", printAlphabet);
printButtonVerify.addEventListener("click", printverifiedAlphabet);
console.log("PSOPDSA");
//# sourceMappingURL=index.js.map