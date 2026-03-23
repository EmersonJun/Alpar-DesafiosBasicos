// No JavaScript, arrays herdam métodos úteis através de Array.prototype, como map, filter,
// reduce e outros.
// Neste desafio, sua missão é recriar alguns desses métodos manualmente, simulando
// como eles funcionam por trás dos panos.
// Regras:
// 1. Crie um array qualquer com alguns números ou strings.
// 2. Recrie manualmente os seguintes métodos usando Array.prototype:
// o meuMap()
// o meuFilter()
// o meuReduce()
// Cada um deles deve funcionar da mesma forma que o original:
// Exemplo esperado:
// const numeros = [1, 2, 3];
// const dobrados = numeros.meuMap(n => n * 2); // [2, 4, 6]
// Dicas:
//  Use Array.prototype.meuMap = function(callback) { ... }
//  Use this para acessar o array dentro da função
//  Teste comparando o resultado com os métodos nativos
// Desafio bônus: recrie também meuForEach() ou meuFind()
// Guarde esse desafio no repositório de sempre na pasta: prototipos


const numeros = [1, 2, 3, 4, 5];

Array.prototype.meuMap = function(callback) {
    const resultado = [];

    for (let i = 0; i < this.length; i++) {
        resultado.push(callback(this[i], i, this));
    }

    return resultado;
};

Array.prototype.meuFilter = function(callback) {
    const resultado = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            resultado.push(this[i]);
        }
    }

    return resultado;
};

Array.prototype.meuReduce = function(callback, valorInicial) {
    let acumulador = valorInicial;
    let inicio = 0;

    if (acumulador === undefined) {
        acumulador = this[0];
        inicio = 1;
    }

    for (let i = inicio; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }

    return acumulador;
};

Array.prototype.meuForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.meuFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

console.log(numeros.meuMap(n => n * 2)); 

console.log(numeros.meuFilter(n => n > 2)); 

console.log(numeros.meuReduce((acc, n) => acc + n, 0)); 

numeros.meuForEach(n => console.log("Item:", n));

console.log(numeros.meuFind(n => n === 3)); 