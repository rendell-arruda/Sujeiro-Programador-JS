import React from 'react';
import { Component } from 'react';

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
        <hr />
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá eu sou o(a) {this.props.nome}</h2>
        <h3>{this.props.cargo}</h3>
        <h3> {this.props.idade} anos</h3>
        <Social />
      </div>
    );
  }
}

const Social = () => {
  return (
    <div>
      <a>Facebook </a>
      <a>LinkedIn </a>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Mateus" cargo="Programador" idade="34" />
      <Equipe nome="Lucas" cargo="UX" idade="39" />
    </div>
  );
}

export default App;
