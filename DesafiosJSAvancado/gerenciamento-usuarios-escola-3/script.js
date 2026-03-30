const app = angular.module("userApp", []);

// CONTROLLER PAI
app.controller("AppController", function ($scope) {
    $scope.mensagem = "Sistema de Usuários";
});

// CONTROLLER FILHO
app.controller("ListaController", function ($scope) {

    $scope.usuarios = [
        { nome: "João", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Maria", tipo: "Professor", dataCadastro: new Date() },
        { nome: "Carlos", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Ana", tipo: "Professor", dataCadastro: new Date() },
        { nome: "Pedro", tipo: "Aluno", dataCadastro: new Date() }
    ];

});