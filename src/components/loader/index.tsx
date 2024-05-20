import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="animate-spin h-12 w-12 text-greenWedding"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10.002h2zm2 5.291A7.96 7.96 0 014 12H2c0 2.21.895 4.21 2.343 5.657l1.414-1.366z"
        ></path>
      </svg>
    </div>
  );
};

export default Loader;
