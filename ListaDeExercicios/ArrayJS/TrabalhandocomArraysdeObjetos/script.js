let alunos = [
    { nome: "João", idade: 20, nota: 8.5 },
    { nome: "Maria", idade: 22, nota: 9.0 },
    { nome: "Pedro", idade: 19, nota: 7.5 }
];

// a. Adicionar um novo aluno
alunos.push({ nome: "Ana", idade: 21, nota: 8.8 });
console.log("Lista atualizada de alunos:", alunos);

// b. Encontrar o aluno com a maior nota usando reduce
let melhorAluno = alunos.reduce((maior, atual) => {
    return (atual.nota > maior.nota) ? atual : maior;
});
console.log("Aluno com a maior nota:", melhorAluno);

// c. Filtrar alunos com nota maior que 8
let aprovados = alunos.filter(aluno => aluno.nota > 8);
console.log("Alunos com nota maior que 8:", aprovados);

