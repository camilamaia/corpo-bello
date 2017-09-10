import React, { Component } from 'react';
import logo from './logo.svg';
import './corpo-bello.css';

class CorpoBello extends Component {
  render() {
    return (
      <div className="corpo-bello">
        <div className="corpo-bello-header">
          <img src={logo} className="corpo-bello-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="corpo-bello-intro">
          To get started, edit <code>src/corpo-bello.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default CorpoBello;
