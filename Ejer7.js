const prompt=require("prompt-sync")();
//7. Generar la tabla de multiplicar del número que el usuario ingrese por teclado.
const numero=Number(prompt("Ingrese un numero: "));

for (let i = 1; i < 11; i++) {
    console.log(numero," x ", i, " = ", numero*i);
}