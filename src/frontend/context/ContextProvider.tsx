import React, { ReactNode, useState } from 'react';
import authAdapter from '../adapters/auth-adapter';
import AppContext from '.';
import { UserDataInterface, ContextInterface } from '../util/interfaces';

interface ContextProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<null | UserDataInterface>(null);

    const checkIfLoggedIn = async () => {
        const cookieData = await authAdapter.reauth();
        if (cookieData) setCurrentUser(cookieData);
    };

    const handleLogin = (userData: UserDataInterface) => {
        setCurrentUser(userData);
    };

    const context: ContextInterface = {
        currentUser,
        setCurrentUser,
        checkIfLoggedIn,
        handleLogin,
    };

    return (
        <AppContext.Provider value={ context }>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
