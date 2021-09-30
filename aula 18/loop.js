// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"
let loopDePares = (numA, numB, p1) => {
    for (let contagem = 0; contagem <= 100; contagem++) {
        if (contagem % numA == 0 && contagem % numB == 0) {
            console.log(p1)
        } else if (contagem % numA == 0) {
            console.log(p1);
        } else if (contagem % numB == 0) {
            console.log(p1);
        } else {
            console.log(contagem);
        }
    }
}
console.log(loopDePares(2, 2, 'O número x é par'));


// Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.
let loopDeImpares = (numA, numB, p1) => {
    for (let contagem = 0; contagem <= 100; contagem++) {
        if (contagem % numA == 1 && contagem % numB == 1) {
            console.log(p1)
        } else if (contagem % numA == 1) {
            console.log(p1);
        } else if (contagem % numB == 1) {
            console.log(p1);
        } else {
            console.log(contagem);
        }
    }
}
console.log(loopDeImpares(2, 2, 'O número x é impar'));

// Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.
// Exemplo: 
// soma(3) deve retornar 6 pois faz (1 +2 +3)
// soma(8) deve retornar 36
function soma(param) {
    for (let i = 0; i <= 10; i++) {
        console.log(i + param);
    }
};
console.log(soma(2));

// Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de elementos equivalente ao valor do número que você passou por parâmetro.
// Exemplo: 
// newArray(5) deve retornar [1,2,3,4,5]
// newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]
let numeros = [1, 2, 3, 4, 5, 6];
let format = numeros.reduce(function(num1, num2) {
    return num1 + " - " + num2;
})
console.log(format);

// Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo.
// Importante: Você não pode usar o String.split()
// Exemplo: 
// split(“olá”) deve retornar [”o”,”l”,”á”]
// split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]
let myString = 'Full Color';
let splits = myString.split()

console.log(splits);