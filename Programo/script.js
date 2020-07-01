
//[3, "8", -10, 23, 19, -4, -14, 27].filter(x => typeof (x) === "number");

// [3, -10, 23, 19, -4, -14, 27];
let arreglito = [3, 8, -10, 23, 19, -4, -14, 27];

arreglito.filter(x => typeof (x) === "number").sort((a, b) => b - a);

console.info("arreglito: " + arreglito);
console.info("areglito filter:" + arreglito.filter(x => typeof (x) === "number"));
console.info("arreglito: " + arreglito);
console.info("areglito sort arrow function:" + arreglito.filter(x => typeof (x) === "number").sort((a, b) => b -a));
console.info("arreglito sort normal: " + arreglito.sort());

// Objeto
let car = {
    type:  "Tsuru",
    brand: "Nissan",
    color: "Red",
    year: "2006",
    acelerate: function () {
        console.info("Acelerar");
    }
}

console.info("Car: ", car);
console.table(car);

console.info("color car: ", car.color);
car.acelerate();

/*Agregar una nueva propiedad*/
car.numeroPuertas = 2;
console.table(car);

/*Llamar una propiedad*/
car.brand = "Ferrari";
console.table(car);

/*Agregar un nuevo método*/
car.frenar = function () {
    console.warn("Cuidad estoy frenando...");
};

/*Llamar a un método*/
console.info("Car: ", car);
car.acelerate();
car.frenar();

/*clases*/
class Car {

    constructor(type, brand, color, year) {
        this.type = type;
        this.brand = brand;
        this.color = color;
        this.year = year;
    }

    acelerar(carType) {
        console.info("Acelerar " + carType);
    }

    getType() {
        return this.type;
    }

    setType(tipo) {
        this.type = type;s
    }


}

/* La siguiente propiedad se denomina estática, este tipo de 
    propiedades pueden existir sin crear una variable de tipo
    Car. Por ejemplo Math.PI.
    No se pueden agregar nuevas propiedades a una clase, estas 
    tienen tienen que agregarse en la definición de la clase.*/
Car.nuevaPropiedad = 1;
console.info("Car.nuevaPropiedad: ", Car.nuevaPropiedad);

/* La siguiente acción de la clase Car se denomina estática. Se
    puede ahcer uso de la función cerrarPuertas sin crear una
    variable de tipo Car*/
Car.cerrarPuertas = function () {
    console.info("Cerrando puertas..");
};

Car.cerrarPuertas();
console.log(Car);

let tsuru = new Car("Tsuru", "Nissan", "Red", "2006");
let ferrari = new Car("F40", "Ferrari", "Amarillo", "2020");


console.table(tsuru);
console.table(ferrari);

tsuru.acelerar("tsuru");
console.info("tipo de carro: ", tsuru.getType());

ferrari.acelerar("ferrari");
console.info("tipo de carro: ", ferrari.getType());

/* Herencia */
class Sedan extends Car {
    constructor(type, brand, color, year, engine) {
        super(type, brand, color, year);  // Llama al constructor de la clase padre que es Car
        this.engine = engine;             // Nueva propiedad para la clase Sedan
    }

    encenderLuces() {
        console.log("Encender luces");
    }
    
}

class Engine {
    constructor(numeroCilindros, transmision, potencia) {
        this.numeroCilindros = numeroCilindros;
        this.transmision = transmision;
        this.potencia = potencia;
    }
}

let motorJetta = new Engine(4, "automatica", "150hp");
let jetta = new Sedan("Tsuru", "Nissan", "Red", "2006", motorJetta);

console.table(motorJetta);
console.table(jetta);

let cars = [tsuru, ferrari, jetta];
console.table(cars);
