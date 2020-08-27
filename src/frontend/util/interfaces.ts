export interface UserDataInterface {
    id: number;
    role: string;
    email: string;
}

export interface ContextInterface {
    loggedInUser: null | UserDataInterface;
    setLoggedInUser: (user: UserDataInterface) => void;
    checkIfLoggedIn: () => void;
    handleLoginUser: (user: UserDataInterface) => void;
    handleLogoutUser: () => void;
}
