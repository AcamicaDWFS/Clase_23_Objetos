/***************************************************************************************************
 * Name: ARRAYS_InJavascript
 * Author:
 * Description: This script tests arrays.
 * *************************************************************************************************
 * LastModifiedBy     |     LastModifiedDate     |     Modification Id     |     Change description
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Fanny Becerra      |     02-07-2020          |     v0.1                |     Beta version
 */

/**  @author:      Fanny Becerra.
 *   @param:       None.
 *   @return:      None.
 *   @description: this function returns an array.
 */
class Perro {
    constructor(name, status) {
        this.name = name;
        this.status = status;
        //this.status = ['En adopción', 'Proceso de adopción', 'Adoptado'];
    }
    modificar() {
        let dogStatus = prompt('Ingrese 0 para modificar el estatus a \'En adopción\', 1 para \'Proceso de adopción\' o 3 para \'Adoptado\': ');
        let dogNum = parseInt(dogStatus);
        if (!isNaN(dogNum) && dogNum == 1) {
            this.status = 'En adopción';
        } else if (!isNaN(dogNum) && dogNum == 2) {
            this.status = 'Proceso de adopción';
        } else if (!isNaN(dogNum) && dogNum == 3) {
            this.status = 'Adoptado';
        } else if (userInput != null) {
            alert("Ingresaste un valor no válido.");
            modificar();
        }
    }
    informar() {
        alert('Estatus actual: ' + this.status);
    }
}

let perritoCreado;

function crear() {
    let name = prompt('Ingrese un nombre para el perrito.');
    perritoCreado = new Perro(name, 'En adopción');
    alert('Se ha creado el perrito con el nombre ' + perritoCreado.name + ' y con status ' + perritoCreado.status + '.');
    let changeStatus = prompt('Si desea modificar el status actual, ingrese 1.');
    if (changeStatus == 1) {
        perritoCreado.modificar();
    }
    perritoCreado.informar();
}