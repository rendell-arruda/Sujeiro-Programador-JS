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
      <h2>Olá sou o {props.username} </h2>
      <h3>Cargo: {props.cargo} </h3>
      <h3>Idade: {props.idade} </h3>
    </div>
  );
};

const Social = props => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      <a>LinkedIn</a>
      <a>Youtube</a>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Conheça nossa Equipe</h1>
      <Equipe
        nome="Lucas"
        idade="29"
        cargo="Programador"
        facebook="https://www.facebook.com/"
      />
      <Equipe
        nome="Ren"
        idade="36"
        cargo="Designe"
        facebook="https://www.facebook.com/"
      />
      <Equipe
        nome="Amanda"
        idade="40"
        cargo="UX"
        facebook="https://www.facebook.com/"
      />
    </div>
  );
}

export default App;
