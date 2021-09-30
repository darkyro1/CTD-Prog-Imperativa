
// let estudante = {
//   nome: "Fulano",
//   faltas: 5,
//   notas: [7, 8, 6, 10],
// };
// console.log(estudante.nome);


function Estudante(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
}

let stud = new Estudante("Heberth", 0, [10, 8, 7, 9]);

console.log(stud);

