import React, { ReactNode, useState } from 'react';
import authAdapter from '../adapters/auth-adapter';
import AppContext from '.';
import { UserInterface, ContextInterface } from '../util/interfaces';

interface ContextProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState<null | UserInterface>(null);

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
