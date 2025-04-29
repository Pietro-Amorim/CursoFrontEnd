//Atividade 3: Criar uma classe representando uma conta bancária

// Classe ContaBancaria
class ContaBancaria {
    #titular;
    #saldo;

    // Construtor
    constructor(titular, saldo = 0) {
        this.#titular = titular;
        this.#saldo = saldo;
    }

    // Métodos
    depositar(valor) {
        this.#saldo += valor;
        console.log(`Depósito realizado com sucesso! Saldo atual: R$ ${this.#saldo.toFixed(2)}`);
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            console.log(`Saque realizado com sucesso! Saldo atual: R$ ${this.#saldo.toFixed(2)}`);
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    exibirSaldo() {
        console.log(`Saldo atual: R$ ${this.#saldo.toFixed(2)}`);
    }
}

// Instanciar os objetos
let conta = new ContaBancaria("João", 1000);
conta.exibirSaldo();
conta.depositar(500);
conta.sacar(200);
conta.exibirSaldo();