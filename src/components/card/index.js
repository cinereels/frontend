import React from "react";
import { Container } from "./styles";

const Card = ({ imageUrl, title }) => {
  return (
    <Container imageUrl={imageUrl}>
      <h2 style={{ textAlign: 'center', color: '#fff' }}>{title}</h2>
    </Container>
  );
};

export default Card;
