import React from 'react';
import CreateCard from '../../components/create-card';
import { Container, Wrapper } from './styles';
import { useHistory } from 'react-router-dom';

const AdminPage = () => {
    const history = useHistory();

    const goToAddMovie = () => {
        history.push('/admin/add-movie');
    }

    return (
        <Container>
            <Wrapper>
                <CreateCard title={'Movies'} onClick={goToAddMovie} />
                <CreateCard title={'TV Series'} />
                <CreateCard title={'Channels'} />
            </Wrapper>
        </Container>
    );
}

export default AdminPage;