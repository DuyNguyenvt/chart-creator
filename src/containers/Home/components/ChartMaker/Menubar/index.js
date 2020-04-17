import React from "react";
import PropTypes from "prop-types";
import * as _ from "lodash";
import styled from "styled-components";
import { DEFINE_NAV_CHART_TYPE } from "containers/Home/screens/ChartMaker/constants";
import theme from "utils/themes";
import { FaArrowRight } from "react-icons/fa";

import MenuBarItem from "../menubarItem";

const Wrapper = styled.div`
  background: ${theme.nnqduyDarkSoul};
  border-radius: 3px 10px 10px 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  transition: all 0.5s;
  width: 60px;
  overflow-x: hidden;
  white-space: nowrap;
  ${({ menuOnHover }) => {
    if (menuOnHover) {
      return `width: 200px;`;
    }
  }}
`;

const ArrowExpandButton = styled.div`
  padding: 30px 0;
  svg {
    width: 27px;
    height: 27px;
  }
  transition: all 0.5s;
  color: ${theme.nnqduyGreenElegant};
  ${({ menuOnHover }) => {
    if (menuOnHover) {
      return ` transform: rotate(180deg);`;
    }
  }}
`;

function MenuBar(props) {
  const { menuOnHover, currentChart, changeGraphType } = props;
  const chartsMapper = _.values(DEFINE_NAV_CHART_TYPE);
  return (
    <Wrapper menuOnHover={menuOnHover}>
      <ArrowExpandButton menuOnHover={menuOnHover}>
        <FaArrowRight />
      </ArrowExpandButton>
      {chartsMapper.map((chartItem) => (
        <MenuBarItem
          itemDefine={chartItem}
          currentChart={currentChart}
          changeGraphType={changeGraphType}
        />
      ))}
    </Wrapper>
  );
}

export default MenuBar;
