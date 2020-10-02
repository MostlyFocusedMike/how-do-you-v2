import fetcher from '../util/fetcher';
import { CategoryInterface, QuestionInterface } from '../util/interfaces';

const optionsForGet: RequestInit = {
    method: 'GET',
    credentials: 'include',
    headers: {
        accepts: 'application/json',
        'Content-Type': 'application/json',
    },
};

const categoryAdapter = {
    getAll: async () => {
        return fetcher<CategoryInterface[]>('/api/v1/categories', optionsForGet);
    },

    getAllQuestionsForCategory: async (categoryId: number) => {
        return fetcher<QuestionInterface[]>(`/api/v1/categories/${categoryId}/questions`, optionsForGet);
    },
};

export default categoryAdapter;
