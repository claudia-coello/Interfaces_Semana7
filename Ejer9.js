const prompt=require("prompt-sync")();
//9. Cree una función verificarPar, que pida al usuario un número y muestra si es par o impar.
const numero= Number(prompt("Ingrese un numero: "));
function verificarPar(numero) {
    if (numero%2 === 0) {
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}
verificarPar(numero);