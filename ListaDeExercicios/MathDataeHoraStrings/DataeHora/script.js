// 1. Exibir a data e a hora atuais no formato "Hoje é [dd/mm/aaaa] e agora são [hh:mm:ss]"
function exibirDataHoraAtual() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses começam do 0
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
    
    console.log(`Hoje é ${dia}/${mes}/${ano} e agora são ${horas}:${minutos}:${segundos}`);
}

exibirDataHoraAtual();

// 2. Pedir ao usuário para inserir sua data de nascimento e calcular a idade dele em anos completos
function calcularIdade() {
    const dataNascimento = prompt("Digite sua data de nascimento (aaaa-mm-dd):");
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesNascimento = nascimento.getMonth();
    const mesAtual = hoje.getMonth();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
        idade--; // Subtrai 1 se o aniversário ainda não ocorreu este ano
    }

    console.log(`Sua idade é: ${idade} anos.`);
}

calcularIdade();

// 3. Função para receber uma data no formato "aaaa-mm-dd" e retornar o nome do dia da semana correspondente
function obterDiaSemana(dataStr) {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const data = new Date(dataStr);
    const diaSemana = data.getDay(); // Retorna o índice do dia da semana (0 a 6)
    
    return diasDaSemana[diaSemana];
}

console.log(`O dia da semana correspondente a 2025-12-25 é: ${obterDiaSemana("2025-12-25")}`);

// 4. Calcular quantos dias faltam para o próximo Natal
function diasParaONatal() {
    const hoje = new Date();
    const natal = new Date(hoje.getFullYear(), 11, 25); // 11 = dezembro, mês começa de 0 a 11

    // Se já passou o Natal, calcula para o próximo ano
    if (hoje > natal) {
        natal.setFullYear(hoje.getFullYear() + 1);
    }

    const diff = natal - hoje; // Diferença em milissegundos
    const diasFaltando = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converte para dias

    console.log(`Faltam ${diasFaltando} dias para o próximo Natal.`);
}

diasParaONatal();

// 5. Função para receber duas datas e retornar a diferença entre elas em dias
function calcularDiferencaEmDias(data1, data2) {
    const d1 = new Date(data1);
    const d2 = new Date(data2);
    
    const diff = Math.abs(d2 - d1); // Calcula a diferença absoluta entre as duas datas
    return Math.floor(diff / (1000 * 60 * 60 * 24)); // Converte para dias
}

console.log(`A diferença entre 2025-12-25 e 2025-01-01 é: ${calcularDiferencaEmDias("2025-12-25", "2025-01-01")} dias.`);
