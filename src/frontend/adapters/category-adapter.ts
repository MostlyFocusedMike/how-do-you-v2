import fetcher from '../util/fetcher';
import { CategoryInterface } from '../util/interfaces';

const categoryAdapter = {
    getAll: async () => {
        const options: RequestInit = {
            method: 'GET',
            credentials: 'include',
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return fetcher<CategoryInterface[]>('/api/v1/categories', options);
    },
};

export default categoryAdapter;
