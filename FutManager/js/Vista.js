class Vista {

    // Muestra estadísticas generales de los equipos y jugadores
    mostrarMenuInicio() {
        const menu = document.getElementById('menu_drch');
        const equipos = controller.modeloEquipo.obtenerEquipos();
        const jugadores = controller.modeloJugador.obtenerJugadores();
        
        // Calcular estadísticas
        const totalEquipos = equipos.length;
        const totalJugadores = jugadores.length;
        const jugadoresPorEquipo = totalEquipos > 0 ? (totalJugadores / totalEquipos).toFixed(1) : 0;
        
        // Obtener el equipo con más jugadores
        let equipoConMasJugadores = { nombre: "Ninguno", cantidad: 0 };
        if (totalEquipos > 0) {
            equipos.forEach(equipo => {
                const cantidad = jugadores.filter(j => Number(j.getEquipo()) === equipo.getId()).length;
                if (cantidad > equipoConMasJugadores.cantidad) {
                    equipoConMasJugadores = {
                        nombre: equipo.getNombre(),
                        cantidad: cantidad
                    };
                }
            });
        }
        
        // Obtener distribución por posición
        const posiciones = controller.obtenerPosiciones();
        const jugadoresPorPosicion = {};
        posiciones.forEach(pos => {
            jugadoresPorPosicion[pos] = jugadores.filter(j => j.getPosicion() === pos).length;
        });
        
        document.title = "FutManager - Inicio";
        
        menu.innerHTML = `
            <div class="stats-container">
                <h1>Bienvenido a FutManager</h1>
                <h3>Estadísticas generales</h3>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">${totalEquipos}</div>
                        <div class="stat-label">Equipos registrados</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${totalJugadores}</div>
                        <div class="stat-label">Jugadores registrados</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${jugadoresPorEquipo}</div>
                        <div class="stat-label">Jugadores por equipo (promedio)</div>
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>Equipo con más jugadores</h4>
                    <div class="highlight-stat">
                        ${equipoConMasJugadores.nombre} (${equipoConMasJugadores.cantidad} jugadores)
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>Distribución por posición</h4>
                    <div class="position-grid">
                        ${posiciones.map(pos => `
                            <div class="position-item">
                                <div class="position-name">${pos}</div>
                                <div class="position-bar-container">
                                    <div class="position-bar" style="width: ${totalJugadores > 0 ? (jugadoresPorPosicion[pos]/totalJugadores*100) : 0}%"></div>
                                </div>
                                <div class="position-count">${jugadoresPorPosicion[pos]}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="stats-section">
                    <h4>Últimos equipos añadidos</h4>
                    <ul class="recent-list">
                        ${equipos.slice(-3).reverse().map(equipo => `
                            <li>
                                <span class="recent-item">${equipo.getNombre()}</span>
                                <span class="recent-info">${equipo.getCiudad()} - ${equipo.getEstadio()}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    /* Muestra un formulario para agregar equipos, una lista de equipos existentes
    y su cantidad de jugadores */
    mostrarMenuEquipos() {
        const menu = document.getElementById('menu_drch');

        document.title = "FutManager - Equipos";

        menu.innerHTML = `
            <div class="form-container">
                <h2 class="form-title">Agregar Nuevo Equipo</h2>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="nombre_equipo">Nombre del Equipo</label>
                        <input type="text" id="nombre_equipo" class="form-input" placeholder="Real Betis" required>
                    </div>
                    <div class="form-group">
                        <label for="nombre_ciudad">Ciudad</label>
                        <input type="text" id="nombre_ciudad" class="form-input" placeholder="Sevilla" required>
                    </div>
                    <div class="form-group">
                        <label for="nombre_estadio">Estadio</label>
                        <input type="text" id="nombre_estadio" class="form-input" placeholder="Benito Villamarín" required>
                    </div>
                </div>
                <button class="form-submit" onclick="controller.agregarEquipo(
                    document.getElementById('nombre_equipo').value,
                    document.getElementById('nombre_ciudad').value,
                    document.getElementById('nombre_estadio').value
                )">
                    <i class="icon-plus"></i> Agregar Equipo
                </button>
            </div>
            <div class="list-header">
                <h3>Listado de Equipos</h3>
            </div>
            <ul id="lista"></ul>`;
    }

    // Muestra los equipos con su información y el número de jugadores
    mostrarEquipos(equipos, jugadores) {
        const lista = document.getElementById('lista');
        lista.innerHTML = "";
    
        equipos.forEach(equipo => {
            // Contar jugadores del equipo actual
            const cantidad = jugadores.filter(j => Number(j.getEquipo()) === equipo.getId()).length;
    
            lista.innerHTML += `
                <li>
                    <span class="nombre">${equipo.getNombre()}</span><br>
                    <span class="info">Ciudad: ${equipo.getCiudad()}</span><br>
                    <span class="info">Estadio: ${equipo.getEstadio()}</span><br>
                    <span class="info"><strong>Cantidad de jugadores:</strong> ${cantidad}</span>
                    <div class="button-group">
                        <button onclick="controller.eliminarEquipo(${equipo.getId()})" class="eliminar">Eliminar</button>
                    </div>
                </li>`;
        });
    }    

    // Muestra los jugadores con su información
    mostrarJugadores(jugadores) {
        const lista = document.getElementById('lista');
        lista.innerHTML = "";

        jugadores.forEach(jugador => {
            lista.innerHTML += `
                <li>
                    <span class="nombre">${jugador.getNombre()}</span><br>
                    <span class="info">Posición: ${jugador.getPosicion()}</span><br>
                    <span class="info">Año de nacimiento: ${jugador.getAnnoNacimiento()}</span><br>
                    <span class="info">Equipo: ${controller.obtenerNombreEquipo(jugador.getEquipo())}</span>
                    <div class="button-group">
                        <button onclick="controller.modificarJugador(${jugador.getId()})" class="modificar">Modificar</button>
                        <button onclick="controller.eliminarJugador(${jugador.getId()})" class="eliminar">Eliminar</button>
                    </div>
                </li>`;
        });
    }

    // Muestra un formulario para agregar jugadores y los controles de filtrado
    mostrarMenuJugadores() {
        const menu = document.getElementById('menu_drch');
        const equipos = controller.obtenerEquiposParaSelect();

        document.title = "FutManager - Jugadores";

        let selectPosicion = '<select id="nombre_posicion" class="form-select" required><option value="">Seleccione posición</option>';
        controller.obtenerPosiciones().forEach(pos => {
            selectPosicion += `<option value="${pos}">${pos}</option>`;
        });
        selectPosicion += '</select>';

        let selectEquipos = '<select id="id_equipo" class="form-select" required><option value="">Seleccione un equipo</option>';
        equipos.forEach(equipo => {
            selectEquipos += `<option value="${equipo.id}">${equipo.nombre}</option>`;
        });
        selectEquipos += '</select>';

        menu.innerHTML = `
            <div class="form-container">
                <h2 class="form-title">Agregar Nuevo Jugador</h2>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="nombre_jugador">Nombre del Jugador</label>
                        <input type="text" id="nombre_jugador" class="form-input" placeholder="Lionel Messi" required>
                    </div>
                    <div class="form-group">
                        <label for="nombre_posicion">Posición</label>
                        ${selectPosicion}
                    </div>
                    <div class="form-group">
                        <label for="anno_nacimiento">Año de Nacimiento</label>
                        <input type="number" id="anno_nacimiento" class="form-input" placeholder="1987" min="1900" max="${new Date().getFullYear()}" required>
                    </div>
                    <div class="form-group">
                        <label for="id_equipo">Equipo</label>
                        ${selectEquipos}
                    </div>
                </div>
                <button class="form-submit" onclick="controller.agregarJugador(
                    document.getElementById('nombre_jugador').value,
                    document.getElementById('nombre_posicion').value,
                    document.getElementById('anno_nacimiento').value,
                    document.getElementById('id_equipo').value
                )">
                    <i class="icon-plus"></i> Agregar Jugador
                </button>
            </div>
            <div class="list-header">
                <h3>Listado de Jugadores</h3>
                <div class="filter-buttons">
                    <button class="filter-btn" onclick="controller.abrirModalFiltro()">
                        <i class="icon-filter"></i> Filtrar
                    </button>
                    <button id="btn-limpiar-filtros" class="filter-btn secondary" onclick="controller.limpiarFiltros()" style="display: none;">
                        <i class="icon-clear"></i> Limpiar
                    </button>
                </div>
            </div>
            <ul id="lista"></ul>`;
    }
}
