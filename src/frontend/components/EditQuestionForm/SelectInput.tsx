import React from 'react';

interface SelectProps {
    handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    categoryId: number;
    categories: any[];
}

const CategorySelectInput: React.FC<SelectProps> = ({
    handleCategoryChange,
    categoryId,
    categories,
}) => {
    return <select
        name="category"
        id="category"
        onChange={handleCategoryChange}
        value={categoryId}
    >
        {
            categories.map((category: any) => <option key={category.id} value={category.id}>{category.name}</option>)
        }
    </select>;
};

export default CategorySelectInput;
