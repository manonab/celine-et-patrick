import React, { useState, useEffect } from 'react';

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
  onAnswerSelected: (selectedOptions: string[]) => void;
  canBeValidated: boolean;
  calculateSuccessRate: () => void;
  initialSelectedOptions?: string[];
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  onNext,
  onPrev,
  isFirst,
  isLast,
  onAnswerSelected,
  canBeValidated,
  calculateSuccessRate,
  initialSelectedOptions = []
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(initialSelectedOptions);

  useEffect(() => {
    setSelectedOptions(initialSelectedOptions);
  }, [initialSelectedOptions]);

  const handleOptionSelect = (option: string) => {
    let updatedOptions;
    if (selectedOptions.includes(option)) {
      updatedOptions = selectedOptions.filter(opt => opt !== option);
    } else {
      updatedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(updatedOptions);
    onAnswerSelected(updatedOptions);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className="h-auto px-3 py-5">
        {options.map((option: Option) => (
          <div
            key={option.option}
            className={`rounded p-2 m-2 text-left text-xl font-aauxlight option border cursor-pointer ${selectedOptions.includes(option.option) ? 'selected bg-red-200 border-white text-white' : 'border-red-200'}`}
            onClick={() => handleOptionSelect(option.option)}
          >
            <input
              type="checkbox"
              id={option.option}
              className='hidden'
              name="options"
              value={option.option}
              checked={selectedOptions.includes(option.option)}
              readOnly
            />
            <p id={option.option} className='w-full h-full cursor-pointer'>{option.text}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        {!canBeValidated ?
          <div>
            <button
              onClick={onPrev}
              disabled={isFirst}
              className={`mr-4 px-4 py-2 rounded ${isFirst ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 text-gray'}`}
            >
              Retour
            </button>
            <button
              onClick={onNext}
              disabled={isLast || selectedOptions.length === 0}
              className={`px-4 py-2 rounded ${isLast || selectedOptions.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-200 text-gray'}`}
            >
              Suivant
            </button>
          </div>
          :
          <div>
            <button
              onClick={onPrev}
              disabled={isFirst}
              className={`mr-4 px-4 py-2 rounded ${isFirst ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 text-gray'}`}
            >
              Retour
            </button>
            <button onClick={calculateSuccessRate} className="mt-4 px-4 py-2 bg-red-200 text-white rounded">
              Valider les réponses
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Question;
