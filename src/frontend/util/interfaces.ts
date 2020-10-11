interface baseModelInterface {
    id: number;
    updatedAt?: string;
    createdAt?: string;
    updated_at?: string;
    created_at?: string;
}


export interface UserInterface extends baseModelInterface {
    role: string;
    email: string;
}

export interface CategoryInterface extends baseModelInterface {
    name: string;
    questions?: QuestionInterface[];
}

export interface QuestionInterface extends baseModelInterface {
    content: string;
    categoryId: number;
    answers?: AnswerInterface[];
}

export interface QuestionInterfaceToDB {
    content: string;
    category_id: number;
    answers?: AnswerInterfaceToDB[];
}

export interface QuestionWithAnswersInterface extends baseModelInterface {
    content: string;
    answers: AnswerInterface[];
}

export interface AnswerInterface extends baseModelInterface {
    id: number;
    code: string;
    text: string;
    languageId: number;
    questionId: number;
}

export interface AnswerInterfaceToDB {
    code: string;
    text: string;
    language_id: number;
    question_id: number;
}

export interface LanguageInterface extends baseModelInterface {
    name: string;
}

export interface ContextInterface {
    languages: null | LanguageInterface[];
    loggedInUser: null | UserInterface;
    categories: null | CategoryInterface[];
    setLoggedInUser: (user: UserInterface) => void;
    checkIfLoggedIn: () => void;
    handleLoginUser: (user: UserInterface) => void;
    handleLogoutUser: () => void;
}
