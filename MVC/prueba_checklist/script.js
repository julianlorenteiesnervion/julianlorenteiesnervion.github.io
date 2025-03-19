let tareas = document.getElementById('tareas');

let id = 1;

    function addTask() {
        let tarea = document.getElementById('entrada').value;

        if (tarea != "") {
            tareas.innerHTML += "<div id=\"tarea" + id + "\"><p>" + tarea + "</p>" + "<button onclick='removeTask(\"tarea" +  id + "\")'>✅</button></div>";
        }

        document.getElementById('entrada').value = "";
        id++;
    }

    function removeTask(idTarea) {
        let tarea = document.getElementById(idTarea);

        tarea.remove();
    }