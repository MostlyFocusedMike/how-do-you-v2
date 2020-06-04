import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';


const Routes = () => {
    return (
        <Router>
            <div>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                </ul>
            </nav>
            </div>
            <Switch>
                <Route path="/login" component={ LoginPage } />
                <Route path="/" component={ HomePage }>
                </Route>
            </Switch>
        </Router>
    )
};

export default Routes;