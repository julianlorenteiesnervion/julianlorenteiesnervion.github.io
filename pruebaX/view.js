function mostrarPost(Post) {
    let posts = document.getElementById("posts");

    posts.innerHTML += `<div class="post">
        <div class="post_user">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="profile_picture">
            <h3 class="user_name">` + Post.user + `</h3>
            <h3 class="user_id">@` + Post.user + `</h3>
            <h3 class="post_time">Hace ` + Post.time + ` horas</h3>
        </div>
        <div class="post_info">
            <p class="post_text">` + Post.message + `</p>
            <img src="https://t3.ftcdn.net/jpg/09/03/91/64/360_F_903916468_L5Oli1cL45LG0I58JTVPbNv23khMK5y9.jpg" class="post_media">
        </div>
        <div class="post_bar">
            <h4 id="comments">🗨️ 20</h4>
            <h4 id="retweets">♻️ 47</h4>
            <h4 id="likes">♥️ 307</h4>
            <h4 id="views">👁️ 20.000</h4>
            <h4 id="save">🔖</h4>
        </div>
    </div>`;
}