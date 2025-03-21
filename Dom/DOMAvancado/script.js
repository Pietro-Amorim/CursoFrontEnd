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