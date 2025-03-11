// Parte 1
let h1 = document.getElementsByTagName("h1");
let p = document.getElementsByTagName("p");
let button = document.getElementsByTagName("button");

console.log(h1);
console.log(p);
console.log(button);

// Parte 2
function MudarH1() {
    let h1 = document.querySelector("h1");
    h1.innerText = "Exercício";
}

function MudarP() {
    let p = document.querySelector("p");
    p.innerText = "Alterou o Paragrafo";
}

// Parte 3
function MudarFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}

// Parte 4
function AlterarClasse() {
    let h1 = document.querySelector("h1");
    
    // Verificando se o título já tem a classe 'AlterarClasse'
    if (h1.classList.contains("AlterarClasse")) {
        h1.classList.remove("AlterarClasse");  // Se tiver, removemos a classe
    } else {
        h1.classList.add("AlterarClasse");  // Se não tiver, adicionamos a classe
    }
}