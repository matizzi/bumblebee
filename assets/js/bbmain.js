async function loadDynamicContent(htmlName){
    if(htmlName.includes("cities")){
        await adicionarCidades("json/cities.json");
    }
    else if (htmlName.includes("city")){
        await paginasCidades("json/cities.json");
    }
    else if(htmlName.includes("experiences")){
        await addExperience()
    }
    else if(htmlName.includes("home")){
        await addExperienceHome()
    }
}

function loadCity(nomecidade){
    window.location.href = "#city";
    localStorage.setItem("cidade_para_carregar", nomecidade);
}


/////////////////////
// second approach
function init() {
    var router = new Router([
        new Route('home', 'home.html', true),            
        new Route('about', 'about-us.html'),
        new Route('contacts', 'contacts.html'),
        new Route('cities', 'cities.html'),
        new Route('city', 'city.html'),
        new Route('experiences', 'experiences.html'),
        new Route('experienceLondon', 'experiences.html#london'),
        new Route('experienceStockholm', 'experiences.html#stockholm'),
        new Route('experienceParis', 'experiences.html#paris'),
        new Route('experienceAveiro', 'experiences.html#aveiro'),
        new Route('cityAveiro', 'city.html#aveiro'),
        new Route('formdest', 'formdest.html'),
        new Route('formpass', 'formpass.html'),
        new Route('formextras', 'formextras.html'),
        new Route('formcheckout', 'formcheckout.html')
    ]);
}
init();