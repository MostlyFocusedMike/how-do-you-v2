import React, { useContext, useEffect } from 'react';
import {
    Link,
} from 'react-router-dom';
import AppContext from '../context';
import { ContextInterface } from '../util/interfaces';

// you don't need to include the JSX.Element, that's implied
// components have to return a JSX.Element or null
const MainNavBar: React.FC = () => {
    const { currentUser } = useContext<ContextInterface>(AppContext);

    useEffect(() => {
        console.log('currentUser: ', currentUser);
    }, [currentUser]);

    const currentProfile = () => {
        if (!currentUser) return null;
        return (<li>
            <Link to={`/profile/${currentUser.id}`}>{currentUser.email}</Link>
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
