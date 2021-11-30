import React from 'react';
import { Container } from './styles';

const Spacer = ({ type, size }) => {
    return (
        <Container type={type} size={size} />
    );
}

export default Spacer;