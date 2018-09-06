import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import Display from "./Display";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCalculator = styled.div`
  margin: 20px;
  width: 450px;
  background-color: #495057;
  border: 2px solid #495057;
  font-family: "Source Code Pro", monospace;
`;

const Calculator = props => {
  return (
    <Container>
      <StyledCalculator>
        <Display currentValue={props.currentValue} />
        <Buttons
          lastKey={props.lastKey}
          currentValue={props.currentValue}
          onButtonClick={props.onButtonClick}
        />
      </StyledCalculator>
    </Container>
  );
};

export default Calculator;
