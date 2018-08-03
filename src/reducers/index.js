import { combineReducers } from 'redux';

import { homepageIsOpen } from "./homepage";
import { controls } from "./controls";
import { currentLocation } from "./currentLocation";
import { currentFocus } from "./currentFocus";
import { filter } from "./filter";
import { locations } from './locations';
import { search } from "./search";

export default combineReducers({
  homepageIsOpen,
  controls,
  currentLocation,
  currentFocus,
  filter,
  locations,
  search,
});