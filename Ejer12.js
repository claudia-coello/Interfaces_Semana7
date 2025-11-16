const prompt=require("prompt-sync")();
//12. Crea un arreglo con nombres de estudiantes. Pide al usuario uno y muestra si está en la lista.
const estudiantes = ["Pepe", "Rodrigo", "Maria"];
const nombre = prompt("Ingrese su nombre: ");

function estudianteEnLista(estudiantes, nombre){
    for (let i = 0; i < estudiantes.length; i++) {
        if(estudiantes[i] === nombre){
            return "El estudiante se encuentra registrado";
        }
    }
    return "El estudiante no se encuentra registrado";
}
console.log(estudianteEnLista(estudiantes,nombre ));