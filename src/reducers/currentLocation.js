import { CHANGE_CURRENT_LOCATION } from "../constants";

export const currentLocation = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_LOCATION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};