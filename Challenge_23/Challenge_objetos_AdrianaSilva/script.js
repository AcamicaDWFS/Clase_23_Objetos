class Aviones {
    saludar(){
        return "Bienvenidos al avión " + this.nombre;
    }
}

a319 = new Aviones;

a319.peso = 3700;
a319.litrosGasolina = 4000;
a319.nombre = "viaje fantástico";
a319.velocidad = 0;

console.log(a319.peso);
console.log(a319.litrosGasolina);
console.log(a319.saludar());

avion2 = new Aviones;
avion3 = new Aviones;