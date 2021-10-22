import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'
function PrivateRoute({ component: Component, ...rest }) {


    const userData = useSelector(state => state.signInUser);
    return (
        <Route {...rest} render={props => {
            if (!userData.username) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            }

            // logged in so return component
            return <Component {...props} />
        }} />
    );
}

export default PrivateRoute;