import React from 'react';
import { Container, Background, Title, Info, Description, ButtonSection } from './styles';
import Button from '../../UI/button';

const Theme = ({ bg, title, description }) => {
    return (
        <Container>
            <Background src={bg} alt={title} />
            <Info>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
                <ButtonSection>
                    <Button width={150}>
                        Play
                    </Button>
                </ButtonSection>
            </Info>
        </Container>
    );
}

export default Theme;