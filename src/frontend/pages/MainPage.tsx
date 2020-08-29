import React, { useEffect, useState } from 'react';
import categoryAdapter from '../adapters/category-adapter';
import { CategoryInterface } from '../util/interfaces';
import MainCategoriesTabs from '../components/MainCategoriesTabs';

const CategoriesPage: React.FC = () => {
    return (
        <form>
            <h1>Questions</h1>
            <MainCategoriesTabs />
        </form>
    );
};

export default CategoriesPage;
