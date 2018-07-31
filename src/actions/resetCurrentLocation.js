import { RESET_CURRENT_LOCATION } from "../constants";

const resetCurrentLocation = () => {
  return {
    type: RESET_CURRENT_LOCATION
  };
};

export default resetCurrentLocation;