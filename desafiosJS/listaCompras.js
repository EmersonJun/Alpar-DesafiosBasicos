const prompt = require("prompt-sync")();
let listaDeCompras = [];
let opcao = "";


function adicionar(item){
    listaDeCompras.push(item);
    console.log(`item: "${item}": adicinado com sucesso`)
}

function remover(item){
    const index = listaDeCompras.indexOf(item);
    if(index !== -1){
        listaDeCompras.splice(index, 1);
        console.log(`item: "${item}": removido com sucesso`)
    } else {
    console.log(`Item "${item}" não encontrado na lista.`);
  }
}

function exibir(){
    if(listaDeCompras.length === 0){
        console.log("lista vazia");
        return;
    }

    console.log("lista de compras:");
    for(let i = 0; i < listaDeCompras.length; i++){
        console.log(`${i + 1}. ${listaDeCompras[i]}`);
    }
}

    while(opcao !== "4"){
        console.log(`
1 - Adicionar item
2 - Remover item
3 - Exibir lista
4 - Sair
                    `);

        opcao = prompt("escolha uma opcao");
        switch(opcao){
            case "1":
                let adicionarItem = prompt("digite o nome do item: ")
                adicionar(adicionarItem);
            break;

            case "2":
                let removerItem = prompt("digite o nome do item: ")
                remover(removerItem);
            break;

            case "3":
                exibir();
            break;

            case "4":
            console.log("encerrando")
            break;
            
        default:
            console.log("Opção inválida. Tente novamente.");
        }
}
