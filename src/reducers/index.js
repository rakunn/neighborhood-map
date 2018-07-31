import { combineReducers } from 'redux';

import { currentLocation } from "./currentLocation";
import { currentFocus } from "./currentFocus";
import { filter } from "./filter";
import { locations } from './locations';

export default combineReducers({
  currentLocation,
  currentFocus,
  filter,
  locations,
});