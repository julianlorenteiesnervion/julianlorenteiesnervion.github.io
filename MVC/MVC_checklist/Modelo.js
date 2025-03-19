class Modelo {

    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    eliminarTarea(id) {
        this.tareas = this.tareas.filter(tarea => tarea.getId() != id);
    }
    
}