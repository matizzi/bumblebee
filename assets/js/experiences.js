
async function addExperience(){
    let generatedHtml="";
    let url = "json/experiences.json";
    let jsonFile = await fetch(url);
    let experiences = await jsonFile.json();
    let numero=0;
    for (let experiencia of experiences) {
        generatedHtml+='<section class="probootstrap-section-half d-md-flex" id="'+experiencia.experienceCity.toLowerCase()+'">' 

        if(numero%2==0){
            generatedHtml+='<div class="probootstrap-image probootstrap-animate" data-animate-effect="fadeIn" style="background-image: url(' +experiencia.experienceImage+ ')"></div>' 
            generatedHtml+='<div class="probootstrap-text">' 
        } else {
            generatedHtml+='<div class="probootstrap-image probootstrap-animate order-2" data-animate-effect="fadeIn" style="background-image: url(' +experiencia.experienceImage+ ')"></div>' 
            generatedHtml+='<div class="probootstrap-text order-1">' 
        }
        generatedHtml+='<div class="probootstrap-inner probootstrap-animate" data-animate-effect="fadeInRight">'
        generatedHtml+='<h2 class="heading mb-4"><b>' +experiencia.experienceName+ '</b> | ' +experiencia.experienceCity+ '</h2>'
        generatedHtml+=experiencia.experienceInitialDescription
        generatedHtml+='<ul type="circle">'
        for (let detalhe of experiencia.experienceDetails){
            generatedHtml+='<li>' +detalhe+ '</li>'
        }
        generatedHtml+='</ul>'
        generatedHtml+='<p>' +experiencia.experienceEndDescription+ '</p>'
        generatedHtml+='<div><a class="cidades-ver-mais" href="#formdest" role="button" >Buy Experience</a>'
        let whishlist=JSON.parse(localStorage.getItem("whishlist"));
        if(whishlist){
            if(whishlist.indexOf(experiencia.experienceName)==-1){
                generatedHtml+='<div class="heart-like-button" name="'+experiencia.experienceName+'"></div>'
            }
            else {
                generatedHtml+='<div class="heart-like-button liked" name="'+experiencia.experienceName+'"></div>'
            }
        }
        generatedHtml+="</div>"
        generatedHtml+="</div>"
        generatedHtml+="</div>"
        generatedHtml+="</section>"
        numero++;
    }
    document.getElementById("experiencesSection").innerHTML = generatedHtml;

    const button = document.getElementsByClassName("heart-like-button");

   for (let botao of button){
        botao.addEventListener("click", (event) => {
            let nomePack=event.target.getAttribute("name")
            if (localStorage.getItem("userisloggedin")){
                if (botao.classList.contains("liked")) {
                    botao.classList.remove("liked");
                    let whishlist=JSON.parse(localStorage.getItem("whishlist"));
                    const myindex=whishlist.indexOf(nomePack);
                    whishlist.splice(myindex, 1);
                    localStorage.setItem("whishlist", JSON.stringify(whishlist));
                } else {
                    let whishlist=JSON.parse(localStorage.getItem("whishlist"));
                    whishlist.push(nomePack);
                    localStorage.setItem("whishlist", JSON.stringify(whishlist));
                    botao.classList.add("liked");
                }
            }
        })
    };
    
}

async function addExperienceHome(){
    let generatedHtml="";
    let url = "json/experiences.json";
    let jsonFile = await fetch(url);
    let experiences = await jsonFile.json();
    for (let experiencia of experiences){
        if (experiencia.mostWanted){
            generatedHtml += '<div class="col-md-6">'
            generatedHtml += '<div class="media probootstrap-media d-flex align-items-stretch mb-4 probootstrap-animate">'
            generatedHtml += '<div class="probootstrap-media-image" style="background-image: url(' +experiencia.experienceHomeImage+ ')"></div>'
            generatedHtml += '<div class="col-9 media-body">'
            generatedHtml += '<h5 class="mb-3">' +experiencia.experienceName+ ' - ' +experiencia.experienceCity+ '</h5>'
            generatedHtml += '<p>' +experiencia.experienceHomeDescription+ '</p>'
            generatedHtml += '<div> <a href="#experience' +experiencia.experienceCity+ '" class="cidades-ver-mais" role="button">See Pack</a></div>'
            generatedHtml += '</div>'
            generatedHtml += '</div>'
            generatedHtml += '</div>'
        }
    }
    document.getElementById("mostWantedExperiences").innerHTML = generatedHtml;
}

async function addExperienceSelectField(){
    let generatedHtml="";
    let url = "json/experiences.json";
    let jsonFile = await fetch(url);
    let experiences = await jsonFile.json();
    for (let experiencia of experiences){    
        generatedHtml += '<option value="' +experiencia.experienceCity.toLowerCase()+ '">' +experiencia.experienceName+ '</option>'
        }
    document.getElementById("addExperienceSelectOptions").innerHTML = generatedHtml;
}

async function addExperienceRowToTable(){
    let generatedHtml="";
    let url = "json/experiences.json";
    let jsonFile = await fetch(url);
    let experiences = await jsonFile.json();
    for (let experiencia of experiences){
        generatedHtml += '<tr>'
        generatedHtml += '<td>' +experiencia.experienceName+ '</td>'
        generatedHtml += '<td>' +experiencia.experienceCity+ '</td>'
        generatedHtml += '<td>' +experiencia.numberOfDays+ '</td>'
        generatedHtml += '<td>' +experiencia.numberOfPassagenrs+ '</td>'
        generatedHtml += '<td>' +experiencia.experiencePrice+ '</td>'
        generatedHtml += '</tr>'
    }
    document.getElementById("addExperienceToTable").innerHTML = generatedHtml;
}    


