import React from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { Doughnut } from "react-chartjs-2";

const Wrapper = styled.div``;
const GraphTitle = styled.div``;

let data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

let options = {
  legend: {
    display: true,
  },
};

class DoughnutChart extends React.Component {
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
        <Doughnut data={data} options={options} />
      </Wrapper>
    );
  }
}

export default DoughnutChart;
