import styled from 'styled-components/macro';

export const Container = styled.div`
    background-color: ${ ({ theme }) => theme.black };
    padding: 20px;
    height: 100%;
`;

export const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 150px;
`;

export const SearchInput = styled.input`
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: ${ ({ theme }) => theme.secondary };
    color: ${ ({ theme }) => theme.white };
    font-size: 16px;

    ::placeholder {
        color: ${ ({ theme }) => theme.white };
        font-size: 16px;
        margin: 0;
    }

    &:active {
        border: none;
    }

    &:focus {
        border: none;
        outline: none;
    }
`;

export const SearchHistory = styled.div``;

export const SearchHistoryLegend = styled.div`
    color: ${ ({ theme }) => theme.blue };
    font-size: 18px;
`;

export const SearchHistoryList = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 500px;
`;

export const SearchHistoryItem = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const SearchHistoryTitle = styled.p`
    color: ${ ({ theme }) => theme.white };
    font-size: 17px;
`;