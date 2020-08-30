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
    const [langHash, setLangHash] = useState<LangeHashInterface>(null);

    useEffect(() => {
        const setup = async () => {
            const languages = await languageAdapter.getAll();
            if (languages) {
                createLangHash(setLangHash, languages);
            }
        };
        setup();
    }, []);

    const renderButton = () => {
        console.log('answers: ', answers);
        return answers.map(answer => {
            return <button key={answer.languageId}>{langHash[answer.languageId]}</button>;
        });
    };

    if (!langHash) return null;
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
                        />;
                    })
                }
            </ul>
        </div>
    );
};

export default Answers;
