class Model {
    static list = [];

    static addPost(Post) {
        this.list.push(Post);
    }

    static getPostsList() {
        return this.list;
    }
}