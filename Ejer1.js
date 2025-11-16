const prompt = require("prompt-sync")();//prompt-sync es una librería que permite leer datos del teclado en Node.js.
//1. Realizar la suma, resta, multiplicación, división, módulo, potencia de dos números dados.
const a = Number(prompt("Primer número: "));
const b = Number(prompt("Segundo número: "));

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);
console.log("Potencia:", a ** b);