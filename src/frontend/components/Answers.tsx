import React, { useEffect, useState } from 'react';
import { AnswerInterface, LanguageInterface } from '../util/interfaces';
import languageAdapter from '../adapters/language-adapter';
import Answer from './Answer';

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

    useEffect(() => {
        const setup = async () => {
            const languages = await languageAdapter.getAll();
            if (languages) {
                createLangHash(setLangHash, languages);
            }
        };
        setChosenLangId(answers[0].languageId);
        setup();
    }, []);

    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setChosenLangId(parseInt(e.currentTarget.value, 10));
    };


    const renderButton = () => {
        console.log('answers: ', answers);
        return answers.map(answer => {
            return <button
                key={answer.languageId}
                value={answer.languageId}
                onClick={handleClick}
            >
                {langHash[answer.languageId]}
            </button>;
        });
    };

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
