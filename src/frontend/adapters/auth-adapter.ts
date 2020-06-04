const fetcher = (url: string, options?: RequestInit) => fetch(url, options).then(r => r.json());

const authAdapter = {
    login: async () => {
        const res = await fetcher('/login', {method: 'POST'})
        console.log('res: ', res);
        return res;
    }
}