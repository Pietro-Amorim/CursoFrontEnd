// Função para calcular a contagem regressiva até o evento
function contagemRegressiva(evento, dataEvento) {
    const hoje = new Date();
    const eventoDate = new Date(dataEvento);
    const diffTime = eventoDate - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); // Converte para dias

    if (diffDays > 0) {
        console.log(`Faltam ${diffDays} dias para o evento "${evento}".`);
    } else if (diffDays < 0) {
        console.log(`O evento "${evento}" já aconteceu há ${Math.abs(diffDays)} dias.`);
    } else {
        console.log(`O evento "${evento}" é hoje!`);
    }
}

// Exemplo de uso
contagemRegressiva("Reunião de Trabalho", "2025-05-10");
