// Declaração de uma array "[]"
let array = []; // Array dinâmico 

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "caixa", "meia"];
let arrayMisto = [1, "José", true];

// Tamanho de uma array
console.log(arrayNumeros.length); // 9 

// Acessar um elemento do array (index) - "caixa"
console.log(arrayTexto[1]); // "caixa"

// Adicionar elementos no array
// No começo (unshift)
arrayTexto.unshift("Tênis");
console.log(arrayTexto); 

// No fim (push)
arrayTexto.push("Chinelos");
console.log(arrayTexto); 

// Trocar um valor 
arrayTexto[2] = "Sacola";
console.log(arrayTexto); 

// Remover elementos do array
// No começo (shift)
arrayTexto.shift();
console.log(arrayTexto); 

// No fim (pop)
arrayTexto.pop();
console.log(arrayTexto);

// Percorrer um array (Laço de repetição)
for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("índice [" + i + "] = " + arrayNumeros[i]);
}

// ForEach
arrayTexto.forEach(elemento => {
    console.log(elemento);
});

// Métodos úteis

// indexOf
console.log(arrayNumeros.indexOf(5)); // 4
console.log(arrayNumeros.indexOf(10)); // -1 (elemento inexistente)

// splice (remover elemento da posição)
arrayMisto.splice(1, 2);
console.log(arrayMisto);

// Operações avançadas de arrays
// map - novos valores
let valores = [10, 20, 30, 40, 50];
let valoresDobro = valores.map(x => x * 2);
console.log(valoresDobro);

// filter - comparação 
let valoresFilter = valores.filter(x => x > 25);
console.log(valoresFilter);

// Desafio (Filtro x < 35 && triplicar o valor de (x * 3) = [30, 60, 90]
let valoresDesafios = valores.filter(x => x < 35);
let valoresTriplicados = valoresDesafios.map(x => x * 3);
console.log(valoresTriplicados); 

//reduce ([] -> let x)
let soma = valores.reduce((ValorSoma, ValorElemento) => ValorSoma+ValorElemento);
console.log(soma)

//sort (organizar)
let aleatorio = [7, 4, 2, 9, 3, 5, 1, 6, 8];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);