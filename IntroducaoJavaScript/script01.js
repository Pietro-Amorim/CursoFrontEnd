// Tipos De Operações

// Operadores Aritméticos (+, -, *, /, %)
var a = 10;
var b = 3;

console.log("Soma: "+ (a+b));//13
console.log("Subtração: "+ (a-b));//7
console.log("Multiplicação: "+ (a*b));//30
console.log("Divisão: "+ (a/b));//3.333
console.log("Resto: "+ (a%b));//1


//operadores relacionais (>, >=, <, <=, ==(igualdade simples), ===(extritamente igual))
//true or false
var a = 10;
var b = 20;
var c = "10"

console.log("Relacionais: "+(a>b)); //false
console.log("Igualdade simples: "+(a==c)); //true
console.log("Igualdade estrita: "+(a===b)); //false


//Operadores Lógicos (&& - E, || - ou, ! - Não)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: " +nota1>7 && nota2>7); //false
console.log("Aprovação: " +nota1>7 || nota2>7); //true
console.log(!false); //true