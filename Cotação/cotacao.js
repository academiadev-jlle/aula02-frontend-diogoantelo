document.addEventListener('DOMContentLoaded', onLoadDOM);
function onLoadDOM() {
  avaliaCotacao();

  document.querySelector('#botao-cadastrar').addEventListener('click', adicionar);
}

function avaliaCotacao() {
  const tabela = document.querySelectorAll('.linha');
  
  tabela.forEach(row => {
    const sugestao = row.querySelector('.sugestao');
    const cotacao = parseInt(row.querySelector('.cotacao').textContent);
  
    sugestao.textContent = cotacao > 50 ? 'Vender' : 'Manter em carteira';
  });
}

function adicionar(evet) {
  const form = document.querySelector('.form-cotacao');
  const acao = form.acao.value;
  const cotacao = form.cotacao.value;

  const row = document.createElement('tr');
  const elAcao = document.createElement('td');
  const elCotacao = document.createElement('td');
  const elSugestao = document.createElement('td');

  elAcao.textContent = acao;
  elCotacao.textContent = cotacao;
  elSugestao.textContent = cotacao > 50 ? 'Vender' : 'Manter em carteira';

  row.appendChild(elAcao);
  row.appendChild(elCotacao);
  row.appendChild(elSugestao);

  const tabela = document.querySelector('.tabela-cotacao tbody');
  tabela.insertBefore(row, tabela.childNodes[1]);
}
