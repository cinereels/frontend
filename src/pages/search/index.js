import React from 'react';
import { Container, SearchArea, SearchSection, Wrapper, SearchResultLegend, SearchResults } from './styles';

import SearchResultCard from '../../components/search-result-card';
import SearchWindow from '../../components/search-window';

import photo1 from "../../images/mh.jpeg";
import photo2 from "../../images/GOT.jpeg";
import photo3 from "../../images/photo.jpeg";
import photo4 from "../../images/squid.jpeg";

const SearchPage = () => {

    const searchResults = [
        {
            id: 's1',
            name: 'Squid Game',
            image: photo4,
        },
        {
            id: 's2',
            name: 'Money Heist',
            image: photo1,
        },
        {
            id: 's3',
            name: 'Game Of Thrones',
            image: photo2,
        },
        {
            id: 's4',
            name: 'Dark',
            image: photo3,
        },
        {
            id: 's5',
            name: 'Game Of Thrones',
            image: photo2,
        },
        {
            id: 's6',
            name: 'Squid Game',
            image: photo4,
        },
        {
            id: 's7',
            name: 'Squid Game',
            image: photo4,
        },
        {
            id: 's8',
            name: 'Money Heist',
            image: photo1,
        },
        {
            id: 's9',
            name: 'Game Of Thrones',
            image: photo2,
        },
        {
            id: 's10',
            name: 'Dark',
            image: photo3,
        },
        {
            id: 's11',
            name: 'Game Of Thrones',
            image: photo2,
        },
        {
            id: 's12',
            name: 'Squid Game',
            image: photo4,
        },
        {
            id: 's13',
            name: 'Squid Game',
            image: photo4,
        },
        {
            id: 's14',
            name: 'Money Heist',
            image: photo1,
        },
        {
            id: 's15',
            name: 'Game Of Thrones',
            image: photo2,
        },
        {
            id: 's16',
            name: 'Dark',
            image: photo3,
        },
        {
            id: 's17',
            name: 'Game Of Thrones',
            image: photo2,
        },
        {
            id: 's18',
            name: 'Squid Game',
            image: photo4,
        },
    ];

    return (
        <Container>
            <Wrapper>
                <SearchSection>
                    <SearchWindow />
                </SearchSection>
                <SearchArea>
                    <SearchResultLegend>
                        Search Results
                    </SearchResultLegend>
                    <SearchResults>
                        {
                            searchResults.map(sr => <SearchResultCard
                                key={sr.id}
                                name={sr.name}
                                image={sr.image}
                            />)
                        }
                    </SearchResults>
                </SearchArea>
            </Wrapper>
        </Container>
    );
}

export default SearchPage;