import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Text = styled.h1`
    font-size: ${ ({ size = 28 }) => size + 'px' };
    color: #fff;
    text-transform: uppercase;
    margin: 0;
    text-decoration: none;
    text-decoration-line: none;
    font-weight: 400;
    
    &:first-letter {
        color: ${ ({ theme }) => theme.primary };
        font-size: ${ ({ size = 28 }) => (size + 5) + 'px' };
    }
`;