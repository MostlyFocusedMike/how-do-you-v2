import React, { useState } from 'react';

interface PropsInterface {
    handleAdd: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const AnswerForm: React.FC<PropsInterface> = ({ handleAdd }) => {
    return <fieldset>
        <label htmlFor="answer-language">Answer Language</label>
        <select name="cars" id="cars">
            <option value="volvo">Objects</option>
            <option value="volvo">Arrays</option>
        </select>
        <label htmlFor="answer-text">Answer Text</label>
        <textarea id="answer-text"/>
        <label htmlFor="answer-code">Answer Code</label>
        <textarea id="answer-code"/>
        <button onClick={handleAdd}>Add new Answer</button>
    </fieldset>;
};

export default AnswerForm;
