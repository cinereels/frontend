import React from 'react';
import { Container, Wrapper, Title } from './styles';

const CreateCard = ({ title, onClick }) => {
    return (
        <Container onClick={onClick}>
            <Wrapper>
                <Title>{title}</Title>
            </Wrapper>
        </Container>
    );
}

export default CreateCard;