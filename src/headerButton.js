import React, { Component } from 'react';
import './style/header.css';

class HeaderButton extends Component {

  componentDidMount() {
    var thisElement = document.getElementById(this.props.id);
    var anchoredToElement = document.getElementById(this.props.anchoredTo);

    thisElement.onclick = function () { 
      scrollToItem(anchoredToElement);
    };

    var scrollToItem = function (item) {
      var smoothness = 20
      var diff=(item.offsetTop-window.scrollY)/smoothness;
      if(!window._lastDiff){
          window._lastDiff = 0;
      }

      if (Math.abs(diff)>2) {
          window.scrollTo(0, (window.scrollY+diff))
          clearTimeout(window._TO)

          if(diff !== window._lastDiff){
              window._lastDiff = diff;
              var milisecondsExecution = 15;
              window._TO=setTimeout(scrollToItem, milisecondsExecution, item);
          }
      } else {
          window.scrollTo(0, item.offsetTop)
      }
    }     
  }

  render() {
    return (
      <li id={this.props.id} >{this.props.title}</li> 
    );
  }
}

export default HeaderButton;
