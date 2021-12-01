import React from "react";
import { Container } from './styles';
import { Switch } from 'react-router-dom';
import { AuthRoute, GuestRoute } from '../../guards';
import AuthPage from '../../pages/auth';
import HomePage from '../../pages/home';
import GuestPage from '../../pages/guest';
import NotificationPage from "../../pages/notification";
import SearchPage from "../../pages/search";
import TopChartPage from "../../pages/top-chart";
import LogoutPage from "../../pages/logout";
import LobbyPage from "../../pages/lobby";

const Navigator = () => {
    return (
        <Container>
            <Switch>
                <GuestRoute path={'/guest'}>
                    <GuestPage />
                </GuestRoute>
                <GuestRoute path={'/auth'}>
                    <AuthPage />
                </GuestRoute>
                <AuthRoute path={'/notifications'}>
                    <NotificationPage />
                </AuthRoute>
                <AuthRoute path={'/search'}>
                    <SearchPage />
                </AuthRoute>
                <AuthRoute path={'/top-charts'}>
                    <TopChartPage />
                </AuthRoute>
                <AuthRoute path={'/lobby'}>
                    <LobbyPage />
                </AuthRoute>
                <AuthRoute path={'/logout'}>
                    <LogoutPage />
                </AuthRoute>
                <AuthRoute path={'/'}>
                    <HomePage />
                </AuthRoute>
            </Switch>
        </Container>
    );
}

export default Navigator;