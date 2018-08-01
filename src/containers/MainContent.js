import React, { Component } from 'react';
import store from '../store';
import './MainContent.css';

import LocationList from '../components/LocationList';
import Map from '../components/MyMap';

class MainContent extends Component {
  render() {
    const state = store.getState();
    return (
      <div className="Main">
        <LocationList data={state} />
        <Map data={state} />
      </div>
    );
  }
}

export default MainContent;
