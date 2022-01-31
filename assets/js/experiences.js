
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
        generatedHtml+='<div><a class="cidades-ver-mais" href="#formdest" role="button" >Buy Experience</a><img style="width:100px" src="assets/images/logo_1.png" alt="Bumblebee - Experience Agency">'
        generatedHtml+="</div>"
        generatedHtml+="</div>"
        generatedHtml+="</div>"
        generatedHtml+="</section>"
        numero++;
    }
    document.getElementById("experiencesSection").innerHTML = generatedHtml;
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



