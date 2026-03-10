const prompt = require("prompt-sync")();

let opcao;
let contato = [];

function adicionar(){
    const nome = prompt("digite o nome: ");
    const telefone = Number(prompt("digite o telefone: "));
    const email = prompt("insira o email: ");

    const emailExiste = contato.some(p => p.email === email);

    if(emailExiste){
        console.log("email existente");
        return;
    }

    contato.push({nome, telefone, email});
    console.log("contato cadastrado");
}

function buscarPorEmail(){
    const email = prompt("digite o email: ");
    const pessoaExiste = contato.find(p => p.email === email);
    if(pessoaExiste){
        console.log("usuario: ");
        console.log(`nome: ${pessoaExiste.nome}, numero: ${pessoaExiste.telefone}, email: ${pessoaExiste.email}`);

    } else {
        console.log("contato inexistente");
        return;
    }

     
}

function deletar(){
    const email = prompt("digite o email: ");
    const emailEncontrado = contato.findIndex(p => p.email === email);

    if(emailEncontrado == -1){
        console.log("email nao existente...");
        return;
    }

    contato.splice(emailEncontrado, 1);
    console.log("produto removido...");
}

function listar(){
    if(contato.length == 0){
        console.log("lista vazia");
        return;
    }

     console.log("Lista completa");
     contato.forEach((p, i) => {
        console.log(`${i + 1}. nome: ${p.nome},
            preco: ${p.telefone},
            codigo: ${p.email}`)
     });
}

do{
    console.log(`----Menu----
        1 - adicionar
        2 - remover
        3 - listar
        4 - listar por email
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
        
        case "4":
            buscarPorEmail();
            break;

        case "0":
            console.log("saindo...")
            break;

        default:
            console.log("invalido");
    }
} while (opcao !== "0");