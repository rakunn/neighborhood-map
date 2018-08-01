import React from 'react';
import './Buttons.css';
import store from '../store';
import { changeSearch } from "../actions/changeSearch";

import BarIcon from '@material-ui/icons/LocalBar';
import HotelIcon from '@material-ui/icons/Hotel';
import MallIcon from '@material-ui/icons/LocalMall';
import DiningIcon from '@material-ui/icons/LocalDining';
import TerrainIcon from '@material-ui/icons/Terrain';

const handleClick = (query) => (event) => {
  event.preventDefault();
  store.dispatch(changeSearch(query));
};

const Buttons = ({ variant }) => {
  return (
    <div className="Landing__form__buttons">
      <button className="Landing__form__button" onClick={handleClick('bar')}><BarIcon /></button>
      <button className="Landing__form__button" onClick={handleClick('hotel')}><HotelIcon /></button>
      <button className="Landing__form__button" onClick={handleClick('shopping')}><MallIcon /></button>
      <button className="Landing__form__button" onClick={handleClick('restaurant')}><DiningIcon /></button>
      <button className="Landing__form__button" onClick={handleClick('park')}><TerrainIcon /></button>
    </div>
  )
};

export default Buttons;