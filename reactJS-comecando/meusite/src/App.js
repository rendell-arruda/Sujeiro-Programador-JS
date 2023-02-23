import React from 'react';

const Equipe = props => {
  return (
    <div>
      <Sobre username={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} />
      <hr />
    </div>
  );
};

const Sobre = props => {
  return (
    <div>
      <h2>Olá sou o {props.username}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  );
};

const Social = props => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a>LinkedIn </a>
      <a>Youtube</a>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe
        nome="Lucas"
        cargo="Programador"
        idade="29"
        facebook="https://www.facebook.com/"
      />
      <Equipe
        nome="Ricardo"
        cargo="Designe"
        idade="18"
        facebook="https://www.facebook.com/"
      />
      <Equipe
        nome="Amanda"
        cargo="Backend"
        idade="38"
        facebook="https://www.facebook.com/"
      />
    </div>
  );
}

export default App;
