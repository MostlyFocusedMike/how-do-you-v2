import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import questionAdapter from '../adapters/question-adapter';
import { QuestionWithAnswersInterface } from '../util/interfaces';
import Question from '../components/Question';

interface MatchParams {
    categoryId: string;
    questionId: string;
}

// Is this really the best way to handle match params?
interface MatchProps extends RouteComponentProps<MatchParams> {
}

const QuestionPage: React.FC<MatchProps> = ({ match }) => {
    const [question, setQuestion] = useState<null | QuestionWithAnswersInterface>(null);

    useEffect(() => {
        if (match?.params?.questionId) {
            questionAdapter
                .getWithAnswers(parseInt(match.params.questionId, 10))
                .then(dbQuestion => {
                    console.log('dbQuestion: ', dbQuestion);
                    setQuestion(dbQuestion);
                });
        }
    }, [match]);
    console.log('matcht: ', match.params);
    return (
        <>
            <h1>Question</h1>
            {
                question && <Question question={question} />
            }
        </>

    );
};

export default QuestionPage;
