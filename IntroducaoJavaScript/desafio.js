//Verificação de Idade

var prompt = require("prompt-sync")();

function menu(){
    let idade;
    console.log("==== Qual a sua idade? ====");
    idade = Number(prompt("Informe a sua idade: "));

    if (idade < 18){
        console.log("O usuário é de menor.");
    } else {
        console.log("O usuário é de maior.");
    }
}

menu();  



//Tabuada

for(let i = 0; i <= 10; i++){
    let resultado = 5 * i;
    console.log('5 x '+i+' = '+(i*5))
}



//Verificação de Números Pares

for(let i = 1 ; i<=20 ; i++){
    let resto = (i%2);
    if(resto == 0){
        console.log(i);
    }
}