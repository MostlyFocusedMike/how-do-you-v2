import fetcher from '../util/fetcher';
import { CategoryInterface, QuestionWithAnswersInterface } from '../util/interfaces';

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

    getAllQuestionsForCategory: async (category_id: number) => {
        return fetcher<QuestionWithAnswersInterface[]>(`/api/v1/categories/${category_id}/questions`, optionsForGet);
    },
};

export default categoryAdapter;
