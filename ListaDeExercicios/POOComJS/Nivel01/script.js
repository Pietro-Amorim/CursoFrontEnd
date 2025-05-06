// Classe Pessoa

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  


  // Classe Livro

  class Livro {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    exibirInfo() {
      console.log(`Livro: "${this.titulo}" por ${this.autor}, com ${this.paginas} páginas.`);
    }
  }
  


  // Classe Calculadora

  class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      if (b === 0) {
        return 'Erro: Divisão por zero';
      }
      return a / b;
    }
  }
  
// Testando Pessoa
const pessoa1 = new Pessoa("Pietro", 17);
pessoa1.apresentar(); // Olá! Meu nome é Ana e tenho 25 anos.

// Testando Livro
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 256);
livro1.exibirInfo(); // Livro: "Dom Casmurro" por Machado de Assis, com 256 páginas.

// Testando Calculadora
console.log(Calculadora.somar(10, 5));        // 15
console.log(Calculadora.subtrair(10, 5));     // 5
console.log(Calculadora.multiplicar(10, 5));  // 50
console.log(Calculadora.dividir(10, 2));      // 5
console.log(Calculadora.dividir(10, 0));      // Erro: Divisão por zero