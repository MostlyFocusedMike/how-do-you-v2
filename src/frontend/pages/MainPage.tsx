import React, { useEffect } from 'react';

const HomePage: React.FC = () => {
    useEffect(() => {
        console.log('hi');
    }, []);
    return (
        <form>
            <h1>Questions</h1>
        </form>
    );
};

export default HomePage;
