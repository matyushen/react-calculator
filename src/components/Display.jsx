import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  font-family: "Source Code Pro", monospace;
  background-color: #e7f5ff;
  color: #222;
  border-bottom: 2px solid #495057;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  text-align: right;
  font-size: 45px;
  font-weight: 500;
`;

export default props => {
  return <StyledDisplay>{props.currentValue}</StyledDisplay>;
};
