import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ path, children }) => {
    const isAuth = false;

    if (!isAuth) {
        <Redirect to={'/auth'} />   
    }

    return (
        <Route path={path} exact>
            {children}
        </Route>
    );
}

export default AuthRoute;