import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ path, children }) => {
    const isAuth = false;

    if (!isAuth) {
        return <Redirect to={'/auth'} />   
    }

    const isAdmin = false;

    if (!isAdmin) {
        return <Redirect to={'/'} />
    }

    return (
        <Route path={path} exact>
            {children}
        </Route>
    );
}

export default AdminRoute;