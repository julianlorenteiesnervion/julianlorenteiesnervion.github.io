class ModeloJugador {

    constructor() {
        this.listaJugadores = [];
    }

    // Obtener todos los jugadores de la lista
    obtenerJugadores() {
        this.obtenerDeLocalStorage();
        return this.listaJugadores;
    }

    // Agregar un jugador a la lista
    agregarJugador(jugador) {
        this.obtenerDeLocalStorage();
        let res = 0;

        // Verifica si el jugador ya existe en la lista
        if (!this.listaJugadores.some(j => j.getId() === jugador.getId())) {
            if (jugador.getNombre().trim() === "") {
                res = 1; // Nombre vacío
            } else if (jugador.getPosicion().trim() === "") {
                res = 2; // Posición vacía
            } else if (jugador.getAnnoNacimiento().trim() === "") {
                res = 3; // Año de nacimiento vacío
            } else if (jugador.getEquipo().trim() === "") {
                res = 4; // Equipo vacío
            } else if (jugador.getAnnoNacimiento() > new Date().getFullYear()) {
                res = 5; // Año de nacimiento mayor al año actual
            } else if (jugador.getAnnoNacimiento() < 1900) {
                res = 6; // Año de nacimiento menor a 1900
            }

            // Si el jugador no existe y los campos no están vacíos y cumplen con las reglas, lo agrega a la lista
            if (res === 0) {
                this.listaJugadores.push(jugador);
                this.subirALocalStorage();
            }
        }

        return res;
    }

    // Eliminar un jugador de la lista mediante su id
    eliminarJugador(id) {
        this.obtenerDeLocalStorage();

        // Filtra la lista de jugadores para eliminar el jugador con el id especificado
        this.listaJugadores = this.listaJugadores.filter(jugador => jugador.getId() !== id);
        this.subirALocalStorage();
    }

    // Actualiza la posición de un jugador mediante su id
    actualizarPosicionJugador(id, nuevaPosicion) {
        this.obtenerDeLocalStorage();

        const jugador = this.listaJugadores.find(jugador => jugador.getId() === id);
        if (jugador) {
            jugador.setPosicion(nuevaPosicion);
            this.subirALocalStorage();
        }
    }

    // Actualiza el equipo de un jugador mediante su id
    actualizarEquipoJugador(id, nuevoEquipo) {
        this.obtenerDeLocalStorage();

        const jugador = this.listaJugadores.find(jugador => jugador.getId() === id);
        if (jugador) {
            jugador.setEquipo(nuevoEquipo);
            this.subirALocalStorage();
        }
    }

    // Obtener los jugadores que pertenecen a X equipo
    obtenerJugadoresPorEquipo(equipo) {
        this.obtenerDeLocalStorage();
        // Filtra la lista de jugadores para obtener los que pertenecen al equipo especificado
        return this.listaJugadores.filter(jugador => Number(jugador.getEquipo()) === Number(equipo));
    }

    // Obtener los jugadores que pertenecen a X posición
    obtenerJugadoresPorPosicion(posicion) {
        this.obtenerDeLocalStorage();
        // Filtra la lista de jugadores para obtener los que pertenecen a la posición especificada
        return this.listaJugadores.filter(jugador => jugador.getPosicion().toLowerCase() === posicion.toLowerCase()); 
    }

    // Obtener el número de jugadores que pertenecen a X equipo
    obtenerNumeroJugadoresPorEquipo(equipo) {
        this.obtenerDeLocalStorage();
        // Devuelve el número de jugadores que pertenecen al equipo especificado
        return this.listaJugadores.reduce((contador, jugador) => Number(jugador.getEquipo()) === equipo ? contador + 1 : contador, 0);
    }

    // Carga en el array listaJugadores los jugadores que hay en el localStorage
    // Si no hay nada en el localStorage, se carga un array vacío
    obtenerDeLocalStorage() {
        const datos = JSON.parse(localStorage.getItem('jugadores')) || [];
        this.listaJugadores = datos.map(j => new Jugador(j.id, j.nombre, j.posicion, j.annoNacimiento, j.equipo));
    }    

    // Sube la lista de jugadores al localStorage
    // Se utiliza después de agregar o eliminar un jugador
    subirALocalStorage() {
        localStorage.setItem('jugadores', JSON.stringify(this.listaJugadores));
    }

    // Devuelve el id del último jugador en la lista
    obtenerUltimaId() {
        this.obtenerDeLocalStorage();
        // Si no hay jugadores en la lista, devuelve 0
        if (this.listaJugadores.length === 0) {
            return 0;
        }
        // Devuelve el id del último jugador en la lista
        return this.listaJugadores[this.listaJugadores.length - 1].getId();
    }

}