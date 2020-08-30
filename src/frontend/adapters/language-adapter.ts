import fetcher from '../util/fetcher';
import { LanguageInterface } from '../util/interfaces';

const optionsForGet: RequestInit = {
    method: 'GET',
    credentials: 'include',
    headers: {
        accepts: 'application/json',
        'Content-Type': 'application/json',
    },
};

const languageAdapter = {
    getAll: async () => {
        return fetcher<LanguageInterface[]>('/api/v1/languages', optionsForGet);
    },
};

export default languageAdapter;
