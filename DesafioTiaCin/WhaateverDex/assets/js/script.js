let listaAnimes = [];
let indiceAtual = 0;
const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");

async function buscarAnime(){
    const texto = document.getElementById("pesquisa").value;
    const url = `https://api.jikan.moe/v4/anime?q=${texto}`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    listaAnimes = dados.data;
    indiceAtual = 0;

    mostrarAnime();
}

function mostrarAnime(){

    
    if(listaAnimes.length === 0){
        document.getElementById("resultado").innerHTML = "<p>Nenhum anime encontrado</p>";
        return;
    }
    const anime = listaAnimes[indiceAtual];

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <div class="card">
        <h2>${anime.title}</h2>
        <img src="${anime.images.jpg.image_url}" min-width="225">
        <p>Nota: ${anime.score}</p>
        <p>Episódios: ${anime.episodes}</p>
        <p class="sinopse">descricao: ${anime.synopsis}</p>
    </div>
    `;
    atualizarBotoes();
}

function proximo(){

    if(indiceAtual < listaAnimes.length - 1){
        indiceAtual++;
        mostrarAnime();
    }

}

function anterior(){

    if(indiceAtual > 0){
        indiceAtual--;
        mostrarAnime();
    }

}

function atualizarBotoes(){

    if(listaAnimes.length === 0){
        btnAnterior.style.display = "none";
        btnProximo.style.display = "none";
        return;
    }

    btnAnterior.style.display = indiceAtual === 0 ? "none" : "flex";

    btnProximo.style.display =
        indiceAtual === listaAnimes.length - 1 ? "none" : "flex";
}

