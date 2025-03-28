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
            <td><button onclick='controller.cambiarEliminado(${tarea.getId()})'>Eliminar</button></td>
        </tr>
        `
    }

    limpiarLista() {
        this.lista.innerHTML = '';
    }

    renderizarTodasTareas(tareas) {

        let tareasRenderizadas = 0;

        this.limpiarLista();

        this.lista.innerHTML += `
        <thead>
            <tr id='cabecera'>
                <th>ID</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Estado</th>
            </tr>
        </thead>
        `;

        tareas.forEach(tarea => {
            if (!tarea.getEliminada()) {
                this.renderizarTarea(tarea);
                tareasRenderizadas++;
            }
        });

        if (tareasRenderizadas === 0) {
            this.lista.innerHTML += `
            <tr>
                <td colspan='4'>No hay tareas para mostrar</td>
            </tr>
            `;
        }
    }
}