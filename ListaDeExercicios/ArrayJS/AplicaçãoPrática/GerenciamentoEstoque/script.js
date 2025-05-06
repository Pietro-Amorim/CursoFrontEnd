let estoque = [
    { produto: "Arroz", quantidade: 10, preco: 5.0 },
    { produto: "Feijão", quantidade: 20, preco: 7.5 },
    { produto: "Macarrão", quantidade: 15, preco: 4.0 }
];

// a. Adicionar novo produto
function adicionarProduto(nome, qtd, preco) {
    estoque.push({ produto: nome, quantidade: qtd, preco: preco });
}

// b. Atualizar quantidade de um produto existente
function atualizarQuantidade(nome, novaQtd) {
    let item = estoque.find(p => p.produto === nome);
    if (item) {
        item.quantidade = novaQtd;
    } else {
        console.log("Produto não encontrado.");
    }
}

// c. Calcular valor total do estoque
function calcularValorTotal() {
    return estoque.reduce((total, item) => total + (item.quantidade * item.preco), 0);
}

// Exemplo de uso:
adicionarProduto("Açúcar", 12, 3.5);
atualizarQuantidade("Feijão", 25);
console.log("Valor total do estoque: R$", calcularValorTotal().toFixed(2));
console.log(estoque);
