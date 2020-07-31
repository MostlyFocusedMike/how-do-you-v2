import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MainNavBar from '../components/MainNavBar';
import UserProfilePage from '../pages/UserProfilePage';

const Routes = () => {
    return (
        <Router>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/profile/:id" component={ UserProfilePage } />
            </Switch>
        </Router>
    )
};

export default Routes;