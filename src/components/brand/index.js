import React from 'react';
import { Container, Text } from './styles';
import { appName } from '../../constants/app-name';

const Brand = ({ size }) => {
    return (
        <Container>
            <Text size={size}>{appName}</Text>
        </Container>
    );
}

export default Brand;