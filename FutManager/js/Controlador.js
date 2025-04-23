class Controlador {

    constructor() {
        this.modeloEquipo = new ModeloEquipo();
        this.modeloJugador = new ModeloJugador();
        this.vista = new Vista();
    }

    /* Funciones para mostrar los menús */
    mostrarMenuInicio() {
        this.vista.mostrarMenuInicio();
    }

    mostrarMenuEquipos() {
        this.vista.mostrarMenuEquipos();
        this.mostrarEquipos();
    }

    mostrarMenuJugadores() {
        this.vista.mostrarMenuJugadores();
        this.mostrarJugadores();
    }

    /* Modales */
    abrirModalFiltro() {
        const selectEquipo = document.getElementById('filtroEquipo');
        const selectPosicion = document.getElementById('filtroPosicion');
        
        // Limpiar y cargar equipos
        selectEquipo.innerHTML = '<option value="">Todos los equipos</option>';
        this.modeloEquipo.obtenerEquipos().forEach(equipo => {
            const option = document.createElement('option');
            option.value = equipo.getId();
            option.textContent = equipo.getNombre();
            selectEquipo.appendChild(option);
        });
        
        // Limpiar y cargar posiciones
        selectPosicion.innerHTML = '<option value="">Todas las posiciones</option>';
        this.obtenerPosiciones().forEach(pos => {
            const option = document.createElement('option');
            option.value = pos;
            option.textContent = pos;
            selectPosicion.appendChild(option);
        });
        
        document.getElementById('modalFiltro').style.display = 'block';
    }

    cerrarModalFiltro() {
        document.getElementById('modalFiltro').style.display = 'none';
    }

    /* Funciones para manejar los equipos */
    agregarEquipo(nombre, ciudad, estadio) {
        let equipo = new Equipo(Number(this.modeloEquipo.obtenerUltimaId()) + 1, nombre, ciudad, estadio);
        const resultado = this.modeloEquipo.agregarEquipo(equipo);
    
        if (resultado === 0) {
            this.mostrarEquipos();
            this.limpiarFormularioEquipo();
            this.mostrarNotificacion("Equipo agregado correctamente", "exito");
        } else {
            const errores = {
                1: "El nombre del equipo está vacío.",
                2: "La ciudad del equipo está vacía.",
                3: "El estadio del equipo está vacío.",
                4: "El nombre del equipo ya existe."
            };
            this.mostrarNotificacion(`Error: ${errores[resultado]}`, "error");
        }
    }

    limpiarFormularioEquipo() {
        document.getElementById('nombre_equipo').value = '';
        document.getElementById('nombre_ciudad').value = '';
        document.getElementById('nombre_estadio').value = '';
        
        document.getElementById('nombre_equipo').focus();
    }
    
    eliminarEquipo(id) {
        this.modeloEquipo.eliminarEquipo(id);
        this.mostrarEquipos();
    }

    mostrarEquipos() {
        const equipos = this.modeloEquipo.obtenerEquipos();
        const jugadores = this.modeloJugador.obtenerJugadores();
        this.vista.mostrarEquipos(equipos, jugadores);
    }    

    obtenerNombreEquipo(idEquipo) {
        const equipo = this.modeloEquipo.obtenerEquipoPorId(Number(idEquipo));
        return equipo ? equipo.getNombre() : "Sin equipo";
    }

    obtenerEquiposParaSelect() {
        return this.modeloEquipo.obtenerEquipos().map(equipo => ({
            id: equipo.getId(),
            nombre: equipo.getNombre()
        }));
    }
    
    /* Funciones para manejar los jugadores */
    mostrarJugadores() {
        this.vista.mostrarJugadores(this.modeloJugador.obtenerJugadores());
    }

    agregarJugador(nombre, posicion, annoNacimiento, equipo) {
        let jugador = new Jugador(Number(this.modeloJugador.obtenerUltimaId()) + 1, nombre, posicion, annoNacimiento, equipo);
        const resultado = this.modeloJugador.agregarJugador(jugador);
    
        if (resultado === 0) {
            this.limpiarFormularioJugador();
            this.mostrarJugadores();
            this.mostrarNotificacion("Jugador agregado correctamente", "exito");
        } else {
            const errores = {
                1: "El nombre del jugador está vacío.",
                2: "La posición está vacía.",
                3: "El año de nacimiento está vacío.",
                4: "Debe seleccionar un equipo.",
                5: "El año de nacimiento no puede ser mayor al actual.",
                6: "El año de nacimiento no puede ser menor a 1900."
            };
            this.mostrarNotificacion(`Error: ${errores[resultado]}`, "error");
        }
    }
    
    
    limpiarFormularioJugador() {
        document.getElementById('nombre_jugador').value = '';
        document.getElementById('nombre_posicion').value = '';
        document.getElementById('anno_nacimiento').value = '';
        document.getElementById('id_equipo').value = '';
        
        document.getElementById('nombre_jugador').focus();
    }

    eliminarJugador(id) {
        this.modeloJugador.eliminarJugador(id);
        this.mostrarJugadores();
    }

    actualizarPosicionJugador(id, nuevaPosicion) {  
        this.modeloJugador.actualizarPosicion(id, nuevaPosicion);
        this.mostrarJugadores();
    }

    obtenerPosiciones() {
        return [
            "Portero",
            "Defensa",
            "Lateral",
            "Centrocampista",
            "Mediocentro",
            "Delantero",
            "Extremo"
        ];
    }

    modificarJugador(id) {
        const jugador = this.modeloJugador.obtenerJugadores().find(j => j.getId() === id);
        if (!jugador) return;

        // Guardar el ID del jugador que estamos modificando
        this.jugadorEnEdicion = id;

        // Llenar el select de posiciones
        const selectPosicion = document.getElementById('modificarPosicion');
        selectPosicion.innerHTML = '<option value="">Seleccione posición</option>';
        this.obtenerPosiciones().forEach(pos => {
            const option = document.createElement('option');
            option.value = pos;
            option.textContent = pos;
            option.selected = pos === jugador.getPosicion();
            selectPosicion.appendChild(option);
        });

        // Llenar el select de equipos
        const selectEquipo = document.getElementById('modificarEquipo');
        selectEquipo.innerHTML = '<option value="">Seleccione equipo</option>';
        this.modeloEquipo.obtenerEquipos().forEach(equipo => {
            const option = document.createElement('option');
            option.value = equipo.getId();
            option.textContent = equipo.getNombre();
            option.selected = equipo.getId() === Number(jugador.getEquipo());
            selectEquipo.appendChild(option);
        });

        // Mostrar el modal
        document.getElementById('modalModificarJugador').style.display = 'block';
    }

    cerrarModalModificar() {
        document.getElementById('modalModificarJugador').style.display = 'none';
        this.jugadorEnEdicion = null;
    }

    guardarCambiosJugador() {
        if (!this.jugadorEnEdicion) return;

        const nuevaPosicion = document.getElementById('modificarPosicion').value;
        const nuevoEquipo = document.getElementById('modificarEquipo').value;

        if (nuevaPosicion && nuevaPosicion.trim() !== "") {
            this.modeloJugador.actualizarPosicionJugador(this.jugadorEnEdicion, nuevaPosicion);
        }

        if (nuevoEquipo && nuevoEquipo.trim() !== "") {
            this.modeloJugador.actualizarEquipoJugador(this.jugadorEnEdicion, nuevoEquipo);
        }

        this.mostrarJugadores();
        this.cerrarModalModificar();
    }

    /* Filtrado de datos */
    aplicarFiltros() {
        const idEquipo = document.getElementById('filtroEquipo').value;
        const posicion = document.getElementById('filtroPosicion').value.trim();
        
        let jugadoresFiltrados = this.modeloJugador.obtenerJugadores();
        
        if (idEquipo !== "") {
            jugadoresFiltrados = this.modeloJugador.obtenerJugadoresPorEquipo(Number(idEquipo));
        }
        
        if (posicion !== "") {
            jugadoresFiltrados = this.modeloJugador.obtenerJugadoresPorPosicion(posicion);
        }
        
        this.vista.mostrarJugadores(jugadoresFiltrados);
        this.cerrarModalFiltro();
        
        document.getElementById("btn-limpiar-filtros").style.display = "inline-block";
    }

    limpiarFiltros() {
        // Mostrar todos los jugadores sin filtrar
        this.mostrarJugadores();
    
        // Ocultar el botón de limpiar filtros
        document.getElementById("btn-limpiar-filtros").style.display = "none";
    
        // Limpiar inputs del modal por si se abre de nuevo
        document.getElementById("filtroEquipo").value = "";
        document.getElementById("filtroPosicion").value = "";
    }

    /* Función para mostrar notificaciones */
    mostrarNotificacion(mensaje, tipo) {
        const notificacion = document.getElementById('notificacion');
        notificacion.textContent = mensaje;
    
        // Aplica la clase según tipo: 'exito' o 'error'
        notificacion.className = `notificacion ${tipo}`;
        notificacion.style.display = 'block';
    
        // Oculta después de 3 segundos
        setTimeout(() => {
            notificacion.style.display = 'none';
        }, 3000);
    }
    
}