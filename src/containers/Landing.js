import React from 'react';
import './Landing.css';

import store from '../store';
import { fetchLocations } from "../helpers/API";
import { populateLocations } from "../actions/populateLocations";
import { changeLocation, changeSearch } from "../actions/changeSearch";
import BarIcon from '@material-ui/icons/LocalBar';
import Button from '@material-ui/core/Button';
import HotelIcon from '@material-ui/icons/Hotel';
import MallIcon from '@material-ui/icons/LocalMall';
import DiningIcon from '@material-ui/icons/LocalDining';
import CategoryIcon from '@material-ui/icons/Category';
import SearchIcon from '@material-ui/icons/Search';
import {calculateAverageCoordinates} from "../helpers";
import changeMapFocus from "../actions/changeMapFocus";


class Landing extends React.Component {
  state = {
    open: true,
  };

  handleClick = (query) => (event) => {
    event.preventDefault();
    store.dispatch(changeSearch(query));
  };

  handleChange = (event) => {
    event.preventDefault();
    store.dispatch(changeLocation(event.target.value));
  };

  handleSubmit = (location, details) => evt => {
    fetchLocations(location, details)
      .then(response=>{
        console.log(response);
        const locations = response.response.venues;
        store.dispatch(populateLocations(response));
        store.dispatch(changeMapFocus(calculateAverageCoordinates(locations)));
      })
      .catch(err=>console.log(err));
  };

  render() {
    console.log(store.getState());
    const { location, detail } = store.getState().search;
    return (
      <div className="Landing__hero">
        <h1 className="Landing__hero_main">City Explorer</h1>
        <h2 className="Landing__hero_secondary">Find the best venues in your neighborhood</h2>
        <form className="Landing__form">
          <div className="Landing__form__buttons">
            <button className="Landing__form__button" onClick={this.handleClick('bar')}><BarIcon /></button>
            <button className="Landing__form__button" onClick={this.handleClick('hotel')}><HotelIcon /></button>
            <button className="Landing__form__button" onClick={this.handleClick('shopping')}><MallIcon /></button>
            <button className="Landing__form__button" onClick={this.handleClick('restaurant')}><DiningIcon /></button>
            <button className="Landing__form__button" onClick={this.handleClick('any')}><CategoryIcon /></button>
          </div>
          <label className="Landing__form__label">
            <input className="Landing__form__input" onChange={this.handleChange} type="text" placeholder="City, address..."/><SearchIcon/>
          </label>
          <Button variant="contained" color="primary" onClick={this.handleSubmit(location, detail)}>
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default Landing;