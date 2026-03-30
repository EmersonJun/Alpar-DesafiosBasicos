angular.module("appUsuarios")
.service("UsuarioService", function () {

    let usuarios = [
        { nome: "João", tipo: "Aluno" },
        { nome: "Maria", tipo: "Professor" }
    ];

    this.listar = function () {
        return usuarios;
    };

    this.adicionar = function (usuario) {
        usuarios.push(usuario);
    };

    this.remover = function (index) {
        usuarios.splice(index, 1);
    };

});