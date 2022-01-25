
async function addExperience(){
    let generatedHtml="";
    let url = "json/experiences.json";
    let jsonFile = await fetch(url);
    let experiences = await jsonFile.json();
    for (let experiencia of experiences) {
        generatedHtml+='<section class="probootstrap-section-half d-md-flex" id="'+experiencia.experienceName+'">' 
        generatedHtml+='<div class="probootstrap-image probootstrap-animate" data-animate-effect="fadeIn" style="background-image: url(' +experiencia.experienceImage+ ')"></div>' 
        generatedHtml+='<div class="probootstrap-text">' 
        generatedHtml+='<div class="probootstrap-inner probootstrap-animate" data-animate-effect="fadeInRight">'
        generatedHtml+='<h2 class="heading mb-4"><b>' +experiencia.experienceName+ '</b>' +experiencia.experienceCity+ '</h2>'
        generatedHtml+=experiencia.experienceInitalDescription
        generatedHtml+='<ul type="circle">'
        for (let detalhes of experiencia.experienceDetails){
            generatedHtml+='<li>' +detalhes.experienceDetails+ '</li>'
        }
        generatedHtml+='</ul>'
        generatedHtml+='<p>' +experiencia.experienceEndDescription+ '</p>'
        generatedHtml+='<div><a class="cidades-ver-mais" href="formdest.html" role="button" >Buy Experience</a><img style="width:100px" src="assets/images/logo_1.png" alt="Bumblebee - Experience Agency">'
        generatedHtml+="</div>"
        generatedHtml+="</div>"
        generatedHtml+="</div>"
        generatedHtml+="</section>"
    }
    document.getElementById("experiences").innerHTML = generatedHtml;
}


addExperience()

