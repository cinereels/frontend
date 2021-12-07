import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ path, children }) => {
    const isAuth = useSelector(state => state.ath.token !== null);
    const isAdmin = useSelector(state => state.ath.isAdmin);

    if (!isAuth) {
        return <Redirect to={'/auth'} />;
    }

    if (!isAdmin) {
        return <Redirect to={'/'} />;
    }

    return (
        <Route path={path} exact>
            {children}
        </Route>
    );
}

export default AdminRoute;