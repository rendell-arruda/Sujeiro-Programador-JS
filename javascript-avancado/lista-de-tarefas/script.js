let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = JSON.parse(localStorage.getItem('@listTarefas')) || []; //lista de tarefas buscada no storege local ou uma lista vazia

function renderTarefas() {
  listElement.innerHTML = '';

  tarefas.map(todo => {
    //o map percurre a lista

    let liElement = document.createElement('li'); //criando elemento li
    let tarefaText = document.createTextNode(todo); //criando texto

    let linkElement = document.createElement('a'); //cria o item a
    linkElement.setAttribute('href', '#'); // passa atributos ao a

    let linkText = document.createTextNode('Excluir'); //cria o texto do link
    linkElement.appendChild(linkText); //passa o texto ao a

    let posicao = tarefas.indexOf(todo); // pega a posicao da tarefa na lista

    linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`); //chama a funcao deletarTarefa ao clicar no excluir passando a posicao

    liElement.appendChild(tarefaText); //colocando o texto na li
    liElement.appendChild(linkElement); //colocando o link a no li
    listElement.appendChild(liElement); //colocando li na ul
  });
}
renderTarefas(); // tenta renderizar a lista logo ao iniciar

function adicionarTarefas() {
  if (inputElement.value === '') {
    alert('Digite alguma tarefa');
    return false;
  } else {
    let novaTarefa = inputElement.value;
    tarefas.push(novaTarefa); //add item na lista tarefas
    inputElement.value = ''; // deixa em branco os campos

    renderTarefas(); // cria a lista
    salvarDados(); //salva no bando de dados local
  }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao) {
  tarefas.splice(posicao, 1);
  renderTarefas();
  salvarDados();
}

//salvar dados no localStorege
function salvarDados() {
  localStorage.setItem('@listTarefas', JSON.stringify(tarefas));
}
