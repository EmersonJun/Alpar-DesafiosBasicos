const prompt = require("prompt-sync")();

let opcao;
let Alunos = [];

function adicionar(){
    const nome = prompt("digite o nome: ");
    let nota1 = Number(prompt("digite a primeira nota: "));
    nota1 = Number(nota1.toFixed(2));
    let nota2 = Number(prompt("digite a segunda nota: "));
    nota2 = Number(nota2.toFixed(2));
    const notaGeral = Number(((nota1 + nota2) / 2).toFixed(2));
    const email = prompt("informe o email: ");

    const emailExiste = Alunos.some(p => p.email === email);

    if(emailExiste){
        console.log("email existente");
        return;
    }

    Alunos.push({nome, nota1, nota2, notaGeral, email});
    console.log("aluno cadastrado");
}

function deletar(){
    const email = prompt("digite o email: ");
    const emailEncontrado = Alunos.findIndex(p => p.email === email);

    if(emailEncontrado == -1){
        console.log("email nao existente...");
        return;
    }

    Alunos.splice(emailEncontrado, 1);
    console.log("aluno removido...");
}

function listar(){
    if(Alunos.length == 0){
        console.log("lista vazia");
        return;
    }

     console.log("Lista completa");
     Alunos.forEach((p, i) => {
        console.log(`${i + 1}. nome: ${p.nome}, nota geral: ${p.notaGeral}, email ${p.email})`)
     });
}

function aprovado(){
    console.log("\nAPROVADOS:");
    Alunos.filter(a => a.notaGeral >= 7)
          .forEach(a => console.log(`${a.nome} - ${a.notaGeral}`));

    console.log("\nRECUPERAÇÃO:");
    Alunos.filter(a => a.notaGeral >= 5 && a.notaGeral < 7)
          .forEach(a => console.log(`${a.nome} - ${a.notaGeral}`));

    console.log("\nREPROVADOS:");
    Alunos.filter(a => a.notaGeral < 5)
          .forEach(a => console.log(`${a.nome} - ${a.notaGeral}`));
}

function listarPorEmail(){
    const email = prompt("digite o email: ");
    const pessoaExiste = Alunos.find(p => p.email === email);
    if(pessoaExiste){
        console.log("usuario: ");
        console.log(`nome: ${pessoaExiste.nome}, nota geral: ${pessoaExiste.notaGeral}, email: ${pessoaExiste.email}`);

    } else {
        console.log("aluno inexistente");
        return;
    }
}

do{
    console.log(`----Menu----
        1 - adicionar
        2 - remover
        3 - listar
        4 - listar por nota
        5 - pesquisar aluno
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
            aprovado();
            break;

        case "5":
            listarPorEmail();
            break;
        
        case "0":
            console.log("saindo...")
            break;

        default:
            console.log("invalido");
    }
} while (opcao !== "0");