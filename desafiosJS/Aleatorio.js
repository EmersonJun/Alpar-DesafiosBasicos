const prompt = require("prompt-sync")();
let num = Math.round(Math.random() * 10)
let texto = ""

do{
    texto = prompt("insira o seu numero de 0 a 100: ");
    if(texto < num){
        console.log("seu numero e menor ");
    } else {
        console.log("seu numero é maior ")
    }
} while (texto != num);
    console.log(`acertouu: numero correto ${num}`)