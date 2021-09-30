let EstudanteModulo = require("./revisao1");

let estudante1 = new EstudanteModulo("Marcelo", 1, [7, 8, 9, 10]);

console.log(estudante1.faltas);
console.log(estudante1.ausente());
console.log(estudante1.faltas);

let curso = {
  nomeDoCurso: "JavaScript",
  notaAprovacao: 7,
  faltasMaximas: 4,
  listaAlunos,
};
