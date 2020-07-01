let arregloNumPares = [];
let arregloNumImpares = [];
let arregloCaracter = [];
let dato;

function separarDatos(){
    do {
        dato = prompt("Ingrese un número:  \n\n O teclee 0 para terminar")

        if (isNaN(dato)){
            arregloCaracter.push(dato);
        }
        else {
            var dato2 = parseInt(dato);
    
            if (dato2%2 === 0) {
                arregloNumPares.push(dato2);
            }
            else {
                arregloNumImpares.push(dato2);
            }
        }
    }
    while (dato != 0) ;
    
    arregloNumPares.pop();
    console.log(arregloNumPares);
    console.log(arregloNumImpares);
    console.log(arregloCaracter);
}

separarDatos();
