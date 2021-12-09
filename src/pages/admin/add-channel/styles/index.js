import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 80px;
    position: fixed;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Text = styled.p`
    font-size: 18px;
    color: ${ ({ theme }) => theme.white };
    text-align: center;
`;

export const UploadButton = styled.button`
    margin: auto;
    background-color: ${ ({ theme }) => theme.primary };
    border-radius: 5px;
    color: ${ ({ theme }) => theme.white };
    border: none;
    font-size: 17px;
    padding: 10px 20px;
    width: min-content;
`;