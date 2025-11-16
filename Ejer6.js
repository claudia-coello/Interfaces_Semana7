const prompt=require("prompt-sync")();
//6. Calcular el área y el perímetro de un cuadrado, un rectángulo, triángulo y círculo solicitando los valores al usuario. Si el usuario selecciona triángulo además deberá calcular la hipotenusa.
const opcion = Number(prompt("Cual area y perimetro desea ingresar? \n1.-cuadrado\n2.-rectángulo\n3.-triángulo\n4.-círculo\nIngrese una opcion: "));
let area;
let perimetro;

if (opcion===1) {
    console.log("Ha seleccionado Cuadrado");
    const lado = Number(prompt("Ingrese el lado del cuadrado: "));
    area=lado**2;
    perimetro=4*lado;
}else if (opcion===2) {
    console.log("Ha seleccionado Rectangulo");
    const base_rectangulo = Number(prompt("Ingrese la base del triangulo: "));
    const altura_rectangulo = Number(prompt("Ingrese la altura del rectangulo: "));
    area=base_rectangulo*altura_rectangulo;
    perimetro=2*(base_rectangulo*altura_rectangulo);
}else if (opcion===3) {
    console.log("Ha seleccionado Triangulo");
    const lado1 = Number(prompt("Ingrese el primer lado del triangulo: "));
    const lado2 = Number(prompt("Ingrese el segundo lado  del triangulo: "));
    const lado3 = Number(prompt("Ingrese el tercer lado  del triangulo: "));

    const s = (lado1 + lado2 + lado3) / 2;
    area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
    perimetro=lado1+lado2+lado3;

    //La hipotenusa solo existe si es un triangulo rectangulo, primero hay que comprabar que lo sea
    // 1. lado mayor
    const mayor = Math.max(lado1, lado2, lado3);

    // 2. obtener los otros dos
    let cat1, cat2;

    if (mayor === lado1) {
        cat1 = lado2; 
        cat2 = lado3;
    } else if (mayor === lado2) {
        cat1 = lado1; 
        cat2 = lado3;
    } else {
        cat1 = lado1; 
        cat2 = lado2;
    }

    //verificar si es rectángulo
    const esRectangulo = Math.abs(mayor**2 - (cat1**2 + cat2**2)) < 0.0001;

    //determinar hipotenusa
    let hipotenusa;

    if (esRectangulo) {
        hipotenusa = mayor;
    } else {
        hipotenusa = "No existe hipotenusa (no es un triángulo rectángulo)";
    }
    console.log("Hipotenusa:", hipotenusa);
}else if (opcion===4) {
    const pi = Math.PI;
    const radio = Number(prompt("Ingrese el radio del circulo: "));
    area = pi * (radio**2);

    perimetro = 2*pi*radio;
}else{
    console.log("La opcion no existe");
}

console.log("Area: ", area);
console.log("Perimetro: ", perimetro);