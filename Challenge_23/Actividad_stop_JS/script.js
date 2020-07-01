let arregloNum = [];

do {
    var num = prompt("Ingrese un número:  \n\n O teclee stop para terminar") ;
    arregloNum.push(num);
}
while (num != "stop") ;

arregloNum.pop();
console.log(arregloNum);
