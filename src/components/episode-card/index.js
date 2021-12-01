import React from 'react';
import Spacer from '../spacer';
import { Container, Row, Info, Display, Photo, Title, Label, EpisodeNo, Description, Header, Wrapper, WatchContainer, TotalDuration, WatchedDuration, ButtonSection, Button1, Button2 } from './styles';

const EpisodeCard = ({ episodeNo, title, description, image }) => {

    const watched = 30;

    return (
        <Container>
            <Wrapper>
                <Row>
                    <Display>
                        <Photo src={image} alt={title} />
                    </Display>
                    <Spacer type={'horizontal'} size={30} />
                    <Info>
                        <Header>
                            <Label>Episode - </Label>
                            <Spacer type={'horizontal'} size={5} />
                            <EpisodeNo>{episodeNo} : </EpisodeNo>
                            <Spacer type={'horizontal'} size={5} />
                            <Title>{title}</Title>
                        </Header>
                        <Spacer type={'vertical'} size={10} />
                        <Description>
                            {description}
                        </Description>
                        <Spacer type={'vertical'} size={20} />
                        <WatchContainer>
                            <TotalDuration>
                                <WatchedDuration watched={watched} />
                            </TotalDuration>
                        </WatchContainer>
                        <Spacer type={'vertical'} size={20} />
                        <ButtonSection>
                            <Button1>Play</Button1>
                            <Button2>Start</Button2>
                        </ButtonSection>
                    </Info>
                </Row>
            </Wrapper>
        </Container>
    );
}

export default EpisodeCard;