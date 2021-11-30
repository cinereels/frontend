import React from 'react';
import { Button } from './styles';

const FeaturedButton = ({ children, textSize, block, onClick }) => {
    return (
        <Button block={block} size={textSize} onClick={onClick}>
            {children}
        </Button>
    );
}

export default FeaturedButton;