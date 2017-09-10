import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import './header.css';

class Header extends Component {
  render() {
    return (
      <ul className="header">
          <li className='logo'>Logo</li>
          <li className='menu'>
            <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } 
              currentClassName="is-current">
              <li><a href="#section-1">section 1</a></li>
              <li><a href="#section-2">section 2</a></li>
              <li><a href="#section-3">section 3</a></li>
            </Scrollspy>
          </li>
      </ul> 
    );
  }
}

export default Header;
