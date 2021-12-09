import React, { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import GalleryItem from '../gallery-item';
import Spacer from '../spacer';
import { Container, Wrapper, Display, Photo, GalleryList } from './styles';

const Gallery = ({ type, color = theme.black, gallery, openModal }) => {
    const [display, setDisplay] = useState();

    useEffect(() => {
        if (gallery.length > 0) {
            const lastIndex = gallery.length - 1;
            setDisplay(gallery[lastIndex]);
        } else {
            setDisplay(null);
        }
    }, [gallery]);

    const selectHandler = (g) => {
        setDisplay(g);
    }

    return (
        <Container>
            <Wrapper type={type}>
                <Display color={color}>
                    {display && <Photo src={display.imageUrl} alt={display.caption} />}
                </Display>
                <Spacer type={type === 'brick' ? 'horizontal' : 'vertical'} size={20} />
                <GalleryList type={type}>
                    {
                        gallery.map(g => <GalleryItem
                            key={g.id}
                            gallery={g}
                            display={display}
                            selectHandler={() => selectHandler(g)}
                            color={color}
                        />)
                    }
                    <GalleryItem key={'add-gallery-item'} onClick={openModal} add color={color} />
                </GalleryList>
            </Wrapper>
        </Container>
    );
}

export default Gallery;