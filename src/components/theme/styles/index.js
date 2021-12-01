import styled from 'styled-components/macro';

export const Container = styled.div`
    margin-top: 0px;
    background-image: ${ ({ bg }) => `url(${bg})` };
    height: 550px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0px;
    overflow: hidden;
`;

export const Overlay = styled.div`
    display: block;
    background-color: #00000033;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    padding-left: 30px; 
`;

export const Info = styled.div`
    color: white;
    position: relative;
    width: 280px;
`;

export const Title = styled.h1`
    color: white;
    font-size: 35px;
    margin-bottom: 15px;
`;

export const Description = styled.p`
    line-height: 1.2;
`;

export const Rating = styled.div`
    color: white;
    font-size: small;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 280px;
`;

export const Imdb = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 80px;
    border-right: 2px solid;
    border-color: white;
`;

export const Rt = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    margin-left: 10px;
`;

export const ButtonSection = styled.div`
    display: flex;
    margin-top: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    position: relative;
`;

export const Button1 = styled.button`
    cursor: pointer;
    width: 120px;
    height: 35px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    font-size: larger;
`;

export const Button2 = styled.button`
    cursor: pointer;
    width: 120px;
    height: 35px;
    background-color: transparent;
    color: white;
    border: 1px solid;
    border-color: white;
    border-radius: 5px;
    font-size: larger;
`;