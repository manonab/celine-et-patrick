import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Answer {
  questionId: number;
  answer: string | null;
}

interface QuestionnaireContextType {
  userAnswers: Answer[];
  updateUserAnswers: (questionId: number, answer: string | null) => void;
}

const QuestionnaireContext = createContext<QuestionnaireContextType | undefined>(undefined);

export const useQuestionnaireContext = () => {
  const context = useContext(QuestionnaireContext);
  if (!context) {
    throw new Error('useQuestionnaireContext must be used within a QuestionnaireProvider');
  }
  return context;
};

export const QuestionnaireProvider = ({ children }: { children: ReactNode }) => {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

  const updateUserAnswers = (questionId: number, answer: string | null) => {
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      const existingAnswerIndex = updatedAnswers.findIndex(item => item.questionId === questionId);
      if (existingAnswerIndex !== -1) {
        updatedAnswers[existingAnswerIndex] = { questionId, answer };
      } else {
        updatedAnswers.push({ questionId, answer });
      }
      return updatedAnswers;
    });
  };

  const contextValue: QuestionnaireContextType = {
    userAnswers,
    updateUserAnswers,
  };

  return (
    <QuestionnaireContext.Provider value={contextValue}>
      {children}
    </QuestionnaireContext.Provider>
  );
};
