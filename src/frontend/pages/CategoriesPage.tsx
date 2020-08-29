import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import MainCategoriesTabs from '../components/MainCategoriesTabs';
import Category from '../components/Category';

interface MatchParams {
    categoryId: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const CategoriesPage: React.FC<MatchProps> = (props) => {
    return (
        <form>
            <h1>Questions</h1>
            <MainCategoriesTabs />
            <Category {...props} />
        </form>
    );
};

export default CategoriesPage;
