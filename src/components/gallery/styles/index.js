import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${ ({ type }) => type === 'brick' ? 'row' : 'column' };
    width: 100%;
`;

export const Display = styled.div`
    height: ${ ({ type }) => type === 'brick' ? '170px' : '140px' };
    width: ${ ({ type }) => type === 'brick' ? '170px' : '140px' };
    border-radius: 5px;
    background-color: ${ ({ color }) => color };
    overflow: hidden;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const GalleryList = styled.div`
    display: flexbox;
    flex-wrap: ${ ({ type }) => type === 'brick' ? 'wrap' : 'nowrap' };
    overflow: auto;
`;