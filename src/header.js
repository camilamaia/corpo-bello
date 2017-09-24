import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import './style/header.css';
import logo from './images/logo.png';

class Header extends Component {
  render() {
    return (
      <ul className="header">
        <li className="logo">
          <img src={logo} alt="Logo" />
        </li>
        <li className="menu">
          <Scrollspy
            items={['headerAnchor', 'massotherapyAnchor', 'section-3']}
            currentClassName="is-current"
          >
            <li className="s1">
              <a href="#header-anchor">Home</a>
            </li>
            <li className="s2">
              <a href="#massotherapy-anchor">section 2</a>
            </li>
            <li className="s3">
              <a href="#section-3">section 3</a>
            </li>
          </Scrollspy>
        </li>
      </ul>
    );
  }
}

export default Header;
