// AULA 5

// Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function convertpol(pol) {
    let poleg = 2.54
    return pol * poleg
}
console.log(convertpol(5));

// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function funcaojs(param) {
    let http = "https://www."
    let com = ".com.br";
    return http + param + com
}
console.log(funcaojs("digitalhouse"));

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function excla(param1) {
    let ex = "!";
    return param1 + ex;
}
console.log(excla("exclamação"));

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeDog(a) {
    let anoDog = 7;
    return a * anoDog;
}
console.log(idadeDog(6));

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function horaHomem(a) {
    let hora = 160;
    return a / hora;
}
console.log(horaHomem(2000));

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.
function imc(altura, peso) {
    return peso / (altura * altura)
}

console.log(imc(1.75, 95));

//Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. Investigue o que o método de .toUpperCase() faz.
function minus(minusculo) {
    return minusculo.toUpperCase();
}
console.log(minus("tudo maiusculo agora"));

//Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.
function type(tipo) {
    return typeof tipo;
}
console.log(type("2"));

// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
function raio(rai) {
    return 2 * Math.PI * rai
}
console.log(raio(1));