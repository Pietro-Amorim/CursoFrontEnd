function media(array) {
    if (array.length === 0) return 0; // evita divisão por zero
    let soma = array.reduce((total, num) => total + num, 0);
    return soma / array.length;
}

// Exemplo de uso:
let numeros = [10, 20, 30, 40, 50];
console.log(media(numeros)); // Saída: 30