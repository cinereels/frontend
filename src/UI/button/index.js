import React from "react";
import { Btn } from './styles';

const Button = ({ children, width, textSize = 18 }) => {
  return (
    <Btn width={width} textSize={textSize}>{children}</Btn>
  );  
};

export default Button;
