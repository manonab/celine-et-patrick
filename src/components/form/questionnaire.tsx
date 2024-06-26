import React, { useState } from 'react';
import { questionsData } from '@/utils/questions';
import Question from './questions';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader';

const Questionnaire: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<{ questionId: number, answer: string[] }[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const correctAnswers: Record<number, string[]> = {
    0: ['C'],
    1: ['C'],
    2: ['B'],
    3: ['C'],
    4: ['B', 'D'],
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const selectAnswer = (selectedOptions: string[]) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = { questionId: questionsData[currentQuestionIndex].id, answer: selectedOptions };
    setUserAnswers(updatedUserAnswers);
  };

  const calculateSuccessRate = () => {
    setLoading(true);
    let correctCount = 0;
    userAnswers.forEach(userAnswer => {
      const questionId = userAnswer.questionId;
      const userSelectedAnswers = userAnswer.answer;
      const correctAnswersForQuestion = correctAnswers[questionId];

      if (correctAnswersForQuestion.every(answer => userSelectedAnswers.includes(answer)) && userSelectedAnswers.length === correctAnswersForQuestion.length) {
        correctCount++;
      }
    });

    const successRate = (correctCount / questionsData.length) * 100;

    setTimeout(() => {
      setLoading(false);
      navigate(`/results/${successRate.toFixed(2)}/${correctCount}/${questionsData.length}`);
    }, 2500); 
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center">
      <img src='./assets/img/celine-patrick.jpg' alt="céline et patrick à NY" className='w-full h-[250px] object-cover object-center mb-10' />
      <Question
        question={questionsData[currentQuestionIndex].question}
        options={questionsData[currentQuestionIndex].options}
        onNext={nextQuestion}
        onPrev={prevQuestion}
        isFirst={currentQuestionIndex === 0}
        isLast={currentQuestionIndex === questionsData.length - 1}
        onAnswerSelected={selectAnswer}
        canBeValidated={currentQuestionIndex === questionsData.length - 1}
        calculateSuccessRate={calculateSuccessRate}
        initialSelectedOptions={userAnswers[currentQuestionIndex]?.answer || []}
      />
    </div>
  );
};

export default Questionnaire;
