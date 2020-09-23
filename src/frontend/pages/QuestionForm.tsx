import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import AnswerForm from './AnswerForm';
import Answers from '../components/Answers';

const EditQuestion: React.FC = () => {
    const defaultAnswer = {
        languageId: 0, // dynamic todo
        answerText: '',
        answerCode: '',
    };

    const [answers, setAnswers] = useState<any>([defaultAnswer]);

    const handleAdd = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicked!');
        setAnswers([...answers, defaultAnswer]);
    };

    const renderAnswers = () => {
        return answers.map((answer: any) => {
            return <fieldset key={uuid()}>
                <label htmlFor="answer-language">Answer Language</label>
                <select name="cars" id="cars">
                    <option value="volvo">Objects</option>
                    <option value="volvo">Arrays</option>
                </select>
                <label htmlFor="answer-text">Answer Text</label>
                <textarea id="answer-text"/>
                <label htmlFor="answer-code">Answer Code</label>
                <textarea id="answer-code"/>
            </fieldset>;
        });
    };

    return (
        <div>
            <h1>Edit Question</h1>
            <form>
                <label>What Category</label>
                <select name="cars" id="cars">
                    <option value="volvo">Objects</option>
                    <option value="volvo">Arrays</option>
                </select>
                <label htmlFor="question-content">Question</label>
                <input type="text" id="question-content" name="question-content"/>
                {renderAnswers()}
                <button onClick={handleAdd}>Add new Answer</button>
                <button>Save</button>
            </form>
        </div>
    );
};

export default EditQuestion;
