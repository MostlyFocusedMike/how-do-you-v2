import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Redirect } from 'react-router';

interface MatchParams {
    categoryId: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const Category: React.FC<MatchProps> = ({ match }) => {
    useEffect(() => {
        console.log('match: ', match.params.categoryId);
    });
    return (
        <h1>lookkkkkk</h1>
    );
};

export default Category;
