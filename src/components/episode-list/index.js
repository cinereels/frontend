import React from 'react';
import EpisodeCard from '../episode-card';
import { Container, List } from './styles';

const EpisodeList = ({ episodes = [] }) => {
    return (
        <Container>
            <List>
                {
                    episodes.map(e => <EpisodeCard
                        key={e.id}
                        episodeNo={e.episodeNo}
                        title={e.title}
                        description={e.description}
                        image={e.image}
                    />)
                }
            </List>
        </Container>
    );
};

export default EpisodeList;