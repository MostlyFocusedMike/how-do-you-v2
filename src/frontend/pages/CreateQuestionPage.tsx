import React, { useState } from 'react';
import EditQuestionForm from '../components/EditQuestionForm';

const EditQuestion: React.FC = () => {
    const [answers, setAnswers] = useState<any>([{
        code: "",
        languageId: 2,
        text: "eyyyyy",
    },
    {
        code: "codeeee",
        languageId: 1,
        text: "yo",
    }]);

    return (
        <>
            <EditQuestionForm
                categoryIdProp={2}
                questionProp="does this shit work?"
                setAnswers={setAnswers}
                answers={answers}
            />
        </>
    );
};

export default EditQuestion;
