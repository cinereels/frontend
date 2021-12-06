import React from "react";
import { Btn } from './styles';
import Loader from 'react-loader-spinner';

const Button = ({ children, width, textSize = 18, loading = false }) => {

  if (loading) {
    return (
      <Btn width={width} textSize={textSize}>
        <Loader type="Circles" color={'#fff'} radius={textSize / 2} />
      </Btn>
    );
  }

  return (
    <Btn width={width} textSize={textSize}>{children}</Btn>
  );  
};

export default Button;
