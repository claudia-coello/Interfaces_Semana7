const prompt=require("prompt-sync")();
//2. Calcular el área de un cuadrado, un rectángulo, triángulo y círculo solicitando los valores al usuario.
const lado_cuadrado = Number(prompt("Ingrese el lado del cuadrado: "))
console.log("El area del cuadrado es: ", lado_cuadrado**2);

const base_rectangulo = Number(prompt("Ingrese la base del triangulo: "));
const altura_rectangulo = Number(prompt("Ingrese la altura del rectangulo: "));
console.log("El area del rectangulo es: ", base_rectangulo*altura_rectangulo);

const base_triang = Number(prompt("Ingrese la base del triangulo: "));
const altura_triang = Number(prompt("Ingrese la altura del triangulo: "));
console.log("El area del triangulo es: ", (base_rectangulo*altura_rectangulo)/2);

const pi = Math.PI;
const radio = Number(prompt("Ingrese el radio del circulo: "));
console.log("El area del circulo es: ", pi * (radio**2));