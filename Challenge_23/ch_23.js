//Primero crear una clase

class Avion {

    constructor(name, type, year, bathrooms, seats, doorExit) {//Establecemos sus propiedades tipo, año, baños, asientos, puertas de emergencia
        this.name = name;
        this.type = type;
        this.year = year;
        this.bathrooms = bathrooms;
        this.seats = seats;
        this.doorExit = doorExit;
    }
    takeoff() {
        console.log("Soy " + this.name +" y estoy despegando...");
    }
    float() {
        console.log("Soy " + this.name +" y estoy flotando...");
    }
    land() {
        console.log("Soy " + this.name +" y estoy aterrizando...");
    }

}

let b737 = new Avion ("Boeing 737", "Comercial", "2015", "4", "300", "6");
b737.peso = 300;
console.log(b737);
console.table(b737);
b737.takeoff();
b737.float();
b737.land();

let f86 = new Avion ("F-86", "Militar", "2020", "2", "30", "2");
console.log(f86);
console.table(f86);
f86.takeoff();
f86.float();
f86.land();