import React from "react";
import { Container } from "./styles";
import { Switch } from "react-router-dom";
import { AdminRoute, AuthRoute, GuestRoute } from "../../guards";
import AuthPage from "../../pages/auth";
import HomePage from "../../pages/home";
import GuestPage from "../../pages/guest";
import NotificationPage from "../../pages/notification";
import SearchPage from "../../pages/search";
import TopChartPage from "../../pages/top-chart";
import LogoutPage from "../../pages/logout";
import LobbyPage from "../../pages/lobby";
import SettingPage from "../../pages/setting";
import PlayerPage from "../../pages/player";
import ShowPage from "../../pages/show";
import AdminPage from "../../pages/admin";
import AddMoviePage from "../../pages/admin/add-movie/index";
import AddChannelPage from "../../pages/admin/add-channel/index";
import AddSeriesPage from "../../pages/admin/add-series";

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
                <AuthRoute path={'/settings'}>
                    <SettingPage />
                </AuthRoute>
                <AuthRoute path={'/show'}>
                    <ShowPage />
                </AuthRoute>
                <AuthRoute path={'/player'}>
                    <PlayerPage />
                </AuthRoute>
                <AuthRoute path={'/logout'}>
                    <LogoutPage />
                </AuthRoute>
                <AdminRoute path={'/admin/add-movie'}>
                    <AddMoviePage />
                </AdminRoute>
                <AdminRoute path={'/admin/add-channel'}>
                    <AddChannelPage />
                </AdminRoute>
                <AdminRoute path={'/admin/add-tv-series'}>
                    <AddSeriesPage />
                </AdminRoute>
                <AdminRoute path={'/admin'}>
                    <AdminPage />
                </AdminRoute>
                <AuthRoute path={'/'}>
                    <HomePage />
                </AuthRoute>
            </Switch>
        </Container>
    );
}

export default Navigator;
