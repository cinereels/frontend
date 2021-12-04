import React, { useState } from 'react';
import Spacer from '../../components/spacer';
import { Container, Wrapper, ShowSection, EpisodeSection, VideoContainer, Info, Description, EpisodeNo, Header, Label, Title, LegendContainer, EpisodeListContainer } from './styles';

import photo4 from "../../images/squid.jpeg";
import EpisodeList from '../../components/episode-list';
import { Select } from '../../UI';
import VideoComponent from '../../components/video';

const ShowPage = () => {
    const [episodeIndex, setEpisodeIndex] = useState(0);

     const [seasons, setSeasons] = useState([
        {
            id: 's1',
            seasonNo: '01',
            value: '01',
            title: 'Season - 01',
        },
        {
            id: 's2',
            seasonNo: '02',
            value: '02',
            title: 'Season - 02',
        },
        {
            id: 's3',
            seasonNo: '03',
            value: '03',
            title: 'Season - 03',
        }
    ]);


    const [episodes, setEpisodes] = useState([
        {
            id: 'e1',
            episodeNo: '01',
            title: 'Pilot',
            image: photo4,
            description: 'kung Juon gets the squid game invite card and he accepts the offer to join the game, Kung Juon’s daughter is moving ....',
        },
        {
            id: 'e2',
            episodeNo: '02',
            title: 'Red-Light Green-Light',
            image: photo4,
            description: 'kung Juon gets the squid game invite card and he accepts the offer to join the game, Kung Juon’s daughter is moving ....',
        },
        {
            id: 'e3',
            episodeNo: '03',
            title: 'Honeycomb Game',
            image: photo4,
            description: 'kung Juon gets the squid game invite card and he accepts the offer to join the game, Kung Juon’s daughter is moving ....',
        },
        {
            id: 'e4',
            episodeNo: '04',
            title: 'Stick To the Game',
            image: photo4,
            description: 'kung Juon gets the squid game invite card and he accepts the offer to join the game, Kung Juon’s daughter is moving ....',
        },
        {
            id: 'e5',
            episodeNo: '05',
            title: 'Honeycomb Game',
            image: photo4,
            description: 'kung Juon gets the squid game invite card and he accepts the offer to join the game, Kung Juon’s daughter is moving ....',
        },
        {
            id: 'e6',
            episodeNo: '06',
            title: 'Stick To the Game',
            image: photo4,
            description: 'kung Juon gets the squid game invite card and he accepts the offer to join the game, Kung Juon’s daughter is moving ....',
        },
    ]);

    const handleEpisodeClick = (id) => {
        const eIndex = episodes.findIndex(e => e.id === id);
        setEpisodeIndex(eIndex);
    }

    return (
        <Container>
            <Wrapper>
                <ShowSection>
                    <VideoContainer>
                        <VideoComponent src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}  />
                    </VideoContainer>
                    <Info>
                        <Header>
                            <Label>Episode - </Label>
                            <Spacer type={'horizontal'} size={5} />
                            <EpisodeNo>{episodes[episodeIndex].episodeNo} : </EpisodeNo>
                            <Spacer type={'horizontal'} size={5} />
                            <Title>{episodes[episodeIndex].title}</Title>
                        </Header>
                        <Spacer type={'vertical'} size={10} />
                        <Description>
                            {episodes[episodeIndex].description}
                        </Description>
                    </Info>
                </ShowSection>
                <EpisodeSection>
                    <LegendContainer>
                        <Select options={seasons} placeholder={'Season'} />
                        <Spacer type={'vertical'} size={20} />
                    </LegendContainer>
                    <EpisodeListContainer>
                        <EpisodeList
                            setActiveEpisode={handleEpisodeClick}
                            activeEpisode={episodes[episodeIndex].id}
                            episodes={episodes}
                            showButtons={false}
                            size={'sm'}
                        />
                    </EpisodeListContainer>
                </EpisodeSection>
            </Wrapper>
        </Container>
    );
}

export default ShowPage;