import React from 'react';

const Bemvindo = props => {
  return (
    <div>
      <h2>Bem vindo {props.nome}</h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  );
};

function App() {
  return (
    <div>
      <Bemvindo nome="Mateus" idade="29" />
      <Bemvindo nome="Amanda" idade="27" />
      <h1>Olá Mundo</h1>
    </div>
  );
}

export default App;
