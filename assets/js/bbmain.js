////////////////////////////////////////////////////////////////////////////////
// Initialization

var _page;
changeContent();

////////////////////////////////////////////////////////////////////////////////
// Functions to load Html

function changeContent(pagina){
    if(pagina == undefined){
        LoadTemplate("content", "home.html")
        pagina="home.html".replace(".html", "")
        _page=pagina
    }
    else{
    LoadTemplate("content", pagina)
    pagina=pagina.replace(".html", "")
    _page=pagina
    }
}


let bnav = Array.from(document.getElementsByClassName('navbartoogler'));

function selectBnav (id) {
    bnav.forEach(b => {
        b.classList.toggle('selected', b.id === id);
    });
}

bnav.forEach( b => {
    let id = b.id;
    b.addEventListener('click', e => {
        history.pushState({id}, `Selected: ${id}`, `./${id}`)
        selectBnav(id);
    });
});

window.addEventListener('popstate', e => {
    selectBnav(e.state.id);
});

history.replaceState({id: null}, 'Default state', './');

async function LoadTemplate(dest, file) {
    let url = "templates/" + file;
    let obj = await fetch(url);
    let txt = await obj.text();
    document.getElementById(dest).innerHTML = txt;
    contentWayPoint();
    document.title = document.getElementById("title").textContent + " - Bumblebee";
}
