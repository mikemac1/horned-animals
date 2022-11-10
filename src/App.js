import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import beastData from './data.json';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalShown: false,
      selectedBeast: {},
      allBeast: beastData
    }
  }

  displayBeastModal = (selectedBeast) => {

    this.setState({
      modalShown: true,
      selectedBeast: selectedBeast
    });
  };

  closeBeastModal = () => {
    console.log('Inside of close modal');
    this.setState({
      modalShown: false
    });
  };


  render() {
    return (
      <>
        <Header></Header>
        <Main
          Data={beastData}
          displayBeastModal={this.displayBeastModal}
        />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.modalShown}
          onHide={this.closeBeastModal}
        />
        <Footer></Footer>
        
      </>
    );
  }
}

export default App;