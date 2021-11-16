import React from "react";
import { Container, Photo } from "./styles";

const ShowCard = ({ name, image }) => {
  return (
    <Container>
      <Photo src={image} alt={name} />
    </Container>
  );
};

export default ShowCard;
