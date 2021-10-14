import React, { Component } from 'react';

class Retangulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comprimento: 8,
            largura: 5
        }
    }
    mudarLargura() {
        this.setState({largura : 6})
    }
    
    render() {

        return (
            <div>
                <p>A área do retângulo é: {this.state.comprimento * this.state.largura} </p>
                <button onClick={this.mudarLargura.bind(this)}>Mudar Largura</button>
            </div>
        );
    }
}

export default Retangulo;
