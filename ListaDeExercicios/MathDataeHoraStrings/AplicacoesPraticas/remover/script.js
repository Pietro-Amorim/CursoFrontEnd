// Função para remover os pontos e o hífen de um CPF
function formatarCPF(cpf) {
    return cpf.replace(/[^\d]/g, ''); // Remove tudo o que não for número
}

console.log(formatarCPF("123.456.789-00")); // "12345678900"
