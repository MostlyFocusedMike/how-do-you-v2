const fetcher = async (url: string, options?: RequestInit ) => {
    const res = await fetch(url, options)
    const body = await res.json();
    if (res.ok) return body;
    return { err: res.statusText, status: res.status, body }
};

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
        return fetcher('api/v1/login', options);
    }
}

export default authAdapter