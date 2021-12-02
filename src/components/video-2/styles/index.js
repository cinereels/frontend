import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${({ bg = "#000" }) => bg};
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  position: absolute;
  z-index: 300;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #00000005;
`;

export const Nav = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Caption = styled.h2`
  text-transform: uppercase;
  color: #fff;
`;

export const Options = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Control = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #00000000;
  z-index: 300;
  justify-content: space-between;
  align-items: center;
`;

export const Upper = styled.div`
  width: 100%;
  justify-content: center;
`;

export const Lower = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Bar = styled.div`
  background-color: #0000003c;
  height: 5px;
  margin: auto;
  width: 97%;
`;

export const Juice = styled.div`
  position: relative;
  width: ${({ width = 0 }) => width + "%"};
  background-color: #ff0000;
  height: 5px;
`;

export const Pointer = styled.div`
  position: absolute;
  right: -15px;
  bottom: -130%;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #ff0000;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 20px;
  align-items: center;
  &:first-of-type {
    justify-content: flex-start;
  }
  &:last-of-type {
    justify-content: flex-end;
  }
`;

export const Label = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  color: #ff0000;
`;

export const Title = styled.p`
  text-transform: capitalize;
  font-size: 18px;
  color: #fff;
`;

export const Timer = styled.p`
  font-size: 18px;
  color: #fff;
`;

export const Action = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
