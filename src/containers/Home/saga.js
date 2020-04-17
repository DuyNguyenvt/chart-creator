import { takeLatest, put } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";

// sagas
function* onSaveChart(action) {
  try {
    yield put(actions.saveChartSuccess(action.payload));
  } catch (err) {
    throw err;
  }
}

export default function* saga() {
  yield takeLatest(constants.SAVE_CHART, onSaveChart);
}
