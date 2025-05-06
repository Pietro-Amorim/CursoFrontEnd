// Classe Livro

class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  }
  
  // Classe Biblioteca

  class Biblioteca {
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro(livro) {
      this.livros.push(livro);
    }
  
    listarLivros() {
      this.livros.forEach((livro, index) => {
        console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
      });
    }
  
    buscarPorTitulo(titulo) {
      const encontrados = this.livros.filter(livro =>
        livro.titulo.toLowerCase().includes(titulo.toLowerCase())
      );
      return encontrados;
    }
  }


  // Classe Tarefa

class Tarefa {
    constructor(descricao) {
      this.descricao = descricao;
      this.concluida = false;
    }
  
    concluir() {
      this.concluida = true;
    }
  
    exibir() {
      const status = this.concluida ? "Concluída" : "Pendente";
      console.log(`Tarefa: ${this.descricao} [${status}]`);
    }
  }
  
  // Classe ListaTarefas

  class ListaTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
    }
  
    listarTarefas() {
      this.tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.descricao} - ${tarefa.concluida ? "✅" : "❌"}`);
      });
    }
  }
  
  

  // Classe Produto

class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  // Classe CarrinhoDeCompras

  class CarrinhoDeCompras {
    constructor() {
      this.itens = [];
    }
  
    adicionarProduto(produto) {
      this.itens.push(produto);
      console.log(`${produto.nome} adicionado ao carrinho.`);
    }
  
    removerProduto(nomeProduto) {
      const index = this.itens.findIndex(p => p.nome === nomeProduto);
      if (index !== -1) {
        this.itens.splice(index, 1);
        console.log(`${nomeProduto} removido do carrinho.`);
      } else {
        console.log(`${nomeProduto} não encontrado no carrinho.`);
      }
    }
  
    calcularTotal() {
      return this.itens.reduce((total, prod) => total + prod.preco, 0);
    }
  
    listarProdutos() {
      console.log("Carrinho:");
      this.itens.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nome} - R$${p.preco.toFixed(2)}`);
      });
    }
  }
  
  
// Biblioteca
const bib = new Biblioteca();
bib.adicionarLivro(new Livro("1984", "George Orwell"));
bib.adicionarLivro(new Livro("O Hobbit", "J.R.R. Tolkien"));
bib.listarLivros();
console.log("Busca:", bib.buscarPorTitulo("hobbit"));

// Lista de Tarefas
const lista = new ListaTarefas();
const t1 = new Tarefa("Estudar JS");
const t2 = new Tarefa("Fazer exercícios");
t1.concluir();
lista.adicionarTarefa(t1);
lista.adicionarTarefa(t2);
lista.listarTarefas();

// Loja Online
const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(new Produto("Camisa", 59.9));
carrinho.adicionarProduto(new Produto("Tênis", 199.9));
carrinho.listarProdutos();
console.log("Total: R$", carrinho.calcularTotal().toFixed(2));
carrinho.removerProduto("Camisa");
carrinho.listarProdutos();