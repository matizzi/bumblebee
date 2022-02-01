async function loadDynamicContent(htmlName){
    if(htmlName.includes("cities")){
        await adicionarCidades("cidades","json/cities.json");
        await carregarTestemunhos("section-feature-testimonial","json/testemunhos.json");
    }
    else if (htmlName.includes("city")){
        await paginaCidade("json/cities.json");
        await carregarTestemunhos("section-feature-testimonial","json/testemunhos.json");
    }
    else if(htmlName.includes("experiences")){
        await addExperience()
    }
    else if(htmlName.includes("home")){
        await addExperienceHome()
        await carrosselTopCities("carrosel-cidades-home","json/cities.json")
        owlCarouselFunc()
        await carregarTestemunhos("section-feature-testimonial","json/testemunhos.json");
    } 
    else if (htmlName.includes("services")){
        await adicionarServicos("json/services.json");
        await carregarTestemunhos("section-feature-testimonial","json/testemunhos.json");
        await carrosselCidades("carrossel-cidades-servicos","json/cities.json")
        owlCarouselFunc()
    }
    else if (htmlName.includes("formdest")){
        await addExperienceSelectField();
        await addExperienceRowToTable();
    }
    else if (htmlName.includes("formextras")){
        await addServiceToCheckbox();
        await addServiceRowToTable();
    }

    else if (htmlName.includes("myaccount")){
        whishlist()
    }
}

function loadCity(nomecidade){
    window.location.href = "#city";
    localStorage.setItem("cidade_para_carregar", nomecidade);
}

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), null)
function modalpromotion(){
    if (!document.getElementById("exampleModal").classList.contains("show")){
        myModal.show()   
    }
}

function modalclick(){
    window.location.href = "#experienceParis"
    myModal.hide()
}

var intervalId = window.setInterval(function(){
    modalpromotion()
}, 180000);

function init() {
    var router = new Router([
        new Route('home', 'home.html', true),            
        new Route('about', 'about-us.html'),
        new Route('contacts', 'contacts.html'),
        new Route('cities', 'cities.html'),
        new Route('city', 'city.html'),
        new Route('services', 'services.html'),
        new Route('experiences', 'experiences.html'),
        new Route('experienceLondon', 'experiences.html#london'),
        new Route('experienceStockholm', 'experiences.html#stockholm'),
        new Route('experienceParis', 'experiences.html#paris'),
        new Route('experienceAveiro', 'experiences.html#aveiro'),
        new Route('experienceDublin', 'experiences.html#dublin'),
        new Route('experienceLisbon', 'experiences.html#lisbon'),
        new Route('cityAveiro', 'city.html#aveiro'),
        new Route('formdest', 'formdest.html'),
        new Route('formpass', 'formpass.html'),
        new Route('formextras', 'formextras.html'),
        new Route('formcheckout', 'formcheckout.html'),
        new Route('myaccount', 'myaccount.html' )
    ]);
}


init();


