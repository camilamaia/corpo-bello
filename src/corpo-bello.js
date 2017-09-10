import React, { Component } from 'react';
import logo from './logo.svg';
import './corpo-bello.css';
import Header from './header.js';
import Home from './sections/home.js';

class CorpoBello extends Component {
  render() {
    return (
      <div className="corpo-bello">
        <Header/>
        <div className="content">
          <section id="section-1">
            <Home/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
            Section 1 <br/>
          </section>
          <section id="section-2">
            Section 2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
            2 <br/>
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
