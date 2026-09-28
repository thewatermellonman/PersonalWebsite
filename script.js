function showPage(page) {
    const content = document.getElementById("content")

    if (page === "home") {
        content.innerHTML = `
            <article class="post">
                <h2>We're continuing!</h2>
                <h4 class="date">September 27, 2026</h4>

                <p class="beef">
                    I'm adding some Javascript. I hopefully won't break my site (' •᷄ ᴗ •᷅ )
                </p>
            </article>
        
            <article class="post">
                <h2>First blog post :3</h2>
                <h4 class="date">September 26, 2026</h4>

                <p class="beef">
                    This is my first blog post! Still trying to figure out how to do all this ( ˘𖥦˘;) 
                </p>
            </article>
        `;
    }
        
    if (page === "aboutme") {
        content.innerHTML = `
            <h2>All about Maddie!!</h2>
            <p>pinkpinkpink</p>
        `;
    }

    if (page === "projects") {
        content.innerHTML = `
            <h2>What I've Made</h2>
            <p>pinkpinkpink</p>
        `;
    }
        
}

showPage("home");