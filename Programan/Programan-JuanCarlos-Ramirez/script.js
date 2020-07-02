
class Dog {
    constructor(race, size, color, age, caracteristic, adoption) {
        this.race = race;
        this.size = size;
        this.color = color;
        this.age = age;
        this.caracteristic = caracteristic;
        this.adoption = adoption;
    };

    adoptionState() {
        console.log("El estado del perro es: " + this.adoption);
    };
}

function capture() {
    var raceCapture = document.getElementById("race").value;
    var sizeCapture = document.getElementById("size").value;
    var colorCapture = document.getElementById("color").value;
    var ageCapture = document.getElementById("age").value;
    var caracteristicCapture = document.getElementById("caracteristica").value;
    var adoptionCapture = document.getElementById("estado").value;
    newDog = new Dog(raceCapture, sizeCapture, colorCapture, ageCapture, caracteristicCapture, adoptionCapture);
    console.table(newDog);
    newDog.adoptionState();
    showArray();
}
var perros = [];
function showArray() {
    perros.push(newDog);
    document.getElementById("tabla").innerHTML += '<tbody><td>' + newDog.race + '</td><td>' + newDog.size + '</td><td>' + newDog.color + '</td><td>' + newDog.age + '</td><td>' + newDog.caracteristic + '</td><td>' + newDog.adoption + '</td></tbody>';
}