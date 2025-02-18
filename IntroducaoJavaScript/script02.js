// Estrutura de Dados

//condicionais (if Else / SwitchCase)

//IF
var precoProduto = 150;
if (precoProduto >= 100){
    console.log("Valor a pagar: "+(precoProduto*0.9));
}else{
    console.log("Valor a pagar: "+(precoProduto))
}

//SwitchCase
var mes = 2;
switch (mes) {
    case 1: 
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");

    default:
        console.log("Outro Mes")
        break;
}


// Estruturas de Repetição

//For (Casos contaveis)
for(let i = 0; i<=100; i++){
    console.log(i);
}

// While (Casos incontáveis)
var continuar = true; //condição de parada
//a parada acontece quando continuar for falso
var numeroEscolhido = 3;
var contador = 0;

while(continuar){
    contador++;
    let numeroSorteado = Math.round(Math.random()*10);
    if(numeroEscolhido == numeroSorteado){
        continuar = false;
        console.log("Acertou mizeravi");
    }
    console.log("Tentativas: "+contador);
}


//Funções (ação específica) podendo ser chamada a qualquer momento dentro do código
function ola (nome){  //function return
    return "Olá, "+nome;
}

function hello (nome){  //function void
    console.log("Hello, "+nome);
}

console.log(ola("Pietro"));

hello("Pietro");