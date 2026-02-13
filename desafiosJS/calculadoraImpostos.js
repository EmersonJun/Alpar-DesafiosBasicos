let valorProduto = 1000;
let temDesconto = true;
let desconto = 0.10;
let icmsMax = 0.25;
let icmsMin = 0.12;

let icms = Math.random() * (icmsMax - icmsMin) +icmsMin;

let valorComDesconto = valorProduto;

if(temDesconto){
    valorComDesconto = valorProduto - (valorProduto * desconto);
}

let valorComImposto = valorComDesconto + (valorComDesconto * icms);

console.log("Valor original do produto: R$", valorProduto.toFixed(2));
console.log("Teve desconto?", temDesconto ? "Sim" : "Não");
console.log("Valor com desconto: R$", valorComDesconto.toFixed(2));
console.log("ICMS aplicado:", (icms * 100).toFixed(2) + "%");
console.log("Valor final com imposto: R$", valorComImposto.toFixed(2));
