import React, { useState } from 'react';
import EditQuestionForm from '../components/EditQuestionForm';

const EditQuestion: React.FC = () => {
    const [answers, setAnswers] = useState<any>(null);

    return (
        <>
            <EditQuestionForm
                setAnswers={setAnswers}
                answers={answers}
            />
        </>
    );
};

export default EditQuestion;
