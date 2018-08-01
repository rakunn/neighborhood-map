import locationsSeed from './locationsSeed';
import { FETCH_LOCATIONS } from '../constants';

export const locations = (state = locationsSeed, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};