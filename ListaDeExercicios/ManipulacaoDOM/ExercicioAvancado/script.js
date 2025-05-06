// Exercício 1: Capturando Eventos do Teclado
document.getElementById('campoTeclado').addEventListener('keydown', function(event) {
  document.getElementById('teclaPressionada').textContent = 'Tecla pressionada: ' + event.key;
});

// Exercício 2: Campo de Busca com Sugestões Dinâmicas
document.getElementById('campoBusca').addEventListener('input', function() {
  const valorBusca = document.getElementById('campoBusca').value.toLowerCase();
  const sugestoes = ['Apple', 'Banana', 'Laranja', 'Uva', 'Manga']; // Lista de sugestões
  const listaSugestoes = document.getElementById('sugestoes');
  listaSugestoes.innerHTML = ''; // Limpa as sugestões

  if (valorBusca) {
    sugestoes.filter(item => item.toLowerCase().includes(valorBusca))
      .forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaSugestoes.appendChild(li);
      });
  }
});

// Exercício 3: Validação de Formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const erroFormulario = document.getElementById('erroFormulario');

  if (!nome || !email) {
    event.preventDefault(); // Previne o envio do formulário
    erroFormulario.textContent = 'Por favor, preencha todos os campos.';
  } else {
    erroFormulario.textContent = ''; // Limpa a mensagem de erro
  }
});

// Exercício 4: Galeria de Imagens Dinâmica
document.getElementById('inputImagem').addEventListener('change', function(event) {
  const arquivos = event.target.files;
  const galeria = document.getElementById('galeriaImagens');
  galeria.innerHTML = ''; // Limpa a galeria antes de adicionar novas imagens

  Array.from(arquivos).forEach(arquivo => {
    const img = document.createElement('img');
    const url = URL.createObjectURL(arquivo);
    img.src = url;
    galeria.appendChild(img);
  });
});

// Exercício 5: Jogo de Quiz
document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio do formulário

  const resposta = document.querySelector('input[name="resposta"]:checked');
  const resultadoQuiz = document.getElementById('resultadoQuiz');

  if (resposta) {
    if (resposta.value === 'certo') {
      resultadoQuiz.textContent = 'Resposta correta!';
    } else {
      resultadoQuiz.textContent = 'Resposta errada, tente novamente!';
    }
  } else {
    resultadoQuiz.textContent = 'Por favor, selecione uma resposta.';
  }
});
