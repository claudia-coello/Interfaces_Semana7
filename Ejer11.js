const prompt=require("prompt-sync")();
//11. Crea un arreglo con 5 números y calcula la suma total.
const numeros = [2,5,4,7,8];//2+5+4+7+8=26

let sumaTotal = 0;
for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
}
console.log("La suma total es: ", sumaTotal);