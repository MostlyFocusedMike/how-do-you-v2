import React from 'react';

interface QuestionFormAnswerInputs {
    handleLangChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    answers: any[];
    languages: any[];
    handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const QuestionFormAnswerInputs: React.FC<QuestionFormAnswerInputs> = ({
    handleLangChange,
    answers,
    languages,
    handleTextChange,
}) => {
    return <>
        {
            answers.map((answer: any, idx: number) => {
                const answerId = `answer-${idx}`;
                return <fieldset key={answerId}>
                    <label htmlFor={answerId}>Answer Language</label>
                    <select
                        name={answerId}
                        id={answerId}
                        onChange={handleLangChange}
                        data-idx={idx}
                        value={answers[idx].languageId}
                    >
                        {
                            languages.map((langauge: any) => <option key={langauge.id} value={langauge.id}>{langauge.name}</option>)
                        }
                    </select>
                    <label htmlFor={`${answerId}-text`}>Answer Text</label>
                    <textarea
                        name={`${answerId}-text`}
                        data-idx={idx}
                        id={`${answerId}-text`}
                        className="text"
                        value={answers[idx].text}
                        onChange={handleTextChange}
                    />
                    <label htmlFor={`${answerId}-code`}>Answer Code</label>
                    <textarea
                        name={answerId}
                        data-idx={idx}
                        id={`${answerId}-code`}
                        className="code"
                        value={answers[idx].code}
                        onChange={handleTextChange}
                    />
                </fieldset>;
            })
        }
    </>;
};

export default QuestionFormAnswerInputs;
