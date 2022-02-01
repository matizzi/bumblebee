
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

async function addServiceToCheckbox(){
    let generatedHtml="";
    let url = "json/services.json";
    let jsonFile = await fetch(url);
    let service = await jsonFile.json();
    for (let serviço of service){
        generatedHtml += '<div class="form-check ta-left">'
        generatedHtml += '<label class="form-check-label" for="' +serviço.extraValue+ '">' +serviço.serviceName+ '</label>'
        generatedHtml += '<input class="form-check-input" type="checkbox" id="' +serviço.extraValue+ '" name="' +serviço.extraValue+ '" value="' +serviço.serviceValue+ '">'
        generatedHtml += '</div>'
    }
    document.getElementById("addService").innerHTML = generatedHtml;
}  

async function addServiceRowToTable(){
    let generatedHtml="";
    let url = "json/services.json";
    let jsonFile = await fetch(url);
    let service = await jsonFile.json();
    for (let serviço of service){
        generatedHtml += '<tr>'
        generatedHtml += '<td>' +serviço.serviceName+ '</td>'
        generatedHtml += '<td>' +serviço.priceRange+ '</td>'
        generatedHtml += '</tr>'
    }
    document.getElementById("addServiceToTable").innerHTML = generatedHtml;
}    

