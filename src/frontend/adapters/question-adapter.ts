import fetcher from '../util/fetcher';
import {
    QuestionInterface,
    QuestionInterfaceToDB,
} from '../util/interfaces';

const questionAdapter = {
    createWithAnswers: async (QuestionWithAnswers: QuestionInterfaceToDB) => {
        const options: RequestInit = {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(QuestionWithAnswers),
            headers: {
                accepts: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        return fetcher<QuestionInterface>('/api/v1/questions', options);
    },
};

export default questionAdapter;
