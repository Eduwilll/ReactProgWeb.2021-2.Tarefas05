import React, { Component } from 'react';

class relogio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()

    }
  }
  
  render() {
    const { date } = this.state;
    var displaytime = date.getHours("00") + ':' + date.getMinutes("00") + ':' + date.getSeconds("00");

    return (

      <div>
        <h1>Olá, React!</h1>
        <h1>Agora é {displaytime}</h1>
      </div>
      
    );
  }
}

export default relogio;
