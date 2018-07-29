import { combineReducers } from 'redux';

import { currentLocation } from "./currentLocation";
import { locations } from './locations';

export default combineReducers({
  currentLocation,
  locations,
});