import React from 'react';

interface SelectProps {
    handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    category_id: number;
    categories: any[];
}

const CategorySelectInput: React.FC<SelectProps> = ({
    handleCategoryChange,
    category_id,
    categories,
}) => {
    return <select
        name="category"
        id="category"
        onChange={handleCategoryChange}
        value={category_id}
    >
        {
            categories.map((category: any) => <option key={category.id} value={category.id}>{category.name}</option>)
        }
    </select>;
};

export default CategorySelectInput;
