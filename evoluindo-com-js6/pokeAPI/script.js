let url = 'https://pokeapi.co/api/v2/pokemon/25';
let listElement = document.querySelector('#app');
let nome = document.querySelector('#nome');
let id = document.querySelector('#numero');
let pic = document.querySelector('#pic');

function nutriPokeApp() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      nome.innerHTML = data['name'];
      id.innerHTML = data['id'];
      let img = data['sprites']['front_default'];
      pic.setAttribute('src', img);
    })
    .catch(erro => {
      console.log('deu algum erro: erro' + erro);
    });
}

nutriPokeApp();
