
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
        generatedHtml+='<h2 class="heading mb-4">' +experiencia.experienceName+ ' | ' +experiencia.experienceCity+ '</h2>'
        generatedHtml+=experiencia.experienceInitialDescription
        generatedHtml+='<ul type="circle">'
        for (let detalhe of experiencia.experienceDetails){
            generatedHtml+='<li>' +detalhe+ '</li>'
        }
        generatedHtml+='</ul>'
        generatedHtml+='<p>' +experiencia.experienceEndDescription+ '</p>'
        generatedHtml+='<div><a class="cidades-ver-mais" href="formdest.html" role="button" >Buy Experience</a><img style="width:100px" src="assets/images/logo_1.png" alt="Bumblebee - Experience Agency">'
        generatedHtml+="</div>"
        generatedHtml+="</div>"
        generatedHtml+="</div>"
        generatedHtml+="</section>"
        numero++;
    }
    document.getElementById("experiencesSection").innerHTML = generatedHtml;
}
