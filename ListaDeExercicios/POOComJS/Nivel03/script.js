// Classe Funcionario

class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    salarioTotal() {
      return this.salario;
    }
  }
  
  // Classe Gerente herdando de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
      super(nome, salario);
      this.bonus = bonus;
    }
  
    // Sobrescrevendo método salarioTotal
    salarioTotal() {
      return this.salario + this.bonus;
    }
  }


  // Classe Animal
  
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    falar() {
      console.log(`${this.nome} emite um som.`);
    }
  }
  
  // Subclasse Cachorro
  class Cachorro extends Animal {
    falar() {
      console.log(`${this.nome} diz: Au au!`);
    }
  }
  
  // Subclasse Gato
  class Gato extends Animal {
    falar() {
      console.log(`${this.nome} diz: Miau!`);
    }
  }


  // Classe Carro com atributos privados

class Carro {
    #velocidade;
  
    constructor() {
      this.#velocidade = 0;
    }
  
    acelerar() {
      this.#velocidade += 10;
      console.log(`Acelerou para ${this.#velocidade} km/h`);
    }
  
    frear() {
      if (this.#velocidade >= 10) {
        this.#velocidade -= 10;
      } else {
        this.#velocidade = 0;
      }
      console.log(`Freou para ${this.#velocidade} km/h`);
    }
  
    getVelocidade() {
      return this.#velocidade;
    }
  }

  
  // Funcionário e Gerente

const f1 = new Funcionario("Alice", 3000);
console.log(`${f1.nome} recebe R$${f1.salarioTotal()}`);

const g1 = new Gerente("Bruno", 5000, 2000);
console.log(`${g1.nome} recebe R$${g1.salarioTotal()} com bônus`);

// Animais
const dog = new Cachorro("Rex");
const cat = new Gato("Luna");
dog.falar(); // Rex diz: Au au!
cat.falar(); // Luna diz: Miau!

// Carro
const carro = new Carro();
carro.acelerar();
carro.acelerar();
carro.frear();
console.log(`Velocidade atual: ${carro.getVelocidade()} km/h`);
