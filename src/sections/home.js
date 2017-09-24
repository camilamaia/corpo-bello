import React, { Component } from 'react';

import '../style/sections/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="title-banner">
          <h1>
            <strong>Massagens </strong>
            <small>Relaxantes, Terapêuticas e Tântricas</small>
          </h1>
          <h1>
            <strong>Depilação </strong>
            <small>Masculina e Feminina</small>
          </h1>
          <h1 className="companyName">
            Corpo Bello Centro de Estética e Massoterapia
          </h1>
        </div>
        <div className="private-parking-banner">
          <h4>Estacionamento privativo</h4>
        </div>
        <div className="contact">
          (48) 3307.5497 | (48) 99600.0870 | (48) 99147.5169
        </div>
        <div className="address">
          AV. Engenheiro Max de Souza Nº906 | Coqueiros - Florianópolis
        </div>
      </div>
    );
  }
}

export default Home;
