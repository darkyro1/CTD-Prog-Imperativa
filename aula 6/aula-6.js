//Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.

// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar(a, b) {
    return a + b;
}
console.log(adicionar(10, 6));

//Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao(c, d) {
    return c - d;
}
console.log(subtracao(53, 22));

//Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicacao(e, f) {
    return e * f;
}
console.log(multiplicacao(6, 5));

//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisao(g, h) {
    return g / h;
}
console.log(divisao(20, 0));

console.log("-------------- Teste de Operações / Calculadora --------------")

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
function quadradoDoNumero(num1) {
    return multiplicacao(num1, num1);
}
console.log(quadradoDoNumero(6));

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
function mediaDeTresNumeros(med1, med2, med3) {
    return ((med1 + adicionar(med2, med3)) / 3);
}
console.log(mediaDeTresNumeros(3, 6, 15));

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
function calculaPorcentagem(porc1, porc2) {
    return multiplicacao(porc1, porc2) / 100
}
console.log(calculaPorcentagem(20, 200));

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).
function geradorDePorcentagem(ger1, ger2) {
    return multiplicacao(divisao(ger1, ger2), 100);
}
console.log(geradorDePorcentagem(60, 200));