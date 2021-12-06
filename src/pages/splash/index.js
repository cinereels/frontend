import React from 'react';
import Brand from '../../components/brand';
import { BrandContainer, Container, Overlay } from './styles';
import { ClipLoader as Loader } from 'react-spinners';
import bg from '../../images/backgrounds/9wzdncrfj3tj-background.jpeg';
import theme from '../../styles/theme';
import Spacer from '../../components/spacer';

const SplashPage = () => {
    return (
        <Container bg={bg}>
            <Overlay>
                <BrandContainer>
                    <Brand size={50} />
                    <Spacer type={'vertical'} size={40} />
                    <Loader color={theme.primary} size={50} />
                </BrandContainer>
            </Overlay>
        </Container>
    );
}

export default SplashPage;