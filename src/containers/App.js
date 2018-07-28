import React, { Component } from 'react';
import store from '../store';
import './App.css';

import Map from '../components/MyMap';

class App extends Component {
  state = store.getState();
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
