//const timeAgo = require("node-time-ago");
//const html = require("html-template-tag");

module.exports = posts => `<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
        <h1> To Do </h1>
        <div class="chore-list">
        ${posts.map(post => 
            `<li>
              <a href="/posts/${post.id}">${post.title}</a>
            </li>  
        `).join('')}
        </div>
        <div class = "add-chore">
            <header>Add Post</header>
            <form class = "add-chore" method = "post" action= "/posts">
                <label for= "title">Title:</label>
                <input type="text" name = "title"/>
                <label for= "weight">Weight:</label>
                <input type="integer" name="weight"/>
                <label for="time">Time:</label>
                <input type="text" name="time"/>
                <label for="Details">Details:</label>
                <textarea name="content"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        </body>
    </html>`;