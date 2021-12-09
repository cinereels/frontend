import React from 'react';
import { Container, Wrapper, Preview, Info, VideoContainer, GalleryContainer } from './styles';

const CreateLayout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

CreateLayout.Wrapper = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

CreateLayout.Preview = ({ children }) => {
    return (
        <Preview>
            {children}
        </Preview>
    );
}

CreateLayout.Info = ({ children }) => {
    return (
        <Info>
            {children}
        </Info>
    );
}

CreateLayout.VideoContainer = ({ children }) => {
    return (
        <VideoContainer>
            {children}
        </VideoContainer>
    );
}

CreateLayout.GalleryContainer = ({ children }) => {
    return (
        <GalleryContainer>
            {children}
        </GalleryContainer>
    );
}

export default CreateLayout;

// https://media.w3.org/2010/05/sintel/trailer_hd.mp4