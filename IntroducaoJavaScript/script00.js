// introdução JavaScript

//Tipo de Dados(escopo, tipagem)
//tipo - string - text
var nome = "Pietro"; //variavel de escopo global ou função
    nome = " José" //redefinir valor
var nome = "Pedro" //redeclaração da var

//tipo - number
let Idade = 17; //variavel de escopo local
Idade = 26; //redefinir - ok
// a tipagem let nao pode ser redefinida

//tipo - number
const PI = 3.1415; //constante
//a tipagem const nao pode ser redefinida ou redeclarada

//ipo boolean
var aprovado = true;

//tipo undefined
var media;

//tipo null - vazio
var info = null;

console.log("Nome "+nome);
console.log("Idade "+Idade);
console.log("PI "+PI);
console.log("Aprovação: "+aprovado);
console.log("media: "+media);
console.log("Informações "+info);
