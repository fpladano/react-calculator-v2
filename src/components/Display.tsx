import React from 'react';

interface Props {
  display: { value: string; isResult: boolean };
}

function Display({ display }: Props) {
  return (
    <div className="flex justify-end w-full p-4 mb-4 text-4xl bg-white rounded-md">
      <p className="w-auto truncate">{display.value}</p>
    </div>
  );
}

export default Display;
