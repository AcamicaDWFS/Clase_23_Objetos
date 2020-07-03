class Perro {
    constructor(raza, edad, color, tamano, peso, estado) {
        this.raza = raza;
        this.edad = edad;
        this.color = color;
        this.tamano = tamano;
        this.peso = peso;  
        this.estado = estado;
    }
    modificarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        return console.log ("La nueva situación del perro: " + this.estado)
    }
    mostrarEstado(){  
        return console.log ("La situación del perro: " + this.estado );
    }
}

let perro1 = new Perro("Beagle", "2 años", "café", "mediano", "4.5 kgs", "En proceso de adopción");
perro1.mostrarEstado();
perro1.modificarEstado("Adopción cancelada");

/* Codigo para solicitar la info al usuario */

let arregloPerros = [];
let deseaContinuar = true;
let raza, edad, color, tamano, peso, estado;

while (deseaContinuar === true) {
    raza = prompt("Ingrese la raza: ");
    edad = prompt("Ingrese la edad: ");
    color = prompt("Ingrese el color: ");
    tamano = prompt("Ingrese el tamaño: ");
    peso = prompt("Ingrese el peso: ");
    estado = prompt("Ingrese el estad: \nADOPTADO \NEN PROCESO \nEN ADOPCION");

    var perro = new Perro(raza, edad, color, tamano, peso, estado)

    arregloPerros.push(perro);
    deseaContinuar = confirm("Continuar");
}

/* REPORTES */

console.warn ("Reporte de todos los perros");
console.table (arregloPerros);

console.warn("Reporte de los adoptados");

for(i = 0; i < arregloPerros.length; i++ ){
    if(arregloPerros[i].estado === "ADOPTADO"  ){
        console.info (arregloPerros[i]);
    }
}

console.warn("Reporte de los que están en proceso de adopción");

for(i = 0; i < arregloPerros.length; i++ ){
    if(arregloPerros[i].estado === "EN PROCESO"  ){
        console.info (arregloPerros[i]);
    }
}

console.warn("Reporte en adopción");

for(i = 0; i < arregloPerros.length; i++ ){
    if(arregloPerros[i].estado === "EN ADOPCION"  ){
        console.info (arregloPerros[i]);
    }
}



