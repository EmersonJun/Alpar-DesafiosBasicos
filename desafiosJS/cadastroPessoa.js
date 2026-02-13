const prompt = require("prompt-sync")();

    let pessoa = [];
    let opcao;

    function adicionar(){
        const nome = prompt("digite o nome: ");
        const idade = Number(prompt("digite sua idade: "));
        const email = prompt("digitr seu email: ");

        const emailExiste = pessoa.some(p => p.email === email);
            
        if(emailExiste){
            console.log("ja existe usuario com esse email");
            return;
        }

        pessoa.push({nome, idade, email});
        console.log("usuario cadastrado");
    }

    function remover(){
        const email = prompt("digite o email a ser removido: ");
        const emailEncontrado = pessoa.findIndex(p => p.email === email);

        if(emailEncontrado == -1){
            console.log("email nao encontrado");
            return;
        }

        pessoa.splice(emailEncontrado, 1);
        console.log("usuario removido");
    }

    function listar(){
        if(pessoa.length == 0){
            console.log("nenhum usuario encontrado");
            return;
        }

        console.log("usuarios existentes");
        pessoa.forEach((p, i) => {
            console.log(`${i + 1}. nome: ${p.nome}, idade: ${p.idade}, email: ${p.email}`);
        })
    }

    do{
            console.log(`MENU
1 - Adicionar usuário
2 - Remover usuário por e-mail
3 - Listar usuários
0 - Sair`);

                opcao = prompt("escolha sua opcao: ");

                switch(opcao){
                    case "1":
                        adicionar();
                        break;

                    case "2":
                        remover();
                        break;

                    case "3":
                        listar();
                        break;

                    case "0":
                        console.log("encerrando.....")
                        break;

                    default:
                        console.log("opcao invalida...");
                }
        } while (opcao !== "0");