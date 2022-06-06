import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function CalculatorContainer({ children }: Props) {
  return (
    <div className="bg-gray-800 rounded-md shadow-lg p-4 w-[350px]">
      {children}
    </div>
  );
}

export default CalculatorContainer;
