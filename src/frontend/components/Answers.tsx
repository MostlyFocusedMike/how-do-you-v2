import React, { useEffect, useState } from 'react';
import { AnswerInterface } from '../util/interfaces';
import Answer from './Answer';

interface propsInterface {
    answers: AnswerInterface[];
}

const Answers: React.FC<propsInterface> = ({ answers }) => {
    if (!answers.length) return null;
    return (
        <div>
            <ul>
                {
                    answers.map(answer => {
                        return <Answer key={answer.id} answer={answer} />;
                    })
                }
            </ul>
        </div>
    );
};

export default Answers;
