import React from 'react';
import { Route } from 'react-router-dom';
import User from './components/user';

const Routes = () => {
        return(
            <Route path="/" exact component={User} />
        );
};

export default Routes;