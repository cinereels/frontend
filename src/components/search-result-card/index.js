import React from "react";
import { Container, Overlay, Photo, Title, Info } from "./styles";

const SearchResultCard = ({ name, image }) => {
  return (
    <Container>
      <Overlay>
        <Photo src={image} alt={name} />
        <Info>
          <Title>{name}</Title>
        </Info>
      </Overlay>
    </Container>
  );
};

export default SearchResultCard;
