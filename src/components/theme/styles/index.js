import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;
    height: 450px;
    align-items: center;
`;

export const Background = styled.img`
    height: 100%;
    width: 100%;
    filter: brightness(50%);
    object-fit: contain;
`;

export const Info = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    width: 400px;
`;

export const Title = styled.h1`
    color: #fff;
`;

export const Description = styled.p`
    color: #fff;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;