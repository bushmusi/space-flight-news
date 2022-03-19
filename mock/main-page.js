const domContainer = () => {
  document.body.innerHTML = `
    <body>
        <header>
            <div class = "logo">Scifi logo</div>
            <ul class="nav-tab"> 
                <li>
                    Spaceships-News
                    <span class="badge" id="news-counter"></span>
                </li>
                <li>Planets</li>
                <li>Races</li>
            </ul>
        </header>
    </body>`;
};
export default domContainer;