class Tarea {

    constructor(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.estado = false;
    }

    // Getters
    getId() {
        return this.id;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getFecha() {
        return this.fecha;
    }

    getEstado() {
        return this.estado;
    }

    // Setters
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    setFecha(fecha) {
        this.fecha = fecha;
    }

    setEstado(estado) {
        this.estado = estado;
    }

}