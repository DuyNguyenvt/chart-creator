import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import * as _ from "lodash";
import DoughnutChart from "components/Charts/DoughnutChart";

function Doughnut(props) {
  const { title, form } = props;
  const preData = {
    dataSets: {
      data: _.get(form, "data", []).map((value) =>
        value === "" ? "0" : value
      ),
    },
    labels: _.get(form, "labels"),
  };
  return (
    <>
      <DoughnutChart
        title={title}
        dataSets={preData.dataSets}
        labels={preData.labels}
      />
    </>
  );
}

Doughnut.propTypes = {
  title: PropTypes.string,
  form: PropTypes.any,
};

export default Doughnut;
