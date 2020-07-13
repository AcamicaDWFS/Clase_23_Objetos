//raza, tamaño, edad, sexo, nombre, discapacidades, color, vacunas, esterilización, adopción

class Perrera {
    constructor(raza, tamaño, edad, sexo, nombre, color, adopcion) {
        this.raza = raza;
        this.tamaño = tamaño;
        this.edad = edad;
        this.sexo = sexo;
        this.nombre = nombre;
        this.color = color;
        this.adopcion = adopcion;
    }

    modificar_adopcion() {
        this.adopcion = prompt(`Modifica el estado de adopcion de ${this.nombre}: Adoptado, En Proceso de Adopción o En adopción`);
    }

    informar_adopcion() {
        alert(`${this.nombre} está ${this.adopcion}`);
    }
}

/*function prueba() {
    let perro_1 = new Perrera('chihuahua','pequeño','3años','hembra','Panchita','no tiene','caramelo','completas','esterilizada', '');
    perro_1.modificar_adopcion();
    perro_1.informar_adopcion();
}*/

function registrar_perros(){
    let objetos = new Array();
    let perro;
    let nuevo_ingreso;
    do{
        perro = new Perrera( prompt('Ingresa la raza del perro'), prompt('Ingresa el tamaño del perro'), 
        prompt('Ingresa la edad del perro'), prompt('Ingresa el sexo del perro'), prompt('Ingresa el nombre del perro'),
        prompt('Ingresa el color del perro'),'');

        alert(`Acabas de ingresar la siguiente información: \n Raza: ${perro.raza} \n Tamaño: ${perro.tamaño} \n ` +
        `Edad: ${perro.edad} \n Sexo: ${perro.sexo} \n Nombre: ${perro.nombre} \n Color: ${perro.color}`);

        perro.modificar_adopcion();
        perro.informar_adopcion();

        objetos.push(perro);

        nuevo_ingreso = window.confirm("¿Quieres ingresar otro perro?");
        console.log(nuevo_ingreso);
    } while (nuevo_ingreso == true);

    console.table(objetos);

    let adopciones_totales = objetos.filter(caracteristicas => caracteristicas.adopcion == "adoptado");
    console.table(adopciones_totales);

    adopciones_totales = objetos.filter(caracteristicas => caracteristicas.adopcion == "en adopcion");
    console.table(adopciones_totales);

    adopciones_totales = objetos.filter(caracteristicas => caracteristicas.adopcion == "en proceso de adopcion");
    console.table(adopciones_totales);


}
