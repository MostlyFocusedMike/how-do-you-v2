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
};

export default questionAdapter;
