import React from "react";
import styled from "styled-components";
import theme from "utils/themes";

const IconWrapper = styled.div`
  svg {
    width: 35px;
    height: 35px;
  }
`;

const MenuItemText = styled.div`
  margin-left: 20px;
`;

const Wrapper = styled.div`
  color: #818181;
  padding: 30px 10px;
  cursor: pointer;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  :hover,
  :focus {
    color: ${theme.nnqduyGreenElegant};
    background-color: rgba(107, 109, 110, 0.6);
  }
  ${({ onSelect }) => {
    if (onSelect) {
      return `
          color: ${theme.nnqduyGreenElegant};
          background-color: rgba(107, 109, 110, 0.6);
          `;
    }
  }}
`;

function MenuBarItem(props) {
  const { itemDefine, currentChart, changeGraphType } = props;
  return (
    <Wrapper
      onSelect={currentChart === itemDefine.ENUM}
      onClick={() => changeGraphType(itemDefine.ENUM)}
    >
      <IconWrapper>
        <itemDefine.icon />
      </IconWrapper>
      <MenuItemText>{itemDefine.name}</MenuItemText>
    </Wrapper>
  );
}

export default MenuBarItem;
