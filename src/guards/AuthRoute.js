import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { autoLogin } from '../store/actions';

const AuthRoute = ({ path, children }) => {
    const isAuth = useSelector(state => state.ath.token !== null);

    if (!isAuth) {
        return <Redirect to={'/guest'} />;
    }

    return (
        <Route path={path} exact>
            {children}
        </Route>
    );
}

export default AuthRoute;