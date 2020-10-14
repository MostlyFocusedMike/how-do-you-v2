import fetcher from '../util/fetcher';

const optionsForDelete: RequestInit = {
    method: 'DELETE',
    credentials: 'include',
    headers: {
        accepts: 'application/json',
        'Content-Type': 'application/json',
    },
};

interface DeleteInterface {
    msg: string;
}
const languageAdapter = {
    delete: async (id: number) => {
        return fetcher<DeleteInterface>(`/api/v1/answers/${id}`, optionsForDelete);
    },
};

export default languageAdapter;
