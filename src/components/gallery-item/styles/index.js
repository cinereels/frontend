import styled from 'styled-components/macro';

export const Container = styled.div`
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const Display = styled.div`
    display: block;
    cursor: pointer;
    position: relative;
    width: ${ ({ active }) => active ? '58px' : '60px' };
    height: ${ ({ active }) => active ? '58px' : '60px' };
    border-radius: 5px;
    background-color: ${({ color }) => color};
    overflow: hidden;
    border: ${ ({ theme, active }) => active ? `2px solid ${theme.primary}` : 'none' };
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;