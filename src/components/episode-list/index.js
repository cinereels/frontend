import React from 'react';
import EpisodeCard from '../episode-card';
import { Container, List } from './styles';

const EpisodeList = ({ episodes = [], showButtons, activeEpisode, setActiveEpisode, size }) => {
    

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
                        showButtons={showButtons}
                        size={size}
                        active={activeEpisode === e.id}
                        onClick={() => setActiveEpisode(e.id)}
                    />)
                }
            </List>
        </Container>
    );
};

export default EpisodeList;