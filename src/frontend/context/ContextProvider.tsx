import React, { ReactNode, useState } from 'react';
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

    const checkIfLoggedIn = () => {
        const savedUserId = localStorage.getItem(CURRENT_USER_ID);
        if (savedUserId) handleLogin(parseInt(savedUserId, 10));
    };

    const context = {
        test: 'hello there',
        currentUserId,
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
