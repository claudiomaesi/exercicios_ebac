"use strict";

var alunos = ["Joao", "Maria", "Jose", "Pedro", "Paula", "Claudio", "Julia"];

// MAP // ATRIBUI UMA NOTA ALEATÓRIA
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: Math.floor(Math.random() * (10 - 1) + 1)
  };
});
console.log(alunos2);

// FILTER // APRESENTA APENAS ALUNOS COM NOTA >= 6
function filtraNota(alunos2) {
  return alunos2.nota >= 6;
}
var alunoNota = alunos2.filter(filtraNota);
console.log(alunoNota);