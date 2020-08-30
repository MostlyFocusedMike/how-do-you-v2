import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import MainCategoriesTabs from '../components/MainCategoriesTabs';
import Category from '../components/Category';
import categoryAdapter from '../adapters/category-adapter';
import { CategoryInterface, QuestionInterface } from '../util/interfaces';

interface MatchParams {
    categoryId: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const CategoriesPage: React.FC<MatchProps> = ({ match }) => {
    const [categoryQuestions, setCategoryQuestions] = useState<QuestionInterface[] | null>(null);
    useEffect(() => {
        categoryAdapter
            .getAllQuestionsForCategory(parseInt(match.params.categoryId, 10))
            .then(setCategoryQuestions);
    }, [match]);

    useEffect(() => {
        console.log('categoryQuestions: ', categoryQuestions);
    }, [categoryQuestions]);

    return (
        <form>
            <h1>Questions</h1>
            <MainCategoriesTabs />
            {
                categoryQuestions && <Category categoryQuestions={categoryQuestions}/>
            }

        </form>
    );
};

export default CategoriesPage;
