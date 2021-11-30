import styled from 'styled-components/macro';

export const Button = styled.button`
    cursor: pointer;
    width: ${({ block }) => block ? '100%' : 'auto' };
    padding: ${({ block }) => block ? '20px' : '10px' };
    background-color: ${ ({ theme }) => theme.primary };
    color: ${({ theme }) => theme.white};
    border-radius: 5px;
    border: none;
    font-size: ${ ({ size = 18 }) => size + 'px' };
`;