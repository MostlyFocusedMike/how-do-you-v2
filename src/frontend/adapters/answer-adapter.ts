import fetcher from '../util/fetcher';

const optionsForDelete: RequestInit = {
    method: 'DELETE',
    credentials: 'include',
    headers: {
        accepts: 'application/json',
        'Content-Type': 'application/json',
    },
};

type DeleteResponse = {}

const languageAdapter = {
    delete: async (id: number) => {
        return fetcher<DeleteResponse>(`/api/v1/answers/${id}`, optionsForDelete);
    },
};

export default languageAdapter;
