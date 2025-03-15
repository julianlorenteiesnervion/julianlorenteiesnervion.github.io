function mostrarPost(Post) {
    let posts = document.getElementById("posts");
    let comments = parseInt(Math.random() * 100);
    let retweets = parseInt(Math.random() * 100);
    let likes = parseInt(Math.random() * 10000);
    let views = parseInt(Math.random() * 100);

    let randomImageUrl = "https://picsum.photos/200?" + new Date().getTime();
    let randomMediaUrl = "https://picsum.photos/700/300?" + new Date().getTime();

    posts.innerHTML += `<div class="post">
        <div class="post_user">
            <img src="` + randomImageUrl + `" class="profile_picture">
            <h3 class="user_name">` + Post.getUser() + `</h3>
            <h3 class="user_id">@` + Post.getUser().toLowerCase() + `</h3>
            <h3 class="post_time">· Hace ` + Post.getTime() + ` horas</h3>
        </div>
        <div class="post_info">
            <p class="post_text">` + Post.getMessage() + `</p>
            <img src="` + randomMediaUrl + `" class="post_media">
        </div>
        <div class="post_bar">
            <h4 id="comments">🗨️ ` + comments + `</h4>
            <h4 id="retweets">♻️ ` + retweets + `</h4>
            <h4 id="likes">♥️ ` + likes + `</h4>
            <h4 id="views">👁️ ` + views + ` mil</h4>
            <h4 id="share">🔗</h4>
        </div>
    </div>`;
}