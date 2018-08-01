import { FETCH_LOCATIONS } from '../constants';

export const populateLocations = (locations) => {
  return {
    type: FETCH_LOCATIONS,
    payload: locations,
  }
};