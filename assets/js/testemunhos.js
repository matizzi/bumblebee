async function carregarTestemunhos (divid,url){
    let generatedHtmlinformacoes="";
    let generatedHtmltexto="";
    let generatedHtml="";
    let jsonFile = await fetch(url);
    let testemunhos = await jsonFile.json();
    let numero=0
    for(let testemunho of testemunhos){
        generatedHtmlinformacoes+="<li>";
        generatedHtmlinformacoes+='<div class="card p-3 cursor-pointer" data-bs-toggle="collapse" data-bs-target="#'+testemunho.nomecollapse+'" aria-expanded="true" aria-controls="collapseOne">';
        generatedHtmlinformacoes+='<div class="d-flex flex-row align-items-center"> <img src="'+testemunho.imagemtestemunho+'" width="50" class="rounded-circle">';
        generatedHtmlinformacoes+='<div class="d-flex flex-column ml-3"> <span class="font-weight-normal">'+testemunho.nometestemunho+'</span> <span>'+testemunho.idadetestemunho+','+testemunho.nomeexperiencia+'</span></div>';
        generatedHtmlinformacoes+="</div>";
        generatedHtmlinformacoes+="</div>";
        generatedHtmlinformacoes+="</li>";
    
        if (numero==0){
            generatedHtmltexto+='<div id="'+testemunho.nomecollapse+'" class="collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">';
        }
        else{
            generatedHtmltexto+='<div id="'+testemunho.nomecollapse+'" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">';
   
        }
        generatedHtmltexto+='<div class="card-body">';
        generatedHtmltexto+='<h4>'+testemunho.titulotestemunho+'</h4>';
        generatedHtmltexto+='<div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>';
        generatedHtmltexto+='<p>'+testemunho.textotestemunho+'</p>';
        generatedHtmltexto+="</div>";
        generatedHtmltexto+="</div>";

        numero++
    }
    

    generatedHtml+='<div class="container">';
    generatedHtml+='<div class="col-md-12 text-center probootstrap-animate">'
    generatedHtml+='<h2 class="display-4 border-bottom probootstrap-section-heading ">What clients say</h2>'
    generatedHtml+="</div>"      
    generatedHtml+='<div class="accordion align-items-center" id="accordionExample">';
    generatedHtml+='<div class="row probootstrap-animate">';
    generatedHtml+='<div class="col-md-6">';
    generatedHtml+='<div class="p-3">';
    generatedHtml+='<ul class="testimonial-list" id="informacao-pessoas-testemunhos">'+generatedHtmlinformacoes;
    generatedHtml+="</ul>";
    generatedHtml+="</div>";
    generatedHtml+="</div>";
    generatedHtml+='<div class="col-md-6">';
    generatedHtml+='<div class="p-3 testimonials-margin" id="textos-testemunhos">'+generatedHtmltexto;
    generatedHtml+="</div>";
    generatedHtml+="</div>";
    generatedHtml+="</div>";


    document.getElementById(divid).innerHTML= generatedHtml

}


  