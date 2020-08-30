import React, { useEffect, useState } from 'react';
import { AnswerInterface } from '../util/interfaces';
import languageAdapter from '../adapters/language-adapter';

interface propsInterface {
    answer: AnswerInterface;
}

const Answer: React.FC<propsInterface> = ({ answer }) => {
    const [langHash, setLangHash] = useState<any>(null);
    useEffect(() => {
        const setup = async () => {
            const langs = await languageAdapter.getAll();
            if (langs) {
                const langHashRaw = langs.reduce((hash: any, lang) => { // TODO: remember dynamic objects
                    hash[lang.id] = lang.name;
                    return hash;
                }, {});
                setLangHash(langHashRaw);
                console.log('langHash: ', langHash);
            }
        };
        setup();
    }, []);
    if (!langHash) return null;
    return <ol className="answer" key={answer.id}>
        <p>lang: {langHash[answer.languageId]}</p>
        <code>{answer.code}</code>
        <hr />
        <p>{answer.text}</p>
    </ol>;
};

export default Answer;
