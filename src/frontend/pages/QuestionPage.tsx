import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import questionAdapter from '../adapters/question-adapter';

interface MatchParams {
    categoryId: string;
    questionId: string;
}

// Is this really the best way to handle match params?
interface MatchProps extends RouteComponentProps<MatchParams> {
}

const QuestionPage: React.FC<MatchProps> = ({ match }) => {
    useEffect(() => {
        if (match?.params?.questionId) {
            questionAdapter
                .getWithAnswers(parseInt(match.params.questionId, 10))
                .then(question => {
                    console.log('question: ', question);
                });
        }
    }, [match]);
    console.log('matcht: ', match.params);
    return (
        <h1>Individual Question Page</h1>
    );
};

export default QuestionPage;
