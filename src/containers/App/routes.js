import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from 'components/Calculator';

const ControlledRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => <Component {...props} />} />
);

const routes = () => (
    <Switch>
        <ControlledRoute path="/" component={Calculator} />
    </Switch>
);

export default routes;
