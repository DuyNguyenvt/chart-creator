import * as constants from "./constants";

export function saveChart(requestData) {
  return {
    type: constants.SAVE_CHART,
    requestData,
  };
}

export function saveChartSuccess(payload) {
  return {
    type: constants.SAVE_CHART_SUCCESS,
    payload,
  };
}

export function saveChartFailed() {
  return {
    type: constants.SAVE_CHART_FAILED,
  };
}
