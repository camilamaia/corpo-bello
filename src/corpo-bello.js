import React, { Component } from 'react';
import logo from './images/logo.svg';
import './style/corpo-bello.css';

import Header from './header.js';
import Massotherapy from './sections/massotherapy.js';
import Home from './sections/home.js';

class CorpoBello extends Component {
  render() {
    return (
      <div className="corpo-bello">
        <Header/>
        <div className="content">
          <section id="home-anchor">
            <Home/>
            <br/><br/><br/><br/>1<br/><br/><br/><br/><br/><br/>2<br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>3<br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>4<br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>5<br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </section>
          <section id="massotherapy-anchor">
            <Massotherapy/>
            <br/><br/><br/>1<br/><br/><br/><br/><br/>2<br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>3<br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>4<br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>5<br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </section>
          <section id="section-3">
            Section 3 <br/>
          </section>
        </div>
      </div>
    );
  }
}

export default CorpoBello;
