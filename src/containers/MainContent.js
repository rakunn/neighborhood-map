import React, { Component } from 'react';
import store from '../store';
import './MainContent.css';
import { Offline } from 'react-detect-offline';
import ErrorNotif from '../components/ErrorNotif';

import LocationList from '../components/LocationList';
import Map from '../components/MyMap';

class MainContent extends Component {
  render() {
    const state = store.getState();
    return !state.homepageIsOpen && (
      <div className="Main">
        <LocationList data={state} />
        <Map data={state} />
        <Offline><ErrorNotif message="Whoops, it seems you have no internet connection."/></Offline>
      </div>
    );
  }
}

export default MainContent;
