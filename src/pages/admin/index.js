import React from 'react';
import CreateCard from '../../components/create-card';
import { Container, Wrapper } from './styles';
import { useHistory } from 'react-router-dom';

const AdminPage = () => {
    const history = useHistory();

    const goToAddMovie = () => {
        history.push('/admin/add-movie');
    }

    const goToAddChannel = () => {
        history.push('/admin/add-channel');
    }

    const goToAddSeries = () => {
        history.push('/admin/add-tv-series');
    }

    return (
        <Container>
            <Wrapper>
                <CreateCard title={'Movies'} onClick={goToAddMovie} />
                <CreateCard title={'TV Series'} onClick={goToAddSeries} />
                <CreateCard title={'Channels'} onClick={goToAddChannel} />
            </Wrapper>
        </Container>
    );
}

export default AdminPage;