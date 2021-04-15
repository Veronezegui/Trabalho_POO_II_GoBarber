import React from 'react';
import { Switch} from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/signin';
import SignUp from '../pages/signup';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn}></Route>
        <Route path="/login" component={SignUp}></Route>

        <Route path="/dashboard" component={Dashboard} isPrivate/>
    </Switch>
);


export default Routes;