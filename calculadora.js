//Variavel Adição 2 Parâmetros
function adicionar(a, b) {
    return a + b;
}

//Variavel Subtração 2 Parâmetros
function subtracao(a, b) {
    return a - b;
}

//Variavel Multiplicação 2 Parâmetros
function multiplicacao(a, b) {
    return a * b;
}

//Variavel Divisão 2 Parâmetros
function divisao(a, b) {
    return a / b;
}

console.log("-------------- Teste de Operações / Calculadora --------------")
console.log("Resultado da Adição: " + adicionar(8, 2));
console.log("Resultado da Subtração: " + subtracao(8, 2));
console.log("Resultado da Multiplicação: " + multiplicacao(8, 2));
console.log("Resultado da Divisão: " + divisao(8, 0));

//Quadrado do Número
function quadradoDoNumero(a) {
    let quadrado = multiplicacao(a, a);
    return quadrado;
}
console.log("O número 2 elevado ao quadro é: " + quadradoDoNumero(2));

//Media de três Números
function mediaDeTresNumeros(a, b, c) {
    let soma = adicionar(a, b + c);
    return soma / 3;
}
console.log("A média dos números 3, 6 e 15 é: " + mediaDeTresNumeros(3, 6, 15));

// alular Porcentagem
function calculaPorcentagem(a, b) {
    let multi = multiplicacao(a, b);
    return multi / 100;
}
console.log("15% de 300 é: " + calculaPorcentagem(300, 15) + "%");

//Gerador de Porcentagem
function geradorDePorcentagem(a, b) {
    return multiplicacao(divisao(a, b), 100);
}
console.log("10 é: " + geradorDePorcentagem(10, 200) + "% de 200");

