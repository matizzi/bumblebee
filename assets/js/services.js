
async function adicionarServicos(url){
    let generatedHtml="";
    let jsonFile = await fetch(url);
    let service = await jsonFile.json();
    for (let servico of service) {
        generatedHtml+='<div class="col-md-4" style="padding: 40px 30px 0px 20px">'
        generatedHtml+='<i class="'+servico.serviceIcon+'"></i>';
        generatedHtml+='<h2 class="heading" style="padding-top: 40px">'+servico.serviceName+'</h2>';
        for (let detail of servico.serviceDetails) {
            generatedHtml+='<p>'+detail+'</p>'
        }
        generatedHtml+="</div>"
    }
    generatedHtml+='<div class="col mt-5">'
    generatedHtml+='<button type="button-center" class="cidades-ver-mais" data-bs-toggle="modal" data-bs-target="#modal-login">Add to my experience</button>'
    generatedHtml+='<img style="width:80px" src="assets/images/logo_1.png" alt="Bumblebee - Experience Agency">'
    generatedHtml+='</div> '
    document.getElementById("servicos").innerHTML = generatedHtml;
}