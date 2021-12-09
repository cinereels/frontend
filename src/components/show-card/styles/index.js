import styled from 'styled-components/macro';

export const Container = styled.div`
    z-index: 200;
    position: relative;
    height: 150px;
    width: 230px;
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

export const Info = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
`;

export const Title = styled.p`
    color: ${ ({ theme }) => theme.white };
    font-size: 17px;
`;