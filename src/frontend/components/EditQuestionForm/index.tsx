import React, { useEffect, useState } from 'react';
import categoryAdapter from '../../adapters/category-adapter';
import languageAdapter from '../../adapters/language-adapter';
import questionAdapter from '../../adapters/question-adapter';
import CategorySelectInput from './SelectInput';
import QuestionFormAnswerInputs from './QuestionFormAnswerInputs';
import {
    PreDBQuestionWithAnswersInterface,
    PreDBAnswerInterface,
} from '../../util/interfaces';


interface formProps {
    answers: PreDBAnswerInterface[];
    setAnswers: any;
    category_idProp?: number;
    questionProp?: string;
}

const EditQuestionForm: React.FC<formProps> = ({
    answers,
    setAnswers,
    category_idProp,
    questionProp = '',
}) => {
    const [category_id, setCategoryId] = useState<any>(category_idProp);
    const [question, setQuestion] = useState<string>(questionProp);
    const [categories, setCategories] = useState<any[] | null>(null);
    const [languages, setLanguages] = useState<any>(null);
    const [defaultAnswer, setDefaultAnswer] = useState<any>(null);

    useEffect(() => {
        categoryAdapter.getAll().then(setCategories);
    }, []);

    useEffect(() => {
        if (!category_idProp && categories) setCategoryId(categories[0].id);
    }, [category_idProp, categories]);

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
                    language_id: langs[0].id,
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

    const removeAnswer = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { answerIndex, idx } = e.currentTarget.dataset;
        console.log('clicked: ', e.currentTarget.dataset.idx);
        console.log('clicked: ', e.currentTarget.dataset.answerId);
        if (!answerIndex) { // not saved in DB, only state needs manipulating
            if (idx !== undefined) {
                const answersClone = [...answers];
                answersClone.splice(parseInt(idx, 10), 1);
                console.log('answersClone: ', answersClone);
                setAnswers(answersClone);
            }
        } else {

        }
    };

    const handleSave = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const body: PreDBQuestionWithAnswersInterface = {
            category_id,
            content: question,
            answers,
        };
        const response = await questionAdapter.createWithAnswers(body);
        console.log('response: ', response);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryId(parseInt(e.target.value, 10));
    };

    const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    };

    const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.dataset.idx) {
            const newAnswers = [...answers];
            newAnswers[parseInt(e.target.dataset.idx, 10)].language_id = parseInt(e.target.value, 10);
            setAnswers(newAnswers);
        }
    };


    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const answersClone = [...answers];
        if (e.target.dataset.idx) {
            const name = e.currentTarget.className;
            // Super dumb way to get around TypeScript throwing a hissyfit over dynamic access
            if (name === 'code') answersClone[parseInt(e.target.dataset.idx, 10)].code = e.target.value;
            if (name === 'text') answersClone[parseInt(e.target.dataset.idx, 10)].text = e.target.value;
            setAnswers(answersClone);
        }
    };

    if (!category_id || !categories || !answers || !languages) return null;

    return (
        <div>
            <h1>Edit Question</h1>
            <form>
                <label>What Category</label>
                <CategorySelectInput
                    handleCategoryChange={handleCategoryChange}
                    category_id={category_id}
                    categories={categories}
                />
                <label htmlFor="question-content">Question</label>
                <input type="text" id="question-content" name="question-content" value={question} onChange={handleQuestionChange}/>
                <QuestionFormAnswerInputs
                        handleLangChange={handleLangChange}
                        answers={answers}
                        languages={languages}
                        handleTextChange={handleTextChange}
                        removeAnswer={removeAnswer}
                />
                <button onClick={handleAdd}>Add new Answer</button>
                <button onClick={handleSave}>Save</button>
            </form>
        </div>
    );
};

export default EditQuestionForm;
