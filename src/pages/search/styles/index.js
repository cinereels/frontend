import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;
    position: fixed;
    background-color: ${ ({ theme }) => theme.background };
`;

export const Wrapper = styled.div`
    display: flex;
    padding-top: 80px;
    height: 100%;
`;

export const SearchSection = styled.div`
    width: 30%;
    height: 100%;
`;

export const SearchArea = styled.div`
    width: 70%;
`;


export const SearchResultLegend = styled.h3`
    color: ${ ({ theme }) => theme.white };
    font-size: 20px;
    margin: 0;
    margin-left: 65px;
`;

export const SearchResults = styled.div`
    height: 600px;
    padding: 60px;
    padding-top: 20px;
    display: flexbox;
    flex-wrap: wrap;
    overflow: auto;
`;