import React, { ReactNode, useState, useEffect } from 'react';
import authAdapter from '../adapters/auth-adapter';
import AppContext from '.';
import { UserInterface, ContextInterface, LanguageInterface, CategoryInterface } from '../util/interfaces';
import languageAdapter from '../adapters/language-adapter';
import categoryAdapter from '../adapters/category-adapter';

interface ContextProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState<null | UserInterface>(null);
    const [languages, setLanguages] = useState<null | LanguageInterface[]>(null);
    const [categories, setCategories] = useState<null | CategoryInterface[]>(null);

    // TODO: probably a DRY way to set these things
    useEffect(() => {
        const setup = async () => {
            const languagesDB = await languageAdapter.getAll();
            if (languagesDB) setLanguages(languagesDB);
        };

        setup();
    }, []);

    useEffect(() => {
        const setup = async () => {
            const categoriesDB = await categoryAdapter.getAll();
            if (categoriesDB) setCategories(categoriesDB);
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
        categories,
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
