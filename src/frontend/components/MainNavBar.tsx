import React, { useContext, useEffect } from 'react';
import {
    Link,
} from 'react-router-dom';
import AppContext from '../context';

// you don't need to include the JSX.Element, that's implied
// components have to return a JSX.Element or null
const MainNavBar: React.FC = () => {
    const { loggedInUser } = useContext(AppContext);

    useEffect(() => {
        console.log('loggedInUser: ', loggedInUser);
    }, [loggedInUser]);

    const currentProfile = () => {
        if (!loggedInUser) return null;
        return (<li>
            <Link to={`/users/${loggedInUser.id}`}>{loggedInUser.email}</Link>
        </li>);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                {currentProfile()}
            </ul>
        </nav>
    );
};

export default MainNavBar;
