class Post {
    constructor(user, time, message) {
        this.user = user;
        this.time = time;
        this.message = message;
        this.comments = parseInt(Math.random() * 100);
        this.retweets = parseInt(Math.random() * 100);
        this.likes = parseInt(Math.random() * 10000);
        this.views = parseInt(Math.random() * 100);
        this.randomImageUrl = "https://picsum.photos/200?" + new Date().getTime();
        this.randomMediaUrl = "https://picsum.photos/700/300?" + new Date().getTime();
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

    getComments() {
        return this.comments;
    }

    getRetweets() {
        return this.retweets;
    }

    getLikes() {
        return this.likes;
    }

    getViews() {
        return this.views;
    }

    getRandomImageUrl() {
        return this.randomImageUrl;
    }

    getRandomMediaUrl() {
        return this.randomMediaUrl;
    }
}