angular.module("appUsuarios")
.controller("AppController", function ($scope, UsuarioService) {

    $scope.usuario = {};
    $scope.carregando = false;
    $scope.mensagemSucesso = "";

    $scope.salvarUsuario = function (form) {

        if (form.$invalid) return;

        $scope.carregando = true;
        $scope.mensagemSucesso = "";

        UsuarioService.salvar($scope.usuario)
            .then(function (resposta) {

                $scope.mensagemSucesso = resposta;

                $scope.usuario = {};
                form.$setPristine();
                form.$setUntouched();

            })
            .finally(function () {
                $scope.carregando = false;
            });
    };

});