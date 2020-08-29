import React, { useContext, useEffect } from 'react';
import Routes from './routes';
import AppContext from './context';
import { ContextInterface } from './util/interfaces';
import './app.scss';

const App = () => {
    const { checkIfLoggedIn } = useContext(AppContext);
    useEffect(() => {
        checkIfLoggedIn();
    }, []);

    return (
        <Routes />
    );
};

export default App;
