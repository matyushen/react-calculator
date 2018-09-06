import React from "react";
import styled from "styled-components";

const ButtonsGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
`;

const yellowKeys = ["/", "*", "+", "-"];
const orangeKeys = ["="];
const operationKeys = ["/", "*", "+", "-"];

const StyledButton = styled.button`
  font-family: "Source Code Pro", monospace;
  color: white;
  padding: 15px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  border-radius: none;
  outline: none;
  color: #222;
  text-decoration: none;
  border: none;
  transition: all 0.1s ease;

  background-color: ${props =>
    yellowKeys.includes(props.value)
      ? "#ffe066"
      : orangeKeys.includes(props.value)
        ? "#ff6b6b"
        : "#fff"};

  &:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background-color: ${props =>
      yellowKeys.includes(props.value)
        ? "#ffd43b"
        : orangeKeys.includes(props.value)
          ? "#fa5252"
          : "#f1f3f5"};
  }

  ${props =>
    props.lastKey === props.value &&
    operationKeys.includes(props.value) &&
    "box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3); background-color: #ffd43b;"};
`;

const buttonsData = [
  "mc",
  "mr",
  "m-",
  "m+",
  "ac",
  "√",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "±",
  "0",
  ".",
  "="
];

const Buttons = props => {
  const buttons = buttonsData.map(button => {
    return (
      <StyledButton
        key={button}
        onClick={props.onButtonClick}
        value={button}
        {...props}
      >
        {button.toUpperCase()}
      </StyledButton>
    );
  });

  return <ButtonsGrid>{buttons}</ButtonsGrid>;
};

export default Buttons;
