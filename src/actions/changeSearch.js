import { CHANGE_QUERY_FROM_BUTTON, CHANGE_LOCATION_FROM_INPUT } from '../constants';

export const changeSearch = (newQuery) => {
  return {
    type: CHANGE_QUERY_FROM_BUTTON,
    payload: newQuery,
  };
};

export const changeLocation = (newLocation) => {
  return {
    type: CHANGE_LOCATION_FROM_INPUT,
    payload: newLocation,
  };
};