import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Footer, Header, Main } from './styles';
import Navbar from '../../components/navbar';

const Layout = ({ children }) => {
    const location = useLocation();

    if (location.pathname === '/auth') {
        return (
            <Container>
                <Main>
                    {children}
                </Main>
            </Container>
        );
    }

    return (
        <Container>
            <Navbar />
            <Main>
                {children}
            </Main>
        </Container>
    );
}

export default Layout;