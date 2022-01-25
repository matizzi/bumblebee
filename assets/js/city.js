async function paginasCidades(){
    let generatedHtml="";
    let indicadores="";
    let url = "json/cities.json";
    let jsonFile = await fetch(url);
    let cities = await jsonFile.json();
    let cidadeParaCarregar = localStorage.getItem("cidade_para_carregar");
    for (let cidade of cities) {
        if(cidade.cityname==cidadeParaCarregar){
            document.getElementById("nomeCidade").innerHTML=cidade.cityname;
            document.getElementById("subtituloCidade").innerHTML=cidade.subtitulo;
            document.getElementById("descricaoCidade").innerHTML=cidade.descricao;
            document.getElementById("botaoExperiencias").innerHTML='<a href="../experiences.html#'+cidade.cityname.toLowerCase()+'" class="cidades-ver-mais" role="button" style="margin-top: 30px;">Experience Pack</a>'
            let numero=0
            for (let imagem of cidade.imagenscidade){
                if(numero==0){
                    indicadores+='<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>'
                    generatedHtml+='<div class="carousel-item active">',
                    generatedHtml+='<img src="'+imagem+'"class="d-block w-100" alt="">';
                    generatedHtml+="</div>";
                }
                else {
                    indicadores+='<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="'+numero+'" aria-label="Slide '+numero+1+'"></button>'
                    generatedHtml+='<div class="carousel-item">',
                    generatedHtml+='<img src="'+imagem+'"class="d-block w-100" alt="">';
                    generatedHtml+="</div>";
                }
                numero++
            }

            document.getElementById("carrosel-imagens-cidade").innerHTML = generatedHtml;
            document.getElementById("indicadores").innerHTML = indicadores;
            console.log(generatedHtml)
            generatedHtml=""
            console.log(generatedHtml)
            for (let atracao of cidade.atracoes){
                generatedHtml+='<div class="card probootstrap-slide">',
                generatedHtml+='<img class="card-img-top" src="'+atracao.atracaoimagem+'" alt="Card image cap">';
                generatedHtml+='<em class="overlay-monumentos" id="head1">'+atracao.atracaonome+'</em>';
                generatedHtml+="</div>"
            }
            document.getElementById("carrosel-cidades").innerHTML = generatedHtml
            owlCarouselFunc()

            
            var map = L.map('map').setView([cidade.coordenadascidade.latitude, cidade.coordenadascidade.longitude], 9);

            L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
                maxZoom: 20,
                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            }).addTo(map);

            // L.marker([51.5, -0.09]).addTo(map)
            //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            //     .openPopup();
        }
    }
}

paginasCidades()
