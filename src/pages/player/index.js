import React from 'react';
import VideoComponent from '../../components/video';
import { Container, Video, Wrapper } from './styles';

const PlayerPage = () => {
    return (
        <Container>
            <Wrapper>
                {/* <Video
                    src={''}
                    controls
                    allowFullScreen
                    width={'100%'}
                    height={'100%'}
                /> */}
                <VideoComponent src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'} />
            </Wrapper>
        </Container>
    );
};

export default PlayerPage;

// https://media.w3.org/2010/05/sintel/trailer_hd.mp4
// https://123zcast.com/embed.php?player=desktop&v=skyscric&vw=100%&vh=520