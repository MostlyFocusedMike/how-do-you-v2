import React, { useState, useEffect } from 'react';
import CategoryAdapter from '../adapters/category-adapter';


const EditQuestion: React.FC = () => {
    const [categories, setCategories] = useState<any[] | null>(null);

    useEffect(() => {
        CategoryAdapter.getAll().then(setCategories);
    }, []);

    const defaultAnswer = {
        languageId: 0, // dynamic todo
        text: '',
        answerCode: '',
    };

    const [answers, setAnswers] = useState<any>([{ ...defaultAnswer }]);

    const handleAdd = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicked!');
        setAnswers([...answers, { ...defaultAnswer }]);
    };


    const handleSave = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicked!');
        console.log('answers: ', answers);
        console.log('categories: ', categories);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
        const answersClone = [...answers];
        // @ts-ignore
        answersClone[e.target.dataset.idx][e.target.className] = e.target.value;
        setAnswers(answersClone);
    };

    return (
        <div>
            <h1>Edit Question</h1>
            <form>
                <label>What Category</label>
                <select name="cars" id="cars">
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
                                <select name="cars" id="cars">
                                    <option value="objects">Objects</option>
                                    <option value="volvo">Arrays</option>
                                </select>
                                <textarea
                                    name={answerId}
                                    data-idx={idx}
                                    id={answerId}
                                    className="text"
                                    value={answers[idx].text}
                                    onChange={handleChange}
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
