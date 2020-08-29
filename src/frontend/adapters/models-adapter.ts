import fetcher from '../util/fetcher';
import { UserInterface } from '../util/interfaces';

const userAdapter = {
    getOne: async (userId: number) => {
        const options: RequestInit = {
            method: 'GET',
            credentials: 'include',
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return fetcher<UserInterface>(`/api/v1/users/${userId}`, options);
    },
};

export default userAdapter;
