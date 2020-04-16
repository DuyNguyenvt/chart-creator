import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "utils/history.js";
import globalReducer from "containers/App/reducer";

function createReducer(injectedReducers = {}) {
  const procReducer = combineReducers({
    // * add global reducer here
    global: globalReducer,
    router: connectRouter(history),
    ...injectedReducers, // * this is the reducer injected later
  });
  return procReducer;
}

export default createReducer;
