import React from 'react';
import { ContextInterface } from '../util/interfaces';

const AppContext = React.createContext<ContextInterface>({
    languages: null,
    loggedInUser: null,
    categories: null,
    setLoggedInUser: () => {},
    checkIfLoggedIn: () => {},
    handleLoginUser: () => {},
    handleLogoutUser: () => {},
});

export default AppContext;
