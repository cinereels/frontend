import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;
    position: fixed;
    width: 100%;
    background: ${ ({ bg }) => `url(${bg})` };
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const Wrapper = styled.div`
    width: 300px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 300px;
    text-align: center;
`;

export const Text = styled.div`
    color: ${ ({ theme }) => theme.white };
    font-size: 17px;
`;

export const ButtonSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    width: 100px;
`;

export const FilledButton = styled.button`
    background-color: ${ ({ theme }) => theme.primary };
    color: ${ ({ theme }) => theme.white };
    font-size: 17px;
    border-radius: 5px;
    border: ${ ({ theme }) => `1px solid ${theme.primary}` };
    padding: 10px;
    width: 100%;
`;

export const OutlinedButton = styled.button`
    color: ${ ({ theme }) => theme.white };
    background: #00000000;
    font-size: 17px;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
`;