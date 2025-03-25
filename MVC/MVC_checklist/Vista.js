class Vista {

    constructor() {
        this.lista = document.getElementById('lista');
    }

    renderizarTarea(tarea) {
        this.lista.innerHTML += `
        <tr id='tarea-${tarea.getId()}'>
            <td>${tarea.getId()}</td>
            <td>${tarea.getDescripcion()}</td>
            <td>${tarea.getFecha()}</td>
            <td>
                <p class="boton" onclick='controller.cambiarEstado(${tarea.getId()})'>
                    ${tarea.getEstado() ? 'Completada' : 'Sin completar'}
                </p>
            </td>
        </tr>
        `
    }

    limpiarLista() {
        this.lista.innerHTML = '';
    }

    renderizarTodasTareas(tareas) {
        this.limpiarLista();

        this.lista.innerHTML += `
        <thead>
            <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Estado</th>
            </tr>
        </thead>
        `;

        tareas.forEach(tarea => {
            this.renderizarTarea(tarea);
        });
    }
}