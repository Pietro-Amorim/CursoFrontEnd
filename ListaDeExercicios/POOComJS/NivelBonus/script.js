// Relógio

class Relogio {
    constructor(elementoId) {
      this.elemento = document.getElementById(elementoId);
    }
  
    iniciar() {
      this.atualizar();
      setInterval(() => this.atualizar(), 1000);
    }
  
    atualizar() {
      const agora = new Date();
      const hora = agora.toLocaleTimeString();
      this.elemento.textContent = `Hora atual: ${hora}`;
    }
  }
  
  const relogio = new Relogio("relogio");
  relogio.iniciar();
  


  // Formulário com Validação

  class FormularioUsuario {
    constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.erros = [];
    }
  
    validar() {
      this.erros = [];
      if (this.nome.trim() === "") this.erros.push("Nome é obrigatório.");
      if (!this.email.includes("@")) this.erros.push("E-mail inválido.");
      if (this.senha.length < 6) this.erros.push("Senha deve ter pelo menos 6 caracteres.");
      return this.erros.length === 0;
    }
  
    exibirErros() {
      const divErros = document.getElementById("erros");
      divErros.innerHTML = this.erros.map(e => `<p>${e}</p>`).join("");
    }
  }
  
  document.getElementById("formUsuario").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const form = new FormularioUsuario(nome, email, senha);
    if (form.validar()) {
      alert("Formulário enviado com sucesso!");
      document.getElementById("formUsuario").reset();
      document.getElementById("erros").innerHTML = "";
    } else {
      form.exibirErros();
    }
  });
  


  // Jogo de Adivinhação

  class Jogo {
    constructor() {
      this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
      this.tentativas = 0;
    }
  
    tentar(numero) {
      this.tentativas++;
      if (numero === this.numeroSecreto) {
        return `🎉 Acertou em ${this.tentativas} tentativa(s)! O número era ${this.numeroSecreto}.`;
      } else if (numero < this.numeroSecreto) {
        return "🔼 Tente um número maior.";
      } else {
        return "🔽 Tente um número menor.";
      }
    }
  }
  
  const jogo = new Jogo();
  
  function tentarPalpite() {
    const valor = parseInt(document.getElementById("palpite").value);
    const resposta = jogo.tentar(valor);
    document.getElementById("resultado").textContent = resposta;
  }
  