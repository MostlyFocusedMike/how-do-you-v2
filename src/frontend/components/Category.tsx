import React, { useEffect, useState } from 'react';
import { CategoryInterface, QuestionInterface } from '../util/interfaces';
import Question from './Question';

interface propsInterface {
    categoryQuestions: QuestionInterface[]
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
