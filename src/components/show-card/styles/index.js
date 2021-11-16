import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 200px;
    width: 30i0px;
    border-radius: 5px;
    transition: transform 450ms;
    margin: 0 10px;
    overflow: hidden;

    &:hover{
        transform: scale(1.08);
    }

    &:first-of-type {
        margin-left: 0;
    }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;