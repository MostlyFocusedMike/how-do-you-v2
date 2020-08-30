interface baseModelInterface {
    id: number;
    updated_at?: string;
    created_at?: string;
}


export interface UserInterface extends baseModelInterface {
    role: string;
    email: string;
}

export interface CategoryInterface extends baseModelInterface {
    name: string;
}

export interface QuestionInterface extends baseModelInterface {
    content: string;
    answers?: AnswerInterface[];
}

export interface AnswerInterface extends baseModelInterface {
    id: number;
    code: string;
    text: string;
}

export interface ContextInterface {
    loggedInUser: null | UserInterface;
    setLoggedInUser: (user: UserInterface) => void;
    checkIfLoggedIn: () => void;
    handleLoginUser: (user: UserInterface) => void;
    handleLogoutUser: () => void;
}
