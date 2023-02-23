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
        <Social fb={this.props.facebook} />
        <hr />
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá eu sou o {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    );
  }
}

const Social = props => {
  return (
    <div>
      <a href={props.fb}>Facebook </a>
      <a>Instagram</a>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe
        nome="Rendell"
        cargo="Programador"
        idade="31"
        facebook="https://www.facebook.com/"
      />
      <Equipe nome="Ricardo" cargo="Designer" idade="42" />
    </div>
  );
}

export default App;
