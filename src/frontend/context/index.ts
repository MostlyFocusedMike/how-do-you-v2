import React from 'react';
import { ContextInterface } from '../util/interfaces';

const AppContext = React.createContext<ContextInterface>({
    currentUser: null,
    setCurrentUser: () => {},
    checkIfLoggedIn: () => {},
    handleLogin: () => {},
});

export default AppContext;
