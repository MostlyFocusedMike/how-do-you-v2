import React, { useContext, useEffect } from 'react';
import {
    Link,
} from 'react-router-dom';
import AppContext from '../context';

const MainNavBar: React.FC = () => {
    const { loggedInUser } = useContext(AppContext);

    useEffect(() => {
        console.log('loggedInUser: ', loggedInUser);
    }, [loggedInUser]);

    const currentProfile = () => {
        if (!loggedInUser) return null;
        return (<Link to={`/users/${loggedInUser.id}`}>{loggedInUser.email}</Link>);
    };

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/categories/1'>Categories</Link>
            {currentProfile()}
        </nav>
    );
};

export default MainNavBar;
