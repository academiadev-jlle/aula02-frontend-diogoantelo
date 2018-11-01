document.addEventListener('DOMContentLoaded', onLoadDOM);
function onLoadDOM() {
  document.querySelector('#botao-cadastrar').addEventListener('click', adicionar);
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function inserePokemon(poke) {
  poke.types.sort(function(a, b){return a.slot - b.slot});
  
  const row = document.createElement('tr');
  
  const elNro = document.createElement('td');
  elNro.textContent = poke.id;
  
  const elName = document.createElement('td');
  elName.setAttribute('class', 'poke-name');
  elName.textContent = capitalize(poke.name);
  
  const elImage = document.createElement('td');
  const image = document.createElement('img');
  image.setAttribute('src', poke.sprites.front_default);
  image.setAttribute('class', 'poke-img');
  elImage.appendChild(image);
  
  const elTypes = document.createElement('td');
  elTypes.setAttribute('class', 'poke-types');
  poke.types.forEach(type => {
    const elType = document.createElement('span');
    elType.setAttribute('class', type.type.name);
    elType.innerHTML = `${capitalize(type.type.name)}&nbsp;`;
    
    elTypes.appendChild(elType);
  });
  
  const elStats = document.createElement('td');
  elStats.setAttribute('class', 'poke-stats');
  elStats.innerHTML = poke.stats.map((stat) => `${capitalize(stat.stat.name)}: ${stat.base_stat}<br>`).toString().replace(/,/g,'');;

  row.appendChild(elNro);
  row.appendChild(elName);
  row.appendChild(elImage);
  row.appendChild(elTypes);
  row.appendChild(elStats);

  const tabela = document.querySelector('.tabela-poke tbody');
  tabela.insertBefore(row, tabela.firstChild);
}

function pegaPoke(nro, cbFunction) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);

        cbFunction(response);
      }
  };
  xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${nro}/`, true);
  xhttp.send();
}

function adicionar(evet) {
  const form = document.querySelector('.form-poke');
  const nro = form.nro.value;

  
  if (nro === '') {
    alert('Adivinha eu não sou, me da um número pra eu procurar');
    return;
  }

  if(isNaN(nro)) {
    alert('Digita um número ai por favor');
    return;
  }

  poke = pegaPoke(nro, inserePokemon);

  form.nro.value = '';
}
