import React, { ReactNode, useState } from 'react';
import authAdapter from '../adapters/auth-adapter';
import AppContext from '.';

const CURRENT_USER_ID = 'currentUserId';

interface ContextProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [currentUserId, setCurrentUserId] = useState<null | number>(null);

    const handleLogin = (userId: number) => {
        localStorage.setItem(CURRENT_USER_ID, userId.toString());
        setCurrentUserId(userId);
    };

    const checkIfLoggedIn = async () => {
        const cookie = await authAdapter.reauth();
        console.log('cookie', cookie);
        const savedUserId = localStorage.getItem(CURRENT_USER_ID);
        if (savedUserId) handleLogin(parseInt(savedUserId, 10));
    };

    const context = {
        test: 'hello there',
        currentUserId,
        setCurrentUserId,
        handleLogin,
        checkIfLoggedIn,
    };

    return (
        <AppContext.Provider value={ context }>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
