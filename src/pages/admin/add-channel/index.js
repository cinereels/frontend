import React, { useState } from 'react';
import VideoComponent from '../../../components/video';
import { Row, Text, UploadButton } from './styles';
import { Input } from '../../../UI';
import Spacer from '../../../components/spacer';
import FeaturedButton from '../../../components/featured-button';
import { useSelector, useDispatch } from 'react-redux';
import GalleryModal from '../../../components/gallery-modal';
import { addChannel, addChannelGallery } from '../../../store/actions';
import { getErrorMsg } from '../../../utility/error-config';
import CreateLayout from '../../../components/create-layout';
import Gallery from '../../../components/gallery';
import theme from '../../../styles/theme';
import FrameComponent from '../../../components/frame-video';

const AddChannelPage = () => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.ath.token);
    const gallery = useSelector(state => state.chn.gallery);
    const ids = useSelector(state => state.chn.ids);

    const [name, setName] = useState('');
    const [channelNo, setChannelNo] = useState();
    const [description, setDescription] = useState('');
    const [channelUrl, setChannelUrl] = useState('');
    const [genre, setGenre] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const addGalleryHandler = async (galleryData) => {
        try {
            await dispatch(addChannelGallery(token, galleryData)); 
        } catch (err) {
            setError(getErrorMsg(err, 'Error uploading gallery'));
        }
    }

    const addChannelHandler = async () => {
        try {
            setIsLoading(true);
            await dispatch(addChannel(token, {
                name,
                channelNo: parseInt(channelNo),
                description,
                gallery: ids,
                url: channelUrl,
                live: true,
                genre,
            }));
            setIsLoading(false);
        } catch (err) {
            setError(getErrorMsg(err, 'Error adding channel'));
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
                        {/* <VideoComponent title={name ? name : 'Title'} videoUrl={channelUrl} /> */}
                        <FrameComponent title={name ? name : 'Title'} videoUrl={channelUrl} />
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
                    <Input placeholder="Channel URL" value={channelUrl} setValue={setChannelUrl} />
                    <Spacer type={'vertical'} size={20} />
                    <Text>OR</Text>
                    <Spacer type={'vertical'} size={20} />
                    <UploadButton>Upload</UploadButton>
                    <Spacer type={'vertical'} size={30} />
                    <Row>
                        <Input placeholder="Channel No." value={channelNo} setValue={setChannelNo} type={'number'} />
                        <Spacer type={'horizontal'} size={20} />
                        <Input placeholder="Genre" value={genre} setValue={setGenre} />
                    </Row>
                    <div style={{ flex: 1 }} />
                    <FeaturedButton block onClick={addChannelHandler} loading={isLoading}>Add Channel</FeaturedButton>
                    <Spacer type={'vertical'} size={150} />
                </CreateLayout.Info>
            </CreateLayout.Wrapper>
            <GalleryModal
                label={'Add Channel Gallery'}
                visible={showModal}
                setVisible={setShowModal}
                addGallery={addGalleryHandler}
            />
        </CreateLayout>
    );
}

export default AddChannelPage;

// https://123zcast.com/embed.php?player=desktop&v=willowusa&vw=100%&vh=520