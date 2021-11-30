import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;

export const Display = styled.div`
    width: 70%;
    height: 100%;
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const FormContainer = styled.div`
    display: block;
    width: 30%;
    background-color: ${ ({ theme }) => theme.black };
    padding: 80px;
    padding-top: 120px;
    padding-bottom: 120px;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
`;

export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AuthOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Helper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const SwitchText = styled.p`
    margin: 0;
    color: ${ ({ theme }) => theme.white };
    font-size: 14px;
`;

export const SwitchButton = styled.p`
    cursor: pointer;
    margin: 0;
    color: ${ ({ theme }) => theme.blue };
    font-size: 14px;
`;