// Função para calcular os dias faltando para o vencimento
function diasParaVencimento(dataVencimento) {
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);
    const diffTime = vencimento - hoje; // Diferença em milissegundos
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); // Converte para dias

    if (diffDays > 0) {
        console.log(`Faltam ${diffDays} dias para o vencimento.`);
    } else if (diffDays < 0) {
        console.log(`A conta venceu há ${Math.abs(diffDays)} dias.`);
    } else {
        console.log("A conta vence hoje!");
    }
}

// Exemplo de uso
diasParaVencimento("2025-05-10");
