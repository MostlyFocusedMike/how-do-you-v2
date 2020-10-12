import React from 'react';
import { QuestionWithAnswersInterface } from '../util/interfaces';
import Question from './Question';

interface propsInterface {
    categoryQuestions: QuestionWithAnswersInterface[]
}

const Category: React.FC<propsInterface> = ({ categoryQuestions }) => {
    return (
        <ul>
            {
                categoryQuestions.map(question => {
                    return (
                        <ol key={question.id}>
                            {
                                <Question question={question}/>
                            }
                        </ol>
                    );
                })
            }
        </ul>
    );
};

export default Category;
