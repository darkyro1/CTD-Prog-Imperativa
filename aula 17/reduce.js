let numeros = [1, 5, 9, 12];
let soma = numeros.reduce(function(acumulador, numero) {
    console.log(acumulador, numero);
    return acumulador + numero;
})
console.log(soma);


let nomes = ["Heberth", "Catia", "Marcos", "Gabriel", "Carla", "Clara"];
let names = nomes.reduce(function(acumular, nome) {
    console.log(acumular, nome);
    return acumular + " " + " " + nome;
})
console.log(names);