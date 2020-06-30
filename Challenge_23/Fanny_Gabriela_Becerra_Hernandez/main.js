class Aviones {
    acelerar() {
        this.velocidad = (isNaN(this.velocidad)) ? this.aceleracion : this.velocidad + this.aceleracion;
    }

    frenar() {
        this.velocidad = this.velocidad - this.desaceleracion;
    }

    estadoVelocidad() {
        return "La velocidad actual del " + this.nombre + " es de " + this.velocidad;
    }

    //¡Lancemos pasajeros fuera del avión para aumentar la velocidad! >:D Cada pasajero lanzado provoca una aceleración.
    disminuirPeso(pasajerosVoluntarios) {
        this.totalPasajeros = this.totalPasajeros - pasajerosVoluntarios;
        if (this.totalPasajeros < 1) {
            let velocidadActual = this.estadoVelocidad.bind(this)();
            return velocidadActual + " pero no hay suficientes sacrificios... digo, voluntarios. Tendrá que lanzarse el piloto. D:<"
        } else {
            //this.peso = this.peso - (this.pesoPromedioPasajero * pasajerosVoluntarios);
            this.velocidad = this.velocidad + (this.aceleracion * pasajerosVoluntarios);
            let velocidadActual = this.estadoVelocidad.bind(this)();
            return velocidadActual + " ya que saltaron \"voluntariamente\" " + pasajerosVoluntarios + " pasajeros. ¬u¬"
        }
    }
}

a319 = new Aviones
    //Creo las propiedades
a319.nombre = "A319"
a319.aceleracion = 10;
a319.desaceleracion = 5;
a319.pesoPromedioPasajero = 50;
a319.totalPasajeros = 100;
a319.peso = 20000;

//Acelero 3 veces
a319.acelerar();
a319.acelerar();
a319.acelerar();
//Solicito un estado de velocidad
console.log('Acelerar a319: ', a319.estadoVelocidad());
//freno 1 vez
a319.frenar();
//Solicito un estado de velocidad
console.log('Frenar a319: ', a319.estadoVelocidad());

//¡Lanzo 100 pasajeros para aumentar velocidad! >:D
console.log('100 pasajeros lanzados a319: ', a319.disminuirPeso(100));
console.log('Sin pasajeros: ', a319.estadoVelocidad());

a340 = new Aviones
    //Creo las propiedades
a340.nombre = "A340"
a340.aceleracion = 20;
a340.desaceleracion = 10;
a340.pesoPromedioPasajero = 55;
a340.totalPasajeros = 120;
a340.peso = 25000;

//Acelero 5 veces
a340.acelerar();
a340.acelerar();
a340.acelerar();
a340.acelerar();
a340.acelerar();
//Solicito un estado de velocidad
console.log('Acelerar a340: ', a340.estadoVelocidad());
//freno 1 vez
a340.frenar();
//Solicito un estado de velocidad
console.log('Frenar a340: ', a340.estadoVelocidad());

//¡Lanzo 60 pasajeros para aumentar velocidad! >:D
console.log('60 pasajeros lanzados a340: ', a340.disminuirPeso(60));
console.log('Mitad de pasajeros: ', a340.estadoVelocidad());