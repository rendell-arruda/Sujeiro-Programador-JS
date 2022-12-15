const area = document.querySelector('#area');
console.log(area);

function entrar() {
  let nome = prompt('Digito seu nome');

  if (nome === '' || nome === null) {
    alert('Opss algo deu errado');
    area.innerHTML = 'Clique no botão para acessar';
  } else {
    area.innerHTML = `Bem vindo ${nome} `;
    let botaoSair = document.createElement('button');
    botaoSair.innerHTML = 'Sair da conta';
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
  }
}

function sair() {
  alert('Atá mais');
  area.innerHTML = 'voce saiu';
}

function mediaAluno(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  if (media >= 5) {
    console.log(`Aluno aprovado com a média ${media}`);
  } else {
    console.log(`Aluno reprovado com média ${media}`);
  }
}

function aluno(nome, curso) {
  let mensagem = `Seja bem vindo aluno ${nome} ao curso de ${curso}`;
  console.log(mensagem);
}
