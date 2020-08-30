import React, { useEffect, useState } from 'react';
import { QuestionInterface } from '../util/interfaces';
import Answer from './Answer';

interface propsInterface {
    question: QuestionInterface;
}

const Question: React.FC<propsInterface> = ({ question }) => {
    if (!question.answers || !question.answers.length) return null;
    return (
        <div>
            <h1>{question.content}</h1>
            <ul>
                {
                    question.answers.length && question.answers.map(answer => {
                        return <Answer key={answer.id} answer={answer} />;
                    })
                }
            </ul>
        </div>
    );
};

export default Question;
