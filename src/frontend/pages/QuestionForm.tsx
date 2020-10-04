import React, { useState, useEffect } from 'react';
import CategoryAdapter from '../adapters/category-adapter';
import languageAdapter from '../adapters/language-adapter';

const EditQuestion: React.FC = () => {
    const [categories, setCategories] = useState<any[] | null>(null);
    const [categoryId, setCategoryId] = useState<any>([null]);
    const [languages, setLanguages] = useState<any[] | null>(null);
    const [answers, setAnswers] = useState<any[]>([]);
    const [defaultAnswer, setDefaultAnswer] = useState<any>(null);

    useEffect(() => {
        CategoryAdapter.getAll().then(dbCategories => {
            if (dbCategories) {
                setCategories(dbCategories);
                setCategoryId(dbCategories[0].id);
            }
        });
    }, []);

    useEffect(() => {
        languageAdapter.getAll().then(langs => {
            if (langs) {
                setLanguages(langs);
                setDefaultAnswer({
                    languageId: langs[0].id,
                    text: '',
                    answerCode: '',
                });
                console.log('defaultAnswer: ', defaultAnswer);
            }
        });
    }, []);

    useEffect(() => {
        if (defaultAnswer) setAnswers([defaultAnswer]);
    }, [defaultAnswer]);

    const handleAdd = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicked!');
        setAnswers([...answers, { ...defaultAnswer }]);
    };

    const handleSave = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicked!');
        console.log('answers: ', answers);
        console.log('languages: ', languages);
        console.log('categories: ', categories);
        console.log('categoryId: ', categoryId);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
        const answersClone = [...answers];
        if (e.target.dataset.idx) {
            const index = parseInt(e.target.dataset.idx, 10);
            answersClone[index][e.target.className] = e.target.value;
            setAnswers(answersClone);
        }
    };

    const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('hi');
        console.log('e.target.value: ', e.target.value);
        if (e.target.dataset.idx) {
            const answerIndex = parseInt(e.target.dataset.idx, 10);
            answers[answerIndex].languageId = parseInt(e.target.value, 10);
        } else {
            console.log('how is there no index?');
        }
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('hi');
        console.log('e.target.value: ', e.target.value);
        console.log('e.target.name: ', e.target.name);
        setCategoryId(parseInt(e.target.value, 10));
    };

    return (
        <div>
            <h1>Edit Question</h1>
            <form>
                <label>What Category</label>
                <select name="category" id="category" onChange={handleCategoryChange}>
                    {
                        categories && categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                    }
                </select>
                <label htmlFor="question-content">Question</label>
                <input type="text" id="question-content" name="question-content"/>
                {
                   answers.map((answer: any, idx: number) => {
                        const answerId = `answer-${idx}`;
                            return <fieldset key={answerId}>
                                <label htmlFor="answer-language">Answer Language</label>
                                <select
                                    name={answerId}
                                    id="cars"
                                    onChange={handleLangChange}
                                    data-idx={idx}
                                >
                                    {
                                        languages && languages.map(langauge => <option key={langauge.id} value={langauge.id}>{langauge.name}</option>)
                                    }
                                </select>
                                <textarea
                                    name={answerId}
                                    data-idx={idx}
                                    id={answerId}
                                    className="text"
                                    value={answers[idx].text}
                                    onChange={handleTextChange}
                                />
                            </fieldset>;
                    })
                }
                <button onClick={handleAdd}>Add new Answer</button>
                <button onClick={handleSave}>Save</button>
            </form>
        </div>
    );
};

export default EditQuestion;
