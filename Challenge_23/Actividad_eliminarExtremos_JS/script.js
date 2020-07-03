let arregloNum = [];
let dato;

function eliminarDatos(){
    do {
        dato = prompt("Ingrese un número:  \n\n O teclee 0 para terminar")

        if (isNaN(dato)){
            alert("Valor inválido");
        }
        else {
            arregloNum.push( parseInt( dato ) );
        }
    }
    while (dato != 0) ;

    arregloNum.pop();
    console.log(arregloNum);
    arregloNum.sort();
    console.log(arregloNum);
    arregloNum.sort(function(a, b) {
        return a - b;
      });
    console.log(arregloNum);
/*
    console.log("Eliminando valores...");
    arregloNum.shift();
    arregloNum.pop();
    console.log(arregloNum);*/
}

function comparar(a, b) {
    return a - b;
  }

eliminarDatos();
