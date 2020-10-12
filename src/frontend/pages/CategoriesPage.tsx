import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import MainCategoriesTabs from '../components/MainCategoriesTabs';
import Category from '../components/Category';
import categoryAdapter from '../adapters/category-adapter';
import { QuestionWithAnswersInterface } from '../util/interfaces';

interface MatchParams {
    category_id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const CategoriesPage: React.FC<MatchProps> = ({ match }) => {
    const [categoryQuestions, setCategoryQuestions] = useState<QuestionWithAnswersInterface[] | null>(null);
    useEffect(() => {
        categoryAdapter
            .getAllQuestionsForCategory(parseInt(match.params.category_id, 10))
            .then(setCategoryQuestions);
    }, [match]);

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
