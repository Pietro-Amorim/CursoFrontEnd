// Lista de participantes
const participantes = [
    "João", "Maria", "Pedro", "Ana", "Carlos",
    "Paula", "Lucas", "Luana", "Rafael", "Fernanda"
];

// Função para realizar o sorteio
function sorteio() {
    const vencedor = participantes[Math.floor(Math.random() * participantes.length)];
    console.log(`O vencedor do sorteio é: ${vencedor}`);
}

sorteio();
