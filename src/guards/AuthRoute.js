import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ path, children }) => {
    const token = useSelector(state => state.ath.token);

    const isAuth = token !== null && token !== undefined;

    // console.log('token', token);

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