import React, { Component } from 'react';

import '../style/sections/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
      	<div className="title-banner">
	      	<h1>Centro de Estética e Massoterapia</h1>
	      	<h3>
	      		<span>Massagens Relaxante, Terapêutica e Tântrica</span><br/>
	      		<span>Depilação Masculina e Feminina</span>
	      	</h3>
	  	</div>
	  	<div className="private-parking-banner">
	  		<h4>Estacionamento privativo</h4>
	  	</div>
	  	<div className="contact">
	  		(48) 3307.5497 | (48) 99600.0870 | (48) 99147.5169
	  	</div>   
	  	<div className="adress">
	  		AV. Engenheiro Max de Souza Nº906 | Coqueiros - Florianópolis
	  	</div>   
      </div>
    );
  }
}

export default Home;
