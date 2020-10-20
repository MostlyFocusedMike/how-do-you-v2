import React from 'react';
import { AnswerInterface } from '../../util/interfaces';

interface QuestionFormAnswerInputs {
    handleLangChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    answers: any[];
    languages: any[];
    handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    removeAnswer: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const QuestionFormAnswerInputs: React.FC<QuestionFormAnswerInputs> = ({
    handleLangChange,
    answers,
    languages,
    handleTextChange,
    removeAnswer,
}) => {
    return <>
        {
            answers.map((answer: any, idx: number) => {
                const answerIdx = `answer-${idx}`;
                return <fieldset key={answerIdx}>
                    <label htmlFor={answerIdx}>Answer Language</label>
                    <select
                        name={answerIdx}
                        id={answerIdx}
                        onChange={handleLangChange}
                        data-idx={idx}
                        value={answers[idx].language_id}
                    >
                        {
                            languages.map((langauge: any) => <option key={langauge.id} value={langauge.id}>{langauge.name}</option>)
                        }
                    </select>
                    <label htmlFor={`${answerIdx}-text`}>Answer Text</label>
                    <textarea
                        name={`${answerIdx}-text`}
                        data-idx={idx}
                        id={`${answerIdx}-text`}
                        className="text"
                        value={answers[idx].text}
                        onChange={handleTextChange}
                    />
                    <label htmlFor={`${answerIdx}-code`}>Answer Code</label>
                    <textarea
                        name={answerIdx}
                        data-idx={idx}
                        id={`${answerIdx}-code`}
                        className="code"
                        value={answers[idx].code}
                        onChange={handleTextChange}
                    />
                    <button onClick={removeAnswer} data-answer-index={idx} data-answer-id={answer.id}>Remove Answer</button>
                </fieldset>;
            })
        }
    </>;
};

export default QuestionFormAnswerInputs;
