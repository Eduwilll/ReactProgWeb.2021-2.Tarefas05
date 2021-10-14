import React, { Component } from 'react';

class Identificacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Eduardo",
      sobrenome: "Fabricio",
      idade : "9"

    }
  }

  render() {
    return (
      <div>
        <h1>Nome: {this.state.nome}</h1>
        <h1>Sobrenome: {this.state.sobrenome}</h1>
        <h1>Idade: {this.state.idade}</h1>
      </div>
    );
  }
}

export default Identificacao;
