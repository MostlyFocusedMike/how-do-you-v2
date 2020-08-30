import React, { ReactNode, useState, useEffect } from 'react';
import authAdapter from '../adapters/auth-adapter';
import AppContext from '.';
import { UserInterface, ContextInterface, LanguageInterface } from '../util/interfaces';
import languageAdapter from '../adapters/language-adapter';

interface ContextProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState<null | UserInterface>(null);
    const [languages, setLanguages] = useState<null | LanguageInterface[]>(null);

    useEffect(() => {
        const setup = async () => {
            const languagesDB = await languageAdapter.getAll();
            if (languagesDB) setLanguages(languagesDB);
        };

        setup();
    }, []);

    const checkIfLoggedIn = async () => {
        const cookieData = await authAdapter.reauth();
        if (cookieData) setLoggedInUser(cookieData);
    };

    const handleLoginUser = (userData: UserInterface) => {
        setLoggedInUser(userData);
    };

    const handleLogoutUser = () => {
        setLoggedInUser(null);
    };

    const context: ContextInterface = {
        languages,
        loggedInUser,
        setLoggedInUser,
        checkIfLoggedIn,
        handleLoginUser,
        handleLogoutUser,
    };

    return (
        <AppContext.Provider value={ context }>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
