import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: { option: string; text: string; }[];
}

interface QuestionsContextType {
  questions: Question[];
  addQuestion: (question: Question) => void;
  removeQuestion: (questionId: number) => void;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error('useQuestions must be used within a QuestionsProvider');
  }
  return context;
};

export const QuestionsProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = (question: Question) => {
    setQuestions(prevQuestions => [...prevQuestions, question]);
  };

  const removeQuestion = (questionId: number) => {
    setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== questionId));
  };

  return (
    <QuestionsContext.Provider value={{ questions, addQuestion, removeQuestion }}>
      {children}
    </QuestionsContext.Provider>
  );
};
