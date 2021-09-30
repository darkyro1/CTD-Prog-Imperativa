let numeros = [5, 9];
let soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
})

let array = numeros.map(function(num) {
    return soma / num;
})

console.log(soma);
console.log(array);
console.log("-----------------------------------------------------------------------");

let palavras = ["Heberth", "Marcos", "Clara"];
let number = 5;

let filtrar = palavras.filter(function(names, tamanho) {
    return names.length = tamanho;
})
console.log(filtrar);

console.log("-----------------------------------------------------------------------");


let alunos = [
    { nome: 'Heberth', nota: 8 },
    { nome: 'Marcos', nota: 9 },
    { nome: 'Clara', nota: 8 },
    { nome: 'Gabriel', nota: 6 },
    { nome: 'Rubens', nota: 9 },
];

function nota(arr) {
    return arr.sort((a, b) => b.nota - a.nota)
}

function nomes(arr) {
    return arr.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1;
        }
        if (a.nome < b.nome) {
            return -1;
        }
        return 0;
    })
}

console.log('--- exercicio 03 - nota decrescente ---');
console.log(nota(alunos));
console.log(nomes(alunos));