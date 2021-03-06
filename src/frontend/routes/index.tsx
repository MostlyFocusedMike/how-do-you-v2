import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import MainNavBar from '../components/MainNavBar';
import UserProfilePage from '../pages/UserProfilePage';
import HomePage from '../pages/HomePage';
import CategoriesPage from '../pages/CategoriesPage';
import CreateQuestionpage from '../pages/CreateQuestionPage';
import QuestionPage from '../pages/QuestionPage';

const Routes = () => {
    return (
        <Router>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/users/:userId" component={ UserProfilePage } />
                <Route path="/create" component={ CreateQuestionpage } />
                <Route path="/categories/:categoryId/questions/:questionId" component={ QuestionPage } />
                <Route path="/categories/:categoryId" component={ CategoriesPage } />
                <Route path="*" exact component={ HomePage } />
            </Switch>
        </Router>
    );
};

export default Routes;
