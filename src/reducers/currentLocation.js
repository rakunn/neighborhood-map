import { CHANGE_CURRENT_LOCATION, RESET_CURRENT_LOCATION } from "../constants";

export const currentLocation = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_LOCATION: {
      return action.payload;
    }
    case RESET_CURRENT_LOCATION: {
      return {}; //let's return empty object, meaning there is no current location selected
    }
    default: {
      return state;
    }
  }
};