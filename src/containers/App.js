import React, { Component } from 'react';
import store from '../store';
import './App.css';

import Map from '../components/MyMap';

class App extends Component {
  render() {
    const state = store.getState();
    return (
      <div className="App">
        <Map data={state}/>
      </div>
    );
  }
}

export default App;
