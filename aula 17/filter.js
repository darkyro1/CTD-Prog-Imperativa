let idades = [22, 8, 17, 14, 30, 28, 50];
let maiores = idades.filter(function(idade) {
    return idade > 18 && idade < 30;
});

console.log(maiores);

let names = ["Heberth", "Catia", "Marcos", "Gabriel"];
let nombre = names.filter(function(name) {
    return name != "Catia";
});
console.log(nombre);