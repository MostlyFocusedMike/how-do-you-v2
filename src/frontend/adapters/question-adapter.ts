import fetcher from '../util/fetcher';
import {
    QuestionWithAnswersInterface,
    PreDBQuestionWithAnswersInterface,
} from '../util/interfaces';

const questionAdapter = {
    createWithAnswers: async (QuestionWithAnswers: PreDBQuestionWithAnswersInterface) => {
        const options: RequestInit = {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(QuestionWithAnswers),
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return fetcher<QuestionWithAnswersInterface>('/api/v1/questions', options);
    },
    getWithAnswers: async (id: number) => {
        const options: RequestInit = {
            method: 'GET',
            credentials: 'include',
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return fetcher<QuestionWithAnswersInterface>(`/api/v1/questions/${id}`, options);
    },
};

export default questionAdapter;
