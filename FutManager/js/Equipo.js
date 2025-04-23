class Equipo {

    // Constructor de la clase Equipo que inicializa los atributos del equipo
    constructor(id, nombre, ciudad, estadio) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.estadio = estadio;
    }

    // Devuelve el id del equipo
    getId() {
        return this.id;
    }

    // Devuelve el nombre del equipo
    getNombre() {
        return this.nombre;
    }

    // Devuelve la ciudad del equipo
    getCiudad() {
        return this.ciudad;
    }

    // Devuelve el estadio del equipo
    getEstadio() {
        return this.estadio;
    }

}