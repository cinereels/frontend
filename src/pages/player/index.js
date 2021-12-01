import React from 'react';
import { Container, Video, Wrapper } from './styles';

const PlayerPage = () => {
    return (
        <Container>
            <Wrapper>
                <Video
                    src={'https://123zcast.com/embed.php?player=desktop&v=skyscric&vw=100%&vh=520'}
                    controls
                    allowFullScreen
                    width={'100%'}
                    height={'100%'}
                />
            </Wrapper>
        </Container>
    );
};

export default PlayerPage;