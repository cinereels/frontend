import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: ${ ({ theme }) => theme.black };
    background-image: ${ ({ bg }) => `url(${bg})` };
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background-color: #0000004D;
    z-index: 300;
`;

export const BrandContainer = styled.div`
    margin: auto;
    width: 300px;
    text-align: center;
    z-index: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;