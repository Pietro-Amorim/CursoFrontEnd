// Selecionando os elementos
const h1 = document.querySelector("#titulo");
const p = document.querySelector("#paragrafo");
const btnSelecionar = document.querySelector("#btnSelecionar");
const btnModificarTexto = document.querySelector("#btnModificarTexto");
const btnFundoAzul = document.querySelector("#btnFundoAzul");
const btnToggleClasse = document.querySelector("#btnToggleClasse");

// Exibindo conteúdo no console
btnSelecionar.onclick = () => {
  console.log(h1.textContent);
  console.log(p.textContent);
};

// Modificando texto
btnModificarTexto.onclick = () => {
  h1.textContent = "Título Modificado";
  p.textContent = "Parágrafo alterado com sucesso!";
};

// Alterando cor do fundo
btnFundoAzul.onclick = () => {
  document.body.style.backgroundColor = "#add8e6";
};

// Adicionando/Removendo classe
btnToggleClasse.onclick = () => {
  h1.classList.toggle("highlight");
};
