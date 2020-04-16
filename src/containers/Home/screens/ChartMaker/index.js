import React from "react";
import styled from "styled-components";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import theme from "utils/themes";
import { FaChartLine } from "react-icons/fa";
import { DEFINE_NAV_ITEMS } from "./constants.js";

const Rowx = styled(Row)``;
const Colx = styled(Col)``;
const Wrapper = styled.div``;

const Header = styled.div`
  border: solid 3px lightgray;
  border-width: 0 0 3px 0;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 12px;
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

class ChartMaker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      navItem: DEFINE_NAV_ITEMS.SAMPLE_1,
    };
  }
  handleNavSample = (newNavItem) => {
    this.setState({ navItem: newNavItem });
  };
  render() {
    const { navItem } = this.state;
    return (
      <Wrapper>
        <Rowx>
          <Colx xs={12}>
            <Header>
              <HeaderTitle>
                <span>
                  <FaChartLine />
                </span>
                <span>Chart maker</span>
              </HeaderTitle>
              <NavWrapper>
                <Nav>
                  <NavItem
                    active={navItem === DEFINE_NAV_ITEMS.SAMPLE_1}
                    onClick={() =>
                      this.handleNavSample(DEFINE_NAV_ITEMS.SAMPLE_1)
                    }
                  >
                    <NavLink href="#"> Sample 1 </NavLink>
                  </NavItem>
                  <NavItem
                    active={navItem === DEFINE_NAV_ITEMS.SAMPLE_2}
                    onClick={() =>
                      this.handleNavSample(DEFINE_NAV_ITEMS.SAMPLE_2)
                    }
                  >
                    <NavLink href="#">Sample 2</NavLink>
                  </NavItem>
                </Nav>
              </NavWrapper>
            </Header>
          </Colx>
        </Rowx>
      </Wrapper>
    );
  }
}

export default ChartMaker;
