function publicarPost(user, time, message) {
    if (user != "") {
        mostrarPost(crearPost(user, time, message));
    }
}