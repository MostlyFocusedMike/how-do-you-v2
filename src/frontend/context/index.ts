import React from 'react';
import { ContextInterface } from '../util/interfaces';

const AppContext = React.createContext<ContextInterface>({
    loggedInUser: null,
    setLoggedInUser: () => {},
    checkIfLoggedIn: () => {},
    handleLogin: () => {},
});

export default AppContext;
