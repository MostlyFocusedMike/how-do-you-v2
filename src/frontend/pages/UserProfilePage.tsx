import React, { useEffect, useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import userAdapter from '../adapters/user-adapter';
import authAdapter from '../adapters/auth-adapter';
import { UserDataInterface } from '../util/interfaces';
import AppContext from '../context';

interface MatchParams {
    id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}
const UserProfilePage: React.FC<MatchProps> = ({ match }) => {
    const [pageUser, setPageUser] = useState<UserDataInterface|null>(null);
    const [isSameUser, setIsSameUser] = useState(false);
    const { loggedInUser } = useContext(AppContext);

    useEffect(() => {
        userAdapter
            .getOne(parseInt(match.params.id, 10))
            .then(setPageUser);
    }, []);

    useEffect(() => {
        console.log('loggedInUser in the page: ', loggedInUser);
        if (pageUser && loggedInUser) setIsSameUser(pageUser.id === loggedInUser.id);
    }, [pageUser, loggedInUser]);

    useEffect(() => {
        console.log('pageUser:', pageUser);
    }, [pageUser]);

    const handleLogout = async (e: React.FormEvent<HTMLButtonElement>) => {
        console.log('clicked: ');
        const logger = await authAdapter.logout();
        console.log('logger: ', logger);
    };

    if (!pageUser) return null;
    return (<div>
        <h1>User Page</h1>
        <p>Email: {pageUser.email}</p>
        <p>Role: {pageUser.role}</p>
        {
            isSameUser && <button onClick={handleLogout}>Log Out</button>
        }
    </div>);
};

export default UserProfilePage;
