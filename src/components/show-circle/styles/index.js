import styled from 'styled-components/macro';

export const Container = styled.div`
    height: ${ ({ size = 50 }) => size + 'px' };
    width: ${ ({ size = 50 }) => size + 'px' };
    border-radius: 100%;
    overflow: hidden;
    margin: 0 20px;

    &:first-of-type {
        margin-left: 0;
    }
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;