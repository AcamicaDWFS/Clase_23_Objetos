class Dog{
    constructor(value1, value2, value3, value4,value5,value6, value7){
        this.race = value1;
        this.name = value2;
        this.age  = value3;
        this.adoptionState = value4; //En adopcion, Proceso de adopcion, Adoptado
        this.size = value5; //Pequeño, mediano, grande
        this.weigth = value6;
        this.otherFeatures = value7;
    }
    updateAdoptionState(value){
        this.adoptionState = value;
    }
    informAdoptionState(){
        return this.adoptionState;
    }
}

/*
let dog1 = new Dog("mestizo","sin nombre",2, "En adopcion", "Pequeño", 5, "xxxxx");
console.table(dog1);
dog1.updateAdoptionState("Proceso de adopcion");
console.table(dog1);
console.info(dog1.informAdoptionState());*/

let dogs = new Array();
var result = true;
var iCont = 0;

while(result){
    let race = prompt("Captura la raza del perro: ");
    let name = prompt("Captura el nombre del perro(si tiene uno): ");
    let age = prompt("Captura la edad del perro: ");
    let size = prompt("Captura el tamaño del perro(pequeño/mediano/grande): ");
    let weigth = prompt("Captura el peso del perro: ");
    let state = prompt("Captura el estado de adopcion(1. En adopcion, 2. Proceso de adopcion, 3. Adoptado): ");
    let comment = prompt("Captura algun comentario adicional: ");
    dogs[iCont] = new Dog(race, name, age, state, size, weigth, comment);
    iCont++;
    result = window.confirm("Quieres agregar otro perro?");
}


/*dogs[1] = new Dog("race", "dog1", 2, 1, "pequeño", 5, "comment");
dogs[2] = new Dog("race", "dog2", 3, 2, "mediano", 10, "comment");
dogs[3] = new Dog("race", "dog3", 4, 3, "grande", 15, "comment");

dogs[4] = new Dog("race", "dog4", 2, 1, "pequeño", 5, "comment");
dogs[5] = new Dog("race", "dog5", 3, 2, "mediano", 10, "comment");
dogs[6] = new Dog("race", "dog6", 4, 3, "grande", 15, "comment");*/

console.table(dogs);

const enAdopcion = dogs.filter(dog => dog.adoptionState == 1);
console.info("En adopcion");
console.table(enAdopcion);

const enProceso = dogs.filter(dog => dog.adoptionState == 2);
console.info("En proceso de adopcion");
console.table(enProceso);

const Adoptado = dogs.filter(dog => dog.adoptionState == 3);
console.info("Adoptados");
console.table(Adoptado);