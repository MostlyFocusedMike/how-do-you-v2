import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MainNavBar from '../components/MainNavBar';


const Routes = () => {
    return (
        <Router>
            <MainNavBar />
            <Switch>
                <Route path="/login" component={ LoginPage } />
                <Route path="/" component={ HomePage }>
                </Route>
            </Switch>
        </Router>
    )
};

export default Routes;