import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import categoryAdapter from '../adapters/category-adapter';
import { CategoryInterface } from '../util/interfaces';

const MainCategoriesTabs: React.FC = () => {
    const [categories, setCategories] = useState<CategoryInterface[]>([]);

    useEffect(() => {
        const getCategories = async () => {
            const categoriesDB = await categoryAdapter.getAll();
            if (categoriesDB) setCategories(categoriesDB);
        };
        console.log('hi');

        getCategories();
    }, []);

    const renderTabs = () => {
        return categories.length
            ? categories.map(category => (
                <Link
                    className="category-tab"
                    to={`/categories/${category.id}`}
                    key={category.id}
                >
                    {category.name}
                </Link>
            )) : null;
    };

    return (
        <nav>{ renderTabs() }</nav>
    );
};

export default MainCategoriesTabs;
