import React from "react";
// material-ui
import ButtonUI from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Button = ({ styleUi = {}, component, title = "", onClick }) => {
  const { variant, color } = styleUi;

  return (
    <ButtonUI variant={variant ?? "outlined"} color={color ?? "default"} onClick={onClick}>
      {component ? component : title}
    </ButtonUI>
  );

  // return <button onClick={onClick}>{component ? component : title}</button>;
};

export default Button;
