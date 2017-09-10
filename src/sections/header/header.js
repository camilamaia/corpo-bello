import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import './header.css';

class Header extends Component {

  // componentDidMount() {
  //     var s1 = document.getElementById('s1');

  //     s1.on('click', function(event) {

  //     });
  // }

  render() {





/*** codigo original exemplo.  https://stackoverflow.com/questions/17631417/css-pure-css-scroll-animation/17633941#17633941

    $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
****/
    return (
      <ul className="header">
          <li className='logo'>
            <img src="http://img1.topimagens.com/ti/img/facebook_42x42.png"/>
          </li>
          <li className='menu'>
            <Scrollspy items={ ['headerAnchor', 'massotherapyAnchor', 'section-3'] } 
              currentClassName="is-current">
              <li className="s1" ><a href="#headerAnchor">section 1</a></li>
              <li className="s2" ><a href="#massotherapyAnchor">section 2</a></li>
              <li className="s3" ><a href="#section-3">section 3</a></li>
            </Scrollspy>
          </li>
      </ul> 
    );
  }
}

export default Header;
