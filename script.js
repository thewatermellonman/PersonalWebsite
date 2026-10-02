function showPage(page) {
    const content = document.getElementById("content")

    if (page === "home") {
        content.innerHTML = `
            <article class="post">
                <h2>We're continuing!</h2>
                <h4 class="date">October 1st, 2026</h4>

                <p class="beef">
                    Guysss!! It's fall!
                    I know it's been fall, but the trees are changing colors, it's October,
                    and it actually feels like fall now!
                    I'm so excited for Halloween and all the fun stuff that comes with it!
                </p>
                <p class="beef">
                    Anywaysss, update! I'm adding some more cutesy stuff to my site; I hope you like it! ( ˘ ³˘)♥
            </article>
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
            <div class="middle">
                <h2>All about Maddie!!</h2>
                <p>pinkpinkpink</p>
            </div>
        `;
    }

    if (page === "projects") {
        content.innerHTML = `
            <div class="middle">
                <h2>What I've Made</h2>
                <div class="post">
                    <p>
                        Unsurprisingly, most of the things I've made are pink!
                    </p>
                    <h3>Study Timer</h3>
                    <img src="timer.png" alt="Study Timer" width="90%">
                    <p>
                        A simple study timer to help you stay focused. It's (crazily enough) pink.
                        It's got a leaderboard and the ability to set subjects.
                        Anddddd, it all saves to your local storage!
                    </p>
                </div>
            </div>
        `;
    }
        
}

showPage("home");