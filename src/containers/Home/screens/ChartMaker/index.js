import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { DEFINE_NAV_ITEMS, DEFINE_NAV_CHART_TYPE } from "./constants.js";

import ChartMakerHeader from "containers/Home/components/ChartMaker/Header";
import MenuBar from "containers/Home/components/ChartMaker/Menubar";

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
`;

const MainWrapper = styled.div`
  margin-top: 50px;
  height: calc(100vh - 50px);
`;
const MenuBarWrapper = styled.div`
  position: fixed;
  top: 30%;
  left: 5px;
`;

class ChartMaker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      navItem: DEFINE_NAV_ITEMS.SAMPLE_1,
      currentChart: DEFINE_NAV_CHART_TYPE.DOUGHNUT_CHART.ENUM,
      menuOnHover: false,
    };
  }

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
    const { navItem, menuOnHover, currentChart } = this.state;
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
                  <div>this is the chart area</div>
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
