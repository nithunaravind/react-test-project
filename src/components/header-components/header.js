import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      
        <header>
            
            <div className="img-hold">
                <img src={require("./img/page-heder.png")} alt="logo" />
            </div>

        </header>

    );
  }
}

export default Header;
