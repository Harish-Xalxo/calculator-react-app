import React from "react";
import ButtonContainer from "./ButtonContainer";

const ButtonState = (props) => {
  return (
    <>
      <ButtonContainer onButtonClick={props.onButtonState} />
    </>
  );
};

export default ButtonState;
