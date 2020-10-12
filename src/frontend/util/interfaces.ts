interface baseModelInterface {
    id: number;
    updated_at: string;
    created_at: string;
}

export interface UserInterface extends baseModelInterface {
    role: string;
    email: string;
}

export interface LanguageInterface extends baseModelInterface {
    name: string;
}

export interface CategoryInterface extends baseModelInterface {
    name: string;
    questions?: QuestionInterface[];
}

// Questions
export interface PreDBQuestionInterface {
    content: string;
    category_id: number;
}

export interface PreDBQuestionWithAnswersInterface extends PreDBQuestionInterface {
    answers: PreDBAnswerInterface[];
}

export interface QuestionInterface extends baseModelInterface {
    content: string;
    category_id: number;
}

export interface QuestionWithAnswersInterface extends QuestionInterface {
    answers: AnswerInterface[];
}

// Answers
export interface PreDBAnswerInterface {
    code: string;
    text: string;
    language_id: number;
    question_id: number;
}

export interface AnswerInterface extends baseModelInterface {
    code: string;
    text: string;
    language_id: number;
    question_id: number;
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
