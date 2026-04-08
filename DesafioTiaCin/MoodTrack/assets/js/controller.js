app.controller("MainController", function ($scope) {
  $scope.novo = { data: "", humor: "", obs: "" };
  $scope.filtro = { data: "", humor: "" };
  $scope.registros = [];

  db.on("value", function (snapshot) {
    var lista = [];
    snapshot.forEach(function (child) {
      var item = child.val();
      item._key = child.key;
      lista.push(item);
    });
    $scope.registros = lista;
    $scope.$apply();
  });

  $scope.salvar = function () {
    if (!$scope.novo.data || !$scope.novo.humor) {
      alert("Preencha data e humor!");
      return;
    }

    var dataFormatada =
      $scope.novo.data instanceof Date
        ? $scope.novo.data.toISOString().slice(0, 10)
        : String($scope.novo.data);

    var registro = new Registro(
      dataFormatada,
      $scope.novo.humor,
      $scope.novo.obs,
      [],
    );
    db.push(registro);
    $scope.novo = { data: "", humor: "", obs: "" };
  };

  $scope.remover = function (index) {
    var key = $scope.registros[index]._key;
    db.child(key).remove();
  };

  $scope.formatarData = function (data) {
    if (!data) return "";
    var d = new Date(data);
    var dia = String(d.getUTCDate()).padStart(2, "0");
    var mes = String(d.getUTCMonth() + 1).padStart(2, "0");
    var ano = d.getUTCFullYear();
    return dia + "/" + mes + "/" + ano;
  };

  $scope.getEmoji = function (humor) {
    var emojis = { 1: "😢", 2: "😐", 3: "😊", 4: "😁", 5: "🤩" };
    return emojis[humor] || "";
  };

  $scope.registrosFiltrados = function () {
    return $scope.registros.filter(function (r) {
      var okData = !$scope.filtro.data || r.data === $scope.filtro.data;
      var okHumor =
        !$scope.filtro.humor || String(r.humor) === String($scope.filtro.humor);
      return okData && okHumor;
    });
  };

  $scope.mediaHumor = function () {
    if ($scope.registros.length === 0) return 0;
    var soma = 0;
    $scope.registros.forEach(function (r) {
      soma += parseInt(r.humor);
    });
    return (soma / $scope.registros.length).toFixed(1);
  };
});
