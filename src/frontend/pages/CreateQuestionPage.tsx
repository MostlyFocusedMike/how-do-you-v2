import React, { useState } from 'react';
import EditQuestionForm from '../components/EditQuestionForm';

const EditQuestion: React.FC = () => {
    const [answers, setAnswers] = useState<any>(null);
    const answers2 = [{
        answerCode: "",
        languageId: 2,
        text: "eyyyyy",
    }];

    return (
        <>
            <EditQuestionForm
                setAnswers={setAnswers}
                answers={answers2}
            />
        </>
    );
};

export default EditQuestion;
