
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
