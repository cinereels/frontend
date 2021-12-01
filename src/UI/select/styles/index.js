import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Dropdown = styled.select`
    background-color: #00000000;
    color: ${ ({ theme }) => theme.white };
    font-size: 18px;
    border: none;

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        border: none;
        outline: none;
    }
`;

export const Option = styled.option`
    background-color: ${ ({ theme }) => theme.secondary };
`;