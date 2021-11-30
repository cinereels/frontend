import { Route } from 'react-router-dom';

const GuestRoute = ({ path, children }) => {
    return (
        <Route path={path} exact>
            {children}
        </Route>
    );
}

export default GuestRoute;