import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
          <li><a href="#section-1">section 1</a></li>
          <li><a href="#section-2">section 2</a></li>
          <li><a href="#section-3">section 3</a></li>
        </Scrollspy>
      </div>
    );
  }
}

export default Header;
