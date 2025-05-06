// 1. Peça ao usuário para inserir seu nome e exiba a quantidade de caracteres desse nome.
function contarCaracteresNome() {
    const nome = prompt("Digite seu nome:");
    console.log(`O seu nome tem ${nome.length} caracteres.`);
}

contarCaracteresNome();

// 2. Crie uma função que receba uma frase e retorne a mesma frase toda em maiúsculas.
function fraseEmMaiusculas(frase) {
    return frase.toUpperCase();
}

console.log(fraseEmMaiusculas("Esta é uma frase de exemplo."));

// 3. Peça ao usuário para inserir uma frase e substitua todas as ocorrências da palavra "JavaScript" por "JS".
function substituirJavaScript() {
    const frase = prompt("Digite uma frase:");
    const fraseModificada = frase.replace(/JavaScript/g, "JS");
    console.log(`Frase modificada: ${fraseModificada}`);
}

substituirJavaScript();

// 4. Crie uma função que receba um nome completo e retorne apenas o primeiro nome.
function obterPrimeiroNome(nomeCompleto) {
    const nomes = nomeCompleto.split(" ");
    return nomes[0];
}

console.log(obterPrimeiroNome("João da Silva")); // João

// 5. Peça ao usuário para inserir um texto contendo vírgulas e transforme-o em um array de palavras.
function transformarTextoEmArray() {
    const texto = prompt("Digite um texto com palavras separadas por vírgulas:");
    const palavras = texto.split(",");
    console.log(palavras);
}

transformarTextoEmArray();

// 6. Desenvolva uma função que receba um e-mail e valide se ele contém "@" e ".", retornando verdadeiro ou falso.
function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

console.log(validarEmail("exemplo@dominio.com")); // true
console.log(validarEmail("exemplo@dominio")); // false
