import React, { useEffect, useState } from 'react';
import { AnswerInterface } from '../util/interfaces';

interface propsInterface {
    answer: AnswerInterface;
    langHash: any; // TODO REMOVE ANY WITH DYNAMIC OBJECT
}

const Answer: React.FC<propsInterface> = ({ answer, langHash }) => {
    return <ol className="answer" key={answer.id}>
        <p>lang: {langHash[answer.languageId]}</p>
        <code>{answer.code}</code>
        <hr />
        <p>{answer.text}</p>
    </ol>;
};

export default Answer;
