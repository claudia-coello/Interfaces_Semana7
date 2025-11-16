const prompt=require("prompt-sync");
//Crea un arreglo con varios números y muestra los elementos en orden inverso.
const numero = [1,2,3,4,5];

console.log("Original: ")
for (let i = 0; i < numero.length; i++) {
    console.log(numero[i]);
    
}
console.log("Inversa: ")
for (let j = numero.length-1; j >= 0; j--) {
    console.log(numero[j]);
}
