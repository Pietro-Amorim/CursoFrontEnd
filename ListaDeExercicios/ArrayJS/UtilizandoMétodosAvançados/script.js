let numeros = [15, 8, 22, 5, 19, 30];

// a. Ordenar em ordem crescente
let ordenado = [...numeros].sort((a, b) => a - b);
console.log("Ordem crescente:", ordenado);

// b. Filtrar números maiores que 10
let maioresQue10 = numeros.filter(num => num > 10);
console.log("Números maiores que 10:", maioresQue10);

// c. Somar todos os valores
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Soma total dos números:", soma);