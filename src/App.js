import React, { Component } from 'react';

// components
import Header from './components/header-components/header';
import Footer from './components/footer-component/footer';
import Homepage from './components/pages/homepage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

          <Homepage/>

        <Footer/>

      </div>
    );
  }
}

export default App;
