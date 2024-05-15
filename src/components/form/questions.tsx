import React, { useState } from 'react';

interface Option {
  option: string;
  text: string;
}

interface QuestionProps {
  question: string;
  options: Option[];
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  onNext,
  onPrev,
  isFirst,
  isLast,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className=" h-auto px-3 py-5">
        {options.map((option: Option) => (
          <div
            key={option.option}
            className={`rounded p-2 m-2 text-left text-xl font-aauxlight option border ${selectedOption === option.option ? 'selected bg-red-200  border-white  text-white' : ' border-red-200 '}`}
            onClick={() => handleOptionSelect(option.option)}
          >
            <input
              type="radio"
              id={option.option}
              className='hidden mb-4'
              name="options"
              value={option.option}
              checked={selectedOption === option.option}
              onChange={() => handleOptionSelect(option.option)}
            />
            <label htmlFor={option.option} className=''>{option.text}</label>
          </div>
        ))}
      </div>
      <div className="flex">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`mr-4 px-4 py-2 rounded ${isFirst ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 text-gray'
            }`}
        >
          Retour
        </button>
        <button
          onClick={onNext}
          disabled={isLast || !selectedOption}
          className={`px-4 py-2 rounded ${isLast || !selectedOption ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-200 text-white'
            }`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Question;
