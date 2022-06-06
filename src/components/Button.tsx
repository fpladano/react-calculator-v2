import React from 'react';

interface Props {
  value: number | string;
  type: string;
  onButtonClick: (value: string | number, type: string) => void;
}

function Button({ value, type, onButtonClick }: Props) {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onButtonClick(value, type);
  };

  return (
    <button
      className={`flex items-center justify-center p-3 overflow-hidden font-bold text-white transition-all duration-500 ease-out active:animate-bounce bg-gray-600 rounded-md shadow-sm text-md hover:bg-gray-400 ${
        value === '+' && 'row-start-5 row-end-7 col-start-4 col-end-5'
      }`}
      onClick={onClickHandler}
    >
      {value}
    </button>
  );
}

export default Button;
