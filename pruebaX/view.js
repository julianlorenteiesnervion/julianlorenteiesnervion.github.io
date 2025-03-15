function mostrarPost(Post) {
    let posts = document.getElementById("posts");
    let comments = parseInt(Math.random() * 100);
    let retweets = parseInt(Math.random() * 100);
    let likes = parseInt(Math.random() * 10000);
    let views = parseInt(Math.random() * 100);

    posts.innerHTML += `<div class="post">
        <div class="post_user">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="profile_picture">
            <h3 class="user_name">` + Post.getUser() + `</h3>
            <h3 class="user_id">@` + Post.getUser() + `</h3>
            <h3 class="post_time">Hace ` + Post.getTime() + ` horas</h3>
        </div>
        <div class="post_info">
            <p class="post_text">` + Post.getMessage() + `</p>
            <img src="https://t3.ftcdn.net/jpg/09/03/91/64/360_F_903916468_L5Oli1cL45LG0I58JTVPbNv23khMK5y9.jpg" class="post_media">
        </div>
        <div class="post_bar">
            <h4 id="comments">🗨️ ` + comments + `</h4>
            <h4 id="retweets">♻️ ` + retweets + `</h4>
            <h4 id="likes">♥️ ` + likes + `</h4>
            <h4 id="views">👁️ ` + views + ` mil</h4>
            <h4 id="save">🔖</h4>
        </div>
    </div>`;
}