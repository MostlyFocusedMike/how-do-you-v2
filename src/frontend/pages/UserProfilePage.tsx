import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import userAdapter from '../adapters/user-adapter';
import { UserDataInterface } from '../util/interfaces';

interface MatchParams {
    id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}
const UserProfilePage: React.FC<MatchProps> = ({ match }) => {
    const [user, setUser] = useState<UserDataInterface|null>(null);

    useEffect(() => {
        userAdapter
            .getOne(parseInt(match.params.id, 10))
            .then(setUser);
    }, []);

    useEffect(() => {
        console.log('user:', user);
    }, [user]);

    return <h1>User Page</h1>;
};

export default UserProfilePage;
