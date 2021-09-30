const { min } = require("moment");



// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
//Opção 1
let nomes = ["Heberth", "Catia", "Clara", "James", "Fabiana", "Emanuely"];
function imprimirInverso(array) {
  return array.reverse();
}
console.log(imprimirInverso(nomes));

//Opção 2
nomes.reverse(function imp(a) {
  return a;
});
console.log(nomes);


// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
//Opção 1
function inverter() {
  let array1 = nomes.reverse();
  return array1;
}
console.log(inverter());

//Opção 2
array2 = nomes.reverse(function impr(a, b) {
  return a - b;
});
console.log(array2);



let numeros = [10, 3, 10, 4];

function somarArray() {
  let num = numeros.reduce()
  return num
}

console.log(somarArray());


// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
// Exemplo:
// somarArray([1,2,3])                // 6
// somarArray([10, 3, 10, 4])     // 27
// somarArray([-5,100])             // 95

function somarArray(array) {
  let somador = 0;
  for (let i = 0; i < array.length; i++) {
    somador += array[i];
  }
  return somador;
}
console.log(somarArray([2, 6, 8]));