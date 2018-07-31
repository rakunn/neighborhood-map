import { CHANGE_CURRENT_LOCATION } from "../constants";

const changeCurrentLocation = newLocation => {
  return {
    type: CHANGE_CURRENT_LOCATION,
    payload: newLocation,
  };
};

export default changeCurrentLocation;