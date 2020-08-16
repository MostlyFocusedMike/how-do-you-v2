import React, { useContext } from 'react';
import Routes from './routes';
import AppContext from './context';


const App = () => {
    const { checkIfLoggedIn } = useContext(AppContext);

    checkIfLoggedIn();

    return (
        <Routes />
    );
};

export default App;
