let pares = [2, 4, 6, 8, 10];
let numberImpar = pares.map(function(num) {
    return num - 1
})
console.log(numberImpar);


let names = ["Heberth", "Catia", "Marcos", "Gabriel"];
let nombre = names.filter(function(name) {
    return name != "Catia";
});
console.log(nombre);

let numeros = [1, 2, 3, 4, 5, 6];
let format = numeros.reduce(function(num1, num2) {
    return num1 + " - " + num2;
})
console.log(format);

let animais = ["Gato", "Cachorro", "Macaco"]
animais.forEach(function(animais) {
    console.log(animais);
});