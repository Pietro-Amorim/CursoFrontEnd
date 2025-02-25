// Exercício 1

let array = []; 
let arrayTexto = ["Maçã", "Laranja", "Banana", "Uva"];

arrayTexto.push("Melancia");
console.log(arrayTexto); 

// Exercício 2

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("índice [" + i + "] = " + arrayNumeros[i]);
}
arrayNumeros.forEach(num => {
    console.log(num);
})