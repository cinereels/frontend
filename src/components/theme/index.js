import React from 'react';
import { Container, Mask, Overlay, Info, Title, Description, Rating, Imdb, Rt, ButtonSection, Button1, Button2 } from './styles';
import Player from 'react-background-video-player';

const Theme = ({ title, description, image, imdb, rt, type = 'home' }) => {
    
    const play = () => { };

    const visit = () => { };

    const resume = () => { };

    const startOver = () => { };

    let actions = (
        <ButtonSection>
            <Button1 onClick={play}>Play</Button1>
            <Button2 onClick={visit}>Visit</Button2>
        </ButtonSection>
    );

    switch (type) {
        case 'home':
            actions = (
                <ButtonSection>
                    <Button1 onClick={play}>Play</Button1>
                    <Button2 onClick={visit}>Visit</Button2>
                </ButtonSection>
            );
            break;
        case 'lobby':
            actions = (
                <ButtonSection>
                    <Button1 onClick={resume}>Resume</Button1>
                    <Button2 onClick={startOver}>Start Over</Button2>
                </ButtonSection>
            );
            break;
        default:
            break;
    }


    return (
        <Mask>
            <Container bg={image}>
                <Overlay>
                    <Info>
                        <Title>{title}</Title>
                        <Description>
                            {description}
                        </Description>
                    </Info>
                    <Rating>
                        <Imdb>IMDB - {imdb}</Imdb>
                        <Rt>ROTTEN TOMATOES - {rt}</Rt>
                    </Rating>
                    {actions}
                </Overlay>
            </Container>
        </Mask>
    );
}

export default Theme;