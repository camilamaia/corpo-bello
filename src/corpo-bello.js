import React, { Component } from 'react';
import logo from './logo.svg';
import './corpo-bello.css';
import Header from './sections/header/header.js';
import MassotherapySection from './sections/massotherapySection/massotherapySection.js';
import Home from './sections/home.js';

class CorpoBello extends Component {
  render() {
    return (
      <div className="corpo-bello">
        <Header/>
        <div className="content">
          <section id="headerAnchor">
            <Home/>
            <br/><br/><br/><br/>1<br/><br/><br/><br/><br/><br/>2<br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>3<br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>4<br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>5<br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </section>
          <section id="massotherapyAnchor">
            <MassotherapySection/>
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
