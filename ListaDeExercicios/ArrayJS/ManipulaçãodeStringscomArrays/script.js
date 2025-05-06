// Criando o array inicial
let palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];

// a. Transformar o array em uma frase completa
let frase = palavras.join(" ");
console.log("Frase completa:", frase);

// b. Adicionar "muito" na posição correta (antes de "poderosa")
palavras.splice(4, 0, "muito"); // insere na posição 4 sem remover nada

// Exibindo a nova frase com a palavra adicionada
let novaFrase = palavras.join(" ");
console.log("Frase atualizada:", novaFrase);
