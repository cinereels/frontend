import React, { useEffect, useState } from 'react';
import VideoComponent from '../../../components/video';
import { Row, Text, UploadButton } from './styles';
import { Input, Select } from '../../../UI';
import Spacer from '../../../components/spacer';
import FeaturedButton from '../../../components/featured-button';
import { useSelector, useDispatch } from 'react-redux';
import GalleryModal from '../../../components/gallery-modal';
import { addMovieGallery, addMovie, addSeries, addSeriesGallery, addSeason, addEpisode } from '../../../store/actions';
import { getErrorMsg } from '../../../utility/error-config';
import CreateLayout from '../../../components/create-layout';
import Gallery from '../../../components/gallery';
import theme from '../../../styles/theme';

const AddSeriesPage = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.ath.token);
    const gallery = useSelector(state => state.mov.gallery);
    const ids = useSelector(state => state.mov.ids);
    const seasons = useSelector(state => state.srs.seasons);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [genre, setGenre] = useState('');
    const [duration, setDuration] = useState('');
    const [imdb, setImdb] = useState('');
    const [rt, setRt] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState();
    const [seasonList, setSeasonList] = useState([]);
    const [currentSeason, setCurrentSeason] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isSeasonLoading, setIsSeasonLoading] = useState(false);
    const [isEpisodeLoading, setIsEpisodeLoading] = useState(false);

    useEffect(() => {
        if (seasons.length) {
            const sl = seasons.map(s => ({ title: 'Season - ' + s.seasonNo, value: s.seasonNo }));
            setSeasonList(sl);
        }
    }, [seasons]);

    const addGalleryHandler = async (galleryData) => {
        try {
            await dispatch(addSeriesGallery(token, galleryData)); 
        } catch (err) {
            setError(getErrorMsg(err, 'Error uploading gallery'));
        }
    }

    const addSeriesHandler = async () => {
        try {
            setIsLoading(true);
            await dispatch(addSeries(token, {
                name,
                description,
                gallery: ids,
                genre,
                seasons,
            }));
            setIsLoading(false);
        } catch (err) {
            setError(getErrorMsg(err, 'Error adding TV series'));
            setIsLoading(false);
        }
    }

    const addSeasonHandler = async (seasonData) => {
        try {
            setIsSeasonLoading(true);
            await dispatch(addSeason(token, seasonData));
            setIsSeasonLoading(false);
        } catch (err) {
            setError(getErrorMsg(err, 'Error adding season'));
            setIsSeasonLoading(false);
        }
    }


    const addEpisodeHandler = async (episodeData) => {
        try {
            setIsEpisodeLoading(true);
            await dispatch(addEpisode(token, episodeData));
            setIsEpisodeLoading(false);
        } catch (err) {
            setError(getErrorMsg(err, 'Error adding episode'));
            setIsEpisodeLoading(false);
        }
    }

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const selectSeasonHandler = (v) => {
        setCurrentSeason(v);
    }

    return (
        <CreateLayout>
            <CreateLayout.Wrapper>
                <CreateLayout.Preview>
                    <CreateLayout.VideoContainer>
                        <VideoComponent title={name ? name : 'Title'} videoUrl={movieUrl} />
                    </CreateLayout.VideoContainer>
                    <CreateLayout.GalleryContainer>
                        <Select placeholder="Season" options={seasonList} onSelect={selectSeasonHandler} />

                    </CreateLayout.GalleryContainer>
                </CreateLayout.Preview>
                <CreateLayout.Info>
                    <Spacer type={'vertical'} size={40} />
                    <Input placeholder="Name" value={name} setValue={setName} />
                    <Spacer type={'vertical'} size={40} />
                    <Input placeholder="Description" value={description} setValue={setDescription} />
                    <Spacer type={'vertical'} size={40} />
                    <Gallery
                        type={'tile'}
                        color={theme.secondary}
                        gallery={gallery}
                        openModal={openModal}
                    />
                    <Input placeholder="Genre" value={genre} setValue={setGenre} />
                    <Spacer type={'vertical'} size={30} />
                    <Row>
                        <Input placeholder="IMDB Rating" value={imdb} setValue={setImdb} />
                        <Spacer type={'horizontal'} size={20} />
                        <Input placeholder="Rotten Tomatoes" value={rt} setValue={setRt} />
                    </Row>
                    <div style={{ flex: 1 }} />
                    <FeaturedButton block onClick={addSeriesHandler} loading={isLoading}>Add Series</FeaturedButton>
                    <Spacer type={'vertical'} size={150} />
                </CreateLayout.Info>
            </CreateLayout.Wrapper>
            <GalleryModal
                label={'Add Series Gallery'}
                visible={showModal}
                setVisible={setShowModal}
                addGallery={addGalleryHandler}
            />
        </CreateLayout>
    );
}

export default AddSeriesPage;

// https://media.w3.org/2010/05/sintel/trailer_hd.mp4