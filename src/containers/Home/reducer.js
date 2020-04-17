// reducers
import * as constants from "./constants";

const initState = {
  chartData: {
    data: null,
    isLoading: false,
  },
};

//! notice that reducer is only a function that return new state object
const HomeReducer = (state = initState, action) => {
  return produce(state, (newState) => {
    switch (action.type) {
      case constants.SAVE_CHART:
        console.log("vao day ...");
        break;
      case constants.SAVE_CHART_SUCCESS:
        // newState.accessToken = action.payload;
        break;
      default:
        break;
    }
  });
};

const produce = (state, setState) => {
  const newState = { ...state };
  setState(newState);
  return {
    ...state,
    ...newState,
  };
};

export default HomeReducer;
