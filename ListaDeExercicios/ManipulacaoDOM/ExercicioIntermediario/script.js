// Exercício 1: Criando Elementos Dinamicamente
document.getElementById('adicionarTexto').addEventListener('click', function() {
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Este é um novo parágrafo adicionado dinamicamente!';
    document.getElementById('conteudo').appendChild(novoParagrafo);
  });
  
  // Exercício 2: Lista de Tarefas
  document.getElementById('adicionarTarefa').addEventListener('click', function() {
    const tarefa = document.getElementById('novaTarefa').value;
    if (tarefa.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = tarefa;
  
      const botaoRemover = document.createElement('button');
      botaoRemover.textContent = 'Remover';
      botaoRemover.addEventListener('click', function() {
        li.remove();
      });
  
      li.appendChild(botaoRemover);
      document.getElementById('listaTarefas').appendChild(li);
  
      // Limpar o campo de input
      document.getElementById('novaTarefa').value = '';
    }
  });
  
  // Exercício 3: Mudar Tema
  document.getElementById('mudarTema').addEventListener('click', function() {
    const corpo = document.body;
    corpo.classList.toggle('escuro');
    corpo.classList.toggle('claro');
  });
  