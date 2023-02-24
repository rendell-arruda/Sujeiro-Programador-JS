import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    {
      super(props);
      this.state = {
        hora: '00:00:00'
      };
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('Atualizou');
  }

  render() {
    return (
      <div>
        <h1>Meu projeto</h1>
        <h3>{this.state.hora}</h3>
      </div>
    );
  }
}

export default App;
