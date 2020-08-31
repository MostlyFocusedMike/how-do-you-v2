import React from 'react';

const EditQuestion: React.FC = () => {
    return (
        <div>
            <h1>Edit Question</h1>
            <form>
                <label>What Category</label>
                <select name="cars" id="cars">
                    <option value="volvo">Objects</option>
                    <option value="volvo">Arrays</option>
                </select>
                <label htmlFor="question-content">Question</label>
                <input type="text" id="question-content" name="question-content"/>
                <fieldset>
                    <label htmlFor="answer-language">Answer Language</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Objects</option>
                        <option value="volvo">Arrays</option>
                    </select>
                    <label htmlFor="answer-text">Answer Text</label>
                    <textarea id="answer-text"/>
                    <label htmlFor="answer-code">Answer Code</label>
                    <textarea id="answer-code"/>
                    <button>Add new Answer</button>
                </fieldset>
                <button>Save</button>
            </form>
        </div>
    );
};

export default EditQuestion;
