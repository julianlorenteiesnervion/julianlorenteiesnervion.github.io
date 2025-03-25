class Controlador {

    static id = 0;

    constructor() {
        this.vista = new Vista();
        this.modelo = new Modelo();
    }

    agregarTarea(descripcion, fecha) {
        let tarea = new Tarea(Controlador.id, descripcion, fecha);
        this.modelo.agregarTarea(tarea);
        Controlador.id++;

        this.mostrarTareas();
    }

    mostrarTareas() {
        this.vista.renderizarTodasTareas(this.modelo.getTareas());
    }

    cambiarEstado(id) {
        const tarea = this.modelo.getTareas().find(tarea => tarea.getId() === id);
        tarea.setEstado(!tarea.getEstado());
        this.mostrarTareas();
    }

}