import React, { useEffect, useState } from 'react';
import { AnswerInterface } from '../util/interfaces';

interface propsInterface {
    answer: AnswerInterface;
    langHash: any; // TODO REMOVE ANY WITH DYNAMIC OBJECT
    chosenLangId: number;
}

const Answer: React.FC<propsInterface> = ({ answer, langHash, chosenLangId }) => {
    if (answer.languageId !== chosenLangId) return null;
    return <ol className="answer" key={answer.id}>
        <p>Language: {langHash[answer.languageId]}</p>
        <code>{answer.code}</code>
        <hr />
        <p>{answer.text}</p>
    </ol>;
};

export default Answer;
