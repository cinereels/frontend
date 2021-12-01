import React from "react";
import { Container, Photo } from "./styles";

const ShowCircle = ({ id, name, image }) => {
  return (
    <Container size={80}>
      <Photo src={image} alt={name} />
    </Container>
  );
};

export default ShowCircle;
