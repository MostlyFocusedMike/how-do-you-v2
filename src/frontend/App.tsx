import React, { useContext, useEffect } from 'react';
import Routes from './routes';
import AppContext from './context';
import { ContextInterface } from './util/interfaces';


const App = () => {
    const { checkIfLoggedIn } = useContext<ContextInterface>(AppContext);
    useEffect(() => {
        checkIfLoggedIn();
    }, []);

    return (
        <Routes />
    );
};

export default App;
