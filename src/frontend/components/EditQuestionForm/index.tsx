import React, { useEffect, useState } from 'react';
import CategoryAdapter from '../../adapters/category-adapter';
import languageAdapter from '../../adapters/language-adapter';

interface formProps {
    answers: any;
    setAnswers: any;
    categoryIdProp?: number;
    questionProp?: string;
}

const EditQuestionForm: React.FC<formProps> = ({
    answers,
    setAnswers,
    categoryIdProp,
    questionProp = '',
}) => {
    const [categoryId, setCategoryId] = useState<any>(categoryIdProp);
    const [question, setQuestion] = useState<string>(questionProp);
    const [categories, setCategories] = useState<any[] | null>(null);
    const [languages, setLanguages] = useState<any>(null);
    const [defaultAnswer, setDefaultAnswer] = useState<any>(null);

    useEffect(() => {
        CategoryAdapter.getAll().then(setCategories);
    }, []);

    useEffect(() => {
        if (!categoryIdProp && categories) setCategoryId(categories[0].id);
    }, [categoryIdProp, categories]);

    useEffect(() => {
        if (!answers && languages && defaultAnswer) {
            setAnswers([defaultAnswer]);
        }
    }, [answers, languages, defaultAnswer]);

    useEffect(() => {
        languageAdapter.getAll().then(langs => {
            if (langs) {
                setLanguages(langs);
                setDefaultAnswer({
                    languageId: langs[0].id,
                    text: '',
                    code: '',
                });
            }
        });
    }, []);

    const handleAdd = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAnswers([...answers, { ...defaultAnswer }]);
    };

    const handleSave = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('answers: ', answers, 'categoryId: ', categoryId, question);
    };

    const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.dataset.idx) {
            const newAnswers = [...answers];
            const answerIndex = parseInt(e.target.dataset.idx, 10);
            newAnswers[answerIndex].languageId = parseInt(e.target.value, 10);
            setAnswers(newAnswers);
        }
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryId(parseInt(e.target.value, 10));
    };

    const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const answersClone = [...answers];
        if (e.target.dataset.idx) {
            const index = parseInt(e.target.dataset.idx, 10);
            answersClone[index][e.target.className] = e.target.value;
            setAnswers(answersClone);
        }
    };

    if (!categoryId || !categories || !answers || !languages) return null;
    return (
        <div>
            <h1>Edit Question</h1>
            <form>
                <label>What Category</label>
                <select
                    name="category"
                    id="category"
                    onChange={handleCategoryChange}
                    value={categoryId}
                >
                    {
                        categories.map((category: any) => <option key={category.id} value={category.id}>{category.name}</option>)
                    }
                </select>
                <label htmlFor="question-content">Question</label>
                <input type="text" id="question-content" name="question-content" value={question} onChange={handleQuestionChange}/>
                {
                   answers && answers.map((answer: any, idx: number) => {
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
                <button onClick={handleAdd}>Add new Answer</button>
                <button onClick={handleSave}>Save</button>
            </form>
        </div>
    );
};

export default EditQuestionForm;
