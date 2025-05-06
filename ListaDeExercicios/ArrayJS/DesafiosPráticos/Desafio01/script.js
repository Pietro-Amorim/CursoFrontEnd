let cores = ["azul", "vermelho", "verde", "azul", "amarelo", "verde", "azul"];

function contarCores(array) {
    let contagem = {};
    array.forEach(cor => {
        contagem[cor] = (contagem[cor] || 0) + 1;
    });
    return contagem;
}

console.log(contarCores(cores));
// Saída esperada: { azul: 3, vermelho: 1, verde: 2, amarelo: 1 }
