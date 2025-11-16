const prompt=require("prompt-sync")();
//13. Crea un arreglo de números y muestra cuál es el mayor.
const numeros=[1,2,35,6,4,8];
let numMyor = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numMyor) {
        numMyor = numeros[i];
    }
}
console.log("El numero mayor es: ", numMyor);