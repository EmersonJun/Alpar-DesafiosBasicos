// Você foi contratado para criar um sistema simples de exibição de perfis em um site de
// uma escola. Crie as seguintes classes em JavaScript:
// Uma classe base chamada Usuario, que possui:
//  propriedades: nome, email, senha
//  método: exibirPerfil() que mostra na tela o nome e o email
// Duas subclasses:
//  Aluno, que herda de Usuario e adiciona a propriedade turma
//  Professor, que herda de Usuario e adiciona a propriedade matérias
// Um arquivo adicional, pode ser ou não uma classe, para realizar o login e armazenar os
// usuários em um array. Crie alguns usuários alunos e professores e guarde nesse array. Ao
// usuário digitar o email e a senha em uma tela de login, você deve verificar se o email e a
// senha batem com um dos usuários no array. Se sim, guardar o usuário no localStorage e
// redirecionar para uma tela que exibirá dados, buscando no localStorage. Se não, mostrar
// um erro abaixo da senha.
// Cada uma das subclasses deve sobrescrever o método exibirPerfil() para incluir suas
// informações adicionais.
// Depois, crie instâncias de Aluno e Professor e chame o método exibirPerfil() de cada uma
// para ver os diferentes comportamentos no console.
// Dica: você pode usar innerHTML += ‘...’ para mostrar os dados na página.
// Dica: Use window.location.href para redirecionar entre páginas.
// Guarde esse desafio no repositório de sempre na pasta: sistema-escolar

class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    exibirPerfil() {
        return `
            <p><strong>Nome:</strong> ${this.nome}</p>
            <p><strong>Email:</strong> ${this.email}</p>
        `;
    }
}

class Aluno extends Usuario {
    constructor(nome, email, senha, turma) {
        super(nome, email, senha);
        this.turma = turma;
    }

    exibirPerfil() {
        return `
            ${super.exibirPerfil()}
            <p><strong>Turma:</strong> ${this.turma}</p>
        `;
    }
}

class Professor extends Usuario {
    constructor(nome, email, senha, materias) {
        super(nome, email, senha);
        this.materias = materias;
    }

    exibirPerfil() {
        return `
            ${super.exibirPerfil()}
            <p><strong>Matérias:</strong> ${this.materias.join(", ")}</p>
        `;
    }
}

const usuarios = [
    new Aluno("Carlos", "carlos@email.com", "123", "3A"),
    new Aluno("Ana", "ana@email.com", "123", "2B"),
    new Professor("João", "joao@email.com", "123", ["Matemática", "Física"]),
    new Professor("Maria", "maria@email.com", "123", ["História"])
];

function fazerLogin() {
    const email = document.getElementById("email")?.value;
    const senha = document.getElementById("senha")?.value;
    const erro = document.getElementById("erro");

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        window.location.href = "perfil.html";
    } else {
        if (erro) erro.innerText = "Email ou senha inválidos!";
    }
}

function carregarPerfil() {
    const dados = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!dados) {
        window.location.href = "index.html";
        return;
    }

    let usuario;

    if (dados.turma) {
        usuario = new Aluno(dados.nome, dados.email, dados.senha, dados.turma);
    } else if (dados.materias) {
        usuario = new Professor(dados.nome, dados.email, dados.senha, dados.materias);
    }

    const div = document.getElementById("perfil");
    if (div) {
        div.innerHTML = usuario.exibirPerfil();
    }
}

const testeAluno = new Aluno("Teste", "t@t.com", "123", "1A");
const testeProfessor = new Professor("Prof", "p@p.com", "123", ["Geo"]);

console.log(testeAluno.exibirPerfil());
console.log(testeProfessor.exibirPerfil());
