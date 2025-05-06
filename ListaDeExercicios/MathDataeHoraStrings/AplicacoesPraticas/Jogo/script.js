// Função para o jogo de adivinhação
function jogoAdivinhacao() {
    const numeroSorteado = Math.floor(Math.random() * 50) + 1;
    let tentativa;
    let tentativas = 0;

    console.log("Bem-vindo ao jogo de adivinhação! O número está entre 1 e 50.");

    while (tentativa !== numeroSorteado) {
        tentativa = parseInt(prompt("Tente adivinhar o número:"));
        tentativas++;

        if (tentativa < numeroSorteado) {
            console.log("Muito baixo! Tente novamente.");
        } else if (tentativa > numeroSorteado) {
            console.log("Muito alto! Tente novamente.");
        } else {
            console.log(`Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas} tentativas.`);
        }
    }
}

jogoAdivinhacao();
