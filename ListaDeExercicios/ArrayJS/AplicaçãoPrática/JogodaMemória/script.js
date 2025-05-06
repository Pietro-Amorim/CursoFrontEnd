function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let palavras = ["gato", "gato", "cão", "cão"];
embaralhar(palavras);

let descobertas = Array(palavras.length).fill(false);

// Simulação de tentativa (substitua por interatividade real se quiser)
function tentar(pos1, pos2) {
    if (pos1 === pos2 || descobertas[pos1] || descobertas[pos2]) {
        console.log("Posições inválidas ou já descobertas.");
        return;
    }

    console.log(`Tentativa: ${palavras[pos1]} vs ${palavras[pos2]}`);

    if (palavras[pos1] === palavras[pos2]) {
        console.log("Par encontrado!");
        descobertas[pos1] = true;
        descobertas[pos2] = true;
    } else {
        console.log("Não é um par.");
    }

    console.log("Estado atual:", descobertas);
}

// Exemplo de tentativas:
tentar(0, 1);
tentar(2, 3);
