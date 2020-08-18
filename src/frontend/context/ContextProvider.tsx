import React, { ReactNode, useState } from 'react';
import authAdapter from '../adapters/auth-adapter';
import AppContext from '.';

interface ContextProps {
    children: ReactNode;
}

interface UserDataInterface {
    id: number,
    email: string,
    role: string,
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<null | UserDataInterface>(null);

    const checkIfLoggedIn = async () => {
        const cookieData = await authAdapter.reauth();
        if (cookieData) setCurrentUser(cookieData);
    };

    const handleLogIn = (userData: UserDataInterface) => {
        setCurrentUser(userData);
    };

    const context = {
        currentUser,
        setCurrentUser,
        checkIfLoggedIn,
        handleLogIn,
    };

    return (
        <AppContext.Provider value={ context }>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
