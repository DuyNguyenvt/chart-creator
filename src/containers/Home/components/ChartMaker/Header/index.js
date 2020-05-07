import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink } from "reactstrap";
import theme from "utils/themes";
import { FaChartLine } from "react-icons/fa";
import { DEFINE_NAV_ITEMS } from "containers/Home/screens/ChartMaker/constants";

const Wrapper = styled.div`
  border: solid 3px lightgray;
  border-width: 0 0 3px 0;
  display: flex;
  align-items: center;
  padding: 0px 12px;
  /* font-size: 15px;
  @media (max-width: 500px) {
    font-size: 11px;
  } */
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  color: ${theme.nnqduyGreenElegant};
  margin-right: 50px;
  span :first-child {
    margin-right: 5px;
  }
`;

const NavWrapper = styled.div`
  .nav {
    height: inherit;
    .nav-item {
      border: solid 3px;
      border-color: transparent;
      .nav-link {
        color: black;
      }
    }
  }
  .nav-item.active {
    border: solid 3px;
    border-color: transparent transparent ${theme.nnqduyGreenElegant}
      transparent;
    .nav-link {
      color: ${theme.nnqduyGreenElegant} !important;
    }
  }
  height: 100%;
`;

function Header(props) {
  const { handleNavSample, currentNavItem } = props;
  return (
    <Wrapper className="font-md">
      <HeaderTitle>
        <span>
          <FaChartLine />
        </span>
        <span>Chart maker</span>
      </HeaderTitle>
      <NavWrapper>
        <Nav>
          <NavItem
            active={currentNavItem === DEFINE_NAV_ITEMS.SAMPLE_1}
            onClick={() => handleNavSample(DEFINE_NAV_ITEMS.SAMPLE_1)}
          >
            <NavLink href="#"> Sample 1 </NavLink>
          </NavItem>
          <NavItem
            active={currentNavItem === DEFINE_NAV_ITEMS.SAMPLE_2}
            onClick={() => handleNavSample(DEFINE_NAV_ITEMS.SAMPLE_2)}
          >
            <NavLink href="#">Sample 2</NavLink>
          </NavItem>
        </Nav>
      </NavWrapper>
    </Wrapper>
  );
}

Header.propTypes = {
  handleNavSample: PropTypes.func.isRequired,
  currentNavItem: PropTypes.any,
};

export default Header;
