import React, { useEffect, useState } from 'react';
import { QuestionInterface } from '../util/interfaces';
import Answers from './Answers';

interface propsInterface {
    question: QuestionInterface;
}

const Question: React.FC<propsInterface> = ({ question }) => {
    if (!question.answers || !question.answers.length) return null;
    return (
        <div>
            <h1>{question.content}</h1>
            <Answers answers={question.answers} />
        </div>
    );
};

export default Question;
