import React, { useEffect, useState } from 'react';
import { AnswerInterface } from '../util/interfaces';

interface propsInterface {
    answer: AnswerInterface;
}

const Answer: React.FC<propsInterface> = ({ answer }) => {
    return <ol className="answer" key={answer.id}>
        <p>lang: {answer.languageId}</p>
        <code>{answer.code}</code>
        <hr />
        <p>{answer.text}</p>
    </ol>;
};

export default Answer;
