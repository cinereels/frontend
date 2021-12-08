import React from 'react';
import { Button } from './styles';
import { ClipLoader as Loader } from 'react-spinners';

const FeaturedButton = ({ children, textSize, block, onClick, loading, height }) => {
    if (loading) {
        return (
            <Button textSize={textSize} block height={height}>
                <Loader color={'#fff'} size={15} />
            </Button>
        );
    }

    return (
        <Button block={block} height={height} size={textSize} onClick={onClick}>
            {children}
        </Button>
    );
}

export default FeaturedButton;