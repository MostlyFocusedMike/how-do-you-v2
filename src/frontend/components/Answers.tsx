import React, { useEffect, useState, useContext } from 'react';
import { AnswerInterface, LanguageInterface } from '../util/interfaces';
import Answer from './Answer';
import AppContext from '../context';

interface propsInterface {
    answers: AnswerInterface[];
}

type LangeHashInterface = any;

const createLangHash = (setLangHash: React.Dispatch<LangeHashInterface>, langs: LanguageInterface[]) => {
    const langHashRaw = langs.reduce((hash: LangeHashInterface, lang) => { // TODO: remember dynamic objects
        hash[lang.id] = lang.name; // eslint-disable-line no-param-reassign
        return hash;
    }, {});
    setLangHash(langHashRaw);
};

const Answers: React.FC<propsInterface> = ({ answers }) => {
    if (!answers.length) return null;
    const [langHash, setLangHash] = useState<null | LangeHashInterface>(null);
    const [chosenLangId, setChosenLangId] = useState<null | number>(null);
    const { languages } = useContext(AppContext);

    useEffect(() => {
        if (languages) {
            createLangHash(setLangHash, languages);
            setChosenLangId(answers[0].language_id);
        }
    }, [languages]);

    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setChosenLangId(parseInt(e.currentTarget.value, 10));
    };


    const renderButton = () => {
        return answers.map(answer => {
            return <button
                key={answer.language_id}
                value={answer.language_id}
                onClick={handleClick}
            >
                {langHash[answer.language_id]}
            </button>;
        });
    };
    console.log('langHash: ', chosenLangId);
    if (!langHash || !chosenLangId) return null;
    return (
        <div>
            { renderButton() }
            <ul>
                {
                    answers.map(answer => {
                        return <Answer
                            key={answer.id}
                            answer={answer}
                            langHash={langHash}
                            chosenLangId={chosenLangId}
                        />;
                    })
                }
            </ul>
        </div>
    );
};

export default Answers;
