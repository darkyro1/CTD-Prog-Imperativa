function somar(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

console.log("-------------- Teste de Operações / Calculadora --------------")
console.log("Resultado da Soma: " + somar(8, 3));
console.log("Resultado da Subtração: " + sub(8, 3));
console.log("Resultado da Multiplicação: " + mult(8, 3));
console.log("Resultado da Divisão: " + div(8, 0));

function quadradoDoNumero(a) {
    let quadrado = mult(a, a);
    return quadrado;
}
console.log("Resultado do Quadrado no Número 8 é: " + quadradoDoNumero(8));

function mediaDeTresNumeros(a, b, c) {
    let som = somar(a, b);
    let total = somar(som, c);
    let dividir = div(total, 3);
    let media = dividir;
    return media;
}
console.log("A Média de 8, 3 e 5 é: " + mediaDeTresNumeros(8, 3, 5));


function calculaPorcentagem(a, b) {
    let divporc = div(b, 100);
    let multporc = mult(divporc, a);
    return multporc
}
console.log("A Porcentagem é: " + calculaPorcentagem(300, 15) + "%")


function geradorDePorcentagem(a, b) {
    var valor = mult(div(a, b), 100);
    return valor;
}
var p1 = 9;
var p2 = 90;
var porcentagem = geradorDePorcentagem(p1, p2);
console.log(p1 + " representa " + porcentagem + "% de " + p2);
