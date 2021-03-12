class Dog {
  constructor(name, color, breed, status) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.status = status;
  }

  setName(name) {
    this.name = name;
  }

  setColor(color) {
    this.color = color;
  }

  setBreed(breed) {
    this.breed = breed;
  }

  setStatus(status) {
    switch (status) {
      case 1:
        this.status = "En adopción";
        break;
      case 2:
        this.status = "En proceso de adopción";
        break;
      case 3:
        this.status = "Adoptado";
    }
  }

  getStatus() {
    return this.status;
  }

  showStatus() {
    alert(`${this.name} está ${this.status.toLowerCase()}`);
  }

  showInfo() {
    console.log(
      `Nombre del perro: ${this.name}\n` +
        `Color: ${this.color}\n` +
        `Raza: ${this.breed}\n` +
        `Estado: ${this.status}`
    );
  }
}

function showMenu() {
  let choice;

  do {
    choice = prompt(
      "Ingresa una opción:\n" +
        "1. Registrar perro.\n" +
        "2. Mostrar perros.\n" +
        "3. Salir.\n"
    );

    choice = parseInt(choice);

    if (isNaN(choice)) {
      alert(warningMsg);
      continue;
    }

    switch (choice) {
      case 1:
        getData();
        break;
      case 2:
        showDogsReportMenu();
        break;
      case 3:
        break;
      default:
        alert(invalidInputMsg);
    }
  } while (choice != 3);
}

function showDogsReportMenu() {
  let choice;
  let validInput = true;

  if (dogs.length === 0) {
    alert("Aún no hay perros registrados.");
    return;
  }

  do {
    choice = prompt(
      "Ingresa un tipo de reporte:\n" +
        "1. Todos los perros.\n" +
        "2. Todos los perros en adopción.\n" +
        "3. Todos los perros en proceso de adopción.\n" +
        "4. Todos los perros adoptados."
    );

    choice = parseInt(choice);

    if (isNaN(choice)) {
      alert(warningMsg);
      break;
    }

    switch (choice) {
      case 1:
        showAllDogs();
        break;
      case 2:
        showDogsForAdopt();
        break;
      case 3:
        showDogsAdoptionProcess();
        break;
      case 4:
        showDogsAdopted();
        break;
      default:
        alert(invalidInputMsg);
        validInput = false;
    }
  } while (!validInput);
}

function getData() {
  let dog = new Dog();

  dog.setName(prompt("Ingresa el nombre del perro:"));
  dog.setColor(prompt("Ingresa el color del perro:"));
  dog.setBreed(prompt("Ingresa la raza del perro:"));
  dog.setStatus(getDogStatus());

  dogs.push(dog);
}

function getDogStatus() {
  let choice;
  let validInput = false;

  do {
    choice = prompt(
      "Ingresa el estado del perro:\n" +
        "1. En adopción.\n" +
        "2. En proceso de adopción.\n" +
        "3. Adoptado."
    );

    choice = parseInt(choice);

    if (isNaN(choice)) {
      alert(warningMsg);
    } else if (choice < 0 || choice > 3) {
      alert(invalidInputMsg);
    } else {
      return choice;
    }
  } while (!validInput);
}

// ***************************************
// * FUNCIONES QUE MUESTRAN LOS REPORTES *
// ***************************************
function showAllDogs() {
  for (let dog of dogs) {
    dog.showInfo();
  }
}

function showDogsForAdopt() {
  const dogsForAdoption = dogs.filter(
    (dog) => dog.getStatus() === "En adopción"
  );

  for (let dog of dogsForAdoption) {
    dog.showInfo();
  }
}

function showDogsAdoptionProcess() {
  const dogsInProcess = dogs.filter(
    (dog) => dog.getStatus() === "En proceso de adopción"
  );

  for (let dog of dogsInProcess) {
    dog.showInfo();
  }
}

function showDogsAdopted() {
  const dogsAdopted = dogs.filter((dog) => dog.getStatus() === "Adoptado");

  for (let dog of dogsAdopted) {
    dog.showInfo();
  }
}

// Mensajes de advertencia.
const warningMsg = "Sólo se aceptan carácteres numéricos.";
const invalidInputMsg = "La opción elegida no existe.";

// Arreglo que almacena objetos de tipo perro.
const dogs = [];

// Inicio del programa.
showMenu();
