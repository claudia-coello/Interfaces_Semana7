const promp=require("prompt-sync")();
//3. Sacar el promedio de las asignaturas de: inglés, matemática y lengua, el usuario ingresará los valores mediante teclado, Indicar si el estudiante aprueba siempre que la nota sea mayor o igual a 7.
const nota_ingles=Number(promp("Ingrese la nota de Ingles: "));
const nota_matematicas=Number(promp("Ingrese la nota de Matematicas: "));
const nota_lenguaje=Number(promp("Ingrese la nota de Lenguaje: "));

const promedio=(nota_ingles+nota_lenguaje+nota_matematicas)/3;
console.log("El promedio es: ", promedio);
let mensaje;
//4. Del ejercicio anterior, si la nota es menor que 7 indicar que el estudiante reprueba.

//5. Del ejercicio anterior indicar lo siguiente:

//      · 10 = Satisfactorio (beca) y aprueba

//      · 8 y 9 = Muy buena, y aprueba

//      · 7 y 7.99 = Buena, y aprueba

//      · Menor 7 = regular y reprueba
if(promedio === 10){
    mensaje="Satisfactorio (beca) y aprueba";
}else if(promedio >= 8 && promedio < 10){
    mensaje = "Muy buena, y aprueba";
}else if(promedio >= 7 && promedio < 8){
    mensaje = "Buena, y aprueba";
}else if(promedio<7){
    mensaje="regular y reprueba";
}

console.log(mensaje);