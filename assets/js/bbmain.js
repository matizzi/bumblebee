////////////////////////////////////////////////////////////////////////////////
// Initialization

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

function selectBnav (id) {
    // bnav.forEach(b => {
    //     b.classList.toggle('selected', b.id === id);
    // });
    console.log(id)
    $("#"+id).toggleClass("selected")
}

async function LoadTemplate(dest, file) {
    let url = "templates/" + file;
    let obj = await fetch(url);
    let txt = await obj.text();
    document.getElementById(dest).innerHTML = txt;
    contentWayPoint();
    // document.title = document.getElementById("title").textContent + " - Bumblebee";

    if(file.includes("cities")){
        adicionarCidades("json/cities.json")
    }else if(file.includes("city")){
        paginasCidades("json/cities.json")
    }
}

function loadCity(nomecidade){
    // window.location.href = "city.html?"+nomecidade
    changeContent("city.html");
    localStorage.setItem("cidade_para_carregar", nomecidade)
}

var _page;
changeContent();

let bnav = Array.from(document.getElementsByClassName('navbartoogler'));

bnav.forEach( b => {
    let id = b.id;
    b.addEventListener('click', e => {
        history.pushState({id}, `Selected: ${id}`, `./${id}`)
        changeContent(id+".html")
        selectBnav(id);
    });
});

window.addEventListener('popstate', e => {
    selectBnav(e.state.id);
    changeContent(e.state.id+".html")
});

history.replaceState({id: "home"}, 'Default state', './');

