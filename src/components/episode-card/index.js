import React from 'react';
import Spacer from '../spacer';
import { Container, Row, Info, DisplaySection, Display, Photo, Title, Label, EpisodeNo, Description, Header, Wrapper, WatchContainer, TotalDuration, WatchedDuration, ButtonSection, Button1, Button2 } from './styles';

const EpisodeCard = ({ episodeNo, title, description, image, showButtons = true, size, active = false, onClick }) => {

    const watched = 30;

    return (
        <Container onClick={onClick}>
            <Wrapper active={active}>
                <Row>
                    <DisplaySection>
                        <Display size={size}>
                            <Photo src={image} alt={title} />
                        </Display>
                    </DisplaySection>
                    <Spacer type={'horizontal'} size={size === 'sm' ? 15 : 30} />
                    <Info>
                        <Header>
                            <Label size={size}>Episode - </Label>
                            <Spacer type={'horizontal'} size={5} />
                            <EpisodeNo size={size}>{episodeNo} : </EpisodeNo>
                            <Spacer type={'horizontal'} size={5} />
                            <Title size={size}>{title}</Title>
                        </Header>
                        <Spacer type={'vertical'} size={10} />
                        <Description size={size}>
                            {description}
                        </Description>
                        <Spacer type={'vertical'} size={size === 'sm' ? 10 : 20} />
                        <WatchContainer>
                            <TotalDuration>
                                <WatchedDuration watched={watched} />
                            </TotalDuration>
                        </WatchContainer>
                        {
                            showButtons &&
                            <React.Fragment>
                                <Spacer type={'vertical'} size={20} />
                                <ButtonSection>
                                    <Button1>Play</Button1>
                                    <Button2>Start</Button2>
                                </ButtonSection>
                            </React.Fragment>
                        }
                    </Info>
                </Row>
            </Wrapper>
        </Container>
    );
}

export default EpisodeCard;