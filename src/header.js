import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import HeaderButton from './headerButton.js';
import './style/header.css';

class Header extends Component {
  render() {

    return (
      <ul className="header">
          <li className='logo'>
            <img src="http://img1.topimagens.com/ti/img/facebook_42x42.png"/>
          </li>
          <li className='menu'>
            <Scrollspy items={ ['header-anchor', 'massotherapy-anchor', 'section-3'] } 
              currentClassName="is-current">
              <HeaderButton id={"s1"} title={"Section 1"} anchoredTo={"header-anchor"} />
              <HeaderButton id={"s2"} title={"Section 2"} anchoredTo={"section-3"}/>
              <HeaderButton id={"s3"} title={"Section 3"} anchoredTo={"massotherapy-anchor"} />
              <HeaderButton id={"s4"} title={"Section 4"} anchoredTo={"massotherapy-anchor"} />
            </Scrollspy>
          </li>
      </ul> 
    );
  }
}

export default Header;