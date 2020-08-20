export interface UserDataInterface {
    id: number;
    role: string;
    email: string;
}

export interface ContextInterface {
    currentUser: null | UserDataInterface;
    setCurrentUser: (user: UserDataInterface) => void;
    checkIfLoggedIn: () => void;
    handleLogin: (user: UserDataInterface) => void;
}
