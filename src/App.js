import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Data from './data.json';
import Footer from './Footer.js';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <>
      <Header></Header>
      <Main
      Data={Data}
      />
      <Footer></Footer>
      </>
    );
  }
}

export default App;