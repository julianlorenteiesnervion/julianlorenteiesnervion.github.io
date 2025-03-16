function crearPost(user, time, message) {
    let post = new Post(user, time, message);
    Model.addPost(post);
}