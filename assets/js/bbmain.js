////////////////////////////////////////////////////////////////////////////////
// Initialization

var _page;
goToIndex();

////////////////////////////////////////////////////////////////////////////////
// Functions to load Html

function goToIndex(elem) {
    // load html 
    LoadTemplate("content", "home.html");

    // set app page
    _page = "home";
}

function goToAboutUs(elem) {
    // load html 
    LoadTemplate("content", "about-us.html");

    // set app page
    _page = "about_us";
}

function goToContacts(elem) {
    // load html 
    LoadTemplate("content", "contacts.html");

    // set app page
    _page = "contacts";
}

function changeContent(adbkjasdk){
    LoadTemplate("content", adbkjasdk)
    adbkjasdk=adbkjasdk.replace(".html", "")
    _page=adbkjasdk
}

if(!_page){
    _page = "home.html";
}

async function LoadTemplate(dest, file) {
    let url = "templates/" + file;
    let obj = await fetch(url);
    let txt = await obj.text();
    document.getElementById(dest).innerHTML = txt;
    contentWayPoint();
    document.title = document.getElementById("title").textContent + " - Bumblebee";
}
