app.controller("MainController", function($scope){

    $scope.registros = [];

    let dados = localStorage.getItem("registros");

if(dados){
    $scope.registros = JSON.parse(dados);
}



    $scope.filtro = {};

    $scope.salvar = function(){

        if(!$scope.novo.data || !$scope.novo.humor){
            alert("Preencha data e humor!");
            return;
        }
        let registro = new Registro(
            $scope.novo.data,
            $scope.novo.humor,
            $scope.novo.obs,
            []
        );

        $scope.registros.push(registro);

        localStorage.setItem("registros", JSON.stringify($scope.registros));

            $scope.novo = {
        data: "",
        humor: "",
        obs: ""
    };
    };

     $scope.getEmoji = function(humor){
        const emojis = {
            1: "😢",
            2: "😐",
            3: "😊",
            4: "😁",
            5: "🤩"
        };
        return emojis[humor] || "";
    };

    $scope.mediaHumor = function(){
        if($scope.registros.length === 0) return 0;

        let soma = 0;

        $scope.registros.forEach(r => {
            soma += parseInt(r.humor);
        });

        return (soma / $scope.registros.length).toFixed(1);
    };


    

});