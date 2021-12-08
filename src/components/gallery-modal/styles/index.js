import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 500px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const DisplaySection = styled.div`
    flex: 1;
`;

export const Display = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    border: ${ ({ theme }) => `0.5px solid ${theme.white}` };
    background-color: ${ ({ theme }) => theme.black };
    overflow: hidden;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const InputSection = styled.div`
    flex: 1;
`;

export const AddGalleryButton = styled.button`
    cursor: pointer;
    border: none;
    background: ${ ({ theme }) => theme.primary };
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    color: ${ ({ theme }) => theme.white };
    font-size: 17px;
`;