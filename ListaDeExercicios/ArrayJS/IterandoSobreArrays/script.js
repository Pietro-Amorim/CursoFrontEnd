// Criando o array com os números de 1 a 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. Usando loop for
console.log("Usando loop for:");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// b. Usando forEach
console.log("Usando forEach:");
numeros.forEach(function(numero) {
  console.log(numero);
});