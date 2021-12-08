import React, { useState } from 'react';
import { Container, Wrapper, Display, DisplaySection, InputSection, Photo, AddGalleryButton } from './styles';
import { Modal, Select, Input } from '../../UI';
import FeaturedButton from '../featured-button';
import Spacer from '../spacer';

const GalleryModal = ({ visible, setVisible, label, addGallery }) => {
    const [url, setUrl] = useState();
    const [caption, setCaption] = useState();
    const [type, setType] = useState();

    const mediaTypes = [
        {
            id: 'image',
            title: 'Image',
            value: 'image',
        },
        {
            id: 'video',
            title: 'Video',
            value: 'video',
        }
    ];

    const addGalleryHandler = async () => {
        if (url && url.trim().length > 0) {
            await addGallery({
                url,
                caption,
                type,
            });

            setUrl();
            setCaption();
            setType();
            setVisible(false);
        }
    }

    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
            label={label}
        >
            <Container>
                <Wrapper>
                    <DisplaySection>
                        <Display>
                            {url && <Photo src={url} alt={'Gallery Photo'} />}
                        </Display>
                    </DisplaySection>
                    <InputSection>
                        <Input
                            placeholder={'Media URL'}
                            value={url}
                            setValue={setUrl}
                        />
                        <Spacer type={'vertical'} size={20} />
                        <Input
                            placeholder={'Caption'}
                            value={caption}
                            setValue={setCaption}
                        />
                        <Spacer type={'vertical'} size={20} />
                        <Select
                            placeholder={'Media Type'}
                            options={mediaTypes}
                            onSelect={setType}
                        />
                        <Spacer type={'vertical'} size={20} />
                        <AddGalleryButton height={40} onClick={addGalleryHandler} block>Add Gallery</AddGalleryButton>
                    </InputSection>
                </Wrapper>
            </Container>
        </Modal>
    );
}

export default GalleryModal;