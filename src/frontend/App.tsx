import React, { useContext, useEffect } from 'react';
import Routes from './routes';
import AppContext from './context';


const App = () => {
    const { checkIfLoggedIn, test } = useContext(AppContext);
    useEffect(() => {
        console.log('test', test);
        checkIfLoggedIn();
    }, []);

    return (
        <Routes />
    );
};

export default App;
