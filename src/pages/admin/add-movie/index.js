import React, { useState } from 'react';
import VideoComponent from '../../../components/video';
import { Container, Wrapper, Preview, Info, VideoContainer, GalleryContainer, Row, Text, UploadButton, Display, Photo, MediaList, MediaItem, MediaImage } from './styles';
import { Input, Button } from '../../../UI';
import Spacer from '../../../components/spacer';
import FeaturedButton from '../../../components/featured-button';
import { useSelector, useDispatch } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import GalleryModal from '../../../components/gallery-modal';
import { addMovieGallery, addMovie } from '../../../store/actions';
import { getErrorMsg } from '../../../utility/error-config';
import { useEffect } from 'react';

const AddMoviePage = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.ath.token);
    const gallery = useSelector(state => state.mov.gallery);
    const ids = useSelector(state => state.mov.ids);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [genre, setGenre] = useState('');
    const [duration, setDuration] = useState('');
    const [imdb, setImdb] = useState('');
    const [rt, setRt] = useState('');

    const [display, setDisplay] = useState();
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (gallery.length > 0) {
            const lastIndex = gallery.length - 1;
            setDisplay(gallery[lastIndex]);
        } else {
            setDisplay(null);
        }
    }, [gallery]);

    const addGalleryHandler = async (galleryData) => {
        try {
            await dispatch(addMovieGallery(token, galleryData)); 
        } catch (err) {
            setError(getErrorMsg(err, 'Error uploading gallery'));
        }
    }

    const addMovieHandler = async () => {
        try {
            setIsLoading(true);
            await dispatch(addMovie(token, {
                name,
                description,
                gallery: ids,
                genre,
                url: movieUrl,
                duration,
                imdb,
                rt,
            }));
            setIsLoading(false);
        } catch (err) {
            setError(getErrorMsg(err, 'Error adding movie'));
            setIsLoading(false);
        }
    }

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const selectHandler = (media) => {
        setDisplay(media);
    }

    return (
        <Container>
            <Wrapper>
                <Preview>
                    <VideoContainer>
                        <VideoComponent title={name ? name : 'Title'} videoUrl={movieUrl} />
                    </VideoContainer>
                    <GalleryContainer>
                        <Display>
                            {display && <Photo src={display.imageUrl} alt={display.caption} />}
                        </Display>
                        <Spacer type={'horizontal'} size={20} />
                        <MediaList>
                            {
                                gallery.map(g => <MediaItem key={g.id} active={display && display.id === g.id} onClick={() => selectHandler(g)}>
                                    <MediaImage src={g.imageUrl} alt={g.caption} />
                                </MediaItem>)
                            }
                            <MediaItem onClick={openModal}>
                                <FiPlus color={'#fff'} size={20} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                            </MediaItem>
                        </MediaList>
                    </GalleryContainer>
                </Preview>
                <Info>
                    <Spacer type={'vertical'} size={40} />
                    <Input placeholder="Name" value={name} setValue={setName} />
                    <Spacer type={'vertical'} size={40} />
                    <Input placeholder="Description" value={description} setValue={setDescription} />
                    <Spacer type={'vertical'} size={40} />
                    <Input placeholder="Movie URL" value={movieUrl} setValue={setMovieUrl} />
                    <Spacer type={'vertical'} size={20} />
                    <Text>OR</Text>
                    <Spacer type={'vertical'} size={20} />
                    <UploadButton>Upload</UploadButton>
                    <Spacer type={'vertical'} size={20} />
                    <Row>
                        <Input placeholder="Genre" value={genre} setValue={setGenre} />
                        <Spacer type={'horizontal'} size={20} />
                        <Input placeholder="Duration" value={duration} setValue={setDuration} />
                    </Row>
                    <Spacer type={'vertical'} size={30} />
                    <Row>
                        <Input placeholder="IMDB Rating" value={imdb} setValue={setImdb} />
                        <Spacer type={'horizontal'} size={20} />
                        <Input placeholder="Rotten Tomatoes" value={rt} setValue={setRt} />
                    </Row>
                    <div style={{ flex: 1 }} />
                    <FeaturedButton block onClick={addMovieHandler} loading={isLoading}>Add Movie</FeaturedButton>
                    <Spacer type={'vertical'} size={150} />
                </Info>
            </Wrapper>
            <GalleryModal
                label={'Add Movie Gallery'}
                visible={showModal}
                setVisible={setShowModal}
                addGallery={addGalleryHandler}
            />
        </Container>
    );
}

export default AddMoviePage;

// https://media.w3.org/2010/05/sintel/trailer_hd.mp4