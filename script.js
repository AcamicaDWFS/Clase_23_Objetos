class Aviones {
    constructor(nombre, longitud, numeroDeAsientos) {
        this.nombre = nombre;
        this.longitud = longitud;
        this.numeroDeAsientos =  numeroDeAsientos;}
    //instrucciones
    despegar(){
        console.log('despegando');
    }
    aterrizar(){
        console.log('aterrizando');
    } 
}

let dreamliner = new Aviones
//Propiedades
dreamliner.nombre = "789-9";
dreamliner.longitud = "62.8 metros";
dreamliner.numeroDeAsientos = 274;
dreamliner.despegar();
dreamliner.aterrizar();

let airbus = new Aviones ("Airbus A380", "72.73 metros", 555);

let boeing = new Aviones
//Propiedades
boeing.nombre = "Boeing 747-300";
boeing.longitud = "68.6 metros";
boeing.numeroDeAsientos = 660;
boeing.despegar();
boeing.aterrizar();
