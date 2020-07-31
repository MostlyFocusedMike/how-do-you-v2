import React, { useEffect, useState } from 'react';
import userAdapter from '../adapters/user-adapter';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
    name: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}
const UserProfilePage: React.FC<MatchProps> = ({ match })=> {
    const [user, setUser] = useState(null)

    useEffect(() => {
        console.log('match: ', match)
        userAdapter
            .getOne(1)
            .then((dbUser) => {
                setUser(dbUser);
            });
    }, [])

    useEffect(() => {
        console.log('user:', user)
    }, [user])

    return <h1>User Page</h1>;
}

export default UserProfilePage;