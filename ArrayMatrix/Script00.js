//Declaração de um array "[]"
let array = []; //array dinamico

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "Caixa", "Meia"];
let arrayMisto = [1,"Pietro", true];

//tamanho de uma array (length)
console.log(arrayNumeros.length); //9

//acessar elemento da array (index)
console.log(arrayTexto[1]); // posição-1

//Adicionar elementos numa array
// - no começo (unshift)
arrayTexto.unshift("Tenis");
console.log(arrayTexto);

// - no fim (push)
arrayTexto.push("Chinelo")
console.log(arrayTexto);

//TRocar um valor
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

//remover elementos array
//no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);

//no fim (pop)
arrayTexto.pop();
console.log(arrayTexto);

//percorrer um Array (laços de repetição) -
//percorrer o array de numeros
for(let i =0;i < arrayNumeros.length; i++){
    console.log("Indice["+i+"]="+[arrayNumeros[i]]);
}

//forEach
arrayTexto.forEach(element => {
    console.log(element);
});

//Metodos uteis em arrays
// indexOf
console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 (elemento inexistente)

//Splice (remover elemento da posição)
arrayMisto.splice(3, 1);
console.log(arrayMisto);

//Operações avançadas de arrays
