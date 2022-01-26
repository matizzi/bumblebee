
async function adicionarCidades(url){
    let generatedHtml="";
    let jsonFile = await fetch(url);
    let cities = await jsonFile.json();
    for (let cidade of cities) {
        generatedHtml+='<div class="col-lg-3 col-md-6 my_mb_80">'
        generatedHtml+='<a onclick="loadCity(\''+cidade.cityname+'\')" class="probootstrap-thumbnail">'
        generatedHtml+='<img src="'+cidade.cityimg+'" alt="paris" class="img-fluid">';
        generatedHtml+="<h3><b>"+cidade.cityname+"</b></h3>";
        generatedHtml+="</a>"
        generatedHtml+="</div>"
    }
    document.getElementById("cidades").innerHTML = generatedHtml;
}

async function carrosselHome(url){
    let generatedHtml="";
    let jsonFile = await fetch(url);
    let carrosel = await jsonFile.json();
    for (let cidade of carrosel){
        if(cidade.topvisited){
            generatedHtml+='<div class="card probootstrap-slide">';
            generatedHtml+='<a onclick="loadCity(\''+cidade.cityname+'\')"><img class="card-img-top" src="'+cidade.cityimg+'" alt="Aveiro"></a>';
            generatedHtml+='<em class="overlay-monumentos" id="head1">'+cidade.cityname+'</em>';
            generatedHtml+="</div>";
        }
    }
    document.getElementById("carrosel-cidades-home").innerHTML = generatedHtml;
}
