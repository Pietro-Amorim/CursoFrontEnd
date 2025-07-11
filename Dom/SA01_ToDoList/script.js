// Script para Lista de tarefas -> Dom

document.body.style.backgroundColor ="black";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Comic Sans MS";
let container = document.querySelector(".container")
container.style.width = "50%";
container.style.backgroundColor = "red";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "20px";
let tarefa = document.getElementById("tarefa");
tarefa.style.width = "50%";
tarefa.style.padding = "10px";
tarefa.style.borderRadius = "5px";
let btnenviar = document.getElementById("btnEnviar");
btnEnviar.style.padding = "6px 8px";
btnEnviar.style.border = "none";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.backgroundColor = "white";
btnEnviar.style.color ="black";
btnEnviar.style.cursor = "pointer";

//Lógica de FUncionamento da lista de tarefas

//criar o ouvinte para tarefa
btnEnviar.addEventListener("click", criarTarefa);

function criarTarefa(){
    let texto = tarefa.value.trim();
    if(texto === ""){
        return;
    }
    //Se não estiver vazio 
    let li =  document.createElement("li");
    li.innerHTML = texto + '<button onclick= "removeTarefa(this)" class ="btnRemove">Remover</button>';
    //adicionar li -> ul
        let ul = document.getElementById("listaTarefas");
        ul.appendChild(li);
    //Apaga o campo do input
    tarefa.value = "";
}

//function remove tarefa
function removeTarefa(botao){
    botao.parentElement.remove();
}

function MudarFundo() {
    let cores = ["red", "black", "white"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
};