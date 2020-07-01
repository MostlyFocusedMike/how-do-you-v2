import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import AppContext from '../context';

// you don't need to include the JSX.Element, that's implied
// components have to return a JSX.Element or null
const MainNavBar: React.FC = () => {
    const { test } = useContext(AppContext);
    console.log('test', test);
    return (
        <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        </ul>
    </nav>
    )
}

export default MainNavBar;