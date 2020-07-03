let arregloInicial = [];
let arreglo1 = [];
let arreglo2 = [];
let arreglo3 = [];
let dato;
let tamanio;

function dividirArreglos(){
    do {
        dato = prompt("Ingrese un número:  \n\n O teclee 0 para terminar")

        if (isNaN(dato)){
            alert("Valor inválido");
        }
        else {
            arregloInicial.push( parseInt( dato ) );
        }
    }
    while (dato != 0) ;
    console.log(arregloInicial);
    tamanioDividido = arregloInicial.length / 3;

    console.log(arregloInicial.length);
    console.log(tamanioDividido);
    console.log(tamanioDividido*2);

    //con el splice corta el arreglo

    arreglo1 = arregloInicial.slice(0, tamanioDividido );
    console.log(arreglo1);
    arreglo2 = arregloInicial.slice(tamanioDividido, tamanioDividido*2 );
    console.log(arreglo2);
    arreglo3 = arregloInicial.slice(tamanioDividido * 2 , tamanio );
    console.log(arreglo3);
    
}

dividirArreglos();
