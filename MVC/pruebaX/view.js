function mostrarPosts() {
    let posts = document.getElementById("posts");

    eliminarPosts();

    let postsList = Model.getPostsList();

    postsList.forEach(post => {
        posts.innerHTML += `
        <div class="post">
            <div class="post_user">
                <img src="${post.getRandomImageUrl()}" class="profile_picture">
                <h3 class="user_name">${post.getUser()}</h3>
                <h3 class="user_id">@${post.getUser().toLowerCase()}</h3>
                <h3 class="post_time">· Hace ${post.getTime()} horas</h3>
            </div>
            <div class="post_info">
                <p class="post_text">${post.getMessage()}</p>
                <img src="${post.getRandomMediaUrl()}" class="post_media">
            </div>
            <div class="post_bar">
                <h4 id="comments">🗨️ ${post.getComments()}</h4>
                <h4 id="retweets">♻️ ${post.getRetweets()}</h4>
                <h4 id="likes">♥️ ${post.getLikes()}</h4>
                <h4 id="views">👁️ ${post.getViews()} mil</h4>
                <h4 id="share">🔗</h4>
            </div>
        </div>`;
    });
}

function eliminarPosts() {
    let post = document.getElementById("posts");
    post.innerHTML = "";
}