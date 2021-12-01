import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Main } from './styles';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Layout = ({ children }) => {
    const location = useLocation();

    if (location.pathname === '/auth' || location.pathname === '/guest' || location.pathname === '/logout') {
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
            <Footer />
        </Container>
    );
}

export default Layout;