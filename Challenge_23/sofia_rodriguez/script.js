class Fruta {
    constructor(nombre, sabor, peso, color) {
        this.nombre = nombre;
        this.sabor = sabor;
        this.peso = peso;
        this.color = color;
    }

    informacion(){
        alert(`La ${this.nombre} tiene un sabor ${this.sabor}, su peso es de ${this.peso} y su color es ${this.color}.`);
    }
}

let manzanaRoja = new Fruta ('manzana roja' , 'dulce', '300 gr.', 'rojo');
let uvaMorada = new Fruta ('uva' , 'dulce', '10 gr.', 'morado');
let manzanaVerde = new Fruta ('manzana verde','acido', '300 gr.', 'verde');

function infoFrutas () {
    let prompFruta = prompt('Escribe manzana roja, uva morada o manzana verde para saber más de ellas');
    switch (prompFruta) {
        case "manzana roja":
            manzanaRoja.informacion();
            //infoFrutas_2 (manzanaRoja.nombre , manzanaRoja.sabor , manzanaRoja.peso , "verde");
            break;
        case "uva morada":
            uvaMorada.informacion();
            break;
        case "manzana verde":
            manzanaVerde.informacion();
            break;
        default:
            alert("No ingresaste un valor valido")
    }
}


function infoFrutas_2 (nombre, sabor, peso, color) {
    alert(`La ${nombre} tiene un sabor ${sabor}, su peso es de ${peso} y su color es ${color}.`);
}