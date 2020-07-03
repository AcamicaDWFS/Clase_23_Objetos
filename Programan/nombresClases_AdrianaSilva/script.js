class Persona {
    constructor(nombre, apPat, apMat, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apPat;
        this.apellidoMaterno = apMat;
        this.edad = edad;
    }
    mostrarNombre() {
        return console.log ("Nombre completo: " + this.nombre + " " + this.apellidoPaterno + " " + this.apellidoMaterno )
    }
    calcularEdad(edad){  
        if (this.edad >= 18 ) {
            return console.log("¿Es mayor de edad? " + true);
        } 
        return console.log("¿Es mayor de edad? " + false);
    }
}

let persona1 = new Persona("Maria", "Gomez", "Hernández", "30");
let persona2 = new Persona("José", "Díaz", "Marín", "12");

console.table(persona1);
console.table(persona2);

persona1.mostrarNombre();
persona2.mostrarNombre();

persona1.calcularEdad();
persona2.calcularEdad();