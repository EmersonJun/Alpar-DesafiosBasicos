angular.module("appUsuarios", [])
.service("UsuarioService", function ($q, $timeout) {

    let usuarios = [];

    this.salvar = function (usuario) {

        let defer = $q.defer();

        $timeout(function () {
            usuarios.push(usuario);
            defer.resolve("Usuário salvo com sucesso!");
        }, 2000);

        return defer.promise;
    };

});