import { questionsData } from '@/utils/questions';
import React, { useState } from 'react';
import Question from './questions';
import { useQuestions } from '@/utils/questions-context';


const Questionnaire: React.FC = () => {
  const { questions } = useQuestions();
  const totalQuestions = questionsData.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const validateAnswers = () => {
    const unansweredQuestions = questionsData.filter((question, index) => !questions[index]);
    if (unansweredQuestions.length === 0) {
      console.log('Toutes les réponses ont été validées !');
    } else {
      console.log('Veuillez répondre à toutes les questions.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Question
        question={questionsData[currentQuestion].question}
        options={questionsData[currentQuestion].options}
        onNext={nextQuestion}
        onPrev={prevQuestion}
        isFirst={currentQuestion === 0}
        isLast={currentQuestion === totalQuestions - 1}
      />
      {currentQuestion === totalQuestions - 1 && (
        <button onClick={validateAnswers} className="mt-4 px-4 py-2 bg-red-200 text-white rounded">
          Valider les réponses
        </button>
      )}
    </div>
  );
};

export default Questionnaire;
