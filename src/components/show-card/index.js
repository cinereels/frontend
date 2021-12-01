import React from "react";
import { Container, Photo, Title, Info } from "./styles";

const ShowCard = ({ name, image }) => {
  return (
    <Container>
      <Photo src={image} alt={name} />
      <Info>
        <Title>{name}</Title>
      </Info>
    </Container>
  );
};

export default ShowCard;
