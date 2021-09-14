let adicao = require("./adicao")
let subtracao = require("./subtrair")
let divisao = require("./divisao")
let multiplicacao = require("./multiplicacao")
let json = require("./json")
let array = require("./array")

console.log("Adição de 10 + 3 = " + adicao(10, 3));
console.log("-----------------------");
console.log("Subtração de 10 - 3 = " + subtracao(10, 3));
console.log("-----------------------");
console.log("Divisão de 10 / 3 = " + divisao(10, 3));
console.log("-----------------------");
console.log("Multiplicação de 10 * 3 = " + multiplicacao(10, 3));
console.log("-----------------------");
console.log("Seu nome é: " + json.nome + " " + json.sobrenome + " vocé é milionario: " + json.milionario);
console.log("-----------------------");
console.log("Você quer ter um(a): " + array[2]);
console.log("-----------------------");