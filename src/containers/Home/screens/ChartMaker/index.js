import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import * as _ from "lodash";
import { DEFINE_NAV_ITEMS, DEFINE_NAV_CHART_TYPE } from "./constants.js";

import ChartMakerHeader from "containers/Home/components/ChartMaker/Header";
import MenuBar from "containers/Home/components/ChartMaker/Menubar";
import Chart from "containers/Home/components/ChartMaker/Chart";
import ChartForm from "containers/Home/components/ChartMaker/ChartForm";

const Rowx = styled(Row)`
  margin: 0px;
`;
const Colx = styled(Col)`
  padding: 0;
`;
const Wrapper = styled.div``;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: white;
`;

const MainWrapper = styled.div`
  margin-top: 50px;
  height: calc(100vh - 50px);
`;
const MenuBarWrapper = styled.div`
  position: fixed;
  top: 30%;
  left: 5px;
  z-index: 100;
`;

const ChartWrapper = styled.div`
  width: 500px;
`;

const FormWrapper = styled.div`
  padding: 30px;
`;

class ChartMaker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      navItem: DEFINE_NAV_ITEMS.SAMPLE_1,
      currentChart: DEFINE_NAV_CHART_TYPE.SPLINE_CHART.ENUM,
      menuOnHover: false,
      form: {
        title: "No Name",
        data: ["10", "20", "5"],
        labels: ["January", "Febuary", "March"],
      },
    };
  }

  setField = (path, value) => {
    const copyForm = { ...this.state.form };
    _.set(copyForm, path, value);
    this.setState({ form: copyForm });
  };

  setValues = (newValues) => {
    const { form } = this.state;
    this.setState({ form: { ...form, ...newValues } });
  };

  handleNavSample = (newNavItem) => {
    this.setState({ navItem: newNavItem });
  };

  handleHoverMenuBar = (status) => {
    this.setState({ menuOnHover: status });
  };

  changeGraphType = (graphType) => {
    this.setState({ currentChart: graphType });
  };

  render() {
    const { navItem, menuOnHover, currentChart, form } = this.state;
    return (
      <Wrapper>
        <HeaderWrapper>
          <ChartMakerHeader
            currentNavItem={navItem}
            handleNavSample={this.handleNavSample}
          />
        </HeaderWrapper>
        <MainWrapper>
          <Rowx className="h-100">
            <Colx xs={12}>
              <Rowx className="h-100">
                <Colx xs={1}>
                  <MenuBarWrapper
                    onMouseEnter={() => this.handleHoverMenuBar(true)}
                    onMouseLeave={() => this.handleHoverMenuBar(false)}
                  >
                    <MenuBar
                      menuOnHover={menuOnHover}
                      currentChart={currentChart}
                      changeGraphType={this.changeGraphType}
                    />
                  </MenuBarWrapper>
                </Colx>
                <Colx xs={11}>
                  <Rowx>
                    <Colx xs={12}>
                      <ChartWrapper>
                        <Chart currentChart={currentChart} form={form} />
                      </ChartWrapper>
                    </Colx>
                  </Rowx>
                  <Rowx>
                    <Colx xs={12}>
                      <FormWrapper>
                        <ChartForm
                          currentChart={currentChart}
                          form={form}
                          setField={this.setField}
                          setValues={this.setValues}
                        />
                      </FormWrapper>
                    </Colx>
                  </Rowx>
                </Colx>
              </Rowx>
            </Colx>
          </Rowx>
        </MainWrapper>
      </Wrapper>
    );
  }
}

export default ChartMaker;
