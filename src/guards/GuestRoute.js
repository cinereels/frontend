import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ path, children }) => {
    const token = useSelector(state => state.ath.token);

    const isAuth = token !== null && token !== undefined;

    if (isAuth) {
        return <Redirect to={'/'} />;
    }

    return (
        <Route path={path} exact>
            {children}
        </Route>
    );
}

export default GuestRoute;