import React from 'react';
import { useState } from 'react';
import { Container, Dropdown, ShowInfo, Option } from './styles';

import { Select } from '../../UI';

import Theme from '../../components/theme';
import Spacer from '../../components/spacer';
import EpisodeList from '../../components/episode-list';

import photo4 from "../../images/squid.jpeg";

const LobbyPage = () => {
    const [theme, setTheme] = useState({
        title: 'Squid Game',
        image: photo4,
        description: `Squid Game (Korean: 오징어 게임; RR: Ojing-eo Geim) is a South Korean survival drama streaming television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, Wi Ha-joon, Jung Ho-yeon, O Yeong-su, Heo Sung-tae, Anupam Tripathi, and Kim Joo-ryoung.`,
        imdb: '8.1',
        rt: '94%',
    });

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

    const [seasonIndex, setSeasonIndex] = useState(0);

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
    ]);

    return (
        <Container>
            <Theme
                title={theme.title}
                description={theme.description}
                image={theme.image}
                imdb={theme.imdb}
                rt={theme.rt}
                type={'lobby'}
            />
            <Spacer type={'vertical'} size={40} />
            <ShowInfo>
                <Select options={seasons} placeholder={'Season'} />
                <Spacer type={'vertical'} size={40} />
                <EpisodeList episodes={episodes} />
            </ShowInfo>
        </Container>
    );
}

export default LobbyPage;