import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouteRender = ({ component: Component, ...params}) => (

    <Route {...params} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);