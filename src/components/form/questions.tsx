import React, { useState, useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-2xl font-bold mb-4 mx-1 text-center">{question}</h2>
      <div className="h-auto px-3 py-5">
        {options.map((option: Option) => (
          <div
            key={option.option}
            className={`relative shadow-sm rounded p-2.5 m-2 text-left text-xl font-aauxlight option cursor-pointer ${selectedOptions.includes(option.option) ? 'selected bg-[#F5F5F5] ' : 'bg-[#F0E0D2] '}`}
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
            {selectedOptions.includes(option.option) && (
              <CheckCircleIcon className="absolute bottom-14 -right-2.5 text-[#448B71] mt-1 mr-1" />
            )}
            <p id={option.option} className={`w-full h-full cursor-pointer ${selectedOptions.includes(option.option) ? "text" : ""}`}>{option.text}</p>
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
              className={`px-4 py-2 rounded ${isLast || selectedOptions.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#448B71] text-white'}`}
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
            <button onClick={calculateSuccessRate} className="mt-4 px-4 py-2 bg-[#448B71] text-white rounded">
              Valider les réponses
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Question;
