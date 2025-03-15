class Post {
    constructor(user, time, message) {
        this.user = user;
        this.time = time;
        this.message = message;
    }

    getUser() {
        return this.user;
    }

    getTime() {
        return this.time;
    }

    getMessage() {
        return this.message;
    }
}