import { APPLY_NEW_FILTER } from "../constants";

const applyNewFilter = newFilter => {
  return {
    type: APPLY_NEW_FILTER,
    payload: newFilter,
  };
};

export default applyNewFilter;