import React from 'react';
import FeaturedButton from '../featured-button';
import { Container, SearchHistory, SearchHistoryItem, SearchHistoryLegend, SearchHistoryList, SearchHistoryTitle, SearchInput, SearchInputContainer } from './styles';
import { FiSearch } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import Spacer from '../spacer';

const SearchWindow = () => {
    const searchHistory = [
        {
            id: 's1',
            title: 'Squid Game',
        },
        {
            id: 's2',
            title: 'Game of Thrones',
        },
        {
            id: 's3',
            title: 'Money Heist',
        },
        {
            id: 's4',
            title: 'Dark',
        }
    ];

    return (
        <Container>
            <SearchInputContainer>
                <SearchInput placeholder="Search" />
                <div style={{ width: 10 }} />
                <FeaturedButton>
                    <FiSearch color={'#fff'} size={18} />
                </FeaturedButton>
            </SearchInputContainer>
            <SearchHistory>
                <SearchHistoryLegend>
                    Search History
                </SearchHistoryLegend>
                <Spacer type={'vertical'} size={25} />
                <SearchHistoryList>
                    {
                        searchHistory.map(sh => <SearchHistoryItem>
                            <SearchHistoryTitle>
                                {sh.title}
                            </SearchHistoryTitle>
                            <div style={{ flex: 1 }} />
                            <IoCloseOutline color={'#fff'} size={26} style={{ cursor: 'pointer' }} />
                        </SearchHistoryItem>)
                    }
                </SearchHistoryList>
            </SearchHistory>
        </Container>
    );
}

export default SearchWindow;