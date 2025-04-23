class Jugador {

    // Constructor de la clase Jugador que inicializa los atributos del jugador
    constructor(id, nombre, posicion, annoNacimiento, equipo) {
        this.id = id;
        this.nombre = nombre;
        this.posicion = posicion;
        this.annoNacimiento = annoNacimiento;
        this.equipo = equipo;
    }

    // Devuelve el id del jugador
    getId() {
        return this.id;
    }

    // Devuelve el nombre del jugador
    getNombre() {
        return this.nombre;
    }

    // Devuelve la posición del jugador
    getPosicion() {
        return this.posicion;
    }
    
    // Devuelve el año de nacimiento del jugador
    getAnnoNacimiento() {
        return this.annoNacimiento;
    }

    // Devuelve el equipo del jugador
    getEquipo() {
        return this.equipo;
    }

    // Establecer la posición del jugador
    setPosicion(posicion) {
        this.posicion = posicion;
    }

    // Establecer el equipo del jugador
    setEquipo(equipo) {
        this.equipo = equipo;
    }

}