import React from "react";
import { Container } from './styles';
import { Switch } from 'react-router-dom';
import { AuthRoute, GuestRoute } from '../../guards';
import AuthPage from '../../pages/auth';
import HomePage from '../../pages/home';

const Navigator = () => {
    return (
        <Container>
            <Switch>
                <GuestRoute path={'/auth'}>
                    <AuthPage />
                </GuestRoute>
                <AuthRoute>
                    <HomePage />
                </AuthRoute>
            </Switch>
        </Container>
    );
}

export default Navigator;