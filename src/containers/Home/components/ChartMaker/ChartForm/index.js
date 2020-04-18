import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as _ from "lodash";
import { DEFINE_NAV_CHART_TYPE } from "containers/Home/screens/ChartMaker/constants";
import LineChartForm from "containers/Home/components/ChartMaker/LineChartForm";
import DoughnutChartForm from "containers/Home/components/ChartMaker/DoughnutChartForm";

const Wrapper = styled.div``;

function ChartForm(props) {
  const { currentChart, form, setField, setValues } = props;

  return (
    <Wrapper>
      {currentChart === DEFINE_NAV_CHART_TYPE.SPLINE_CHART.ENUM && (
        <LineChartForm form={form} setField={setField} setValues={setValues} />
      )}
      {currentChart === DEFINE_NAV_CHART_TYPE.DOUGHNUT_CHART.ENUM && (
        <DoughnutChartForm
          form={form}
          setField={setField}
          setValues={setValues}
        />
      )}
    </Wrapper>
  );
}

ChartForm.propTypes = {
  currentChart: PropTypes.string,
  form: PropTypes.any,
  setField: PropTypes.func,
  setValues: PropTypes.func,
};

export default ChartForm;
