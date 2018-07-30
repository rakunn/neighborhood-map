import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
