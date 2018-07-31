import { FOCUS_MAP } from "../constants";

const changeMapFocus = (coordinates) => {
  return {
    type: FOCUS_MAP,
    payload: coordinates,
  };
};

export default changeMapFocus;