import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import { Input } from "reactstrap";

const Wrapper = styled.div`
  width: 100%;
`;

function TableInput(props) {
  const { myProps, ...restProps } = props;
  return (
    <Wrapper>
      <Input className="font-xs-i" {...restProps} />
    </Wrapper>
  );
}

export default TableInput;
