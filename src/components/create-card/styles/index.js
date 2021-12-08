import styled from 'styled-components/macro';

export const Container = styled.div`
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    background-color: ${ ({ theme }) => theme.black };
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    height: 170px;
    width: 170px;
    margin-left: 50px;

    &:first-of-type {
        margin-left: 0;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Title = styled.h4`
    margin: 0;
    font-size: 20px;
    color: ${ ({ theme }) => theme.white };
    vertical-align: middle;
`;