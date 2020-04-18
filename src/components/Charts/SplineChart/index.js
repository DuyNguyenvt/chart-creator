import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as _ from "lodash";
import { Line } from "react-chartjs-2";

const Wrapper = styled.div``;
const GraphTitle = styled.div``;

let data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Default Label",
      data: [65, 59, 80, 81, 56, 55, 40],
      lineTension: 0.4,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      fill: true,
      borderCapStyle: "butt",
      borderDash: [5, 5],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    },
  ],
};

let options = {
  legend: {
    display: true,
  },
};

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
    };
  }
  render() {
    const { dataSets, labels, optionConfigs, title } = this.props;
    if (!_.isEmpty(optionConfigs)) options = { ...options, ...optionConfigs };
    if (!_.isEmpty(labels)) data = { ...data, labels: labels };
    if (!_.isEmpty(dataSets))
      data = {
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            ...dataSets,
          },
        ],
      };

    return (
      <Wrapper>
        {title && <GraphTitle>{title}</GraphTitle>}
        <Line data={data} options={options} />
      </Wrapper>
    );
  }
}
LineChart.propTypes = {
  dataConfig: PropTypes.object,
  optionConfigs: PropTypes.object,
};

export default LineChart;
