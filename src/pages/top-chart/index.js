import React from 'react';
import { Container, SearchArea, SearchSection, Wrapper, SearchResultLegend, SearchResults } from './styles';

import SearchWindow from '../../components/search-window';
import ListTile from '../../components/list-tile';

import photo1 from "../../images/mh.jpeg";
import photo2 from "../../images/GOT.jpeg";
import photo3 from "../../images/photo.jpeg";
import photo4 from "../../images/squid.jpeg";

const TopChartPage = () => {

    const topChart = [
        {
            id: 's1',
            name: 'Squid Game',
            image: photo4,
            imdb: '8.1',
            rt: '94%',
        },
        {
            id: 's2',
            name: 'Money Heist',
            image: photo1,
            imdb: '8.2',
            rt: '92%',
        },
        {
            id: 's3',
            name: 'Game Of Thrones',
            image: photo2,
            imdb: '9.2',
            rt: '89%',
        },
        {
            id: 's4',
            name: 'Dark',
            image: photo3,
            imdb: '8.8',
            rt: '95%',
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
                        Top Charts
                    </SearchResultLegend>
                    <SearchResults>
                        {
                            topChart.map((tc, index) => <ListTile
                                key={tc.id}
                                title={`#${index + 1} ${tc.name}`}
                                imageUrl={tc.image}
                                imdb={tc.imdb}
                                rt={tc.rt}
                            />)
                        }
                    </SearchResults>
                </SearchArea>
            </Wrapper>
        </Container>
    );
}

export default TopChartPage;