import fetcher from '../util/fetcher';
import { UserInterface } from '../util/interfaces';

interface loginInterface {
    email: string;
    password: string;
}

const authAdapter = {
    login: async (loginData: loginInterface) => {
        const options: RequestInit = {
            method: 'POST',
            body: JSON.stringify(loginData),
            credentials: 'include',
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return fetcher<UserInterface>('/api/v1/login', options);
    },

    logout: async () => {
        const options: RequestInit = {
            method: 'POST',
            credentials: 'include',
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return fetcher<UserInterface>('/api/v1/logout', options);
    },

    reauth: async () => {
        const options: RequestInit = {
            method: 'GET',
            credentials: 'include',
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
        };

        return fetcher<UserInterface>('/api/v1/reauth', options);
    },
};

export default authAdapter;
