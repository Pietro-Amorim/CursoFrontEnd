//Manipulação de String (Cadeia de caracteres)
let texto = "Aula de JavaScript";

//contar quantos caracteres tem essa variavel
console.log(texto.length); //18 caracteres

//Maiúsculas e minúsculas
console.log(texto.toUpperCase()); //Maiúsculas
console.log(texto.toLowerCase()); //Minúsculas

//paetes da string
console.log(texto.substring(0, 4)); //Aula
console.log(texto.slice(-10)); //JavaScript

//Substituição de partes da string
let texto2 = texto.replace("Java", "Type"); //Aula de TypeScript
console.log(texto2);

//Tesoura(trim)
let texto3 = " JavaScript ";
console.log(texto3); //" JavaScript "
console.log(texto3.trim()); //"JavaScript"

//Separação de string
let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);


//Desafio
//Contar a qauntidadde de caracteres sem espaço
let desafio = "Bom Dia Com Muita Alegria";
let solucaodesafio = desafio.replaceAll(" ","");
console.log(desafio);
console.log(solucaodesafio);
console.log(desafio.length);
console.log(solucaodesafio.length);