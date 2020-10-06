import React, { useEffect, useState } from 'react';
import CategoryAdapter from '../../adapters/category-adapter';
import languageAdapter from '../../adapters/language-adapter';
import CategorySelectInput from './SelectInput';
import QuestionFormAnswerInputs from './QuestionFormAnswerInputs';

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

    const handleSave = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const body = {
            category_id: categoryId,
            content: question,
            answers,
        };
        console.log('body', JSON.stringify(body));
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
            answersClone[parseInt(e.target.dataset.idx, 10)][e.target.className] = e.target.value;
            setAnswers(answersClone);
        }
    };

    if (!categoryId || !categories || !answers || !languages) return null;

    return (
        <div>
            <h1>Edit Question</h1>
            <form>
                <label>What Category</label>
                <CategorySelectInput
                    handleCategoryChange={handleCategoryChange}
                    categoryId={categoryId}
                    categories={categories}
                />
                <label htmlFor="question-content">Question</label>
                <input type="text" id="question-content" name="question-content" value={question} onChange={handleQuestionChange}/>
                <QuestionFormAnswerInputs
                        handleLangChange={handleLangChange}
                        answers={answers}
                        languages={languages}
                        handleTextChange={handleTextChange}
                />
                <button onClick={handleAdd}>Add new Answer</button>
                <button onClick={handleSave}>Save</button>
            </form>
        </div>
    );
};

export default EditQuestionForm;
