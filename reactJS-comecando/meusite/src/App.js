import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 'Mateus',
      counter: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;
    state.counter += 1;
    state.nome = 'José';
    console.log('aumentou');
    this.setState(state);
  }

  diminuir() {
    let state = this.state;
    if (state.counter === 0) {
      alert('Chegou  a zero');
      return;
    } else {
      state.counter -= +1;
      this.setState(state);
    }
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.counter}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    );
  }
}

export default App;
