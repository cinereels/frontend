import styled from "styled-components/macro";

export const Container = styled.div`
  background-image: ${(props) => `url(${props.imageUrl})`};
  height: 250px;
  width: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
  padding: 20px;
  align-items: center;
  filter: brightness(70%);
  margin-left: 50px;
  margin-right: 50px;
  /* justify-content: center; */
`;
