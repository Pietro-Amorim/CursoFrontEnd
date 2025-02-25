//Criar um programa que receba varias notas e calcule a media

const prompt = require("prompt-sync")();
let vetorNotas = [];
let contador = 0;
let continuar = true;
while (continuar) {
    console.log("|============= Opções ===============|")
    console.log("|1. Digitar nova nota                |")
    console.log("|2. Calcular média                   |")
    console.log("|3. Sair                             |")
    console.log("|====================================|")
    let Operacao = prompt( "Escolha a Opção desejada: ");
    switch (Operacao) {
        case "1":
            contador++
            let nota = Number(prompt("Digite a nota do aluno"+contador+": "));
            vetorNotas.push(nota);
            break;

        case "2":
            let media = vetorNotas.reduce((x, y) => x+y, 0) / vetorNotas.length;
            console.log("A média da sala é ")
            break;
        
        case "3":
            continuar = false;
            console.log("Saindo...")
            break;

        default:
            break;
    }
}