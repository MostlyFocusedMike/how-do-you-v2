export interface UserInterface {
    id: number;
    role: string;
    email: string;
}

export interface CategoryInterface {
    id: number;
    name: string;
}

export interface ContextInterface {
    loggedInUser: null | UserInterface;
    setLoggedInUser: (user: UserInterface) => void;
    checkIfLoggedIn: () => void;
    handleLoginUser: (user: UserInterface) => void;
    handleLogoutUser: () => void;
}
