class Avion {
  /* Constructor de la clase. Permite establecer los valores de sus propiedades
   * al crear una instancia */
  constructor(model, seating, destination, speed, weight) {
    this.model = model;
    this.seating = seating;
    this.destination = destination;
    this.speed = speed;
    this.weight = weight;
  }

  // Método que muestra la información del avión.
  showInfo() {
    console.log(`Avión: ${this.model}`);
    console.log(`Asientos: ${this.seating}`);
    console.log(`Velocidad: ${this.speed} km/h`);
    console.log(`Peso: ${this.weight} kg.`);
  }

  // Método que saluda a los pasajeros.
  greet() {
    console.log(`Bienvenidos al avión ${this.model}.`);
    console.log(`Destino: ${this.destination}. ¡Buen viaje!`);
  }

  // Método que comienza el despegue.
  takeOff() {
    console.log(`Comienza el despegue...`);

    console.log(
      `Despegue finalizado, se ha alcanzado una velocidad de ${this.speed} km/h.`
    );
  }

  // Método para aterrizar.
  land() {
    console.log("Disminuyendo velocidad...");
    console.log("Aterrizaje exitoso.");
  }
}

// Creo una instancia de la clase Avion.
const a340 = new Avion("a340", 380, "Qatar", 1040, 380000);

console.log("* AVIÓN A340 *");
a340.greet();
a340.takeOff();
a340.land();

// Creo otra instancia de la clase Avion.
const a319 = new Avion("a319", 300, "Egipto", 1200, 300000);

console.log("\n* AVIÓN A319 *");
a319.greet();
a319.takeOff();
a340.land();
