import React, { useState } from 'react';
import VideoComponent from '../../../components/video';
import { Row, Text, UploadButton } from './styles';
import { Input } from '../../../UI';
import Spacer from '../../../components/spacer';
import FeaturedButton from '../../../components/featured-button';
import { useSelector, useDispatch } from 'react-redux';
import GalleryModal from '../../../components/gallery-modal';
import { addMovieGallery, addMovie } from '../../../store/actions';
import { getErrorMsg } from '../../../utility/error-config';
import CreateLayout from '../../../components/create-layout';
import Gallery from '../../../components/gallery';
import theme from '../../../styles/theme';

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

    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <CreateLayout>
            <CreateLayout.Wrapper>
                <CreateLayout.Preview>
                    <CreateLayout.VideoContainer>
                        <VideoComponent title={name ? name : 'Title'} videoUrl={movieUrl} />
                    </CreateLayout.VideoContainer>
                    <CreateLayout.GalleryContainer>
                        <Gallery
                            type={'brick'}
                            color={theme.black}
                            gallery={gallery}
                            openModal={openModal}
                        />
                    </CreateLayout.GalleryContainer>
                </CreateLayout.Preview>
                <CreateLayout.Info>
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
                </CreateLayout.Info>
            </CreateLayout.Wrapper>
            <GalleryModal
                label={'Add Movie Gallery'}
                visible={showModal}
                setVisible={setShowModal}
                addGallery={addGalleryHandler}
            />
        </CreateLayout>
    );
}

export default AddMoviePage;

// https://media.w3.org/2010/05/sintel/trailer_hd.mp4