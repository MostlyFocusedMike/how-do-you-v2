import React, { useEffect, useState } from 'react';
import { CategoryInterface, QuestionInterface } from '../util/interfaces';

interface propsInterface {
    categoryQuestions: QuestionInterface[]
}

const Category: React.FC<propsInterface> = ({ categoryQuestions }) => {

    return (
        <ul>
            {
                categoryQuestions.map(question => {
                    return <ol key={question.id}><h1>{question.content}</h1></ol>;
                })
            }
        </ul>
    );
};

export default Category;
