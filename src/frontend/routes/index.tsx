import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import MainNavBar from '../components/MainNavBar';
import UserProfilePage from '../pages/UserProfilePage';
import MainPage from '../pages/MainPage';

const Routes = () => {
    return (
        <Router>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={ MainPage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/users/:id" component={ UserProfilePage } />
                <Route path="*" exact component={ MainPage } />
            </Switch>
        </Router>
    );
};

export default Routes;
