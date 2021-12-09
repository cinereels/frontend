import React from 'react';
import { FiPlus } from 'react-icons/fi';
import theme from '../../styles/theme';
import { Container, Display, Photo } from './styles';

const GalleryItem = ({ gallery, display, color = theme.black, selectHandler, onClick, add = false }) => {
    if (add) {
        return (
            <Container>
                <Display
                    color={color}
                    onClick={onClick}
                >
                    <FiPlus
                        color={'#fff'}
                        size={20}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                </Display>
            </Container>
        );
    }

    return (
        <Container>
            <Display
                color={color}
                active={display && display.id === gallery.id}
                onClick={() => selectHandler(gallery)}
            >
                <Photo src={gallery.imageUrl} alt={gallery.caption} />
            </Display>
        </Container>
    );
}

export default GalleryItem;