import fetcher from '../util/fetcher'

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
                "Content-Type": "application/json"
            }
        };
        console.log('options: ', options);
        return fetcher('/api/v1/login', options);
    }
}

export default authAdapter