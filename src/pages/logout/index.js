import React from 'react';
import FeaturedButton from '../../components/featured-button';
import Spacer from '../../components/spacer';
import { Container, ButtonContainer, Text, Wrapper, ButtonSection, FilledButton, OutlinedButton } from './styles';

import bg from '../../images/backgrounds/jeff-pierre-5X5I20O_Vbg-unsplash.jpg';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions';
import { useHistory } from 'react-router';

const LogoutPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const yesHandler = async () => {
        await dispatch(logout());
        history.push('/guest');
    }

    const noHandler = () => {
        history.goBack();
    }

    return (
        <Container bg={bg}>
            <Wrapper>
                <Text>
                    Are you sure you want to logout?
                </Text>
                <Spacer type={'vertical'} size={30} />
                <ButtonSection>
                    <ButtonContainer>
                        <FilledButton onClick={yesHandler}>
                            Yes
                        </FilledButton>
                    </ButtonContainer>
                    <Spacer type={'horizontal'} size={10} />
                    <ButtonContainer>
                        <OutlinedButton onClick={noHandler}>
                            No
                        </OutlinedButton>
                    </ButtonContainer>
                </ButtonSection>
            </Wrapper>
        </Container>
    );
}

export default LogoutPage;