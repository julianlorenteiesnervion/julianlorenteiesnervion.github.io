class ModeloEquipo {

    constructor() {
        this.listaEquipos = [];
    }

    // Obtener todos los equipos de la lista
    obtenerEquipos() {
        this.obtenerDeLocalStorage();
        return this.listaEquipos;
    }    

    // Agregar un equipo a la lista
    agregarEquipo(equipo) {
        this.obtenerDeLocalStorage();
        let res = 0;

        // Verifica si el equipo ya existe en la lista
        if (!this.listaEquipos.some(e => e.getId() === equipo.getId())) {
            if (equipo.getNombre().trim() === "") {
                res = 1; // Nombre vacío
            } else if (equipo.getCiudad().trim() === "") {
                res = 2; // Ciudad vacía
            } else if (equipo.getEstadio().trim() === "") {
                res = 3; // Estadio vacío
            } else if (this.listaEquipos.some(e => e.getNombre().toLowerCase() === equipo.getNombre().toLowerCase())) {
                res = 4; // Nombre de equipo ya existe
            }

            // Si el equipo no existe y los campos no están vacíos, lo agrega a la lista
            if (res === 0) {
                this.listaEquipos.push(equipo);
                this.subirALocalStorage();
            }
        }

        return res;
    }

    // Eliminar un equipo de la lista mediante su id
    eliminarEquipo(id) {
        this.obtenerDeLocalStorage();
        // Filtra la lista de equipos para eliminar el equipo con el id especificado
        this.listaEquipos = this.listaEquipos.filter(equipo => equipo.getId() !== id);
        this.subirALocalStorage();
    }

    // Carga en el array listaEquipos los equipos que hay en el localStorage
    // Si no hay nada en el localStorage, se carga un array vacío
    obtenerDeLocalStorage() {
        const datos = JSON.parse(localStorage.getItem('equipos')) || [];
        this.listaEquipos = datos.map(e => new Equipo(e.id, e.nombre, e.ciudad, e.estadio));
    }

    // Sube la lista de equipos al localStorage
    // Se utiliza después de agregar o eliminar un equipo
    subirALocalStorage() {
        localStorage.setItem('equipos', JSON.stringify(this.listaEquipos));
    }

    // Devuelve el id del último equipo en la lista
    obtenerUltimaId() {
        this.obtenerDeLocalStorage();
        // Si no hay equipos en la lista, devuelve 0
        if (this.listaEquipos.length === 0) {
            return 0;
        }
        // Devuelve el id del último equipo en la lista
        return this.listaEquipos[this.listaEquipos.length - 1].getId();
    }

    // Obtener equipo mediante su id
    obtenerEquipoPorId(id) {
        this.obtenerDeLocalStorage();
        // Busca el equipo en la lista mediante su id
        const equipo = this.listaEquipos.find(equipo => equipo.getId() === id);
        return equipo || 0; // Devuelve el equipo si lo encuentra, o 0 si no lo encuentra
    }

}