import styled from "styled-components/macro";

// Btn naam h 
// styles daal badiya se

export const Btn = styled.button`
  width: ${({ width }) => (width ? width + "px" : "100%")};
  color: #fff;
  background-color: #000;
  border-radius: 40px;
  padding: 10px 15px;
  border: 2px solid #fff;
  font-size: ${({ textSize }) => textSize + "px"};

  &:hover {
    color: #fff;
    background-color: #ff0000;
    border: 2px solid #ff0000;
  }
`;