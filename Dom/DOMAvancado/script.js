//adicionar elementos avançados com DOM
//Construir um cabeçalho com DOM (Header)

let header = document.createElement("header"); //criou elementos
header.style.backgroundColor = "black";
header.style.height = "8vh";
document.body.appendChild(header);//adicionando header como elementos filho do body
document.body.style.margin = "0";//retirando a margem do body

//Adicionar elementos no header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "white";
divNav.style.height = "100%";
divNav.style.alignItems ="center"
divNav.style.fontSize ="5vh"
divNav.style.fontFamily="Comic Sans MS"

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"];

//Adicionando itens no header
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);
})

//Rodapé
let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "7vh";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.width = "100%";

document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.display = "flex";
divFooter.style.justifyContent = "space-between";
divFooter.style.height = "100%";
divFooter.style.height = "100%";
divFooter.style.width = "90%"
divFooter.style.alignItems = "start";
divFooter.style.color = "aliceBlue";
divFooter.style.fontSize = "2vh";
divFooter.style.fontFamily = "Comic Sans MS";
footer.appendChild(divFooter);

//criar texto para o footer
let menuFooter = ["End. Rua Senai, 1000", "Tel. 19 - 9999 - 99999", "Email: digogo@gmail.com", "@CopyRight 2025"];
//foreach para adicionar os itens no footer
menuFooter.forEach(item =>{
    let p = document.createElement("p");
    p.innerText = item;
    divFooter.appendChild(p);
})

//clonando alementos com dom
let card = document.createElement("div");
card.classList.add("card"); //adicionando a classe card no elemento
card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "blue";

//criar container parea adicionar aos cards
let container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.width = "90%";
container.style.flexWrap = "wrap";

//botao para clonar o card
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar";
document.body.appendChild(btnClonar);//add btn ao body
document.body.appendChild(container);//add container ao body
container.appendChild(card);//add card ao container

//adicionar evento ao botão
btnClonar.addEventListener("click", () =>{
    let clone = card.cloneNode(true); //clona o card
    container.appendChild(clone); // add o clone ao container
})

//criar chave para adicionar modo escuro
let chave = document.createElement("input");
chave.type = "checkbox";
chave.id = "darkMode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px";
document.body.appendChild(chave);
//criar um evento para adicionar o modo escuro
chave.addEventListener("change", () => {
    document.body.classList.toggle("darkMode");
})

//eventos avançados com DOM
// capturando letra digitada -> function
document.addEventListener("keydown", (event)=>{
    console.log("Tecla pressionada: " +event.key);
})

//função para sugestão de texto -> 
let input = document.createElement("input");
input.type = "text";
input.id = "busca";
input.placeholder = "Digite para buscar...";
document.body.appendChild(input);
//criar uma lista de sugestões
let lista = document.createElement("ul");
lista.id = "sugestoes";
lista.style.listStyle = "none";
document.body.appendChild(lista);
//criar um vetor de sugestões
let sugestoes = [
    "JavaScript", "Java", "Python", "C#", "PHP", "Dart", "Kotlin"
];

//evento para capturar o texto e sugerir
document.getElementById("busca").addEventListener("keyup", ()=>{
    let texto = input.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach( sugestao => {
        if(sugestao.toLowerCase().includes(texto)){
            let item = document.createElement("li");
            //selecionar a palavra da lista
            item.style.cursor = "pointer";
            item.addEventListener("click", () => {
                input.value = sugestao;
                lista.innerHTML = "";
            })
            item.innerText = sugestao;
            lista.appendChild(item);
        }
    });

})

//criação de formulário e evento de varificação
let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form);
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu nome";
inputNome.id = "nome";
form.appendChild(inputNome);
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Digite seu email";
inputEmail.id = "email";
form.appendChild(inputEmail);

//Botao de envio
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);

//adicionar um paragrafo para mostrar as mensagens de validação do for
let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);

//Evento de validação do formulário
document.getElementById("formCadastro").addEventListener("submit", (event) => {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");
    if (nome === "" || email=== "") {
        mensagem.innerText = "Preencha todos os campos";
        mensagem.style.color = "red";
    } else {
        mensagem.innerText = "Cadastro realizado com sucesso";
        mensagem.style.color = "green";
        //Limpar os campos do formulário
        nome = "";
        email = "";
    }
}); 