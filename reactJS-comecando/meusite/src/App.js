import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {};
=======
    this.state = {
      form: {
        nome: '',
        email: '',
        senha: '',
        sexo: ''
      }
    };

    this.dadosForm = this.dadosForm.bind(this);
>>>>>>> 67a929d06396fd6b6a2760a8e8d1e82f58718496
  }

  dadosForm(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  }

  render() {
<<<<<<< HEAD
    return <div>Email</div>;
=======
    return (
      <div>
        <h2>Login</h2>
        Nome:
        <input
          type="text"
          name="nome"
          value={this.state.form.nome}
          onChange={this.dadosForm}
        />
        <br />
        Email:
        <input
          type="email"
          name="email"
          value={this.state.form.email}
          onChange={this.dadosForm}
        />{' '}
        <br />
        Senha:
        <input
          type="text"
          name="senha"
          value={this.state.form.senha}
          onChange={this.dadosForm}
        />
        <br />
        Sexo:
        <select
          name="sexo"
          value={this.state.form.sexo}
          onChange={this.dadosForm}
        >
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <div>
          <h3>{this.state.form.nome}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    );
>>>>>>> 67a929d06396fd6b6a2760a8e8d1e82f58718496
  }
}

export default App;
