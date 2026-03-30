angular.module("appUsuarios")
.controller("AppController", function ($scope, UsuarioService) {

    $scope.usuarios = UsuarioService.listar();

    $scope.novo = {
        nome: "",
        tipo: "Aluno"
    };

    $scope.adicionarUsuario = function () {
        if (!$scope.novo.nome) return;

        UsuarioService.adicionar({
            nome: $scope.novo.nome,
            tipo: $scope.novo.tipo
        });

        $scope.novo.nome = "";
        $scope.novo.tipo = "Aluno";
    };

    $scope.removerUsuario = function (index) {
        UsuarioService.remover(index);
    };

});