// 1. Gerar um número aleatório entre 1 e 100 e exibi-lo no console
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número aleatório entre 1 e 100:", numeroAleatorio);

// 2. Função para calcular a raiz quadrada de um número
function calcularRaizQuadrada(numero) {
    return Math.sqrt(numero);
}
console.log("Raiz quadrada de 16:", calcularRaizQuadrada(16));

// 3. Função para retornar o maior número entre dois sem usar if, apenas com Math.max()
function maiorNumero(num1, num2) {
    return Math.max(num1, num2);
}
console.log("Maior número entre 25 e 30:", maiorNumero(25, 30));

// 4. Pedir ao usuário um número decimal e exibir as formas arredondadas
let numeroDecimal = parseFloat(prompt("Digite um número decimal:"));

console.log("Número arredondado para cima:", Math.ceil(numeroDecimal));
console.log("Número arredondado para baixo:", Math.floor(numeroDecimal));
console.log("Número arredondado para o inteiro mais próximo:", Math.round(numeroDecimal));
