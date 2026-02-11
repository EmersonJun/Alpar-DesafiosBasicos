const prompt = require("prompt-sync")();

let opcao;
let produtos = [];

function adicionar(){
    const nome = prompt("digite o nome: ");
    const preco = Number(prompt("digite o valor: "));
    preco = Number(preco.toFixed(2));
    const codigo = prompt("insira o codigo: ");

    const codigoExiste = produtos.some(p => p.codigo === codigo);

    if(codigoExiste){
        console.log("codigo existente");
        return;
    }

    produtos.push({nome, preco, codigo});
    console.log("produto cadastrado");
}

function deletar(){
    const codigo = prompt("digite o codigo: ");
    const codigoEncontrado = produtos.findIndex(p => p.codigo === codigo);

    if(codigoEncontrado == -1){
        console.log("codigo nao existente...");
        return;
    }

    produtos.splice(codigoEncontrado, 1);
    console.log("produto removido...");
}

function listar(){
    if(produtos.length == 0){
        console.log("lista vazia");
        return;
    }

     console.log("Lista completa");
     produtos.forEach((p, i) => {
        console.log(`${i + 1}. nome: ${p.nome},
            preco: ${p.preco},
            codigo: ${p.codigo}`)
     });
}

do{
    console.log(`----Menu----
        1 - adicionar
        2 - remover
        3 - listar
        0 - sair`)

        opcao = prompt("escolha sua opcao: ")

    switch(opcao){
        case "1":
            adicionar();
            break;
        
        case "2":
            deletar();
            break;

        case "3":
            listar();
            break;
        
        case "0":
            console.log("saindo...")
            break;

        default:
            console.log("invalido");
    }
} while (opcao !== "0");