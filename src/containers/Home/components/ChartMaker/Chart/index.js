import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as _ from "lodash";
import { DEFINE_NAV_CHART_TYPE } from "containers/Home/screens/ChartMaker/constants";
import LineChart from "containers/Home/components/ChartMaker/LineChart";

const Wrapper = styled.div``;

function Chart(props) {
  const { currentChart, form } = props;
  const data = {
    title: _.get(form, "title"),
  };
  return (
    <Wrapper>
      {currentChart === DEFINE_NAV_CHART_TYPE.SPLINE_CHART.ENUM && (
        <LineChart title={data.title} form={form} />
      )}
    </Wrapper>
  );
}

Chart.propTypes = {
  currentChart: PropTypes.string,
  form: PropTypes.any,
};

export default Chart;
