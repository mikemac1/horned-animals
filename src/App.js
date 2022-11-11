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

  handleFilter = (event) => {
    let horns = event.target.value;
    let newData;
    if (horns === '1') {
      newData = beastData.filter(beast => beast.horns === 1)
    } else if (horns === '2') {
      newData = beastData.filter(beast => beast.horns === 2)
    } else if (horns === '3') {
      newData = beastData.filter(beast => beast.horns === 3)
    } else if (horns === 'MANY') {
      newData = beastData.filter(beast => beast.horns > 3);
    } else {
      newData = beastData
    }
    this.setState({
      allBeast: newData
    });
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
        <Header />
        <Main
          filter={this.handleFilter}
          Data={this.state.allBeast}
          displayBeastModal={this.displayBeastModal}
        />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.modalShown}
          onHide={this.closeBeastModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;