const app = angular.module("userApp", []);

app.controller("AppController", function ($scope) {
    $scope.mensagem = "Sistema de Usuários";
});

app.controller("ListaController", function ($scope) {

    $scope.usuarios = [
        { nome: "João", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Maria", tipo: "Professor", dataCadastro: new Date() },
        { nome: "Carlos", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Ana", tipo: "Professor", dataCadastro: new Date() },
        { nome: "Pedro", tipo: "Aluno", dataCadastro: new Date() }
    ];

});