// Funções data e hora
let agora = new Date();
console.log(agora); // Retorna a data e hora atual
console.log(agora.toDateString()); // Retorna a data no formato abreviado (ex: "Wed Feb 07 2025")
console.log(agora.toLocaleDateString()); // Retorna a data formatada conforme o local (ex: "07/02/2025" no Brasil)
console.log(agora.toLocaleTimeString()); // Retorna apenas a hora formatada


//Get
console.log(agora.getFullYear());  //mostrar o ano

//Set
agora.setFullYear(2030);
console.log(agora.toLocalDateString()); //20.02.2025

//Operações data e hora
let data1 = new Date("2025-02-04");
let data2 = new Date("2025-12-17");

let diferenca = data2-data1;

console.log(diferenca/(1000*60*60*24)); //calcular em dias