// Classe Aluno

class Aluno {
    constructor(nome) {
      this.nome = nome;
      this.notas = [];
    }
  
    adicionarNota(nota) {
      if (nota >= 0 && nota <= 10) {
        this.notas.push(nota);
      } else {
        console.log("Nota inválida. Insira um valor entre 0 e 10.");
      }
    }
  
    calcularMedia() {
      if (this.notas.length === 0) return 0;
      const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
      return soma / this.notas.length;
    }
  
    situacao() {
      const media = this.calcularMedia();
      return media >= 7 ? "Aprovado" : "Reprovado";
    }
  }
  

  // Classe Produto (Estoque)

  class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    vender(qtd) {
      if (qtd <= this.quantidade) {
        this.quantidade -= qtd;
        console.log(`${qtd} unidade(s) vendida(s) de ${this.nome}.`);
      } else {
        console.log(`Estoque insuficiente para vender ${qtd} unidade(s).`);
      }
    }
  
    repor(qtd) {
      this.quantidade += qtd;
      console.log(`${qtd} unidade(s) reposta(s) de ${this.nome}.`);
    }
  
    exibirInfo() {
      console.log(`Produto: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Estoque: ${this.quantidade}`);
    }
  }
  

  // Classe ContaBancaria

  class ContaBancaria {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado.`);
      } else {
        console.log("Valor inválido para depósito.");
      }
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado.`);
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
  }

  
  // Aluno
const aluno1 = new Aluno("Carlos");
aluno1.adicionarNota(8);
aluno1.adicionarNota(6);
console.log(`Média: ${aluno1.calcularMedia().toFixed(2)} | Situação: ${aluno1.situacao()}`);

// Produto
const produto1 = new Produto("Caneta", 2.5, 100);
produto1.vender(20);
produto1.repor(10);
produto1.exibirInfo();

// Conta Bancária
const conta = new ContaBancaria("Joana");
conta.depositar(500);
conta.sacar(200);
conta.sacar(400); // Saldo insuficiente
conta.consultarSaldo();
