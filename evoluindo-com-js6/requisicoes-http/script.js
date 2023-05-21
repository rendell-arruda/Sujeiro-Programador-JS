let listElement = document.querySelector('#app');
let URL = ' https://sujeitoprogramador.com/rn-api/?api=posts';
let posts = [];

function nutriApp() {
  //consumir api
  fetch(URL)
    //se der certo retorna o json
    .then(response => response.json())
    .then(json => {
      //passando o json para a variavel posts
      posts = json;
      //percorrendo o array de posts
      posts.map(item => {
        //criando os elementos
        let liElement = document.createElement('li');
        let titleElement = document.createElement('strong');
        let imgElement = document.createElement('img');
        let descriptionElement = document.createElement('a');

        let titleText = document.createTextNode(item.titulo);
        titleElement.appendChild(titleText);
        liElement.appendChild(titleElement);

        imgElement.src = item.capa;
        liElement.appendChild(imgElement);

        let descriptionText = document.createTextNode(item.subtitulo);
        descriptionElement.appendChild(descriptionText);
        liElement.appendChild(descriptionElement);

        listElement.appendChild(liElement);
      });
    })

    //se der errado retorna o erro
    .catch(() => {
      console.log('deu algum erro');
    });
}

nutriApp();
